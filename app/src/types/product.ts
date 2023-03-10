/* c8 ignore start */
export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: Array<string>;
};
/* c8 ignore stop */
/* c8 ignore start */
export type ProductJsonResult = {
  products: Array<Product>;
  total: number;
  skip: number;
  limit: number;
};
/* c8 ignore stop */
