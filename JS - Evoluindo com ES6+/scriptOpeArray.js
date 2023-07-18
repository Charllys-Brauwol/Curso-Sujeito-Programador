//Operações em um Array

//MAP - Percorrer um Array
/*let lista = ["Charllys", "José", "Maria", "Lucas"];

lista.map((item, index) => {
    console.log(`Passando: ${index} está na posição ${index}`);
})*/

//REDUCE - reduzir array
/*let numeros = [5, 3, 8, 9, 7];

let total = numeros.reduce((acumulador, numero, indece, original) => {
    console.log(`Total até o momento ${acumulador}`);
    console.log(`Valor atual: ${numero}`);
    console.log(`Posição ${indece}`);
    console.log(`Array Original ${original}`);
    console.log(`============================`);

    return acumulador += numero;
})

console.log(`Total do reduce: ${total}`);*/

//FIND - Busca no array, devolve o primeiro item que ele encontrar
/*let lista = [5, "Charllys", 65, "Carlos"];

let busca = lista.find((item) => {
    if(item === "Charllys"){
        return console.log(`Item encontrado: ${item}`);
    }
})*/

//FILTER - filtrar algo do array, devolve tudo que encontrar
let nomes = ["Charllys", "Ana", "Luis", "Carlos"];

let resultado = nomes.filter((item) => {
    return item.length <= 4 || item === "Charllys";
})

console.log(resultado);