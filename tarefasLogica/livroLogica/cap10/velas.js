// a) Criar dez imagens de números (de 0 a 9) como se fossem velas de
// aniversário e salvá-las na pasta img. Em seguida, elaborar um programa
// que leia uma idade e insira as imagens correspondentes na página
// conforme o número informado. O programa deve permitir idades entre 1 e
// 120 anos. A Figura 10.9 exibe a página com um exemplo de velas inseridas
// pelo programa

const form = document.querySelector('form');
const campo = document.getElementById('campo');

form.addEventListener('submit', (e) => {
    e.preventDefault()
    campo.innerHTML = ''

    const idade = form.idade.value;
    if(idade < 1 || idade > 120){
        alert('idade nao permitida')
        return
    }

    const img = document.createElement('img')
    const img2 = document.createElement('img')
    const img3 = document.createElement('img')

    img.classList.add('idade')
    img2.classList.add('idade')
    img3.classList.add('idade')

    img.alt = `idade ${idade}`
    img2.alt = `idade ${idade}`
    img3.alt = `idade ${idade}`

    if(idade <= 9){
        img.src = `./img/${idade}.png`
        campo.appendChild(img)
    }else if (idade <= 99){
        img.src = `./img/${idade[0]}.png`
        img2.src = `./img/${idade[1]}.png`
        campo.appendChild(img)
        campo.appendChild(img2)
    }else if (idade <= 120){
        img.src = `./img/${idade[0]}.png`
        img2.src = `./img/${idade[1]}.png`
        img3.src = `./img/${idade[2]}.png`
        campo.appendChild(img)
        campo.appendChild(img2)
        campo.appendChild(img3)
    }
})