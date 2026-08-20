import Link from "next/link";
import { Logo } from "@/components/ui";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="rounded-3xl bg-white p-3"><Logo /></div>
        <div className="flex gap-3">
          <Link href="/login" className="rounded-full border border-white/20 px-5 py-3 text-sm font-black">Đăng nhập</Link>
          <Link href="/dashboard" className="rounded-full bg-emerald-500 px-5 py-3 text-sm font-black text-slate-950">Vào Dashboard</Link>
        </div>
      </header>
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.3em] text-emerald-300">NIPPON PET CARE 2026</p>
          <h1 className="mt-5 text-5xl font-black leading-tight md:text-7xl">Hệ thống chăm sóc thú cưng All-in-One</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">Quản lý microchip, QR định danh, hồ sơ y tế, lịch khám, spa/grooming, chat bác sĩ và cộng đồng thú cưng trong một dashboard chuẩn SaaS/Medical.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/dashboard" className="rounded-full bg-emerald-500 px-7 py-4 font-black text-slate-950">Xem prototype frontend</Link>
            <Link href="/qr/NPC-MOCHI-2026" className="rounded-full border border-white/20 px-7 py-4 font-black">Demo QR public</Link>
          </div>
        </div>
        <div className="rounded-[2.5rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
          {[
            "Microchip ISO 15 số + QR công khai/bảo mật",
            "Sổ bệnh án điện tử + lịch tiêm/tái khám",
            "Chatbot 24/7 + chuyển bác sĩ trực tuyến",
            "Cộng đồng, marketplace, lost pet GPS, review map",
          ].map((item) => <div key={item} className="mb-3 rounded-3xl bg-white/10 p-5 font-bold text-slate-100">✓ {item}</div>)}
        </div>
      </section>
    </main>
  );
}
