const butao = document.querySelector("section > button")
console.log(butao);

butao.addEventListener('click', (oi) =>{
    console.log(oi);
})

const botaoAumentar = document.querySelector('button#aumentar')
const botaoDiminuir = document.querySelector('button#diminuir')

const contador = document.querySelector('h2#contador')

botaoAumentar.addEventListener('click', (event) =>{
    const valorAumentar = Number(contador.textContent)

    contador.textContent = valorAumentar + 1
})

botaoDiminuir.addEventListener('click', (event) =>{
    const valorDiminuir = Number(contador.textContent)

    contador.textContent = valorDiminuir - 1
})

contador.style.color = 'blue'

const thema = document.querySelector('#theme')
thema.style.margin = '10px 0px' 

let darkmode

window.onload = () =>{
    const modoDark = localStorage.getItem('isDark')

    darkmode = modoDark === 'true'

    const body = document.querySelector('body')

    if(darkmode){
        body.style.backgroundColor = 'black'
        body.style.color = 'white'
    }else{
        body.style.backgroundColor = 'white'
        body.style.color = 'black'
    }
}

thema.addEventListener('click', () =>{
    darkmode = !darkmode

    localStorage.setItem('isDark', darkmode )

    const body = document.querySelector('body')

    if(darkmode){
        body.style.backgroundColor = 'black'
        body.style.color = 'white'
    }else{
        body.style.backgroundColor = 'white'
        body.style.color = 'black'
    }
} )