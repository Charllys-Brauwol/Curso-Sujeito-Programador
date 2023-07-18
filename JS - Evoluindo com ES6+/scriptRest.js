//Rest Operator

/*function convidados(...nomes){
    console.log("Sejam Bem Vindos!");
    console.log(nomes);
}

convidados("Charllys", "Lucas", "Pedro");*/

function geradorNumeros(...numeros){
    console.log(numeros);

    const numeroGerado = Math.floor(Math.random() * numeros.length);
    console.log("Número gerado foi: " + numeros[numeroGerado]);
}

geradorNumeros(1, 3, 5, 9);