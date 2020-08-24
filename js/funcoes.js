function carregarConteudo() {
  var square = document.querySelector('#resultMessage');

  square.innerHTML = 'Conteúdo carregado dinâmicamente';
}

document.querySelector('#btnCarregar').onclick = function (e) {
  e.preventDefault();

  carregarConteudo();
};
