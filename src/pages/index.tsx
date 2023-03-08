import Head from "next/head";
import { useAlchemy } from "../hooks/useAlchemy";

const Home = () => {
  const { nfts, getNfts } = useAlchemy();

  return (
    <div>
      <Head>
        <title>Altura NFT</title>
        <meta name="description" content="Created by gamers all around the world" />
      </Head>
      <h1 className="text-lg font-bold">Hello Altura</h1>
      <button onClick={() => getNfts("0x74beEE74A44b713487D42473784b5CBDc547355E")}>Fetch NFTs</button>

      {nfts && (
        <div>
          <h2>Owned NFTs</h2>
          <ul style={{ display: "flex", flexWrap: "wrap" }}>
            {nfts.ownedNfts.map((nft, idx) => (
              <li key={idx}>
                <a href={`https://opensea.io/assets/ethereum/${nft.contract.address}/${nft.tokenId}`} target="_blank">
                  <div>{nft.rawMetadata?.name}</div>
                  <img src={nft.contract.openSea?.imageUrl} alt={nft.contract.name} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default Home;
