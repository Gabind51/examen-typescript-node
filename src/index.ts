import { readFileSync } from "fs";

type person = {
  age: number;
  height: number
}
function getStatistics() : { meanAge: number, meanHeight: number } {
  const persons : person[] = JSON.parse(readFileSync("./persons.json").toString());
  return persons.reduce((max, person) => (person.age > max ? person.age : max), persons[0].age)
}

function displayResult() {
  console.log(getStatistics());
}
displayResult();
