const form = document.querySelector('form');
const campo = document.getElementById('campo')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const nomeCidade = form.nome.value

    apiClima(nomeCidade)
})

async function apiClima(city){
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},BR&appid=3da709d7b1481d16e6aece8ac4e010ee`)

        if(!response.ok){
            alert('erro na requisao');
            return
        }

        const data = await response.json()
        console.log(data)

        campo.innerHTML = `<h3>${data.name}</h3>
        <ul>
            <li>Sensação: ${(data.main.feels_like).toString().slice(0,2)}°C </li>
            <li>Clima: ${(data.main.temp).toString().slice(0,2)}°C </li>
            <li>Humidade: ${data.main.humidity}</li>     
        </ul>
        <p>Descrição do clima: ${data.weather[0].description}</p>
        `

    } catch (error) {
        console.log(error)
    }
}

