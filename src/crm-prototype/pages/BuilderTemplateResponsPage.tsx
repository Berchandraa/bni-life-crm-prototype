import { useState } from "react";
import CrmSidebar from "../components/CrmSidebar";

const assets = {
  logo: "https://www.figma.com/api/mcp/asset/3244521f-b5fe-4d61-b147-e3977d49605c",
  avatar: "https://www.figma.com/api/mcp/asset/c36b92a1-b954-4bd1-ba02-f548157a747b",
  sidebar: "https://www.figma.com/api/mcp/asset/b2aec5f8-1919-41a9-a34d-c94507fead81",
  home: "https://www.figma.com/api/mcp/asset/276ba0ee-e699-4ba1-95cc-0807aaa2d02b",
  people: "https://www.figma.com/api/mcp/asset/dd4580aa-1ac6-432c-985b-55bbc1bf3f68",
  ticket: "https://www.figma.com/api/mcp/asset/700a4482-fbc4-40b0-bf9d-389dd8c088ac",
  customer: "https://www.figma.com/api/mcp/asset/99bfdc69-0b9b-4016-bc06-3e96fb8148e1",
  guide: "https://www.figma.com/api/mcp/asset/777f0ca1-c7d3-4fc7-87c3-271e1126054b",
  template: "https://www.figma.com/api/mcp/asset/e21328dd-9912-410a-8902-3b618f0e4740",
  logout: "https://www.figma.com/api/mcp/asset/79eaa19c-763a-4c61-b1d1-b7e486954659",
  search: "https://www.figma.com/api/mcp/asset/de933c67-d633-4c0e-852d-96528ef1b2e3",
  bell: "https://www.figma.com/api/mcp/asset/5a1b3e61-72b7-402b-852e-52e78fa068c9",
  folder: "https://www.figma.com/api/mcp/asset/7e95da1d-a910-4c87-b578-07dca1f97470",
  message: "https://www.figma.com/api/mcp/asset/becba487-fbca-437f-b225-5d07610d05bf",
  copy: "https://www.figma.com/api/mcp/asset/cdd7e268-b34c-49f8-b00e-3e298657f778",
  info: "https://www.figma.com/api/mcp/asset/321a19c3-a6bf-4725-95a6-bf1b78b0b2d1",
  arrowDown: "https://www.figma.com/api/mcp/asset/ad7064f8-34a8-4572-938f-56be09465841",
  whatsapp: "https://www.figma.com/api/mcp/asset/05339504-fe76-409c-a5a2-a6ed1e9b5f9d",
  sms: "https://www.figma.com/api/mcp/asset/bc761319-9936-4f6c-bd8a-531a2ae9d659",
  global: "https://www.figma.com/api/mcp/asset/9e554d26-abbb-441f-a960-61533f997f30",
  windows: "https://www.figma.com/api/mcp/asset/efc7a216-3eb4-43f6-9a11-4076aded1099",
  arrowLeft: "https://www.figma.com/api/mcp/asset/747a42f8-44b5-4083-9237-9067834a9922",
  arrowRight: "https://www.figma.com/api/mcp/asset/ee64cd76-59e2-4cd3-b793-210009a51ff5",
};

const inactiveFilter = "grayscale(1) brightness(0.55)";
const activeFilter = "brightness(0) saturate(100%) invert(54%) sepia(92%) saturate(1326%) hue-rotate(347deg) brightness(99%) contrast(93%)";

const categories = [
  { label: "Semua Template", count: 45, icon: assets.folder },
  { label: "Salam Pembuka & Penutup", count: 12, icon: assets.message },
  { label: "Syarat Dokumen Klaim", count: 18, icon: assets.copy },
  { label: "Penjelasan Produk & Premi", count: 42, icon: assets.info },
];

const templates = [
  {
    title: "Salam Pembuka (Pagi)",
    category: "Salam Pembuka & Penutup",
    channel: "Label",
    icon: assets.whatsapp,
    tone: "green",
    text: `"Selamat pagi, Bapak/Ibu [Nama Nasabah]. Saya [Nama Agent] dari BNI Life. Ada yang bisa kami bantu terkait polis asuransi Anda hari ini? Terima kasih telah memilih BNI Life sebagai mitra perlindungan Anda."`,
    used: 89,
  },
  {
    title: "Permintaan Dokumen Klaim",
    category: "Syarat Dokumen Klaim",
    channel: "Email",
    icon: assets.sms,
    tone: "orange",
    text: `"Menindaklanjuti pengajuan klaim rawat inap Bapak/Ibu, mohon perkenannya untuk melengkapi dokumen berikut: 1. Formulir Klaim yang telah ditandatangani, 2. Kwitansi Asli dari Rumah Sakit, 3. Resume Medis yang diisi oleh Dokter yang merawat. Dokumen dapat dikirimkan kembali melalui balasan email ini."`,
    used: 89,
  },
  {
    title: "Handling Komplain (Keterlambatan Proses)",
    category: "Penjelasan Produk & Premi",
    channel: "Web Chat",
    icon: assets.global,
    tone: "gray",
    text: `"Kami memohon maaf atas ketidaknyamanan yang Bapak/Ibu alami terkait keterlambatan proses klaim. Saat ini tim kami sedang melakukan pengecekan lebih lanjut dengan pihak rumah sakit. Kami akan memberikan update status terbaru maksimal dalam 1x24 jam kerja."`,
    used: 89,
  },
  {
    title: "Salam Penutup & Rating",
    category: "Salam Pembuka & Penutup",
    channel: "Semua Channel",
    icon: assets.windows,
    tone: "blue",
    text: `"Terima kasih telah menghubungi layanan pelanggan BNI Life. Semoga informasi yang diberikan bermanfaat. Untuk membantu kami meningkatkan layanan, mohon kesediaannya mengisi survei singkat melalui tautan berikut: [Link Survei]. Tetap sehat dan salam hangat."`,
    used: 89,
  },
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
    { label: "Nasabah", icon: assets.customer, active: false, badge: null, href: "/nasabah" },
  ];
  const help = [
    { label: "Panduan", icon: assets.guide, active: false, href: "/panduan" },
    { label: "Template Respons", icon: assets.template, active: true, href: "/template-respons" },
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
            <button key={item.label} onClick={() => navigate(item.href)} className="flex h-11 w-full items-center gap-3 rounded-md px-3 text-left hover:bg-[#EFEFEF]">
              <img src={item.icon} alt="" className="h-5 w-5" style={{ filter: inactiveFilter }} />
              <span className="flex-1 text-base font-semibold tracking-[-0.32px] text-[#7C7C7C]">{item.label}</span>
              {item.badge ? <span className="flex h-[22px] min-w-[22px] items-center justify-center rounded-full border border-[#EFEFEF] bg-[#FAFAFA] px-2 text-xs text-[#7C7C7C]">{item.badge}</span> : null}
            </button>
          ))}
        </div>
        <div className="px-5 pb-1 text-xs font-semibold tracking-[-0.24px] text-[#989898]">BANTUAN</div>
        {help.map((item) => (
          <button key={item.label} onClick={() => navigate(item.href)} className={`flex h-11 w-full items-center gap-3 rounded-md px-3 text-left ${item.active ? "border border-[#EFEFEF] bg-white shadow-sm" : "hover:bg-[#EFEFEF]"}`}>
            <img src={item.icon} alt="" className="h-5 w-5" style={{ filter: item.active ? activeFilter : inactiveFilter }} />
            <span className={`text-base font-semibold tracking-[-0.32px] ${item.active ? "text-[#F47920]" : "text-[#7C7C7C]"}`}>{item.label}</span>
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

function ChannelBadge({ channel, icon, tone }: { channel: string; icon: string; tone: string }) {
  const styles: Record<string, string> = {
    green: "bg-[#F0FDF4] text-[#16A341]",
    orange: "bg-[#FFF3E8] text-[#F47920]",
    gray: "bg-[#EFEFEF] text-[#464646]",
    blue: "bg-[#EBF7FA] text-[#015570]",
  };
  return (
    <span className={`inline-flex h-7 items-center gap-1.5 rounded-full px-3 text-sm font-medium tracking-[-0.28px] ${styles[tone]}`}>
      <img src={icon} alt="" className="h-3.5 w-3.5" />
      {channel}
    </span>
  );
}

function AddTemplateModal({ onClose, onSave }: { onClose: () => void; onSave: () => void }) {
  const [title, setTitle] = useState("");
  const [templateText, setTemplateText] = useState("");
  const [channel, setChannel] = useState("Web Chat");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
      <button aria-label="Tutup modal tambah template" onClick={onClose} className="absolute inset-0 cursor-default" />
      <section className="relative w-[640px] rounded-lg border border-[#EFEFEF] bg-white shadow-xl">
        <div className="border-b border-[#EFEFEF] px-6 py-5">
          <h2 className="text-2xl font-semibold tracking-[-0.48px] text-[#464646]">Tambah Template Respons</h2>
          <p className="mt-1 text-sm text-[#7C7C7C]">Buat template baru untuk digunakan agent saat membalas nasabah.</p>
        </div>
        <div className="space-y-4 px-6 py-5">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-[#464646]">Judul Template</span>
            <input value={title} onChange={(event) => setTitle(event.target.value)} className="h-12 w-full rounded-lg border border-[#DCDCDC] bg-[#FAFAFA] px-3.5 text-base outline-none focus:border-[#F47920]" placeholder="Contoh: Follow up klaim" />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-[#464646]">Channel</span>
            <select value={channel} onChange={(event) => setChannel(event.target.value)} className="h-12 w-full rounded-lg border border-[#DCDCDC] bg-[#FAFAFA] px-3.5 text-base outline-none focus:border-[#F47920]">
              <option>Web Chat</option>
              <option>Email</option>
              <option>Label</option>
              <option>Semua Channel</option>
            </select>
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-[#464646]">Isi Template</span>
            <textarea value={templateText} onChange={(event) => setTemplateText(event.target.value)} className="h-36 w-full resize-none rounded-lg border border-[#DCDCDC] bg-[#FAFAFA] px-3.5 py-3 text-base outline-none placeholder:text-[#989898] focus:border-[#F47920]" placeholder="Tuliskan isi template respons..." />
          </label>
        </div>
        <div className="flex justify-end gap-3 border-t border-[#EFEFEF] px-6 py-4">
          <button onClick={onClose} className="rounded-md px-4 py-2 font-semibold text-[#656565] hover:bg-[#FAFAFA]">Batal</button>
          <button
            onClick={title.trim() || templateText.trim() ? onSave : undefined}
            className={`rounded-md px-4 py-2 font-semibold text-white ${title.trim() || templateText.trim() ? "bg-[#F47920] hover:bg-[#D4640F]" : "bg-[#F9B77E] cursor-not-allowed"}`}
          >
            Simpan Template
          </button>
        </div>
      </section>
    </div>
  );
}

export default function BuilderTemplateResponsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Semua Template");
  const [channel, setChannel] = useState("Semua Chanel");
  const [activePage, setActivePage] = useState("1");
  const [notice, setNotice] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);

  const showNotice = (message: string) => {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 2200);
  };

  const filteredTemplates = templates.filter((template) => {
    const matchesCategory = category === "Semua Template" || template.category === category;
    const matchesChannel = channel === "Semua Chanel" || template.channel === channel || template.channel === "Semua Channel";
    const search = query.trim().toLowerCase();
    const matchesQuery =
      search.length === 0 ||
      [template.title, template.category, template.channel, template.text].some((value) => value.toLowerCase().includes(search));
    return matchesCategory && matchesChannel && matchesQuery;
  });

  return (
    <div className="min-h-screen bg-[#FAFAFA] p-2 lg:p-4">
      <div className="flex gap-[33px]">
        <CrmSidebar active="template" />
        <main className="min-h-[calc(100vh-24px)] flex-1 rounded-lg border border-[#EFEFEF] bg-white">
          <header className="flex h-[72px] items-center justify-between border-b border-[#EFEFEF] px-8">
            <span className="text-sm font-semibold text-[#F47920]">Template Respons</span>
            <div className="flex w-[433px] items-center gap-2 rounded-lg border border-[#DCDCDC] bg-[#FAFAFA] px-3.5 py-2.5 shadow-sm">
              <img src={assets.search} alt="" className="h-5 w-5" />
              <input value={query} onChange={(event) => setQuery(event.target.value)} className="w-full bg-transparent text-sm text-[#464646] outline-none placeholder:text-[#7C7C7C]" placeholder="Search" />
            </div>
            <button onClick={() => showNotice("Tidak ada notifikasi baru")} className="flex h-10 w-10 items-center justify-center rounded-md border border-[#DCDCDC]">
              <img src={assets.bell} alt="" className="h-5 w-5" />
            </button>
          </header>

          <section className="px-6 py-6">
            <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
              <aside className="rounded-lg border border-[#EFEFEF] bg-white p-5 self-start">
                <h1 className="mb-4 text-base font-medium tracking-[-0.32px] text-[#464646]">KATEGORI TEMPLATE</h1>
                <div className="space-y-1.5">
                  {categories.map((item) => (
                    <button key={item.label} onClick={() => setCategory(item.label)} className={`flex h-10 w-full items-center gap-3 rounded-md px-3 text-left ${category === item.label ? "bg-[#EBF7FA] text-[#006B85]" : "text-[#656565] hover:bg-[#FAFAFA]"}`}>
                      <img src={item.icon} alt="" className="h-5 w-5" style={{ filter: category === item.label ? "none" : inactiveFilter }} />
                      <span className="flex-1 text-sm font-semibold tracking-[-0.28px]">{item.label}</span>
                      <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${category === item.label ? "bg-[#006B85] text-white" : "bg-[#EFEFEF] text-[#BDBDBD]"}`}>{item.count}</span>
                    </button>
                  ))}
                </div>
              </aside>

              <section>
                <div className="mb-6 flex gap-5">
                  <div className="flex h-12 flex-1 items-center gap-2 rounded-lg border border-[#DCDCDC] bg-[#FAFAFA] px-3.5 shadow-sm">
                    <img src={assets.search} alt="" className="h-6 w-6" />
                    <input value={query} onChange={(event) => setQuery(event.target.value)} className="w-full bg-transparent text-base text-[#464646] outline-none placeholder:text-[#7C7C7C]" placeholder="Cari isi template atau judul..." />
                  </div>
                  <div className="relative w-[220px]">
                    <select value={channel} onChange={(event) => setChannel(event.target.value)} className="h-12 w-full appearance-none rounded-lg border border-[#DCDCDC] bg-[#FAFAFA] px-3.5 pr-10 text-base text-[#989898] outline-none">
                      <option>Semua Chanel</option>
                      <option>Label</option>
                      <option>Email</option>
                      <option>Web Chat</option>
                      <option>Semua Channel</option>
                    </select>
                    <img src={assets.arrowDown} alt="" className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2" />
                  </div>
                  <button onClick={() => setShowAddModal(true)} className="flex h-12 shrink-0 items-center rounded-md bg-[#F47920] px-4 text-base font-semibold tracking-[-0.32px] text-white shadow-sm hover:bg-[#D4640F]">
                    Tambah Template
                  </button>
                </div>

                <div className="space-y-3.5">
                  {filteredTemplates.map((template) => (
                    <article key={template.title} className="rounded-lg border border-[#EFEFEF] bg-white px-3.5 py-3">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <ChannelBadge channel={template.channel} icon={template.icon} tone={template.tone} />
                          <h2 className="text-base font-medium tracking-[-0.32px] text-[#464646]">{template.title}</h2>
                        </div>
                        <button onClick={() => showNotice("Teks template disalin")} className="rounded-full bg-[#EFF6FF] px-2 py-0.5 text-xs font-medium text-[#3B8DF6]">
                          Salin Teks
                        </button>
                      </div>
                      <p className="mt-3 text-sm font-medium leading-6 tracking-[-0.28px] text-[#656565]">{template.text}</p>
                      <div className="mt-6 text-right text-xs tracking-[-0.24px] text-[#7C7C7C]">Digunakan {template.used} kali</div>
                    </article>
                  ))}
                  {filteredTemplates.length === 0 ? (
                    <div className="rounded-lg border border-dashed border-[#DCDCDC] bg-[#FAFAFA] px-6 py-10 text-center text-sm text-[#7C7C7C]">Template tidak ditemukan.</div>
                  ) : null}
                </div>

                <div className="flex justify-center pt-7">
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
              </section>
            </div>
          </section>
        </main>
      </div>
      {showAddModal ? (
        <AddTemplateModal
          onClose={() => setShowAddModal(false)}
          onSave={() => {
            setShowAddModal(false);
            showNotice("Template baru disimpan untuk demo");
          }}
        />
      ) : null}
      {notice ? <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-lg bg-[#292929] px-4 py-2 text-sm font-semibold text-white shadow-lg">{notice}</div> : null}
    </div>
  );
}
