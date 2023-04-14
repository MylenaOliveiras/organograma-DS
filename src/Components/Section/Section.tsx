import {
  SectionStyled,
  BarraStyled,
  DivStyled,
  ButtonStyled,
  TypographyStyled,
  IconStyled,
  MainStyled,
} from "./styled";
import { ISection } from "../../types/Types";

export default function Section({ onClick }: ISection) {
  return (
    <SectionStyled>
      <MainStyled>
        <TypographyStyled variant="h1">Minha Organização:</TypographyStyled>
        <BarraStyled />
      </MainStyled>
      <DivStyled>
        <ButtonStyled onClick={onClick}>
          <IconStyled name="PlusCircle" />
        </ButtonStyled>
      </DivStyled>
    </SectionStyled>
  );
}
