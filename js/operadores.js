let a = 1;

a += 1;

console.log(a);

a -= 1;

console.log(a);

a *= 2;

console.log(a);

console.log(a == 2);

console.log(a != 2);

console.log(a === '2');

console.log('Maior que 1? ' + (a > 1));

console.log('Maior ou igual 2? ' + (a >= 1));

let idade = 18;

idade++;

idade--;

console.log(idade);

console.log(true && true);

console.log(true || false);

let verdadeiro = true;

console.log(!verdadeiro);

let anosDeVida = 17;

const status = anosDeVida >= 18 ? 'Maior de Idade' : 'Menor de Idade';

console.log(status);

var decadas = [70, 80, 90];
delete decadas[0];

console.log(decadas);

var carro = {
  modelo: 'Cruze',
  marca: 'Chevrolet',
  ano: 2012,
};

delete carro.ano;

console.log(carro);
