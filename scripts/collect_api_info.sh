#!/bin/bash
# collect_api_info.sh
# Diagnostic collector for martiviconsulting.com/api
# Usage (on the server, run from the application root, e.g. /home/bebias/martiviconsulting.com/api):
#   1) Make executable (once): chmod +x scripts/collect_api_info.sh
#   2) Run for info only:
#        ./scripts/collect_api_info.sh
#   3) Run and attempt to build (if you want the script to run npm & build):
#        ./scripts/collect_api_info.sh --build
#   4) Run and attempt to start the app (non-blocking, for diagnostics):
#        ./scripts/collect_api_info.sh --start
#
# Note: the script will NOT overwrite or delete files. It prints masked .env.local (OPENAI_API_KEY redacted).
# It tries to use the nodevenv npm binary if available (typical on cPanel). If npm is not available in the shell,
# please use the cPanel "Run NPM Install" UI and then re-run this script with --build.

set -u
BUILD=0
START=0
for arg in "$@"; do
  case "$arg" in
    --build) BUILD=1 ;;
    --start) START=1 ;;
    *) ;;
  esac
done

echo
echo "==== COLLECT DIAGNOSTICS: $(date) ===="
echo

echo "PWD: $(pwd)"
echo "USER: $(whoami)"
echo

echo "Node in PATH:"
which node 2>/dev/null || echo "node not in PATH"
node -v 2>/dev/null || echo "node version unavailable"

echo
echo "Find npm in nodevenv (if present):"
NPM_BIN=$(find /home/"$(whoami)"/nodevenv -maxdepth 6 -type f -name npm -print 2>/dev/null | head -n 1 || true)
echo "Detected npm: ${NPM_BIN:-<none>}"
if [ -n "${NPM_BIN:-}" ]; then
  "$NPM_BIN" -v 2>/dev/null || echo "npm exists but failed to show version"
fi

echo
echo "---- app root listing ----"
ls -la

echo
echo "---- .next / server checks ----"
if [ -d .next ]; then
  echo ".next exists:"
  ls -la .next | sed -n '1,120p'
  echo
  if [ -d .next/server ]; then
    echo ".next/server contents:"
    ls -la .next/server | sed -n '1,120p'
  else
    echo ".next/server missing"
  fi
  echo
  if [ -d .next/server/app ]; then
    echo ".next/server/app exists"
  else
    echo ".next/server/app missing"
  fi
else
  echo ".next missing"
fi

echo
echo "---- package.json (first 200 lines) ----"
if [ -f package.json ]; then
  sed -n '1,200p' package.json
else
  echo "package.json missing"
fi

echo
echo "---- server.js (first 120 lines) ----"
if [ -f server.js ]; then
  sed -n '1,120p' server.js
else
  echo "server.js missing"
fi

echo
echo "---- .env.local (masked) ----"
if [ -f .env.local ]; then
  # Mask values of common env keys (OPENAI_API_KEY)
  sed -E 's/^(OPENAI_API_KEY)=.*/\1=[REDACTED]/I' .env.local | sed -n '1,200p'
else
  echo ".env.local missing"
fi

echo
echo "---- stderr.log (last 200 lines) ----"
if [ -f stderr.log ]; then
  tail -n 200 stderr.log
else
  echo "stderr.log missing"
fi

echo
echo "---- node_modules checks (show if next/openai exist in nodevenv or local node_modules) ----"
if [ -d node_modules ]; then
  ls -la node_modules | sed -n '1,80p'
else
  echo "node_modules directory not present in app root (may be using nodevenv global modules)"
fi

# If nodevenv npm available, list package presence there too
if [ -n "${NPM_BIN:-}" ]; then
  NV_ROOT=$(dirname "$(dirname "$NPM_BIN")")/lib/node_modules
  echo "Checking nodevenv modules root: ${NV_ROOT}"
  [ -d "$NV_ROOT/next" ] && echo "next installed in nodevenv" || echo "next not found in nodevenv"
  [ -d "$NV_ROOT/openai" ] && echo "openai present in nodevenv" || echo "openai not found in nodevenv"
fi

if [ "$BUILD" -eq 1 ]; then
  echo
  echo "---- BUILD STEP REQUESTED ----"
  if [ -n "${NPM_BIN:-}" ]; then
    echo "Running: $NPM_BIN ci --production || $NPM_BIN install --production"
    # Install production deps
    $NPM_BIN ci --production || $NPM_BIN install --production
    echo "Running: $NPM_BIN run build"
    $NPM_BIN run build
  else
    echo "npm not found in nodevenv; please use cPanel 'Run NPM Install' UI and then re-run this script with --build"
  fi
fi

if [ "$START" -eq 1 ]; then
  echo
  echo "---- START STEP REQUESTED (non-blocking) ----"
  echo "Starting: NODE_ENV=production PORT=3000 node server.js > startup.log 2>&1 &"
  NODE_ENV=production PORT=3000 node server.js > startup.log 2>&1 &
  sleep 2
  echo "---- startup.log (tail 200) ----"
  tail -n 200 startup.log 2>/dev/null || echo "startup.log missing"
fi

echo
echo "==== END DIAGNOSTICS ===="
echo
