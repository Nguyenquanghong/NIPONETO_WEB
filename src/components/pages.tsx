import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { AddPetDemoForm, LostStatusButton } from "@/components/pet-interactions";
import { Card, PageHeader, Pill, SectionTitle, StatCard } from "@/components/ui";
import { foundReports, owner, pets, stats } from "@/data/mock";

function statusLabel(status: string) {
  return status === "lost" ? "Đang thất lạc" : "An toàn";
}

function statusTone(status: string) {
  return status === "lost" ? "rose" : "emerald" as const;
}

export function DashboardPage() {
  return (
    <AppShell>
      <PageHeader
        eyebrow="Pet Identity Dashboard"
        title={`Xin chào, ${owner.name}`}
        description="Quản lý hồ sơ thú cưng, mã QR vòng cổ và các tin báo tìm thấy trong một nơi đơn giản."
        action={<Link href="/pets" className="rounded-full bg-white px-5 py-3 text-sm font-black text-emerald-700">Quản lý thú cưng</Link>}
      />
      <div className="grid gap-4 md:grid-cols-4">{stats.map(([t, v, d, i]) => <StatCard key={t} title={t} value={v} desc={d} icon={i} />)}</div>
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]"><PetList compact /><RecentReports /></div>
      <Card>
        <SectionTitle title="Luồng demo chính" subtitle="Đăng nhập → tạo hồ sơ pet → QR định danh → báo thất lạc → người nhặt gửi vị trí." />
        <div className="mt-5 grid gap-3 md:grid-cols-4">
          {["Tạo tài khoản", "Thêm thú cưng", "Gắn QR lên vòng cổ", "Nhận tin báo tìm thấy"].map((item, index) => <div key={item} className="rounded-3xl bg-emerald-50 p-5 font-black text-emerald-900">{index + 1}. {item}</div>)}
        </div>
      </Card>
    </AppShell>
  );
}

export function ProfilePage() {
  return (
    <AppShell>
      <PageHeader eyebrow="Owner Profile" title="Hồ sơ chủ nuôi" description="Thông tin này dùng để liên hệ khi thú cưng được tìm thấy. Trang QR public chỉ hiển thị thông tin cần thiết." />
      <Card>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            ["Họ tên", owner.name],
            ["Số điện thoại", owner.phone],
            ["Email", owner.email],
            ["Khu vực", owner.area],
            ["Địa chỉ", owner.address],
            ["Liên hệ khẩn cấp", owner.emergencyContact],
          ].map(([label, value]) => <div key={label} className="rounded-3xl bg-slate-50 p-5"><p className="text-sm font-bold text-slate-500">{label}</p><p className="mt-2 font-black text-slate-950">{value}</p></div>)}
        </div>
      </Card>
    </AppShell>
  );
}

export function PetsPage() {
  return (
    <AppShell>
      <PageHeader eyebrow="Pet Profiles" title="Thú cưng của tôi" description="Tạo hồ sơ, lưu đặc điểm nhận dạng, tình trạng sức khỏe cơ bản và QR riêng cho từng bé." />
      <PetList />
      <Card>
        <SectionTitle title="Tạo hồ sơ thú cưng demo" subtitle="Form frontend mô phỏng. Khi có backend, dữ liệu sẽ lưu vào bảng Pet và tự sinh QR token." />
        <div className="mt-5"><AddPetDemoForm /></div>
      </Card>
    </AppShell>
  );
}

export function LostPetsPage() {
  const lostPets = pets.filter((pet) => pet.status === "lost");

  return (
    <AppShell>
      <PageHeader eyebrow="Lost Pet Finder" title="Tìm thú cưng bị mất" description="Danh sách các bé đang được chủ báo thất lạc. Người nhìn thấy có thể mở QR hoặc gửi tin báo vị trí." />
      <div className="grid gap-5 md:grid-cols-2">
        {lostPets.map((pet) => (
          <Card key={pet.id}>
            <div className={`mb-5 flex items-center gap-4 rounded-3xl bg-gradient-to-r ${pet.gradient} p-5 text-white`}>
              <div className="text-6xl">{pet.image}</div>
              <div><Pill tone="rose">Đang thất lạc</Pill><h2 className="mt-3 text-3xl font-black">{pet.name}</h2><p className="font-bold">{pet.species} • {pet.breed}</p></div>
            </div>
            <div className="space-y-3 text-sm font-semibold text-slate-700">
              <p><b>Khu vực mất:</b> {pet.lastSeenArea}</p>
              <p><b>Đặc điểm:</b> {pet.identifyingMarks}</p>
              <p><b>Mô tả:</b> {pet.lostDescription}</p>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              <Link href={`/qr/${pet.qrToken}`} className="rounded-full bg-emerald-600 px-5 py-3 text-sm font-black text-white">Mở QR public</Link>
              <a href={`tel:${owner.phone.replaceAll(" ", "")}`} className="rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white">Gọi chủ nuôi</a>
            </div>
          </Card>
        ))}
      </div>
    </AppShell>
  );
}

function PetList({ compact = false }: { compact?: boolean }) {
  return (
    <Card>
      <div className="flex items-center justify-between gap-3">
        <SectionTitle title="Hồ sơ định danh" subtitle="Mỗi bé có QR token riêng để in/gắn lên vòng cổ." />
        <Pill>{pets.length} hồ sơ</Pill>
      </div>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {pets.map((pet) => (
          <article key={pet.id} className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
            <div className={`bg-gradient-to-r ${pet.gradient} p-5 text-white`}>
              <div className="flex items-center justify-between gap-4">
                <div className="text-6xl">{pet.image}</div>
                <Pill tone={statusTone(pet.status)}>{statusLabel(pet.status)}</Pill>
              </div>
              <h3 className="mt-4 text-3xl font-black">{pet.name}</h3>
              <p className="font-bold opacity-90">{pet.species} • {pet.breed} • {pet.age}</p>
            </div>
            <div className="space-y-3 p-5 text-sm font-semibold text-slate-700">
              <p>QR Token: <b className="font-mono">{pet.qrToken}</b></p>
              <p>Microchip: <b>{pet.microchip}</b></p>
              {!compact ? <><p>Đặc điểm: {pet.identifyingMarks}</p><p>Lưu ý sức khỏe: {pet.healthNote}</p></> : null}
              <div className="flex flex-wrap gap-2 pt-2">
                <Link href={`/qr/${pet.qrToken}`} className="rounded-full bg-emerald-600 px-4 py-2 text-xs font-black text-white">Xem QR</Link>
                <Link href="/lost-pets" className="rounded-full bg-slate-100 px-4 py-2 text-xs font-black text-slate-700">Trang thất lạc</Link>
              </div>
              {!compact ? <LostStatusButton initialStatus={pet.status} /> : null}
            </div>
          </article>
        ))}
      </div>
    </Card>
  );
}

function RecentReports() {
  return (
    <Card>
      <SectionTitle title="Tin báo gần đây" subtitle="Mô phỏng lượt quét QR và báo vị trí." />
      <div className="mt-5 space-y-3">
        {foundReports.map((report) => <div key={report.time + report.petName} className="rounded-3xl bg-slate-50 p-5"><Pill tone="cyan">{report.petName}</Pill><p className="mt-3 font-black">{report.location}</p><p className="text-xs font-bold text-slate-500">{report.time}</p><p className="mt-2 text-sm text-slate-600">{report.message}</p></div>)}
      </div>
    </Card>
  );
}