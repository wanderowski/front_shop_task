import Container from "@/components/Container";
import "./welcome.scss";
import GalleryCarousel from "@/components/GalleryCarousel/GalleryCarousel";
import { ImageInterface } from "@/types";
import { useEffect, useState } from "react";
import axios from "@/services/axios";

const Welcome = () => {
  const [images, setImages] = useState<ImageInterface[]>([]);

  const handleGetImages = async () => {
    try {
      const { data }: { data: ImageInterface[] } = await axios.get(
        "/gallery-images"
      );
      setImages(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleGetImages();
  }, []);
  return (
    <div className="welcome">
      <Container>
        <div className="welcome__wrapper">
          <h1 className="welcome__title">Welcome to Moving</h1>
          <p className="welcome__description">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Suspendisse sollicitudin velit sed leo. Ut
            pharetra augue nec augue. Nam elit agna,endrerit sit amet, tincidunt
            ac, viverra sed, nulla. Donec porta diam eu massa. Quisque diam
            lorem, interdum vitae,dapibus ac, scelerisque vitae, pede. Donec
            eget tellus non erat lacinia fermentum. Donec in velit vel ipsum
            auctor pulvinar. Vestibulum iaculis lacinia est. Proin dictum
            elementum velit. Fusce euismod consequat ante. Lorem ipsum dolor sit
            amet, consectetuer adipis Mauris accumsan nulla vel diam. Sed in
            lacus ut enim adipiscing aliquet. Nulla venenatis. In pede mi,
            aliquet sit amet, euismod in,auctor ut, ligula. Aliquam dapibus
            tincidunt metus.
          </p>
          <GalleryCarousel images={[...images, ...images]} />
        </div>
      </Container>
    </div>
  );
};

export default Welcome;
