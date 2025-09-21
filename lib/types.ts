export type ChatMessage = { role: "system" | "user" | "assistant"; content: string };

export type Lead = {
  name?: string;
  email?: string;
  company?: string;
  budget?: string;
  timeline?: string;
  country?: string;
};
