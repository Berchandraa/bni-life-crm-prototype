import type { CrmRouteId } from "../types/crm";

export const crmRoutes: Array<{ id: CrmRouteId; title: string }> = [
  { id: "dashboard", title: "Home Dashboard" },
  { id: "queue", title: "Antrian" },
  { id: "voice-call", title: "Voice Call Workspace" },
  { id: "ticket-management", title: "Ticket Management" },
];
