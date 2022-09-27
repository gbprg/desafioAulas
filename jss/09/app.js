function pagar() {
  // id do meu value, e o parseInt transformar string em numero
  qtnAlqueire = parseInt(document.getElementById("quantidade").value);
  daninha = 50.00;
  gafanhoto = 100.00;
  broca = 150.00;
  todos = 250.00;
  vlrBruto = qtnAlqueire * daninha;
  vlrBruto2 = qtnAlqueire * gafanhoto;
  vlrBruto3 = qtnAlqueire * broca;
  vlrBruto4 = qtnAlqueire * todos;

  // só vai entrar se os dois forem true 
  // o valor bruto é >= 750 ? não, pq valor bruto = 250 é menos que 750  (qtnAlqueire = 1000) x (daninha = 0.25) = (valorbruto = 250) logo isso se torna true
  // a qtnAlqueire é >= 1000 ? sim, pq o meu valor inserido no meu input é >= 1000

  if (vlrBruto >= 750.00 && qtnAlqueire >= 1000) {
    desconto10 = vlrBruto * 10 / 100;
    descontoTodos = vlrBruto4 * 10 / 100;
    descontoBro = vlrBruto3 * 10 / 100;
    descontoGaf = vlrBruto2 * 10 / 100;
    vlrDesconto = vlrBruto - desconto10;
    vlrDesconto2 = vlrBruto2 - descontoGaf;
    vlrDesconto3 = vlrBruto3 - descontoBro;
    vlrDesconto4 = vlrBruto4 - descontoTodos;
  } else {
    desconto5 = vlrBruto * 5 / 100;
    descontoGaf = vlrBruto2 * 5 / 100;
    descontoBro = vlrBruto3 * 5 / 100;
    descontoTodos = vlrBruto4 * 5 / 100;
    vlrDesconto = vlrBruto - desconto5;
    vlrDesconto2 = vlrBruto2 - descontoGaf;
    vlrDesconto3 = vlrBruto3 - descontoBro;
    vlrDesconto4 = vlrBruto4 - descontoTodos;
  }
  valueTipo = parseInt(document.getElementById("tipo").value);
  if (valueTipo == 1) {
    document.getElementById("1").innerHTML = "R$" + vlrDesconto;
    console.log("tipo1");
    console.log("valor bruto: " + vlrBruto);
  } else if (valueTipo == 2) {
    document.getElementById("2").innerHTML = "R$" + vlrDesconto2;
    console.log("tipo2");
    console.log("valor bruto: " + vlrBruto2);
  } else if (valueTipo == 3) {
    document.getElementById("3").innerHTML = "R$" + vlrDesconto3;
    console.log("tipo3");
    console.log("valor bruto: " + vlrBruto3);
  } else if (valueTipo == 4) {
    document.getElementById("4").innerHTML = "R$" + vlrDesconto4;
    console.log("tipo4");
    console.log("valor bruto: " + vlrBruto4);
  } else {
    console.log("selecione um pesticida correto");
  }
}

