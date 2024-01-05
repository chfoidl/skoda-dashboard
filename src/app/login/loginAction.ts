"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const loginAction = async (
  prevState: string | null | void,
  formData: FormData,
) => {
  const username = formData.get("username");
  const password = formData.get("password");

  if (username === process.env.USERNAME && password === process.env.PASSWORD) {
    cookies().set({
      name: "session",
      value: process.env.SESSION_KEY,
      httpOnly: true,
      secure: true,
      path: "/",
    });

    redirect("/");
  }

  return "Benutzername / Passwort inkorrekt!";
};
