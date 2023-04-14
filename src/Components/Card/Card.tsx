import { Typography } from "@mui/material";
import { ICards } from "../../types/Types";
import { CardStyled, IconStyled, HeaderStyled } from "./styled";

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
