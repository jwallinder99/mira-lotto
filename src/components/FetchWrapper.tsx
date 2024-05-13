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
	const handleSubmit: HandleSubmitFunction = async (
		nums: string[],
		secondNums: string[],
		startDate,
		endDate
	) => {
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

			const sanitizedNums = nums.filter(Boolean);
			const sanitizedSecondNums = secondNums
				.filter(Boolean)
				.map((num) => Number(num));
			const data = await fetchResults(
				sanitizedNums,
				sanitizedSecondNums,
				startDate,
				endDate
			);

			setLottoData(data);
			toast.dismiss("fetch-begin");
		} catch (error) {
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
