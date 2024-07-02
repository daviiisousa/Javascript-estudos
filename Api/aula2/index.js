async function getUsers(){
    const response = await fetch('http://localhost:3000/Usuarios')
    const dados = await response.json()

    console.log(dados);
}

getUsers()

async function getUser(){

}

async function creatUser(){

    const userdados = {
        id: 555,
        nome: "kin",
        idade: 22,
        email: "ky345@tset.com"
    };

    const metodo = {
        method: 'POST',
        body: JSON.stringify(userdados)
    };

    const response = await fetch('http://localhost:3000/Usuarios', metodo);
    const dados = await response.json()
    console.log(dados)
    
}



