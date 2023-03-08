import { Nft } from "alchemy-sdk";
import React from "react";
import NftCard from "../card";

type Props = {
  nfts: Nft[] | undefined;
  loading?: boolean;
};

const CardGrid = ({ nfts, loading }: Props) => {
  if (loading) {
    return <span className="text-white">Loading...</span>;
  }

  if (!nfts) {
    return <span className="text-white">No NFTs found</span>;
  }

  return (
    <div>
      <h2 className="text-white">Owned NFTs</h2>
      <div className="grid place-items-center grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {nfts.map((nft) => (
          <NftCard nft={nft} key={nft.contract.address + nft.tokenId} />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
