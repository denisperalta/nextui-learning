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
    <main className="bg-background-campo flex h-full w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat brightness-[0.8]">
      <div className="flex w-fit justify-center rounded border border-black bg-gray-700/60 p-4">
        <form
          action=""
          className="flex flex-col flex-wrap gap-4 md:flex-nowrap"
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
                  <EyeSlashFilledIcon className="pointer-events-none text-2xl text-default-400" />
                ) : (
                  <EyeFilledIcon className="pointer-events-none text-2xl text-default-400" />
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
          <p className="w-96 font-bold text-green-500">
            Ao clicar em Cadastre-se, você concorda com nossos{" "}
            <Link href="#" underline="always" className="text-green-500">
              Termos de Uso
            </Link>
            ,{" "}
            <Link href="#" underline="always" className="text-green-500">
              Política de Privacidade
            </Link>{" "}
            e{" "}
            <Link href="#" underline="always" className="text-green-500">
              Política de Segurança.
            </Link>
          </p>
          <Button>Cadastre-se</Button>
        </form>
      </div>
    </main>
  );
}
