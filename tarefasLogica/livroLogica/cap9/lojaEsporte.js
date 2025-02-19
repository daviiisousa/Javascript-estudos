// a) Acrescentar no site da Loja de Esportes um contador de visitas do
// cliente ao site. Assim, na primeira visita do cliente à loja, exibir em um
// parágrafo do site a mensagem:
// Muito Bem-Vindo! Esta é a sua primeira visita ao nosso site.
// Nas próximas visitas, exibir:
// Que bom que você voltou! Esta é a sua visita de número x ao nosso site.

const campo = document.getElementById('campo');
let visitas = parseInt(localStorage.getItem('visitas')) || 0; // Garante que seja um número

window.addEventListener('load', () => {
    visitas++; // Incrementa após pegar o valor correto

    if (visitas === 1) {
        campo.innerText = "Muito Bem-Vindo! Esta é a sua primeira visita ao nosso site.";
    } else {
        campo.innerText = `Que bom que você voltou! Esta é a sua visita de número ${visitas} ao nosso site.`;
    }

    localStorage.setItem('visitas', visitas); // Atualiza o número de visitas no localStorage
});
