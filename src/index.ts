import { readFileSync } from "fs";

type person = {
  age: number;
  taille?: number;
  height?: number;
}

function checkPersonsStructure(person: person) : boolean {
  return person.taille !== undefined || person.height !== undefined
}
function getStatistics() : { meanAge: number, meanHeight: number } | void {
  const persons : person[] = JSON.parse(readFileSync("./persons.json").toString());

  if(!persons.every(checkPersonsStructure)) {
    console.error('Les données du fichier persons.json ne sont pas correctement formatées.')
    return
  }

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
