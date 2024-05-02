import LottoResults from "@/components/LottoResults";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div>Hello (Mira Lotto in Progress)</div>
      <div>
        <LottoResults />
      </div>
    </main>
  );
}
