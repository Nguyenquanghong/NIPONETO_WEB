/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Logo } from "@/components/ui";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f8fd] text-[#102033]">
      <header className="border-b border-[#e1e7ee] bg-white px-6 py-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Logo />
          <nav className="hidden items-center gap-9 text-sm font-black tracking-wide text-[#3f4f4f] md:flex"><a href="#how">How it Works</a><a href="#benefits">Benefits</a><Link href="/lost-pets">Lost Pets</Link></nav>
          <div className="flex items-center gap-4 text-2xl text-[#314241]"><span>♧</span><Link href="/login">◎</Link></div>
        </div>
      </header>

      <section className="bg-gradient-to-br from-white via-[#f6f8fd] to-[#e8f9fb]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <h1 className="text-5xl font-black leading-tight md:text-6xl">Protect Your Pet.<br /><span className="text-[#00796b]">Find Them Faster.</span></h1>
            <p className="mt-8 max-w-xl text-xl leading-8 text-[#3f4f4f]">Secure your peace of mind with modern, scannable pet identification tags. Connect your furry friend to a safety network in minutes.</p>
            <div className="mt-10 flex flex-wrap gap-4"><Link href="/register" className="btn-primary px-8 py-4">Register Your Pet →</Link><Link href="/lost-pets" className="btn-outline px-8 py-4">⌕ Find a Lost Pet</Link></div>
          </div>
          <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-[#102033]/15"><img src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1200&q=80" alt="Dog wearing QR tag" className="h-[500px] w-full object-cover" /><div className="absolute inset-x-8 bottom-8 flex items-center gap-4 rounded-xl bg-white/95 p-4 shadow-xl"><div className="rounded-full bg-[#64b5f6] p-4 text-2xl">⌗</div><div><p className="font-black">Scanned securely</p><p className="text-sm text-[#3f4f4f]">Just now in Central Park</p></div></div></div>
        </div>
      </section>

      <section id="how" className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center"><h2 className="text-4xl font-black">How NIPPON PET ID Works</h2><p className="mt-4 text-lg text-[#3f4f4f]">A seamless, modern approach to pet identification.</p></div>
        <div className="mt-16 grid gap-6 md:grid-cols-2"><div className="soft-card rounded-xl p-8"><span className="rounded-lg bg-[#009688] px-5 py-3 text-2xl font-black text-white">1</span><h3 className="mt-8 text-3xl font-black">Create a Profile</h3><p className="mt-3 text-lg leading-8 text-[#3f4f4f]">Build a comprehensive digital identity for your pet, including medical needs, temperament, and vital contact details.</p></div><div className="rounded-xl bg-[#00796b] p-8 text-white shadow-xl"><span className="rounded-lg bg-white px-5 py-3 text-2xl font-black text-[#00796b]">2</span><h3 className="mt-8 text-3xl font-black">Receive Your Tag</h3><p className="mt-3 text-lg leading-8 text-white/90">Get a durable, scannable smart tag linked securely to their online profile.</p></div></div>
      </section>

      <footer className="border-t border-[#dbe4ee] bg-[#edf4ff] px-6 py-10"><div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between"><Logo /><div className="flex flex-wrap gap-8 text-sm font-black text-[#3f4f4f]"><span>Support</span><span>Privacy Policy</span><span>Terms of Service</span><span>Contact Us</span></div><p className="text-sm text-[#3f4f4f]">© 2026 NIPPON PET ID. Safety for every pet.</p></div></footer>
    </main>
  );
}