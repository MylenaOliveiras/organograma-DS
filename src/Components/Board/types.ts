import { ICard } from "../Card/types";
export interface IBoard {
  cards: ICard[];
  team: string;
  primaryColor: string;
  secondaryColor: string;
}

export interface IBoardProps {
  primaryColor: string;
  secondaryColor: string;
}
