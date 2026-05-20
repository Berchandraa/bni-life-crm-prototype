import { useState } from "react";
import CrmSidebar from "../components/CrmSidebar";
import { PolicyDrawer } from "./BuilderAntrianPage";

const assets = {
  logo: "https://www.figma.com/api/mcp/asset/345df6d3-9bdf-4699-bd32-14a48f2b1f27",
  avatar: "https://www.figma.com/api/mcp/asset/7ef86a5f-fdc9-446c-9397-cdb8f34d0d7e",
  sidebar: "https://www.figma.com/api/mcp/asset/92912655-0e54-4d9d-9924-267bfb215601",
  home: "https://www.figma.com/api/mcp/asset/b9a3d3c1-12b4-4bb1-8630-3e04aba71158",
  people: "https://www.figma.com/api/mcp/asset/0367074e-f289-4455-b3ac-8847a3cbfd27",
  ticket: "https://www.figma.com/api/mcp/asset/f5745a0c-857b-4e0c-ad5c-55d2cc15fad1",
  customer: "https://www.figma.com/api/mcp/asset/ff30eaab-c904-4baf-a095-b1b35b53c4a7",
  guide: "https://www.figma.com/api/mcp/asset/55bf8290-22d0-4c0f-92d7-0f1f6b2f04bb",
  template: "https://www.figma.com/api/mcp/asset/a7a7089c-6837-4106-8958-83db8d139df3",
  logout: "https://www.figma.com/api/mcp/asset/ae71ef33-9b5b-43de-9156-43563afcfbca",
  search: "https://www.figma.com/api/mcp/asset/6e691dcd-6517-4eb7-8e47-c7526a6bc471",
  bell: "https://www.figma.com/api/mcp/asset/7a208fd2-4462-4316-aaca-bb86ca46a65f",
  import: "https://www.figma.com/api/mcp/asset/8ca79854-67aa-4a21-8f82-1cc3950cb112",
  add: "https://www.figma.com/api/mcp/asset/a6e693b3-faab-435f-855f-421391768a8d",
  arrowDown: "https://www.figma.com/api/mcp/asset/406d21d6-6754-4a1b-9078-81d686e61b15",
  sort: "https://www.figma.com/api/mcp/asset/dd566443-3b93-4fbb-83cc-0436b976964c",
  eye: "https://www.figma.com/api/mcp/asset/ee583612-6f03-4907-b6f8-ca436b2648ea",
  arrowLeft: "https://www.figma.com/api/mcp/asset/f30179fa-0703-4f30-9bed-fdb8d432b288",
  arrowRight: "https://www.figma.com/api/mcp/asset/bce17407-6d1b-4576-b83e-2b97b83b2a3e",
};

const inactiveFilter = "grayscale(1) brightness(0.55)";
const activeFilter = "brightness(0) saturate(100%) invert(54%) sepia(92%) saturate(1326%) hue-rotate(347deg) brightness(99%) contrast(93%)";

const customers = [
  { name: "Hendra Gunawan", segment: "VIP Customer", identity: "327104882910002", phone: "0812-3456-7890", email: "hendra.g@email.com", product: "BLife Maksima", policy: "10928374", status: "Lapse Warning" },
  { name: "Anita Sari", segment: "Regular", identity: "317409220193004", phone: "0856-7788-9900", email: "anita.s@email.com", product: "BLife Plan Multi", policy: "55439210", status: "Aman" },
  { name: "Budi Pratama", segment: "Priority", identity: "357801110580001", phone: "0811-2233-4455", email: "budi.p@email.com", product: "BLife Investa", policy: "88761234", status: "Open Ticket" },
  { name: "Dewi Lestari", segment: "Priority", identity: "357801110580001", phone: "0811-2233-4455", email: "budi.p@email.com", product: "BLife Investa", policy: "88761234", status: "Aman" },
  { name: "Hendra Gunawan", segment: "Priority", identity: "357801110580001", phone: "0811-2233-4455", email: "budi.p@email.com", product: "BLife Investa", policy: "88761234", status: "Aman" },
];

function navigate(to: string) {
  window.history.pushState({}, "", to);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

function Sidebar() {
  const workspace = [
    { label: "Dashboard", icon: assets.home, active: false, badge: null, href: "/" },
    { label: "Antrian", icon: assets.people, active: false, badge: "3", href: "/antrian" },
    { label: "Tiket Saya", icon: assets.ticket, active: false, badge: "1", href: "/tickets" },
    { label: "Nasabah", icon: assets.customer, active: true, badge: null, href: "/nasabah" },
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
            <button key={item.label} onClick={() => navigate(item.href)} className={`flex h-11 w-full items-center gap-3 rounded-md px-3 text-left ${item.active ? "border border-[#EFEFEF] bg-white shadow-sm" : ""}`}>
              <img src={item.icon} alt="" className="h-5 w-5" style={{ filter: item.active ? activeFilter : inactiveFilter }} />
              <span className={`flex-1 text-base font-semibold tracking-[-0.32px] ${item.active ? "text-[#F47920]" : "text-[#7C7C7C]"}`}>{item.label}</span>
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
          <button key={item.label} onClick={() => item.href && navigate(item.href)} className="flex h-11 w-full items-center gap-3 rounded-md px-3 text-left hover:bg-[#EFEFEF]">
            <img src={item.icon} alt="" className="h-5 w-5" style={{ filter: inactiveFilter }} />
            <span className="text-base font-semibold tracking-[-0.32px] text-[#7C7C7C]">{item.label}</span>
          </button>
        ))}
      </div>
      <div className="flex items-center justify-between rounded-b-lg bg-white px-3 py-2">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img src={assets.avatar} alt="Agent" className="h-10 w-10 rounded-full object-cover" />
            <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border border-white bg-[#22C554]" />
          </div>
          <span className="text-xs font-semibold text-black">Agent</span>
        </div>
        <img src={assets.logout} alt="" className="h-6 w-6" />
      </div>
    </aside>
  );
}

function StatusBadge({ value }: { value: string }) {
  const className =
    value === "Lapse Warning"
      ? "bg-[#FEF2F2] text-[#EF4444]"
      : value === "Open Ticket"
        ? "bg-[#FFF3E8] text-[#D4640F]"
        : "bg-[#F0FDF4] text-[#22C554]";
  return (
    <span className={`inline-flex h-[22px] items-center gap-1.5 rounded-full px-2 text-xs font-medium tracking-[-0.24px] ${className}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {value}
    </span>
  );
}

function SelectFilter({ value, onChange, options }: { value: string; onChange: (value: string) => void; options: string[] }) {
  return (
    <div className="relative w-[320px]">
      <select value={value} onChange={(event) => onChange(event.target.value)} className="h-12 w-full appearance-none rounded-lg border border-[#DCDCDC] bg-[#FAFAFA] px-3.5 pr-10 text-base tracking-[-0.32px] text-[#7C7C7C] outline-none focus:border-[#F47920]">
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
      <img src={assets.arrowDown} alt="" className="pointer-events-none absolute right-3.5 top-1/2 h-5 w-5 -translate-y-1/2" />
    </div>
  );
}

function AddCustomerModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
      <button aria-label="Tutup modal" onClick={onClose} className="absolute inset-0 cursor-default" />
      <div className="relative w-[520px] rounded-lg border border-[#EFEFEF] bg-white shadow-xl">
        <div className="border-b border-[#EFEFEF] px-6 py-5">
          <h2 className="text-2xl font-semibold tracking-[-0.48px] text-[#464646]">Tambah Nasabah</h2>
          <p className="mt-1 text-sm text-[#7C7C7C]">Tambahkan data dummy nasabah baru untuk prototype.</p>
        </div>
        <div className="space-y-4 px-6 py-5">
          {["Nama Nasabah", "No. Identitas", "No. Telepon", "Email"].map((label) => (
            <label key={label} className="block">
              <span className="mb-1.5 block text-sm font-medium text-[#464646]">{label}</span>
              <input className="h-11 w-full rounded-lg border border-[#DCDCDC] bg-[#FAFAFA] px-3.5 text-sm outline-none focus:border-[#F47920]" placeholder={label} />
            </label>
          ))}
        </div>
        <div className="flex gap-3 border-t border-[#EFEFEF] px-6 py-4">
          <button onClick={onClose} className="flex-1 rounded-md px-4 py-2 font-semibold text-[#656565] hover:bg-[#FAFAFA]">Batal</button>
          <button onClick={onClose} className="flex-1 rounded-md bg-[#F47920] px-4 py-2 font-semibold text-white hover:bg-[#D4640F]">Simpan Nasabah</button>
        </div>
      </div>
    </div>
  );
}

export default function BuilderNasabahPage() {
  const [search, setSearch] = useState("");
  const [segment, setSegment] = useState("Semua Segmen");
  const [status, setStatus] = useState("Semua Status");
  const [activePage, setActivePage] = useState("1");
  const [showPolicyDrawer, setShowPolicyDrawer] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [notice, setNotice] = useState("");

  const showNotice = (message: string) => {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 2200);
  };

  const filteredCustomers = customers.filter((customer) => {
    const query = search.trim().toLowerCase();
    const matchesSearch =
      query.length === 0 ||
      [customer.name, customer.segment, customer.identity, customer.phone, customer.email, customer.product, customer.policy, customer.status].some((value) =>
        value.toLowerCase().includes(query),
      );
    const matchesSegment = segment === "Semua Segmen" || customer.segment === segment;
    const matchesStatus = status === "Semua Status" || customer.status === status;
    return matchesSearch && matchesSegment && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-[#FAFAFA] p-2 lg:p-4">
      <div className="flex gap-[33px]">
        <CrmSidebar active="nasabah" />
        <main className="min-h-[calc(100vh-24px)] flex-1 rounded-lg border border-[#EFEFEF] bg-white">
          <header className="flex h-[72px] items-center justify-between border-b border-[#EFEFEF] px-8">
            <span className="text-sm font-semibold text-[#F47920]">Nasabah</span>
            <div className="flex w-[433px] items-center gap-2 rounded-lg border border-[#DCDCDC] bg-[#FAFAFA] px-3.5 py-2.5 shadow-sm">
              <img src={assets.search} alt="" className="h-5 w-5" />
              <input value={search} onChange={(event) => setSearch(event.target.value)} className="w-full bg-transparent text-sm text-[#464646] outline-none placeholder:text-[#7C7C7C]" placeholder="Search" />
            </div>
            <button onClick={() => showNotice("Tidak ada notifikasi baru")} className="flex h-10 w-10 items-center justify-center rounded-md border border-[#DCDCDC]">
              <img src={assets.bell} alt="" className="h-5 w-5" />
            </button>
          </header>

          <section className="px-8 py-6">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-2xl font-semibold tracking-[-0.48px] text-[#464646]">Data Nasabah</h1>
                <p className="mt-1 text-base tracking-[-0.32px] text-[#7C7C7C]">Kelola dan pantau informasi nasabah, polis, dan status interaksi.</p>
              </div>
              <div className="flex gap-3.5">
                <button onClick={() => showNotice("CSV berhasil diekspor")} className="flex h-12 items-center gap-2 rounded-md bg-[#FFF3E8] px-4 text-base font-semibold tracking-[-0.32px] text-[#F47920]">
                  <img src={assets.import} alt="" className="h-5 w-5" />
                  Export CSV
                </button>
                <button onClick={() => setShowAddModal(true)} className="flex h-12 items-center gap-2 rounded-md bg-[#F47920] px-4 text-base font-semibold tracking-[-0.32px] text-white">
                  Tambah Nasabah
                  <img src={assets.add} alt="" className="h-5 w-5 brightness-0 invert" />
                </button>
              </div>
            </div>

            <div className="my-6 h-px bg-[#EFEFEF]" />

            <div className="mb-3.5 flex items-center justify-between gap-4">
              <div className="flex w-[320px] items-center gap-2 rounded-lg border border-[#DCDCDC] bg-white px-3.5 py-2.5 shadow-sm">
                <img src={assets.search} alt="" className="h-5 w-5" />
                <input value={search} onChange={(event) => setSearch(event.target.value)} className="w-full bg-transparent text-sm text-[#464646] outline-none placeholder:text-[#7C7C7C]" placeholder="Cari nama, no. polis, atau identitas..." />
              </div>
              <div className="flex gap-3.5">
                <SelectFilter value={segment} onChange={setSegment} options={["Semua Segmen", "VIP Customer", "Regular", "Priority"]} />
                <SelectFilter value={status} onChange={setStatus} options={["Semua Status", "Lapse Warning", "Aman", "Open Ticket"]} />
              </div>
            </div>

            <div className="rounded-lg border border-[#EFEFEF] bg-white">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[980px] border-collapse">
                  <thead>
                    <tr className="border-b border-[#EFEFEF] text-xs tracking-[-0.24px] text-[#656565]">
                      {["Nama Nasabah", "No. Identitas", "Kontak", "Polis Aktif", "Status/Peringatan", "AKSI"].map((head) => (
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
                    {filteredCustomers.map((customer, index) => (
                      <tr key={`${customer.name}-${customer.identity}-${index}`} className="h-[76px] border-b border-[#EFEFEF] text-sm tracking-[-0.28px] hover:bg-[#FAFAFA]">
                        <td className="px-6">
                          <div className="font-medium text-[#464646]">{customer.name}</div>
                          <div className="mt-1 text-[#7C7C7C]">{customer.segment}</div>
                        </td>
                        <td className="px-6 font-medium text-[#464646]">{customer.identity}</td>
                        <td className="px-6">
                          <div className="font-medium text-[#464646]">{customer.phone}</div>
                          <div className="mt-1 text-[#7C7C7C]">{customer.email}</div>
                        </td>
                        <td className="px-6">
                          <div className="font-semibold text-black">{customer.product}</div>
                          <div className="mt-1 text-[#7C7C7C]">Polis: {customer.policy}</div>
                        </td>
                        <td className="px-6"><StatusBadge value={customer.status} /></td>
                        <td className="px-6">
                          <button onClick={() => setShowPolicyDrawer(true)} className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-[#FAFAFA]">
                            <img src={assets.eye} alt="Lihat nasabah" className="h-5 w-5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                    {filteredCustomers.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="px-6 py-12 text-center text-sm text-[#7C7C7C]">Tidak ada nasabah yang cocok dengan filter.</td>
                      </tr>
                    ) : null}
                  </tbody>
                </table>
              </div>

              <div className="flex justify-center px-6 py-4">
                <div className="flex overflow-hidden rounded-lg shadow-[0_1px_2px_rgba(10,13,18,0.05)]">
                  <button onClick={() => setActivePage((page) => (page === "1" ? "1" : String(Number(page) - 1)))} className="flex h-10 items-center gap-2 border border-[#EFEFEF] bg-white px-4 text-sm font-semibold text-[#3D3D3D] hover:bg-[#FAFAFA]">
                    <img src={assets.arrowLeft} alt="" className="h-5 w-5" />
                    Previous
                  </button>
                  {["1", "2", "3", "...", "8", "9", "10"].map((page) => (
                    <button key={page} onClick={() => (page === "..." ? showNotice("Halaman lainnya belum dimuat") : setActivePage(page))} className={`h-10 w-10 border-y border-r border-[#EFEFEF] text-sm font-medium ${activePage === page ? "bg-[#FFF3E8] text-[#F47920]" : "bg-[#FAFAFA] text-[#525252] hover:bg-white"}`}>
                      {page}
                    </button>
                  ))}
                  <button onClick={() => setActivePage((page) => (page === "10" ? "10" : String(Math.min(Number(page) + 1 || 2, 10))))} className="flex h-10 items-center gap-2 border-y border-r border-[#EFEFEF] bg-white px-4 text-sm font-semibold text-[#3D3D3D] hover:bg-[#FAFAFA]">
                    Next
                    <img src={assets.arrowRight} alt="" className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      {showPolicyDrawer ? <PolicyDrawer onClose={() => setShowPolicyDrawer(false)} /> : null}
      {showAddModal ? <AddCustomerModal onClose={() => setShowAddModal(false)} /> : null}
      {notice ? <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-lg bg-[#292929] px-4 py-2 text-sm font-semibold text-white shadow-lg">{notice}</div> : null}
    </div>
  );
}
