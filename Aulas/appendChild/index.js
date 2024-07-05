//criando div
const divConteudo = document.querySelector('div#div-conteudo')

const elementDiv = document.createElement('div')
elementDiv.textContent = "Fui criado no js"
divConteudo.appendChild(elementDiv)

//criando li dentro de ul
const ulPai = document.querySelector('ul#ulPai')
const todasAsLis = document.querySelectorAll('ul > li')

const liCriada1 = document.createElement('li')
liCriada1.textContent = 'segundo item'

const liCriada2 = document.createElement('li')
liCriada2.textContent = 'terceiro item'

const liCriada3 = document.createElement('li')
liCriada3.textContent = 'quarto item'

ulPai.insertBefore(liCriada1, todasAsLis[1])
ulPai.insertBefore(liCriada2, todasAsLis[1])
ulPai.insertBefore(liCriada3, todasAsLis[1])