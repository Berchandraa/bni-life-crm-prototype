import { useState } from "react";
import { StatusBadge } from "../components/common/StatusBadge";
import { activeTickets, activityByRange, dashboardKpis, months } from "../data/dashboard";
import { CrmPageShell } from "../layouts/CrmPageShell";

type RangeKey = keyof typeof activityByRange;

const ranges: RangeKey[] = ["Today", "Weekly", "Monthly"];

const kpiIcons: Record<string, string> = {
  Telepon: "https://www.figma.com/api/mcp/asset/e3043dcc-734c-4def-b598-88218548b0ec",
  "Live Chat": "https://www.figma.com/api/mcp/asset/3f1cb357-e3b0-488d-b6ec-acfa1d1f2dec",
  "Video Call": "https://www.figma.com/api/mcp/asset/294eb0da-67a1-440a-8c55-a56da2b6cf30",
};

const performanceItems = [
  { color: "#F47920", label: "Tiket Aktif", value: "18" },
  { color: "#16A341", label: "Di Selesaikan", value: "24" },
  { color: "#016986", label: "Rata Rata Penanganan", value: "5m 23d" },
  { color: "#257CEB", label: "Kepuasan Nasabah", value: "4.7 / 5.0" },
];

const customerItems = [
  { color: "#D4640F", label: "Klaim Aktif", value: "5" },
  { color: "#F78C3D", label: "Polis Jatuh Tempo", value: "8" },
  { color: "#8D4009", label: "Nasabah di Layani", value: "12" },
];

function RangeSelect({ value, onChange }: { value: RangeKey; onChange: (value: RangeKey) => void }) {
  return (
    <select
      value={value}
      onChange={(event) => onChange(event.target.value as RangeKey)}
      className="h-10 rounded-[8px] border border-[#DCDCDC] bg-white px-3 text-[14px] text-[#3D3D3D] outline-none"
    >
      {ranges.map((range) => (
        <option key={range} value={range}>
          {range === "Today" ? "Hari Ini" : range}
        </option>
      ))}
    </select>
  );
}

function DonutChart({ variant }: { variant: "customer" | "performance" }) {
  const background =
    variant === "performance"
      ? "conic-gradient(#F47920 0deg 74deg, #16A341 74deg 172deg, #016986 172deg 240deg, #257CEB 240deg 360deg)"
      : "conic-gradient(#D4640F 0deg 72deg, #F78C3D 72deg 188deg, #8D4009 188deg 360deg)";

  return (
    <div className="relative h-[120px] w-[120px] shrink-0 rounded-full transition duration-200 hover:scale-[1.03]" style={{ background }}>
      <div className="absolute inset-[28px] rounded-full bg-[#FAFAFA]" />
    </div>
  );
}

function priorityTone(priority: string) {
  if (priority === "Kritis") return "danger";
  if (priority === "Tinggi") return "warning";
  return "neutral";
}

export function HomeDashboardPage() {
  const [performanceRange, setPerformanceRange] = useState<RangeKey>("Today");
  const [customerRange, setCustomerRange] = useState<RangeKey>("Today");
  const [activityRange, setActivityRange] = useState<RangeKey>("Monthly");
  const [hoveredBar, setHoveredBar] = useState(4);
  const activityData = activityByRange[activityRange];

  return (
    <CrmPageShell activeRoute="dashboard" title="Dashboard">
      <div className="space-y-5">
        <div>
          <h1 className="text-[27px] font-semibold leading-[1.2] tracking-[-0.54px] text-[#3D3D3D]">Selamat pagi, Rizky</h1>
          <p className="mt-1 text-[16px] text-[#7C7C7C]">Hari ini ada 5 tiket yang perlu ditindak lanjuti.</p>
        </div>

        <div className="border-t border-[#EFEFEF] pt-5">
        <div className="grid grid-cols-3 gap-4">
          {dashboardKpis.map((item) => (
            <div key={item.title} className="min-h-[154px] rounded-[8px] border border-[#EFEFEF] bg-white p-5 shadow-[0_1px_3px_rgba(244,121,32,0.05)]">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[8px] border border-[#EFEFEF] bg-[#FAFAFA] shadow-[0_2px_4px_rgba(0,0,0,0.03)]">
                    <img src={kpiIcons[item.title]} alt="" className="h-5 w-5" />
                  </div>
                  <div className="text-[18px] font-semibold text-[#3D3D3D]">{item.title}</div>
                </div>
                <div className={`rounded-full px-3 py-1 text-[12px] ${item.badge === "Off" ? "bg-[#FEF2F2] text-[#EF4444]" : "bg-[#F0FDF4] text-[#22C554]"}`}>
                  {item.badge}
                </div>
              </div>
              <div className="mt-5 flex items-end gap-2">
                <div className="text-[32px] font-semibold leading-none" style={{ color: item.accent }}>
                  {item.value}
                </div>
                <div className="text-[14px] text-[#7C7C7C]">{item.label}</div>
              </div>
              <button className="mt-6 h-10 w-full rounded-[6px] border text-[14px] font-semibold" style={{ borderColor: item.accent, color: item.accent }}>
                {item.title === "Video Call" ? "Mulai Video" : "Lihat Detail"}
              </button>
            </div>
          ))}
        </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <section className="rounded-[8px] border border-[#EFEFEF] bg-white">
            <div className="flex items-center justify-between border-b border-[#EFEFEF] bg-[#FAFAFA] px-4 py-3">
              <h2 className="text-[14px] font-semibold uppercase text-[#525252]">Performa Agent</h2>
              <RangeSelect value={performanceRange} onChange={setPerformanceRange} />
            </div>
            <div className="flex items-center gap-7 p-5">
              <DonutChart variant="performance" />
              <div className="space-y-2">
                {performanceItems.map((item) => (
                  <div key={item.label} className="flex items-center gap-2 text-[14px] text-[#656565]">
                    <span className="h-2 w-2 rounded-full" style={{ backgroundColor: item.color }} />
                    <span>{item.label} : </span>
                    <strong className="font-semibold text-[#464646]">{item.value}</strong>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="rounded-[8px] border border-[#EFEFEF] bg-white">
            <div className="flex items-center justify-between border-b border-[#EFEFEF] bg-[#FAFAFA] px-4 py-3">
              <h2 className="text-[14px] font-semibold uppercase text-[#525252]">Konteks Nasabah</h2>
              <RangeSelect value={customerRange} onChange={setCustomerRange} />
            </div>
            <div className="flex items-center gap-7 p-5">
              <DonutChart variant="customer" />
              <div className="space-y-2">
                {customerItems.map((item) => (
                  <div key={item.label} className="flex items-center gap-2 text-[14px] text-[#656565]">
                    <span className="h-2 w-2 rounded-full" style={{ backgroundColor: item.color }} />
                    <span>{item.label} : {item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <section className="rounded-[8px] border border-[#EFEFEF] bg-white">
          <div className="flex items-center justify-between border-b border-[#EFEFEF] bg-[#FAFAFA] px-4 py-3">
            <h2 className="text-[24px] font-semibold text-[#464646]">Aktivitas Agent</h2>
            <RangeSelect value={activityRange} onChange={setActivityRange} />
          </div>
          <div className="px-5 py-4">
            <div className="relative flex h-[230px] items-end justify-between border-b border-[#EFEFEF] px-6">
              {[100, 50, 35, 20, 10, 0].map((tick, index) => (
                <span key={tick} className="absolute left-0 text-[12px] text-[#656565]" style={{ bottom: `${index * 36}px` }}>
                  {tick}
                </span>
              ))}
              {activityData.map((value, index) => (
                <button
                  key={months[index]}
                  type="button"
                  onMouseEnter={() => setHoveredBar(index)}
                  className="relative flex h-full w-[44px] items-end justify-center"
                >
                  {hoveredBar === index ? (
                    <span className="absolute bottom-[calc(var(--bar-height)+14px)] rounded-[8px] bg-white px-3 py-2 text-[12px] font-semibold shadow-[0_8px_18px_rgba(0,0,0,0.12)]" style={{ "--bar-height": `${value * 1.7}px` } as React.CSSProperties}>
                      {value} Ticket
                    </span>
                  ) : null}
                  <span
                    className={`w-[28px] rounded-t-[6px] transition ${hoveredBar === index ? "bg-[#F47920]" : "bg-[#FFAB66]"}`}
                    style={{ height: `${value * 1.7}px` }}
                  />
                </button>
              ))}
            </div>
            <div className="mt-2 flex justify-between pl-10 pr-6 text-[12px] text-[#656565]">
              {months.map((month) => (
                <span key={month} className="w-[44px] text-center">{month}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-[8px] border border-[#EFEFEF] bg-white">
          <div className="flex items-center justify-between px-4 py-4">
            <h2 className="text-[24px] font-semibold text-[#464646]">Tiket Perlu Ditindaklanjuti</h2>
            <button className="text-[14px] font-semibold text-[#F47920]">Lihat Semua</button>
          </div>
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-[12px] uppercase text-[#656565]">
                <th className="border-t border-[#EFEFEF] px-6 py-3 text-left font-normal">Nomor Tiket</th>
                <th className="border-t border-[#EFEFEF] px-6 py-3 text-left font-normal">Nasabah</th>
                <th className="border-t border-[#EFEFEF] px-6 py-3 text-left font-normal">Kategori</th>
                <th className="border-t border-[#EFEFEF] px-6 py-3 text-left font-normal">Prioritas</th>
                <th className="border-t border-[#EFEFEF] px-6 py-3 text-left font-normal">Batas SLA</th>
                <th className="border-t border-[#EFEFEF] px-6 py-3 text-left font-normal">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {activeTickets.map((ticket) => (
                <tr key={ticket.id} className="text-[14px]">
                  <td className="border-t border-[#EFEFEF] px-6 py-4 text-[#7C7C7C]">{ticket.id}</td>
                  <td className="border-t border-[#EFEFEF] px-6 py-4 font-medium">{ticket.customer}</td>
                  <td className="border-t border-[#EFEFEF] px-6 py-4 font-medium text-black">{ticket.category}</td>
                  <td className="border-t border-[#EFEFEF] px-6 py-4">
                    <StatusBadge tone={priorityTone(ticket.priority)} value={ticket.priority} />
                  </td>
                  <td className="border-t border-[#EFEFEF] px-6 py-4 font-medium text-[#D4640F]">{ticket.sla}</td>
                  <td className="border-t border-[#EFEFEF] px-6 py-4">
                    <button className="rounded-[6px] bg-[#F47920] px-4 py-2 text-[14px] font-semibold text-white">Tangani</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </CrmPageShell>
  );
}
