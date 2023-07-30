import Container from "@/components/Container/Container";
import { useLocation, Link } from "react-router-dom";

import "./breadcrumbs.scss";
const BreadCrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  console.log("pathnames", pathnames);

  return (
    <div className="breadcrumbs">
      <Container>
        <Link to="/">Home</Link>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;

          return (
            <span key={index}>
              {" > "}
              <Link to={to}>{value}</Link>
            </span>
          );
        })}
      </Container>
    </div>
  );
};

export default BreadCrumbs;
