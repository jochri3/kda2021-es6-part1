const apprenants = [
  { id: 1, nom: "Kiala", prenom: "Bellamard", pays: "Afghanistan" },
  { id: 2, nom: "Mulanga", prenom: "Emmanuella", pays: "Singapour" },
  { id: 5, nom: "Mulaba", prenom: "Merdie", pays: "Ethiopie" },
  { id: 3, nom: "Musafiri", prenom: "Marcos", pays: "Colombie" },
  { id: 4, nom: "Armache", prenom: "Kevin", pays: "Singapour" },
  { id: 5, nom: "Kibala", prenom: "Bonard", pays: "Ethiopie" },
];

const resultatFind = apprenants.find(function (element) {
  return element.id === 3;
});

console.log(resultatFind);
