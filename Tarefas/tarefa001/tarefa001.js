    
   
function somar(){
    let soma1 = document.getElementById('num1').value
    let soma2 = document.getElementById('num2').value
    let resultado = Number(soma1) + Number(soma2)
    let resposta = document.getElementById('res')
    resposta.innerHTML = `A soma de ${soma1} e ${soma2} é ${resultado} `
}

function subtrair(){
    let soma1 = document.getElementById('num1Menos').value
    let soma2 = document.getElementById('num2Menos').value
    let resultado = Number(soma1) - Number(soma2)
    let resposta = document.getElementById('menos')
    resposta.innerHTML = `A subtraçao de ${soma1} e ${soma2} é ${resultado} `
}

function multiplicar(){
    let soma1 = document.getElementById('num1Mult').value
    let soma2 = document.getElementById('num2Mult').value
    let resultado = Number(soma1) * Number(soma2)
    let resposta = document.getElementById('multiplicar')
    resposta.innerHTML = `A multiplicaçao de ${soma1} e ${soma2} é ${resultado} `
}

function dividir(){
    let soma1 = document.getElementById('num1Div').value
    let soma2 = document.getElementById('num2Div').value
    let resultado = Number(soma1) / Number(soma2)
    let resposta = document.getElementById('divisao')
    resposta.innerHTML = `A divisao de ${soma1} e ${soma2} é ${resultado} `
}