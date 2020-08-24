document.querySelector('#btnCarregar').onclick = function (e) {
  e.preventDefault();

  var square = document.querySelector('#resultMessage');

  square.innerHTML = 'Conteúdo carregado dinâmicamente';
};
