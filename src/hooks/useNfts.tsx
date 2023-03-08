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

  const { data, isLoading, error, isError } = useQuery<
    OwnedNftsResponse | undefined,
    Error,
    OwnedNftsResponse | undefined,
    "nfts"
  >("nfts", getNfts, {
    enabled: walletAddress !== "",
    refetchOnWindowFocus: false,
  });

  return { data, isLoading, error, isError, setWalletAddress, walletAddress };
};
