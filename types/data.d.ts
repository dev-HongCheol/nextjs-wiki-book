export type Category = "shose" | "clothes" | "book";
export type Condition = "new" | "used";
export type User = {
  id: number;
  username: string;
  displayName: string;
  email: string;
  profileImageUrl: string;
  description: string;
};
export type Product = {
  id: number;
  category: Category;
  title: string;
  description: string;
  imageUrl: string;
  blurDataUrl: string;
  price: number;
  condition: Condition;
  onwer: User;
};

export type ApiContext = {
  apiRootUrl: string;
};
