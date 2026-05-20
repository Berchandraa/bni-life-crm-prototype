import { useState } from "react";

type SidebarKey = "dashboard" | "antrian" | "tickets" | "nasabah" | "panduan" | "template";

type MenuItem = {
  key: SidebarKey;
  label: string;
  href: string;
  badge?: string;
  icon: (active: boolean) => JSX.Element;
};

function navigate(to: string) {
  window.history.pushState({}, "", to);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

function IconShell({ active, children }: { active: boolean; children: JSX.Element }) {
  return (
    <span className={`flex w-5.5 shrink-0 items-center justify-center ${active ? "text-[#F47920]" : "text-[#7C7C7C]"}`}>
      {children}
    </span>
  );
}

const iconClass = "h-5 w-5";

function HomeIcon(active: boolean) {
  return (
    <IconShell active={active}>
      <svg className={iconClass} viewBox="0 0 20 20" fill="none">
        <path d="M7.51667 2.36667L3.025 5.86667C2.275 6.45 1.66667 7.69167 1.66667 8.63334V14.8083C1.66667 16.7417 3.24167 18.325 5.175 18.325H14.825C16.7583 18.325 18.3333 16.7417 18.3333 14.8167V8.75C18.3333 7.74167 17.6583 6.45 16.8333 5.875L11.6833 2.26667C10.5167 1.45 8.64167 1.49167 7.51667 2.36667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 14.9917V12.4917" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </IconShell>
  );
}

function PeopleIcon(active: boolean) {
  return (
    <IconShell active={active}>
      <svg className={iconClass} viewBox="0 0 20 20" fill="none">
        <path d="M15 5.96667C14.95 5.95834 14.8917 5.95834 14.8417 5.96667C13.6917 5.92501 12.775 4.98334 12.775 3.81667C12.775 2.62501 13.7333 1.66667 14.925 1.66667C16.1167 1.66667 17.075 2.63334 17.075 3.81667C17.0667 4.98334 16.15 5.92501 15 5.96667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.1417 12.0334C15.2833 12.225 16.5417 12.025 17.425 11.4334C18.6 10.65 18.6 9.36669 17.425 8.58335C16.5333 7.99169 15.2583 7.79168 14.1167 7.99168" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.975 5.96667C5.025 5.95834 5.08333 5.95834 5.13333 5.96667C6.28333 5.92501 7.2 4.98334 7.2 3.81667C7.2 2.62501 6.24167 1.66667 5.05 1.66667C3.85833 1.66667 2.9 2.63334 2.9 3.81667C2.90833 4.98334 3.825 5.92501 4.975 5.96667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.83333 12.0334C4.69167 12.225 3.43333 12.025 2.55 11.4334C1.375 10.65 1.375 9.36669 2.55 8.58335C3.44167 7.99169 4.71667 7.79168 5.85833 7.99168" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 12.1917C9.95 12.1833 9.89167 12.1833 9.84167 12.1917C8.69167 12.15 7.775 11.2083 7.775 10.0417C7.775 8.85 8.73333 7.89166 9.925 7.89166C11.1167 7.89166 12.075 8.85833 12.075 10.0417C12.0667 11.2083 11.15 12.1583 10 12.1917Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.575 14.8167C6.4 15.6 6.4 16.8833 7.575 17.6667C8.90834 18.5583 11.0917 18.5583 12.425 17.6667C13.6 16.8833 13.6 15.6 12.425 14.8167C11.1 13.9333 8.90834 13.9333 7.575 14.8167Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </IconShell>
  );
}

function TicketIcon(active: boolean) {
  return (
    <IconShell active={active}>
      <svg className={iconClass} viewBox="0 0 20 20" fill="none">
        <path d="M16.25 10.4167C16.25 9.26668 17.1833 8.33334 18.3333 8.33334V7.50001C18.3333 4.16668 17.5 3.33334 14.1667 3.33334H5.83333C2.5 3.33334 1.66667 4.16668 1.66667 7.50001V7.91668C2.81667 7.91668 3.75 8.85001 3.75 10C3.75 11.15 2.81667 12.0833 1.66667 12.0833V12.5C1.66667 15.8333 2.5 16.6667 5.83333 16.6667H14.1667C17.5 16.6667 18.3333 15.8333 18.3333 12.5C17.1833 12.5 16.25 11.5667 16.25 10.4167Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.33333 3.33334L8.33333 16.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="5 5" />
      </svg>
    </IconShell>
  );
}

function CustomerIcon(active: boolean) {
  return (
    <IconShell active={active}>
      <svg className={iconClass} viewBox="0 0 20 20" fill="none">
        <path d="M15 15.7167H14.3667C13.7 15.7167 13.0667 15.975 12.6 16.4417L11.175 17.85C10.525 18.4917 9.46668 18.4917 8.81668 17.85L7.39166 16.4417C6.925 15.975 6.28333 15.7167 5.625 15.7167H5C3.61667 15.7167 2.5 14.6083 2.5 13.2417V4.14166C2.5 2.77499 3.61667 1.66666 5 1.66666H15C16.3833 1.66666 17.5 2.77499 17.5 4.14166V13.2333C17.5 14.6 16.3833 15.7167 15 15.7167Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.0583 7.45834C10.025 7.45834 9.97499 7.45834 9.93332 7.45834C9.05832 7.42501 8.36665 6.71668 8.36665 5.83334C8.36665 4.93334 9.09166 4.20834 9.99166 4.20834C10.8917 4.20834 11.6167 4.94168 11.6167 5.83334C11.625 6.71668 10.9333 7.43334 10.0583 7.45834Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.70834 9.96667C6.6 10.7083 6.6 11.9167 7.70834 12.6583C8.96667 13.5 11.0333 13.5 12.2917 12.6583C13.4 11.9167 13.4 10.7083 12.2917 9.96667C11.0333 9.13334 8.975 9.13334 7.70834 9.96667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </IconShell>
  );
}

function DocumentIcon(active: boolean) {
  return (
    <IconShell active={active}>
      <svg className={iconClass} viewBox="0 0 20 20" fill="none">
        <path d="M17.5 5.83332V14.1667C17.5 16.6667 16.25 18.3333 13.3333 18.3333H6.66667C3.75 18.3333 2.5 16.6667 2.5 14.1667V5.83332C2.5 3.33332 3.75 1.66666 6.66667 1.66666H13.3333C16.25 1.66666 17.5 3.33332 17.5 5.83332Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.0833 3.75V5.41667C12.0833 6.33333 12.8333 7.08333 13.75 7.08333H15.4167" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.66667 10.8333H10" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" opacity=".75" />
        <path d="M6.66667 14.1667H13.3333" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" opacity=".75" />
      </svg>
    </IconShell>
  );
}

function NoteIcon(active: boolean) {
  return (
    <IconShell active={active}>
      <svg className={iconClass} viewBox="0 0 20 20" fill="none">
        <path d="M18.05 8.69999L17.2333 12.1833C16.5333 15.1917 15.15 16.4083 12.55 16.1583C12.1333 16.125 11.6833 16.05 11.2 15.9333L9.8 15.6C6.325 14.775 5.25 13.0583 6.06667 9.57499L6.88333 6.08332C7.05 5.37499 7.25 4.75832 7.5 4.24999C8.475 2.23332 10.1333 1.69165 12.9167 2.34999L14.3083 2.67499C17.8 3.49165 18.8667 5.21665 18.05 8.69999Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.55 16.1583C12.0333 16.5083 11.3833 16.8 10.5917 17.0583L9.275 17.4917C5.96667 18.5583 4.225 17.6667 3.15 14.3583L2.08333 11.0667C1.01666 7.75833 1.9 6.00833 5.20833 4.94167L6.525 4.50833C6.86666 4.4 7.19166 4.30833 7.5 4.25C7.25 4.75833 7.05 5.375 6.88333 6.08333L6.06667 9.575C5.25 13.0583 6.325 14.775 9.8 15.6L11.2 15.9333C11.6833 16.05 12.1333 16.125 12.55 16.1583Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </IconShell>
  );
}

function SidebarToggleIcon() {
  return (
    <svg className="h-[18px] w-[18px]" viewBox="0 0 18 18" fill="none">
      <path d="M16.4775 11.25V6.75C16.4775 3 14.9775 1.5 11.2275 1.5H6.72749C2.97749 1.5 1.47749 3 1.47749 6.75V11.25C1.47749 15 2.97749 16.5 6.72749 16.5H11.2275C14.9775 16.5 16.4775 15 16.4775 11.25Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.97749 1.5V16.5" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.2275 7.08L9.3075 9L11.2275 10.92" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LogoutIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
      <path d="M15 8.5 18.5 12 15 15.5M18.5 12H8" stroke="#292D32" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11 4.5H6.5A2.5 2.5 0 0 0 4 7v10a2.5 2.5 0 0 0 2.5 2.5H11" stroke="#292D32" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

const workspaceItems: MenuItem[] = [
  { key: "dashboard", label: "Dashboard", href: "/", icon: HomeIcon },
  { key: "antrian", label: "Antrian", href: "/antrian", badge: "3", icon: PeopleIcon },
  { key: "tickets", label: "Tiket Saya", href: "/tickets", badge: "1", icon: TicketIcon },
  { key: "nasabah", label: "Nasabah", href: "/nasabah", icon: CustomerIcon },
];

const helpItems: MenuItem[] = [
  { key: "panduan", label: "Panduan", href: "/panduan", icon: DocumentIcon },
  { key: "template", label: "Template Respons", href: "/template-respons", icon: NoteIcon },
];

export default function CrmSidebar({ active }: { active: SidebarKey }) {
  const [collapsed, setCollapsed] = useState(false);
  const [notice, setNotice] = useState("");

  const showNotice = (message: string) => {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 1800);
  };

  const renderItem = (item: MenuItem) => {
    const isActive = item.key === active;

    return (
      <div key={item.key} className="px-0 py-0.5">
        <button
          title={collapsed ? item.label : undefined}
          onClick={() => navigate(item.href)}
          className={`flex w-full items-center rounded-md px-3 py-2 text-left transition-colors ${
            isActive ? "border border-[#EFEFEF] bg-white shadow-sm" : "hover:bg-[#EFEFEF]"
          } ${collapsed ? "justify-center" : "gap-3"}`}
        >
          {item.icon(isActive)}
          {!collapsed ? <span className={`flex-1 text-sm font-semibold leading-tight ${isActive ? "text-[#F47920]" : "text-[#7C7C7C]"}`}>{item.label}</span> : null}
          {item.badge && !collapsed ? (
            <span
              className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${
                isActive ? "bg-[#F47920] text-white" : "border border-[#DCDCDC] bg-[#FAFAFA] text-[#464646]"
              }`}
            >
              {item.badge}
            </span>
          ) : null}
        </button>
      </div>
    );
  };

  return (
    <aside className={`flex shrink-0 flex-col justify-between rounded-3xl border border-[#DCDCDC] bg-[#FAFAFA] transition-all duration-200 ${collapsed ? "w-[86px]" : "w-[263px]"}`} style={{ minHeight: "calc(100vh - 47px)" }}>
      <div className="flex flex-col gap-6 px-3.5 pt-0">
        <div className={`flex items-center py-5 ${collapsed ? "justify-center px-0" : "justify-between px-3.5"}`}>
          {!collapsed ? <img src="https://api.builder.io/api/v1/image/assets/TEMP/999648adc32cbf733d630d36a8175f12ff6b935a?width=280" alt="BNI Life" className="h-[50px] w-auto object-contain" /> : null}
          <button
            aria-label={collapsed ? "Buka sidebar" : "Tutup sidebar"}
            onClick={() => setCollapsed((value) => !value)}
            className="flex shrink-0 items-center justify-center rounded bg-white p-1.5 shadow-sm transition-shadow hover:shadow-md"
          >
            <SidebarToggleIcon />
          </button>
        </div>

        <nav className="flex flex-col gap-0">
          {!collapsed ? <span className="px-5 pb-1 text-[11px] font-semibold tracking-wider text-[#989898]">WORKSPACE</span> : null}
          <div className="flex flex-col gap-0 pb-5">{workspaceItems.map(renderItem)}</div>

          {!collapsed ? <span className="px-5 pb-1 text-[11px] font-semibold tracking-wider text-[#989898]">BANTUAN</span> : null}
          <div className="flex flex-col gap-0 pb-5">{helpItems.map(renderItem)}</div>
        </nav>
      </div>

      <div className={`flex items-center rounded-b-3xl border-t border-[#EFEFEF] bg-white px-3 py-2 ${collapsed ? "justify-center" : "justify-between"}`}>
        <div className="flex items-center gap-3">
          <div className="relative shrink-0">
            <img src="https://api.builder.io/api/v1/image/assets/TEMP/d7ad18ce3177ee04aff4d5cd844f1312f0da06c6?width=80" alt="Agent" className="h-10 w-10 rounded-full object-cover" />
            <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-[1.5px] border-[#FAFAFA] bg-[#22C554]" />
          </div>
          {!collapsed ? <span className="text-xs font-semibold text-black">Agent</span> : null}
        </div>
        {!collapsed ? <button onClick={() => showNotice("Sesi agent tetap aktif untuk demo")} className="text-[#292D32] transition-opacity hover:opacity-70">
          <LogoutIcon />
        </button> : null}
      </div>
      {notice ? <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-lg bg-[#292929] px-4 py-2 text-sm font-semibold text-white shadow-lg">{notice}</div> : null}
    </aside>
  );
}
