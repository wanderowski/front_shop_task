import { ILoadingBarProps } from "@/types";
import "./loadingBar.scss";

const LoadingBar: React.FC<ILoadingBarProps> = ({
  percentage = 100,
  customStyles = {},
}) => {
  const style = {
    width: `${percentage}%`,
    ...customStyles,
  };
  return <div className="loading-bar" style={style} />;
};

export default LoadingBar;
