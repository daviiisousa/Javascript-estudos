const idade = prompt('qual sua idade?')
const idadeNum = parseInt(idade, 10);

document.getElementById('res').innerText = `sua idade é ${idade}` 

if (isNaN(idadeNum) || idadeNum <= 0) {
    alert('Digite uma idade válida');
    document.getElementById('res').innerText = 'Idade inválida';
} else if (idadeNum <= 17) {
    document.getElementById('res').innerText = `Sua idade é ${idadeNum} e você é menor de idade.`;
} else {
    document.getElementById('res').innerText = `Sua idade é ${idadeNum} e você é maior de idade.`;
}