let number = 0;

if (number) {
  console.log('O número foi informado');
}

if (number < 10) {
  console.log('É menor que 10');
} else if (number == 10) {
  console.log('É igual a 10');
} else {
  console.log('É maior que 10');
}

let numero1 = 1;
let numero2 = 1;
let operacao = 'multiplicacao';
let resultado;

switch (operacao) {
  case 'adicao':
    resultado = numero1 + numero2;
    break;
  case 'subtracao':
    resultado = numero1 - numero2;
    break;
  case 'divisao':
    resultado = numero1 / numero2;
    break;
  case 'multiplicacao':
    resultado = numero1 * numero2;
    break;
}

console.log(resultado);
