function calcIdade() {
  let anos = parseInt(document.getElementById("idade").value);
  let calcular = 365 * anos;
  document.getElementById("resultado").innerHTML = calcular;
}