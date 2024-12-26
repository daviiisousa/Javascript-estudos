// Escreva uma função chamada segundoMaior que receba um array de números como parâmetro e retorne o segundo maior número no array.

function segundoMaior(array){
    const numeroOrganizado = array.sort()
    let maiorNumeroDoArray = numeroOrganizado.slice(-1)
    array.filter(numero => {
        if(numero < maiorNumeroDoArray && numero > array. length){
            console.log(numero)
        }
    } )
}

segundoMaior([1, 5, 8, 1, 9])