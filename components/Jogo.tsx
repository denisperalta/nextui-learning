import { useState } from "react";
import { Divider } from "@nextui-org/divider";

import JogoItem from "./JogoItem";

type DetalheType = {
  key: string;
  estadio: string;
  hora: string;
  times: string[];
};

export default function Jogo({ detalhe }: { detalhe: DetalheType }) {
  return (
    <>
      {/* DIVISOR DE DIA */}
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-9 flex flex-1 items-center  rounded-lg bg-secondary-50 px-4 py-1">
          <div className="flex w-full">
            <span>Sábado</span>
            <Divider orientation="vertical" className="mx-2" />
            <span>15/04/2023</span>
          </div>
          <div className="flex w-full justify-end">
            <span className="mr-10">Peso: </span>
          </div>
        </div>
        <p className="col-span-2 flex items-center justify-center rounded-lg bg-secondary-50 px-4 py-1">
          Result. Oficial
        </p>
        <p className="flex items-center justify-center rounded-lg bg-secondary-50 px-4 py-1">
          Pontos
        </p>
      </div>

      {/* JOGO */}
      <JogoItem />
      <JogoItem />
      <JogoItem />
    </>
  );
}
