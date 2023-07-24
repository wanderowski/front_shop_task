import "./loadingBar.scss";

const LoadingBar = ({ percentage = 100 }) => {
  const style = {
    width: `${percentage}%`,
  };
  return <div className="loading-bar" style={style} />;
};

export default LoadingBar;
