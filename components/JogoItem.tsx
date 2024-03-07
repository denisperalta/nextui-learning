import { useState } from "react";
import { Divider } from "@nextui-org/divider";
import { Input } from "@nextui-org/input";
import Image from "next/image";

import palmeirasIcon from "@/public/svg/palmeiras.png";
import cuiabaIcon from "@/public/svg/cuiaba.png";

export default function JogoItem() {
  const [homeValue, setHomeValue] = useState("");
  const [awayValue, setAwayValue] = useState("");

  function handleHomeValue(e: React.ChangeEvent<HTMLInputElement>) {
    const numberRegex = /^\d{0,2}$/;
    // INSERIR REGEX PARA 2 CARACTERES SOMENTE
    const eventValue = (e.target as HTMLInputElement)?.value;

    const isValidValue = numberRegex.test(eventValue) ? eventValue : homeValue;
    setHomeValue(isValidValue);
  }

  function handleAwayValue(e: React.ChangeEvent<HTMLInputElement>) {
    const numberRegex = /^\d{0,2}$/;
    // INSERIR REGEX PARA 2 CARACTERES SOMENTE
    const eventValue = (e.target as HTMLInputElement)?.value;

    const isValidValue = numberRegex.test(eventValue) ? eventValue : awayValue;
    setAwayValue(isValidValue);
  }
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-9 flex items-center gap-2 rounded-lg bg-secondary-50 px-4 py-1">
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
                handleHomeValue(e)
              }
              value={homeValue}
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
                handleAwayValue(e)
              }
              value={awayValue}
            />
          </div>
          <Image src={cuiabaIcon} width={32} alt="Cuiaba" />
          <span>PAL</span>
        </div>
      </div>
      <div className="col-span-2 flex items-center gap-2 place-self-center">
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
      <div className="flex items-center place-self-center">
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
  );
}
