const prompt = require("prompt-sync")();

const num = Number(prompt("Número: "));

let divisores = 1;
let soma = 1;
let isPerfect;

for(let i = 2; i <= num/2; i++){
    if(num % i == 0){
        divisores += `, ${i}`;
        soma += i
    }
}

if(soma == num){
    isPerfect = `${num} é um Número Perfeito`;
} else {
    isPerfect = `${num} não é um Número Perfeito`
}

console.log(`Divisores do ${num}: ${divisores} (Soma: ${soma})`);
console.log(isPerfect);


