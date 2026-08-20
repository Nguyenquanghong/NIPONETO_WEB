"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui";
import { navItems } from "@/data/mock";

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <main className="min-h-screen bg-[#f7f3ea]">
      <header className="sticky top-0 z-30 border-b border-emerald-100 bg-white/90 px-4 py-3 backdrop-blur lg:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <Logo />
          <nav className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link key={item.href} href={item.href} className={`rounded-full px-4 py-2 text-sm font-black transition ${active ? "bg-emerald-600 text-white" : "text-slate-600 hover:bg-emerald-50 hover:text-emerald-700"}`}>
                  {item.icon} {item.label}
                </Link>
              );
            })}
          </nav>
          <Link href="/pets" className="rounded-full bg-slate-950 px-4 py-2 text-sm font-black text-white">+ Thêm pet</Link>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-6 lg:px-6">
        <div className="mb-5 flex gap-2 overflow-x-auto pb-2 lg:hidden">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link key={item.href} href={item.href} className={`shrink-0 rounded-full px-4 py-2 text-sm font-black ${active ? "bg-emerald-600 text-white" : "bg-white text-slate-600"}`}>
                {item.icon} {item.label}
              </Link>
            );
          })}
        </div>
        <div className="space-y-6">{children}</div>
      </section>
    </main>
  );
}