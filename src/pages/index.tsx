import Container from "../components/container";
import Form from "../components/form";
import NftModal from "../components/nft-modal";
import Catalogue from "../components/catalogue";
import HeroSection from "../components/hero-section";
import SeoConfig from "../components/seo-config";

const Home = () => {
  return (
    <div className="bg-[#080E13] min-h-screen relative">
      <SeoConfig />
      <Container>
        <HeroSection />
        <Form />
        <Catalogue />
      </Container>
      <NftModal />
    </div>
  );
};
export default Home;
