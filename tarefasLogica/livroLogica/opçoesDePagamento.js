// Elaborar um programa para uma loja, o qual leia o preço de um produto
// e informe as opções de pagamento da loja. Calcule e informe o valor para
// pagamento à vista com 10% de desconto e o valor em 3x.
// Exemplo:
// Preço R$: 60.00
// À Vista R$: 54.00
// // Ou 3x de R$: 20.00

const preco = 60
const aVista = preco - (preco * 0.10) // pego os 10% de preco de diminuo no propio preco
const parcelado = preco / 3 // divido o preco pela quantidade de parcela

console.log(aVista, parcelado)
