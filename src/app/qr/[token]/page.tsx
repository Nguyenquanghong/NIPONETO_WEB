import Link from "next/link";
import { FoundPetButton } from "@/components/demo-interactions";
import { pets } from "@/data/mock";

export default async function QrPublicPage(props: PageProps<'/qr/[token]'>) {
  const { token } = await props.params;
  const pet = pets.find((item) => item.qrToken === token) ?? pets[0];

  return (
    <main className="min-h-screen bg-emerald-50 p-6">
      <section className="mx-auto max-w-2xl overflow-hidden rounded-[2rem] bg-white shadow-xl">
        <div className={`bg-gradient-to-r ${pet.color} p-8 text-white`}>
          <p className="text-sm font-black uppercase tracking-[0.25em]">QR Public Profile</p>
          <h1 className="mt-3 text-5xl font-black">{pet.name}</h1>
          <p className="mt-2 font-bold">{pet.species} • {pet.breed} • {pet.age}</p>
        </div>
        <div className="space-y-5 p-8">
          <div className="rounded-3xl bg-rose-50 p-5">
            <p className="text-sm font-black text-rose-700">Cảnh báo y tế</p>
            <p className="mt-1 font-bold text-rose-950">{pet.alert}</p>
          </div>
          <div className="rounded-3xl bg-slate-50 p-5">
            <p className="text-sm text-slate-500">Microchip ISO</p>
            <p className="font-mono text-xl font-black">{pet.microchip}</p>
          </div>
          <FoundPetButton />
          <Link href="/login" className="block text-center text-sm font-bold text-emerald-700">
            Chủ sở hữu/Bác sĩ đăng nhập để xem hồ sơ bảo mật
          </Link>
        </div>
      </section>
    </main>
  );
}
