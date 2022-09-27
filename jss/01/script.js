

function numberValue() {
  let valor = parseInt(document.getElementById("contador").textContent);
  let soma = valor + 1;
  document.getElementById("contador").innerHTML = soma;
}

