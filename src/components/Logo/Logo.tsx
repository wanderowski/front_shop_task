import { ILogoProps } from "@/types";
import "./logo.scss";

const Logo: React.FC<ILogoProps> = ({ src, title, onClick }) => {
  return (
    <div className="logo__wrapper" onClick={onClick}>
      <img src={`/menu-icons/${src}`} alt={title} className="logo__img" />
      <span className="logo__title">{title}</span>
    </div>
  );
};

export default Logo;
