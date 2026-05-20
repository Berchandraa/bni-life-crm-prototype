import type { SidebarItem } from "../types/crm";

export const workspaceItems: SidebarItem[] = [
  { id: "dashboard", label: "Dashboard", iconKey: "dashboard", badge: null },
  { id: "queue", label: "Antrian", iconKey: "queue", badge: "3" },
  { id: "ticket-management", label: "Tiket Saya", iconKey: "ticket", badge: "1" },
  { id: "voice-call", label: "Nasabah", iconKey: "customer", badge: null },
];

export const helpItems: SidebarItem[] = [
  { id: "guide", label: "Panduan", iconKey: "guide", badge: null },
  { id: "template", label: "Template Respons", iconKey: "template", badge: null },
];
