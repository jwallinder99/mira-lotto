
const baseUrl = process.env.BASE_URL

export async function POST(request: Request) {
  const body = await request.json();
  
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
  
  return Response.json(data);
}
