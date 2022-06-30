
import { Emoji } from "./emoji";

export interface RenderedEmoji {
    id: number;
    character: string;
    group: string;
}

export interface RenderedEmoji extends Array<RenderedEmoji> {
    length: number;
}