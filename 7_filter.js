const apprenants = [
  { id: 1, nom: "Kiala", prenom: "Bellamard", pays: "Afghanistan" },
  { id: 2, nom: "Mulanga", prenom: "Emmanuella", pays: "Singapour" },
  { id: 5, nom: "Mulaba", prenom: "Merdie", pays: "Ethiopie" },
  { id: 3, nom: "Musafiri", prenom: "Marcos", pays: "Colombie" },
  { id: 4, nom: "Armache", prenom: "Kevin", pays: "Singapour" },
  { id: 5, nom: "Kibala", prenom: "Bonard", pays: "Ethiopie" },
];

// for (let app of apprenants) {
//   console.log(`${app.prenom} ${app.nom}`);
// }

// apprenants.forEach(function (element) {
//   console.log(`${element.prenom} ${element.nom}`);
// });
const ethiopiens = apprenants.filter(function (element) {
  return element.pays === "Ethiopie";
});

const resultatRecherche = apprenants.filter(function (element) {
  return element.nom.includes("ma") || element.prenom.includes("ma");
});

// console.log(ethiopiens);
console.log(resultatRecherche);

const nombres = [3, 55, 6, 76, 23, 43, 7, 88, 90];
const nombrePaires = nombres.filter(function (nombre) {
  return nombre % 2 === 0;
});

console.log(nombrePaires);
