import { useState } from "react";
import CrmSidebar from "../components/CrmSidebar";

const assets = {
  logo: "https://www.figma.com/api/mcp/asset/42d11d1a-b4ab-42c3-917e-22039392a303",
  avatar: "https://www.figma.com/api/mcp/asset/83f8bd24-e720-44b5-bd5a-a46178474800",
  sidebar: "https://www.figma.com/api/mcp/asset/9ed83de0-aab9-45e7-86a3-70a486d054c2",
  home: "https://www.figma.com/api/mcp/asset/96500f0f-7ff3-4b6e-8a33-0c9998234d1b",
  people: "https://www.figma.com/api/mcp/asset/32aeed0e-1bf7-4e3b-85ed-6107cfd10e5d",
  ticket: "https://www.figma.com/api/mcp/asset/040df61b-4538-41a4-bb46-720fdbea1847",
  customer: "https://www.figma.com/api/mcp/asset/c7dac3b3-7d4d-4723-a66e-9706561a9f9c",
  guide: "https://www.figma.com/api/mcp/asset/0abf530b-30cf-4fb5-bc73-5ab36d0b76e9",
  template: "https://www.figma.com/api/mcp/asset/2e10f04f-9cfc-42e8-959e-0e4f9301d3d9",
  logout: "https://www.figma.com/api/mcp/asset/84b3414e-9aad-4e95-9fcd-9b08821642b9",
  search: "https://www.figma.com/api/mcp/asset/61a2d32e-b23a-40e1-97f4-43eb914722fa",
  bell: "https://www.figma.com/api/mcp/asset/6b45bda8-2992-468e-9aff-767e387804ea",
  folder: "https://www.figma.com/api/mcp/asset/72ce493c-10ac-45dc-8157-475b33762f84",
  document: "https://www.figma.com/api/mcp/asset/9b03984b-a2be-432a-9285-ca49abb3b48f",
  health: "https://www.figma.com/api/mcp/asset/bdb15761-3561-4df1-8d42-feacb1e42bbe",
  heart: "https://www.figma.com/api/mcp/asset/47eff8ac-8480-4a44-857b-8ee8ac613fa1",
  building: "https://www.figma.com/api/mcp/asset/18b15284-52c8-42ae-b10b-8c749851792a",
  refresh: "https://www.figma.com/api/mcp/asset/bbbf385f-d4c8-4c91-b68e-657349df8494",
  timer: "https://www.figma.com/api/mcp/asset/894eaea0-c1d4-4a09-a529-8bcacdbb1030",
  article: "https://www.figma.com/api/mcp/asset/20e2f280-4f46-422d-b493-c3ecb758c214",
  arrowDown: "https://www.figma.com/api/mcp/asset/ce221af3-9fe1-4909-8fee-98f0ba9c075e",
  arrowLeft: "https://www.figma.com/api/mcp/asset/5e03f888-9c78-4b88-ad53-75a441cce955",
  arrowRight: "https://www.figma.com/api/mcp/asset/ac32b868-e3df-47f4-bbd6-556496d5e95d",
};

const inactiveFilter = "grayscale(1) brightness(0.55)";
const activeFilter = "brightness(0) saturate(100%) invert(54%) sepia(92%) saturate(1326%) hue-rotate(347deg) brightness(99%) contrast(93%)";

const categories = [
  { label: "Semua Artikel", count: 142, icon: assets.folder },
  { label: "SOP & Prosedur", count: 142, icon: assets.document },
  { label: "Syarat Klaim", count: 34, icon: assets.health },
  { label: "Produk Asuransi", count: 42, icon: assets.heart },
  { label: "Produk : Unit Link", count: 32, icon: assets.building },
];

const articles = [
  {
    title: "Prosedur Klaim Rawat Inap (Reimbursement)",
    desc: "Panduan lengkap langkah demi langkah untuk agen dalam memproses klaim rawat inap secara reimbursement, termasuk dokumen yang wajib dilampirkan oleh nasabah.",
    tags: ["Klaim", "Rawat Inap"],
    category: "SOP & Prosedur",
    icon: assets.document,
    iconBg: "#EBF7FA",
    updated: "Diperbarui 2 hari yang lalu",
  },
  {
    title: "Penjelasan Masa Tunggu (Waiting Period) 30 Hari",
    desc: "Detail kebijakan mengenai masa tunggu 30 hari untuk penyakit tertentu sebelum manfaat asuransi kesehatan dapat diklaim oleh pemegang polis baru.",
    tags: ["Kebijakan", "Masa Tunggu"],
    category: "Syarat Klaim",
    icon: assets.timer,
    iconBg: "#EBF7FA",
    updated: "Diperbarui 2 hari yang lalu",
  },
  {
    title: "Brosur & Manfaat BNI Life Plan Multi Protection",
    desc: "Dokumen pemasaran resmi dan rincian manfaat untuk produk asuransi jiwa unit link BNI Life Plan Multi Protection untuk dibagikan kepada calon nasabah.",
    tags: ["Produk", "Brosur"],
    category: "Produk Asuransi",
    icon: assets.article,
    iconBg: "#FFF3E8",
    updated: "Diperbarui 2 hari yang lalu",
  },
  {
    title: "Brosur & Manfaat BNI Life Plan Multi Protection",
    desc: "Dokumen pemasaran resmi dan rincian manfaat untuk produk asuransi jiwa unit link BNI Life Plan Multi Protection untuk dibagikan kepada calon nasabah.",
    tags: ["Produk", "Brosur"],
    category: "Produk : Unit Link",
    icon: assets.article,
    iconBg: "#FFF3E8",
    updated: "Diperbarui 2 hari yang lalu",
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
    { label: "Panduan", icon: assets.guide, active: true, href: "/panduan" },
    { label: "Template Respons", icon: assets.template, active: false, href: "/template-respons" },
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

function ArticleDetailModal({ title, onClose }: { title: string; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
      <button aria-label="Tutup artikel" onClick={onClose} className="absolute inset-0 cursor-default" />
      <section className="relative w-[640px] rounded-lg border border-[#EFEFEF] bg-white shadow-xl">
        <div className="border-b border-[#EFEFEF] px-6 py-5">
          <h2 className="text-2xl font-semibold tracking-[-0.48px] text-[#464646]">{title}</h2>
          <p className="mt-1 text-sm text-[#7C7C7C]">Preview artikel panduan untuk prototype CRM.</p>
        </div>
        <div className="space-y-4 px-6 py-5 text-sm leading-6 text-[#525252]">
          <p>Artikel ini berisi rangkuman langkah operasional yang dapat digunakan agent saat membantu nasabah.</p>
          <p>Dalam implementasi production, area ini bisa dihubungkan ke CMS knowledge base, dokumen PDF, atau sistem internal BNI Life.</p>
        </div>
        <div className="flex justify-end border-t border-[#EFEFEF] px-6 py-4">
          <button onClick={onClose} className="rounded-md bg-[#F47920] px-4 py-2 font-semibold text-white">Tutup</button>
        </div>
      </section>
    </div>
  );
}

export default function BuilderPanduanPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Semua Artikel");
  const [sort, setSort] = useState("Terpopuler");
  const [activePage, setActivePage] = useState("1");
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);
  const [notice, setNotice] = useState("");

  const showNotice = (message: string) => {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 2200);
  };

  const filteredArticles = articles.filter((article) => {
    const matchesCategory = category === "Semua Artikel" || article.category === category || article.tags.includes(category.replace("Syarat Klaim", "Klaim"));
    const matchesQuery =
      query.trim().length === 0 ||
      [article.title, article.desc, article.category, ...article.tags].some((value) => value.toLowerCase().includes(query.trim().toLowerCase()));
    return matchesCategory && matchesQuery;
  });

  const visibleArticles = sort === "Terbaru" ? [...filteredArticles].reverse() : filteredArticles;

  return (
    <div className="min-h-screen bg-[#FAFAFA] p-2 lg:p-4">
      <div className="flex gap-[33px]">
        <CrmSidebar active="panduan" />
        <main className="min-h-[calc(100vh-24px)] flex-1 rounded-lg border border-[#EFEFEF] bg-white">
          <header className="flex h-[72px] items-center justify-between border-b border-[#EFEFEF] px-8">
            <span className="text-sm font-semibold text-[#F47920]">Panduan</span>
            <div className="flex w-[433px] items-center gap-2 rounded-lg border border-[#DCDCDC] bg-[#FAFAFA] px-3.5 py-2.5 shadow-sm">
              <img src={assets.search} alt="" className="h-5 w-5" />
              <input value={query} onChange={(event) => setQuery(event.target.value)} className="w-full bg-transparent text-sm text-[#464646] outline-none placeholder:text-[#7C7C7C]" placeholder="Search" />
            </div>
            <button onClick={() => showNotice("Tidak ada notifikasi baru")} className="flex h-10 w-10 items-center justify-center rounded-md border border-[#DCDCDC]">
              <img src={assets.bell} alt="" className="h-5 w-5" />
            </button>
          </header>

          <section className="px-6 py-6">
            <div className="relative overflow-hidden rounded-lg bg-[#005B70] px-8 py-9 text-center text-white">
              <div className="absolute -left-16 -top-28 h-56 w-56 rounded-full bg-white/20" />
              <div className="absolute -bottom-24 -right-20 h-56 w-56 rounded-full bg-white/20" />
              <h1 className="relative text-2xl font-semibold tracking-[-0.48px]">Pusat Pengetahuan Agent</h1>
              <p className="relative mx-auto mt-4 max-w-[560px] text-base leading-7">Temukan SOP, panduan produk, kebijakan klaim, dan template respons cepat untuk membantu nasabah dengan lebih efisien.</p>
              <div className="relative mx-auto mt-8 flex h-12 max-w-[640px] items-center gap-2 rounded-lg border border-[#DCDCDC] bg-[#FAFAFA] px-3.5 text-left shadow-sm">
                <img src={assets.search} alt="" className="h-6 w-6" />
                <input value={query} onChange={(event) => setQuery(event.target.value)} className="w-full bg-transparent text-base text-[#464646] outline-none placeholder:text-[#7C7C7C]" placeholder="Cari Panduan, SOP, atau kata kunci..." />
              </div>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-[280px_1fr]">
              <aside className="rounded-lg border border-[#EFEFEF] bg-white p-5">
                <h2 className="mb-4 text-base font-medium tracking-[-0.32px] text-[#464646]">KATEGORI DOKUMEN</h2>
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

              <section className="rounded-lg border border-[#EFEFEF] bg-white p-3.5">
                <div className="mb-5 flex items-center justify-between">
                  <h2 className="text-2xl font-semibold tracking-[-0.48px] text-[#292929]">
                    Menampilkan {category === "Semua Artikel" ? "Semua Artikel" : category} ({visibleArticles.length || 0})
                  </h2>
                  <label className="block">
                    <span className="mb-1.5 block text-sm font-medium tracking-[-0.28px] text-[#464646]">Urutkan</span>
                    <div className="relative w-[200px]">
                      <select value={sort} onChange={(event) => setSort(event.target.value)} className="h-11 w-full appearance-none rounded-lg border border-[#DCDCDC] bg-[#FAFAFA] px-3.5 pr-10 text-base text-[#989898] outline-none">
                        <option>Terpopuler</option>
                        <option>Terbaru</option>
                        <option>A-Z</option>
                      </select>
                      <img src={assets.arrowDown} alt="" className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2" />
                    </div>
                  </label>
                </div>

                <div className="space-y-3.5">
                  {visibleArticles.map((article, index) => (
                    <button key={`${article.title}-${index}`} onClick={() => setSelectedArticle(article.title)} className="flex w-full gap-3.5 rounded-lg border border-[#EFEFEF] bg-white px-3.5 py-3 text-left hover:bg-[#FAFAFA]">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: article.iconBg }}>
                        <img src={article.icon} alt="" className="h-6 w-6" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-base font-medium tracking-[-0.32px] text-[#464646]">{article.title}</span>
                        <span className="mt-2 block text-sm leading-6 tracking-[-0.28px] text-[#656565]">{article.desc}</span>
                        <span className="mt-6 flex items-center justify-between">
                          <span className="flex gap-2">
                            {article.tags.map((tag) => (
                              <span key={tag} className="rounded-full bg-[#EFEFEF] px-2 py-0.5 text-xs font-medium text-[#464646]">{tag}</span>
                            ))}
                          </span>
                          <span className="flex items-center gap-2 text-xs text-[#7C7C7C]">
                            <img src={assets.refresh} alt="" className="h-[18px] w-[18px]" />
                            {article.updated}
                          </span>
                        </span>
                      </span>
                    </button>
                  ))}
                  {visibleArticles.length === 0 ? (
                    <div className="rounded-lg border border-dashed border-[#DCDCDC] bg-[#FAFAFA] px-6 py-10 text-center text-sm text-[#7C7C7C]">Artikel tidak ditemukan.</div>
                  ) : null}
                </div>

                <div className="flex justify-center pt-6">
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
      {selectedArticle ? <ArticleDetailModal title={selectedArticle} onClose={() => setSelectedArticle(null)} /> : null}
      {notice ? <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-lg bg-[#292929] px-4 py-2 text-sm font-semibold text-white shadow-lg">{notice}</div> : null}
    </div>
  );
}
