// var repeticoes = 5;

// for (var i = 1; i <= repeticoes; i++) {
//   console.log('Repetindo pela ' + i + 'º vez');
// }

// var repeticoes = 5;
// var i = 0;

// while (i <= repeticoes) {
//   console.log('Repetindo pela ' + i + 'º vez');
//   i++;
// }

// var repeticoes = 5;
// var i = 0;

// while (i <= repeticoes) {
//   console.log('Repetindo pela ' + i + 'º vez');

//   if (i == 4) {
//     break;
//   }

//   i++;
// }

// var repeticoes = 5;
// var i = 0;

// while (i <= repeticoes) {
//   i++;

//   if (i == 2) {
//     continue;
//   }

//   console.log('Repetindo pela ' + i + 'º vez');
// }

// var carros = [
//   {
//     modelo: 'Cruze',
//     ano: 2012,
//   },
//   {
//     modelo: 'Fusca',
//     ano: 1987,
//   },
// ];

// for (let carro of carros) {
//   console.log(carro);
// }

var carros = [
  {
    modelo: 'Cruze',
    ano: 2012,
    vendido: false,
  },
  {
    modelo: 'Fusca',
    ano: 1987,
    vendido: false,
  },
];

for (let index in carros) {
  console.log(index, carros[index]);
  //   let carro = carros[index];
  //   carros[index] = carro;
  carros[index]['vendido'] = true;
}

console.log(carros);
