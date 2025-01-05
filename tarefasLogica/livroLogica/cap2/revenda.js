// Elaborar um programa para uma revenda de veículos. O programa deve
// ler modelo e preço do veículo. Apresentar como resposta o valor da entrada
// (50%) e o saldo em 12x. A Figura 2.7 ilustra uma execução desse
// programa.

const form = document.getElementById('form')
const campo = document.getElementById('campo')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const nome = form.nomeVeiculo.value
    const preco = form.preco.value

    const valoEntrada = preco * 0.50
    const parcelado = valoEntrada / 12

    campo.innerText = `${nome} valor de entrada: ${valoEntrada} e 12x de ${parcelado}`
})