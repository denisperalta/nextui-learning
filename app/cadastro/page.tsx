"use client";

import { useState } from "react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { EyeFilledIcon } from "@/assets/EyeSlashIcon";
import { EyeSlashFilledIcon } from "@/assets/EyeSlashFilledIcon";

export default function Cadastro() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <main className="flex items-center justify-center flex-col">
      <form
        action=""
        className="flex w-1/2 flex-col flex-wrap md:flex-nowrap gap-4"
      >
        <Input type="text" id="name" name="name" label="Nome" size="sm" />
        <Input
          type="text"
          id="surname"
          name="surname"
          placeholder="Sobrenome"
          size="sm"
        />
        <Input type="email" label="Email" isRequired size="sm" />
        <Input
          label="Senha"
          isRequired
          size="sm"
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
          className="max-w-xs"
        />
        {/* // ADD CALENDAR */}
        {/* // ADD GENDER */}
        <Input
          type="text"
          id="username"
          name="username"
          placeholder="Nome de usuário"
          size="sm"
        />
        {/* // ADD COUNTRY */}
        {/* // ADD TEAM */}
        {/* // ADD PHONE */}
        {/* // ADD CPF */}
        <p>
          Ao clicar em Cadastre-se, você concorda com nossos{" "}
          <Link href="#" underline="always">
            Termos de Uso
          </Link>
          ,{" "}
          <Link href="#" underline="always">
            Política de Privacidade
          </Link>{" "}
          e{" "}
          <Link href="#" underline="always">
            Política de Segurança.
          </Link>
        </p>
        <Button>Cadastre-se</Button>
      </form>
    </main>
  );
}
