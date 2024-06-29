import { IProduct } from "./product.types";

export type TypeShortProduct = Pick<
  IProduct,
  "id" | "title" | "image" | "price"
>;
