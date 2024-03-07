const prompt = require("prompt-sync")();
const velPermitida = Number(prompt("Velocidade permitida: "));
const velCondutor = Number(prompt("Velocidade do condutor: "));
const multa = velCondutor <= velPermitida ? "Sem Multa" : velCondutor <= velPermitida * 1.2 ? "Multa Leve" : "Multa Grave";
console.log(`Situação: ${multa}`);