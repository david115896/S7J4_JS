//2.3. Analyses de données
//2.3.2. Bibliothécaire

const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];

console.log("Liste des livres ")
console.log(books)


//Est-ce que tous les livres ont été au moins empruntés une fois ?
console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");
Loop1: {
    for (let index = 0; index < books.length; index++) {
        if (books[index].rented === 0) {
            console.log(`Non`);
            break Loop1;
        }
    };
    console.log(`Oui`);
};

//Quel est livre le plus emprunté ?
console.log("Quel est le livre le plus emprunte ? ")
let arrayBooksRented = []
books.forEach(book => {
    arrayBooksRented.push(`${book.rented}`)
});

let max = Math.max(...arrayBooksRented) 

for (let index = 0; index < books.length; index++) {
    if (books[index].rented === max) {
        console.log(`Le livre le plus emprunte est : ${books[index].title}`);
        break;
    }
};

//Quel est le livre le moins emprunté ?
console.log("Quel est le livre le moins emprunte ? ")
let min = Math.min(...arrayBooksRented) 

for (let index = 0; index < books.length; index++) {
    if (books[index].rented === min) {
        console.log(`Le livre le moins emprunte est : ${books[index].title}`);
        break;
    }
};

//Trouve le livre avec l'ID: 873495 ;
console.log("Trouve le livre avec l'ID: 133712")

for (let index = 0; index < books.length; index++) {
    if (books[index].id === 873495) {
        console.log(`Le livre avec l'ID 873495 est : ${books[index].title}`);
        break;
    }
};

//Supprime le livre avec l'ID: 133712 ;
console.log("Liste des livres sans l'ID: 133712)")

let arrayBooksWithout133712 = []
books.forEach(book => {
    if (book.id != 133712 ) {
    arrayBooksWithout133712.push(book)
    } else {
        console.log(`Le livre ${book.title} avec l'ID 133712 a ete retire de la liste`);
    }
});

console.log(arrayBooksWithout133712);

//Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).
console.log("Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé)")

let arrayBooksWithout133712Title = []
arrayBooksWithout133712.forEach(book => {
    arrayBooksWithout133712Title.push(book.title)
});

arrayBooksWithout133712Title = arrayBooksWithout133712Title.sort()

let arrayBooksWithout133712Alpha = []

for (let index = 0; index < books.length; index++) {
    arrayBooksWithout133712.forEach(book => {
        if (book.title === arrayBooksWithout133712Title[index]) {
            arrayBooksWithout133712Alpha.push(book)
        }
    });
}

console.log(arrayBooksWithout133712Alpha)