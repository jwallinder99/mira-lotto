"use client";

import { HandleSubmitFunction } from "@/types/types";
import LottoResults from "./LottoResults";
import NumbersInput from "./NumbersInput";
import { fetchResults } from "@/lib/utils";
import { useState } from "react";
import { data as dataType } from "@/data/data";
import { toast } from "sonner";
import LoadingSpinnerSVG from "./LoadingSVGSpinner";

export default function FetchWrapper() {
  const [lottoData, setLottoData] = useState<typeof dataType>([]);
  const handleSubmit: HandleSubmitFunction = async (nums: string[]) => {
    console.log(nums);

    try {
      toast(
        <div className="flex items-center gap-2">
          <LoadingSpinnerSVG />
          <div className="text-lg">Getting results...</div>
        </div>,
        {
          id: "fetch-begin",
        }
      );
      const data = await fetchResults(nums);
      console.log(data);
      setLottoData(data);
      toast.dismiss("fetch-begin");
    } catch (error) {
      console.log(error);
      toast("Error occurred");
    }

    return nums;
  };

  return (
    <div>
      <NumbersInput handleSubmit={handleSubmit} />
      <LottoResults lottoData={lottoData} />
    </div>
  );
}
