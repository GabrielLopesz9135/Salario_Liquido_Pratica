const prompt = require('prompt-sync')();

nome = String(prompt("Digite seu Nome: "));
salario_bruto = parseInt(prompt("Digite seu salario Bruto:"));
var ir = salario_bruto * 0.10;
var salario_liquido = salario_bruto - ir;
console.log("O salario liquido é igual a: ", salario_liquido);
