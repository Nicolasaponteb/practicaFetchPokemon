function generateRandom(max){
    return Math.random() * max;
}

function pokemon(){
    const num = Math.round(generateRandom(898));
    const divName = document.getElementById('name');
    const divImage = document.getElementById("image");
    const divAbilities = document.getElementById("abilities");
    const list = document.getElementById("listAb")
    list.remove()

    fetch(`https://pokeapi.co/api/v2/pokemon/${num.toString()}/`)
    .then(response => response.json())
    .then(data => { 
        const list = document.createElement("ul")
        divAbilities.append(list)
        list.setAttribute("id","listAb")
        divName.innerHTML = `<h1>${data.name}</h1>`
        divImage.innerHTML = `<img src=${data.sprites.other["official-artwork"].front_default}>`
        data.abilities.forEach(element => {
            list.innerHTML += `<li>${element.ability.name}</li>`
        });
    });
}
