import { Typography } from "@mui/material";
import styled from "styled-components";
import Card, { ICards } from "../Card/Card";

export interface IBoard {
  cards: ICards[];
  team: string;
  primaryColor: string;
  secondaryColor: string;
}

interface IBoardProps {
  primaryColor: string;
  secondaryColor: string;
}

const BoardStyled = styled.section<IBoardProps>`
  background-color: ${(props) => props.secondaryColor};
  text-align: center;
  padding: 10px;
`;
const BarraStyled = styled.div<IBoardProps>`
  width: 32px;
  height: 4px;
  background: ${(props) => props.primaryColor};
  margin-top: 14px;
  margin: auto;
`;
export default function Board({
  team,
  primaryColor,
  secondaryColor,
  cards,
}: IBoard) {
  return (
    <BoardStyled secondaryColor={secondaryColor} primaryColor={primaryColor}>
      <Typography variant="h1">{team}</Typography>
      <BarraStyled
        secondaryColor={secondaryColor}
        primaryColor={primaryColor}
      />
      <div>
        {cards
          .filter((card) => card.team === team)
          .map((card) => (
            <Card
              image={card.image}
              name={card.name}
              position={card.position}
              team={card.team}
              primaryColor={card.primaryColor}
            />
          ))}
      </div>
    </BoardStyled>
  );
}
