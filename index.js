const prompt = require('prompt-sync')();

nome = String(prompt("Digite seu Nome: "));
salario_bruto = parseInt(prompt("Digite seu salario Bruto:"));
var ir = salario_bruto * 0.10;
var salario_liquido = 0;
if( salario_bruto < 1903.98){
   salario_liquido = salario_bruto * 0.95;
}
else if(salario_bruto < 2826.65){
   salario_liquido = salario_bruto * 0.925;
}
else if( salario_bruto > 2826.66){
   salario_liquido = salario_bruto * 0.85;
}
console.log("O salario liquido é igual a: ", salario_liquido);


// salário bruto (de 0,00 até 1.903,98): 5%
// salário bruto (de 1.903,99 até 2.826,65): 7,5%
// salário bruto (a partir de 2.826,66): 15%