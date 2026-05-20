export type CrmRouteId =
  | "dashboard"
  | "queue"
  | "voice-call"
  | "ticket-management";

export type SidebarItem = {
  badge?: string | null;
  iconKey: "dashboard" | "queue" | "ticket" | "customer" | "guide" | "template";
  id: CrmRouteId | "guide" | "template";
  label: string;
};

export type KpiCard = {
  accent: string;
  badge: string;
  label: string;
  title: string;
  value: string;
};

export type TicketRow = {
  category: string;
  customer: string;
  id: string;
  priority: "Kritis" | "Tinggi" | "Sedang";
  sla: string;
  status: "Open" | "Pending";
};
