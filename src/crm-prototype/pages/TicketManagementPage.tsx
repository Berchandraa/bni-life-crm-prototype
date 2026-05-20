import { activeTickets } from "../data/dashboard";
import { StatusBadge } from "../components/common/StatusBadge";
import { CrmPageShell } from "../layouts/CrmPageShell";

export function TicketManagementPage() {
  return (
    <CrmPageShell activeRoute="ticket-management" title="Manajemen Tiket">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-[36px] font-semibold leading-[1.3] text-[#464646]">Daftar Tiket Aktif</h1>
          <button className="rounded-[6px] bg-[#F47920] px-[14px] py-[10px] text-[14px] font-semibold text-white">
            Buat Tiket Baru
          </button>
        </div>

        <div className="overflow-hidden rounded-[8px] border border-[#EFEFEF]">
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-[12px] tracking-[-0.24px] text-[#656565]">
                <th className="border-b border-[#EFEFEF] px-6 py-3 text-left font-normal">Nomor Tiket</th>
                <th className="border-b border-[#EFEFEF] px-6 py-3 text-left font-normal">Nasabah</th>
                <th className="border-b border-[#EFEFEF] px-6 py-3 text-left font-normal">Kategori</th>
                <th className="border-b border-[#EFEFEF] px-6 py-3 text-left font-normal">Prioritas</th>
                <th className="border-b border-[#EFEFEF] px-6 py-3 text-left font-normal">Status</th>
                <th className="border-b border-[#EFEFEF] px-6 py-3 text-left font-normal">Batas SLA</th>
              </tr>
            </thead>
            <tbody>
              {activeTickets.map((ticket) => (
                <tr key={ticket.id} className="text-[14px]">
                  <td className="border-b border-[#EFEFEF] px-6 py-4 text-[#7C7C7C]">{ticket.id}</td>
                  <td className="border-b border-[#EFEFEF] px-6 py-4">{ticket.customer}</td>
                  <td className="border-b border-[#EFEFEF] px-6 py-4">{ticket.category}</td>
                  <td className="border-b border-[#EFEFEF] px-6 py-4">
                    <StatusBadge
                      tone={
                        ticket.priority === "Kritis"
                          ? "danger"
                          : ticket.priority === "Tinggi"
                            ? "warning"
                            : "neutral"
                      }
                      value={ticket.priority}
                    />
                  </td>
                  <td className="border-b border-[#EFEFEF] px-6 py-4">
                    <StatusBadge tone={ticket.status === "Open" ? "success" : "neutral"} value={ticket.status} />
                  </td>
                  <td className="border-b border-[#EFEFEF] px-6 py-4">{ticket.sla}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </CrmPageShell>
  );
}
