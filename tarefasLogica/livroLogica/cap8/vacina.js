// Elaborar um programa para uma veterinária, o qual leia o preço de uma
// vacina e se o cliente possui ou não convênio. Caso possua algum convênio,
// exibir uma caixa de seleção com os convênios “Amigo dos Animais” e
// “Saúde Animal”. O programa deve exibir o valor do desconto (10% sem
// convênio; 20% para “Amigo dos Animais”; 50% para “Saúde Animal”) e
// o valor a ser pago. Criar a função:
// • calcularDesconto() – que receba os parâmetros valor e taxa de desconto.
// Retornar o valor do desconto.



const form = document.querySelector('form');
const campo = document.getElementById('campo');
let convenio = ''
let desconto = 0
let valorDoDesconto = 0

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const valor = +form.valor.value;
    const convenioSelecionado = document.querySelector('input[name="convenio"]:checked');
    const tipoConvenio = form.tipoConvenio.value;

    if (convenioSelecionado) convenio = convenioSelecionado.value; // "sim" ou "nao"
    

    if(convenio === 'nao' && tipoConvenio === ''){
        desconto = 10
        valorDoDesconto = calcularDesconto(valor, desconto)
    }else if (convenio === 'sim' && tipoConvenio === 'amigo'){
        desconto = 20
        valorDoDesconto = calcularDesconto(valor, desconto)
    }else if(convenio === 'sim' && tipoConvenio === 'saude'){
        desconto = 50
        valorDoDesconto = calcularDesconto(valor, desconto)
    }else{
        alert('vc nao possui convenio, desmarque o tipo de convenio')
        form.reset()
        return
    }
    
    console.log("Convênio:", convenio);
    console.log("Valor:", valor);
    console.log("Tipo de convênio:", tipoConvenio);

    campo.innerHTML = `
        <h2>Desconto: ${valorDoDesconto}</h2>
        <h2>A Pagar: ${valor - valorDoDesconto}</h2>
    `
});



function calcularDesconto(valor, taxaDeDesconto){
    const valorDesconto = valor * (taxaDeDesconto / 100); // Converte porcentagem em decimal
    const precoFinal = valor - valorDesconto; // Aplica o desconto
    return precoFinal;
}