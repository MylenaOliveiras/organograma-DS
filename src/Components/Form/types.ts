import { ICard } from "../Card/types";
export interface IForm {
  teams: { label: string }[];
  cardRegistered: (card: IFieldValues) => void;
}
export interface IFieldValues {
  name: string;
  position: string;
  image: string;
  team: string;
}
