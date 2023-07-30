import AdBlock from "@/components/AdBlock";
import Contacts from "@/components/Contacts";
import Header from "@/components/Header";
import Welcome from "@/components/Welcome";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <AdBlock />
      <Welcome />
      <Contacts />
      <Footer />
    </>
  );
};

export default Home;
