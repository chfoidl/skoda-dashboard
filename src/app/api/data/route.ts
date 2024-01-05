import { NextRequest } from "next/server";

type Payload = {
  charge: number;
  power: number;
  time: string;
};

export const POST = async (request: NextRequest) => {
  const key = request.nextUrl.searchParams.get("key");

  if (key !== process.env.API_KEY) {
    return new Response(null, { status: 403 });
  }

  const data = (await request.json()) as Payload;
  console.log(data);

  return new Response();
};

export const fetchCache = "force-no-store";
