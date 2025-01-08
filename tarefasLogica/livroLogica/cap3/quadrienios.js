// Elaborar um programa para uma empresa que leia o salário e o tempo
// que um funcionário trabalha na empresa. Sabendo que a cada 4 anos
// (quadriênio) o funcionário recebe um acréscimo de 1% no salário, calcule e
// informe o número de quadriênios a que o funcionário tem direito e o salário
// final.

const form = document.querySelector('form')
const campo = document.getElementById('campo')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const salario = Number(form.salario.value)
    const tempo = form.tempo.value

    const quadriênio = Math.floor(tempo / 4) //pega a quatidade de quadrienieo vendo o tempo de 4 em 4 anos
    const acrescimo = salario * quadriênio / 100 // pega 1% do salario (Para saber 1% de um número, basta dividir o número por 100)

    campo.innerText = `Seu quadrioenio e ${quadriênio} seu salario com acrescimo: ${salario + acrescimo}`
})