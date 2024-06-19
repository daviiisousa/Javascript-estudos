let email= document.getElementById('email')
let senha= document.getElementById('senha')
let res = document.getElementById('res')

function enviar(){
    res.innerHTML = `seu email é ${email.value} e sua senha é ${senha.value}`
}