export type TGoods = IGoods | IBook;

export interface IGoods {
    id: string
    name: string
    subscript?: string
    img: string
    categoryId: string
    subCategoryId?: string
}

export interface IBook extends IGoods {
    author: string
    publisher: string
    price: number
    sellPrice: number
    productDate: string
    // http://image.kyobobook.co.kr/images/book/large/175/l9791190382175.jpg
}