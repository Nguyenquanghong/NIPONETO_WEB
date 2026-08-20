import Link from "next/link";
import { FoundReportForm } from "@/components/pet-interactions";
import { owner, pets } from "@/data/mock";

export default async function QrPublicPage(props: PageProps<"/qr/[token]">) {
  const { token } = await props.params;
  const pet = pets.find((item) => item.qrToken === token) ?? pets[0];
  const lost = pet.status === "lost";

  return (
    <main className="min-h-screen bg-[#f7f3ea] p-6">
      <section className="mx-auto max-w-3xl overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-emerald-100">
        <div className={`bg-gradient-to-r ${pet.gradient} p-8 text-white`}>
          <p className="text-sm font-black uppercase tracking-[0.25em]">QR Public Pet ID</p>
          <div className="mt-5 flex items-center gap-5">
            <div className="text-7xl">{pet.image}</div>
            <div>
              <h1 className="text-5xl font-black">{pet.name}</h1>
              <p className="mt-2 font-bold">{pet.species} • {pet.breed} • {pet.age}</p>
            </div>
          </div>
        </div>
        <div className="space-y-5 p-8">
          <div className={`rounded-3xl p-5 ${lost ? "bg-rose-50" : "bg-emerald-50"}`}>
            <p className={`text-sm font-black ${lost ? "text-rose-700" : "text-emerald-700"}`}>Trạng thái</p>
            <p className={`mt-1 text-xl font-black ${lost ? "text-rose-950" : "text-emerald-950"}`}>{lost ? "Đang được báo thất lạc" : "An toàn"}</p>
            {lost ? <p className="mt-2 text-sm font-semibold text-rose-700">Khu vực nhìn thấy gần nhất: {pet.lastSeenArea}</p> : null}
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Info label="Đặc điểm nhận dạng" value={pet.identifyingMarks} />
            <Info label="Lưu ý sức khỏe" value={pet.healthNote} />
            <Info label="Microchip" value={pet.microchip} />
            <Info label="Khu vực chủ nuôi" value={owner.area} />
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            <a href={`tel:${owner.phone.replaceAll(" ", "")}`} className="rounded-full bg-slate-950 px-5 py-4 text-center font-black text-white">Gọi chủ nuôi</a>
            <Link href="/lost-pets" className="rounded-full bg-emerald-600 px-5 py-4 text-center font-black text-white">Xem trang thất lạc</Link>
          </div>
          <div className="rounded-[2rem] bg-slate-50 p-5">
            <h2 className="text-xl font-black">Báo vị trí đã tìm thấy</h2>
            <p className="mt-1 text-sm text-slate-500">Thông tin bạn gửi sẽ được chuyển tới chủ nuôi. Đây là form demo frontend.</p>
            <div className="mt-4"><FoundReportForm /></div>
          </div>
          <Link href="/login" className="block text-center text-sm font-bold text-emerald-700">Chủ sở hữu đăng nhập để quản lý hồ sơ</Link>
        </div>
      </section>
    </main>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return <div className="rounded-3xl bg-slate-50 p-5"><p className="text-sm font-bold text-slate-500">{label}</p><p className="mt-2 font-black text-slate-950">{value}</p></div>;
}