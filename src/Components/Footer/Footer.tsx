import styled from "styled-components";

export default function Footer() {
  const ImgStyled = styled.img`
    width: 100%;
  `;

  return (
    <footer>
      <ImgStyled src="./imagens/Rodapé.svg" />
    </footer>
  );
}
