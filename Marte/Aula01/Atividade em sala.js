/*Exiba os animais que Carlos possui

Veiculo: Carro,
Marca: Ford
Modelo: Fiesta

Veiculo: Moto:
Marca: Honda
Modelo: Twister 250cc

Endereço: 
Carlos possui  2 filhos:
sendo 1 menino e 1 menina 
Joinviville - SC
*/

let veiculos = {
  veiculo01: {
    tipo: 'Carro',
    marca: 'Ford',
    modelo: 'Fiesta'
  },
  veiculo02: {
    tipo: 'Moto',
    marca: 'Honda',
    modelo: 'Twister 250cc'  
  },
};

let filhos = {
  filho01: {
    nome: 'Joãozinho',
    idade: 4  
  },
  filho02: {
    nome: 'maria',
    idade: 6
  }
};

let pessoa = {
  nome: 'Carlos',
  idade: 25,
  ...veiculos,
  ...filhos,
}

console.log(`${veiculos.veiculo01.tipo}`)
console.log(`${veiculos.veiculo02.tipo}`)
console.log(`${pessoa.nome}`)

/*
Criar uma fn que exibe os dados de uma pessoa: 
Se a pessoa for > 18 
0. Exibir, você pode ter CNH

Se a pessoa for  < 18
1. Exibir, você ainda não pode dirigir!

---------------------------
2. Exiba o nome 
3. Exiba a sua cidade

*/

function showDataPerson(name, age, city, status) {
  const person = { name, age, city };
  if(age >= 18 || status === true) {
    console.log(`O nome do usuário é ${person.name}, e sua idade é  ${person.age} e sua cidade natal é ${person.city} e você pode ter sua habilitação`);
  } else {
    console.log(`O nome do usuário é ${person.name}, e sua idade é  ${person.age} e sua cidade natal é ${person.city} e você não pode ter sua habilitação ainda. =( `);
  }
}

showDataPerson('Pedro', 10, 'Joinville', true);
showDataPerson('Carlos', 18, 'Joinville', false);
showDataPerson('Carlos', 10, 'Joinville', false);
