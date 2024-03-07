"use client";

import { useState } from "react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { EyeFilledIcon } from "@/assets/EyeSlashIcon";
import { EyeSlashFilledIcon } from "@/assets/EyeSlashFilledIcon";

// import  {signIn}  from "next-auth/react"

export default function Login() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <main className="bg-background-campo flex h-full w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat brightness-[0.8]">
      <div className="flex w-fit flex-col justify-center rounded border border-black bg-gray-700/60 p-4">
        <form
          // onSubmit={submitHandler}
          className="flex flex-col flex-wrap gap-4 md:flex-nowrap"
        >
          <Input type="email" label="Email" name="email" isRequired />
          <Input
            label="Senha"
            id="password"
            name="password"
            isRequired
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
              >
                {isVisible ? (
                  <EyeSlashFilledIcon className="pointer-events-none text-2xl text-default-400" />
                ) : (
                  <EyeFilledIcon className="pointer-events-none text-2xl text-default-400" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
            // className="max-w-xs"
          />
          <Button>Entrar</Button>
        </form>

        <Link href="#" className="mt-2 font-bold text-green-500">
          Esqueceu a sua Senha?
        </Link>
        <Link href="#" className="mt-2 font-bold text-green-500">
          Criar nova conta
        </Link>
      </div>
    </main>
  );
}
