// Você deve desenvolver um programa de criptografia para transmitir
// mensagens entre amigos. O programa deve ler uma mensagem e, em
// seguida, exibi-la criptografada. A criptografia consiste em: a) exibir todas
// as letras das posições pares da mensagem; b) exibir todas as letras das
// posições ímpares da mensagem. A Figura 7.9 exibe a mensagem
// criptografada. O programa deve conter ainda um botão para
// decriptografar a mensagem, ou seja, retornar a mensagem original a partir
// do texto cifrado.

const form = document.querySelector("form");
const campo = document.getElementById("campo");
const btnDescriptografar = document.getElementById('btnDescriptografar')

let mensagemCriptografadaPares = '';
let mensagemCriptografadaImpar = ''
let mensagemCriptografada = ''

let mensagemDescriptografadaImpar = ''
let mensagemDescriptografadaPares = ''
let mensagemDescriptografada = ''

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const mensagem = form.mensagem.value;

  for (let i = 0; i < mensagem.length; i++) {
    if (i % 2 !== 0) {
        mensagemCriptografadaPares += mensagem[i]
    } else {
        mensagemCriptografadaImpar += mensagem[i]
    }
  }

  mensagemCriptografada = mensagemCriptografadaPares + mensagemCriptografadaImpar
  campo.innerHTML = `<h4> ${mensagemCriptografada} </h4>` 

  form.reset();
});

btnDescriptografar.addEventListener('click', () => {
    for(let i = 0; i < mensagemCriptografada.length; i++){
        if(i % 2 === 0){
            mensagemDescriptografadaImpar += mensagemCriptografada[i]
        }else{
            mensagemDescriptografadaPares += mensagemCriptografada[i]
        }
        mensagemDescriptografada = mensagemDescriptografadaImpar + mensagemDescriptografadaPares
        
    }
  campo.innerHTML = `<h4> ${mensagemDescriptografada} </h4>` 

})