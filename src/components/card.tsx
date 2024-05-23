import Image from "next/image";

interface Daerah {
  imgLambang: string;
  name: string;
}

function ItemCard({ name, imgLambang }: Daerah) {
  return (
    <div className="h-60 bg-[#181717] rounded-2xl flex flex-col justify-between">
      <div className="flex justify-center h-full">
        <div className="self-center">
          <Image src={imgLambang} alt={name} width={100} height={100}></Image>
        </div>
      </div>
      <div className="bg-[#BF9000] rounded-t-none rounded-b-2xl h-24 flex flex-col justify-center p-3">
        <p className="text-[#181717] font-bold text-center text-balance uppercase">{name}</p>
      </div>
    </div>
  );
}

export default ItemCard;
