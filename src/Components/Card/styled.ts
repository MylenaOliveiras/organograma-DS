import { ICardProps } from "./types";
import styled from "styled-components";
export const HeaderStyled = styled.header<ICardProps>`
  height: 91px;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  margin-bottom: -56px;
  background-color: ${(props) => props.primaryColor};
`;
export const CardStyled = styled.div`
  width: 262px;
  background-color: white;
  border-radius: 12px;
  min-width: min-content;
  padding-bottom: 16px;
`;
export const IconStyled = styled.img`
  width: 120px;
  border-radius: 50%;
  margin: auto;
`;
