import { useState } from "react";
import { Divider } from "@nextui-org/divider";
import { Input } from "@nextui-org/input";
import Image from "next/image";

import palmeirasIcon from "@/public/svg/palmeiras.png";
import cuiabaIcon from "@/public/svg/cuiaba.png";

type DetalheType = {
  key: string;
  estadio: string;
  hora: string;
  times: string[];
};

export default function Jogo({ detalhe }: { detalhe: DetalheType }) {
  const [value, setValue] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const numberRegex = /^(\d+|)$/;
    const eventValue = (e.target as HTMLInputElement)?.value;

    const isValidValue = numberRegex.test(eventValue) ? eventValue : value;
    setValue(isValidValue);
  }

  return (
    <>
      {/* DIVISOR DE DIA */}
      <div className="flex flex-row gap-4">
        <div className="flex flex-1 items-center justify-end rounded-lg bg-secondary-50 px-4 py-1">
          <div className="flex w-full">
            <span>Sábado</span>
            <Divider orientation="vertical" className="mx-2" />
            <span>15/04/2023</span>
          </div>
          <div className="flex w-full justify-end">
            <span className="mr-10">Peso: </span>
          </div>
        </div>
        <div className="flex items-center justify-end rounded-lg bg-secondary-50 px-4 py-1">
          Result. Oficial
        </div>
        <div className="flex items-center justify-end rounded-lg bg-secondary-50 px-4 py-1">
          Pontos
        </div>
      </div>

      {/* JOGO */}
      <div className="flex">
        <div className="flex flex-1 items-center gap-2 rounded-lg bg-secondary-50 px-4 py-1">
          <div className="flex w-full">
            <span>Allianz Parque</span>
            <Divider orientation="vertical" className="mx-2" />
            <span>16:00 hrs</span>
          </div>
          <div className="mr-4 flex w-3/4 items-center justify-end gap-2 justify-self-end">
            <span>PAL</span>
            <Image src={palmeirasIcon} width={32} alt="Palmeiras" />
            <div className="w-12">
              <Input
                variant="bordered"
                className="text-center"
                size="sm"
                pattern="[0-9]*"
                type="text"
                onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(e)
                }
                value={value}
              />
            </div>
            <span>X</span>
            <div className="w-12">
              <Input
                variant="bordered"
                className="text-center"
                size="sm"
                pattern="[0-9]*"
                type="text"
                onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(e)
                }
                value={value}
              />
            </div>
            <Image src={cuiabaIcon} width={32} alt="Cuiaba" />
            <span>PAL</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-12">
            <Input
              variant="bordered"
              className="text-center"
              size="sm"
              pattern="[0-9]*"
              type="text"
              value=""
              readOnly
            />
          </div>
          <span>X</span>
          <div className="w-12">
            <Input
              variant="bordered"
              className="text-center"
              size="sm"
              pattern="[0-9]*"
              type="text"
              value=""
              readOnly
            />
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-12">
            <Input
              variant="bordered"
              className="text-center"
              size="sm"
              pattern="[0-9]*"
              type="text"
              value=""
              readOnly
            />
          </div>
        </div>
      </div>
    </>
  );
}
