//2.4. Creusons-nous la tête
//2.4.1. Codes la vie

const codes =[
    {title: "UCU", prot: "Sérine"}, {title: "UCC", prot: "Sérine"}, {title: "UCA", prot: "Sérine"}, {title: "UCG", prot: "Sérine"}, {title: "AGU", prot: "Sérine"}, {title: "AGC", prot: "Sérine"}, 
    {title: "CCU", prot: "Proline"}, {title: "CCC", prot: "Proline"}, {title: "CCA", prot: "Proline"}, {title: "CCG", prot: "Proline"},
    {title: "UUA", prot: "Leucine"},  {title: "UUG", prot: "Leucine"},
    {title: "UUU", prot: "Phénylalanine"},  {title: "UUC", prot: "Phénylalanine"},
    {title: "CGU", prot: "Arginine"}, {title: "CGC", prot: "Arginine"}, {title: "CGA", prot: "Arginine"}, {title: "CGG", prot: "Arginine"}, {title: "AGA", prot: "Arginine"}, {title: "AGG", prot: "Arginine"}, 
    {title: "UAU", prot: "Tyrosine"},  {title: "UAC", prot: "Tyrosine"}
];

//console.log(codes);

let test1 = "CCGUCGUUGCGCUACAGC";
let test2 = "CCUCGCCGGUACUUCUCG";


function codeGenetic (test) {
    let testTampon = "";
    let result = "";

    for (let index = 0; index < test.length; index++) {
        if (index%3 == 0 && index !=0 && index!= test.length ) {
            testTampon = testTampon + `-${test[index]}`;
        } else {
            testTampon += test[index];
        }
    };

    testTampon.split("-").forEach(codon => {
        if (result != "") { result += "-"};
        codes.forEach(code => {
            if (codon === code.title ){
                result += code.prot;
            }
        });
    });
    console.log(`Voici la proteine du code genetique ${test} `);
    console.log(result);
};

codeGenetic(test1);
codeGenetic(test2);
