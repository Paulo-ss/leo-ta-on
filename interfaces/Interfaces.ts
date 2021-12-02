import { ReactNode } from "react";
import { ParsedUrlQuery } from "querystring";

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
  width?: string;
  height?: string;
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

// Interface com as props do Product
export interface ProductObj {
  isFeatured: boolean;
  subTitle?: string;
  title: string;
  features: string[];
  tableHTML: string;
  ytVideoID?: string;
  image: ImageProps;
}

// Interface para o context.params da função getStaticProps
export interface Params extends ParsedUrlQuery {
  manufacturer: string;
}

// Interface para array de Products
export interface ProductsArray {
  products: ProductObj[];
}
