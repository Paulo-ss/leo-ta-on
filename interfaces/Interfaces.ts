import { ReactNode } from "react";

// Interface do objeto recebido como prop
// do componente de SlideInMenuItem
export interface SlideInMenuItemObj {
  title: string;
  targetBlank?: boolean;
  href: string;
}

// Interface para receber as props do
// componente do next/image
export interface ImageProps {
  src: string;
  width: string;
  height: string;
  alt: string;
}

// Interface com as props do Card
export interface CardObj {
  icon: ReactNode;
  title: string;
  imageProps: ImageProps;
  subTitle: string;
  text: string;
  href: string;
}
