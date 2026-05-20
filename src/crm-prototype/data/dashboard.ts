import type { KpiCard, TicketRow } from "../types/crm";

export const dashboardKpis: KpiCard[] = [
  { title: "Telepon", value: "7", label: "Menunggu", badge: "Live", accent: "#015570" },
  { title: "Live Chat", value: "3", label: "Menunggu", badge: "Live", accent: "#16A341" },
  { title: "Video Call", value: "0", label: "Antrian", badge: "Off", accent: "#FAA866" },
];

export const activeTickets: TicketRow[] = [
  { id: "#TK-8021", customer: "Budi Santoso", category: "Klaim Asuransi", priority: "Kritis", status: "Open", sla: "Sisa 2 Jam" },
  { id: "#TK-8020", customer: "Siti Aminah", category: "Perubahan Polis", priority: "Tinggi", status: "Pending", sla: "Sisa 2 Hari" },
  { id: "#TK-8019", customer: "Andi Pratama", category: "Informasi Premi", priority: "Sedang", status: "Open", sla: "SLA : OVERDUE 1 JAM" },
  { id: "#TK-8018", customer: "Dewi Lestari", category: "Keluhan Layanan", priority: "Tinggi", status: "Pending", sla: "Sisa 2 Jam" },
  { id: "#TK-8017", customer: "Hendra Gunawan", category: "Pembatalan", priority: "Sedang", status: "Open", sla: "Sisa 2 Hari" },
];

export const activityByRange = {
  Today: [20, 50, 14, 30, 14, 42, 20, 28, 20, 36, 50, 16],
  Weekly: [32, 68, 28, 52, 24, 64, 38, 48, 36, 58, 72, 30],
  Monthly: [50, 90, 35, 60, 35, 80, 50, 60, 50, 70, 90, 40],
};

export const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
