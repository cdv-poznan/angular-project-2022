import { Table } from "./table";


export interface TableResponse {
    json: any;
    date: string;
    base: string;
    rates: Table[];
}
