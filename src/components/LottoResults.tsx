"use client";
import { LotteryCompareRequestBody } from "../types/types";

const fetchResults = async () => {
  // const body: LotteryCompareRequestBody = {
  //   user_numbers: [38, 36, 33, 23, 19, 18, 2],
  //   start_date: "2014-01-20",
  //   end_date: "2024-03-23",
  // };
  try {
    const res = await fetch("/lotto/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_numbers: [38, 36, 33, 23, 19, 18, 2],
        start_date: "2014-01-20",
        end_date: "2024-03-23",
      }),
    });
    const data = res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export default function LottoResults() {
  return (
    <div>
      <button onClick={fetchResults} className="border-2 border-white p-3">
        Get Results
      </button>
    </div>
  );
}
