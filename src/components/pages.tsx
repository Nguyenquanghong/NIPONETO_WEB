/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { AddPetDemoForm, LostStatusButton, QrCodeCard } from "@/components/pet-interactions";
import { Card, PageHeader, Pill, SectionTitle } from "@/components/ui";
import { foundReports, owner, pets } from "@/data/mock";

function statusLabel(status: string) {
  return status === "lost" ? "Lost" : "Safe";
}

function statusTone(status: string) {
  return (status === "lost" ? "rose" : "emerald") as "rose" | "emerald";
}

export function DashboardPage() {
  return (
    <AppShell>
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <section>
          <div className="mb-8 flex items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl font-black">Your Pets</h1>
              <p className="mt-1 text-lg text-[#3f4f4f]">Manage profiles and safety tools.</p>
            </div>
            <Link href="/pets" className="btn-primary px-6 py-4">⊕ Add New Pet</Link>
          </div>
          <PetList compact />
        </section>
        <RecentReports />
      </div>
    </AppShell>
  );
}

export function ProfilePage() {
  return (
    <AppShell>
      <PageHeader eyebrow="Owner Profile" title="Hồ sơ chủ nuôi" description="Thông tin này dùng để liên hệ khi thú cưng được tìm thấy. Trang QR public chỉ hiển thị thông tin cần thiết." />
      <Card>
        <div className="grid gap-4 md:grid-cols-2">
          {[["Họ tên", owner.name], ["Số điện thoại", owner.phone], ["Email", owner.email], ["Khu vực", owner.area], ["Địa chỉ", owner.address], ["Liên hệ khẩn cấp", owner.emergencyContact]].map(([label, value]) => (
            <div key={label} className="rounded-xl border border-[#e2e8f0] bg-[#f6f8fd] p-5"><p className="text-sm font-bold text-[#526160]">{label}</p><p className="mt-2 font-black">{value}</p></div>
          ))}
        </div>
      </Card>
    </AppShell>
  );
}

export function PetsPage() {
  return (
    <AppShell>
      <PageHeader eyebrow="Pet Profiles" title="Thú cưng của tôi" description="Tạo hồ sơ, lưu đặc điểm nhận dạng, tình trạng sức khỏe cơ bản và QR riêng cho từng bé." action={<Link href="/lost-pets" className="btn-primary px-6 py-4">View Lost Pets</Link>} />
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
      <PageHeader title="Help Bring Them Home" description="If you've lost a pet, our community is here to help. Report your lost pet immediately to alert neighbors and local shelters in your area." action={<Link href="/pets" className="btn-primary px-6 py-4">📣 Report a Lost Pet</Link>} />
      <div className="grid gap-4 md:grid-cols-[1fr_140px_140px_1fr]"><input className="field" placeholder="⌕  Search by name or keywords..." /><input className="field" placeholder="Species (All)" /><input className="field" placeholder="Breed (All)" /><input className="field" placeholder="⌖  Location..." /></div>
      <div className="flex items-center justify-between text-sm font-semibold text-[#3f4f4f]"><span>Showing 24 lost pets nearby</span><span className="font-black text-[#00796b]">☷ More Filters</span></div>
      <div className="grid gap-6 md:grid-cols-3">
        {lostPets.concat(pets[0]).concat(lostPets).map((pet, index) => (
          <article key={`${pet.id}-${index}`} className="soft-card overflow-hidden rounded-xl">
            <div className="relative h-60"><img src={pet.photo} alt={pet.name} className="h-full w-full object-cover" /><div className="absolute left-4 top-4"><Pill tone="rose">● Lost</Pill></div></div>
            <div className="p-4"><div className="flex items-center justify-between"><h2 className="text-3xl font-black">{pet.name}</h2><Pill tone="slate">{pet.species} • {pet.gender}</Pill></div><p className="mt-3 text-sm text-[#3f4f4f]">⌖ Last seen near {pet.lastSeenArea}</p><p className="mt-3 text-sm text-[#3f4f4f]">▣ Oct 27, 2026 • Today</p><Link href={`/qr/${pet.qrToken}`} className="btn-primary mt-5 block px-5 py-3 text-center">◉ I Found This Pet</Link></div>
          </article>
        ))}
      </div>
      <div className="text-center"><button className="btn-outline px-8 py-3">Load More Pets</button></div>
    </AppShell>
  );
}

function PetList({ compact = false }: { compact?: boolean }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {pets.map((pet) => (
        <article key={pet.id} className="soft-card overflow-hidden rounded-xl">
          <div className="relative h-48"><img src={pet.photo} alt={pet.name} className="h-full w-full object-cover" /><div className="absolute bottom-4 left-4"><Pill tone={statusTone(pet.status)}>{statusLabel(pet.status)}</Pill></div><div className="absolute right-4 top-4 rounded-full bg-white/85 p-4 text-xs shadow">QR</div></div>
          <div className="p-5"><h3 className="text-3xl font-black">{pet.name}</h3><p className="mt-1 text-[#3f4f4f]">{pet.species} • {pet.breed}</p><div className="mt-5 grid grid-cols-2 gap-2"><Link href={`/qr/${pet.qrToken}`} className="btn-outline px-4 py-3 text-center text-sm">⌗ View QR</Link><button className="btn-outline px-4 py-3 text-sm">▤ Records</button></div>{!compact ? <div className="mt-5"><QrCodeCard token={pet.qrToken} petName={pet.name} compact /><div className="mt-4"><LostStatusButton initialStatus={pet.status} /></div></div> : <Link href="/lost-pets" className={`mt-3 block rounded-lg px-4 py-3 text-center text-sm font-black ${pet.status === "lost" ? "bg-[#c8191f] text-white" : "border border-[#ffb6b6] text-[#c8191f]"}`}>{pet.status === "lost" ? "⌖ View Sightings" : "Report Lost"}</Link>}</div>
        </article>
      ))}
    </div>
  );
}

function RecentReports() {
  return (
    <section>
      <h2 className="border-b border-[#dbe4ee] pb-3 text-3xl font-black">Activity Feed</h2>
      <div className="mt-6 space-y-5">
        {foundReports.map((report, index) => <div key={report.time + report.petName} className={`soft-card rounded-xl p-5 ${index === 0 ? "border-l-4 border-l-[#d92727]" : ""}`}><p className="font-black">{index === 0 ? "🔴 Scan Alert" : "🛡️ Profile Updated"}: {report.petName}</p><p className="mt-1 text-sm text-[#3f4f4f]">{report.message}</p><p className="mt-3 text-xs font-semibold text-[#6b7776]">{report.time}</p></div>)}
      </div>
    </section>
  );
}