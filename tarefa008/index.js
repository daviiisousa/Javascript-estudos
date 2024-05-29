

function transformar(){
    let cel = document.getElementById('c').value
    if(cel === ""){
        alert('digite um numero')
        return resposta = ''
    }
    let fah = document.getElementById('f').value
    fah = (9 * cel + 160) / 5
    let resposta = document.getElementById('res')
    resposta.innerHTML = `<h4>${cel}º celsius em Fahrenheit fica ${fah}º</h4>`
}