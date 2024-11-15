const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

const soloNomi = [];
people.forEach((curName)=>{
const {name} = curName;
soloNomi.push(curName.name)

})
console.log(soloNomi);