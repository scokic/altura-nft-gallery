import React from "react";
import Image from "next/image";
import { Nft } from "alchemy-sdk";

type Props = {
  nft: Nft;
};

const NftCard = ({ nft }: Props) => {
  return (
    <a
      href={`https://opensea.io/assets/ethereum/${nft.contract.address}/${nft.tokenId}`}
      target="_blank"
      className="flex flex-col justify-start h-full w-full rounded-2xl p-2 hover:bg-gray-800 "
    >
      <div className="w-full aspect-square overflow-hidden flex align-top justify-center">
        <Image
          className="rounded-xl mb-8 h-full w-full object-cover"
          src={nft.contract.openSea?.imageUrl || ""}
          alt={nft.contract.name || ""}
          width={170}
          height={170}
        />
      </div>

      <span className="text-white line-clamp-2">{nft.rawMetadata?.name || nft.contract.symbol}</span>
    </a>
  );
};

export default NftCard;
