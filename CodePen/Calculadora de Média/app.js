function Média() {
    const NomeDoAluno = document.getElementById("name")
    let name = NomeDoAluno.value;
    parseFloat(name)
    var valorPrimeiroBimestre = document.getElementById("primeiro");
    var primeiro = valorPrimeiroBimestre.value;
    var valorDaNotaPrimeiro = parseFloat(primeiro);
    var valorSegundoBimestre = document.getElementById("segundo");
    var segundo = valorSegundoBimestre.value;
    var valorDaNotaSegundo = parseFloat(segundo);
    var valorTerceiroBimestre = document.getElementById("terceiro");
    var terceiro = valorTerceiroBimestre.value;
    var valorDaNotaTerceiro = parseFloat(terceiro);
    var valorQuartoBimestre = document.getElementById("quarto");
    var quarto = valorQuartoBimestre.value;
    var valorDaNotaQuarto = parseFloat(quarto);
  
    var valorDaMédia =
      (valorDaNotaPrimeiro +
        valorDaNotaSegundo +
        valorDaNotaTerceiro +
        valorDaNotaQuarto) /
      4;
  
    var valorTotalDasNotas =  document.getElementById("valorDaMédia");
  
    var valorDaMédia = "Aluno(a) " + (name) + ", nota final é: " + valorDaMédia;
    valorTotalDasNotas.innerHTML = valorDaMédia;
  }
  