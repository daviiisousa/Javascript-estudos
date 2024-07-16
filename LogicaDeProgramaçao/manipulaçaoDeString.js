//Manipulação de Strings: Escreva uma função que receba uma string e retorne a mesma string, mas com a primeira letra de cada palavra em maiúsculas.

function maiúsculas(nome){
    const primeiraLetra = nome[0].toUpperCase();
    const restoDoNome = nome.slice(1).toLowerCase();
    const nomeFormatado = primeiraLetra + restoDoNome;
    console.log(nomeFormatado);
}
maiúsculas('davi')

