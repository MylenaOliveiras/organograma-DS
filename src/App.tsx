import Board from "./Components/Board/Board";
import Forms from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import { ICard } from "./Components/Card/types";
import Footer from "./Components/Footer/Footer";
import { useQuery } from "react-query";
import { TopLoadingBar } from "@brpartners/core";
import { getTeam } from "./api";
import Section from "./Components/Section/Section";
import ErrorAlert from "./Components/ErrorAlert/ErrorAlert";
import { useState } from "react";

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
] as const;
export type ITeams = typeof teams;

export default function App() {
  const { data, isLoading, isError } = useQuery<ICard[]>({
    queryKey: ["team"],
    queryFn: getTeam,
  });

  const [showForm, setShowForm] = useState(false);
  function visible() {
    setShowForm((showForm) => !showForm);
  }

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
    return <ErrorAlert />;
  }

  return (
    <div className="App">
      <Header />

      {showForm && <Forms teams={teams} />}
      <Section onClick={visible} />
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
