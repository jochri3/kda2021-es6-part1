const nom = "Jopo";
const prenom = "Ndjondjo";
const age = 17;

//Avant ES6
const personne = {
  nom: nom,
  prenom: prenom,
  age: age,
  getNomComplet: function () {
    return `${this.prenom} ${this.nom}`;
  },
};

//Avec ES6
const personne = {
  nom,
  prenom,
  age,
  getNomComplet() {
    return `${this.prenom} ${this.nom}`;
  },
};

const apprenants = [
  { id: 1, nom: "Kiala", prenom: "Bellamard", pays: "Afghanistan", age: 17 },
  { id: 2, nom: "Mulanga", prenom: "Emmanuella", pays: "Singapour", age: 20 },
  { id: 5, nom: "Mulaba", prenom: "Merdie", pays: "Ethiopie", age: 12 },
  { id: 3, nom: "Musafiri", prenom: "Marcos", pays: "Colombie", age: 67 },
  { id: 4, nom: "Armache", prenom: "Kevin", pays: "Singapour", age: 34 },
  { id: 5, nom: "Kibala", prenom: "Bonard", pays: "Ethiopie", age: 15 },
];

const apprenants2 = apprenants.map(function (element) {
  const { id, nom, prenom, pays, age } = element;
  return {
    id,
    pays,
    nomComplet: `${prenom} ${nom.toUpperCase()}`,
    estMajeur: age >= 18,
  };
});
