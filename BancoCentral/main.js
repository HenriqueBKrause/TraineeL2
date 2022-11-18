//enviar todas as funções para o html caso queira fazer uma interface
// document.getElementById("imprimir").addEventListener("submit", printall);
// document
//   .getElementById("imprimircontratos")
//   .addEventListener("submit", printcontacts);
// document
//   .getElementById("imprimirpagamentos")
//   .addEventListener("submit", printpag);
// document
//   .getElementById("resultadoinadimpletes")
//   .addEventListener("submit", inadimplentresult);
// document.getElementById("resultadopago").addEventListener("submit", resultepag);
// document
//   .getElementById("inadimpletes")
//   .addEventListener("submit", printinadimpletes);
// document.getElementById("pagocompletp").addEventListener("submit", completepag);

//tabela de pessoas:
const pessoas = [
  {
    id: 1,
    nome: "Cristian Ghyprievy",
    contrato_id: 2,
    innadimplete: true,
    DT_completo: null,
  },
  {
    id: 2,
    nome: "Joana Cabel",
    contrato_id: 1,
    innadimplete: true,
    DT_completo: null,
  },
  {
    id: 3,
    nome: "jhon Serial",
    contrato_id: 3,
    innadimplete: true,
    DT_completo: null,
  },
  {
    id: 4,
    nome: "Micheal Seven",
    contrato_id: 2,
    innadimplete: false,
    DT_completo: 2021 - 09 - 25,
  },
];

//tabela de contratos:
const contratos = [
  { id: 1, valor: 150, parcelas: 10 },
  { id: 2, valor: 300, parcelas: 48 },
  { id: 3, valor: 550, parcelas: 24 },
  { id: 4, valor: 1000, parcelas: 12 },
];

//tabela de pagamentos:
const pagamentos = [
  { id: 1, pessoa_id: 4, DT_pagamento: 2021 - 09 - 01 },
  { id: 1, pessoa_id: 3, DT_pagamento: 2021 - 09 - 05 },
  { id: 1, pessoa_id: 1, DT_pagamento: 2021 - 09 - 19 },
  { id: 1, pessoa_id: 2, DT_pagamento: 2021 - 09 - 25 },
];

//função para imprimir todas as pessoas
function imprimir() {
  console.log(pessoas);
}

//função para imprimir todos os contratos
function imprimircontratos() {
  console.log(contratos);
}

//função para imprimir todos os pagamentos
function imprimirpagamentos() {
  console.log(pagamentos);
}

//função que gera uma tabela de resultados esperados inadimpletes:
function resultadoinadimplentes() {
  const resultadoinadimplentes = inadimpletes().map((inadimpletes) => {
    return {
      nome: inadimpletes.nome,
      dia_mes: inadimpletes.dia_mes,
      valor: inadimpletes.valor,
    };
  });
  console.table(resultadoinadimplentes);
}

//função que gera uma tabela de resultados esperados pagamento completo:
function resultadopago() {
  const resultadopago = pagocompleto.map((pessoa) => {
    return {
      nome: pessoa.nome,
      dia_mes: pessoa.DT_completo,
      valor: pessoa.valor,
    };
  });
}

//função selecionar o nome, dia do mês e valor da parcela para clientes que estão inadimplentes.
function inadimpletes() {
  const inadimpletes = pessoas
    .filter((pessoa) => pessoa.innadimplete === true)
    .map((pessoa) => {
      const contrato = contratos.find(
        (contrato) => contrato.id === pessoa.contrato_id
      );
      const valor = contrato.valor / contrato.parcelas;
      const dia_mes = pessoa.DT_completo.getDate();
      return { nome: pessoa.nome, dia_mes, valor };
    });
}

//Função selecionar o nome e valor total pago de clientes com pagamento completo.
function pagocompleto() {
  const pagocompleto = pessoas
    .filter((pessoa) => pessoa.innadimplete === false)
    .map((pessoa) => {
      const contrato = contratos.find(
        (contrato) => contrato.id === pessoa.contrato_id
      );
      const valor_total = contrato.valor;
      return { nome: pessoa.nome, valor_total };
    });
}

//menu de interação com usuario

console.log("---------------Bem vindo ao Banco Central L2-------------");
console.log("\n\n1 - Clientes inadimplentes");
console.log("\n2 - Clientes com pagamento completo");
console.log("\n3 - Imprimir todas as pessoas");
console.log("\n4 - Imprimir todos os contratos");
console.log("\n5 - Imprimir todos os pagamentos");
console.log("\n0 - Sair");
const opcao = prompt("\nDigite uma opção: ");
switch (opcao) {
  case 1:
    console.log(inadimpletes);
    break;
  case 2:
    console.log(pagocompleto);
    break;
  case 3:
    console.log(pessoas);
    break;
  case 4:
    console.log(contratos);
    break;
  case 5:
    console.log(pagamentos);
    break;

  case 0:
    console.log("Saindo...");
    system("exit");
    break;
  default:
    console.log("Opção inválida!");
    break;
}
