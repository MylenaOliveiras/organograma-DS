import {
  ContainedButton,
  FormWithMethods,
  TextField,
  Select,
  useMethods,
  NextButton,
  resetIsSubmitted,
  Theme,
} from "@brpartners/core";
import { Typography } from "@mui/material";
import styled from "styled-components";
import Section from "../Section/Section";
import { useEffect, useState } from "react";
import { ICards } from "../Card/Card";

const Form = styled.form`
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

export interface IForm {
  teams: { value: string; label: string }[];
  cardRegistered: (card: ICards) => void;
}

function Forms({ teams, cardRegistered }: IForm) {
  const metodos = useMethods();
  const {
    reset,
    formState: { isSubmitted },
  } = metodos;
  const [showForm, setShowForm] = useState(false);
  useEffect(() => {
    resetIsSubmitted(metodos);
  }, [isSubmitted]);
  function visible() {
    setShowForm((showForm) => !showForm);
  }
  function onSubmit(values: any) {
    cardRegistered(values);
    reset();
  }
  return (
    <>
      {!showForm && (
        <FormWithMethods methods={metodos} as={Form} onSubmit={onSubmit}>
          <Typography color="brand02" variant="h1">
            Preencha os dados para criar o card do colaborador.
          </Typography>
          <TextField name="name" label="Nome" required />
          <TextField name="position" label="Cargo" required />
          <TextField name="image" label="Imagem" required />
          <Select name="team" label="Time" options={teams} />
          <NextButton icon={false} color="secondary">
            Criar card
          </NextButton>
        </FormWithMethods>
      )}

      <Section onClick={visible} />
    </>
  );
}

export default Forms;
