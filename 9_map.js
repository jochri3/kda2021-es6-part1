const nombres = [2, 5, 6, 3, 2, 8, 9, 12, 34, 56, 4, 67];

// const nombresAuCarre = [];

// for (let i = 0; i < nombres.length; i++) {
//   nombresAuCarre.push(nombres[i] ** 2);
// }

// console.log(nombresAuCarre);

const nombresAuCarre = nombres.map(function (element) {
  return element ** 2;
});

//Arrow
const nombresAuCarre2 = nombres.map((element) => element ** 2);

console.log(nombresAuCarre);

const apprenants = [
  { id: 1, nom: "Kiala", prenom: "Bellamard", pays: "Afghanistan", age: 17 },
  { id: 2, nom: "Mulanga", prenom: "Emmanuella", pays: "Singapour", age: 20 },
  { id: 5, nom: "Mulaba", prenom: "Merdie", pays: "Ethiopie", age: 12 },
  { id: 3, nom: "Musafiri", prenom: "Marcos", pays: "Colombie", age: 67 },
  { id: 4, nom: "Armache", prenom: "Kevin", pays: "Singapour", age: 34 },
  { id: 5, nom: "Kibala", prenom: "Bonard", pays: "Ethiopie", age: 15 },
];

const apprenants2 = apprenants.map(function (element) {
  return {
    matricule: element.id,
    nomComplet: `${element.prenom} ${element.nom.toUpperCase()}`,
    estMajeur: element.age >= 18,
  };
});

//Avec arrow function
const apprenants3 = apprenants.map((element) => ({
  matricule: element.id,
  nomComplet: `${element.prenom} ${element.nom.toUpperCase()}`,
  estMajeur: element.age >= 18,
}));

console.log(apprenants2);
