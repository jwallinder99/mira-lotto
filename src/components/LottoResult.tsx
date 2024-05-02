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
    <Card key={draw_code} className="border-2 border-white p-3">
      <CardHeader>
        <CardTitle>
          Prize Amount: {currency} {prize_amount}
        </CardTitle>
        <CardDescription>Draw Date: {draw_date}</CardDescription>
      </CardHeader>
      <CardContent>
        <div>Primary Matches: {primary_matches}</div>
        <div>Secondary Matches: {secondary_matches}</div>
      </CardContent>
      <CardFooter>Lottery: {lottery_name}</CardFooter>
    </Card>
  );
};

export default LottoResult;
