export interface ILogoProps {
  title: string;
  src: string;
  onClick?: () => void;
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

export interface ICarouselItem extends ImageInterface {
  price: number;
}

export interface IContainerProps {
  children: React.ReactNode;
}

export interface IGalleryCarouselProps {
  images: ICarouselItem[];
}

export interface ILoadingBarProps {
  percentage?: number;
  customStyles?: React.CSSProperties;
}
