import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import soccerball from "@/assets/soccer.png";

export default function RankingItem() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between gap-2">
        <div className="relative">
          <Image
            src={soccerball.src}
            alt="soccer"
            sizes="sm"
            className="w-32"
          />
          <p className="absolute bottom-1 left-1/2 z-10 w-full -translate-x-1/2 border border-gray-100 bg-white py-1 text-center">
            Seu Bolão
          </p>
        </div>
        <div className="flex flex-col justify-end gap-2 ">
          <Button className="">Veja o ranking</Button>
        </div>
      </div>
      <div className="flex gap-1">
        <p className="flex-1 rounded-xl border border-gray-100 bg-green-400 py-2 text-center">
          Posição do seu bolão
        </p>
        <p className="rounded-xl border border-gray-100 bg-green-400 px-4 py-2 text-center">
          1
        </p>
      </div>
    </div>
  );
}
