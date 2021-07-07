import {IProduct} from './product';

export interface ICategories {
  id: number;
  title: string;
  products: IProduct[];
}
