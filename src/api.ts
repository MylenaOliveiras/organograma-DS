import { cardSchema, ICard } from "./Components/Card/types";

export async function getTeam() {
  const response = await fetch("/team");
  const data = await response.json();
  const parsedData = cardSchema.array().parse(data);
  return parsedData;
}
export async function postTeam(values: ICard) {
  const response = await fetch("/team", {
    method: "POST",
    body: JSON.stringify(values),
  });
  const data = await response.json();
  return data;
}
