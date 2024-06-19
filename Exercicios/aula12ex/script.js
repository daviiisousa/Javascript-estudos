function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagen')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Sao exatamente ${hora} horas`
    if (hora >= 0 && hora < 12 ) {
        img.src = 'foto-dia.png.jpg'
        document.body.style.background = '#109ac8'
    } else if (hora >= 12 && hora < 18){
        img.src = 'foto-tarde.png.jpg'
        document.body.style.background = '#c83510'
    }else{
        img.src = 'foto-noite.png.jpg'
        document.body.style.background = '#8810c8'
    }
}
