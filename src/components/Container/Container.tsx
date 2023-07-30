// container with width of 950 px

import { IContainerProps } from "@/types";
import "./container.scss";

const Container: React.FC<IContainerProps> = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default Container;
