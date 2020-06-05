
export interface ICategory {
    categoryIndex: string
    id: string
    displayName: string
    isBig?: boolean
}

export interface ICategories {
    id: string,
    list: ICategory[]
}

export type IMainCategoryId = 'korbook' | 'otherbook' | 'ebook' | 'webnovel' | 'gift' | 'music' | 'usedthing';
export type Status = 'new' | 'update' | 'close';

