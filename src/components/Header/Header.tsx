import Logo from "@/components/Logo/Logo";
import "./header.scss";
import SearchField from "@/components/SearchField";
import CartButton from "@/components/CartButton";
import Navigation from "@/components/Navigation/Navigation";
import Container from "@/components/Container";

const Header = () => {
  interface MenuItem {
    title: string;
    src: string;
    onClick?: () => void;
  }

  const menuItems: MenuItem[] = [
    {
      title: "My Account",
      src: "account.png",
    },
    {
      title: "My Wishlist",
      src: "wishlist.png",
    },
    {
      title: "Checkout",
      src: "checkout.png",
    },
    {
      title: "Log Out",
      src: "login.png",
      onClick: () => {
        localStorage.removeItem("token");
        window.location.reload();
      },
    },
  ];
  return (
    <header className="header">
      <Container>
        <div className="header__wrapper">
          <div className="header__logo">
            <img src="/public/logo.png" alt="logo" />
          </div>
          <div className="header__info">
            <div className="header__topnav">
              {menuItems.map((item) => (
                <Logo
                  src={item.src}
                  title={item.title}
                  onClick={item.onClick}
                />
              ))}
            </div>
            <div className="header__details">
              <span className="header__greetings">Welcome, Admin Admin</span>
              <div className="header__actions">
                <div className="header__actionWrapper">
                  <SearchField />
                </div>
                <div className="header__actionWrapper">
                  <CartButton count={5} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Navigation />
      </Container>
    </header>
  );
};

export default Header;
