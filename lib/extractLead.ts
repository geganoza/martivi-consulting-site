// Tiny helper that tries to pull name/email if they appear in the bot reply text
import type { Lead } from "./types";

export function extractLead(text: string): Lead | null {
  const emailMatch = text.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);
  if (!emailMatch) return null;
  // Try to guess a name if present after 'Name:' label
  const nameMatch = text.match(/(?:Name|სახელი)\s*[:：]\s*([^\n]+)/i);
  return {
    email: emailMatch[0],
    name: nameMatch ? nameMatch[1].trim() : undefined
  };
}
