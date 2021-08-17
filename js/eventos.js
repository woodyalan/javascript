document.querySelector("#btnCarregar").onclick = function () {
  var square = document.querySelector("#resultMessage");

  square.innerHTML = "Conteúdo carregado dinâmicamente por evento";
};

document.querySelector("#btnLimpar").onclick = function (e) {
  e.preventDefault();

  console.log(document.querySelector("#campoTeste").value);
  document.querySelector("#campoTeste").value = "";
};
