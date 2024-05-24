

function contar(){
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var res = document.getElementById('res')
   
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('ERRO tente novamente')
    } else{
        res.innerHTML = 'contando: '
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0){
            window.alert('passo invaldado! considerando PASSO 1 ')
            p = 1
        }
        if (i < f){
            for(var c = i; c <= f; c+= p){
                res.innerHTML += `${c} para `
            }
        }else{
            for(var c = 1; c >= f; c-= p){
                res.innerHTML += `${c} para`
            }
        }

        res.innerHTML += ' fim'
    }
}