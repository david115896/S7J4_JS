//2.2. Opérations & boucles
//2.2.1 Calculs rapides

let number = prompt("De quel nombre veux-tu calculer la factorielle ?", "Nombre"); 
let result = 1
for(let count = 1; count <= Number(number); count++){
    result = result * count
  }
console.log(`Le résultat est : ${result}!`);