// container with width of 950 px

import { ReactNode } from "react";
import "./container.scss";

const Container = ({ children }: { children?: ReactNode }) => {
  return <div className="container">{children}</div>;
};

export default Container;
