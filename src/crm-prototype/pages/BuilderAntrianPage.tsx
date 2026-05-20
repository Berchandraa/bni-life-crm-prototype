import { useState } from "react";
import type { ReactNode } from "react";
import CrmSidebar from "../components/CrmSidebar";

function Link({ to, children }: { to: string; children: ReactNode }) {
  return (
    <a
      href={to}
      onClick={(event) => {
        event.preventDefault();
        window.history.pushState({}, "", to);
        window.dispatchEvent(new PopStateEvent("popstate"));
      }}
    >
      {children}
    </a>
  );
}

// ─── Avatar Placeholder (orange bg + white person icon) ─────────────────────
const AvatarPlaceholder = ({ size = 40 }: { size?: number }) => (
  <div
    className="flex items-center justify-center rounded-full bg-[#FFF3E8] shrink-0"
    style={{ width: size, height: size }}
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z" fill="#F47920"/>
      <path d="M17.08 14.1499C14.29 12.2899 9.73999 12.2899 6.92999 14.1499C5.65999 14.9999 4.95999 16.1499 4.95999 17.3799C4.95999 18.6099 5.65999 19.7499 6.91999 20.5899C8.31999 21.5299 10.16 21.9999 12 21.9999C13.84 21.9999 15.68 21.5299 17.08 20.5899C18.34 19.7399 19.04 18.5999 19.04 17.3599C19.03 16.1299 18.34 14.9899 17.08 14.1499Z" fill="#F47920"/>
    </svg>
  </div>
);

// ─── Icons ───────────────────────────────────────────────────────────────────
const IconSidebar = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M16.4775 11.25V6.75C16.4775 3 14.9775 1.5 11.2275 1.5H6.72749C2.97749 1.5 1.47749 3 1.47749 6.75V11.25C1.47749 15 2.97749 16.5 6.72749 16.5H11.2275C14.9775 16.5 16.4775 15 16.4775 11.25Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.97749 1.5V16.5" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.2275 7.08L9.3075 9L11.2275 10.92" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconHome = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M7.51667 2.36664L3.025 5.86664C2.275 6.44997 1.66667 7.69164 1.66667 8.63331V14.8083C1.66667 16.7416 3.24167 18.325 5.175 18.325H14.825C16.7583 18.325 18.3333 16.7416 18.3333 14.8166V8.74997C18.3333 7.74164 17.6583 6.44997 16.8333 5.87497L11.6833 2.26664C10.5167 1.44997 8.64167 1.49164 7.51667 2.36664Z" stroke="#7C7C7C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 14.9917V12.4917" stroke="#7C7C7C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconPeople = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M15 5.96663C14.95 5.9583 14.8917 5.9583 14.8417 5.96663C13.6917 5.92496 12.775 4.98329 12.775 3.81663C12.775 2.62496 13.7333 1.66663 14.925 1.66663C16.1167 1.66663 17.075 2.63329 17.075 3.81663C17.0667 4.98329 16.15 5.92496 15 5.96663Z" stroke="#F47920" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14.1417 12.0333C15.2833 12.225 16.5417 12.025 17.425 11.4333C18.6 10.65 18.6 9.36664 17.425 8.58331C16.5333 7.99164 15.2583 7.79163 14.1167 7.99163" stroke="#F47920" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.975 5.96663C5.025 5.9583 5.08333 5.9583 5.13333 5.96663C6.28333 5.92496 7.2 4.98329 7.2 3.81663C7.2 2.62496 6.24167 1.66663 5.05 1.66663C3.85833 1.66663 2.9 2.63329 2.9 3.81663C2.90833 4.98329 3.825 5.92496 4.975 5.96663Z" stroke="#F47920" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.83333 12.0333C4.69167 12.225 3.43333 12.025 2.55 11.4333C1.375 10.65 1.375 9.36664 2.55 8.58331C3.44167 7.99164 4.71667 7.79163 5.85833 7.99163" stroke="#F47920" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 12.1917C9.95 12.1834 9.89167 12.1834 9.84167 12.1917C8.69167 12.1501 7.775 11.2084 7.775 10.0417C7.775 8.85006 8.73333 7.89172 9.925 7.89172C11.1167 7.89172 12.075 8.85839 12.075 10.0417C12.0667 11.2084 11.15 12.1584 10 12.1917Z" stroke="#F47920" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.575 14.8167C6.4 15.6 6.4 16.8833 7.575 17.6667C8.90834 18.5583 11.0917 18.5583 12.425 17.6667C13.6 16.8833 13.6 15.6 12.425 14.8167C11.1 13.9333 8.90834 13.9333 7.575 14.8167Z" stroke="#F47920" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconTicket = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M16.25 10.4167C16.25 9.26671 17.1833 8.33337 18.3333 8.33337V7.50004C18.3333 4.16671 17.5 3.33337 14.1667 3.33337H5.83333C2.5 3.33337 1.66667 4.16671 1.66667 7.50004V7.91671C2.81667 7.91671 3.75 8.85004 3.75 10C3.75 11.15 2.81667 12.0834 1.66667 12.0834V12.5C1.66667 15.8334 2.5 16.6667 5.83333 16.6667H14.1667C17.5 16.6667 18.3333 15.8334 18.3333 12.5C17.1833 12.5 16.25 11.5667 16.25 10.4167Z" stroke="#7C7C7C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.33333 3.33337L8.33333 16.6667" stroke="#7C7C7C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="5 5"/>
  </svg>
);
const IconTagUser = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M15 15.7167H14.3667C13.7 15.7167 13.0667 15.9751 12.6 16.4417L11.175 17.8501C10.525 18.4917 9.46668 18.4917 8.81668 17.8501L7.39166 16.4417C6.925 15.9751 6.28333 15.7167 5.625 15.7167H5C3.61667 15.7167 2.5 14.6084 2.5 13.2417V4.14175C2.5 2.77508 3.61667 1.66675 5 1.66675H15C16.3833 1.66675 17.5 2.77508 17.5 4.14175V13.2334C17.5 14.6001 16.3833 15.7167 15 15.7167Z" stroke="#7C7C7C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.0583 7.45825C10.025 7.45825 9.97499 7.45825 9.93332 7.45825C9.05832 7.42492 8.36665 6.71659 8.36665 5.83325C8.36665 4.93325 9.09166 4.20825 9.99166 4.20825C10.8917 4.20825 11.6167 4.94159 11.6167 5.83325C11.625 6.71659 10.9333 7.43325 10.0583 7.45825Z" stroke="#7C7C7C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.70834 9.96655C6.6 10.7082 6.6 11.9166 7.70834 12.6582C8.96667 13.4999 11.0333 13.4999 12.2917 12.6582C13.4 11.9166 13.4 10.7082 12.2917 9.96655C11.0333 9.13322 8.975 9.13322 7.70834 9.96655Z" stroke="#7C7C7C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconDocument = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M17.5 5.83341V14.1667C17.5 16.6667 16.25 18.3334 13.3333 18.3334H6.66667C3.75 18.3334 2.5 16.6667 2.5 14.1667V5.83341C2.5 3.33341 3.75 1.66675 6.66667 1.66675H13.3333C16.25 1.66675 17.5 3.33341 17.5 5.83341Z" stroke="#7C7C7C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.0833 3.75V5.41667C12.0833 6.33333 12.8333 7.08333 13.75 7.08333H15.4167" stroke="#7C7C7C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6.66667 10.8333H10" stroke="#989898" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6.66667 14.1667H13.3333" stroke="#989898" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconNote2 = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M18.05 8.69992L17.2333 12.1833C16.5333 15.1916 15.15 16.4083 12.55 16.1583C12.1333 16.1249 11.6833 16.0499 11.2 15.9333L9.8 15.5999C6.325 14.7749 5.25 13.0583 6.06667 9.57493L6.88333 6.08326C7.05 5.37493 7.25 4.75826 7.5 4.24993C8.475 2.23326 10.1333 1.69159 12.9167 2.34993L14.3083 2.67493C17.8 3.49159 18.8667 5.21659 18.05 8.69992Z" stroke="#7C7C7C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.55 16.1583C12.0333 16.5083 11.3833 16.8 10.5917 17.0583L9.275 17.4917C5.96667 18.5583 4.225 17.6667 3.15 14.3583L2.08333 11.0667C1.01666 7.75833 1.9 6.00833 5.20833 4.94167L6.525 4.50833C6.86666 4.4 7.19166 4.30833 7.5 4.25C7.25 4.75833 7.05 5.375 6.88333 6.08333L6.06667 9.575C5.25 13.0583 6.325 14.775 9.8 15.6L11.2 15.9333C11.6833 16.05 12.1333 16.125 12.55 16.1583Z" stroke="#7C7C7C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconSearch = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M9.58332 17.5C13.9556 17.5 17.5 13.9555 17.5 9.58329C17.5 5.21104 13.9556 1.66663 9.58332 1.66663C5.21107 1.66663 1.66666 5.21104 1.66666 9.58329C1.66666 13.9555 5.21107 17.5 9.58332 17.5Z" stroke="#7C7C7C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18.3333 18.3333L16.6667 16.6666" stroke="#7C7C7C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconBell = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M10.0166 2.42505C7.25828 2.42505 5.01662 4.66672 5.01662 7.42505V9.83338C5.01662 10.3417 4.79995 11.1167 4.54162 11.55L3.58328 13.1417C2.99162 14.125 3.39995 15.2167 4.48328 15.5834C8.07495 16.7834 11.95 16.7834 15.5416 15.5834C16.55 15.25 16.9916 14.0584 16.4416 13.1417L15.4833 11.55C15.2333 11.1167 15.0166 10.3417 15.0166 9.83338V7.42505C15.0166 4.67505 12.7666 2.42505 10.0166 2.42505Z" stroke="#7C7C7C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
    <path d="M11.5583 2.6667C11.3 2.5917 11.0333 2.53337 10.7583 2.50003C9.95831 2.40003 9.19164 2.45837 8.47498 2.6667C8.71664 2.05003 9.31664 1.6167 10.0166 1.6167C10.7166 1.6167 11.3166 2.05003 11.5583 2.6667Z" stroke="#7C7C7C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.5167 15.8833C12.5167 17.2583 11.3917 18.3833 10.0167 18.3833C9.33339 18.3833 8.70006 18.1 8.25006 17.65C7.80006 17.2 7.51672 16.5666 7.51672 15.8833" stroke="#7C7C7C" strokeWidth="1.5" strokeMiterlimit="10"/>
  </svg>
);
const IconLogout = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M8.89999 7.55999C9.20999 3.95999 11.06 2.48999 15.11 2.48999H15.24C19.71 2.48999 21.5 4.27999 21.5 8.74999V15.27C21.5 19.74 19.71 21.53 15.24 21.53H15.11C11.09 21.53 9.23999 20.08 8.90999 16.54" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 12H14.88" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.65 8.6499L16 11.9999L12.65 15.3499" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconArrowDown = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M16.6 7.45825L11.1667 12.8916C10.525 13.5333 9.47502 13.5333 8.83336 12.8916L3.40002 7.45825" stroke="#7C7C7C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconX = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M18 6L6 18M6 6L18 18" stroke="#464646" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconSend2 = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M5.55001 4.74012L11.9175 2.61762C14.775 1.66512 16.3275 3.22512 15.3825 6.08262L13.26 12.4501C11.835 16.7326 9.49501 16.7326 8.07001 12.4501L7.44001 10.5601L5.55001 9.93012C1.26751 8.50512 1.26751 6.17262 5.55001 4.74012Z" stroke="#FAFAFA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.58252 10.2374L10.2675 7.54492" stroke="#FAFAFA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconAttachLink = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M14.5834 7.5083L14.5834 6.24997C14.5834 3.7333 12.525 1.66663 10 1.66663C7.48335 1.66663 5.41669 3.72497 5.41669 6.24997L5.41669 7.5083" stroke="#464646" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.41669 12.4999L5.41669 13.7499C5.41669 16.2749 7.47502 18.3333 10 18.3333C12.5167 18.3333 14.5834 16.2749 14.5834 13.7499L14.5834 12.4999" stroke="#464646" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 13.3333L10 6.66659" stroke="#464646" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconAttachImage = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M7.50002 18.3334H12.5C16.6667 18.3334 18.3334 16.6667 18.3334 12.5001V7.50008C18.3334 3.33341 16.6667 1.66675 12.5 1.66675L7.50002 1.66675C3.33335 1.66675 1.66669 3.33341 1.66669 7.50008L1.66669 12.5001C1.66669 16.6667 3.33335 18.3334 7.50002 18.3334Z" stroke="#464646" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.49998 8.33333C8.42045 8.33333 9.16665 7.58714 9.16665 6.66667C9.16665 5.74619 8.42045 5 7.49998 5C6.57951 5 5.83331 5.74619 5.83331 6.66667C5.83331 7.58714 6.57951 8.33333 7.49998 8.33333Z" stroke="#464646" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2.22498 15.7916L6.33331 13.0332C6.99164 12.5916 7.94164 12.6416 8.53331 13.1499L8.80831 13.3916C9.45831 13.9499 10.5083 13.9499 11.1583 13.3916L14.625 10.4166C15.275 9.85822 16.325 9.85822 16.975 10.4166L18.3333 11.5832" stroke="#464646" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconAttachNote = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M6.66669 1.66675V4.16675" stroke="#464646" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.3333 1.66675V4.16675" stroke="#464646" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.83331 10.8333L12.5 10.8333" stroke="#464646" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.83331 14.1667H9.99998" stroke="#464646" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.3333 2.91675C16.1083 3.06675 17.5 4.12508 17.5 8.04175V13.1917C17.5 16.6251 16.6667 18.3417 12.5 18.3417H7.5C3.33333 18.3417 2.5 16.6251 2.5 13.1917L2.5 8.04175C2.5 4.12508 3.89167 3.07508 6.66667 2.91675L13.3333 2.91675Z" stroke="#464646" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// ─── Tooltip wrapper ─────────────────────────────────────────────────────────
function Tooltip({ text, children }: { text: string; children: ReactNode }) {
  const [show, setShow] = useState(false);
  return (
    <div className="relative flex items-center" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      {children}
      {show && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 flex flex-col items-center pointer-events-none">
          <div className="bg-[#FAFAFA] shadow-md rounded-lg px-3 py-2 text-xs font-semibold text-[#292929] whitespace-nowrap border border-[#EFEFEF]">
            {text}
          </div>
          <svg width="16" height="6" viewBox="0 0 16 6" fill="none">
            <path d="M14.0711 -2.51471C14.962 -2.51471 15.4081 -1.43757 14.7782 -0.807603L8.70711 5.26347C8.31658 5.654 7.68342 5.654 7.29289 5.26347L1.22183 -0.807603C0.591867 -1.43757 1.03803 -2.51471 1.92894 -2.51471L14.0711 -2.51471Z" fill="#FAFAFA"/>
          </svg>
        </div>
      )}
    </div>
  );
}

// ─── Sidebar ─────────────────────────────────────────────────────────────────
function Sidebar({ collapsed, onToggle }: { collapsed: boolean; onToggle: () => void }) {
  return (
    <aside className={`flex flex-col justify-between rounded-3xl border border-[#DCDCDC] bg-[#FAFAFA] transition-all duration-300 shrink-0 ${collapsed ? "w-16" : "w-[263px]"}`}
      style={{ minHeight: "calc(100vh - 47px)" }}>
      <div className="flex flex-col gap-6 px-3.5">
        <div className="flex items-center justify-between px-3.5 py-5">
          {!collapsed && (
            <img src="https://api.builder.io/api/v1/image/assets/TEMP/999648adc32cbf733d630d36a8175f12ff6b935a?width=280" alt="BNI Life" className="h-[50px] w-auto object-contain"/>
          )}
          <button onClick={onToggle} className="flex items-center justify-center p-1.5 rounded bg-white shadow-sm hover:shadow-md transition-shadow shrink-0">
            <IconSidebar />
          </button>
        </div>
        <nav className="flex flex-col gap-0">
          {!collapsed && <span className="px-5 pb-1 text-[11px] font-semibold text-[#989898] tracking-wider">WORKSPACE</span>}
          <div className="flex flex-col gap-0 pb-5">
            {/* Dashboard */}
            <div className="py-0.5">
              <Link to="/">
                <div className="flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer hover:bg-[#EFEFEF] transition-colors">
                  <div className="flex items-center justify-center w-5.5 shrink-0"><IconHome /></div>
                  {!collapsed && <span className="font-semibold text-[#7C7C7C] text-sm">Dashboard</span>}
                </div>
              </Link>
            </div>
            {/* Antrian — active */}
            <div className="py-0.5">
              <div className="flex items-center gap-3 px-3 py-2 rounded-md border border-[#EFEFEF] bg-white shadow-sm cursor-pointer">
                <div className="flex items-center justify-center w-5.5 shrink-0"><IconPeople /></div>
                {!collapsed && (
                  <div className="flex items-center justify-between flex-1 min-w-0">
                    <span className="font-semibold text-[#F47920] text-sm">Antrian</span>
                    <span className="flex items-center justify-center w-6 h-5 rounded-full bg-[#F47920] text-white text-[11px] font-medium">3</span>
                  </div>
                )}
              </div>
            </div>
            {/* Tiket Saya */}
            <div className="py-0.5">
              <Link to="/tickets">
                <div className="flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer hover:bg-[#EFEFEF] transition-colors">
                  <div className="flex items-center justify-center w-5.5 shrink-0"><IconTicket /></div>
                  {!collapsed && (
                    <div className="flex items-center justify-between flex-1 min-w-0">
                      <span className="font-semibold text-[#7C7C7C] text-sm">Tiket Saya</span>
                      <span className="flex items-center justify-center w-5 h-5 rounded-full border border-[#DCDCDC] bg-[#FAFAFA] text-[#464646] text-[11px] font-medium">1</span>
                    </div>
                  )}
                </div>
              </Link>
            </div>
            {/* Nasabah */}
            <div className="py-0.5">
              <Link to="/nasabah">
                <div className="flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer hover:bg-[#EFEFEF] transition-colors">
                  <div className="flex items-center justify-center w-5.5 shrink-0"><IconTagUser /></div>
                  {!collapsed && <span className="font-semibold text-[#7C7C7C] text-sm">Nasabah</span>}
                </div>
              </Link>
            </div>
          </div>
          {!collapsed && <span className="px-5 pb-1 text-[11px] font-semibold text-[#989898] tracking-wider">BANTUAN</span>}
          <div className="flex flex-col gap-0 pb-5">
            <div className="py-0.5">
              <Link to="/panduan">
                <div className="flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer hover:bg-[#EFEFEF] transition-colors">
                  <div className="flex items-center justify-center w-5.5 shrink-0"><IconDocument /></div>
                  {!collapsed && <span className="font-semibold text-[#7C7C7C] text-sm">Panduan</span>}
                </div>
              </Link>
            </div>
            <div className="py-0.5">
              <Link to="/template-respons">
                <div className="flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer hover:bg-[#EFEFEF] transition-colors">
                  <div className="flex items-center justify-center w-5.5 shrink-0"><IconNote2 /></div>
                  {!collapsed && <span className="font-semibold text-[#7C7C7C] text-sm">Template Respons</span>}
                </div>
              </Link>
            </div>
          </div>
        </nav>
      </div>
      {/* Profile */}
      <div className="flex items-center justify-between px-3 py-2 rounded-b-3xl bg-white border-t border-[#EFEFEF]">
        <div className="flex items-center gap-3">
          <div className="relative shrink-0">
            <img src="https://api.builder.io/api/v1/image/assets/TEMP/d7ad18ce3177ee04aff4d5cd844f1312f0da06c6?width=80" alt="Agent" className="w-10 h-10 rounded-full object-cover"/>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#22C554] border-[1.5px] border-[#FAFAFA]"/>
          </div>
          {!collapsed && <span className="text-xs font-semibold text-black">Agent</span>}
        </div>
        {!collapsed && <button className="text-[#292D32] hover:opacity-70 transition-opacity"><IconLogout /></button>}
      </div>
    </aside>
  );
}

// ─── Dummy Data ───────────────────────────────────────────────────────────────
type Channel = "Instagram" | "Tiktok" | "WhatsApp";

const queueItems = [
  { id: 1, name: "Budi Santoso", preview: "Apakah polis saya bisa mengocover....", time: "12:02 WIB", channel: "Instagram" as Channel, active: true },
  { id: 2, name: "Siti_invest",  preview: "Apakah polis saya bisa mengocover....", time: "11:02 WIB", channel: "Tiktok" as Channel, active: false },
  { id: 3, name: "Siti_invest",  preview: "Apakah polis saya bisa mengocover....", time: "11:02 WIB", channel: "WhatsApp" as Channel, active: false },
  { id: 4, name: "Siti_invest",  preview: "Apakah polis saya bisa mengocover....", time: "11:02 WIB", channel: "WhatsApp" as Channel, active: false },
  { id: 5, name: "Siti_invest",  preview: "Apakah polis saya bisa mengocover....", time: "11:02 WIB", channel: "WhatsApp" as Channel, active: false },
];

const channelBadge: Record<Channel, { bg: string; text: string; label: string }> = {
  Instagram: { bg: "bg-[#EFF6FF]", text: "text-[#3B8DF6]", label: "Instagram" },
  Tiktok:    { bg: "bg-[#EFEFEF]", text: "text-[#464646]", label: "Tiktok" },
  WhatsApp:  { bg: "bg-[#F0FDF4]", text: "text-[#22C554]", label: "WhatsApp" },
};

const chatMessages = [
  { id: 1, from: "customer", text: "Halo admin, saya ingin tanya soal klaim asuransi jiwa ayah saya...", time: "12:02 WIB" },
  { id: 2, from: "agent",    text: "Selamat pagi Bapak Budi. Turut berduka cita atas berpulangnya ayahanda. Baik, saya bantu untuk informasi pengajuan klaimnya. Bisa dibantu nomor polisnya Bapak?", time: "12:03 WIB" },
  { id: 3, from: "customer", text: "Nomor polisnya 899210023. Atas nama Hendra Santoso.", time: "12:04 WIB" },
];

// ─── Policy Drawer ────────────────────────────────────────────────────────────
export function PolicyDrawer({ onClose }: { onClose: () => void }) {
  const closeIcon = "https://www.figma.com/api/mcp/asset/cd35e3f6-afb5-477b-8e50-d458cec21e8a";
  const DetailCell = ({ label, value, strong = false }: { label: string; value: string; strong?: boolean }) => (
    <div className="flex flex-col gap-2">
      <span className="text-xs font-medium tracking-[-0.24px] text-[#7C7C7C]">{label}</span>
      <span className={`text-sm tracking-[-0.28px] text-[#464646] ${strong ? "font-semibold" : "font-medium"}`}>{value}</span>
    </div>
  );

  const SectionTitle = ({ children }: { children: ReactNode }) => (
    <div className="border-b border-[#EFEFEF] px-3.5 py-2.5">
      <h3 className="text-2xl font-semibold leading-[1.4] text-[#464646]">{children}</h3>
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 bg-white/70 backdrop-blur-[6px]">
      <button aria-label="Tutup drawer" className="absolute inset-0 cursor-default" onClick={onClose} />
      <div className="absolute right-[28px] top-[28px] flex h-[calc(100vh-56px)] w-[454px] flex-col overflow-hidden rounded-lg bg-[#EFEFEF] p-1 shadow-[0_18px_60px_rgba(0,0,0,0.12)]">
        <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-lg bg-white">
          <header className="shrink-0 border-b border-[#EFEFEF] bg-white p-3.5">
            <div className="flex items-start justify-between gap-6">
              <div className="w-[280px]">
                <h2 className="text-2xl font-semibold leading-[1.4] text-[#464646]">Detail Polis Nasabah</h2>
                <p className="mt-1 text-base tracking-[-0.32px] text-[#7C7C7C]">Budi Santoso - 899210023</p>
              </div>
              <button onClick={onClose} className="mt-1 rounded p-0.5 hover:bg-[#FAFAFA]" aria-label="Tutup detail polis">
                <img src={closeIcon} alt="" className="h-6 w-6" />
              </button>
            </div>
          </header>

          <div className="min-h-0 flex-1 overflow-y-auto px-3.5 py-2.5">
            <div className="space-y-8">
              <section className="rounded-lg border border-[#EFEFEF] bg-[#FAFAFA]">
                <div className="flex items-center justify-between border-b border-[#EFEFEF] px-3.5 py-2.5">
                  <h3 className="text-sm font-semibold tracking-[-0.28px] text-black">Status polis</h3>
                  <span className="inline-flex h-[22px] items-center gap-1.5 rounded-full bg-[#F0FDF4] pl-1.5 pr-2 text-xs font-medium tracking-[-0.24px] text-[#22C554]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#22C554]" />
                    Aktif
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-x-10 gap-y-3.5 px-3.5 py-2.5">
                  <DetailCell label="Produk" value="BLife Spectra" />
                  <DetailCell label="Mata Uang" value="IDR (Rupiah)" />
                  <DetailCell label="Tanggal Mulai" value="12 Jan 2021" />
                  <DetailCell label="Masa Akhir" value="12 Jan 2041" />
                </div>
              </section>

              <section className="space-y-6">
                <SectionTitle>Data Nasabah</SectionTitle>
                <div className="space-y-6">
                  <div className="rounded-lg border border-[#EFEFEF] bg-[#FAFAFA] px-3.5 py-2.5">
                    <div className="grid grid-cols-2 gap-x-10 gap-y-3.5">
                      <DetailCell label="Pemegang Polis" value="Budi Santoso" />
                      <DetailCell label="Tertanggung Utama" value="Budi Santoso" />
                      <DetailCell label="Tanggal Lahir" value="15 Agu 1985" />
                      <DetailCell label="No. Telepon" value="0812-3456-7890" />
                    </div>
                  </div>

                  <div className="rounded-lg border border-[#EFEFEF] bg-[#FAFAFA]">
                    <div className="border-b border-[#EFEFEF] px-3.5 py-2.5">
                      <h4 className="text-sm font-semibold tracking-[-0.28px] text-black">Manfaat & UP</h4>
                    </div>
                    <div className="space-y-3.5 px-3.5 py-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium tracking-[-0.24px] text-[#7C7C7C]">Manfaat Meninggal Dunia</span>
                        <span className="text-sm font-semibold tracking-[-0.28px] text-[#464646]">Rp 250.000.000</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium tracking-[-0.24px] text-[#7C7C7C]">Rider: Penyakit Kritis</span>
                        <span className="text-sm font-semibold tracking-[-0.28px] text-[#464646]">100.000.000</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="space-y-6">
                <SectionTitle>Info Pembayaran</SectionTitle>
                <div className="space-y-3.5 px-3.5 py-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium tracking-[-0.24px] text-[#7C7C7C]">Metode Bayar</span>
                    <span className="text-sm font-semibold tracking-[-0.28px] text-[#464646]">Autodebet Rek. BNI</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium tracking-[-0.24px] text-[#7C7C7C]">Siklus Premi</span>
                    <span className="text-sm font-semibold tracking-[-0.28px] text-[#464646]">Bulanan</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium tracking-[-0.24px] text-[#7C7C7C]">Nominal Premi</span>
                    <span className="text-sm font-semibold tracking-[-0.28px] text-[#464646]">Rp 1.250.000</span>
                  </div>
                </div>
                <div className="rounded-lg border border-[#FEE6CC] bg-[#FFF3E8] px-3.5 py-2.5">
                  <div className="flex items-center justify-between text-[#D4640F]">
                    <span className="text-xs font-medium tracking-[-0.24px]">Jatuh Tempo Berikutnya</span>
                    <span className="text-sm font-semibold tracking-[-0.28px]">12 Okt 2026</span>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <footer className="shrink-0 border-t border-[#EFEFEF] bg-white p-3.5">
            <div className="flex items-center gap-6">
              <button onClick={() => window.alert("Info polis berhasil disalin")} className="flex-1 rounded-md px-4 py-2 text-base font-semibold tracking-[-0.32px] text-[#F47920] hover:bg-[#FFF3E8]">
                Salin Info
              </button>
              <button onClick={() => window.alert("E-Polis siap dikirim ke WhatsApp")} className="flex-1 rounded-md bg-[#F47920] px-4 py-2 text-base font-semibold tracking-[-0.32px] text-[#FAFAFA] shadow-[0_1px_3px_rgba(244,121,32,0.08)] hover:bg-[#D4640F]">
                Kirim E-Polis ke WA
              </button>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

// ─── New Ticket Modal ─────────────────────────────────────────────────────────
export function NewTicketModal({ onClose }: { onClose: () => void }) {
  const [kategori, setKategori] = useState("Pengecekan Klaim");
  const [prioritas, setPrioritas] = useState("Tinggi");
  const closeIcon = "https://www.figma.com/api/mcp/asset/afd781e8-7a67-49b0-a6ba-70f2e04d8d13";
  const uploadIcon = "https://www.figma.com/api/mcp/asset/bc147c3e-fe10-46e2-8df0-da254eb1bc74";

  const SelectField = ({
    label,
    value,
    onChange,
    options,
  }: {
    label: string;
    value: string;
    onChange: (value: string) => void;
    options: string[];
  }) => (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium tracking-[-0.28px] text-[#464646]">{label}</span>
      <div className="relative">
        <select
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="h-[46px] w-full appearance-none rounded-lg border border-[#EFEFEF] bg-[#FAFAFA] px-3.5 pr-10 text-base tracking-[-0.32px] text-[#7C7C7C] shadow-[0_0_2px_rgba(146,202,255,0.26)] outline-none"
        >
          {options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
        <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2">
          <IconArrowDown />
        </div>
      </div>
    </label>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(13,13,13,0.10)] p-6 backdrop-blur-[5px]">
      <button aria-label="Tutup modal" className="absolute inset-0 cursor-default" onClick={onClose} />
      <div className="relative flex max-h-[calc(100vh-48px)] w-[620px] flex-col overflow-hidden rounded-lg bg-[#EFEFEF] p-1">
        <div className="flex min-h-0 flex-col overflow-hidden rounded-lg border border-[#EFEFEF] bg-white shadow-[0_1px_3px_rgba(244,121,32,0.08)]">
          <header className="shrink-0 border-b border-[#EFEFEF] p-3.5">
            <div className="flex items-start justify-between gap-8">
              <div>
                <h2 className="text-2xl font-semibold leading-[1.4] text-[#464646]">Buat Tiket Baru</h2>
                <p className="mt-1 text-base tracking-[-0.32px] text-[#7C7C7C]">Isi form berikut untuk mencatat interaksi nasabah.</p>
              </div>
              <button onClick={onClose} className="mt-1 rounded p-0.5 hover:bg-[#FAFAFA]" aria-label="Tutup buat tiket">
                <img src={closeIcon} alt="" className="h-6 w-6" />
              </button>
            </div>
          </header>

          <div className="min-h-0 flex-1 overflow-y-auto p-3.5">
            <div className="space-y-6">
              <div className="flex items-end gap-6">
                <label className="block flex-1">
                  <span className="mb-1.5 block text-sm font-medium tracking-[-0.28px] text-[#464646]">Nasabah Terkait</span>
                  <div className="flex h-[46px] items-center gap-2 rounded-lg border border-[#DCDCDC] bg-[#FAFAFA] px-3.5 shadow-[0_1px_3px_rgba(10,13,18,0.05)]">
                    <IconSearch />
                    <span className="text-base tracking-[-0.32px] text-[#7C7C7C]">Cari nomor polis atau nama Nasabah</span>
                  </div>
                </label>
                <button onClick={() => window.alert("Form tambah nasabah baru dibuka")} className="h-[41px] rounded-md px-4 py-2 text-base font-semibold tracking-[-0.32px] text-[#F47920]">
                  Belum ada data? Buat Baru
                </button>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <SelectField
                  label="Kategori"
                  value={kategori}
                  onChange={setKategori}
                  options={["Pengecekan Klaim", "Klaim Asuransi", "Perubahan Polis", "Informasi Premi", "Keluhan Layanan", "Pembatalan"]}
                />
                <SelectField label="Prioritas" value={prioritas} onChange={setPrioritas} options={["Tinggi", "Sedang", "Kritis"]} />
              </div>

              <label className="block">
                <span className="mb-1.5 block text-sm font-medium tracking-[-0.28px] text-[#3D3D3D]">Judul / Ringkasan</span>
                <textarea
                  placeholder="Contoh: Nasabah menanyakan status pencairan klaim meninggal dunia"
                  className="h-[128px] w-full resize-none rounded-lg border border-[#EFEFEF] bg-[#FAFAFA] px-3.5 py-2.5 text-base leading-6 text-[#464646] placeholder-[#7C7C7C] outline-none"
                />
              </label>

              <label className="block">
                <span className="mb-1.5 block text-sm font-medium tracking-[-0.28px] text-[#3D3D3D]">Deskripsi Detail</span>
                <textarea
                  placeholder="Tuliskan detail interaksi, keluhan, atau permintaan nasabah secara lengkap..."
                  className="h-[128px] w-full resize-none rounded-lg border border-[#EFEFEF] bg-[#FAFAFA] px-3.5 py-2.5 text-base leading-6 text-[#464646] placeholder-[#7C7C7C] outline-none"
                />
              </label>

              <div>
                <div className="mb-1.5 text-sm font-medium tracking-[-0.28px] text-black">Lampiran</div>
                <div className="flex h-[124px] flex-col items-center justify-center gap-3.5 rounded-lg border border-[#EFEFEF] bg-[#FAFAFA] px-3.5 py-2.5 text-center">
                  <img src={uploadIcon} alt="" className="h-6 w-6" />
                  <div className="text-sm font-medium tracking-[-0.28px]">
                    <p className="text-[#525252]">
                      <span className="text-[#015570]">Klik untuk unggah</span> atau tarik dan lepas file di sini
                    </p>
                    <p className="mt-2 text-[#989898]">PDF, JPG, PNG (Maks 5MB)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer className="shrink-0 border-t border-[#EFEFEF] p-3.5">
            <div className="flex items-center gap-6">
              <button onClick={onClose} className="flex-1 rounded-md px-4 py-2 text-base font-semibold tracking-[-0.32px] text-[#656565] hover:bg-[#FAFAFA]">
                Batal
              </button>
              <button onClick={onClose} className="flex-1 rounded-md bg-[#F47920] px-4 py-2 text-base font-semibold tracking-[-0.32px] text-[#FAFAFA] shadow-[0_1px_3px_rgba(244,121,32,0.08)] hover:bg-[#D4640F]">
                Simpan & Buat Tiket
              </button>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function Antrian() {
  const [activeQueue, setActiveQueue] = useState<"Di Tangani" | "Baru Masuk">("Di Tangani");
  const [selectedId, setSelectedId] = useState(1);
  const [chatTab, setChatTab] = useState<"Balas Nasabah" | "Catatan Internal">("Balas Nasabah");
  const [message, setMessage] = useState("");
  const [showPolicyDrawer, setShowPolicyDrawer] = useState(false);
  const [showNewTicketModal, setShowNewTicketModal] = useState(false);
  const [ticketKategori, setTicketKategori] = useState("Pengecekan Klaim");
  const [ticketPrioritas, setTicketPrioritas] = useState("Tinggi");
  const [ticketDeskripsi, setTicketDeskripsi] = useState("");
  const [queueSearch, setQueueSearch] = useState("");
  const [sentMessages, setSentMessages] = useState<Array<{ id: number; text: string; time: string }>>([]);
  const [notice, setNotice] = useState("");
  const [isChatActive, setIsChatActive] = useState(true);

  const filteredQueueItems = queueItems.filter((item) =>
    [item.name, item.preview, item.channel].some((value) => value.toLowerCase().includes(queueSearch.trim().toLowerCase())),
  );

  const showNotice = (text: string) => {
    setNotice(text);
    window.setTimeout(() => setNotice(""), 2200);
  };

  const sendMessage = () => {
    if (!message.trim()) {
      showNotice("Tulis pesan terlebih dahulu");
      return;
    }

    setSentMessages((current) => [
      ...current,
      { id: Date.now(), text: message.trim(), time: new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }) },
    ]);
    setMessage("");
    showNotice(chatTab === "Balas Nasabah" ? "Pesan terkirim" : "Catatan internal tersimpan");
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex gap-2 p-2 sm:gap-4 sm:p-4 lg:gap-[33px] lg:p-4 lg:pr-8 lg:pb-8">
      <CrmSidebar active="antrian" />

      {/* Main content area */}
      <div className="flex-1 min-w-0 flex flex-col gap-4 rounded-lg border border-[#EFEFEF] bg-white overflow-hidden">

        {/* Top nav */}
        <header className="flex items-center justify-between px-6 sm:px-8 h-[72px] border-b border-[#EFEFEF] gap-4 shrink-0">
          <span className="text-sm font-semibold text-[#F47920] whitespace-nowrap">Live Chat - Workspace</span>
          <div className="flex-1 max-w-md">
            <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-lg border border-[#DCDCDC] bg-[#FAFAFA] shadow-sm">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="#7C7C7C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 22L20 20" stroke="#7C7C7C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <input className="w-full bg-transparent text-base text-[#464646] outline-none placeholder:text-[#7C7C7C]" placeholder="Search" />
            </div>
          </div>
          <button onClick={() => showNotice("Tidak ada notifikasi baru")} className="flex items-center justify-center w-10 h-10 rounded-md border border-[#DCDCDC] hover:bg-[#FAFAFA] transition-colors shrink-0">
            <IconBell />
          </button>
        </header>

        {/* 3-column workspace */}
        <div className="flex gap-3.5 px-3.5 pb-3.5 flex-1 min-h-0 overflow-hidden">

          {/* ── Column 1: Queue list ──────────────────────────────────────── */}
          <div className="w-[321px] shrink-0 flex flex-col gap-3.5 rounded-lg border border-[#EFEFEF] bg-white p-3.5">
            {/* Title */}
            <p className="text-base font-medium text-[#3D3D3D]">Antrian Pesan</p>
            {/* Search */}
            <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-lg border border-[#DCDCDC] bg-white shadow-sm">
              <IconSearch />
              <input
                value={queueSearch}
                onChange={(event) => setQueueSearch(event.target.value)}
                className="w-full bg-transparent text-sm text-[#464646] outline-none placeholder:text-[#7C7C7C]"
                placeholder="cari nama atau no polish...."
              />
            </div>
            {/* Tabs */}
            <div className="flex items-center gap-1 p-1 rounded-lg border border-[#EFEFEF] bg-[#FAFAFA]">
              {(["Di Tangani", "Baru Masuk"] as const).map((tab) => (
                <button key={tab} onClick={() => setActiveQueue(tab)}
                  className={`flex-1 flex items-center justify-center gap-2 h-9 rounded-md text-sm font-medium transition-all ${
                    activeQueue === tab
                      ? "bg-white border border-[#EFEFEF] shadow-sm text-[#F47920]"
                      : "text-[#656565]"
                  }`}>
                  {tab}
                  <span className={`inline-flex items-center justify-center w-5 h-5 rounded-full text-xs font-normal ${
                    activeQueue === tab
                      ? "bg-[#F47920] text-white border border-[#FCC799]"
                      : "border border-[#DCDCDC] text-[#7C7C7C]"
                  }`}>
                    {tab === "Di Tangani" ? 3 : 1}
                  </span>
                </button>
              ))}
            </div>
            {/* Queue items */}
            <div className="flex flex-col flex-1 overflow-y-auto -mx-3.5">
              {filteredQueueItems.map((item, i) => {
                const cb = channelBadge[item.channel];
                const isFirst = i === 0;
                const isSelected = selectedId === item.id;
                return (
                  <div key={item.id} onClick={() => setSelectedId(item.id)}
                    className={`flex items-start gap-2 px-3.5 py-2 border-b border-[#EFEFEF] cursor-pointer transition-colors ${
                      isFirst ? "bg-[#FAFAFA]" : isSelected ? "bg-[#FFF8F3]" : "bg-white hover:bg-[#FAFAFA]"
                    }`}>
                    <AvatarPlaceholder size={40}/>
                    <div className="flex-1 min-w-0 flex flex-col gap-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-medium text-[#464646] truncate">{item.name}</span>
                        <span className="text-xs font-medium text-[#7C7C7C] shrink-0">{item.time}</span>
                      </div>
                      <p className="text-xs text-[#7C7C7C] truncate">{item.preview}</p>
                      <span className={`self-start text-xs font-medium px-2 py-0.5 rounded-full ${cb.bg} ${cb.text}`}>
                        {cb.label}
                      </span>
                    </div>
                  </div>
                );
              })}
              {filteredQueueItems.length === 0 ? (
                <div className="px-4 py-8 text-center text-sm text-[#7C7C7C]">Antrian tidak ditemukan.</div>
              ) : null}
            </div>
          </div>

          {/* ── Column 2: Chat ───────────────────────────────────────────── */}
          <div className="flex-1 min-w-0 flex flex-col rounded-lg border border-[#EFEFEF] bg-white overflow-hidden">
            {/* Chat header */}
            <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-[#EFEFEF] shrink-0">
              <div className="flex items-center gap-2">
                <AvatarPlaceholder size={40}/>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium text-[#464646]">Budi Santoso</span>
                    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium ${isChatActive ? "bg-[#F0FDF4] text-[#22C554]" : "bg-[#EFEFEF] text-[#7C7C7C]"}`}>
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><circle cx="4" cy="4" r="3" fill="currentColor"/></svg>
                      {isChatActive ? "Aktif" : "Selesai"}
                    </span>
                  </div>
                  <span className="text-xs font-medium text-[#7C7C7C]">Instagram Direct</span>
                </div>
              </div>
              <button onClick={() => { setIsChatActive(false); showNotice("Chat diakhiri"); }} className="flex items-center gap-2 px-3.5 py-1.5 rounded-md border border-[#EF4444] text-[#EF4444] text-sm font-semibold hover:bg-[#FEF2F2] transition-colors">
                {isChatActive ? "Akhiri Chat" : "Chat Selesai"}
              </button>
            </div>

            {/* Date badge */}
            <div className="flex justify-center py-4 shrink-0">
              <span className="px-3 py-1 rounded-full bg-[#EFEFEF] text-[#464646] text-xs font-medium">Hari ini, 12:02</span>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-3.5 pb-4 flex flex-col gap-6">
              {chatMessages.map((msg) => (
                <div key={msg.id} className={`flex items-start gap-2 ${msg.from === "agent" ? "justify-end" : ""}`}>
                  {msg.from === "customer" && <AvatarPlaceholder size={40}/>}
                  <div className={`flex flex-col gap-2 max-w-[280px] ${msg.from === "agent" ? "items-end" : "items-start"}`}>
                    {msg.from === "customer" ? (
                      <div className="px-2.5 py-2 rounded-tr-lg rounded-br-lg rounded-bl-lg border border-[#EFEFEF] bg-white">
                        <p className="text-xs font-medium text-[#464646]">{msg.text}</p>
                        <p className="text-[10px] font-medium text-[#7C7C7C] text-right mt-2">{msg.time}</p>
                      </div>
                    ) : (
                      <div className="px-2.5 py-2 rounded-tl-lg rounded-br-lg rounded-bl-lg bg-[#016986] max-w-[390px]">
                        <p className="text-xs font-medium text-white">{msg.text}</p>
                        <p className="text-[10px] font-medium text-[#FAFAFA] text-right mt-2">{msg.time}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {sentMessages.map((msg) => (
                <div key={msg.id} className="flex items-start justify-end gap-2">
                  <div className="flex max-w-[390px] flex-col items-end gap-2">
                    <div className="rounded-bl-lg rounded-br-lg rounded-tl-lg bg-[#016986] px-2.5 py-2">
                      <p className="text-xs font-medium text-white">{msg.text}</p>
                      <p className="mt-2 text-right text-[10px] font-medium text-[#FAFAFA]">{msg.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Input area */}
            <div className="border-t border-[#EFEFEF] shrink-0">
              {/* Reply tabs */}
              <div className="flex items-center gap-1 p-1 rounded-t-lg border-b border-[#EFEFEF] bg-[#FAFAFA] mx-0">
                {(["Balas Nasabah", "Catatan Internal"] as const).map((tab) => (
                  <button key={tab} onClick={() => setChatTab(tab)}
                    className={`flex-1 h-9 rounded-md text-sm font-medium transition-all ${
                      chatTab === tab
                        ? "bg-white border border-[#EFEFEF] shadow-sm text-[#F47920]"
                        : "text-[#656565]"
                    }`}>
                    {tab}
                  </button>
                ))}
              </div>
              {/* Textarea */}
              <div className="px-0">
                <textarea value={message} onChange={e => setMessage(e.target.value)}
                  placeholder="Ketik balasan..."
                  rows={3}
                  className="w-full px-3.5 py-2.5 text-base text-[#464646] placeholder-[#7C7C7C] bg-[#FAFAFA] border-x-0 border-b-0 border-t border-[#EFEFEF] focus:outline-none resize-none"/>
              </div>
              {/* Send bar */}
              <div className="flex items-center justify-between px-3.5 py-3 bg-white border-t border-[#EFEFEF]">
                <div className="flex items-center gap-6">
                  <Tooltip text="Lampirkan tautan">
                    <button onClick={() => showNotice("Lampiran tautan ditambahkan")} className="hover:opacity-70 transition-opacity"><IconAttachLink /></button>
                  </Tooltip>
                  <Tooltip text="Upload gambar">
                    <button onClick={() => showNotice("Upload gambar dipilih")} className="hover:opacity-70 transition-opacity"><IconAttachImage /></button>
                  </Tooltip>
                  <Tooltip text="Lampirkan catatan">
                    <button onClick={() => showNotice("Catatan dilampirkan")} className="hover:opacity-70 transition-opacity"><IconAttachNote /></button>
                  </Tooltip>
                </div>
                <button onClick={sendMessage} className="flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#F47920] text-white text-sm font-semibold shadow-sm hover:bg-[#D4640F] transition-colors">
                  Kirim <IconSend2 />
                </button>
              </div>
            </div>
          </div>

          {/* ── Column 3: Policy + Ticket ─────────────────────────────────── */}
          <div className="w-[258px] shrink-0 flex flex-col gap-3.5">
            {/* Profile / Policy card */}
            <div className="rounded-lg border border-[#EFEFEF] bg-white flex flex-col">
              {/* Header */}
              <div className="flex items-center gap-2 px-3.5 py-2.5 border-b border-[#EFEFEF]">
                <AvatarPlaceholder size={40}/>
                <div>
                  <p className="text-sm font-medium text-[#464646]">Budi Santoso</p>
                  <p className="text-xs text-[#7C7C7C]">Pemegang polis</p>
                </div>
              </div>
              {/* Policy details */}
              <div className="px-3.5 py-2.5 flex flex-col gap-3.5">
                <div className="flex items-start gap-10">
                  <div className="flex flex-col gap-2">
                    <p className="text-xs text-[#7C7C7C]">No Polis</p>
                    <p className="text-sm font-medium text-[#464646]">899210023</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-xs text-[#7C7C7C]">Status</p>
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#F0FDF4] text-[#22C554] text-xs font-medium">
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><circle cx="4" cy="4" r="3" fill="#22C554"/></svg>
                      Aktif
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="flex flex-col gap-2">
                    <p className="text-xs text-[#7C7C7C]">Produk</p>
                    <p className="text-sm font-medium text-[#464646]">BLife Spectra</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-xs text-[#7C7C7C]">UP</p>
                    <p className="text-sm font-medium text-[#464646]">Rp 250.000.000</p>
                  </div>
                </div>
              </div>
              {/* Lihat Detail Polis */}
              <div className="px-3.5 pb-3.5">
                <button onClick={() => setShowPolicyDrawer(true)}
                  className="flex items-center justify-center gap-2 w-full py-1.5 rounded-md border border-[#EFEFEF] text-sm font-semibold text-[#464646] hover:bg-[#FAFAFA] transition-colors">
                  Lihat Detail Polis
                </button>
              </div>
            </div>

            {/* Buat Tiket card */}
            <div className="rounded-lg border border-[#EFEFEF] bg-white flex flex-col flex-1">
              <div className="px-3.5 py-2.5 border-b border-[#EFEFEF]">
                <p className="text-base font-medium text-[#3D3D3D]">Buat Tiket</p>
              </div>
              <div className="px-3.5 py-2.5 flex flex-col gap-3.5 flex-1">
                {/* Kategori */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-[#464646]">Kategori</label>
                  <div className="relative">
                    <select value={ticketKategori} onChange={e => setTicketKategori(e.target.value)}
                      className="w-full appearance-none px-3.5 py-2.5 rounded-lg border border-[#EFEFEF] bg-[#FAFAFA] text-sm text-[#464646] focus:outline-none focus:ring-2 focus:ring-[#F47920]/20 pr-8">
                      <option>Pengecekan Klaim</option>
                      <option>Klaim Asuransi</option>
                      <option>Perubahan Polis</option>
                      <option>Informasi Premi</option>
                      <option>Keluhan Layanan</option>
                      <option>Pembatalan</option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"><IconArrowDown /></div>
                  </div>
                </div>
                {/* Prioritas */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-[#464646]">Prioritas</label>
                  <div className="relative">
                    <select value={ticketPrioritas} onChange={e => setTicketPrioritas(e.target.value)}
                      className="w-full appearance-none px-3.5 py-2.5 rounded-lg border border-[#EFEFEF] bg-[#FAFAFA] text-sm text-[#464646] focus:outline-none focus:ring-2 focus:ring-[#F47920]/20 pr-8">
                      <option>Sedang</option>
                      <option>Tinggi</option>
                      <option>Kritis</option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"><IconArrowDown /></div>
                  </div>
                </div>
                {/* Deskripsi */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-[#3D3D3D]">Deskripsi</label>
                  <textarea value={ticketDeskripsi} onChange={e => setTicketDeskripsi(e.target.value)}
                    placeholder="Masukan Deskripsi" rows={4}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#EFEFEF] bg-[#FAFAFA] text-sm text-[#464646] placeholder-[#7C7C7C] focus:outline-none focus:ring-2 focus:ring-[#016986]/20 resize-none"/>
                </div>
                {/* Buat Tiket Baru */}
                <button onClick={() => setShowNewTicketModal(true)}
                  className="w-full py-1.5 rounded-md bg-[#016986] text-white text-sm font-semibold hover:bg-[#015570] transition-colors">
                  Buat Tiket Baru
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlays */}
      {showPolicyDrawer && <PolicyDrawer onClose={() => setShowPolicyDrawer(false)}/>}
      {showNewTicketModal && <NewTicketModal onClose={() => setShowNewTicketModal(false)}/>}
      {notice ? (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-lg bg-[#292929] px-4 py-2 text-sm font-semibold text-white shadow-lg">
          {notice}
        </div>
      ) : null}
    </div>
  );
}
