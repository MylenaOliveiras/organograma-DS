import { Typography } from "@mui/material";
import styled from "styled-components";

const HeaderStyled = styled.header<ICardsProps>`
  height: 91px;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  margin-bottom: -56px;
  background-color: ${(props) => props.primaryColor};
`;
const CardStyled = styled.div`
  width: 262px;
  background-color: white;
  border-radius: 12px;
  min-width: min-content;
  padding-bottom: 16px;
  margin: 40px 0;
`;
const IconStyled = styled.img`
  width: 120px;
  border-radius: 50%;
  margin: auto;
`;

export interface ICards {
  name: string;
  position: string;
  image: string;
  team: string;
  primaryColor: string;
}

interface ICardsProps {
  primaryColor: string;
}

export default function ({ name, position, image, primaryColor }: ICards) {
  return (
    <CardStyled>
      <HeaderStyled primaryColor={primaryColor}></HeaderStyled>
      <IconStyled src={image} alt={name} />
      <Typography variant="h1">{name}</Typography>
      <Typography variant="body1">{position}</Typography>
    </CardStyled>
  );
}
