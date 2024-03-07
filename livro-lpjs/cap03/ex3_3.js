const prompt = require("prompt-sync")();
const salario = Number(prompt("Salário R$:"));
const tempo = Number(prompt("Tempo na empresa(em anos):"));
const quadrienios = Math.floor(tempo / 4);
const salarioFinal = salario + ((quadrienios * 0.01) * salario);
console.log(`Quadriênios: ${quadrienios}`);
console.log(`Salário Final R$: ${salarioFinal.toFixed(2)}`);