let noms = "Christian Lisangola";
if (noms.length > 1) {
  var a = 14;
  var b = 16;
  console.log(noms);
  console.log("Inside A : ", a);
  console.log("Inside B : ", b);
}

console.log("Outside A : ", a);
console.log("Outside B : ", b);

function direBonjour() {
  var genre = "M";
  return "Bonjour " + genre + "." + noms;
}
console.log(genre);
console.log(direBonjour());
