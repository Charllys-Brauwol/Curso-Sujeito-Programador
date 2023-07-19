//Funções Anônimas

function somar(a, b){
    let total = a+b;
    return console.log(total);
}

somar(10, 20);

let subtrair = (valor1, valor2) => {
    let total = valor1-valor2;
    console.log(total);
}

subtrair(60, 25);


let numero = [1, 3, 5, 10];

numero.map((item) => {
    console.log(item);
})