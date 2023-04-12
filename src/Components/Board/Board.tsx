import { Typography } from "@mui/material";
import styled from "styled-components";

export interface IBoard {
  team: string;
  primaryColor: string;
  secondaryColor: string;
}

const BoardStyled = styled.section`
  background-color: ${`secondaryColor`};
  text-align: center;
  padding: 10px;
`;
const BarraStyled = styled.div`
  width: 64px;
  height: 4px;
  background: ${`primaryColor`};
  margin-top: 14px;
  margin: auto;
`;
export default function Board({ team, primaryColor, secondaryColor }: IBoard) {
  return (
    <BoardStyled>
      <Typography variant="h1">{team}</Typography>
      <BarraStyled />
    </BoardStyled>
  );
}
