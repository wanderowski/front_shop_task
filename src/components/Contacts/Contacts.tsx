import Container from "@/components/Container";
import "./contacts.scss";

const Contacts = () => {
  return (
    <div className="contacts">
      <Container>
        <div className="contacts__wrapper">
          <div className="contacts__block">
            <h3 className="contacts__header">
              <img src="/about-us.png"></img>
              <span>About us</span>
            </h3>
            <p>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; <br />
              Suspendisse sollicitudin velit sed leo. Ut pharetra augue nec
              augue. Nam elit agna, endrerit sit amet, tincidunt ac, viverra
              sed, nulla.
            </p>
          </div>
          <div className="contacts__block">
            <h3 className="contacts__header">
              <img src="/twitter.png"></img>
              <span>Twitter</span>
            </h3>
            <p className="contacts__quote">
              <img src="/quote.png" alt="quote" />
              <span>
                Vestibulum ante ipsum primisan nulla diamfaucib ...
                www.company.com 25 day ago
              </span>
            </p>
            <p className="contacts__quote">
              <img src="/quote.png" alt="quote" />
              <span>
                Worci luctus etnt metus ultrices posuere cubilia ...
                www.company.com 25 day ago
              </span>
            </p>
          </div>
          <div className="contacts__block">
            <h3 className="contacts__header">
              <img src="/contact-us.png"></img>
              <span>Contact us</span>
            </h3>
            <div className="contacts__phone">
              <img src="/old_phone.png" />
              <div className="contacts__phones">
                <span>+1234567890</span>
                <span>+1234567890</span>
              </div>
            </div>
            <div className="contacts__phone">
              <img src="/phone.png" />
              <div className="contacts__phones">
                <span>+1234567890</span>
                <span>+1234567890</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contacts;
