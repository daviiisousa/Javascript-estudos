// Elaborar um programa que leia o nome de uma fruta e um número. O
// programa deve repetir a exibição do nome da fruta, de acordo com o
// número informado. Utilize o “*” para separar os nomes. A Figura 5.15
// ilustra a execução do programa

const form = document.querySelector('form')
const campo = document.getElementById('campo')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const fruta = form.fruta.value
    const quantidade = Number(form.quantidade.value)

    campo.innerText = ''

    for(let i = 0; i < quantidade; i++){
        campo.innerText += ` ${fruta} *`
    }

    form.reset()
})