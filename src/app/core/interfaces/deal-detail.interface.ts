import { GameInfoInterface } from "./game-info.interface";
import { CheaperStoresInterface } from "./cheaper-stores.interface";
import { CheapestPriceInterface } from "./cheapest-price.interface";

export interface DealDetailInterface {
    gameInfo: GameInfoInterface;
    cheaperStores: CheaperStoresInterface[];
    cheapestPrice: CheapestPriceInterface;
}