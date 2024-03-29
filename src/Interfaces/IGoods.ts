export type TGoods = IGoods | IBook;

export interface IGoods {
  id: string;
  name: string;
  subName?: string;
  subscript?: string;
  img: string;
  categoryId: string;
  subCategoryId?: string;
  rank?: string;
}

export interface IBook extends IGoods {
  author: string;
  publisher: string;
  price: number;
  sellPrice: number;
  productDate: string;
  rate?: string;
  ebookPrice?: number;
  reviewObj?: { count: number; rate: number };
  // http://image.kyobobook.co.kr/images/book/large/175/l9791190382175.jpg
}
