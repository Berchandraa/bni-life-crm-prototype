import { useEffect, useState } from "react";
import CrmSidebar from "../components/CrmSidebar";
import { PolicyDrawer } from "./BuilderAntrianPage";

const assets = {
  logo: "https://www.figma.com/api/mcp/asset/62b6dbdf-7e06-41d9-beff-dbdeb645505e",
  avatar: "https://www.figma.com/api/mcp/asset/a9d60c9c-8e15-4ccc-9bbb-13a4b39bd2eb",
  sidebar: "https://www.figma.com/api/mcp/asset/b9e36362-682f-4280-aa5c-14942f12d730",
  home: "https://www.figma.com/api/mcp/asset/74263333-4133-44e4-97b5-cc7997d79413",
  people: "https://www.figma.com/api/mcp/asset/f1d4a69b-930a-4c6e-b30e-358626b1972d",
  ticket: "https://www.figma.com/api/mcp/asset/e734cc9c-ca68-4894-9169-0837213f3417",
  customer: "https://www.figma.com/api/mcp/asset/2d369b5b-0855-47f0-a630-52a3b4b2c258",
  guide: "https://www.figma.com/api/mcp/asset/926f3a8a-ae8b-4327-b802-940418263c72",
  template: "https://www.figma.com/api/mcp/asset/1cd94e7c-b3e6-4ba3-a159-60e624c79dc5",
  logout: "https://www.figma.com/api/mcp/asset/3a4507dc-6550-477d-895e-a717b084d73d",
  expired: "https://www.figma.com/api/mcp/asset/8f830b08-2ca0-4192-90e8-1729aaead046",
  call: "https://www.figma.com/api/mcp/asset/969c1748-bcd7-47b6-8211-a56b7c7e375f",
  profile: "https://www.figma.com/api/mcp/asset/875384b2-6527-4f75-bb5f-db78913f53cf",
  link: "https://www.figma.com/api/mcp/asset/a17d03dd-887a-48fd-b94f-d795a08353a4",
  gallery: "https://www.figma.com/api/mcp/asset/5dbd2517-63e1-4417-b44f-49cb6faae00d",
  note: "https://www.figma.com/api/mcp/asset/b7eeef6a-4d9f-4de4-9074-8b1b92ac6908",
  send: "https://www.figma.com/api/mcp/asset/c5ee1f15-ffcd-4a16-ae75-ade6e478c211",
};

const inactiveFilter = "grayscale(1) brightness(0.55)";
const activeFilter = "brightness(0) saturate(100%) invert(46%) sepia(76%) saturate(1509%) hue-rotate(351deg) brightness(95%) contrast(92%)";

function navigate(to: string) {
  window.history.pushState({}, "", to);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

function StatusBadge({ children, tone = "green" }: { children: string; tone?: "green" | "orange" | "red" | "gray" }) {
  const styles = {
    green: "bg-[#F0FDF4] text-[#22C554]",
    orange: "bg-[#FFF3E8] text-[#F47920]",
    red: "bg-[#FEF2F2] text-[#DC2626]",
    gray: "bg-[#EFEFEF] text-[#464646]",
  };
  return (
    <span className={`inline-flex h-[22px] items-center gap-1.5 rounded-full px-2 text-xs font-medium tracking-[-0.24px] ${styles[tone]}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {children}
    </span>
  );
}

function Sidebar() {
  const workspace = [
    { label: "Dashboard", icon: assets.home, active: false, badge: null, href: "/" },
    { label: "Antrian", icon: assets.people, active: false, badge: "3", href: "/antrian" },
    { label: "Tiket Saya", icon: assets.ticket, active: true, badge: "1", href: "/tickets" },
    { label: "Nasabah", icon: assets.customer, active: false, badge: null, href: "/nasabah" },
  ];
  const help = [
    { label: "Panduan", icon: assets.guide, href: "/panduan" },
    { label: "Template Respons", icon: assets.template, href: "/template-respons" },
  ];

  return (
    <aside className="flex min-h-[calc(100vh-24px)] w-[263px] shrink-0 flex-col justify-between rounded-lg border border-[#DCDCDC] bg-[#FAFAFA] px-3.5">
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
              className={`flex h-11 w-full items-center gap-3 rounded-md px-3 text-left ${item.active ? "border border-[#EFEFEF] bg-white shadow-sm" : ""}`}
            >
              <img src={item.icon} alt="" className="h-5 w-5" style={{ filter: item.active ? activeFilter : inactiveFilter }} />
              <span className={`flex-1 text-base font-semibold tracking-[-0.32px] ${item.active ? "text-[#D4640F]" : "text-[#7C7C7C]"}`}>{item.label}</span>
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
          <div>
            <div className="text-xs font-semibold text-black">Agent</div>
          </div>
        </div>
        <img src={assets.logout} alt="" className="h-6 w-6" />
      </div>
    </aside>
  );
}

function TicketInfoCard() {
  return (
    <div className="rounded-lg border border-[#EFEFEF] bg-white p-3.5">
      <div className="border-b border-[#EFEFEF] pb-4">
        <h2 className="mb-4 text-base font-medium tracking-[-0.32px] text-[#464646]">Detail Tiket</h2>
        <div className="space-y-5 rounded bg-[#FAFAFA] p-5 text-sm tracking-[-0.28px]">
          <div className="flex items-center justify-between"><span className="text-[#989898]">Status</span><StatusBadge>Open</StatusBadge></div>
          <div className="flex items-center justify-between"><span className="text-[#989898]">Prioritas</span><StatusBadge tone="orange">Tinggi</StatusBadge></div>
          <div className="flex items-center justify-between"><span className="text-[#989898]">Kategori</span><span className="font-medium text-[#464646]">Keluhan Layanan</span></div>
          <div className="flex items-center justify-between"><span className="text-[#989898]">Dibuat</span><span className="font-medium text-[#464646]">14 Mei, 09:00</span></div>
          <div className="flex items-center justify-between"><span className="text-[#989898]">Channel Asal</span><span className="font-medium text-[#464646]">Telepon</span></div>
        </div>
      </div>

      <div className="mt-6 rounded-lg border border-[#EFEFEF] bg-white">
        <div className="flex items-center gap-3 border-b border-[#EFEFEF] px-3.5 py-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF3E8]">
            <img src={assets.profile} alt="" className="h-6 w-6" />
          </div>
          <div>
            <div className="text-sm font-medium tracking-[-0.28px] text-[#464646]">Hendra Gunawan</div>
            <div className="text-xs font-medium tracking-[-0.24px] text-[#7C7C7C]">Nasabah Reguler</div>
          </div>
        </div>
        <div className="space-y-3 px-3.5 py-2.5">
          <div className="grid grid-cols-2 gap-10 text-sm">
            <div><div className="mb-2 text-xs text-[#7C7C7C]">No Polis</div><div className="font-medium text-[#464646]">899210023</div></div>
            <div><div className="mb-2 text-xs text-[#7C7C7C]">Status</div><StatusBadge>Aktif</StatusBadge></div>
          </div>
          <div className="grid grid-cols-2 gap-5 text-sm">
            <div><div className="mb-2 text-xs text-[#7C7C7C]">Produk</div><div className="font-medium text-[#464646]">BLife Spectra</div></div>
            <div><div className="mb-2 text-xs text-[#7C7C7C]">No. HP</div><div className="font-medium text-[#464646]">0812-3456-7890</div></div>
          </div>
          <button onClick={() => window.dispatchEvent(new CustomEvent("open-policy-drawer"))} className="mx-auto flex h-9 w-[204px] items-center justify-center rounded-md border border-[#EFEFEF] text-sm font-semibold tracking-[-0.28px] text-[#464646]">
            Lihat Detail Polis
          </button>
        </div>
      </div>
    </div>
  );
}

function MessageComposer({ onNotice }: { onNotice: (message: string) => void }) {
  const [activeTab, setActiveTab] = useState<"WhatsApp" | "Internal" | "Email">("WhatsApp");
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (!message.trim()) {
      onNotice("Tulis pesan terlebih dahulu");
      return;
    }

    onNotice(activeTab === "Internal" ? "Catatan internal tersimpan" : activeTab === "Email" ? "Email terkirim" : "WhatsApp terkirim");
    setMessage("");
  };

  return (
    <div className="w-full rounded-lg border border-[#EFEFEF] bg-white">
      <div className="grid grid-cols-3 gap-1 rounded-t-lg bg-[#FAFAFA] p-1">
        <button onClick={() => setActiveTab("WhatsApp")} className={`h-9 rounded-md text-sm font-medium tracking-[-0.28px] ${activeTab === "WhatsApp" ? "border border-[#EFEFEF] bg-white text-[#F47920] shadow-sm" : "text-[#656565]"}`}>Balas via WhatsApp</button>
        <button onClick={() => setActiveTab("Internal")} className={`h-9 rounded-md text-sm font-medium tracking-[-0.28px] ${activeTab === "Internal" ? "border border-[#EFEFEF] bg-white text-[#F47920] shadow-sm" : "text-[#656565]"}`}>Catatan Internal</button>
        <button onClick={() => setActiveTab("Email")} className={`h-9 rounded-md text-sm font-medium tracking-[-0.28px] ${activeTab === "Email" ? "border border-[#EFEFEF] bg-white text-[#F47920] shadow-sm" : "text-[#656565]"}`}>Email</button>
      </div>
      <textarea value={message} onChange={(event) => setMessage(event.target.value)} className="h-[118px] w-full resize-none border-x-0 border-b border-t border-[#EFEFEF] bg-[#FAFAFA] px-3.5 py-2.5 text-base outline-none placeholder:text-[#7C7C7C]" placeholder={activeTab === "Internal" ? "Tulis catatan internal..." : activeTab === "Email" ? "Tulis email..." : "Ketik balasan..."} />
      <div className="relative flex items-center justify-between p-3.5">
        <div className="absolute left-[47px] top-[-27px] rounded-lg bg-[#FAFAFA] px-3 py-2 text-center text-xs font-semibold text-[#292929] shadow-[0_12px_8px_rgba(10,13,18,0.08),0_4px_3px_rgba(10,13,18,0.03)]">
          Gunakan Template
        </div>
        <div className="flex items-center gap-6">
          <button onClick={() => onNotice("Lampiran tautan ditambahkan")}><img src={assets.link} alt="" className="h-5 w-5 -rotate-90" /></button>
          <button onClick={() => onNotice("Upload gambar dipilih")}><img src={assets.gallery} alt="" className="h-5 w-5" /></button>
          <button onClick={() => onNotice("Template dipilih")}><img src={assets.note} alt="" className="h-5 w-5" /></button>
        </div>
        <button onClick={sendMessage} className="flex h-9 items-center gap-2 rounded-md bg-[#F47920] px-3.5 text-sm font-semibold tracking-[-0.28px] text-white">
          Kirim
          <img src={assets.send} alt="" className="h-[18px] w-[18px] brightness-0 invert" />
        </button>
      </div>
    </div>
  );
}

export default function BuilderTicketDetailPage() {
  const [showPolicyDrawer, setShowPolicyDrawer] = useState(false);
  const [status, setStatus] = useState<"Open" | "Eskalasi" | "Resolved">("Open");
  const [notice, setNotice] = useState("");

  const showNotice = (message: string) => {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 2200);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] p-2 lg:p-4" onClick={() => undefined}>
      <div className="flex gap-[33px]">
        <CrmSidebar active="tickets" />
        <main className="min-h-[calc(100vh-24px)] flex-1 rounded-lg border border-[#EFEFEF] bg-white p-6">
          <div className="mx-auto max-w-[1186px]">
            <div className="mb-5 flex items-center gap-2 text-sm font-semibold tracking-[-0.28px]">
              <button onClick={() => navigate("/tickets")} className="flex items-center gap-1 text-[#989898]">
                <img src={assets.ticket} alt="" className="h-5 w-5" style={{ filter: inactiveFilter }} />
                Tiket Saya
              </button>
              <span className="text-[#DCDCDC]">/</span>
              <span className="text-[#464646]">Detail Tiket</span>
            </div>

            <div className="mb-6 flex items-center justify-between border-b border-[#EFEFEF] pb-5">
              <h1 className="text-2xl font-medium tracking-[-0.48px] text-[#464646]">TKT-8019</h1>
              <StatusBadge tone={status === "Resolved" ? "green" : status === "Eskalasi" ? "orange" : "red"}>{status === "Resolved" ? "Resolved" : status === "Eskalasi" ? "Escalated" : "SLA Overdue"}</StatusBadge>
            </div>

            <div className="grid gap-3.5 xl:grid-cols-[320px_1fr]">
              <TicketInfoCard />
              <section className="flex min-h-[740px] flex-col justify-between rounded-lg border border-[#EFEFEF] bg-white p-3.5">
                <div>
                  <div className="flex items-center justify-between border-b border-[#EFEFEF] px-3.5 pb-3.5 pt-2.5">
                    <h2 className="text-base font-medium tracking-[-0.32px] text-[#464646]">Judul: Komplain Pencairan Dana Terlambat</h2>
                    <div className="flex items-center gap-3.5">
                      <button onClick={() => { setStatus("Eskalasi"); showNotice("Tiket berhasil dieskalasi"); }} className="rounded-md border border-[#EFEFEF] bg-[#FAFAFA] px-3.5 py-1.5 text-sm font-semibold tracking-[-0.28px] text-[#464646] shadow-sm">Eskalasi</button>
                      <button onClick={() => { setStatus("Resolved"); showNotice("Tiket diselesaikan"); }} className="rounded-md bg-[#22C554] px-3.5 py-1.5 text-sm font-semibold tracking-[-0.28px] text-[#FAFAFA] shadow-sm">Resolve Tiket</button>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col items-center gap-2">
                    <span className="rounded-full bg-[#EFEFEF] px-2 py-0.5 text-xs font-medium tracking-[-0.24px] text-[#464646]">Tiket dibuat via Panggilan Masuk</span>
                    <span className="text-xs font-medium tracking-[-0.24px] text-[#BDBDBD]">14 Mei 2026, 09:00 WIB</span>
                  </div>

                  <div className="mt-10 flex flex-col gap-6">
                    <div className="w-[398px] rounded-lg border border-[#EFEFEF] bg-white px-2.5 py-2">
                      <div className="mb-2 flex items-center justify-between text-xs tracking-[-0.24px]">
                        <span className="flex items-center gap-3.5 font-medium text-[#464646]"><img src={assets.call} alt="" className="h-[18px] w-[18px]" />Panggilan Masuk (Durasi: 05:23)</span>
                        <span className="text-[#989898]">09:05 WIB</span>
                      </div>
                      <p className="text-sm font-medium leading-[1.55] tracking-[-0.28px] text-[#525252]">
                        Nasabah sangat marah karena pencairan dana klaim yang dijanjikan 3 hari kerja belum masuk ke rekening. Minta segera diproses hari ini.
                      </p>
                    </div>
                    <div className="flex justify-end">
                      <div className="w-[398px] rounded-lg border border-[#EFEFEF] bg-[#FEF2F2] px-2.5 py-2">
                        <div className="mb-2 flex items-center justify-between text-xs tracking-[-0.24px] text-[#DC2626]">
                          <span className="flex items-center gap-3.5 font-medium"><img src={assets.profile} alt="" className="h-[18px] w-[18px]" />Panggilan Masuk (Durasi: 05:23)</span>
                          <span>09:05 WIB</span>
                        </div>
                        <p className="text-sm font-medium leading-[1.55] tracking-[-0.28px] text-[#DC2626]">
                          Agent, tolong tangani dengan prioritas tinggi. Saya sudah eskalasi ke tim Finance. Hubungi nasabah siang ini via WA for update.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <MessageComposer onNotice={showNotice} />
              </section>
            </div>
          </div>
        </main>
      </div>
      {showPolicyDrawer ? <PolicyDrawer onClose={() => setShowPolicyDrawer(false)} /> : null}
      <PolicyDrawerEventBridge onOpen={() => setShowPolicyDrawer(true)} />
      {notice ? (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-lg bg-[#292929] px-4 py-2 text-sm font-semibold text-white shadow-lg">
          {notice}
        </div>
      ) : null}
    </div>
  );
}

function PolicyDrawerEventBridge({ onOpen }: { onOpen: () => void }) {
  useEffect(() => {
    const handler = () => onOpen();
    window.addEventListener("open-policy-drawer", handler);
    return () => window.removeEventListener("open-policy-drawer", handler);
  }, [onOpen]);
  return null;
}
