import { Nft } from "alchemy-sdk";
import { create } from "zustand";

interface NftModalStore {
  nftModalOpen: boolean;
  openNftModal: () => void;
  closeNftModal: () => void;

  nft: Nft | null;
  setNft: (nft: Nft) => void;
}

// TODO: Simplify this store
// Here we're using both nftModalOpen and nft to determine if modal is open or not
// We can simplify this by using only nft or by changing the logic of the modal

const useNftModalStore = create<NftModalStore>((set) => ({
  nftModalOpen: false,
  openNftModal: () => set({ nftModalOpen: true }),
  closeNftModal: () => set({ nftModalOpen: false }),

  nft: null,
  setNft: (nft: Nft) => set({ nft }),
}));

export default useNftModalStore;
