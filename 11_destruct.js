//Objets
const personne = {
  nom: "Mulaba",
  prenom: "Merdie",
  adresse: {
    rue: "Madesu",
    numero: "45",
    ville: "Kinshasa",
  },
};

const {
  nom,
  prenom,
  adresse: { rue, numero, ville },
} = personne;

console.log(nom);
console.log(prenom);

//Tableaux
const tb = [23, 56, 78];
const [ageJean, ageJojo, agePapycho] = tb;
console.log(ageJean);
console.log(ageJojo);
console.log(agePapycho);

//swap de 2 valeurs
let a = 9;
let b = 12;
console.log("Avant swap");
console.log(a);
console.log(b);

[a, b] = [b, a];
console.log("Après swap");
console.log(a);
console.log(b);
