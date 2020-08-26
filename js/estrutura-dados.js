// Objeto
console.log('Testando objetos');

let pessoa;

pessoa = {
  nome: 'Fulano',
  idade: 18,
  ativo: true,
};

console.log(pessoa);

pessoa.idade = 20;

console.log(pessoa);

pessoa['idade'] = 22;

console.log(pessoa);

pessoa['peso'] = 78;

console.log(pessoa);

pessoa = { ...pessoa, peso: 80, altura: 178 };

console.log(pessoa);

// Array
console.log('Testando arrays');

let numeros = [1, 2, null];

console.log(numeros);

numeros.push(3);

console.log(numeros);

numeros = [...numeros, 4, 5];

console.log(numeros);

let animais = ['Cachorro', 'Vaca', 'Pocotó'];

console.log(animais);

let pessoas = [pessoa];

console.log(pessoas);
