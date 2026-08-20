"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui";
import { navItems } from "@/data/mock";

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <main className="min-h-screen bg-[#f6f8fd] text-[#102033]">
      <header className="sticky top-0 z-30 border-b border-[#e1e7ee] bg-white/95 px-4 py-4 backdrop-blur lg:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <Logo />
          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link key={item.href} href={item.href} className={`border-b-2 py-1 text-sm font-black tracking-wide transition ${active ? "border-[#00796b] text-[#00796b]" : "border-transparent text-[#3f4f4f] hover:text-[#00796b]"}`}>
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="hidden items-center gap-4 text-2xl text-[#314241] sm:flex"><span>♧</span><span>◎</span></div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-8 lg:px-10">
        <div className="fixed inset-x-0 bottom-0 z-40 flex justify-around border-t border-[#dce5ee] bg-white/95 px-3 py-2 shadow-2xl backdrop-blur lg:hidden">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link key={item.href} href={item.href} className={`flex min-w-16 flex-col items-center rounded-xl px-3 py-2 text-xs font-black ${active ? "bg-[#00796b] text-white" : "text-[#3f4f4f]"}`}>
                <span className="text-lg leading-none">{item.icon}</span><span>{item.label.split(" ")[0]}</span>
              </Link>
            );
          })}
        </div>
        <div className="space-y-8 pb-24 lg:pb-0">{children}</div>
      </section>
    </main>
  );
}