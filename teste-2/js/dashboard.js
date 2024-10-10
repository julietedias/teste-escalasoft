const dadosVendas = [
  { mes: "Janeiro", quantidade: 1500 },
  { mes: "Fevereiro", quantidade: 1200 },
  { mes: "Março", quantidade: 1800 },
  { mes: "Abril", quantidade: 800 },
  { mes: "Maio", quantidade: 2400 },
  { mes: "Junho", quantidade: 2000 },
];

let grafico;

function dashboardVendas(meses, quantidadeVendas) {
  const canvasContext = document.getElementById("dashboardVendas");

  if (grafico) {
    grafico.destroy();
  }

  grafico = new Chart(canvasContext, {
    type: "bar",
    data: {
      labels: meses,
      datasets: [
        {
          label: "Quantidade de vendas",
          data: quantidadeVendas,
          borderWidth: 3,
          backgroundColor: "rgba(0, 124, 196, 0.5)",
          borderColor: "rgb(0, 124, 196)",
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

function vendasMensais() {
  const meses = dadosVendas.map((item) => item.mes);
  const quantidadeVendas = dadosVendas.map((item) => item.quantidade);

  dashboardVendas(meses, quantidadeVendas);
}

function vendasTrimestrais() {
  const trimestres = ["1º trimestre", "2º trimestre"];
  const quantidadeVendasTrimestrais = somaVendas(3);

  dashboardVendas(trimestres, quantidadeVendasTrimestrais);
}

function vendasSemestrais() {
  const semestre = ["1º semestre"];
  const quantidadeVendasSemestrais = somaVendas(6);

  dashboardVendas(semestre, quantidadeVendasSemestrais);
}

function somaVendas(periodo) {
  const soma = [];
  for (let i = 0; i < dadosVendas.length; i += periodo) {
    const total = dadosVendas
      .slice(i, i + periodo)
      .reduce((acc, item) => acc + item.quantidade, 0);

    soma.push(total);
  }

  return soma;
}

function periodoSelecionado() {
  const periodoSelecionado = document.getElementById("periodoVendas").value;

  switch (periodoSelecionado) {
    case "MENSAL":
      vendasMensais();
      break;
    case "TRIMESTRAL":
      vendasTrimestrais();
      break;
    case "SEMESTRAL":
      vendasSemestrais();
      break;
    default:
      vendasMensais();
      break;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  vendasMensais();
});
