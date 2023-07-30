import { Link } from "react-router-dom";
import "./navigation.scss";

const items = [
  {
    name: "Home Page",
    url: "/",
  },
  {
    name: "brands",
    url: "/brands",
  },
  {
    name: "Women's Shoes",
    url: "/women-shoes",
  },
  {
    name: "Men's Shoes",
    url: "/men-shoes",
  },
  {
    name: "Kid's Shoes",
    url: "/kids-shoes",
  },
  {
    name: "Sale",
    url: "/sale",
  },
];

const Navigation = () => {
  return (
    <div className="misc">
      <div className="misc__left"></div>
      <nav className="nav">
        <ul className="nav__list">
          {items.map((item) => (
            <Link to={item.url}>
              <li className="nav__item">{item.name}</li>
            </Link>
          ))}
        </ul>
      </nav>

      <div className="misc__right"></div>
    </div>
  );
};

export default Navigation;
