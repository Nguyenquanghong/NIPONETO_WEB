import Link from "next/link";
import { Logo } from "@/components/ui";

export default function RegisterPage() {
  return <main className="flex min-h-screen items-center justify-center bg-slate-100 p-6"><section className="w-full max-w-lg rounded-[2rem] bg-white p-8 shadow-xl"><Logo /><h1 className="mt-8 text-3xl font-black">Đăng ký chủ nuôi</h1><div className="mt-6 grid gap-3 md:grid-cols-2"><input className="rounded-2xl border border-slate-200 px-4 py-3 text-sm" placeholder="Họ tên" /><input className="rounded-2xl border border-slate-200 px-4 py-3 text-sm" placeholder="Số điện thoại" /><input className="rounded-2xl border border-slate-200 px-4 py-3 text-sm md:col-span-2" placeholder="Email" /><input className="rounded-2xl border border-slate-200 px-4 py-3 text-sm md:col-span-2" placeholder="Mật khẩu" type="password" /><Link href="/dashboard" className="rounded-full bg-emerald-600 px-5 py-3 text-center font-black text-white md:col-span-2">Tạo tài khoản demo</Link></div></section></main>
}
