import Carousel from "@/components/Carousel";
import Container from "@/components/Container";
import axios from "@/services/axios";
import { ImageInterface } from "@/types";
import { useEffect, useState } from "react";

import "./adblock.scss";

const AdBlock = () => {
  const [images, setImages] = useState<ImageInterface[]>([]);
  const handleGetImages = async () => {
    try {
      const { data }: { data: ImageInterface[] } = await axios.get("/images");
      setImages(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleGetImages();
  }, []);
  return (
    <div className="adblock">
      <Container>
        <div className="adblock__wrapper">
          <Carousel images={images} />
        </div>
      </Container>
    </div>
  );
};

export default AdBlock;
