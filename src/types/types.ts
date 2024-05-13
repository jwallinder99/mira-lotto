import { data } from "@/data/data";

export interface LotteryCompareRequestBody {
  user_numbers: number[];
  start_date: string;
  end_date: string;
}

export interface LottoResultProps {
  draw_code: string;
  lottery_name: string;
  draw_date: string;
  primary_matches: number;
  secondary_matches: number;
  currency: string;
  prize_amount: number;
}

export interface HandleSubmitFunction {
  (nums: string[], secondNums: string[], startDate: string, endDate: string): Promise<string[]>;
}

export interface NumbersInputProps {
  handleSubmit: HandleSubmitFunction;
}

export interface ResultFeedProps {
  lottoData: typeof data;
}

export interface DateState {
  'start-date': string;
  'end-date': string;
}


export interface DatePickerProps {
  date: Date | undefined,
  setDate: any;
}