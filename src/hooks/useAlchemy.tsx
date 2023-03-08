import { Network, Alchemy } from "alchemy-sdk";

export const useAlchemy = () => {
  // initialize the Alchemy SDK
  const config = {
    apiKey: process.env.ALCHEMY_API_KEY,
    network: Network.ETH_MAINNET,
  };
  const alchemy = new Alchemy(config);

  return { alchemy };
};
