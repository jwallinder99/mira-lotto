"use client";
import { ResultFeedProps } from "../types/types";

import { useState, useEffect } from "react";
import LottoResult from "./LottoResult";
import BiggestResult from "./BiggestResult";

const LottoResults: React.FC<ResultFeedProps> = ({ lottoData }) => {
  // Separate the first element from the rest of the list
  const [firstLotto, ...restLottos] = lottoData;
  return (
    <section>
      <div>
        <div>
          {firstLotto && (
            <BiggestResult
              key={firstLotto.draw_code}
              draw_code={firstLotto.draw_code}
              lottery_name={firstLotto.lottery_name}
              draw_date={firstLotto.draw_date}
              primary_matches={firstLotto.primaryMatches}
              secondary_matches={firstLotto.secondaryMatches}
              currency={firstLotto.currency}
              prize_amount={firstLotto.prize_amount}
            />
          )}
        </div>
        <div className="flex flex-col w-2/3 mx-auto items-center justify-center">
          {restLottos &&
            restLottos.map((lotto, index) => (
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
      </div>
    </section>
  );
};

export default LottoResults;
