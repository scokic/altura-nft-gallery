import Head from "next/head";
import React from "react";

type Props = {
  title?: string;
  description?: string;
};

const SeoConfig = ({ title, description }: Props) => {
  const config = {
    title: title || "Altura NFT Gallery",
    description: description || "Created by gamers all around the world",
  };

  return (
    <Head>
      <title>{config.title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content={config.description} />
    </Head>
  );
};

export default SeoConfig;
