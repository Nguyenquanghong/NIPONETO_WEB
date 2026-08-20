import Link from "next/link";

export function Logo() {
  return (
    <Link href="/dashboard" className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-600 text-xl font-black text-white shadow-lg shadow-emerald-100">
        🐾
      </div>
      <div>
        <p className="text-lg font-black tracking-tight text-slate-950">NIPPON PET ID</p>
        <p className="text-xs font-medium text-emerald-700">QR định danh giúp thú cưng trở về nhà</p>
      </div>
    </Link>
  );
}

export function PageHeader({ eyebrow, title, description, action }: { eyebrow?: string; title: string; description?: string; action?: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4 rounded-[2rem] bg-gradient-to-r from-emerald-700 via-teal-600 to-lime-500 p-7 text-white shadow-xl shadow-emerald-100 md:flex-row md:items-end md:justify-between">
      <div>
        {eyebrow ? <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-100">{eyebrow}</p> : null}
        <h1 className="mt-2 text-3xl font-black leading-tight md:text-4xl">{title}</h1>
        {description ? <p className="mt-3 max-w-3xl text-sm leading-6 text-emerald-50 md:text-base">{description}</p> : null}
      </div>
      {action}
    </div>
  );
}

export function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <section className={`rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm ${className}`}>{children}</section>;
}

export function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div>
      <h2 className="text-xl font-black text-slate-950">{title}</h2>
      {subtitle ? <p className="mt-1 text-sm font-medium text-slate-500">{subtitle}</p> : null}
    </div>
  );
}

export function Pill({ children, tone = "emerald" }: { children: React.ReactNode; tone?: "emerald" | "amber" | "slate" | "rose" | "cyan" }) {
  const tones = {
    emerald: "bg-emerald-50 text-emerald-700",
    amber: "bg-amber-50 text-amber-700",
    slate: "bg-slate-100 text-slate-700",
    rose: "bg-rose-50 text-rose-700",
    cyan: "bg-cyan-50 text-cyan-700",
  };
  return <span className={`rounded-full px-3 py-1 text-xs font-black ${tones[tone]}`}>{children}</span>;
}

export function StatCard({ title, value, desc, icon }: { title: string; value: string; desc?: string; icon?: string }) {
  return (
    <Card className="p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-bold text-slate-500">{title}</p>
          <p className="mt-2 text-3xl font-black text-slate-950">{value}</p>
          {desc ? <p className="mt-1 text-sm text-slate-500">{desc}</p> : null}
        </div>
        {icon ? <div className="rounded-2xl bg-emerald-50 p-3 text-xl">{icon}</div> : null}
      </div>
    </Card>
  );
}

export function EmptyFormMock({ cta = "Lưu thông tin" }: { cta?: string }) {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      <input className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-emerald-100" placeholder="Tên / tiêu đề" />
      <input className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-emerald-100" placeholder="Phân loại / trạng thái" />
      <textarea className="min-h-28 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-emerald-100 md:col-span-2" placeholder="Ghi chú chi tiết" />
      <button className="rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white md:w-fit">{cta}</button>
    </div>
  );
}