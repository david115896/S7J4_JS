//2.4. Creusons-nous la tête
//2.4.2. Acné-Bot



function isUpper(answer){
    let result = "";
    for (let letter of answer) {
        if (letter === letter.toLowerCase() && (/[a-z]/).test(answer) ){
            result = false;
            break;
            }
        else {
            result = true;
        }
    };  
    return result;
};



console.log("Bienvenue sur mon chat-bot fou ?");

while(true) {
    let answer = "";
    answer = prompt("Que souhaites tu dire au bot ?");

        if (answer.endsWith("?")) {
            //Si on lui pose une question (= la phrase finie par "?"), le bot répond "Ouais Ouais..." ;
            console.log("Ouais Ouais...");
        } 
        else if (isUpper(answer)){
            //Si on lui hurle trop dessus (= la phrase est 100% en majuscules), le bot répond "Pwa, calme-toi..." ;
            console.log("Pwa, calme-toi...");
        }
        else if (answer.includes("Fortnite")){
            //Si la phrase que tu prononces contient le mot "Fortnite", le bot répond "on s' fait une partie soum-soum ?" ;
            console.log("on s' fait une partie soum-soum ?");
        }
        else if (answer === "" ){
            //Si on lui envoie un message vide, le bot répond "t'es en PLS ?" ;
            console.log("t'es en PLS ?");
        }
        else {
            console.log("balek");
        }
};
