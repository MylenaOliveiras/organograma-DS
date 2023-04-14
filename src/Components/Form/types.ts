import { ICards } from "../Card/types";
export interface IForm {
  teams: { label: string }[];
  cardRegistered: (card: ICards) => void;
}
