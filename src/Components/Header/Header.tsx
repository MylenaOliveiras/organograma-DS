import styled from "styled-components";

export default function Header() {
  const ImgStyled = styled.img`
    width: 100%;
  `;
  return (
    <header>
      <ImgStyled src="./imagens/header.svg" />
    </header>
  );
}
