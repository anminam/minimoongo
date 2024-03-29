interface ISubImageList {
  src: string;
}
export interface ILink {
  id: string;
  displayName: string;
  href?: string;
  src?: string;
  color?: string;
  path?: string;
  subImageList?: ILink[];
  categoryID?: string;
  categoryText?: string;
  subCategoryID?: string;
  subCategoryText?: string;
  summaryText?: string;
  price?: string;
}
