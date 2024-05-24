let num = document.getElementById('txtnumero')
let numadd = document.getElementById('adicionados')
let res = document.getElementById('res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
  if(isNumero(num.value) && !inLista(num.value, valores)){
    valores.push(Number(num.value))
    let item = document.createElement('option')
    item.text = `Valor ${num.value} adicionado.`
    numadd.appendChild(item)
    res.innerHTML = ''
  }else{
    alert('valor invalido ou ja encontrado na lista')
  }
  num.value = ''
  num.focus()
}

function finalizar(){
    if(valores.length == 0){
        alert('adicione valores antes de finalizar')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        for(let pos in valores){
            if(valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }

        res.innerHTML = ''
        res.innerHTML += `<P>Ao todo, temos ${tot} números cadastrado.</P>`
        res.innerHTML += `<p>o maior valor foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor foi ${menor}</p>`
    }
}

