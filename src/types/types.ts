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

export interface ICards {
  name: string;
  position: string;
  image: string;
  team: string;
  primaryColor: string;
}

export interface ICardsProps {
  primaryColor: string;
}
export interface IForm {
  teams: { label: string }[];
  cardRegistered: (card: ICards) => void;
}

export interface ISection {
  onClick: () => void;
}
