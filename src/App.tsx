import Board from "./Components/Board/Board";
import Forms from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import styled from "styled-components";
import { ICard } from "./Components/Card/types";
import { useState } from "react";
import Footer from "./Components/Footer/Footer";
import { useMutation, useQueries, useQuery, useQueryClient } from "react-query";
import { TopLoadingBar } from "@brpartners/core";
import { IFieldValues } from "./Components/Form/types";

const teams = [
  {
    label: "Programação",
    primaryColor: "#57C278",
    secondaryColor: "#00C86F26",
  },
  { label: "Front-End", primaryColor: "#82CFFA", secondaryColor: "#E8FFFF" },
  {
    label: "Data Science",
    primaryColor: "#A6D157",
    secondaryColor: "#E9FFE3",
  },
  { label: "Devops", primaryColor: "#E06B69", secondaryColor: "#F1616526" },
  {
    label: "Ux e Design",
    primaryColor: "#DB6EBF",
    secondaryColor: "#DC6EBE26",
  },
  {
    label: "Mobile",
    primaryColor: "#FFBA05",
    secondaryColor: "#FFBA0526",
  },
  {
    label: "Inovação e Gestão",
    primaryColor: "#FF8A29",
    secondaryColor: "#FF8C2A26",
  },
];

async function getTeam() {
  const response = await fetch("/team");
  const data = await response.json();
  return data;
}
async function postTeam(values: IFieldValues) {
  const response = await fetch("/team", {
    method: "POST",
    body: JSON.stringify(values),
  });
  const data = await response.json();
  return data;
}

export default function App() {
  const { data, isLoading, isError } = useQuery<ICard[]>({
    queryKey: ["team"],
    queryFn: getTeam,
  });

  const queryClient = useQueryClient();
  const { mutate } = useMutation({ mutationFn: postTeam });
  const addCard = (card: IFieldValues) => {
    mutate(card, {
      onSuccess() {
        queryClient.invalidateQueries(["team"]);
      },
    });
  };

  if (isLoading) {
    return (
      <TopLoadingBar
        isSubmitted={true}
        isSubmitting={true}
        onAnimationEnd={App}
      />
    );
  }
  if (isError) {
    return <h1>Error!</h1>;
  }

  console.log(data);

  return (
    <div className="App">
      <Header />
      <Forms teams={teams} cardRegistered={(data) => addCard(data)} />
      {teams.map((team, index) => (
        <Board
          key={index}
          cards={data || []}
          team={team.label}
          primaryColor={team.primaryColor}
          secondaryColor={team.secondaryColor}
        />
      ))}
      <Footer />
    </div>
  );
}
