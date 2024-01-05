import { DataBox } from "@/components/DataBox";
import { getData } from "@/lib/data";
import { quicksand } from "@/styles/fonts";
import classNames from "classnames";

export default async function Home() {
  const data = await getData();

  return (
    <>
      <h1
        className={classNames(
          "text-4xl font-semibold text-white text-center",
          quicksand.className,
        )}
      >
        Skoda Status
      </h1>
      <div className="max-w-[375px] w-full mx-auto mt-12 grid grid-cols-1 gap-4">
        <DataBox label="Batterieladung" value={`${data.charge}%`} />
        <DataBox label="Ladeleistung" value={`${data.power} W`} />
        <DataBox label="Zeit bis voll" value={data.time} />
        <DataBox
          label="Ladekabel angesteckt"
          value={data.cableConnected ? "Ja" : "Nein"}
        />
      </div>
    </>
  );
}

export const runtime = "edge";

export const metadata = {
  title: "Skoda Dashboard",
  robots: "noindex, nofollow",
};
