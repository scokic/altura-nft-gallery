import React from "react";
import useNftModalStore from "../../store/nft-modal-store";
import CardInfo from "./card-info";

// modal can be created in a form of a custom hook and it can use portal for better performance
// in that case we would not need to use <NftModal /> on page level

const NftModal = () => {
  const { nftModalOpen, closeNftModal, nft } = useNftModalStore();

  if (!nftModalOpen || !nft) {
    return null;
  }

  return (
    <div className="fixed top-0 h-screen w-screen grid place-items-center">
      <div className="fixed top-0 h-screen w-screen bg-black bg-opacity-30" onClick={closeNftModal} />
      <CardInfo nft={nft} />
    </div>
  );
};

export default NftModal;
