import { useParams } from "react-router-dom";

const Card = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>This is my card and it's ID is {id}</h2>
    </div>
  );
};

export default Card;
