// Objeto
console.log('Testando objetos');

let pessoa;

pessoa = {
  nome: 'Fulano',
  idade: 18,
  ativo: true,
};

console.log("Objeto pessoa", pessoa);

pessoa.idade = 20;

console.log("Alterando a idade", pessoa);

pessoa['idade'] = 22;

console.log('Alterando a idade', pessoa);

pessoa['peso'] = 78;

console.log('Alterando a idade', pessoa);

pessoa = { ...pessoa, peso: 80, altura: 178 };

console.log('Alterando peso e altura', pessoa);

// Array
console.log('Testando arrays');

let numeros = [1, 2, null];

console.log("Array de 3 posições", numeros);

numeros.push(3);

console.log('Array de 4 posições', numeros);

numeros = [...numeros, 4, 5];

console.log("Array de 6 posições", , numeros);

let animais = ['Cachorro', 'Vaca', 'Pocotó'];

console.log("Array de 3 animais", , animais);

let pessoas = [pessoa];

console.log('Array de pessoas', pessoas);
