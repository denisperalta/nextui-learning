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
    <main className="flex items-center justify-center flex-col h-96">
      <form
        // onSubmit={submitHandler}
        className="flex w-1/2 flex-col flex-wrap md:flex-nowrap gap-4"
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
                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isVisible ? "text" : "password"}
          // className="max-w-xs"
        />
        <Button>Entrar</Button>
      </form>
      <Link href="#">Esqueceu a sua Senha?</Link>
      <Link href="#">Criar nova conta</Link>
    </main>
  );
}
