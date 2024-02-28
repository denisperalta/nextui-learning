import { Divider } from "@nextui-org/divider";
import Image from "next/image";
import { Input } from "@nextui-org/input";

import palmeirasIcon from "@/public/svg/palmeiras.png";
import cuiabaIcon from "@/public/svg/cuiaba.png";

type DetalheType = {
  key: string;
  estadio: string;
  hora: string;
  times: string[];
};

export default function Jogo({ detalhe }: { detalhe: DetalheType }) {
  return (
    <>
      <div className="flex flex-row gap-4">
        <div className="flex items-center justify-end bg-secondary-50 px-4 py-1 rounded-lg flex-1">
          <div className="flex w-full">
            <span>Sábado</span>
            <Divider orientation="vertical" className="mx-2" />
            <span>15/04/2023</span>
          </div>
          <div className="flex justify-end w-full">
            <span className="mr-10">Peso: </span>
          </div>
        </div>
        <div className="flex items-center justify-end bg-secondary-50 px-4 py-1 rounded-lg">
          Result. Oficial
        </div>
        <div className="flex items-center justify-end bg-secondary-50 px-4 py-1 rounded-lg">
          Pontos
        </div>
      </div>

      <div className="flex items-center bg-secondary-50 px-4 py-1 rounded-lg gap-2">
        <div className="w-full flex">
          <span>Allianz Parque</span>
          <Divider orientation="vertical" className="mx-2" />
          <span>16:00 hrs</span>
        </div>
        <div className="flex gap-2 justify-end justify-self-end w-3/4 mr-4 items-center">
          <span>PAL</span>
          <Image src={palmeirasIcon} width={32} alt="Palmeiras" />
          <div className="w-12">
            <Input variant="bordered" className="" size="sm" />
          </div>
          <span>X</span>
          <div className="w-12">
            <Input variant="bordered" className="" size="sm" />
          </div>
          <Image src={cuiabaIcon} width={32} alt="Cuiaba" />
          <span>PAL</span>
        </div>
      </div>
    </>
  );
}
