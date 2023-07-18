//Operações em um Array

//MAP - Percorrer um Array
/*let lista = ["Charllys", "José", "Maria", "Lucas"];

lista.map((item, index) => {
    console.log(`Passando: ${index} está na posição ${index}`);
})*/

//reduce - reduzir array
let numeros = [5, 3, 8, 9, 7];

let total = numeros.reduce((acumulador, numero, indece, original) => {
    console.log(`Total até o momento ${acumulador}`);
    console.log(`Valor atual: ${numero}`);
    console.log(`Posição ${indece}`);
    console.log(`Array Original ${original}`);
    console.log(`============================`);

    return acumulador += numero;
})

console.log(`Total do reduce: ${total}`);