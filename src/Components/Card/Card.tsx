import { Typography } from "@mui/material";
import { ICard } from "./types";
import { CardStyled, IconStyled, HeaderStyled } from "./styled";

export default function ({ name, position, image, primaryColor }: ICard) {
  return (
    <CardStyled>
      <HeaderStyled primaryColor={primaryColor}></HeaderStyled>
      <IconStyled src={image} alt={name} />
      <Typography variant="h1">{name}</Typography>
      <Typography variant="body1">{position}</Typography>
    </CardStyled>
  );
}
