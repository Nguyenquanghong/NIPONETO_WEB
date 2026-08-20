import Link from "next/link";
import { Logo } from "@/components/ui";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f3ea] text-slate-950">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Logo />
        <div className="flex gap-3">
          <Link href="/login" className="rounded-full border border-emerald-200 bg-white px-5 py-3 text-sm font-black text-slate-700">Đăng nhập</Link>
          <Link href="/register" className="rounded-full bg-emerald-600 px-5 py-3 text-sm font-black text-white">Đăng ký</Link>
        </div>
      </header>
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.3em] text-emerald-700">Pet Identity & Lost Pet Finder</p>
          <h1 className="mt-5 text-5xl font-black leading-tight md:text-7xl">Mỗi thú cưng có một mã QR để trở về nhà nhanh hơn</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">NIPPON PET ID giúp chủ nuôi tạo hồ sơ thú cưng, sinh mã QR gắn lên vòng cổ, báo thất lạc và nhận tin báo vị trí khi có người tìm thấy.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/dashboard" className="rounded-full bg-slate-950 px-7 py-4 font-black text-white">Xem demo sản phẩm</Link>
            <Link href="/qr/NPC-KEN-2026" className="rounded-full border border-emerald-200 bg-white px-7 py-4 font-black text-emerald-700">Quét thử QR</Link>
          </div>
        </div>
        <div className="rounded-[2.5rem] border border-emerald-100 bg-white p-6 shadow-2xl shadow-emerald-100">
          <div className="rounded-[2rem] bg-gradient-to-r from-orange-400 to-amber-500 p-6 text-white">
            <div className="text-7xl">🐕</div>
            <p className="mt-4 text-sm font-black uppercase tracking-[0.2em]">Đang thất lạc</p>
            <h2 className="mt-2 text-4xl font-black">Ken</h2>
            <p className="font-bold">Shiba Inu • Vòng cổ xanh • Cầu Giấy</p>
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {[
              "Tạo hồ sơ thú cưng",
              "Sinh QR riêng",
              "Báo trạng thái thất lạc",
              "Người nhặt gửi vị trí",
            ].map((item) => <div key={item} className="rounded-3xl bg-emerald-50 p-5 font-black text-emerald-900">✓ {item}</div>)}
          </div>
        </div>
      </section>
    </main>
  );
}