// Digamos que o número de chinchilas de uma fazenda triplica a cada
// ano, após o primeiro ano. Elaborar um programa que leia o número inicial
// de chinchilas e anos e informe ano a ano o número médio previsto de
// chinchilas da fazenda. O número inicial de chinchilas deve ser maior ou
// igual a 2 (um casal). A Figura 5.16 exibe a página com um exemplo de
// saída do programa

const form = document.querySelector('form')
const campo = document.getElementById('campo')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    let quantidadeDeChinchilas = Number(form.chinchilas.value)
    const ano = Number(form.quantidade.value)

    console.log(quantidadeDeChinchilas)

    campo.innerText = ``

    for(let i = 1; i <= ano; i++){
        campo.innerText += `\n ${i}ano ${quantidadeDeChinchilas} chinchilas`
        quantidadeDeChinchilas = quantidadeDeChinchilas * 3
    }
})