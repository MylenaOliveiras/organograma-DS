import { Icon } from "@brpartners/core";
import { Typography } from "@mui/material";
import styled from "styled-components";

const TypographyStyled = styled(Typography)`
  color: #6278f7;
  font-family: "Prata";
  font-weight: 400;
  font-size: 40px;
  line-height: 72px;
`;
const IconStyled = styled(Icon)`
  border-radius: 50%;
  stroke: white;
  width: 80px;
  height: 80px;
  padding-right: 2px;
`;
const ButtonStyled = styled.button`
  border-radius: 50%;
  background-color: #6278f7;
  border: none;
  height: 90px;
  margin-right: 145px;
  margin-top: -80px;
  cursor: pointer;
`;
const SectionStyled = styled.section`
  padding: 80px 0;
`;
const BarraStyled = styled.div`
  width: 64px;
  height: 4px;
  background: #6278f7;
  margin-top: 14px;
  margin: auto;
`;
const DivStyled = styled.div`
  display: flex;
  place-content: end;
`;
const MainStyled = styled.main`
  text-align: center;
`;

export interface ISection {
  onClick: () => void;
}
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
