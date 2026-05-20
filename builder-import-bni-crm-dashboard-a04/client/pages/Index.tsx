import { useState } from "react";
import { Link } from "react-router-dom";

// ─── Icon SVGs ─────────────────────────────────────────────────────────────

const IconHome = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M7.51667 2.36667L3.025 5.86667C2.275 6.45 1.66667 7.69167 1.66667 8.63334V14.8083C1.66667 16.7417 3.24167 18.325 5.175 18.325H14.825C16.7583 18.325 18.3333 16.7417 18.3333 14.8167V8.75C18.3333 7.74167 17.6583 6.45 16.8333 5.875L11.6833 2.26667C10.5167 1.45 8.64167 1.49167 7.51667 2.36667Z" stroke="#F47920" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 14.9917V12.4917" stroke="#F47920" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconPeople = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M15 5.96667C14.95 5.95834 14.8917 5.95834 14.8417 5.96667C13.6917 5.92501 12.775 4.98334 12.775 3.81667C12.775 2.62501 13.7333 1.66667 14.925 1.66667C16.1167 1.66667 17.075 2.63334 17.075 3.81667C17.0667 4.98334 16.15 5.92501 15 5.96667Z" stroke="#7C7C7C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14.1417 12.0334C15.2833 12.225 16.5417 12.025 17.425 11.4334C18.6 10.65 18.6 9.36669 17.425 8.58335C16.5333 7.99169 15.2583 7.79168 14.1167 7.99168" stroke="#7C7C7C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.975 5.96667C5.025 5.95834 5.08333 5.95834 5.13333 5.96667C6.28333 5.92501 7.2 4.98334 7.2 3.81667C7.2 2.62501 6.24167 1.66667 5.05 1.66667C3.85833 1.66667 2.9 2.63334 2.9 3.81667C2.90833 4.98334 3.825 5.92501 4.975 5.96667Z" stroke="#7C7C7C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.83333 12.0334C4.69167 12.225 3.43333 12.025 2.55 11.4334C1.375 10.65 1.375 9.36669 2.55 8.58335C3.44167 7.99169 4.71667 7.79168 5.85833 7.99168" stroke="#7C7C7C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 12.1917C9.95 12.1833 9.89167 12.1833 9.84167 12.1917C8.69167 12.15 7.775 11.2083 7.775 10.0417C7.775 8.85 8.73333 7.89166 9.925 7.89166C11.1167 7.89166 12.075 8.85833 12.075 10.0417C12.0667 11.2083 11.15 12.1583 10 12.1917Z" stroke="#7C7C7C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.575 14.8167C6.4 15.6 6.4 16.8833 7.575 17.6667C8.90834 18.5583 11.0917 18.5583 12.425 17.6667C13.6 16.8833 13.6 15.6 12.425 14.8167C11.1 13.9333 8.90834 13.9333 7.575 14.8167Z" stroke="#7C7C7C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconTicket = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M16.25 10.4167C16.25 9.26668 17.1833 8.33334 18.3333 8.33334V7.50001C18.3333 4.16668 17.5 3.33334 14.1667 3.33334H5.83333C2.5 3.33334 1.66667 4.16668 1.66667 7.50001V7.91668C2.81667 7.91668 3.75 8.85001 3.75 10C3.75 11.15 2.81667 12.0833 1.66667 12.0833V12.5C1.66667 15.8333 2.5 16.6667 5.83333 16.6667H14.1667C17.5 16.6667 18.3333 15.8333 18.3333 12.5C17.1833 12.5 16.25 11.5667 16.25 10.4167Z" stroke="#7C7C7C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.33333 3.33334L8.33333 16.6667" stroke="#7C7C7C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="5 5"/>
  </svg>
);

const IconTagUser = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M15 15.7167H14.3667C13.7 15.7167 13.0667 15.975 12.6 16.4417L11.175 17.85C10.525 18.4917 9.46668 18.4917 8.81668 17.85L7.39166 16.4417C6.925 15.975 6.28333 15.7167 5.625 15.7167H5C3.61667 15.7167 2.5 14.6083 2.5 13.2417V4.14166C2.5 2.77499 3.61667 1.66666 5 1.66666H15C16.3833 1.66666 17.5 2.77499 17.5 4.14166V13.2333C17.5 14.6 16.3833 15.7167 15 15.7167Z" stroke="#7C7C7C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.0583 7.45834C10.025 7.45834 9.97499 7.45834 9.93332 7.45834C9.05832 7.42501 8.36665 6.71668 8.36665 5.83334C8.36665 4.93334 9.09166 4.20834 9.99166 4.20834C10.8917 4.20834 11.6167 4.94168 11.6167 5.83334C11.625 6.71668 10.9333 7.43334 10.0583 7.45834Z" stroke="#7C7C7C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.70834 9.96667C6.6 10.7083 6.6 11.9167 7.70834 12.6583C8.96667 13.5 11.0333 13.5 12.2917 12.6583C13.4 11.9167 13.4 10.7083 12.2917 9.96667C11.0333 9.13334 8.975 9.13334 7.70834 9.96667Z" stroke="#7C7C7C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconDocument = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M17.5 5.83332V14.1667C17.5 16.6667 16.25 18.3333 13.3333 18.3333H6.66667C3.75 18.3333 2.5 16.6667 2.5 14.1667V5.83332C2.5 3.33332 3.75 1.66666 6.66667 1.66666H13.3333C16.25 1.66666 17.5 3.33332 17.5 5.83332Z" stroke="#7C7C7C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.0833 3.75V5.41667C12.0833 6.33333 12.8333 7.08333 13.75 7.08333H15.4167" stroke="#7C7C7C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6.66667 10.8333H10" stroke="#989898" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6.66667 14.1667H13.3333" stroke="#989898" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconNote = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M18.05 8.69999L17.2333 12.1833C16.5333 15.1917 15.15 16.4083 12.55 16.1583C12.1333 16.125 11.6833 16.05 11.2 15.9333L9.8 15.6C6.325 14.775 5.25 13.0583 6.06667 9.57499L6.88333 6.08332C7.05 5.37499 7.25 4.75832 7.5 4.24999C8.475 2.23332 10.1333 1.69165 12.9167 2.34999L14.3083 2.67499C17.8 3.49165 18.8667 5.21665 18.05 8.69999Z" stroke="#7C7C7C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.55 16.1583C12.0333 16.5083 11.3833 16.8 10.5917 17.0583L9.275 17.4917C5.96667 18.5583 4.225 17.6667 3.15 14.3583L2.08333 11.0667C1.01666 7.75833 1.9 6.00833 5.20833 4.94167L6.525 4.50833C6.86666 4.4 7.19166 4.30833 7.5 4.25C7.25 4.75833 7.05 5.375 6.88333 6.08333L6.06667 9.575C5.25 13.0583 6.325 14.775 9.8 15.6L11.2 15.9333C11.6833 16.05 12.1333 16.125 12.55 16.1583Z" stroke="#7C7C7C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconSearch = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M9.58333 17.5C13.9556 17.5 17.5 13.9556 17.5 9.58333C17.5 5.2111 13.9556 1.66667 9.58333 1.66667C5.2111 1.66667 1.66667 5.2111 1.66667 9.58333C1.66667 13.9556 5.2111 17.5 9.58333 17.5Z" stroke="#7C7C7C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18.3333 18.3333L16.6667 16.6667" stroke="#7C7C7C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconBell = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M10.0166 2.425C7.25828 2.425 5.01662 4.66667 5.01662 7.425V9.83333C5.01662 10.3417 4.79995 11.1167 4.54162 11.55L3.58328 13.1417C2.99162 14.125 3.39995 15.2167 4.48328 15.5833C8.07495 16.7833 11.95 16.7833 15.5416 15.5833C16.55 15.25 16.9916 14.0583 16.4416 13.1417L15.4833 11.55C15.2333 11.1167 15.0166 10.3417 15.0166 9.83333V7.425C15.0166 4.675 12.7666 2.425 10.0166 2.425Z" stroke="#7C7C7C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
    <path d="M11.5583 2.66666C11.3 2.59166 11.0333 2.53333 10.7583 2.5C9.95831 2.4 9.19164 2.45833 8.47498 2.66666C8.71664 2.05 9.31664 1.61666 10.0166 1.61666C10.7166 1.61666 11.3166 2.05 11.5583 2.66666Z" stroke="#7C7C7C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.5167 15.8833C12.5167 17.2583 11.3917 18.3833 10.0167 18.3833C9.33339 18.3833 8.70006 18.1 8.25006 17.65C7.80006 17.2 7.51672 16.5667 7.51672 15.8833" stroke="#7C7C7C" strokeWidth="1.5" strokeMiterlimit="10"/>
  </svg>
);

const IconSidebar = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M16.4775 11.25V6.75C16.4775 3 14.9775 1.5 11.2275 1.5H6.72749C2.97749 1.5 1.47749 3 1.47749 6.75V11.25C1.47749 15 2.97749 16.5 6.72749 16.5H11.2275C14.9775 16.5 16.4775 15 16.4775 11.25Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.97749 1.5V16.5" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.2275 7.08L9.3075 9L11.2275 10.92" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconLogout = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M8.9 7.56C9.21 3.96 11.06 2.49 15.11 2.49H15.24C19.71 2.49 21.5 4.28 21.5 8.75V15.27C21.5 19.74 19.71 21.53 15.24 21.53H15.11C11.09 21.53 9.24 20.08 8.91 16.54" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 12H14.88" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.65 8.65L16 12L12.65 15.35" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconArrowDown = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
    <path d="M16.6 7.45834L11.1667 12.8917C10.525 13.5333 9.47502 13.5333 8.83336 12.8917L3.40002 7.45834" stroke="#7C7C7C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconArrowUpDown = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
    <path d="M5 11.6667V4.33337M2.66666 6.66671L5 4.33337L7.33332 6.66671M11 4.33337V11.6667M8.66666 9.33337L11 11.6667L13.3333 9.33337" stroke="#656565" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconCall = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z" stroke="#016986" strokeWidth="1.5" strokeMiterlimit="10"/>
  </svg>
);

const IconMessage = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z" stroke="#16A341" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15.9965 11H16.0054" stroke="#16A341" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.9955 11H12.0045" stroke="#16A341" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.99451 11H8.00349" stroke="#16A341" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconVideo = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M12.53 20.42H6.21C3.05 20.42 2 18.32 2 16.21V7.79C2 4.63 3.05 3.58 6.21 3.58H12.53C15.69 3.58 16.74 4.63 16.74 7.79V16.21C16.74 19.37 15.68 20.42 12.53 20.42Z" stroke="#D4640F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19.52 17.1L16.74 15.15V8.84L19.52 6.89C20.88 5.94 22 6.52 22 8.19V15.81C22 17.48 20.88 18.06 19.52 17.1Z" stroke="#D4640F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.5 11C12.3284 11 13 10.3284 13 9.5C13 8.67157 12.3284 8 11.5 8C10.6716 8 10 8.67157 10 9.5C10 10.3284 10.6716 11 11.5 11Z" stroke="#D4640F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// ─── Sub-components ─────────────────────────────────────────────────────────

interface BadgeProps {
  color: "success" | "error" | "warning" | "info" | "gray";
  dot?: boolean;
  children: React.ReactNode;
}

function StatusBadge({ color, dot = true, children }: BadgeProps) {
  const configs = {
    success: { bg: "bg-[#F0FDF4]", text: "text-[#22C554]", dotColor: "#22C554" },
    error: { bg: "bg-[#FEF2F2]", text: "text-[#EF4444]", dotColor: "#EF4444" },
    warning: { bg: "bg-[#FFF3E8]", text: "text-[#D4640F]", dotColor: "#D4640F" },
    info: { bg: "bg-[#EFF6FF]", text: "text-[#3B8DF6]", dotColor: "#3B8DF6" },
    gray: { bg: "bg-[#FAFAFA]", text: "text-[#464646]", dotColor: "#989898" },
  };
  const c = configs[color];
  return (
    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium ${c.bg} ${c.text} border border-[#DCDCDC]/40`}>
      {dot && (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" className="shrink-0">
          <circle cx="4" cy="4" r="3" fill={c.dotColor} />
        </svg>
      )}
      {children}
    </span>
  );
}

// ─── Donut Chart (Konteks Nasabah) ────────────────────────────────────────

interface DonutData {
  label: string;
  value: number;
  color: string;
}

function DonutChart({ data }: { data: DonutData[] }) {
  const total = data.reduce((sum, d) => sum + d.value, 0);
  let currentAngle = -90;

  return (
    <svg width="140" height="140" viewBox="0 0 140 140" className="shrink-0">
      {data.map((item, idx) => {
        const percentage = item.value / total;
        const circumference = 2 * Math.PI * 45;
        const arcLength = circumference * percentage;
        const gap = 2;
        
        const startAngle = currentAngle;
        const endAngle = startAngle + (percentage * 360) - (gap / 45) * (180 / Math.PI);
        
        const x1 = 70 + 45 * Math.cos((startAngle * Math.PI) / 180);
        const y1 = 70 + 45 * Math.sin((startAngle * Math.PI) / 180);
        const x2 = 70 + 45 * Math.cos((endAngle * Math.PI) / 180);
        const y2 = 70 + 45 * Math.sin((endAngle * Math.PI) / 180);

        const largeArc = percentage > 0.5 ? 1 : 0;
        const pathData = `M ${x1} ${y1} A 45 45 0 ${largeArc} 1 ${x2} ${y2}`;

        currentAngle = endAngle + (gap / 45) * (180 / Math.PI);

        return (
          <path
            key={idx}
            d={pathData}
            stroke={item.color}
            strokeWidth="16"
            fill="none"
            strokeLinecap="round"
          />
        );
      })}
      {/* Center circle for donut effect */}
      <circle cx="70" cy="70" r="28" fill="white" />
    </svg>
  );
}

// ─── Data by Period ───────────────────────────────────────────────────────

interface ChartData {
  today: any;
  weekly: any;
  monthly: any;
}

const performaData: ChartData = {
  today: { tiketAktif: 18, selesai: 24, ratarata: "5m 23d", kepuasan: 4.7 },
  weekly: { tiketAktif: 42, selesai: 58, ratarata: "6m 12d", kepuasan: 4.5 },
  monthly: { tiketAktif: 128, selesai: 210, ratarata: "7m 5d", kepuasan: 4.3 },
};

const konteksData: ChartData = {
  today: [
    { label: "Klaim Aktif", value: 5, color: "#D4640F" },
    { label: "Polis Jatuh Tempo", value: 8, color: "#F78C3D" },
    { label: "Nasabah di Layani", value: 12, color: "#8D4009" },
  ],
  weekly: [
    { label: "Klaim Aktif", value: 12, color: "#D4640F" },
    { label: "Polis Jatuh Tempo", value: 18, color: "#F78C3D" },
    { label: "Nasabah di Layani", value: 35, color: "#8D4009" },
  ],
  monthly: [
    { label: "Klaim Aktif", value: 42, color: "#D4640F" },
    { label: "Polis Jatuh Tempo", value: 68, color: "#F78C3D" },
    { label: "Nasabah di Layani", value: 125, color: "#8D4009" },
  ],
};

const barChartData: ChartData = {
  today: [
    { month: "Jan", pct: 74.7 },
    { month: "Feb", pct: 91.6 },
    { month: "Mar", pct: 57.9 },
    { month: "Apr", pct: 78.9 },
    { month: "May", pct: 57.9 },
    { month: "Jun", pct: 87.4 },
    { month: "Jul", pct: 74.7 },
    { month: "Aug", pct: 78.9 },
    { month: "Sep", pct: 74.7 },
    { month: "Oct", pct: 83.2 },
    { month: "Nov", pct: 91.6 },
    { month: "Dec", pct: 70.5 },
  ],
  weekly: [
    { month: "W1", pct: 65.3 },
    { month: "W2", pct: 72.8 },
    { month: "W3", pct: 68.9 },
    { month: "W4", pct: 81.5 },
    { month: "W5", pct: 59.2 },
    { month: "W6", pct: 75.4 },
    { month: "W7", pct: 88.1 },
    { month: "W8", pct: 64.7 },
    { month: "W9", pct: 79.3 },
    { month: "W10", pct: 72.5 },
    { month: "W11", pct: 85.6 },
    { month: "W12", pct: 73.9 },
  ],
  monthly: [
    { month: "Jan", pct: 62.1 },
    { month: "Feb", pct: 58.9 },
    { month: "Mar", pct: 71.4 },
    { month: "Apr", pct: 85.3 },
    { month: "May", pct: 79.7 },
    { month: "Jun", pct: 68.2 },
    { month: "Jul", pct: 92.5 },
    { month: "Aug", pct: 75.8 },
    { month: "Sep", pct: 81.3 },
    { month: "Oct", pct: 63.9 },
    { month: "Nov", pct: 88.4 },
    { month: "Dec", pct: 76.2 },
  ],
};

// ─── Bar Chart with hover ──────────────────────────────────────────────────

function BarChart({ data }: { data: any[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="relative w-full">
      <div className="flex items-end gap-0 w-full" style={{ height: 200 }}>
        {/* Y-axis labels */}
        <div className="flex flex-col justify-between items-end pr-2 pb-6 shrink-0" style={{ height: 200, width: 36 }}>
          {["100", "50", "35", "20", "10", "0"].map((v) => (
            <span key={v} className="text-[11px] text-[#656565] font-normal leading-none">{v}</span>
          ))}
        </div>
        {/* Chart area */}
        <div className="flex-1 flex flex-col" style={{ height: 200 }}>
          {/* Grid lines */}
          <div className="flex-1 relative" style={{ paddingBottom: 24 }}>
            <div className="absolute inset-0 flex flex-col justify-between" style={{ paddingBottom: 0 }}>
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-full h-px bg-[#EFEFEF]" />
              ))}
            </div>
            {/* Bars */}
            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-around px-4" style={{ height: "calc(100%)" }}>
              {data.map((bar, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center gap-0 cursor-pointer transition-opacity"
                  style={{ height: "100%" }}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="flex-1 flex items-end w-full justify-center">
                    <div
                      className={`w-6 rounded-t-md transition-all xl:w-7 2xl:w-8 ${
                        hoveredIndex === idx ? "bg-[#F47920] shadow-lg" : "bg-[#FAA866] opacity-80 hover:opacity-100"
                      }`}
                      style={{ height: `${bar.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            {/* Tooltip */}
            {hoveredIndex !== null && (
              <div
                className="absolute -top-8 transform -translate-x-1/2 pointer-events-none"
                style={{ left: `calc(${(hoveredIndex + 0.5) / data.length * 100}%)` }}
              >
                <div className="bg-[#FAFAFA] rounded-lg px-3 py-1.5 shadow-md text-xs font-semibold text-[#292929] whitespace-nowrap">
                  {data[hoveredIndex].pct}%
                </div>
                <div className="flex justify-center">
                  <svg width="16" height="6" viewBox="0 0 16 6" fill="none" className="scale-100">
                    <path d="M14.0711 -2.51471C14.962 -2.51471 15.4081 -1.43757 14.7782 -0.807603L8.70711 5.26347C8.31658 5.654 7.68342 5.654 7.29289 5.26347L1.22183 -0.807603C0.591867 -1.43757 1.03803 -2.51471 1.92894 -2.51471L14.0711 -2.51471Z" fill="#FAFAFA"/>
                  </svg>
                </div>
              </div>
            )}
          </div>
          {/* X-axis labels */}
          <div className="flex justify-around px-4" style={{ height: 24 }}>
            {data.map((bar, idx) => (
              <span key={idx} className="text-[11px] text-[#656565] font-normal text-center w-6 xl:w-7 2xl:w-8 shrink-0">{bar.month}</span>
            ))}
          </div>
        </div>
      </div>
      {/* X-axis label */}
      <div className="text-center mt-1">
        <span className="text-[11px] text-[#656565] font-medium">Month</span>
      </div>
    </div>
  );
}

// ─── Pie Chart (Performa Agent) ─────────────────────────────────────────────

function PerformaAgentChart() {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" className="shrink-0">
      <path d="M120 60C120 93.1371 93.1371 120 60 120C26.8629 120 0 93.1371 0 60C0 26.8629 26.8629 0 60 0C93.1371 0 120 26.8629 120 60ZM30 60C30 76.5685 43.4315 90 60 90C76.5685 90 90 76.5685 90 60C90 43.4315 76.5685 30 60 30C43.4315 30 30 43.4315 30 60Z" fill="#257CEB"/>
      <path d="M60 0C72.6708 0 85.0163 4.0113 95.2671 11.459C105.518 18.9067 113.148 29.4084 117.063 41.459L88.5317 50.7295C86.574 44.7042 82.759 39.4533 77.6336 35.7295C72.5081 32.0056 66.3354 30 60 30V0Z" fill="#F47920"/>
      <path d="M117.063 41.459C120.483 51.9827 120.925 63.2471 118.342 74.0067C115.759 84.7663 110.251 94.602 102.426 102.426C94.602 110.251 84.7663 115.759 74.0067 118.342C63.2471 120.925 51.9828 120.483 41.459 117.063L50.7295 88.5317C55.9914 90.2414 61.6236 90.4627 67.0034 89.1711C72.3832 87.8795 77.301 85.1254 81.2132 81.2132C85.1254 77.301 87.8795 72.3832 89.1711 67.0034C90.4627 61.6236 90.2414 55.9914 88.5317 50.7295L117.063 41.459Z" fill="#16A341"/>
      <path d="M41.459 117.063C29.4084 113.148 18.9067 105.518 11.459 95.2671L35.7295 77.6336C39.4533 82.759 44.7042 86.574 50.7295 88.5317L41.459 117.063Z" fill="#016986"/>
    </svg>
  );
}

// ─── Ticket Table ───────────────────────────────────────────────────────────

const tickets = [
  { id: "#TK-8021", nasabah: "Budi Santoso",    kategori: "Klaim Asuransi",   prioritas: "Kritis",  sla: "Terlewat",     slaColor: "text-[#DC2626]", action: "Tangani", actionType: "primary" },
  { id: "#TK-8020", nasabah: "Siti Aminah",     kategori: "Perubahan Polis",  prioritas: "Tinggi",  sla: "15 menit",     slaColor: "text-[#D4640F]", action: "Tangani", actionType: "primary" },
  { id: "#TK-8019", nasabah: "Andi Pratama",    kategori: "Informasi Premi",  prioritas: "Sedang",  sla: "1 jam 20 menit", slaColor: "text-[#22C554]", action: "Tinjau",  actionType: "outlined" },
  { id: "#TK-8018", nasabah: "Dewi Lestari",    kategori: "Keluhan Layanan",  prioritas: "Tinggi",  sla: "25 menit",     slaColor: "text-[#D4640F]", action: "Tangani", actionType: "primary" },
  { id: "#TK-8017", nasabah: "Hendra Gunawan",  kategori: "Pembatalan",       prioritas: "Sedang",  sla: "2 jam",        slaColor: "text-[#22C554]", action: "Tinjau",  actionType: "outlined" },
];

function prioritasBadge(p: string) {
  if (p === "Kritis") return <StatusBadge color="error">{p}</StatusBadge>;
  if (p === "Tinggi") return <StatusBadge color="warning">{p}</StatusBadge>;
  return <StatusBadge color="info">{p}</StatusBadge>;
}

// ─── Sidebar ────────────────────────────────────────────────────────────────

function Sidebar({ collapsed, onToggle }: { collapsed: boolean; onToggle: () => void }) {
  return (
    <aside
      className={`flex flex-col justify-between rounded-3xl border border-[#DCDCDC] bg-[#FAFAFA] transition-all duration-300 shrink-0 ${collapsed ? "w-16" : "w-[263px]"}`}
      style={{ minHeight: "calc(100vh - 47px)" }}
    >
      <div className="flex flex-col gap-6 px-3.5 pt-0">
        {/* Logo + toggle */}
        <div className="flex items-center justify-between px-3.5 py-5">
          {!collapsed && (
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/999648adc32cbf733d630d36a8175f12ff6b935a?width=280"
              alt="BNI Life"
              className="h-[50px] w-auto object-contain"
            />
          )}
          <button
            onClick={onToggle}
            className="flex items-center justify-center p-1.5 rounded bg-white shadow-sm hover:shadow-md transition-shadow shrink-0"
          >
            <IconSidebar />
          </button>
        </div>

        {/* WORKSPACE */}
        <nav className="flex flex-col gap-0">
          {!collapsed && (
            <span className="px-5 pb-1 text-[11px] font-semibold text-[#989898] tracking-wider">WORKSPACE</span>
          )}
          <div className="flex flex-col gap-0 pb-5">
            {/* Dashboard - active */}
            <div className="px-0 py-0.5">
              <div className="flex items-center gap-3 px-3 py-2 rounded-md border border-[#EFEFEF] bg-white shadow-sm cursor-pointer">
                <div className="flex items-center justify-center w-5.5 shrink-0"><IconHome /></div>
                {!collapsed && <span className="font-semibold text-[#F47920] text-sm leading-tight">Dashboard</span>}
              </div>
            </div>
            {/* Antrian */}
            <div className="px-0 py-0.5">
              <Link to="/antrian">
                <div className="flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer hover:bg-[#EFEFEF] transition-colors">
                  <div className="flex items-center justify-center w-5.5 shrink-0"><IconPeople /></div>
                  {!collapsed && (
                    <div className="flex items-center justify-between flex-1 min-w-0">
                      <span className="font-semibold text-[#7C7C7C] text-sm">Antrian</span>
                      <span className="text-[11px] font-medium text-[#464646] bg-[#FAFAFA] border border-[#DCDCDC] rounded-full px-2 py-0.5">1</span>
                    </div>
                  )}
                </div>
              </Link>
            </div>
            {/* Tiket Saya */}
            <div className="px-0 py-0.5">
              <div className="flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer hover:bg-[#EFEFEF] transition-colors">
                <div className="flex items-center justify-center w-5.5 shrink-0"><IconTicket /></div>
                {!collapsed && (
                  <div className="flex items-center justify-between flex-1 min-w-0">
                    <span className="font-semibold text-[#7C7C7C] text-sm">Tiket Saya</span>
                    <span className="text-[11px] font-medium text-[#464646] bg-[#FAFAFA] border border-[#DCDCDC] rounded-full px-2 py-0.5">1</span>
                  </div>
                )}
              </div>
            </div>
            {/* Nasabah */}
            <div className="px-0 py-0.5">
              <div className="flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer hover:bg-[#EFEFEF] transition-colors">
                <div className="flex items-center justify-center w-5.5 shrink-0"><IconTagUser /></div>
                {!collapsed && <span className="font-semibold text-[#7C7C7C] text-sm">Nasabah</span>}
              </div>
            </div>
          </div>

          {/* BANTUAN */}
          {!collapsed && (
            <span className="px-5 pb-1 text-[11px] font-semibold text-[#989898] tracking-wider">BANTUAN</span>
          )}
          <div className="flex flex-col gap-0 pb-5">
            <div className="px-0 py-0.5">
              <div className="flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer hover:bg-[#EFEFEF] transition-colors">
                <div className="flex items-center justify-center w-5.5 shrink-0"><IconDocument /></div>
                {!collapsed && <span className="font-semibold text-[#7C7C7C] text-sm">Panduan</span>}
              </div>
            </div>
            <div className="px-0 py-0.5">
              <div className="flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer hover:bg-[#EFEFEF] transition-colors">
                <div className="flex items-center justify-center w-5.5 shrink-0"><IconNote /></div>
                {!collapsed && <span className="font-semibold text-[#7C7C7C] text-sm">Template Respons</span>}
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Profile */}
      <div className="flex items-center justify-between px-3 py-2 rounded-b-3xl bg-white border-t border-[#EFEFEF]">
        <div className="flex items-center gap-3">
          <div className="relative shrink-0">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/d7ad18ce3177ee04aff4d5cd844f1312f0da06c6?width=80"
              alt="Agent"
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#22C554] border-[1.5px] border-[#FAFAFA]" />
          </div>
          {!collapsed && <span className="text-xs font-semibold text-black">Agent</span>}
        </div>
        {!collapsed && (
          <button className="text-[#292D32] hover:opacity-70 transition-opacity">
            <IconLogout />
          </button>
        )}
      </div>
    </aside>
  );
}

// ─── Main Dashboard ─────────────────────────────────────────────────────────

export default function Index() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [performaPeriod, setPerformaPeriod] = useState<"today" | "weekly" | "monthly">("today");
  const [konteksPeriod, setKonteksPeriod] = useState<"today" | "weekly" | "monthly">("today");
  const [aktivitasPeriod, setAktivitasPeriod] = useState<"today" | "weekly" | "monthly">("today");

  const performaValue = performaData[performaPeriod];
  const konteksValue = konteksData[konteksPeriod];
  const barValue = barChartData[aktivitasPeriod];

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex gap-2 p-2 sm:gap-4 sm:p-4 md:p-4 lg:gap-[33px] lg:p-4 lg:pr-8 lg:pb-8">
      {/* Sidebar */}
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />

      {/* Main content */}
      <main className="flex-1 min-w-0 flex flex-col rounded-3xl border border-[#DCDCDC] bg-white overflow-hidden">
        {/* Top Nav */}
        <header className="flex items-center justify-between px-6 sm:px-8 h-[72px] border-b border-[#EFEFEF] gap-4">
          <div className="flex items-center gap-3.5 shrink-0">
            <span className="text-sm font-semibold text-[#F47920]">Dashboard</span>
          </div>
          {/* Search */}
          <div className="flex-1 max-w-xs sm:max-w-sm lg:max-w-md">
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg border border-[#DCDCDC] bg-[#FAFAFA] shadow-sm">
              <IconSearch />
              <span className="text-sm text-[#7C7C7C]">Search</span>
            </div>
          </div>
          {/* Notification */}
          <button className="flex items-center justify-center w-10 h-10 rounded-md border border-[#DCDCDC] hover:bg-[#FAFAFA] transition-colors shrink-0">
            <IconBell />
          </button>
        </header>

        {/* Content */}
        <div className="flex flex-col gap-0 flex-1">
          {/* Page header */}
          <section className="px-6 sm:px-8 pt-4 pb-0">
            <div className="flex flex-col gap-1 mb-4">
              <h1 className="text-2xl font-semibold text-[#464646] font-manrope">Selamat pagi, Rizky</h1>
              <p className="text-base text-[#7C7C7C]">Hari ini ada 5 tiket yang perlu ditindak lanjuti.</p>
            </div>
            <div className="h-px bg-[#EFEFEF]" />
          </section>

          {/* KPI Cards */}
          <section className="px-6 sm:px-8 py-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {/* Telepon */}
              <div className="p-1 rounded-lg bg-[#FAFAFA]">
                <div className="flex flex-col gap-6 p-3.5 rounded-lg border border-[#EFEFEF] bg-white">
                  <div className="flex flex-col gap-3.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="p-1 rounded-lg border border-[#EFEFEF] bg-[#FAFAFA]">
                          <div className="p-2.5 rounded-lg border border-[#EFEFEF] bg-white shadow-sm">
                            <IconCall />
                          </div>
                        </div>
                        <span className="text-lg font-semibold text-[#3D3D3D] font-manrope">Telepon</span>
                      </div>
                      <StatusBadge color="success" dot>Live</StatusBadge>
                    </div>
                    <div className="flex items-end gap-2">
                      <span className="text-4xl font-semibold text-[#015570] font-manrope leading-none">7</span>
                      <span className="text-sm font-medium text-[#7C7C7C] pb-0.5">Menunggu</span>
                    </div>
                  </div>
                  <button className="w-full py-2 px-4 rounded-md border border-[#015570] bg-white text-[#015570] text-base font-semibold hover:bg-[#015570]/5 transition-colors shadow-sm">
                    Lihat Detail
                  </button>
                </div>
              </div>

              {/* Live Chat */}
              <div className="p-1 rounded-lg bg-[#FAFAFA]">
                <div className="flex flex-col gap-6 p-3.5 rounded-lg border border-[#EFEFEF] bg-white">
                  <div className="flex flex-col gap-3.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="p-1 rounded-lg border border-[#EFEFEF] bg-[#FAFAFA]">
                          <div className="p-2.5 rounded-lg border border-[#EFEFEF] bg-white shadow-sm">
                            <IconMessage />
                          </div>
                        </div>
                        <span className="text-lg font-semibold text-[#3D3D3D] font-manrope">Live Chat</span>
                      </div>
                      <StatusBadge color="success" dot>Live</StatusBadge>
                    </div>
                    <div className="flex items-end gap-2">
                      <span className="text-4xl font-semibold text-[#16A341] font-manrope leading-none">3</span>
                      <span className="text-sm font-medium text-[#7C7C7C] pb-0.5">Menunggu</span>
                    </div>
                  </div>
                  <button className="w-full py-2 px-4 rounded-md border border-[#16A341] bg-white text-[#16A341] text-base font-semibold hover:bg-[#16A341]/5 transition-colors shadow-sm">
                    Lihat Detail
                  </button>
                </div>
              </div>

              {/* Video Call */}
              <div className="p-1 rounded-lg bg-[#FAFAFA]">
                <div className="flex flex-col gap-6 p-3.5 rounded-lg border border-[#EFEFEF] bg-white">
                  <div className="flex flex-col gap-3.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="p-1 rounded-lg border border-[#EFEFEF] bg-[#FAFAFA]">
                          <div className="p-2.5 rounded-lg border border-[#EFEFEF] bg-white shadow-sm">
                            <IconVideo />
                          </div>
                        </div>
                        <span className="text-lg font-semibold text-[#3D3D3D] font-manrope">Video Call</span>
                      </div>
                      <StatusBadge color="error" dot>Off</StatusBadge>
                    </div>
                    <div className="flex items-end gap-2">
                      <span className="text-4xl font-semibold text-[#BDBDBD] font-manrope leading-none">0</span>
                      <span className="text-sm font-medium text-[#BDBDBD] pb-0.5">Antrian</span>
                    </div>
                  </div>
                  <button disabled className="w-full py-2 px-4 rounded-md border border-[#FCC799] bg-white text-[#FAA866] text-base font-semibold cursor-not-allowed opacity-80 shadow-sm">
                    Mulai Video
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Analytics row */}
          <section className="px-6 sm:px-8 pb-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5">
              {/* Performa Agent */}
              <div className="flex flex-col rounded-lg bg-white overflow-hidden">
                <div className="flex items-center justify-between px-2 py-2 rounded-t-lg bg-[#FAFAFA]">
                  <span className="text-sm font-medium text-[#525252] tracking-wide">PERFORMA AGENT</span>
                  <div className="relative group">
                    <button className="flex items-center gap-2 px-3.5 py-2 rounded-lg border border-[#BDBDBD] bg-[#FAFAFA] shadow-sm cursor-pointer hover:border-[#989898] transition-colors">
                      <span className="text-sm text-[#464646]">{performaPeriod === "today" ? "Hari Ini" : performaPeriod === "weekly" ? "Weekly" : "Monthly"}</span>
                      <IconArrowDown />
                    </button>
                    <div className="absolute right-0 top-full mt-1 w-40 bg-white border border-[#DCDCDC] rounded-lg shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
                      <button onClick={() => setPerformaPeriod("today")} className={`w-full text-left px-4 py-2 text-sm hover:bg-[#FAFAFA] ${performaPeriod === "today" ? "text-[#F47920] font-semibold" : "text-[#464646]"}`}>
                        Hari Ini
                      </button>
                      <button onClick={() => setPerformaPeriod("weekly")} className={`w-full text-left px-4 py-2 text-sm hover:bg-[#FAFAFA] ${performaPeriod === "weekly" ? "text-[#F47920] font-semibold" : "text-[#464646]"}`}>
                        Weekly
                      </button>
                      <button onClick={() => setPerformaPeriod("monthly")} className={`w-full text-left px-4 py-2 text-sm hover:bg-[#FAFAFA] ${performaPeriod === "monthly" ? "text-[#F47920] font-semibold" : "text-[#464646]"}`}>
                        Monthly
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-1 flex-1 bg-white">
                  <div className="p-3.5 rounded-lg border border-[#EFEFEF] bg-[#FAFAFA] h-full">
                    <div className="flex items-center gap-4 flex-wrap sm:flex-nowrap">
                      <PerformaAgentChart />
                      <div className="flex flex-col gap-1 flex-1 min-w-0">
                        <div className="flex items-start gap-2">
                          <svg width="8" height="14" viewBox="0 0 8 14" fill="none" className="shrink-0 mt-1.5">
                            <circle cx="4" cy="10" r="4" fill="#F47920"/>
                          </svg>
                          <span className="text-sm text-[#656565]">Tiket Aktif : {performaValue.tiketAktif}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <svg width="8" height="14" viewBox="0 0 8 14" fill="none" className="shrink-0 mt-1.5">
                            <circle cx="4" cy="10" r="4" fill="#16A341"/>
                          </svg>
                          <span className="text-sm text-[#656565]">Di Selesaikan : {performaValue.selesai}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <svg width="8" height="14" viewBox="0 0 8 14" fill="none" className="shrink-0 mt-1.5">
                            <circle cx="4" cy="10" r="4" fill="#016986"/>
                          </svg>
                          <span className="text-sm text-[#656565]">Rata Rata Penanganan : {performaValue.ratarata}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <svg width="8" height="14" viewBox="0 0 8 14" fill="none" className="shrink-0 mt-1.5">
                            <circle cx="4" cy="10" r="4" fill="#257CEB"/>
                          </svg>
                          <span className="text-sm text-[#656565]">
                            Kepuasan Nasabah : <strong className="font-bold">{performaValue.kepuasan}</strong> / 5.0
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Konteks Nasabah */}
              <div className="flex flex-col rounded-lg bg-white overflow-hidden">
                <div className="flex items-center justify-between px-2 py-2 rounded-t-lg bg-[#FAFAFA]">
                  <span className="text-sm font-medium text-[#656565] tracking-wide">KONTEKS NASABAH</span>
                  <div className="relative group">
                    <button className="flex items-center gap-2 px-3.5 py-2 rounded-lg border border-[#BDBDBD] bg-[#FAFAFA] shadow-sm cursor-pointer hover:border-[#989898] transition-colors">
                      <span className="text-sm text-[#464646]">{konteksPeriod === "today" ? "Hari Ini" : konteksPeriod === "weekly" ? "Weekly" : "Monthly"}</span>
                      <IconArrowDown />
                    </button>
                    <div className="absolute right-0 top-full mt-1 w-40 bg-white border border-[#DCDCDC] rounded-lg shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
                      <button onClick={() => setKonteksPeriod("today")} className={`w-full text-left px-4 py-2 text-sm hover:bg-[#FAFAFA] ${konteksPeriod === "today" ? "text-[#F47920] font-semibold" : "text-[#464646]"}`}>
                        Hari Ini
                      </button>
                      <button onClick={() => setKonteksPeriod("weekly")} className={`w-full text-left px-4 py-2 text-sm hover:bg-[#FAFAFA] ${konteksPeriod === "weekly" ? "text-[#F47920] font-semibold" : "text-[#464646]"}`}>
                        Weekly
                      </button>
                      <button onClick={() => setKonteksPeriod("monthly")} className={`w-full text-left px-4 py-2 text-sm hover:bg-[#FAFAFA] ${konteksPeriod === "monthly" ? "text-[#F47920] font-semibold" : "text-[#464646]"}`}>
                        Monthly
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-1 flex-1 bg-white">
                  <div className="p-3.5 rounded-lg border border-[#EFEFEF] bg-[#FAFAFA] h-full">
                    <div className="flex items-center gap-4 flex-wrap sm:flex-nowrap">
                      <DonutChart data={konteksValue} />
                      <div className="flex flex-col gap-1 flex-1 min-w-0">
                        {konteksValue.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" className="shrink-0 mt-1.5">
                              <circle cx="4" cy="10" r="4" fill={item.color}/>
                            </svg>
                            <span className="text-sm text-[#656565]">{item.label} : {item.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Aktivitas Agent Chart */}
          <section className="px-6 sm:px-8 pb-4">
            <div className="rounded-lg border border-[#EFEFEF] overflow-hidden">
              <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#FAFAFA] rounded-t-lg">
                <h2 className="text-2xl font-semibold text-[#464646] font-manrope">Aktivitas Agent</h2>
                <div className="relative group">
                  <button className="flex items-center gap-2 px-4 py-2 rounded-md border border-[#EFEFEF] bg-white shadow-sm text-base font-semibold text-[#464646] hover:bg-[#FAFAFA] transition-colors">
                    {aktivitasPeriod === "today" ? "Hari Ini" : aktivitasPeriod === "weekly" ? "Weekly" : "Monthly"}
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M16.6 7.45831L11.1667 12.8916C10.525 13.5333 9.47502 13.5333 8.83336 12.8916L3.40002 7.45831" stroke="#464646" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <div className="absolute right-0 top-full mt-1 w-40 bg-white border border-[#DCDCDC] rounded-lg shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
                    <button onClick={() => setAktivitasPeriod("today")} className={`w-full text-left px-4 py-2 text-sm hover:bg-[#FAFAFA] ${aktivitasPeriod === "today" ? "text-[#F47920] font-semibold" : "text-[#464646]"}`}>
                      Hari Ini
                    </button>
                    <button onClick={() => setAktivitasPeriod("weekly")} className={`w-full text-left px-4 py-2 text-sm hover:bg-[#FAFAFA] ${aktivitasPeriod === "weekly" ? "text-[#F47920] font-semibold" : "text-[#464646]"}`}>
                      Weekly
                    </button>
                    <button onClick={() => setAktivitasPeriod("monthly")} className={`w-full text-left px-4 py-2 text-sm hover:bg-[#FAFAFA] ${aktivitasPeriod === "monthly" ? "text-[#F47920] font-semibold" : "text-[#464646]"}`}>
                      Monthly
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-3.5 bg-white">
                <BarChart data={barValue} />
              </div>
            </div>
          </section>

          {/* Ticket Table */}
          <section className="px-6 sm:px-8 pb-6">
            <div className="p-3.5 rounded-lg bg-white flex flex-col gap-3.5">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-[#464646] font-manrope">Tiket Perlu Ditindaklanjuti</h2>
                <button className="px-4 py-2 rounded-md text-base font-semibold text-[#F47920] hover:bg-[#FFF3E8] transition-colors">
                  Lihat Semua
                </button>
              </div>

              {/* Table */}
              <div className="border border-[#EFEFEF] rounded-lg overflow-x-auto">
                <table className="w-full min-w-[640px] border-collapse">
                  <thead>
                    <tr className="bg-white border-b border-[#EFEFEF]">
                      <th className="text-left px-6 py-3">
                        <div className="flex items-center gap-1 text-xs text-[#656565] font-normal">
                          Nomor Tiket <IconArrowUpDown />
                        </div>
                      </th>
                      <th className="text-left px-6 py-3">
                        <div className="flex items-center gap-1 text-xs text-[#656565] font-normal">
                          NASABAH <IconArrowUpDown />
                        </div>
                      </th>
                      <th className="text-center px-6 py-3">
                        <div className="flex items-center justify-center gap-1 text-xs text-[#656565] font-normal">
                          KATEGORI <IconArrowUpDown />
                        </div>
                      </th>
                      <th className="text-center px-6 py-3">
                        <div className="flex items-center justify-center gap-1 text-xs text-[#656565] font-normal">
                          PRIORITAS <IconArrowUpDown />
                        </div>
                      </th>
                      <th className="text-center px-6 py-3">
                        <div className="flex items-center justify-center gap-1 text-xs text-[#656565] font-normal">
                          BATAS SLA <IconArrowUpDown />
                        </div>
                      </th>
                      <th className="text-center px-6 py-3">
                        <div className="flex items-center justify-center gap-1 text-xs text-[#656565] font-normal">
                          AKSI <IconArrowUpDown />
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {tickets.map((t) => (
                      <tr key={t.id} className="border-b border-[#EFEFEF] last:border-b-0 hover:bg-[#FAFAFA] transition-colors">
                        <td className="px-6 py-4 text-sm text-[#7C7C7C]">{t.id}</td>
                        <td className="px-6 py-4 text-sm font-medium text-[#464646]">{t.nasabah}</td>
                        <td className="px-6 py-4 text-sm font-medium text-black text-center">{t.kategori}</td>
                        <td className="px-6 py-4 text-center">{prioritasBadge(t.prioritas)}</td>
                        <td className={`px-6 py-4 text-sm font-medium text-center ${t.slaColor}`}>{t.sla}</td>
                        <td className="px-6 py-4 text-center">
                          {t.actionType === "primary" ? (
                            <button className="px-3.5 py-1.5 rounded-md bg-[#F47920] text-[#FAFAFA] text-sm font-semibold shadow-sm hover:bg-[#D4640F] transition-colors">
                              {t.action}
                            </button>
                          ) : (
                            <button className="px-3.5 py-1.5 rounded-md border border-[#FAA866] bg-[#FAFAFA] text-[#F47920] text-sm font-semibold shadow-sm hover:bg-[#FFF3E8] transition-colors">
                              {t.action}
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
