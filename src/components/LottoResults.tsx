"use client";
import { LotteryCompareRequestBody, LottoResultProps } from "../types/types";
import { data } from "../data/data";
import { useState, useEffect } from "react";
import LottoResult from "./LottoResult";

// const fetchResults = async () => {
//   // const body: LotteryCompareRequestBody = {
//   //   user_numbers: [38, 36, 33, 23, 19, 18, 2],
//   //   start_date: "2014-01-20",
//   //   end_date: "2024-03-23",
//   // };
//   try {
//     const res = await fetch("/lotto/api", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         user_numbers: [38, 36, 33, 23, 19, 18, 2],
//         start_date: "2014-01-20",
//         end_date: "2024-03-23",
//       }),
//     });
//     const data = res.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

export default function LottoResults() {
  const [lottoData, setLottoData] = useState<typeof data>([]);
  useEffect(() => {
    setLottoData(data);
  }, []);

  return (
    <section>
      <div className="flex flex-col gap-4">
        {lottoData &&
          lottoData.map((lotto, index) => (
            <LottoResult
              key={lotto.draw_code}
              draw_code={lotto.draw_code}
              lottery_name={lotto.lottery_name}
              draw_date={lotto.draw_date}
              primary_matches={lotto.primaryMatches}
              secondary_matches={lotto.secondaryMatches}
              currency={lotto.currency}
              prize_amount={lotto.prize_amount}
            />
          ))}
      </div>
    </section>
  );
}
