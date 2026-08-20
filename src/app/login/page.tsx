import Link from "next/link";
import { Logo } from "@/components/ui";

export default function LoginPage() {
  return <main className="flex min-h-screen items-center justify-center bg-[#f7f3ea] p-6"><section className="w-full max-w-md rounded-[2rem] bg-white p-8 shadow-xl shadow-emerald-100"><Logo /><h1 className="mt-8 text-3xl font-black">Đăng nhập</h1><p className="mt-2 text-sm text-slate-500">Truy cập hồ sơ thú cưng và quản lý QR định danh.</p><div className="mt-6 space-y-3"><input className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm" placeholder="Email hoặc số điện thoại" /><input className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm" placeholder="Mật khẩu" type="password" /><Link href="/dashboard" className="block rounded-full bg-emerald-600 px-5 py-3 text-center font-black text-white">Đăng nhập demo</Link><Link href="/register" className="block text-center text-sm font-bold text-emerald-700">Tạo tài khoản mới</Link></div></section></main>
}
