import styled from "styled-components";
import { IBoardProps } from "./types";

export const BoardStyled = styled.section<IBoardProps>`
  background-color: ${(props) => props.secondaryColor};
  text-align: center;
  padding: 40px;
`;
export const BarraStyled = styled.div<IBoardProps>`
  width: 32px;
  height: 4px;
  background: ${(props) => props.primaryColor};
  margin: 12px auto;
`;
export const DivCardStyled = styled.div`
  display: flex;
  gap: 24px;
`;
