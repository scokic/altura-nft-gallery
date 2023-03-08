import Head from "next/head";
import Container from "../components/container";
import Form from "../components/form";
import { useNfts } from "../hooks/useNfts";
import Image from "next/image";

const Home = () => {
  const { data: nfts, isLoading } = useNfts();

  return (
    <>
      <Head>
        <title>Altura NFT</title>
        <meta name="description" content="Created by gamers all around the world" />
      </Head>
      <Container>
        <>
          <h1 className="text-lg font-bold">Hello Altura</h1>

          {isLoading && <div>Loading...</div>}

          {!nfts && !isLoading && <Form />}

          {nfts && (
            <div>
              <h2>Owned NFTs</h2>
              <ul style={{ display: "flex", flexWrap: "wrap" }}>
                {nfts.ownedNfts?.map(
                  (nft, idx) => (
                    console.log("nft", nft),
                    (
                      <li key={idx}>
                        <a
                          href={`https://opensea.io/assets/ethereum/${nft.contract.address}/${nft.tokenId}`}
                          target="_blank"
                        >
                          <div>Name: {nft.rawMetadata?.name}</div>
                          <Image
                            src={nft.contract.openSea?.imageUrl || ""}
                            alt={nft.contract.name || ""}
                            width={100}
                            height={100}
                          />
                        </a>
                      </li>
                    )
                  )
                )}
              </ul>
            </div>
          )}
        </>
      </Container>
    </>
  );
};
export default Home;
