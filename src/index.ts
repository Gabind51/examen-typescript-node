import { readFileSync } from "fs";

type person = {
  age: number;
  height: number
}
function getStatistics() : number {
  const persons : person[] = JSON.parse(readFileSync("./persons.json").toString());
}

function displayResult() {
  console.log(getStatistics());
}
displayResult();
