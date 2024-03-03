"use client";

import { Select, SelectSection, SelectItem } from "@nextui-org/select";
import { Button } from "@nextui-org/button";

import Jogo from "@/components/Jogo";
import { Image } from "@nextui-org/image";

import soccerball from "@/assets/soccer.png";
import RankingItem from "@/components/rankingItem";

const rows = [
  {
    key: "1",
    estadio: "Tony Reichert",
    hora: "12:00",
    times: ["PAL", "CUI"],
  },
  {
    key: "2",
    estadio: "Tony Reichert",
    hora: "12:00",
    times: ["PAL", "CUI"],
  },
];

const columns = [
  {
    key: "estadio",
    label: "Estádio",
  },
  {
    key: "hora",
    label: "Hora",
  },
  {
    key: "times",
    label: "Times",
  },
];

export default function Bolao() {
  return (
    <div className="flex gap-4">
      <div className="flex flex-1 flex-col gap-2">
        <div className="flex items-center justify-end rounded-lg bg-secondary-50 px-4 py-1">
          <span className="w-1/4">Bolão DFC:</span>
          <div className="flex w-3/4 justify-end gap-4">
            <Select
              items={["Rodada 1"]}
              placeholder="Selecione uma rodada"
              className="max-w-xs"
              size="sm"
              aria-label="Rodada"
            >
              <SelectItem key="Teste">Rodada 1</SelectItem>
              <SelectItem key="Teste">Rodada 2</SelectItem>
              <SelectItem key="Teste">Rodada 3</SelectItem>
              {/* {(animal) => (
              <SelectItem key={animal.value}>{animal.label}</SelectItem>
            )} */}
            </Select>
            <Button size="sm" className="h-12">
              Salvar
            </Button>
          </div>
        </div>

        {rows.map((row) => (
          <Jogo key={row.key} detalhe={row} />
        ))}
      </div>

      {/* 
      RANKINGS COMENTADO POR ENQUANTO
      <div className="flex flex-col gap-4">
        <Button>Crie seu Bolão</Button>
        <RankingItem />
        <RankingItem />
        <RankingItem />
      </div> */}
    </div>
  );
}
