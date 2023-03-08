import { OwnedNftsResponse } from "alchemy-sdk";
import { useState } from "react";
import { useQuery } from "react-query";
import { useAlchemy } from "./useAlchemy";

export const useNfts = () => {
  const { alchemy } = useAlchemy();

  const [walletAddress, setWalletAddress] = useState("");

  const getNfts = async () => {
    if (!walletAddress) return;

    const data = await alchemy.nft.getNftsForOwner(walletAddress);
    return data;
  };

  const { data, isLoading, refetch } = useQuery("nfts", getNfts, {
    enabled: walletAddress !== "",
    refetchOnWindowFocus: false,
  });

  return { data, isLoading, refetch, setWalletAddress, walletAddress };
};
