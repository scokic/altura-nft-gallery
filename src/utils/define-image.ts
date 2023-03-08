// this is used for handling specific situations where the image is stored on IPFS
// and we need to use the IPFS gateway API to fetch the image
// TODO: check for other ways to handle this, and catch similar cases

import { Nft } from "alchemy-sdk";

export const defineImage = (nft: Nft) => {
  const imageSource = nft.media[0]?.thumbnail || nft.rawMetadata?.image || nft.contract.openSea?.imageUrl || "";

  if (imageSource.includes("ipfs://")) {
    // Extract the IPFS CID from the IPFS URL
    const cid = imageSource.replace("ipfs://", "");
    // Construct the HTTP URL using the IPFS gateway API
    const httpUrl = `https://gateway.ipfs.io/ipfs/${cid}`;
    return httpUrl;
  } else {
    return imageSource;
  }
};
