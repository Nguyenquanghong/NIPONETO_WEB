import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { AppointmentDemoForm, ChatDemo } from "@/components/demo-interactions";
import { Card, EmptyFormMock, PageHeader, Pill, SectionTitle, StatCard } from "@/components/ui";
import { adminStats, appointments, articles, communityPosts, lostPets, marketplaceItems, medicalRecords, pets, reviewPlaces, stats, vaccinations, vouchers } from "@/data/mock";

export function DashboardPage() {
  return (
    <AppShell>
      <PageHeader eyebrow="SaaS/Medical Dashboard" title="Tổng quan hệ thống chăm sóc thú cưng" description="Theo dõi pet profile, lịch hẹn, bệnh án, QR scan, ưu đãi và thông báo y tế trong một màn hình." />
      <div className="grid gap-4 md:grid-cols-4">{stats.map(([t, v, d, i]) => <StatCard key={t} title={t} value={v} desc={d} icon={i} />)}</div>
      <div className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]"><PetCards /><ScheduleCard /></div>
      <div className="grid gap-6 xl:grid-cols-2"><RoadmapCard /><HealthAlertCard /></div>
    </AppShell>
  );
}

export function PetCards() {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <SectionTitle title="Thẻ chip vật nuôi" subtitle="Hồ sơ định danh vật lý & số" />
        <Pill>+ Thêm pet</Pill>
      </div>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {pets.map((pet) => (
          <article key={pet.id} className="overflow-hidden rounded-3xl border border-slate-200">
            <div className={`bg-gradient-to-r ${pet.color} p-5 text-white`}>
              <p className="text-sm font-bold opacity-80">ISO Microchip</p>
              <p className="mt-1 font-mono text-lg font-black">{pet.microchip}</p>
            </div>
            <div className="p-5">
              <h3 className="text-2xl font-black">{pet.name}</h3>
              <p className="mt-1 text-sm font-semibold text-slate-500">{pet.species} • {pet.breed} • {pet.age} • {pet.weight}</p>
              <p className="mt-3 text-sm font-semibold text-rose-600">Cảnh báo: {pet.alert}</p>
              <p className="mt-4 rounded-2xl bg-slate-100 p-3 text-sm font-bold text-slate-700">{pet.status}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Link href={`/qr/${pet.qrToken}`} className="rounded-full bg-emerald-600 px-4 py-2 text-xs font-black text-white">Xem QR</Link>
                <Link href="/medical-records" className="rounded-full bg-slate-100 px-4 py-2 text-xs font-black text-slate-700">Bệnh án</Link>
                <Link href="/appointments" className="rounded-full bg-slate-950 px-4 py-2 text-xs font-black text-white">Đặt lịch</Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Card>
  );
}

export function ScheduleCard() {
  return <Card><SectionTitle title="Lịch hôm nay" subtitle="Khám, tẩy giun, grooming" /><div className="mt-5 space-y-3">{appointments.map((a) => <div key={a.title} className="rounded-2xl bg-slate-50 p-4"><div className="flex justify-between gap-3"><p className="font-black text-slate-950">{a.time}</p><Pill tone="cyan">{a.status}</Pill></div><p className="mt-2 text-sm font-bold text-slate-700">{a.title}</p><p className="text-xs text-slate-500">{a.meta}</p></div>)}</div></Card>;
}

export function RoadmapCard() {
  const items = ["Demo flow frontend mượt", "Pet profile + Microchip/QR public", "Medical records + vaccine/reminder", "Appointment + chatbox + admin console"];
  return <Card><SectionTitle title="Lộ trình demo 3 ngày" /><div className="mt-5 space-y-4">{items.map((x, i) => <div key={x} className="flex gap-4"><b className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">{i + 1}</b><p className="pt-1 text-sm font-semibold text-slate-700">{x}</p></div>)}</div></Card>;
}

export function HealthAlertCard() {
  return <Card><SectionTitle title="Thông báo y tế" subtitle="Bảng tin chính thức từ bệnh viện" /><div className="mt-5 rounded-3xl bg-amber-50 p-5"><Pill tone="amber">Cảnh báo mùa hè</Pill><p className="mt-3 text-sm leading-6 text-amber-900">Nhắc chủ nuôi theo dõi dấu hiệu sốc nhiệt, ký sinh trùng và lịch tiêm phòng dại.</p></div></Card>;
}

export function PetsPage() { return <AppShell><PageHeader eyebrow="Pet Profile" title="Hồ sơ thú cưng thông minh" description="Quản lý thông tin định danh, ảnh đại diện, chủng loại, giống, ngày sinh, giới tính, triệt sản và cảnh báo y tế." action={<button className="rounded-full bg-white px-5 py-3 text-sm font-black text-emerald-700">Tạo hồ sơ</button>} /><PetCards /><Card><SectionTitle title="Biểu mẫu tạo/cập nhật pet" /><div className="mt-5"><EmptyFormMock cta="Lưu hồ sơ pet" /></div></Card></AppShell>; }

export function MicrochipQrPage() {
  return <AppShell><PageHeader eyebrow="Microchip & QR" title="Định danh vật lý và QR công cộng" description="Mỗi pet có microchip ISO 15 số, QR token duy nhất, chế độ công khai khi scan và chế độ bảo mật cho chủ/bác sĩ." /><div className="grid gap-6 lg:grid-cols-2">{pets.map((p) => <Card key={p.id}><SectionTitle title={`${p.name} - QR Token`} subtitle={p.qrToken} /><div className="mt-5 grid gap-4 md:grid-cols-[180px_1fr]"><div className="flex aspect-square items-center justify-center whitespace-pre-line rounded-3xl bg-slate-950 text-center font-mono text-white">{`QR\n${p.qrToken}`}</div><div className="space-y-3 text-sm font-semibold text-slate-700"><p>Microchip: <b>{p.microchip}</b></p><p>Cảnh báo công khai: {p.alert}</p><Pill>Public profile bật</Pill><Pill tone="slate">Private medical record bảo mật</Pill><div className="pt-2"><Link href={`/qr/${p.qrToken}`} className="inline-flex rounded-full bg-emerald-600 px-5 py-3 text-sm font-black text-white">Mở trang QR public</Link></div></div></div></Card>)}</div></AppShell>;
}

export function MedicalPage() { return <AppShell><PageHeader eyebrow="Digital Health Record" title="Sổ bệnh án điện tử" description="Tiền sử bệnh, phẫu thuật, kết quả xét nghiệm, đơn thuốc số, phim X-quang/siêu âm và ghi chú bác sĩ." /><Card><SectionTitle title="Lịch sử khám" /><div className="mt-5 space-y-3">{medicalRecords.map((r) => <div key={r.pet + r.date} className="rounded-3xl bg-slate-50 p-5"><div className="flex flex-wrap items-center gap-2"><Pill>{r.pet}</Pill><Pill tone="slate">{r.date}</Pill></div><h3 className="mt-3 text-lg font-black">{r.diagnosis}</h3><p className="mt-1 text-sm font-semibold text-slate-600">{r.doctor}</p><p className="mt-3 text-sm leading-6 text-slate-600">{r.note}</p></div>)}</div></Card><Card><SectionTitle title="Nhập bệnh án nhanh" /><div className="mt-5"><EmptyFormMock cta="Lưu bệnh án" /></div></Card></AppShell>; }
export function VaccinationsPage() { return <AppShell><PageHeader eyebrow="Reminder" title="Tiêm phòng, tẩy giun và nhắc lịch" description="Theo dõi mũi tiêm, lịch nhắc tự động qua web/app/SMS/Zalo trong tương lai." /><Card><div className="grid gap-4 md:grid-cols-3">{vaccinations.map((v) => <div key={v.pet + v.vaccine} className="rounded-3xl bg-slate-50 p-5"><Pill tone="amber">{v.status}</Pill><h3 className="mt-4 text-xl font-black">{v.vaccine}</h3><p className="text-sm text-slate-500">{v.pet} • Hạn: {v.due}</p></div>)}</div></Card></AppShell>; }
export function AppointmentsPage() { return <AppShell><PageHeader eyebrow="Booking" title="Đặt lịch khám, tiêm phòng và spa" description="Workflow chọn pet, dịch vụ, bác sĩ, khung giờ, trạng thái xác nhận và nhắc lịch tự động." /><div className="grid gap-6 xl:grid-cols-[0.8fr_1.2fr]"><ScheduleCard /><Card><SectionTitle title="Tạo lịch hẹn demo" subtitle="Form này dùng state trên trình duyệt để mô phỏng đặt lịch thành công, chưa cần backend." /><div className="mt-5"><AppointmentDemoForm /></div></Card></div></AppShell>; }
export function GroomingPage() { return <AppShell><PageHeader eyebrow="Spa & Grooming" title="Chu kỳ chăm sóc định kỳ" description="Quản lý lịch tắm, cắt tỉa, vệ sinh tai/móng và nhắc lịch theo giống, lông, da." /><ScheduleCard /></AppShell>; }
export function AnnouncementsPage() { return <AppShell><PageHeader eyebrow="Official Feed" title="Thông báo và bảng tin y tế" description="Tin chính thức từ bệnh viện, cảnh báo dịch, lịch nghỉ, chính sách và khuyến nghị chăm sóc." /><HealthAlertCard /></AppShell>; }
export function KnowledgePage() { return <AppShell><PageHeader eyebrow="Knowledge Base" title="Sổ tay chăm sóc thú cưng" description="Bài viết hướng dẫn, dinh dưỡng, sơ cứu và onboarding dùng microchip/QR." /><Card><div className="grid gap-4 md:grid-cols-3">{articles.map((a) => <div key={a.title} className="rounded-3xl bg-slate-50 p-5"><Pill tone="cyan">{a.category}</Pill><h3 className="mt-4 font-black">{a.title}</h3><p className="mt-2 text-sm text-slate-500">{a.read}</p></div>)}</div></Card></AppShell>; }
export function LoyaltyPage() { return <AppShell><PageHeader eyebrow="N-Point" title="Ưu đãi, voucher và điểm thành viên" description="Tích điểm, đổi ưu đãi, voucher chăm sóc định kỳ và chăm sóc sau khám." /><Card><div className="grid gap-4 md:grid-cols-2">{vouchers.map((v) => <div key={v.code} className="rounded-3xl bg-emerald-50 p-5"><h3 className="text-xl font-black text-emerald-950">{v.title}</h3><p className="mt-2 font-mono font-black text-emerald-700">{v.code}</p><p className="text-sm text-emerald-700">Hạn: {v.expire}</p></div>)}</div></Card></AppShell>; }
export function SurveysPage() { return <AppShell><PageHeader eyebrow="NPS" title="Khảo sát hài lòng sau dịch vụ" description="Thu thập NPS 1-10, lý do đánh giá, xử lý phản hồi và cải thiện chất lượng." /><Card><SectionTitle title="Bạn có sẵn sàng giới thiệu NIPPON PET CARE?" /><div className="mt-5 flex flex-wrap gap-2">{Array.from({ length: 10 }, (_, i) => <button key={i + 1} className="h-12 w-12 rounded-2xl bg-slate-100 font-black hover:bg-emerald-600 hover:text-white">{i + 1}</button>)}</div></Card></AppShell>; }
export function CommunityPage() { return <AppShell><PageHeader eyebrow="Pet Community" title="Cộng đồng chia sẻ theo hồ sơ thú cưng" description="Bài viết gắn với profile pet để người đọc hiểu ngữ cảnh giống, tuổi, cân nặng." /><Card><div className="space-y-3">{communityPosts.map((p) => <div key={p.title} className="rounded-3xl bg-slate-50 p-5"><Pill tone="slate">{p.author}</Pill><h3 className="mt-3 text-lg font-black">{p.title}</h3><p className="text-sm text-slate-500">{p.replies} bình luận</p></div>)}</div></Card></AppShell>; }
export function LostPetsPage() { return <AppShell><PageHeader eyebrow="GPS Alert" title="Mạng lưới tìm chó/mèo thất lạc" description="Đăng tin khẩn cấp kèm GPS và cảnh báo tài khoản trong bán kính 5km." /><Card><div className="grid gap-4 md:grid-cols-2">{lostPets.map((p) => <div key={p.name} className="rounded-3xl bg-rose-50 p-5"><Pill tone="rose">Khẩn cấp</Pill><h3 className="mt-4 text-xl font-black text-rose-950">{p.name}</h3><p className="text-sm text-rose-700">Khu vực: {p.area} • Bán kính: {p.radius} • {p.time}</p></div>)}</div></Card></AppShell>; }
export function MarketplacePage() { return <AppShell><PageHeader eyebrow="Community Marketplace" title="Chợ phụ kiện & thức ăn" description="Trao đổi, pass lại phụ kiện cũ hoặc mua sắm vật phẩm uy tín." /><Card><div className="grid gap-4 md:grid-cols-2">{marketplaceItems.map((i) => <div key={i.name} className="rounded-3xl bg-slate-50 p-5"><h3 className="text-xl font-black">{i.name}</h3><p className="mt-2 font-black text-emerald-700">{i.price}</p><p className="text-sm text-slate-500">{i.condition}</p></div>)}</div></Card></AppShell>; }
export function ReviewMapPage() { return <AppShell><PageHeader eyebrow="GPS Review" title="Bản đồ đánh giá dịch vụ uy tín" description="Review phòng khám, khách sạn thú cưng, pet cafe xung quanh khu vực." /><Card><div className="grid gap-6 lg:grid-cols-[1fr_1fr]"><div className="flex min-h-80 items-center justify-center rounded-3xl bg-slate-200 font-black text-slate-500">MAP MOCK</div><div className="space-y-3">{reviewPlaces.map((p) => <div key={p.name} className="rounded-3xl bg-slate-50 p-5"><h3 className="font-black">{p.name}</h3><p className="text-sm text-slate-500">{p.type} • ⭐ {p.rating} • {p.distance}</p></div>)}</div></div></Card></AppShell>; }
export function ChatPage() { return <AppShell><PageHeader eyebrow="Telehealth" title="Trung tâm tư vấn & kết nối trực tuyến" description="Tầng 1 AI bot/auto-responder, tầng 2 bác sĩ trực tuyến khi khẩn cấp." /><Card><ChatDemo /></Card></AppShell>; }
export function ProfilePage() { return <AppShell><PageHeader eyebrow="Account" title="Hồ sơ cá nhân" description="Thông tin chủ nuôi, liên hệ khẩn cấp, bảo mật và ngôn ngữ." /><Card><EmptyFormMock cta="Cập nhật tài khoản" /></Card></AppShell>; }
export function AdminPage() { return <AppShell><PageHeader eyebrow="Admin Console" title="Bảng điều khiển quản trị bệnh viện" description="Quản lý user, pet, lịch hẹn, bệnh án, thông báo, chat và báo cáo." /><div className="grid gap-4 md:grid-cols-4">{adminStats.map(([t, v]) => <StatCard key={t} title={t} value={v} />)}</div><Card><SectionTitle title="Hàng đợi vận hành" /><div className="mt-5 grid gap-3 md:grid-cols-3">{["Duyệt lịch hẹn", "Phân công bác sĩ", "Kiểm duyệt cộng đồng"].map((x) => <div key={x} className="rounded-3xl bg-slate-50 p-5 font-black">{x}</div>)}</div></Card></AppShell>; }
export function DoctorPage() { return <AppShell><PageHeader eyebrow="Doctor Console" title="Bác sĩ trực tuyến" description="Xem ca khám, bệnh án, chat khẩn cấp và kê đơn số." /><ScheduleCard /><MedicalRecordsCard /></AppShell>; }

function MedicalRecordsCard() {
  return <Card><SectionTitle title="Bệnh án cần xem nhanh" /><div className="mt-5 space-y-3">{medicalRecords.map((r) => <div key={r.pet + r.date} className="rounded-3xl bg-slate-50 p-5"><Pill>{r.pet}</Pill><h3 className="mt-3 text-lg font-black">{r.diagnosis}</h3><p className="text-sm text-slate-500">{r.date} • {r.doctor}</p></div>)}</div></Card>;
}