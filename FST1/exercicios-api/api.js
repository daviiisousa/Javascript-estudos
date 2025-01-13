async function getData() {
  try {
    const response = await fetch("https://api.github.com/events");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

async function getPokemon(pokemon){
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        const data = await response.json()
        console.log('Pokemon: ', data)
    } catch (error) {
        console.log(error)
    }
}

// getData();
getPokemon('pikachu')
