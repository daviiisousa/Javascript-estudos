// Uma palavra ou frase é um palíndromo quando pode ser lida nos dois
// sentidos, como RADAR, MUSSUM, ABBA. Elaborar um programa que leia
// uma frase e informe se ela é ou não um palíndromo (converter a frase para
// caixa alta). A Figura 7.10 apresenta uma frase que é um palíndromo.

const form = document.querySelector('form')
const campo = document.getElementById('campo')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const frase = form.frase.value
    const fraseAoContrario = frase.split('').reverse().join('')

    campo.innerHTML = ``

    if(frase === fraseAoContrario){
        campo.innerHTML = `<h4>${frase.toUpperCase()} é um palidromo</h4>`
    }else{
        campo.innerHTML = `<h4>${frase.toUpperCase()} não e um palidromo</h4>`
    }

    form.reset()
})