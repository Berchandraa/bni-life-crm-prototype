import type { PropsWithChildren } from "react";
import type { CrmRouteId } from "../types/crm";
import { CrmSidebar } from "./CrmSidebar";

type CrmPageShellProps = PropsWithChildren<{
  activeRoute: CrmRouteId;
  title: string;
}>;

const searchIcon = "https://www.figma.com/api/mcp/asset/71cf34b9-6187-4935-8936-2d22740b8eb9";
const bellIcon = "https://www.figma.com/api/mcp/asset/6cfa3f93-8ccb-4c94-85f7-29658219180e";

export function CrmPageShell({ activeRoute, title, children }: CrmPageShellProps) {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#151515]">
      <div className="mx-auto flex min-h-screen w-full max-w-[1632px] gap-8 px-2 py-4">
        <CrmSidebar activeRoute={activeRoute} />
        <main className="flex-1 overflow-hidden rounded-[16px] border border-[#D8CDC3] bg-white">
          <div className="flex h-[72px] items-center justify-between border-b border-[#D8CDC3] px-8">
            <div className="text-[14px] font-semibold tracking-[-0.28px] text-[#A34C32]">{title}</div>
            <div className="flex flex-1 items-center justify-end gap-6">
              <div className="flex h-10 w-[433px] items-center gap-3 rounded-[6px] border border-[#D8CDC3] bg-[#FAF8F5] px-4 text-[14px] text-[#9C8F84] shadow-[0_1px_4px_rgba(21,21,21,0.04)]">
                <img src={searchIcon} alt="" className="h-5 w-5" />
                <span>Search</span>
              </div>
              <button className="flex h-10 w-10 items-center justify-center rounded-[6px] border border-[#D8CDC3] bg-white shadow-[0_1px_4px_rgba(21,21,21,0.04)]">
                <img src={bellIcon} alt="Notifikasi" className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="px-8 py-5">{children}</div>
        </main>
      </div>
    </div>
  );
}
