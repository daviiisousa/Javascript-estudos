// Escreva uma função chamada contarVogais que receba uma string como parâmetro e retorne o número de vogais presentes nessa string (considere as vogais: a, e, i, o, u, tanto maiúsculas quanto minúsculas).

// meucodigo errado

// function contarVogais(frase){
//     const fraseTamanho = frase.length
//     for(let i = 0; i < fraseTamanho; i++ ){
//       const letras = frase[i]
//       if(letras === 'a'){
//         console.log(letras)
//       }else if(letras === 'i'){
//         console.log(letras)
//       }else if(letras === 'e'){
//         console.log(letras)
//       }else if (letras === 'o'){
//         console.log(letras)
//       }else if(letras === 'u'){
//         console.log(letras)
//       }
//     }
    
// }

// contarVogais('javascript')

//codigo certo

function contarVogais(frase) {
    let contagem = 0;
    const vogais = "aeiou"; // Define as vogais
    for (let i = 0; i < frase.length; i++) {
        if (vogais.includes(frase[i].toLowerCase())) { // Verifica se a letra é uma vogal
            contagem++;
        }
    }
    return contagem;
}

console.log(contarVogais('javascript')); // Deve retornar 3
