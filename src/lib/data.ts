import { unstable_cache } from "next/cache";
import { redis } from "./db";

export type SensorData = {
  charge: number;
  power: number;
  time: string;
  cableConnected: boolean;
};

export const getData = unstable_cache(
  async () => {
    const data = await redis.get("data");
    return data as SensorData;
  },
  ["sensor-data"],
  {
    tags: ["sensor-data"]
  },
);

export const setData = async (data: SensorData) => {
  await redis.set("data", data);
};

