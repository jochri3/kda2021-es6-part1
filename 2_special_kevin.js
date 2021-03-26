var nom = "Lionel Messi";

function direEncoreBonjour() {
  var nom = "Cristiano Ronaldo";
  direBonjour();
  function direUnGrandBonjour() {
    console.log("Bonjour " + nom);
  }
  direUnGrandBonjour();
}

function direBonjour() {
  console.log("Bonjour " + nom);
}

direEncoreBonjour();
