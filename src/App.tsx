import Board from "./Components/Board/Board";
import Forms from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import styled from "styled-components";
import { ICards } from "./types/Types";
import { useState } from "react";
import Footer from "./Components/Footer/Footer";

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
export default function App() {
  const [cards, setCards] = useState<ICards[]>([]);

  const addCard = (card: ICards) => {
    setCards([...cards, card]);
    console.log(card);
  };

  return (
    <div className="App">
      <Header />
      <Forms teams={teams} cardRegistered={(card) => addCard(card)} />
      {teams.map((team, index) => (
        <Board
          key={index}
          cards={cards}
          team={team.label}
          primaryColor={team.primaryColor}
          secondaryColor={team.secondaryColor}
        />
      ))}
      <Footer />
    </div>
  );
}
