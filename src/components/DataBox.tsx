import { inter, quicksand } from "@/styles/fonts";
import classNames from "classnames";

type Props = {
  value: string;
  label: string;
  className?: string;
};

export const DataBox = ({ className, value, label }: Props) => {
  return (
    <div
      className={classNames(
        "text-center px-3 sm:px-4 py-6 rounded-lg border border-white bg-gradient-to-r from-indigo-800 to-indigo-900 relative",
        className,
      )}
    >
      <div>
        <div
          className={classNames(
            "text-3xl sm:text-4xl font-bold",
            inter.className,
          )}
        >
          {value}
        </div>

        <div
          className={classNames(
            "mt-4 text-2xl font-semibold",
            quicksand.className,
          )}
        >
          {label}
        </div>
      </div>
    </div>
  );
};

