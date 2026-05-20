import { useState } from "react";
import CrmSidebar from "../components/CrmSidebar";
import { NewTicketModal, PolicyDrawer } from "./BuilderAntrianPage";

const assets = {
  logo: "https://www.figma.com/api/mcp/asset/18668475-73e6-49bc-b873-94ca337669c5",
  sidebar: "https://www.figma.com/api/mcp/asset/1cdcfcd7-972d-4da8-9cf1-a1d8e5d9e5e1",
  home: "https://www.figma.com/api/mcp/asset/a9058555-5904-4aa1-9503-07d5ebebaf27",
  people: "https://www.figma.com/api/mcp/asset/0969986b-2890-4780-b831-19f2d7fc7d7b",
  ticket: "https://www.figma.com/api/mcp/asset/9ea2e220-3d47-4195-a1dd-36c5db43e04f",
  customer: "https://www.figma.com/api/mcp/asset/70a8716a-a505-435b-b09b-c059f272e025",
  guide: "https://www.figma.com/api/mcp/asset/4d1752e7-7239-4f83-8a84-d7fa4e156633",
  template: "https://www.figma.com/api/mcp/asset/4b002913-11cd-46d2-a5ff-9d7b32b2bc00",
  search: "https://www.figma.com/api/mcp/asset/5cfcbba4-3780-49bd-aa88-698e286f8677",
  bell: "https://www.figma.com/api/mcp/asset/4a223c52-f0df-4a05-a7ec-834c480f5106",
  avatar: "https://www.figma.com/api/mcp/asset/faaba1d5-ad5d-4f5b-a557-40fa0622480e",
  call: "https://www.figma.com/api/mcp/asset/e8089dc3-d9ab-49aa-9f0f-b51fbb718a17",
  mic: "https://www.figma.com/api/mcp/asset/c381dff5-b192-4a4c-adf5-06729c3a0a2f",
  pause: "https://www.figma.com/api/mcp/asset/785dce53-a04e-4f65-a7be-d9ead4713d76",
  refresh: "https://www.figma.com/api/mcp/asset/feb85cee-7874-4b33-884b-c98d3f0acf31",
  callSlash: "https://www.figma.com/api/mcp/asset/1f3c7e2e-2ca6-4c79-b8f4-948acd7403d1",
  arrow: "https://www.figma.com/api/mcp/asset/b0e03f0d-702d-46c5-99fa-ba0147772e6a",
  send: "https://www.figma.com/api/mcp/asset/c5ee1f15-ffcd-4a16-ae75-ade6e478c211",
};

const inactiveFilter = "grayscale(1) brightness(0.55)";
const activeFilter = "brightness(0) saturate(100%) invert(54%) sepia(92%) saturate(1326%) hue-rotate(347deg) brightness(99%) contrast(93%)";

function navigate(to: string) {
  window.history.pushState({}, "", to);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

function Avatar({ size = 40 }: { size?: number }) {
  return (
    <div className="flex shrink-0 items-center justify-center rounded-full bg-[#FFF3E8]" style={{ width: size, height: size }}>
      <img src={assets.avatar} alt="" className="h-[58%] w-[58%]" />
    </div>
  );
}

function Sidebar() {
  const workspace = [
    { label: "Dashboard", icon: assets.home, active: false, badge: null, href: "/" },
    { label: "Antrian", icon: assets.people, active: true, badge: "3" },
    { label: "Tiket Saya", icon: assets.ticket, active: false, badge: "1", href: "/tickets" },
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
              <span className={`flex-1 text-sm font-semibold ${item.active ? "text-[#F47920]" : "text-[#7C7C7C]"}`}>{item.label}</span>
              {item.badge ? (
                <span className={`flex h-[22px] min-w-[22px] items-center justify-center rounded-full px-2 text-xs ${item.active ? "bg-[#F47920] text-white" : "border border-[#DCDCDC] bg-[#FAFAFA] text-[#464646]"}`}>
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
          <div className="relative">
            <div className="h-10 w-10 rounded-full bg-[linear-gradient(135deg,#f0d6c7,#fff)]" />
            <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border border-white bg-[#22C554]" />
          </div>
          <span className="text-xs font-semibold text-black">Agent</span>
        </div>
        <span className="text-xl text-[#292D32]">↪</span>
      </div>
    </aside>
  );
}

function StatusPill({ children, tone = "green" }: { children: string; tone?: "green" | "orange" | "gray" | "blue" }) {
  const toneClass =
    tone === "green" ? "bg-[#F0FDF4] text-[#22C554]" : tone === "orange" ? "bg-[#FFF3E8] text-[#F47920]" : tone === "blue" ? "bg-[#EAF3FF] text-[#60A5FA]" : "bg-[#EFEFEF] text-[#656565]";
  return <span className={`inline-flex h-[22px] items-center rounded-full px-2 text-xs font-medium ${toneClass}`}>{children}</span>;
}

export default function BuilderTeleponPage() {
  const [category, setCategory] = useState("Pengecekan Klaim");
  const [priority, setPriority] = useState("Tinggi");
  const [showPolicyDrawer, setShowPolicyDrawer] = useState(false);
  const [showNewTicketModal, setShowNewTicketModal] = useState(false);
  const [activeCallTab, setActiveCallTab] = useState<"Berjalan" | "Menunggu">("Berjalan");
  const [selectedCall, setSelectedCall] = useState(0);
  const [callStatus, setCallStatus] = useState<"Terhubung" | "Mute" | "Pause" | "Transfer" | "Berakhir">("Terhubung");
  const [callNote, setCallNote] = useState("");
  const [notice, setNotice] = useState("");
  const calls = [
    { name: "Budi Santoso", status: "Sedang Berbicara", active: true },
    { name: "Unkown", status: "Menunggu", active: false },
    { name: "Unkown", status: "Menunggu", active: false },
    { name: "Unkown", status: "Menunggu", active: false },
  ];
  const visibleCalls = calls.filter((call) => (activeCallTab === "Berjalan" ? call.active : !call.active));

  const showNotice = (message: string) => {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 2200);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] p-2 lg:p-4">
      <div className="flex gap-[33px]">
        <CrmSidebar active="antrian" />
        <main className="min-h-[calc(100vh-24px)] flex-1 rounded-lg border border-[#EFEFEF] bg-white">
          <header className="flex h-[72px] items-center justify-between border-b border-[#EFEFEF] px-8">
            <span className="text-sm font-semibold text-[#F47920]">Voice Call - Workspace</span>
            <div className="flex w-[433px] items-center gap-2 rounded-lg border border-[#DCDCDC] bg-[#FAFAFA] px-3.5 py-2.5 shadow-sm">
              <img src={assets.search} alt="" className="h-5 w-5" />
              <input className="w-full bg-transparent text-sm text-[#464646] outline-none placeholder:text-[#7C7C7C]" placeholder="Search" />
            </div>
            <button onClick={() => showNotice("Tidak ada notifikasi baru")} className="flex h-10 w-10 items-center justify-center rounded-md border border-[#DCDCDC]">
              <img src={assets.bell} alt="" className="h-5 w-5" />
            </button>
          </header>

          <div className="flex gap-3.5 px-3.5 py-3.5">
            <section className="w-[321px] shrink-0 rounded-lg border border-[#EFEFEF] bg-white p-3.5">
              <h2 className="text-base font-medium text-[#3D3D3D]">Antrian Telepon</h2>
              <div className="mt-3.5 flex items-center gap-2 rounded-lg border border-[#DCDCDC] bg-white px-3.5 py-2.5 shadow-sm">
                <img src={assets.search} alt="" className="h-5 w-5" />
                <span className="truncate text-sm text-[#7C7C7C]">cari nama atau no polish....</span>
              </div>
              <div className="mt-3.5 flex rounded-lg border border-[#EFEFEF] bg-[#FAFAFA] p-1">
                <button onClick={() => setActiveCallTab("Berjalan")} className={`flex h-9 flex-1 items-center justify-center gap-2 rounded-md text-sm font-medium ${activeCallTab === "Berjalan" ? "border border-[#EFEFEF] bg-white text-[#F47920] shadow-sm" : "text-[#656565]"}`}>
                  Berjalan <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#F47920] text-xs text-white">1</span>
                </button>
                <button onClick={() => setActiveCallTab("Menunggu")} className={`flex h-9 flex-1 items-center justify-center gap-2 rounded-md text-sm font-medium ${activeCallTab === "Menunggu" ? "border border-[#EFEFEF] bg-white text-[#F47920] shadow-sm" : "text-[#656565]"}`}>
                  Menunggu <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#DCDCDC] text-xs text-[#7C7C7C]">3</span>
                </button>
              </div>
              <div className="mt-3.5 divide-y divide-[#EFEFEF]">
                {visibleCalls.map((call, index) => (
                  <button key={`${call.name}-${index}`} onClick={() => setSelectedCall(index)} className={`block w-full px-3.5 py-2 text-left ${selectedCall === index ? "bg-[#FFF8F3]" : call.active ? "bg-[#FAFAFA]" : "bg-white hover:bg-[#FAFAFA]"}`}>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-[#464646]">0812-9988-7766</span>
                      <StatusPill tone={call.active ? "orange" : "gray"}>{call.status}</StatusPill>
                    </div>
                    <div className="mt-2 text-sm font-medium text-[#464646]">{call.name}</div>
                    <div className="mt-1 text-xs text-[#7C7C7C]">04:12 - Inbound</div>
                  </button>
                ))}
              </div>
            </section>

            <section className="min-h-[748px] flex-1 overflow-hidden rounded-lg border border-[#EFEFEF] bg-white">
              <div className="flex items-center justify-between border-b border-[#EFEFEF] px-3.5 py-2.5">
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF3E8]">
                    <img src={assets.call} alt="" className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium text-[#464646]">{callStatus}</span>
                </div>
                <StatusPill tone="blue">Terekam</StatusPill>
              </div>
              <div className="flex min-h-[610px] flex-col items-center px-3.5 py-7">
                <span className="rounded-full bg-[#EFEFEF] px-3 py-1 text-xs font-medium text-[#464646]">Hari ini, 12:02</span>
                <div className="mt-20 flex flex-col items-center gap-8">
                  <Avatar size={48} />
                  <div className="text-center">
                    <div className="text-base font-medium text-[#464646]">Budi Santoso</div>
                    <div className="mt-1 text-sm text-[#464646]">0812-9988-7766</div>
                  </div>
                  <div className="text-[40px] font-semibold leading-[1.4] text-[#3D3D3D]">04:12</div>
                  <div className="flex h-8 items-end gap-1 opacity-70">
                    {[8, 16, 28, 12, 24, 32, 16, 8].map((height, index) => (
                      <span key={index} className="w-1.5 rounded-t bg-[#015570]" style={{ height }} />
                    ))}
                  </div>
                  <div className="flex items-center gap-3.5">
                    {[
                      { icon: assets.mic, action: "Mute" as const, label: "Mute aktif" },
                      { icon: assets.pause, action: "Pause" as const, label: "Panggilan ditahan" },
                      { icon: assets.refresh, action: "Transfer" as const, label: "Transfer panggilan dipilih" },
                    ].map((item) => (
                      <button key={item.icon} onClick={() => { setCallStatus(item.action); showNotice(item.label); }} className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#EFEFEF] bg-white hover:bg-[#FAFAFA]">
                        <img src={item.icon} alt="" className="h-6 w-6" />
                      </button>
                    ))}
                    <button onClick={() => { setCallStatus("Berakhir"); showNotice("Panggilan diakhiri"); }} className="flex h-12 w-12 items-center justify-center rounded-lg border border-[#FECACA] bg-[#DC2626] shadow-sm">
                      <img src={assets.callSlash} alt="" className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="px-3.5 pb-3.5">
                <label className="mb-1.5 block text-sm font-medium tracking-[-0.28px] text-[#3D3D3D]">Catatan Panggilan (Live)</label>
                <div className="overflow-hidden rounded-sm border border-[#EFEFEF] bg-white">
                  <textarea
                    value={callNote}
                    onChange={(event) => setCallNote(event.target.value)}
                    placeholder="Ketik balasan..."
                    className="h-[72px] w-full resize-none border-0 bg-[#FAFAFA] px-3.5 py-2.5 text-base outline-none placeholder:text-[#7C7C7C]"
                  />
                  <div className="flex h-[52px] items-center justify-end border-t border-[#EFEFEF] bg-white px-3.5">
                    <button
                      onClick={() => {
                        if (!callNote.trim()) {
                          showNotice("Tulis catatan panggilan terlebih dahulu");
                          return;
                        }
                        setCallNote("");
                        showNotice("Catatan panggilan tersimpan");
                      }}
                      className="flex h-8 items-center gap-2 rounded-md bg-[#F47920] px-3 text-sm font-semibold tracking-[-0.28px] text-white shadow-sm transition-transform hover:-translate-y-0.5 active:translate-y-0"
                    >
                      Kirim
                      <img src={assets.send} alt="" className="h-[18px] w-[18px] brightness-0 invert" />
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <aside className="flex w-[258px] shrink-0 flex-col gap-3.5">
              <section className="rounded-lg border border-[#EFEFEF] bg-white pb-3.5">
                <div className="flex items-center gap-2 border-b border-[#EFEFEF] px-3.5 py-2.5">
                  <Avatar size={40} />
                  <div>
                    <div className="text-sm font-medium text-[#464646]">Budi Santoso</div>
                    <div className="mt-1 text-xs text-[#7C7C7C]">Pemegang polis</div>
                  </div>
                </div>
                <div className="space-y-3.5 px-3.5 py-2.5">
                  <div className="flex gap-10">
                    <Info label="No Polis" value="899210023" />
                    <div>
                      <div className="mb-2 text-xs text-[#7C7C7C]">Status</div>
                      <StatusPill tone="green">Aktif</StatusPill>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <Info label="Produk" value="BLife Spectra" />
                    <Info label="UP" value="Rp 250.000.000" />
                  </div>
                </div>
                <button
                  onClick={() => setShowPolicyDrawer(true)}
                  className="mx-3.5 flex w-[204px] items-center justify-center rounded-md border border-[#EFEFEF] px-3.5 py-1.5 text-sm font-semibold text-[#464646]"
                >
                  Lihat Detail Polis
                </button>
              </section>
              <section className="rounded-lg border border-[#EFEFEF] bg-white pb-3.5">
                <div className="border-b border-[#EFEFEF] px-3.5 py-2.5 text-base font-medium text-[#3D3D3D]">Buat Tiket</div>
                <div className="space-y-3.5 px-3.5 py-2.5">
                  <Field label="Kategori" value={category} setValue={setCategory} options={["Pengecekan Klaim", "Klaim Asuransi", "Perubahan Polis"]} />
                  <Field label="Prioritas" value={priority} setValue={setPriority} options={["Tinggi", "Sedang", "Kritis"]} />
                  <label className="block">
                    <span className="mb-1.5 block text-sm font-medium text-[#3D3D3D]">Deskripsi</span>
                    <textarea placeholder="Masukan Deskripsi" className="h-[106px] w-full resize-none rounded-lg border border-[#EFEFEF] bg-[#FAFAFA] px-3.5 py-2.5 text-base outline-none" />
                  </label>
                </div>
                <button
                  onClick={() => setShowNewTicketModal(true)}
                  className="mx-3.5 w-[204px] rounded-md border border-[#016986] bg-[#016986] px-3.5 py-1.5 text-sm font-semibold text-white"
                >
                  Buat Tiket Baru
                </button>
              </section>
            </aside>
          </div>
        </main>
      </div>
      {showPolicyDrawer ? <PolicyDrawer onClose={() => setShowPolicyDrawer(false)} /> : null}
      {showNewTicketModal ? <NewTicketModal onClose={() => setShowNewTicketModal(false)} /> : null}
      {notice ? (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-lg bg-[#292929] px-4 py-2 text-sm font-semibold text-white shadow-lg">
          {notice}
        </div>
      ) : null}
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0">
      <div className="mb-2 text-xs text-[#7C7C7C]">{label}</div>
      <div className="text-sm font-medium text-[#464646]">{value}</div>
    </div>
  );
}

function Field({ label, value, setValue, options }: { label: string; value: string; setValue: (value: string) => void; options: string[] }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-[#464646]">{label}</span>
      <div className="relative">
        <select value={value} onChange={(event) => setValue(event.target.value)} className="w-full appearance-none rounded-lg border border-[#EFEFEF] bg-[#FAFAFA] px-3.5 py-2.5 pr-8 text-base text-[#7C7C7C] outline-none">
          {options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
        <img src={assets.arrow} alt="" className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2" />
      </div>
    </label>
  );
}
