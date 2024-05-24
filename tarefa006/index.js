

function enviar(){
    let nome = document.getElementById('nomeAluno')
    
    let n1 = document.getElementById('N1').value
    if(n1 > 10 || n1 < 0){
        alert('sua nota nao pode ser maior que 10 e menor que 0')
        return resposta = ''
    }
    let n2 = document.getElementById('N2').value
    if(n2 > 10 || n2 < 0){
        alert('sua nota nao pode ser maior que 10 e menor que 0')
        return resposta = ''
    }
    let n3 = document.getElementById('N3').value
    if(n3 > 10 || n3 < 0){
        alert('sua nota nao pode ser maior que 10 e menor que 0')
        return resposta = ''
    }
    let media = (Number(n1) + Number(n2) + Number(n3)) / 3
    let resposta = document.getElementById('res')
    resposta.innerHTML = `seu nome é <strong>${nome.value}</strong> e voce na sua primeira prova tirou <strong>${n1}</strong>, na segunda <strong>${n2}</strong> e na terceira <strong>${n3}</strong> e sua media é <strong>${media}</strong>`    
}