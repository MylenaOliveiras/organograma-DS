import {
  ContainedButton,
  FormWithMethods,
  Integer,
  Select,
  useMethods,
} from "@brpartners/core";
import { TextField, Typography } from "@mui/material";
import styled from "styled-components";
import Section from "../Section/Section";
import { useState, ChangeEvent } from "react";
import { ICards } from "../Card/Card";

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

const TextStyled = styled(TextField)`
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
  cardRegistered: (card: ICards) => void;
}

function Forms({ teams, cardRegistered }: IForm) {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");
  const [primaryColor, setPrimaryColor] = useState("");
  const metodos = useMethods();
  const [showForm, setShowForm] = useState(false);
  const onChange = (evento: ChangeEvent<HTMLInputElement>) => {
    const newValue = evento.target.value;
    return newValue;
  };

  function visible() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      {showForm && (
        <FormWithMethods
          methods={metodos}
          as={Form}
          onSubmit={(e) => {
            console.log("oi");
          }}
        >
          <Typography variant="h1">
            Preencha os dados para criar o card do colaborador.
          </Typography>
          <TextStyled name="name" label="Nome" required />
          <TextStyled name="position" label="Cargo" required />
          <TextStyled name="image" label="Imagem" required />
          <div>
            <SelectStyled
              name="time"
              label="Time"
              options={teams}
              valueCurrent={team}
            />
          </div>
          <ContainedButtonStyled>Criar Card</ContainedButtonStyled>
        </FormWithMethods>
      )}

      <Section onClick={visible} />
    </>
  );
}

export default Forms;
