import { LottoResultProps } from "@/types/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const LottoResult: React.FC<LottoResultProps> = ({
  draw_code,
  lottery_name,
  draw_date,
  primary_matches,
  secondary_matches,
  currency,
  prize_amount,
}) => {
  return (
    <Card key={draw_code} className="w-4/6 flex flex-row">
      <CardHeader>
        <CardTitle className="font-bold text-muted-foreground">
          {lottery_name}
        </CardTitle>
        <CardTitle>
          Prize Amount: {currency} {prize_amount}
        </CardTitle>
        <CardDescription>Draw Date: {draw_date}</CardDescription>
      </CardHeader>
      <CardHeader>
        <CardTitle className="mb-1">
          Primary Matches: {primary_matches}
        </CardTitle>
        <CardTitle className="text-muted-foreground">
          Secondary Matches: {secondary_matches}
        </CardTitle>
      </CardHeader>
    </Card>
  );
};

export default LottoResult;
