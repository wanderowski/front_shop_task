import Container from "@/components/Container";

import "./footer.scss";
const LowerFooter = () => {
  return (
    <div className="lower-footer">
      <Container>
        <div className="lower-footer__wrapper">
          <span className="lower-footer__copyright">
            © 2011 Magento Demo Store. All Rights Reserved
          </span>
          <div className="lower-footer__controls">
            <select className="lower-footer__select">
              <option>US Dollar - USD</option>
            </select>
            <select className="lower-footer__select">
              <option>English</option>
            </select>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LowerFooter;
