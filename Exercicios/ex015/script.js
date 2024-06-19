function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('sexradio')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'homen'
            if ( idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'fotos/menino-criança.jpg')
            } else if(idade < 21){
                //jovem
                img.setAttribute('src', 'fotos/homen-adolescente.jpg')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'fotos/homen-adulto.jpg')
            } else{
                //idoso
                img.setAttribute('src', 'fotos/idoso.jpg')
            }
        } else if (fsex[1].checked){
            genero = 'mulher'
            if ( idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'fotos/menina-criança.jpg')
            } else if(idade < 21){
                //jovem
                img.setAttribute('src', 'fotos/mulher-adolescente (1).jpg')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'fotos/mulher-adulta.jpg')
            } else{
                //idoso
                img.setAttribute('src', 'fotos/idosa.jpg')
            }
        }
        res.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}