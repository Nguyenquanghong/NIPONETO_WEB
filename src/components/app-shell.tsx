"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/mock";
import { Logo } from "@/components/ui";

export function AppHeader() {
  return (
    <header className="fixed left-0 right-0 top-0 z-30 border-b border-slate-200 bg-white/90 px-4 py-3 backdrop-blur lg:px-6">
      <div className="flex items-center justify-between gap-4">
        <Logo />
        <div className="hidden flex-1 justify-center md:flex">
          <input aria-label="Tìm kiếm nhanh" className="w-full max-w-xl rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm outline-none transition focus:border-emerald-400 focus:bg-white focus:ring-4 focus:ring-emerald-100" placeholder="Tìm pet, mã microchip, lịch khám, bệnh án..." />
        </div>
        <div className="flex items-center gap-2">
          <Link href="/admin" className="hidden rounded-full border border-slate-200 px-3 py-2 text-sm font-bold text-slate-700 md:block">Admin</Link>
          <Link href="/doctor" className="hidden rounded-full border border-slate-200 px-3 py-2 text-sm font-bold text-slate-700 md:block">Doctor</Link>
          <button className="rounded-full border border-slate-200 px-3 py-2 text-sm font-bold text-slate-700">VI</button>
          <Link href="/profile" className="rounded-full bg-slate-950 px-4 py-2 text-sm font-bold text-white">Chủ nuôi</Link>
        </div>
      </div>
    </header>
  );
}

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed bottom-0 left-0 top-[69px] z-20 hidden w-72 border-r border-slate-200 bg-white p-4 lg:block">
      <nav className="space-y-1 overflow-y-auto pb-4">
        {navItems.map((item) => {
          const active = pathname === item.href;

          return (
          <Link key={item.href} href={item.href} className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-bold transition ${active ? "bg-emerald-600 text-white shadow-lg shadow-emerald-200" : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"}`}>
            <span className="text-lg">{item.icon}</span>
            {item.label}
          </Link>
        );})}
      </nav>
    </aside>
  );
}

export function FloatingChatbox() {
  return (
    <div className="fixed bottom-5 right-5 z-40 w-[min(360px,calc(100vw-2rem))] overflow-hidden rounded-[1.75rem] border border-emerald-200 bg-white shadow-2xl shadow-slate-300">
      <div className="bg-emerald-600 p-4 text-white">
        <p className="text-sm font-black">Trợ lý & Bác sĩ trực tuyến</p>
        <p className="text-xs text-emerald-50">AI Bot 24/7 • Chuyển bác sĩ khi khẩn cấp</p>
      </div>
      <div className="space-y-3 p-4">
        <div className="rounded-2xl bg-slate-100 p-3 text-sm text-slate-700">Xin chào! Bạn cần đặt lịch khám, hỏi triệu chứng hay tìm thú cưng thất lạc?</div>
        <Link href="/chat" className="block w-full rounded-full bg-slate-950 px-4 py-3 text-center text-sm font-black text-white">Bắt đầu tư vấn</Link>
      </div>
    </div>
  );
}

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-slate-100">
      <AppHeader />
      <AppSidebar />
      <section className="px-4 pb-28 pt-24 lg:ml-72 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-6">{children}</div>
      </section>
      <FloatingChatbox />
    </main>
  );
}