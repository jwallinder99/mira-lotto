"use client";
import { ResultFeedProps } from "../types/types";
import { data } from "../data/data";
import { useState, useEffect } from "react";
import LottoResult from "./LottoResult";

const LottoResults: React.FC<ResultFeedProps> = ({ lottoData }) => {
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
};

export default LottoResults;
