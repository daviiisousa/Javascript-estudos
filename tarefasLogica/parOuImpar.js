function parOuImpar(num){
    const resultado = num % 2
    if(resultado === 0){
        console.log('numero par')
    }else{
        console.log('numero impar')
    }
}

parOuImpar(4)