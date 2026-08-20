import Link from "next/link";
import { Logo } from "@/components/ui";

export default function LoginPage() {
  return <main className="flex min-h-screen items-center justify-center bg-[#f6f8fd] p-6"><section className="soft-card w-full max-w-md rounded-xl p-8"><Logo /><h1 className="mt-8 text-3xl font-black">Đăng nhập</h1><p className="mt-2 text-sm text-[#3f4f4f]">Truy cập hồ sơ thú cưng và quản lý QR định danh.</p><div className="mt-6 space-y-3"><input className="field" placeholder="Email hoặc số điện thoại" /><input className="field" placeholder="Mật khẩu" type="password" /><Link href="/dashboard" className="btn-primary block px-5 py-3 text-center">Đăng nhập demo</Link><Link href="/register" className="block text-center text-sm font-bold text-[#00796b]">Tạo tài khoản mới</Link></div></section></main>
}
