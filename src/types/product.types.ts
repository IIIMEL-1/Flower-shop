import { IDescriptionProduct } from "./descriptionProduct.types";

export interface IProduct {
  title: string;
  id: number;
  price: number;
  image: string;
  images: string[];
  rating: number;
  description: IDescriptionProduct[];
}
