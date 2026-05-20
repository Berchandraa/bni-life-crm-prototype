# CRM Prototype Structure

Struktur ini dipakai untuk membangun live prototype manual dari Figma secara bertahap.

Urutan implementasi yang disarankan:

1. `pages/HomeDashboardPage.tsx`
2. `pages/QueuePage.tsx`
3. `pages/VoiceCallWorkspacePage.tsx`
4. `pages/TicketManagementPage.tsx`
5. `components/feedback/PolicyDrawer.tsx`
6. `components/feedback/CreateTicketModal.tsx`

Prinsip kerja:

- `app/` untuk route map dan bootstrap screen
- `layouts/` untuk shell utama seperti sidebar + header
- `components/common/` untuk komponen reusable
- `components/feedback/` untuk modal, drawer, tooltip
- `data/` untuk dummy data per screen
- `pages/` untuk implementasi tiap frame Figma
- `types/` untuk typing data dan route

Kalau nanti project React/Vite utamanya sudah siap, folder ini tinggal dihubungkan ke `main.tsx` atau `App.tsx`.
