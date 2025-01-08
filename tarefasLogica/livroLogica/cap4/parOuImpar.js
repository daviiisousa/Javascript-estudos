// Elaborar um programa que leia um número. Informe se ele é par ou
// ímpar. Faça com o if... else... tradicional e, após, tente criar a condição
// com o operador ternário. A Figura 4.7 ilustra a tela de execução do
// programa. Para os exercícios, foi utilizada uma figura padrão, mas você
// pode substituí-la caso tenha interesse.

const form = document.querySelector('form')
const campo = document.getElementById('campo')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const numero = form.numero.value

    // if(numero % 2 === 0){
    //     campo.innerText = `${numero} é par`
    // }else{
    //     campo.innerText = `${numero} é impar`
    // }

    numero % 2 === 0 ?  campo.innerText = `${numero} é par` : campo.innerText = `${numero} é impar`
})