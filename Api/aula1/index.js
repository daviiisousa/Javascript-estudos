console.log('fetch API');
//then/catch

// fetch('https://viacep.com.br/ws/60862450/json/').then((response) =>{
//     response.json().then((dados) =>{
//         console.log(dados)
//     })
// }).catch((erro) =>{
//     console.log(erro);
// })

//async/await

async function DadosCep(){
    try{
        const response = await fetch('https://viacep.com.br/ws/60861105/json/')
        const dados = await response.json()

    console.log(dados);
    }catch (erro){
        console.log('Essa merda deu erro', erro);
    }
    
}

DadosCep()