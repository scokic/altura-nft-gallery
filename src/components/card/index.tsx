import React from "react";
import Image from "next/image";
import { Nft } from "alchemy-sdk";
import { defineImage } from "../../utils/define-image";
import useNftModalStore from "../../store/nft-modal-store";

type Props = {
  nft: Nft;
};

const NftCard = ({ nft }: Props) => {
  const cardImage = defineImage(nft);

  const { openNftModal, setNft } = useNftModalStore();

  return (
    <button
      className="flex flex-col justify-start h-full w-full rounded-3xl p-3 hover:bg-gray-800"
      onClick={() => {
        setNft(nft);
        openNftModal();
      }}
    >
      <div className="w-full aspect-square overflow-hidden flex align-top justify-center mb-4">
        <Image
          className="rounded-2xl h-full w-full object-cover"
          src={cardImage}
          alt={nft.contract.name || ""}
          width={170}
          height={170}
        />
      </div>

      <span className="text-white line-clamp-2">{nft.rawMetadata?.name || nft.contract.symbol}</span>
    </button>
  );
};

export default NftCard;
