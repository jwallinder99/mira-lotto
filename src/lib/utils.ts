import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const fetchResults = async (userNums: string[], secondNums: Number[], startDate: string, endDate: string) => {

  const sanitizedUserNums = userNums.map((num) => Number(num));
  try {
    console.log(sanitizedUserNums);
    const res = await fetch("/lotto/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_numbers: sanitizedUserNums,
        secondary_numbers: secondNums, //Between 5 and 7 numbers
        start_date: startDate,
        end_date: endDate,
      }),
    });

    const data = res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const formatDate = (userDate: Date | undefined) => {
  if (!userDate) return "Pick a date"; 
  console.log("Date before format")
  console.log(userDate)
  const dateObj = new Date(userDate);
  const year = dateObj.getFullYear();
  const month = ("0" + (dateObj.getMonth() + 1)).slice(-2);
  const day =  String("0" + dateObj.getDate()).slice(-2);
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
};
