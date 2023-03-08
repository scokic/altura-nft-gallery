import React from "react";
import Image from "next/image";
import HeroImage from "../../assets/hero-image.png";
import AlturaLogo from "../../assets/altura-logo.png";

const HeroSection = () => {
  return (
    <div className="grid grid-cols-1 place-items-center mb-8 md:mb-0 md:grid-cols-2">
      <div className="order-2 md:order-1">
        <Image src={AlturaLogo} height={50} width={50} alt="Altura logo" />
        <h1 className="text-6xl mt-8 text-white">Search NFT by your wallet address!</h1>
      </div>
      <div className="order-1 md:order-2">
        <Image src={HeroImage} height={500} width={500} alt="Hero image" />
      </div>
    </div>
  );
};

export default HeroSection;
