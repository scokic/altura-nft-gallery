import React, { useState } from "react";
import { useNfts } from "../../hooks/useNfts";
import AddressInput from "../address-input";
import Button from "../button";

const Form = () => {
  const [newWalletAddress, setNewWalletAddress] = useState("");
  const { walletAddress, setWalletAddress, refetch } = useNfts();

  const { isFetching } = useNfts();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // there is room for improvement here
    // I do not like having to await on two state changes
    // it can probably be done via useEffect inside of useNfts hook
    if (walletAddress !== "") {
      await setWalletAddress("");
      await setWalletAddress(newWalletAddress);
      refetch();
    } else {
      setWalletAddress(newWalletAddress);
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className=" flex flex-col lg:flex-row gap-4 lg:w-1/2">
      <AddressInput placeholder="Enter wallet address" action={setNewWalletAddress} />
      <Button
        label="Fetch NFTs"
        type="submit"
        disabled={isFetching || newWalletAddress === ""}
        className="flex-shrink ml-4"
      />
    </form>
  );
};

export default Form;
