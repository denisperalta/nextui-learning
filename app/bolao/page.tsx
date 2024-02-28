"use client";

import { Select, SelectSection, SelectItem } from "@nextui-org/select";
import { Button } from "@nextui-org/button";

import Jogo from "@/components/Jogo";

const rows = [
  {
    key: "1",
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
    <>
      <div className="gap-2 flex flex-col">
        <div className="flex items-center justify-end bg-secondary-50 px-4 py-1 rounded-lg">
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
    </>
  );
}
