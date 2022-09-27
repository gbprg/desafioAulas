var valorLido
var caracter
function lerLetra() {
  valorLido = prompt("Introduza uma letra")
  return valorLido
}

function isvogal(caracter) {
  switch (caracter) {
    case "a":
    case "A":
    case "e":
    case "E":
    case "i":
    case "I":
    case "o":
    case "O":
    case "u":
    case "U":
      return true;
    default:
      return false;
  }
}
var letra = lerLetra();
if (isvogal(letra)) {
  alert("A letra é vogal");
} else alert("A letra é consoante");





