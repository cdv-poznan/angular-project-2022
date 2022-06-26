import { Book } from "./books";

export interface BookResponse {
    "numFound": number,
    "start": number,
    "numFoundExact": boolean,
    "docs": Book[],
    "num_found": number,
    "q": string,
}
