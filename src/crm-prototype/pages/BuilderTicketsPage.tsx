import { useState } from "react";
import CrmSidebar from "../components/CrmSidebar";
import { NewTicketModal } from "./BuilderAntrianPage";

const assets = {
  logo: "https://www.figma.com/api/mcp/asset/1b743d24-968c-4db6-85b9-2a77d18e1fcc",
  sidebar: "https://www.figma.com/api/mcp/asset/f293203f-2a8e-4f57-b4ae-ebee2255d50b",
  home: "https://www.figma.com/api/mcp/asset/a860b85d-ee16-41d8-a592-6db642778e56",
  people: "https://www.figma.com/api/mcp/asset/2fdc9fa3-fa22-49d8-87bb-41307d13471c",
  ticket: "https://www.figma.com/api/mcp/asset/8e1ff790-63e7-49be-a9c4-7f79a43c8b84",
  customer: "https://www.figma.com/api/mcp/asset/726173ae-31a4-4a61-858d-8815e294a309",
  guide: "https://www.figma.com/api/mcp/asset/a207cf24-a194-4017-a367-0418f036a076",
  template: "https://www.figma.com/api/mcp/asset/860c0f06-cc08-44f0-9340-f935c188462e",
  search: "https://www.figma.com/api/mcp/asset/8180eaf9-88b3-439c-a2e7-97a6431bfa54",
  bell: "https://www.figma.com/api/mcp/asset/51b6a6c9-3afa-4dbe-9ed1-f805647393d9",
  arrowDown: "https://www.figma.com/api/mcp/asset/b8be2acf-42b3-4dda-8799-1b01acef6360",
  add: "https://www.figma.com/api/mcp/asset/7b13800b-dadd-4512-93cb-2b84c08060ac",
  sort: "https://www.figma.com/api/mcp/asset/7c71e7b7-a2cb-4cba-8f7f-e747bbeae6f5",
  eye: "https://www.figma.com/api/mcp/asset/9f12a721-c898-4a7f-86a7-e18e07ff0be5",
  arrowLeft: "https://www.figma.com/api/mcp/asset/e3675b6a-f7c9-46b8-91b6-0a91fc4932f8",
  arrowRight: "https://www.figma.com/api/mcp/asset/0f8f1ac0-f433-44d9-9341-630f03f399ab",
};

const inactiveFilter = "grayscale(1) brightness(0.55)";
const activeFilter = "brightness(0) saturate(100%) invert(46%) sepia(76%) saturate(1509%) hue-rotate(351deg) brightness(95%) contrast(92%)";

function navigate(to: string) {
  window.history.pushState({}, "", to);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

function Sidebar() {
  const workspace = [
    { label: "Dashboard", icon: assets.home, active: false, badge: null, href: "/" },
    { label: "Antrian", icon: assets.people, active: false, badge: "3", href: "/antrian" },
    { label: "Tiket Saya", icon: assets.ticket, active: true, badge: "1" },
    { label: "Nasabah", icon: assets.customer, active: false, badge: null, href: "/nasabah" },
  ];
  const help = [
    { label: "Panduan", icon: assets.guide, href: "/panduan" },
    { label: "Template Respons", icon: assets.template, href: "/template-respons" },
  ];

  return (
    <aside className="flex min-h-[calc(100vh-24px)] w-[263px] shrink-0 flex-col justify-between rounded-3xl border border-[#DCDCDC] bg-[#FAFAFA] px-3.5">
      <div>
        <div className="flex items-center justify-between px-3.5 py-5">
          <img src={assets.logo} alt="BNI Life" className="h-[71px] w-[140px] object-contain" />
          <button className="rounded bg-white p-1.5 shadow-[0_4px_6px_rgba(244,121,32,0.12)]">
            <img src={assets.sidebar} alt="" className="h-[18px] w-[18px]" />
          </button>
        </div>
        <div className="px-5 pb-1 text-xs font-semibold tracking-[-0.24px] text-[#989898]">WORKSPACE</div>
        <div className="pb-5">
          {workspace.map((item) => (
            <button
              key={item.label}
              onClick={() => item.href && navigate(item.href)}
              className={`flex h-10 w-full items-center gap-3 rounded-md px-3 text-left ${item.active ? "border border-[#EFEFEF] bg-white shadow-sm" : ""}`}
            >
              <img src={item.icon} alt="" className="h-5 w-5" style={{ filter: item.active ? activeFilter : inactiveFilter }} />
              <span className={`flex-1 text-sm font-semibold ${item.active ? "text-[#D4640F]" : "text-[#7C7C7C]"}`}>{item.label}</span>
              {item.badge ? (
                <span className={`flex h-[22px] min-w-[22px] items-center justify-center rounded-full px-2 text-xs ${item.active ? "bg-[#F47920] text-white" : "border border-[#EFEFEF] bg-[#FAFAFA] text-[#7C7C7C]"}`}>
                  {item.badge}
                </span>
              ) : null}
            </button>
          ))}
        </div>
        <div className="px-5 pb-1 text-xs font-semibold tracking-[-0.24px] text-[#989898]">BANTUAN</div>
        {help.map((item) => (
          <button key={item.label} onClick={() => item.href && navigate(item.href)} className="flex h-10 w-full items-center gap-3 rounded-md px-3 text-left hover:bg-[#EFEFEF]">
            <img src={item.icon} alt="" className="h-5 w-5" style={{ filter: inactiveFilter }} />
            <span className="text-sm font-semibold text-[#7C7C7C]">{item.label}</span>
          </button>
        ))}
      </div>
      <div className="flex items-center justify-between rounded-b-lg bg-white px-3 py-2">
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 rounded-full bg-[linear-gradient(135deg,#f0d6c7,#fff)]">
            <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border border-white bg-[#22C554]" />
          </div>
          <span className="text-xs font-semibold text-black">Agent</span>
        </div>
        <span className="text-xl text-[#292D32]">↪</span>
      </div>
    </aside>
  );
}

const tickets = [
  { id: "#TK-8021", customer: "Budi Santoso", category: "Klaim Asuransi", priority: "Kritis", status: "Open", sla: "Sisa 2 Jam" },
  { id: "#TK-8020", customer: "Siti Aminah", category: "Perubahan Polis", priority: "Tinggi", status: "Pending", sla: "Sisa 2 Hari" },
  { id: "#TK-8019", customer: "Andi Pratama", category: "Informasi Premi", priority: "Sedang", status: "Open", sla: "SLA : OVERDUE 1 JAM" },
  { id: "#TK-8018", customer: "Dewi Lestari", category: "Keluhan Layanan", priority: "Tinggi", status: "Pending", sla: "Sisa 2 Jam" },
  { id: "#TK-8017", customer: "Hendra Gunawan", category: "Pembatalan", priority: "Sedang", status: "Open", sla: "Sisa 2 Hari" },
];

const categoryOptions = ["Semua", ...Array.from(new Set(tickets.map((ticket) => ticket.category)))];

function Badge({ value }: { value: string }) {
  const config =
    value === "Kritis"
      ? "bg-[#FEF2F2] text-[#EF4444]"
      : value === "Tinggi"
        ? "bg-[#FFF3E8] text-[#F47920]"
        : value === "Sedang"
          ? "bg-[#EFF6FF] text-[#3B8DF6]"
          : value === "Open"
            ? "bg-[#F0FDF4] text-[#22C554]"
            : "bg-[#EFEFEF] text-[#464646]";
  return <span className={`inline-flex h-[22px] items-center rounded-full px-2 text-xs font-medium tracking-[-0.24px] ${config}`}>{value}</span>;
}

function slaClass(value: string) {
  if (value.includes("OVERDUE")) return "text-[#DC2626]";
  if (value.includes("Jam")) return "text-[#D4640F]";
  return "text-[#656565]";
}

export default function BuilderTicketsPage() {
  const [showNewTicketModal, setShowNewTicketModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");
  const [activePage, setActivePage] = useState("1");
  const [notice, setNotice] = useState("");

  const normalizedSearch = searchQuery.trim().toLowerCase();
  const filteredTickets = tickets.filter((ticket) => {
    const matchesCategory = selectedCategory === "Semua" || ticket.category === selectedCategory;
    const matchesSearch =
      normalizedSearch.length === 0 ||
      [ticket.id, ticket.customer, ticket.category, ticket.priority, ticket.status, ticket.sla].some((value) =>
        value.toLowerCase().includes(normalizedSearch),
      );

    return matchesCategory && matchesSearch;
  });

  const showNotice = (message: string) => {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 2200);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] p-2 lg:p-4">
      <div className="flex gap-[33px]">
        <CrmSidebar active="tickets" />
        <main className="min-h-[calc(100vh-24px)] flex-1 rounded-lg border border-[#EFEFEF] bg-white">
          <header className="flex h-[72px] items-center justify-between border-b border-[#EFEFEF] px-8">
            <span className="text-sm font-semibold text-[#F47920]">Manajemen Tiket</span>
            <div className="flex w-[433px] items-center gap-2 rounded-lg border border-[#DCDCDC] bg-[#FAFAFA] px-3.5 py-2.5 shadow-sm">
              <img src={assets.search} alt="" className="h-5 w-5" />
              <input
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                className="w-full bg-transparent text-sm text-[#464646] outline-none placeholder:text-[#7C7C7C]"
                placeholder="Search"
              />
            </div>
            <button onClick={() => showNotice("Tidak ada notifikasi baru")} className="flex h-10 w-10 items-center justify-center rounded-md border border-[#DCDCDC]">
              <img src={assets.bell} alt="" className="h-5 w-5" />
            </button>
          </header>

          <section className="px-8 py-6">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-semibold text-[#464646]">Daftar Tiket Aktif</h1>
                <p className="mt-1 text-sm text-[#7C7C7C]">
                  Menampilkan {filteredTickets.length} dari {tickets.length} tiket
                  {selectedCategory !== "Semua" ? ` untuk kategori ${selectedCategory}` : ""}
                </p>
              </div>
              <div className="flex items-center gap-3.5">
                <div className="relative w-[320px]">
                  <select
                    value={selectedCategory}
                    onChange={(event) => setSelectedCategory(event.target.value)}
                    className="h-12 w-full appearance-none rounded-lg border border-[#DCDCDC] bg-[#FAFAFA] px-3.5 pr-10 text-base tracking-[-0.32px] text-[#7C7C7C] outline-none transition-colors hover:border-[#F47920] focus:border-[#F47920] focus:bg-white"
                  >
                    {categoryOptions.map((category) => (
                      <option key={category} value={category}>
                        Kategori : {category}
                      </option>
                    ))}
                  </select>
                  <img src={assets.arrowDown} alt="" className="pointer-events-none absolute right-3.5 top-1/2 h-5 w-5 -translate-y-1/2" />
                </div>
                <button
                  onClick={() => setShowNewTicketModal(true)}
                  className="flex h-12 items-center gap-2 rounded-md bg-[#F47920] px-4 text-base font-semibold tracking-[-0.32px] text-white shadow-[0_1px_3px_rgba(244,121,32,0.08)]"
                >
                  Buat Tiket Baru
                  <img src={assets.add} alt="" className="h-5 w-5 brightness-0 invert" />
                </button>
              </div>
            </div>

            <div className="rounded-lg border border-[#EFEFEF] bg-white">
              <div className="overflow-x-auto px-6 pt-6">
                <table className="w-full min-w-[880px] border-collapse">
                  <thead>
                    <tr className="border-b border-[#EFEFEF] text-xs font-normal tracking-[-0.24px] text-[#656565]">
                      {["Nomor Tiket", "NASABAH", "KATEGORI", "PRIORITAS", "Status", "BATAS SLA", "AKSI"].map((head) => (
                        <th key={head} className="h-11 px-6 text-left font-normal">
                          <span className="inline-flex items-center gap-1">
                            {head}
                            <img src={assets.sort} alt="" className="h-3.5 w-3.5" />
                          </span>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {filteredTickets.map((ticket) => (
                      <tr key={ticket.id} className="h-[54px] border-b border-[#EFEFEF] text-sm tracking-[-0.28px]">
                        <td className="px-6 text-[#7C7C7C]">{ticket.id}</td>
                        <td className="px-6 font-medium text-[#464646]">{ticket.customer}</td>
                        <td className="px-6 font-medium text-black">{ticket.category}</td>
                        <td className="px-6">
                          <Badge value={ticket.priority} />
                        </td>
                        <td className="px-6">
                          <Badge value={ticket.status} />
                        </td>
                        <td className={`px-6 font-medium ${slaClass(ticket.sla)}`}>{ticket.sla}</td>
                        <td className="px-6">
                          <button onClick={() => navigate("/tickets/detail")} className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-[#FAFAFA]">
                            <img src={assets.eye} alt="Lihat tiket" className="h-5 w-5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                    {filteredTickets.length === 0 ? (
                      <tr>
                        <td colSpan={7} className="px-6 py-12 text-center">
                          <div className="mx-auto max-w-sm rounded-lg border border-dashed border-[#DCDCDC] bg-[#FAFAFA] px-6 py-5">
                            <p className="font-semibold text-[#464646]">Tidak ada tiket yang cocok</p>
                            <p className="mt-1 text-sm text-[#7C7C7C]">Coba ubah kategori atau kata kunci pencarian.</p>
                          </div>
                        </td>
                      </tr>
                    ) : null}
                  </tbody>
                </table>
              </div>

              <div className="flex justify-center px-6 py-4">
                <div className="flex items-center overflow-hidden rounded-lg shadow-[0_1px_2px_rgba(10,13,18,0.05)]">
                  <button
                    onClick={() => setActivePage((page) => (page === "1" ? "1" : String(Number(page) - 1)))}
                    className="flex h-10 items-center gap-2 border border-[#EFEFEF] bg-white px-4 text-sm font-semibold text-[#3D3D3D] hover:bg-[#FAFAFA]"
                  >
                    <img src={assets.arrowLeft} alt="" className="h-5 w-5" />
                    Previous
                  </button>
                  {["1", "2", "3", "...", "8", "9", "10"].map((page) => (
                    <button
                      key={page}
                      onClick={() => (page === "..." ? showNotice("Halaman lainnya belum dimuat") : setActivePage(page))}
                      className={`h-10 w-10 border-y border-r border-[#EFEFEF] text-sm font-medium ${activePage === page ? "bg-[#F47920] text-white" : "bg-[#FAFAFA] text-[#525252] hover:bg-white"}`}
                    >
                      {page}
                    </button>
                  ))}
                  <button
                    onClick={() => setActivePage((page) => (page === "10" ? "10" : String(Math.min(Number(page) + 1 || 2, 10))))}
                    className="flex h-10 items-center gap-2 border-y border-r border-[#EFEFEF] bg-white px-4 text-sm font-semibold text-[#3D3D3D] hover:bg-[#FAFAFA]"
                  >
                    Next
                    <img src={assets.arrowRight} alt="" className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      {showNewTicketModal ? <NewTicketModal onClose={() => setShowNewTicketModal(false)} /> : null}
      {notice ? (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-lg bg-[#292929] px-4 py-2 text-sm font-semibold text-white shadow-lg">
          {notice}
        </div>
      ) : null}
    </div>
  );
}
