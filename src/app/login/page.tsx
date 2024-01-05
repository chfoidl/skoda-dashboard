"use client";

import { quicksand } from "@/styles/fonts";
import classNames from "classnames";
import { loginAction } from "./loginAction";
import { useFormState } from "react-dom";

export default function Page() {
  const [state, formAction] = useFormState(loginAction, null);

  return (
    <>
      <h1
        className={classNames(
          "text-4xl font-semibold text-white text-center",
          quicksand.className,
        )}
      >
        Login
      </h1>
      <div
        className={classNames(
          "mt-8 text-center px-3 sm:px-4 py-6 rounded-lg border border-white bg-gradient-to-r from-indigo-800 to-indigo-900 relative min-w-[330px]",
        )}
      >
        {state ? (
          <div className="rounded-lg p-2 bg-red-600 mb-2">{state}</div>
        ) : null}
        <form action={formAction}>
          <div className="text-left">
            <label
              htmlFor="username"
              className={classNames(
                "block font-semibold mb-1",
                quicksand.className,
              )}
            >
              Benutzername
            </label>
            <input
              className="text-black p-2 rounded-lg w-full"
              name="username"
              id="username"
              type="text"
              required
            />
          </div>
          <div className="text-left mt-4">
            <label
              htmlFor="password"
              className={classNames(
                "block font-semibold mb-1",
                quicksand.className,
              )}
            >
              Passwort
            </label>
            <input
              className="text-black p-2 rounded-lg w-full"
              name="password"
              id="password"
              type="password"
              required
            />
          </div>
          <div className="text-left mt-4">
            <button
              className={classNames(
                "bg-violet-900 rounded-lg border border-white p-2 font-semibold w-full hover:bg-violet-800 transition",
                quicksand.className,
              )}
              type="submit"
            >
              Anmelden
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
