import {
  FormWithMethods,
  TextField,
  Select,
  useMethods,
  NextButton,
  makeSelectOptions,
  makeSnackbar,
  resetIsSubmitted,
} from "@brpartners/core";
import { Typography } from "@mui/material";
import { Form } from "./styled";
import { useEffect } from "react";
import { IForm } from "./types";
import { ICard } from "../Card/types";
import { useMutation, useQueryClient } from "react-query";
import { postTeam } from "../../api";

function Forms({ teams }: IForm) {
  const { mutate, isLoading, isSuccess } = useMutation({
    mutationFn: postTeam,
  });
  const queryClient = useQueryClient();

  const metodos = useMethods<ICard>();
  const {
    reset,
    formState: { isSubmitSuccessful },
  } = metodos;

  function onSubmit(values: ICard) {
    mutate(values, {
      onSuccess() {
        queryClient.invalidateQueries(["team"]);
      },
      onError() {
        makeSnackbar({ type: "error", title: "Error" });
        resetIsSubmitted(metodos);
      },
    });
  }
  useEffect(() => {
    if (isSubmitSuccessful && isSuccess) reset();
  }, [isSubmitSuccessful, isSuccess]);
  return (
    <>
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
          required={true}
        />
        <NextButton icon={false} color="secondary" isSubmitting={isLoading}>
          Criar card
        </NextButton>
      </FormWithMethods>
    </>
  );
}

export default Forms;
