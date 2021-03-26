const nb1 = 89;
const nb2 = 6;

const somme1 = (nombre1 = 2, nombre2 = 3) => {
  return nombre1 + nombre2;
};

const somme2 = (nombre1, nombre2) => nombre1 + nombre2;

const resultat = somme1();
const resultat2 = somme1(nb1, nb2);
const resultat3 = somme1();

console.log(`Resultat :  ${resultat}`);
console.log(`Resultat2 :  ${resultat2}`);
console.log(`Resultat3 :  ${resultat3}`);

//Parametre objet

const somme3 = ({ nombre1 = 5, nombre2 = 6 }) => {
  return nombre1 + nombre2;
};

const resultat4 = somme3({ nombre2: 80 });
