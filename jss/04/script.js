function calcKm() {
  let res = parseInt(document.getElementById("transformar").value);
  let calcular = res * 3.6;
  document.getElementById("resultado").innerHTML = calcular + "km/h";
}