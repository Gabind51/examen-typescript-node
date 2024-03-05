import { readFileSync } from "fs";

type person = {
  age: number;
  taille?: number;
  height?: number;
}
function getStatistics() : { meanAge: number, meanHeight: number } {
  const persons : person[] = JSON.parse(readFileSync("./persons.json").toString());
  const totalAges : number = persons.reduce((sum, person) => sum + person.age, 0)
  const totalHeights: number = persons.reduce((sum, person) => sum + (person.height || person.taille || 0), 0)
  const meanAge: number = totalAges / persons.length
  const meanHeight: number = totalHeights / persons.length

  return {
    meanAge, meanHeight
  }
}

function displayResult() {
  console.log(getStatistics());
}
displayResult();
