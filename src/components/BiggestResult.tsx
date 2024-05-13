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
			className="mt-4 p-3 lg:w-4/6 md:w-1/2 sm:w-full mx-auto rounded-sm mb-5 bg-card shadow-sm"
		>
			<div className="flex justify-between ">
				<div className="text-xl text-muted-foreground">
					<div>
						<div>
							Draw Date: <span className="text-foreground">{draw_date}</span>
						</div>
						<div>
							Primary Matches:{" "}
							<span className="text-foreground">{primary_matches}</span>
						</div>
						<div>
							Secondary Matches:{" "}
							<span className="text-foreground">{secondary_matches}</span>
						</div>
						<div>
							Lottery: <span className="text-foreground">{lottery_name}</span>
						</div>
					</div>
				</div>
				<div className="flex flex-col justify-center ">
					<div className="text-5xl font-semibold leading-tight text-primary">
						{currency} {prize_amount.toLocaleString()}
					</div>
				</div>
			</div>
		</div>
	);
};

export default BiggestResult;
