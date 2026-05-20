import { useEffect, useState } from "react";
import BuilderAntrianPage from "../pages/BuilderAntrianPage";
import BuilderHomeDashboardPage from "../pages/BuilderHomeDashboardPage";
import BuilderNasabahPage from "../pages/BuilderNasabahPage";
import BuilderPanduanPage from "../pages/BuilderPanduanPage";
import BuilderTemplateResponsPage from "../pages/BuilderTemplateResponsPage";
import BuilderTicketDetailPage from "../pages/BuilderTicketDetailPage";
import BuilderTeleponPage from "../pages/BuilderTeleponPage";
import BuilderTicketsPage from "../pages/BuilderTicketsPage";
import SignInFlowPage from "../pages/SignInFlowPage";

export function CrmPrototypeApp() {
  const [path, setPath] = useState(() => window.location.pathname);

  useEffect(() => {
    const syncPath = () => setPath(window.location.pathname);
    window.addEventListener("popstate", syncPath);
    return () => window.removeEventListener("popstate", syncPath);
  }, []);

  if (path === "/signin") return <SignInFlowPage />;
  if (path === "/antrian") return <BuilderAntrianPage />;
  if (path === "/telepon") return <BuilderTeleponPage />;
  if (path === "/tickets/detail") return <BuilderTicketDetailPage />;
  if (path === "/tickets") return <BuilderTicketsPage />;
  if (path === "/nasabah") return <BuilderNasabahPage />;
  if (path === "/panduan") return <BuilderPanduanPage />;
  if (path === "/template-respons") return <BuilderTemplateResponsPage />;

  return <BuilderHomeDashboardPage />;
}
