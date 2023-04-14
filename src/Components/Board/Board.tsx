import { Typography } from "@mui/material";
import styled from "styled-components";
import { IBoard, IBoardProps } from "../../types/Types";
import Card from "../Card/Card";

const BoardStyled = styled.section<IBoardProps>`
  background-color: ${(props) => props.secondaryColor};
  text-align: center;
  padding: 40px;
`;
const BarraStyled = styled.div<IBoardProps>`
  width: 32px;
  height: 4px;
  background: ${(props) => props.primaryColor};
  margin: 12px auto;
`;
const DivCardStyled = styled.div`
  display: flex;
  gap: 24px;
`;
export default function Board({
  team,
  primaryColor,
  secondaryColor,
  cards,
}: IBoard) {
  console.log("cards", cards);
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
