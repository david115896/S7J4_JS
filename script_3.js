//2.2. Opérations & boucles
//2.2.2 Pyramide de Mario

let number = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?", "Nombre");
let space = ""
for(let count = 2; count <= Number(number); count++){
    space = space + " "
}

let hastag = "#"
for(let count = 1; count <= Number(number); count++){
    result = space + hastag
    console.log(`${result}`);
    hastag = hastag + "#"
    let length = space.length
    length = length-1
    space = space.substr(0,length)
}

console.log('Ma super pyramide');