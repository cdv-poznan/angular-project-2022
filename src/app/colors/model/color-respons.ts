import {Color} from './color';

export interface ColorRespons {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Color[];
}
