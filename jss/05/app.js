function valorG() {
  let G = parseInt(document.getElementById("posto1").value);
  let preco = 5.29 * G;

  if (G < 25) {
    let desconto = preco * 3 / 100;
    let valorDesconto = preco - desconto;
    document.getElementById("din1").innerHTML = "R$" + valorDesconto;
  } else {
    let desconto = preco * 5 / 100;
    let valorDesconto = preco - desconto;
    document.getElementById("din1").innerHTML = "R$" + valorDesconto;
  }
}

function valorA() {
  let A = parseInt(document.getElementById("posto2").value);
  let preco = 4.29 * A;

  if (A < 25) {
    let desconto = preco * 2 / 100;
    let valorDesconto = preco - desconto;
    document.getElementById("din2").innerHTML = "R$" + valorDesconto;
  } else {
    let desconto = preco * 4 / 100;
    let valorDesconto = preco - desconto;
    document.getElementById("din2").innerHTML = "R$" + valorDesconto;
  }
}
