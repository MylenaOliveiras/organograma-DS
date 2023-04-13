import Board from "./Components/Board/Board";
import Forms from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import styled from "styled-components";
import { ICards } from "./Components/Card/Card";
import { useState } from "react";
import Footer from "./Components/Footer/Footer";

const teams = [
  {
    value: "Programação",
    label: "Programação",
    primaryColor: "#57C278",
    secondaryColor: "#00C86F26",
  },
  {
    value: "Front-End",
    label: "Front-End",
    primaryColor: "#82CFFA",
    secondaryColor: "#E8FFFF",
  },
  {
    value: "Data Science",
    label: "Data Science",
    primaryColor: "#A6D157",
    secondaryColor: "#E9FFE3",
  },
  {
    value: "Devops",
    label: "Devops",
    primaryColor: "#E06B69",
    secondaryColor: "#F1616526",
  },
  {
    value: "Ux e Design",
    label: "Ux e Design",
    primaryColor: "#DB6EBF",
    secondaryColor: "#DC6EBE26",
  },
  {
    value: "Mobile",
    label: "Mobile",
    primaryColor: "#FFBA05",
    secondaryColor: "#FFBA0526",
  },
  {
    value: "Inovação e Gestão",
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
          team={team.value}
          primaryColor={team.primaryColor}
          secondaryColor={team.secondaryColor}
        />
      ))}
      <Footer />
    </div>
  );
}
