import LowerFooter from "./LowerFooter";
import UpperFooter from "./UpperFooter";
import LoadingBar from "@/components/LoadingBar";

const Footer = () => {
  return (
    <footer className="footer">
      <UpperFooter />
      <LoadingBar
        customStyles={{ position: "relative", top: "0", right: "0" }}
      />
      <LowerFooter />
    </footer>
  );
};

export default Footer;
