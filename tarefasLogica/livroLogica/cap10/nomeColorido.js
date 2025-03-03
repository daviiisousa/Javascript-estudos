// b) Elaborar um programa que leia um nome e, ao clicar no botão Exibir
//  Partes do Nome, insira linhas de cabeçalho h3 na página com as partes
//  do nome em cores aleatórias. Ao clicar no botão, o programa deve verificar
//  a existência de linhas de cabeçalho h3 na página, excluindo-as se houver. A
//  Figura 10.10 contém um exemplo de execução desse programa.

const form = document.querySelector('form');
const campo = document.getElementById('campo');

function gerarCorHex() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`;
}  

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const nome = form.nome.value.trim();
    const parteNome = nome.split(' ')

    campo.innerHTML = '';
    
    parteNome.forEach((nome) => {
        const linha = document.createElement('h3');
        linha.innerText = nome
        linha.style.color = gerarCorHex()
        campo.appendChild(linha)
    })

    form.reset()
})