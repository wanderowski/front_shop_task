import Container from "@/components/Container";
import "./footer.scss";
import { Link } from "react-router-dom";
import { toKebabCase } from "@/utils/toKebabCase";

const footerItems: string[] = [
  "About Us",
  "Customer Service",
  "Site Map",
  "Search Terms",
  "Advanced Search",
  "Contact Us",
];

const UpperFooter = () => {
  return (
    <div className="upper-footer">
      <Container>
        <div className="upper-footer__wrapper">
          {footerItems.map((item) => (
            <Link to={`/${toKebabCase(item)}`} className="upper-footer__link">
              {item}
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default UpperFooter;
