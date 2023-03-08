import React from "react";
import { useNfts } from "../../hooks/useNfts";
import CardGrid from "../card-grid";

const Catalogue = () => {
  const { data: nfts, isFetching, isSuccess, isError, error } = useNfts();

  if (isFetching) {
    return <span className="text-white">Loading...</span>;
  }

  if (isError) {
    return (
      <span className="text-white">
        {error?.message || "We couldn't find the data, please check if you entered proper wallet address."}
      </span>
    );
  }

  if (isSuccess && !nfts?.ownedNfts.length) {
    return <span className="text-white">No NFTs found for this wallet address.</span>;
  }

  return (
    <div className="mt-8">
      <CardGrid nfts={nfts?.ownedNfts} />
    </div>
  );
};

export default Catalogue;
