"use client";

import { HandleSubmitFunction } from "@/types/types";
import LottoResults from "./LottoResults";
import NumbersInput from "./NumbersInput";
import { fetchResults } from "@/lib/utils";
import { useState } from "react";
import { data as dataType } from "@/data/data";

export default function FetchWrapper() {
  const [lottoData, setLottoData] = useState<typeof dataType>([]);
  const handleSubmit: HandleSubmitFunction = async (nums: string[]) => {
    console.log(nums);
    const data = await fetchResults(nums);
    console.log(data);
    setLottoData(data);
    return nums;
  };

  return (
    <div>
      <NumbersInput handleSubmit={handleSubmit} />
      <LottoResults lottoData={lottoData} />
    </div>
  );
}
