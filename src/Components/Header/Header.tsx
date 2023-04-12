import styled from "styled-components";

export default function Header() {
  const HeaderStyled = styled.header`
    background-image: url("./imagens/header.svg");
    background-repeat: no-repeat;
    background-size: cover;
    object-fit: cover;
    width: 100%;
    height: 611px;
  `;
  return <HeaderStyled />;
}
