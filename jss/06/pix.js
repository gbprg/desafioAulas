function pagar01() {
  // estou indo no id pegar o value dele
  valorTotal = parseInt(document.getElementById("setor").value);
  // definindo o valor da camisa
  preco = 25.00;
  // definindo o desconto pro pagamento a vista de 10%
  desconto = 25.00 * 10 / 100;
  // definindo o valor da camisa x id pra quantidade ex: 5 x 25 = 125
  camisaPreco = 25.00 * valorTotal;
  resultadoFinal = camisaPreco - desconto;
  // definindo o id do span  para mostrar na tela o resultado
  document.getElementById("valor").innerHTML = resultadoFinal;
}
function pagar02() {
  valorTotal = parseInt(document.getElementById("setor").value);
  preco = 25.00;
  desconto = 25 * 5 / 100;
  camisaPreco = 25.00 * valorTotal;
  resultadoFinal = camisaPreco - desconto;
  document.getElementById("valor").innerHTML = resultadoFinal;
}
function pagar03() {
  valorTotal = parseInt(document.getElementById("setor").value);
  preco = 25.00;
  semDesconto = preco * valorTotal;
  document.getElementById("valor").innerHTML = semDesconto;
}
function pagar04() {
  valorTotal = parseInt(document.getElementById("setor").value);
  preco = 25.00;
  juros = 25 * 10 / 100;
  camisaPreco = 25.00 * valorTotal;
  resultadoFinal = camisaPreco + juros;
  document.getElementById("valor").innerHTML = resultadoFinal;
}





// document.getElementById("setor1").addEventListener("click", function () {
//   variaveis()
// })


  // var pix = valorCamisa | valorCalça * 0.10;
  // var credito = valorCamisa | valorCalça * 0.05;
  // var credito2x = valorCamisa | valorCalça;
  // var credito3x = valorCamisa | valorCalça * 0.10;