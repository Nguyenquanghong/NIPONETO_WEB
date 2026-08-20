"use client";

import { useState } from "react";
import { pets } from "@/data/mock";

const chatAnswers: Record<string, string> = {
  "Lịch làm việc": "Bệnh viện mở cửa 08:00 - 20:00 hằng ngày. Ca cấp cứu có thể liên hệ 24/7 qua hotline demo.",
  "Giá dịch vụ": "Khám tổng quát từ 150.000đ, tiêm phòng từ 250.000đ, grooming từ 180.000đ tùy cân nặng và dịch vụ.",
  "Triệu chứng cơ bản": "Nếu thú cưng bỏ ăn trên 24h, nôn nhiều, tiêu chảy ra máu hoặc khó thở, bạn nên đặt lịch khám khẩn cấp ngay.",
  "Kết nối bác sĩ": "Đã tạo yêu cầu kết nối BS. Minh. Thời gian phản hồi dự kiến trong bản demo là 3 phút.",
};

export function AppointmentDemoForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="grid gap-3 md:grid-cols-2"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <select className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:ring-4 focus:ring-emerald-100" defaultValue="Mochi">
        {pets.map((pet) => <option key={pet.id}>{pet.name}</option>)}
      </select>
      <select className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:ring-4 focus:ring-emerald-100" defaultValue="Khám tổng quát">
        <option>Khám tổng quát</option>
        <option>Tiêm phòng</option>
        <option>Tẩy giun</option>
        <option>Spa & Grooming</option>
        <option>Tư vấn da liễu</option>
      </select>
      <input type="date" className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:ring-4 focus:ring-emerald-100" defaultValue="2026-08-25" />
      <select className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:ring-4 focus:ring-emerald-100" defaultValue="09:30">
        <option>09:30</option>
        <option>11:00</option>
        <option>14:30</option>
        <option>16:00</option>
      </select>
      <textarea className="min-h-28 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-emerald-100 md:col-span-2" placeholder="Mô tả triệu chứng hoặc yêu cầu dịch vụ" defaultValue="Mochi cần tiêm nhắc vaccine dại và kiểm tra dị ứng Penicillin." />
      <button className="rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white md:w-fit">Đặt lịch demo</button>
      {submitted ? (
        <div className="rounded-2xl bg-emerald-50 p-4 text-sm font-bold text-emerald-800 md:col-span-2">
          Đặt lịch thành công! Bệnh viện sẽ xác nhận trong 15 phút. Lịch này là dữ liệu giả lập cho bản demo.
        </div>
      ) : null}
    </form>
  );
}

export function ChatDemo() {
  const [answer, setAnswer] = useState("Bot: Bạn hãy chọn một chủ đề bên trái hoặc nhập mô tả triệu chứng của thú cưng.");
  const topics = Object.keys(chatAnswers);

  return (
    <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
      <div className="space-y-3">
        {topics.map((topic) => (
          <button key={topic} onClick={() => setAnswer(`Bot: ${chatAnswers[topic]}`)} className="block w-full rounded-2xl bg-slate-100 p-4 text-left font-bold transition hover:bg-emerald-50 hover:text-emerald-700">
            {topic}
          </button>
        ))}
      </div>
      <div className="rounded-3xl bg-slate-50 p-5">
        <div className="space-y-3">
          <div className="w-fit max-w-[85%] rounded-2xl bg-white p-4 text-sm text-slate-700 shadow-sm">{answer}</div>
          <div className="ml-auto w-fit max-w-[85%] rounded-2xl bg-emerald-600 p-4 text-sm font-semibold text-white">Demo user: Tôi muốn được tư vấn nhanh cho Mochi.</div>
        </div>
        <input className="mt-4 w-full rounded-full border border-slate-200 px-5 py-3 text-sm outline-none focus:ring-4 focus:ring-emerald-100" placeholder="Nhập tin nhắn demo..." onKeyDown={(event) => {
          if (event.key === "Enter") {
            setAnswer("Bot: Cảm ơn bạn. Mình đã ghi nhận mô tả và gợi ý đặt lịch khám để bác sĩ kiểm tra trực tiếp.");
          }
        }} />
      </div>
    </div>
  );
}

export function FoundPetButton() {
  const [reported, setReported] = useState(false);

  return reported ? (
    <div className="rounded-3xl bg-emerald-50 p-5 text-center">
      <p className="text-lg font-black text-emerald-800">Đã gửi thông báo tới chủ nuôi!</p>
      <p className="mt-1 text-sm font-semibold text-emerald-700">Bệnh viện cũng đã nhận được vị trí liên hệ giả lập trong bản demo.</p>
    </div>
  ) : (
    <button onClick={() => setReported(true)} className="w-full rounded-full bg-emerald-600 px-5 py-4 font-black text-white shadow-lg shadow-emerald-100 transition hover:bg-emerald-700">
      Báo tôi đã tìm thấy thú cưng này
    </button>
  );
}