"use client";
/* eslint-disable @next/next/no-img-element */

import QRCode from "qrcode";
import { useEffect, useMemo, useState } from "react";

function getQrBaseUrl() {
  if (typeof window !== "undefined") {
    return window.location.origin;
  }

  return process.env.NEXT_PUBLIC_APP_URL ?? process.env.APP_URL ?? "http://localhost:3000";
}

export function QrCodeCard({ token, petName, compact = false }: { token: string; petName: string; compact?: boolean }) {
  const [qrImage, setQrImage] = useState("");
  const [copied, setCopied] = useState(false);
  const qrUrl = useMemo(() => `${getQrBaseUrl()}/qr/${token}`, [token]);

  useEffect(() => {
    let mounted = true;

    QRCode.toDataURL(qrUrl, {
      width: compact ? 180 : 260,
      margin: 2,
      errorCorrectionLevel: "H",
      color: {
        dark: "#064e3b",
        light: "#ffffff",
      },
    }).then((dataUrl) => {
      if (mounted) {
        setQrImage(dataUrl);
      }
    });

    return () => {
      mounted = false;
    };
  }, [compact, qrUrl]);

  function downloadQr() {
    if (!qrImage) return;
    const link = document.createElement("a");
    link.href = qrImage;
    link.download = `qr-${petName.toLowerCase().replaceAll(" ", "-")}-${token}.png`;
    link.click();
  }

  async function copyUrl() {
    await navigator.clipboard.writeText(qrUrl);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  function printQr() {
    window.print();
  }

  return (
    <div className="rounded-[2rem] border border-emerald-100 bg-white p-5 text-center shadow-sm print:shadow-none">
      <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-700">QR thật</p>
      <h3 className="mt-1 text-xl font-black text-slate-950">{petName}</h3>
      <div className="mx-auto mt-4 flex w-fit rounded-3xl bg-white p-3 shadow-inner ring-1 ring-slate-100">
        {qrImage ? <img src={qrImage} alt={`Mã QR của ${petName}`} className={compact ? "h-36 w-36" : "h-56 w-56"} /> : <div className={compact ? "h-36 w-36 animate-pulse rounded-2xl bg-slate-100" : "h-56 w-56 animate-pulse rounded-2xl bg-slate-100"} />}
      </div>
      <p className="mt-3 break-all rounded-2xl bg-emerald-50 p-3 font-mono text-xs font-bold text-emerald-900">{qrUrl}</p>
      <div className="mt-4 grid gap-2 sm:grid-cols-3 print:hidden">
        <button onClick={downloadQr} className="rounded-full bg-emerald-600 px-4 py-2 text-xs font-black text-white">Tải PNG</button>
        <button onClick={copyUrl} className="rounded-full bg-slate-100 px-4 py-2 text-xs font-black text-slate-700">{copied ? "Đã copy" : "Copy link"}</button>
        <button onClick={printQr} className="rounded-full bg-slate-950 px-4 py-2 text-xs font-black text-white">In QR</button>
      </div>
    </div>
  );
}

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