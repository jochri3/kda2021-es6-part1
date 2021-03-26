const noms = ["Hobed", "Pascal", "Marmus", "Yves", "Akelax"];

//Sans index
noms.forEach(function (element) {
  console.log(element);
});

//Avec index
noms.forEach(function (element, index) {
  console.log(`${index} : ${element}`);
  //   console.log(i + " : " + element);
});

//Avec 3ème parametre
noms.forEach(function (element, index, tb) {
  console.log(tb);
  //   console.log(i + " : " + element);
});
