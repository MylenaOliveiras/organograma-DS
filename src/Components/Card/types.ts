export interface ICard {
  id: number;
  name: string;
  position: string;
  image: string;
  team: string;
  primaryColor: string;
}

export interface ICardProps {
  primaryColor: string;
}
