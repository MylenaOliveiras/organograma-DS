import {
  FormWithMethods,
  TextField,
  Select,
  useMethods,
  NextButton,
  resetIsSubmitted,
  makeSelectOptions,
} from "@brpartners/core";
import { Typography } from "@mui/material";
import { Form } from "./styled";
import Section from "../Section/Section";
import { useEffect, useState } from "react";
import { IForm } from "../../types/Types";

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
          <Typography variant="h1">
            Preencha os dados para criar o card do colaborador.
          </Typography>
          <TextField name="name" label="Nome" required />
          <TextField name="position" label="Cargo" required />
          <TextField name="image" label="Imagem" required />
          <Select
            name="team"
            label="Time"
            options={makeSelectOptions(teams.map((t) => t.label))}
          />
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
