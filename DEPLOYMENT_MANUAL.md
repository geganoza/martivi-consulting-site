# MARTIVI CONSULTING - Dual Deployment Manual

## Overview
- **Static Site**: Fast main website (root domain)
- **Node.js API**: Chat API backend (subdirectory /api)

## File Structure
```
project/
├── deployments/
│   ├── static-site/    ← Upload to domain root
│   └── nodejs-api/     ← Upload to /api subdirectory
```

---

## 🔧 BUILDING FOR DEPLOYMENT

### Step 1: Build Static Site

```bash
# Configure for static export
cp next.config.static.ts next.config.ts

# Disable API route
mv app/api/chat/route.ts app/api/chat/route.ts.disabled

# Build static site
npm run build

# Copy to deployment folder
rm -rf deployments/static-site/*
cp -r out/* deployments/static-site/
```

### Step 2: Build Node.js API

```bash
# Configure for Node.js
cp next.config.nodejs.ts next.config.ts

# Enable API route
mv app/api/chat/route.ts.disabled app/api/chat/route.ts

# Build Node.js version
npm run build

# Copy to deployment folder
rm -rf deployments/nodejs-api/*
cp -r .next deployments/nodejs-api/
cp server.js package.json .env.local deployments/nodejs-api/
cp -r public app components locales deployments/nodejs-api/
```

---

## 📤 DEPLOYING TO SERVER

### Deploy Static Site
```bash
# Upload deployments/static-site/* to:
# /home/bebias/martiviconsulting.com/

# Via rsync (if you have SSH):
rsync -av deployments/static-site/ user@server:/home/bebias/martiviconsulting.com/

# Via cPanel File Manager:
# 1. Zip deployments/static-site folder
# 2. Upload to domain root
# 3. Extract files
```

### Deploy Node.js API
```bash
# Upload deployments/nodejs-api/* to:
# /home/bebias/martiviconsulting.com/api/

# Via rsync (if you have SSH):
rsync -av deployments/nodejs-api/ user@server:/home/bebias/martiviconsulting.com/api/

# Via cPanel:
# 1. Zip deployments/nodejs-api folder
# 2. Upload to /api directory
# 3. Extract files
# 4. Create/Update Node.js App:
#    - Application Root: /home/bebias/martiviconsulting.com/api
#    - Startup File: server.js
#    - Application URL: /api
# 5. Add Environment Variable:
#    OPENAI_API_KEY=your_key_here
# 6. Restart Node.js App
```

---

## 🛠️ QUICK DEPLOYMENT SCRIPT

Create this script for faster deployment:

```bash
#!/bin/bash
# deploy.sh

echo "🔨 Building Static Site..."
# Static site config
cat > next.config.ts << 'EOF'
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
};
export default nextConfig;
EOF

# Disable API
mv app/api/chat/route.ts app/api/chat/route.ts.disabled 2>/dev/null || true

# Build static
npm run build
rm -rf deployments/static-site/*
cp -r out/* deployments/static-site/

echo "🔨 Building Node.js API..."
# Node.js config
cat > next.config.ts << 'EOF'
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
};
export default nextConfig;
EOF

# Enable API
mv app/api/chat/route.ts.disabled app/api/chat/route.ts 2>/dev/null || true

# Build Node.js
npm run build
rm -rf deployments/nodejs-api/*
cp -r .next deployments/nodejs-api/
cp server.js package.json .env.local deployments/nodejs-api/
cp -r public app components locales deployments/nodejs-api/

echo "✅ Both builds ready in deployments/ folder"
echo "📤 Upload static-site/* to domain root"
echo "📤 Upload nodejs-api/* to /api directory"
```

Make executable:
```bash
chmod +x deploy.sh
```

Run:
```bash
./deploy.sh
```

---

## 🚨 TROUBLESHOOTING

### Static Site Issues
- **Missing styling**: Check if files uploaded to correct root directory
- **404 errors**: Ensure index.html is in domain root

### Node.js API Issues
- **API not responding**: Check Node.js app is running in cPanel
- **Chat not working**: Verify environment variable OPENAI_API_KEY is set
- **404 on /api/chat**: Check Application URL is set to /api

### After Code Changes
1. Run deployment script: `./deploy.sh`
2. Upload both folders
3. Restart Node.js app in cPanel

---

## 📁 CURRENT CONFIG FILES

**Static Config (next.config.static.ts):**
```typescript
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
};
export default nextConfig;
```

**Node.js Config (next.config.nodejs.ts):**
```typescript
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
};
export default nextConfig;
```

This manual gives you complete control over your dual deployment setup!