
function ePalidroma(frase){
    const frasereversa = frase.split('').reverse().join('')
    if(frasereversa === frase){
        console.log(true)
    }else{
        console.log(false)
    }
}

ePalidroma('ovo')
ePalidroma('pizza')