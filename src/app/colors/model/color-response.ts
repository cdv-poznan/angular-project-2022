import {Color} from './color';

export interface ColorResponse {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: Color [];
}
