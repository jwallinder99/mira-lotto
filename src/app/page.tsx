import FetchWrapper from "@/components/FetchWrapper";
import LottoResults from "@/components/LottoResults";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="flex flex-col">
        <FetchWrapper />
      </div>
    </main>
  );
}
