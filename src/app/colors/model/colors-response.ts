import { Color } from "./color";

export interface ColorsResponse {
  perPage: number;
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Color[];
}
