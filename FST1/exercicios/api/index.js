const form = document.querySelector('form');
const campo = document.getElementById('campo');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nomeCidade = form.nome.value.trim();

    if (!nomeCidade) {
        campo.innerHTML = `<p style="color: red;">Por favor, insira o nome de uma cidade.</p>`;
        return;
    }

    apiClima(nomeCidade);
});

async function apiClima(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},BR&appid=3da709d7b1481d16e6aece8ac4e010ee`);

        if (!response.ok) {
            campo.innerHTML = `<p style="color: red;">Erro: Não foi possível encontrar a cidade "${city}".</p>`;
            return;
        }

        const data = await response.json();
        console.log(data);

        // Conversão das temperaturas
        const feelsLike = (data.main.feels_like - 273.15).toFixed(1); // Sensação térmica
        const temp = (data.main.temp - 273.15).toFixed(1); // Temperatura atual

        // Atualização do conteúdo
        campo.innerHTML = `
            <h3 class='lugar'>${data.name}</h3>
            <ul class='lista'>
                <li>Sensação térmica: <span>${feelsLike}°C</span></li>
                <li>Temperatura atual: <span>${temp}°C</span></li>
                <li>Humidade: <span>${data.main.humidity}%</span></li>
            </ul>
            <p>Descrição do clima: ${data.weather[0].description}</p>
        `;

        form.reset()
    } catch (error) {
        console.log(error);
        campo.innerHTML = `<p style="color: red;">Erro inesperado ao obter os dados climáticos. Tente novamente mais tarde.</p>`;
    }
}
