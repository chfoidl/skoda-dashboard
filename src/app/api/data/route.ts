import { SensorData, setData } from "@/lib/data";
import { revalidateTag } from "next/cache";
import { NextRequest } from "next/server";

export const POST = async (request: NextRequest) => {
  const key = request.nextUrl.searchParams.get("key");

  if (key !== process.env.API_KEY) {
    return new Response(null, { status: 403 });
  }

  const data = (await request.json()) as SensorData;
  await setData(data);

  revalidateTag("sensor-data");

  return new Response();
};

export const fetchCache = "force-no-store";
