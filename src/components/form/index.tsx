import React, { useState } from "react";
import { useNfts } from "../../hooks/useNfts";
import AddressInput from "../address-input";
import Button from "../button";

const Form = () => {
  const [newWalletAddress, setNewWalletAddress] = useState("");
  const { setWalletAddress } = useNfts();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setWalletAddress(newWalletAddress);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <AddressInput placeholder="Enter wallet address" action={setNewWalletAddress} />
      <Button label="Fetch NFTs" type="submit" />
    </form>
  );
};

export default Form;
