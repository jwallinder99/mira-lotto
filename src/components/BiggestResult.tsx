import { LottoResultProps } from "@/types/types";
import React from "react";

const BiggestResult: React.FC<LottoResultProps> = ({
  draw_code,
  lottery_name,
  draw_date,
  primary_matches,
  secondary_matches,
  currency,
  prize_amount,
}) => {
  return (
    <div
      key={draw_code}
      className="mt-4 border-2 border-white p-3 lg:w-4/6 md:w-1/2 sm:w-full mx-auto rounded-sm"
    >
      <div className="flex justify-between">
        <div className="text-xl text-muted-foreground">
          <div>
            <div>Draw Date: {draw_date}</div>
            <div>Primary Matches: {primary_matches}</div>
            <div>Secondary Matches: {secondary_matches}</div>
            <div>Lottery: {lottery_name}</div>
          </div>
        </div>
        <div className="text-3xl font-semibold leading-tight">
          {currency} {prize_amount}
        </div>
      </div>
    </div>
  );
};

export default BiggestResult;
