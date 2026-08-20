import Link from "next/link";
import { Logo } from "@/components/ui";

export default function RegisterPage() {
  return <main className="flex min-h-screen items-center justify-center bg-[#f7f3ea] p-6"><section className="w-full max-w-lg rounded-[2rem] bg-white p-8 shadow-xl shadow-emerald-100"><Logo /><h1 className="mt-8 text-3xl font-black">Đăng ký chủ nuôi</h1><p className="mt-2 text-sm text-slate-500">Tạo tài khoản để lưu thông tin liên hệ và hồ sơ thú cưng.</p><div className="mt-6 grid gap-3 md:grid-cols-2"><input className="rounded-2xl border border-slate-200 px-4 py-3 text-sm" placeholder="Họ tên" /><input className="rounded-2xl border border-slate-200 px-4 py-3 text-sm" placeholder="Số điện thoại" /><input className="rounded-2xl border border-slate-200 px-4 py-3 text-sm md:col-span-2" placeholder="Email" /><input className="rounded-2xl border border-slate-200 px-4 py-3 text-sm md:col-span-2" placeholder="Mật khẩu" type="password" /><Link href="/dashboard" className="rounded-full bg-emerald-600 px-5 py-3 text-center font-black text-white md:col-span-2">Tạo tài khoản demo</Link></div></section></main>
}
