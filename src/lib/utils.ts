import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const fetchResults = async (userNums: string[]) => {
  // const body: LotteryCompareRequestBody = {
  //   user_numbers: [38, 36, 33, 23, 19, 18, 2],
  //   start_date: "2014-01-20",
  //   end_date: "2024-03-23",
  // };
  const sanitizedUserNums = userNums.map((num) => Number(num));

  try {
    console.log(sanitizedUserNums);
    const res = await fetch("/lotto/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_numbers: sanitizedUserNums, //Between 5 and 7 numbers
        start_date: "2014-01-20",
        end_date: "2024-03-23",
      }),
    });

    const data = res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
