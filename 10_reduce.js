const tab = [3, 4, 6, 7, 8, 9, 2, 3, 4, 5, 6];

let somme = 0;

//sans reduce
for (let nombre of tab) {
  somme += nombre;
}
console.log(`Somme : ${somme}`);

//Avec reduce
const sommeNombres = tab.reduce(function (somme, element) {
  return somme + element;
}, 0);

console.log(`Somme avec reduce : ${sommeNombres}`);
