import { helpItems, workspaceItems } from "../data/navigation";
import type { CrmRouteId } from "../types/crm";

type CrmSidebarProps = {
  activeRoute: CrmRouteId;
};

const assetUrls = {
  logo: "https://www.figma.com/api/mcp/asset/2824bebb-6aea-470a-a1ad-48f8485f98cc",
  collapse: "https://www.figma.com/api/mcp/asset/cedf73c6-8ddb-474c-8b7f-4b62a392ee3f",
  dashboard: "https://www.figma.com/api/mcp/asset/55a6c500-6000-4dbf-8b03-9f3459c11747",
  queue: "https://www.figma.com/api/mcp/asset/fd7926f2-e983-4751-a259-e37679c3e695",
  ticket: "https://www.figma.com/api/mcp/asset/ed07bf50-e9b7-418a-bc12-016401a4b425",
  customer: "https://www.figma.com/api/mcp/asset/a487a130-4967-47e8-9f0d-d1d9c89a59c6",
  guide: "https://www.figma.com/api/mcp/asset/6ab8d5d5-731a-4d3f-acec-446a46c04741",
  template: "https://www.figma.com/api/mcp/asset/dbe237a0-9d05-424f-801f-54c3609dac57",
  agent: "https://www.figma.com/api/mcp/asset/9195da21-5fb6-4680-91ea-139b3d984d3b",
  logout: "https://www.figma.com/api/mcp/asset/40df4910-9ff2-41a9-a5c4-19eafba30589",
};

const navIcons: Record<string, string> = {
  dashboard: assetUrls.dashboard,
  queue: assetUrls.queue,
  tickets: assetUrls.ticket,
  customers: assetUrls.customer,
  guide: assetUrls.guide,
  templates: assetUrls.template,
};

const activeIconFilter =
  "brightness(0) saturate(100%) invert(48%) sepia(87%) saturate(1447%) hue-rotate(349deg) brightness(99%) contrast(94%)";
const inactiveIconFilter = "grayscale(1) brightness(0.52)";

export function CrmSidebar({ activeRoute }: CrmSidebarProps) {
  return (
    <aside className="flex min-h-[calc(100vh-28px)] w-[263px] shrink-0 flex-col rounded-[24px] border border-[#DCDCDC] bg-[#FAFAFA] p-4">
      <div className="mb-9 flex h-[64px] items-center justify-between rounded-[12px] border border-[#EFEFEF] bg-white px-4">
        <img src={assetUrls.logo} alt="BNI Life" className="h-[48px] w-[128px] object-contain object-left" />
        <button className="flex h-8 w-8 items-center justify-center rounded-[6px] border border-[#EFEFEF] bg-white shadow-[0_6px_18px_rgba(0,0,0,0.06)]">
          <img src={assetUrls.collapse} alt="" className="h-4 w-4" />
        </button>
      </div>

      <div className="mb-2 px-2 text-[12px] font-semibold tracking-[-0.24px] text-[#989898]">WORKSPACE</div>
      <div className="space-y-1">
        {workspaceItems.map((item) => {
          const active = item.id === activeRoute;
          return (
            <div
              key={item.id}
              className={`flex h-[41px] items-center gap-3 rounded-[6px] px-3 ${
                active ? "border border-[#EFEFEF] bg-white shadow-[0_4px_10px_rgba(0,0,0,0.04)]" : ""
              }`}
            >
              <img
                src={navIcons[item.iconKey]}
                alt=""
                className="h-5 w-5"
                style={{ filter: active ? activeIconFilter : inactiveIconFilter }}
              />
              <div className={`text-[15px] font-semibold ${active ? "text-[#F47920]" : "text-[#656565]"}`}>
                {item.label}
              </div>
              {item.badge ? (
                <div
                  className={`ml-auto flex h-[22px] min-w-[22px] items-center justify-center rounded-full px-2 text-[12px] ${
                    active ? "bg-[#F47920] text-white" : "border border-[#DCDCDC] bg-[#FAFAFA] text-[#7C7C7C]"
                  }`}
                >
                  {item.badge}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>

      <div className="mb-2 mt-8 px-2 text-[12px] font-semibold tracking-[-0.24px] text-[#989898]">BANTUAN</div>
      <div className="space-y-1">
        {helpItems.map((item) => (
          <div key={item.id} className="flex h-[41px] items-center gap-3 rounded-[6px] px-3 text-[15px] font-semibold text-[#656565]">
            <img src={navIcons[item.iconKey]} alt="" className="h-5 w-5" style={{ filter: inactiveIconFilter }} />
            <span>{item.label}</span>
          </div>
        ))}
      </div>

      <div className="mt-auto flex h-[58px] items-center justify-between border-t border-[#EFEFEF] pt-4">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img src={assetUrls.agent} alt="Agent" className="h-8 w-8 rounded-full object-cover" />
            <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-white bg-[#22C554]" />
          </div>
          <span className="text-[13px] font-semibold text-[#262626]">Agent</span>
        </div>
        <img src={assetUrls.logout} alt="" className="h-6 w-6" style={{ filter: inactiveIconFilter }} />
      </div>
    </aside>
  );
}
