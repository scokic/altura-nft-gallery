import { Network, Alchemy, OwnedNftsResponse } from "alchemy-sdk";
import { useState } from "react";

export const useAlchemy = () => {
  const [nfts, setNfts] = useState<OwnedNftsResponse | null>(null);

  // initialize the Alchemy SDK
  const config = {
    apiKey: process.env.ALCHEMY_API_KEY,
    network: Network.ETH_MAINNET,
  };
  const alchemy = new Alchemy(config);

  // Get all the NFTs owned by an address
  const getNfts = async (walletAddress: string) => {
    const nftResponse = await alchemy.nft.getNftsForOwner(walletAddress);
    setNfts(nftResponse);
  };

  return { nfts, getNfts };
};
