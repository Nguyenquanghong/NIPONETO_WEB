import Link from "next/link";
import { Logo } from "@/components/ui";

export default function RegisterPage() {
  return <main className="flex min-h-screen items-center justify-center bg-[#f6f8fd] p-6"><section className="soft-card w-full max-w-lg rounded-xl p-8"><Logo /><h1 className="mt-8 text-3xl font-black">Đăng ký chủ nuôi</h1><p className="mt-2 text-sm text-[#3f4f4f]">Tạo tài khoản để lưu thông tin liên hệ và hồ sơ thú cưng.</p><div className="mt-6 grid gap-3 md:grid-cols-2"><input className="field" placeholder="Họ tên" /><input className="field" placeholder="Số điện thoại" /><input className="field md:col-span-2" placeholder="Email" /><input className="field md:col-span-2" placeholder="Mật khẩu" type="password" /><Link href="/dashboard" className="btn-primary px-5 py-3 text-center md:col-span-2">Tạo tài khoản demo</Link></div></section></main>
}
