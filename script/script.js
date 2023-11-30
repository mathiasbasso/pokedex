var quantidade= document.getElementById('quantidade');  

quantidade.addEventListener('keyup', ()=>{
    pegaPokemons(quantidade.value);
});

function pegaPokemons(quantidade){
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=` + quantidade)
    .then(response=> response.json())
    .then(allpokemon=>{
        var pokemons = []
        allpokemon.results.map((val) =>{
            fetch(val.url)
            .then(response => response.json())
            .then(pokemonSinge =>{
                pokemons.push({
                    nome : val.name,
                    imagem : pokemonSinge.sprites.front_default,
                });

                if(pokemons.length == quantidade){
                    var pokemonsBoxes = document.querySelector('.pokemons-boxes');

                    pokemonsBoxes.innerHTML = '';

                    pokemons.map((val) =>{
                        pokemonsBoxes.innerHTML += `
                        <div class="pokemon-box">
                            <img src="${val.imagem}">
                            <p>${val.nome}</p>
                        </div>
                        
                        `;
                    })
                }
            })
        })
    })  


}
