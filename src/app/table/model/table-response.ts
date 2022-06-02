import { Table } from "./table";


export interface TableResponse {
    date: number;
    base: string;
    rates: Table;
}
