//Template Strings: facilita a escrita com variáveis, ou concatenação

let nome = "Charllys";
let sobrenome = "Brauwol";
let idade = 30;

//Passa disso:
//let mensagem = "Meu nome é " + nome + " " + sobrenome + " e tenho " + idade + " anos";
//console.log(mensagem);


//Para isso:
let mensagem = `Meu nome é ${nome} ${sobrenome} e tenho ${idade} anos`;
console.log(mensagem);