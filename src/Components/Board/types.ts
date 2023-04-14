import { ICards } from "../Card/types";
export interface IBoard {
  cards: ICards[];
  team: string;
  primaryColor: string;
  secondaryColor: string;
}

export interface IBoardProps {
  primaryColor: string;
  secondaryColor: string;
}
