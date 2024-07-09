async function API(){
    const metodos ={
        method: "GET"
    };

    let resposta = document.getElementById('res');

   const response = await fetch("https://rickandmortyapi.com/api/character", metodos);
   const data = await response.json();

   console.log(data);

   const personagens = data.results;

   personagens.map((personagem) =>{
    const div = document.createElement('div');

    const id = document.createElement('p');
    id.innerText = personagem.id;

    const p = document.createElement('p');
    p.innerText = personagem.name;

    const gender = document.createElement('p')
    gender.innerText = personagem.gender;

    const imagen = document.createElement('img')
    imagen.src =personagem.image;

    const especie = document.createElement('p')
    especie.innerText = personagem.species;
   
    div.appendChild(imagen);
    div.appendChild(id);
    div.appendChild(p);
    div.appendChild(gender);
    div.appendChild(especie);
    

    resposta.appendChild(div)
   })

}

API()