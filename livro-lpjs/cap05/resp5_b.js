const prompt = require("prompt-sync")();

let nChinchilas = Number(prompt("N° de Chinchilas: "));
const nAnos = Number(prompt("N° de Anos: "));



console.log(`1° Ano: ${nChinchilas} Chinchilas`);
if(nChinchilas >= 2){
    for(let i = 2; i <= nAnos; i++){
        nChinchilas *= 3;
        console.log(`${i}° Ano: ${nChinchilas} Chinchilas`);
    }
} else{
    console.log("O número mínimo de Chinchilas é: 2");
}