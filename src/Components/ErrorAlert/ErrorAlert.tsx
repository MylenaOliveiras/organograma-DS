import { ImgStyled, DivStyled } from "./styled";

export default function ErrorAlert() {
  return (
    <DivStyled>
      <ImgStyled src="./imagens/errorIcon.png" />
      <h1>Sorry, something went wrong. Please contact the administrator!</h1>
    </DivStyled>
  );
}
