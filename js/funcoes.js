function carregarConteudo(conteudo) {
  var square = document.querySelector("#resultMessage");

  square.innerHTML = conteudo;
}

document.querySelector("#btnCarregar").onclick = function (e) {
  e.preventDefault();

  carregarConteudo("Conteúdo carregado dinâmicamente por parâmetro");
};
