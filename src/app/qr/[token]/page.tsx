/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { FoundReportForm, QrCodeCard } from "@/components/pet-interactions";
import { owner, pets } from "@/data/mock";

export default async function QrPublicPage(props: PageProps<"/qr/[token]">) {
  const { token } = await props.params;
  const pet = pets.find((item) => item.qrToken === token) ?? pets[0];
  const lost = pet.status === "lost";

  return (
    <main className="min-h-screen bg-[#f6f8fd] px-5 py-4 text-[#102033]">
      <section className="mx-auto max-w-md pb-24">
        <div className="mb-5 flex items-center gap-4 text-2xl font-black"><Link href="/">←</Link><h1>Report Found Pet</h1></div>
        {lost ? <div className="mb-8 rounded-lg border border-[#ffaaa6] bg-[#ffd9d9] p-4 text-[#c8191f]"><p className="font-black uppercase tracking-wider">⚠ Urgent: Pet marked as lost</p><p className="mt-2 text-sm leading-6">This pet was recently reported lost by their owner. If you have found them, please use the actions below immediately.</p></div> : null}
        <article className="soft-card overflow-hidden rounded-xl">
          <div className="relative h-80"><img src={pet.photo} alt={pet.name} className="h-full w-full object-cover" />{lost ? <div className="absolute right-4 top-4"><span className="rounded-full bg-[#ffd9d9] px-4 py-2 text-sm font-black text-[#c8191f]">● LOST</span></div> : null}</div>
          <div className="p-8"><h2 className="text-2xl font-medium">{pet.name}</h2><p className="mt-2 text-lg text-[#3f4f4f]">{pet.breed} • {pet.gender}</p><hr className="my-5 border-[#e2e8f0]" /><h3 className="text-sm font-black uppercase tracking-wider text-[#3f4f4f]">Important Characteristics</h3><div className="mt-4 space-y-4 text-lg"><p>🐾 {pet.identifyingMarks}</p><p>♙ {pet.healthNote}</p><p>⌖ Last seen: {pet.lastSeenArea}</p></div></div>
        </article>
        <div className="mt-8 space-y-4"><button className="btn-primary w-full px-5 py-4">🤝 I Found This Pet</button><a href={`tel:${owner.phone.replaceAll(" ", "")}`} className="btn-outline block px-5 py-4 text-center">✉ Contact Owner</a><button className="btn-outline w-full px-5 py-4">⌖ Send Location</button></div>
        <div className="mt-8"><QrCodeCard token={pet.qrToken} petName={pet.name} /></div>
        <div className="mt-8 soft-card rounded-xl p-5"><h2 className="mb-4 text-xl font-black">Report a Found Pet</h2><FoundReportForm /></div>
      </section>
    </main>
  );
}