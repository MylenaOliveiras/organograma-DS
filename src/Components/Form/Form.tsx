import {
  ContainedButton,
  FormWithMethods,
  Integer,
  Select,
  useMethods,
} from "@brpartners/core";
import { Typography } from "@mui/material";
import styled from "styled-components";
import Section from "../Section/Section";
import { useState } from "react";

const Form = styled.form`
  background-color: #f6f6f6;
  width: 1121px;
  height: 589px;
  margin: auto;
  box-shadow: 7px 7px 15px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5%;
  margin-top: 5%;
  padding-top: 1%;
`;

const IntegerStyled = styled(Integer)`
  width: 930px;
  height: 80px;
`;
const SelectStyled = styled(Select)`
  width: 930px;
  margin: auto;
`;
const ContainedButtonStyled = styled(ContainedButton)`
  margin-right: 73%;
  margin-top: 1%;
`;
export interface IForm {
  teams: { value: string; label: string }[];
}

function Forms({ teams }: IForm) {
  const metodos = useMethods();
  const [showForm, setShowForm] = useState(false);

  function visible() {
    setShowForm((showForm) => !showForm);
  }
  return (
    <>
      {showForm && (
        <FormWithMethods
          methods={metodos}
          as={Form}
          onSubmit={() => {
            console.log("oi");
          }}
        >
          <Typography variant="h1">
            Preencha os dados para criar o card do colaborador.
          </Typography>
          <IntegerStyled name="nome" label="Nome" />
          <IntegerStyled name="cargo" label="Cargo" />
          <IntegerStyled name="imagem" label="Imagem" />
          <div>
            <SelectStyled name="time" label="Time" options={teams} />
          </div>
          <ContainedButtonStyled>Criar Card</ContainedButtonStyled>
        </FormWithMethods>
      )}

      <Section onClick={visible} />
    </>
  );
}

export default Forms;
