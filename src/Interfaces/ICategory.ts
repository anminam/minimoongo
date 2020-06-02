
export interface ICategory {
    categoryIndex: string
    id: string
    displayName: string
}

export interface ICategories {
    id: string,
    list: ICategory[]
}