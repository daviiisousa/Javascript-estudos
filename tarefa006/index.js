

function enviar(){
    let nome = document.getElementById('nomeAluno').value
    if (nome === "" || !/^[^\d]+$/.test(nome)) {
        alert('Digite um nome válido.');
        return
    }
    let n1 = document.getElementById('N1').value
    if(n1 > 10 || n1 < 0 || n1 == ""){
        alert('digite um numero de 0 a 10')
        return
    }
    let n2 = document.getElementById('N2').value
    if(n2 > 10 || n2 < 0 || n2 == ""){
        alert('digite um numero de 0 a 10')
        return
    }
    let n3 = document.getElementById('N3').value
    if(n3 > 10 || n3 < 0 || n3 == ""){
        alert('digite um numero de 0 a 10')
        return
    }
    let media = (Number(n1) + Number(n2) + Number(n3)) / 3
    let resposta = document.getElementById('res')
    resposta.innerHTML = `seu nome é <strong>${nome}</strong> e voce na sua primeira prova tirou <strong>${n1}</strong>, na segunda <strong>${n2}</strong> e na terceira <strong>${n3}</strong> e sua media é <strong>${media.toFixed(2)}</strong>`    
}