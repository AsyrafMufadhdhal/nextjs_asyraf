import ItemCard from "@/components/card";
import { regions } from "@/assets/data";
import Image from "next/image";

export default function Home() {
  const LINK_ADDRESS = "https://symbolsofindonesia.vercel.app";
  return (
    <main className="p-24 min-h-screen bg-[#3C0A0A]">
      <div className="w-full p-4 rounded-xl text-center mb-16 bg-white shadow-xl shadow-[#260606]">
        <h1 className="text-[#181717] font-extrabold text-xl tracking-widest">DAFTAR KABUPATEN/KOTA PADA PROVINSI SUMATERA BARAT</h1>
      </div>
      <div className="grid lg:grid-cols-4 md:auto-cols-max gap-5 mb-16">
        {regions.map((region, index) => {
          return <ItemCard key={index} name={region.title} imgLambang={LINK_ADDRESS + region.url}></ItemCard>;
        })}
      </div>
      <div className="shadow-inner shadow-[#1a0d0d] bg-[#290e0e] rounded-lg py-3 px-5">
        <div className="flex justify-between text-[#782424] font-medium">
          <p>Develop by Muhammad Asyraf Mufadhdhal</p>
          <p>TALENTHUB BATCH 13 - NEXT JS</p>
        </div>
      </div>
    </main>
  );
}

// #181717 - hitam
// #BF9000 = kuning
// #3C0A0A - merah
