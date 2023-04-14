import styled from "styled-components";
import { Theme } from "@brpartners/core";
export const Form = styled.form`
  background-color: #f6f6f6;
  max-width: 1024px;
  padding: 36px 64px;
  box-shadow: 7px 7px 15px rgba(0, 0, 0, 0.08);
  border-radius: 24px;
  margin: auto;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  gap: ${Theme.spacing(8)};
`;
