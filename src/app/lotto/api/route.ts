import { LotteryCompareRequestBody } from "@/types/types";
import { NextResponse } from "next/server";
const baseUrl = process.env.BASE_URL

export async function POST(request: Request) {
  const body = await request.json();
  console.log(body);
  const result = await fetch(
    `https://${baseUrl}/lottery-compare`,
    {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );
  const data = await result.json();
  console.log(data);
  return Response.json(data);
}
