import { ICardsProps } from "../../types/Types";
import styled from "styled-components";
export const HeaderStyled = styled.header<ICardsProps>`
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
  margin: 40px 0;
`;
export const IconStyled = styled.img`
  width: 120px;
  border-radius: 50%;
  margin: auto;
`;