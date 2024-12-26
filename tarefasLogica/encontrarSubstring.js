// Escreva uma função chamada encontrarSubstring que receba duas strings como parâmetros: uma string maior (texto) e uma string menor (substring). A função deve verificar quantas vezes a substring aparece dentro do texto.

function encontrarSubstring(palavra, substring){

    for(n of palavra){
        if(substring === n){
            console.log(substring)
        }
    }
    
}

encontrarSubstring('banana', 'n')