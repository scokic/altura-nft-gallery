import React from "react";
import Image from "next/image";
import { Nft } from "alchemy-sdk";
import { defineImage } from "../../utils/define-image";
import CloseIcon from "../../assets/close-icon";
import useNftModalStore from "../../store/nft-modal-store";
import Button from "../button";

type Props = {
  nft: Nft;
};

const CardInfo = ({ nft }: Props) => {
  const { closeNftModal } = useNftModalStore();
  const nftImage = defineImage(nft);

  return (
    <div className="w-[60vw] h-[80vh] bg-gray-900 z-10 grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden relative">
      <div className="grid place-items-center p-8">
        <Image
          src={nftImage}
          alt={nft?.tokenId}
          width={500}
          height={500}
          className="object-contain rounded-xl overflow-hidden"
        />
      </div>

      <div className="flex flex-col gap-4 px-8 py-20">
        <span className="text-4xl text-white">{nft.rawMetadata?.name}</span>
        <span className="text-md text-gray-400">Contract address: {nft.contract.address}</span>
        <span className="text-md text-gray-400">Token ID: {nft.tokenId}</span>
        <span className="text-md text-gray-400">{nft.description}</span>

        <a
          href={`https://opensea.io/assets/ethereum/${nft.contract.address}/${nft.tokenId}`}
          target="_blank"
          className="text-white text-md font-bold text-center bg-gray-800 rounded-xl p-4 w-full hover:bg-gray-700 transition duration-200 ease-in-out cursor-pointer"
        >
          Purchase
        </a>
      </div>

      <button className="absolute top-4 right-4 text-white" onClick={closeNftModal}>
        <CloseIcon />
      </button>
    </div>
  );
};

export default CardInfo;
