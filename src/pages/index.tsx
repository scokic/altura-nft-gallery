import Head from "next/head";
import CardGrid from "../components/card-grid";
import Container from "../components/container";
import Form from "../components/form";
import { useNfts } from "../hooks/useNfts";

const Home = () => {
  const { data: nfts, isLoading, error, isError } = useNfts();

  return (
    <div className="bg-gray-900 min-h-screen">
      <Head>
        <title>Altura NFT</title>
        <meta name="description" content="Created by gamers all around the world" />
      </Head>
      <Container>
        <>
          <h1 className="text-lg font-bold text-white">Hello Altura</h1>

          {!nfts && <Form />}
          {isLoading && <span className="text-white">Loading...</span>}
          {isError && (
            <span className="text-white">
              {error?.message || "We couldn't find the data, please check if you entered proper wallet address."}
            </span>
          )}
          {nfts && <CardGrid nfts={nfts?.ownedNfts} />}
        </>
      </Container>
    </div>
  );
};
export default Home;
