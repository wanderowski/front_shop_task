export interface ILogoProps {
  title: string;
  src: string;
}

export interface ICartButtonProps {
  count: number;
}

export interface ICarouselProps {
  images: ImageInterface[];
}

export interface ImageInterface {
  id: number;
  url: string;
  title: string;
  base64: string;
}

export interface IContainerProps {
  children: React.ReactNode;
}

export interface IGalleryCarouselProps {
  images: ImageInterface[];
}
