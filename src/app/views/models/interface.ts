export interface ILivro {
  title: string;
  authors: string[];
  publisher: string;
  publishedDate: Date | string;
  description: string;
  previewLink: string;
  thumbnail: string;
}

export interface IGoogleAPIResponse {
  items: IItems[];
  kind: string;
  totalItems: number;
}

export interface IVolumeInfo {
  title: string;
  authors: string[];
  publisher: string;
  publishedDate: Date;
  description: string;
  pageCount: number;
  printType: string;
  mainCategory: string;
  categories: string[];
  averageRating: number;
  ratingsCount: number;
  contentVersion: string;
  imageLinks: IImageLinks;
  language: string;
  infoLink: string;
  canonicalVolumeLink: string;
  previewLink: string;
}

export interface IImageLinks {
  smallThumbnail: string;
  thumbnail: string;
  small: string;
  medium: string;
  large: string;
  extraLarge: string;
}

export interface IItems {
  volumeInfo: IVolumeInfo;
}
