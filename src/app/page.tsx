import { DataBox } from "@/components/DataBox";
import { quicksand } from "@/styles/fonts";
import classNames from "classnames";

export default async function Home() {
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
        <DataBox label="Batterieladung" value="10%" />
        <DataBox label="Ladeleistung" value="11000 W" />
        <DataBox label="Zeit" value="05:15" />
      </div>
    </>
  );
}

export const runtime = "edge";

export const metadata = {
  title: "Skoda Dashboard",
  robots: "noindex, nofollow",
};

