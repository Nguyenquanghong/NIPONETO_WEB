"use client";

import { useState } from "react";

export function LostStatusButton({ initialStatus }: { initialStatus: string }) {
  const [status, setStatus] = useState(initialStatus);
  const lost = status === "lost";

  return (
    <div className="space-y-3">
      <button
        onClick={() => setStatus(lost ? "safe" : "lost")}
        className={`w-full rounded-full px-5 py-3 text-sm font-black text-white transition ${lost ? "bg-emerald-600 hover:bg-emerald-700" : "bg-rose-600 hover:bg-rose-700"}`}
      >
        {lost ? "Đánh dấu đã về nhà" : "Báo thất lạc"}
      </button>
      <p className={`rounded-2xl p-3 text-center text-xs font-bold ${lost ? "bg-rose-50 text-rose-700" : "bg-emerald-50 text-emerald-700"}`}>
        Trạng thái demo hiện tại: {lost ? "Đang thất lạc" : "An toàn"}
      </p>
    </div>
  );
}

export function AddPetDemoForm() {
  const [created, setCreated] = useState(false);

  return (
    <form
      className="grid gap-3 md:grid-cols-2"
      onSubmit={(event) => {
        event.preventDefault();
        setCreated(true);
      }}
    >
      <input className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-emerald-100" placeholder="Tên thú cưng" defaultValue="Bông" />
      <input className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-emerald-100" placeholder="Loài / giống" defaultValue="Chó Poodle" />
      <input className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-emerald-100" placeholder="Tuổi / cân nặng" defaultValue="1 tuổi • 3.2kg" />
      <input className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-emerald-100" placeholder="Màu lông" defaultValue="Nâu sáng" />
      <textarea className="min-h-24 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-emerald-100 md:col-span-2" placeholder="Đặc điểm nhận dạng / lưu ý sức khỏe" defaultValue="Đeo vòng cổ đỏ, hơi nhát người lạ." />
      <button className="rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white md:w-fit">Tạo hồ sơ demo</button>
      {created ? <div className="rounded-2xl bg-emerald-50 p-4 text-sm font-bold text-emerald-800 md:col-span-2">Đã tạo hồ sơ demo và sinh QR token: NPC-BONG-DEMO. Ở bản backend, dữ liệu này sẽ lưu vào database.</div> : null}
    </form>
  );
}

export function FoundReportForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="rounded-3xl bg-emerald-50 p-5 text-center">
        <p className="text-lg font-black text-emerald-800">Đã gửi tin báo cho chủ nuôi</p>
        <p className="mt-1 text-sm font-semibold text-emerald-700">Cảm ơn bạn đã giúp bé có cơ hội trở về nhà nhanh hơn.</p>
      </div>
    );
  }

  return (
    <form
      className="space-y-3"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <input className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-emerald-100" placeholder="Tên của bạn, không bắt buộc" />
      <input className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-emerald-100" placeholder="Số điện thoại liên hệ" />
      <input className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-emerald-100" placeholder="Vị trí nhìn thấy / tìm thấy" defaultValue="Gần công viên Nghĩa Đô" />
      <textarea className="min-h-24 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-emerald-100" placeholder="Tin nhắn cho chủ nuôi" />
      <button className="w-full rounded-full bg-emerald-600 px-5 py-4 font-black text-white shadow-lg shadow-emerald-100 transition hover:bg-emerald-700">Gửi vị trí tìm thấy</button>
    </form>
  );
}