// Elaborar um programa para uma veterinária, que leia o peso de uma
// ração em kg e o quanto um gato consome por dia da ração, em gramas.
// Informe quantos dias irá durar a ração e o quanto sobra da ração (em
// gramas).

const form = document.querySelector('form')

const campo = document.getElementById('campo')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const peso = Number(form.peso.value)
    const consumo = Number(form.consumo.value)

    const pesoEmGramas = peso * 1000

    const duracao = Math.floor(pesoEmGramas / consumo)
    const sobra = pesoEmGramas % consumo

    campo.innerText = `${duracao}dias ${sobra}gr`
})