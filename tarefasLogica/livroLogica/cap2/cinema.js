// Elaborar um programa para um Cinema, que leia o título e a duração de
// um filme em minutos. Exiba o título do filme e converta a duração para
// horas e minutos

const form = document.getElementById('form')
const campo = document.getElementById('teste')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const nomeFilme = form.nomeFilme.value
    const tempoFilme = Number(form.minFilme.value)


    const hora = Math.floor(tempoFilme / 60)
    const min = tempoFilme % 60

    campo.innerText = `O filme ${nomeFilme} tem ${hora} hotra ${min} minutos`
})