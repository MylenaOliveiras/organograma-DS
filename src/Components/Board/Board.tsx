import { Typography } from "@mui/material";
import { BoardStyled, DivCardStyled, BarraStyled } from "./styled";
import { IBoard } from "./types";
import Card from "../Card/Card";

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
      <DivCardStyled>
        {cards
          .filter((card) => card.team === team)
          .map((card, index) => (
            <Card
              key={index}
              image={card.image}
              name={card.name}
              position={card.position}
              team={card.team}
              primaryColor={primaryColor}
            />
          ))}
      </DivCardStyled>
    </BoardStyled>
  );
}
