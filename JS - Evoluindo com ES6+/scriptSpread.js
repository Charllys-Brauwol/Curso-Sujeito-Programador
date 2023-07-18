//Spread Operator

/*let primeiros = [1, 2, 3];
let numeros = [...primeiros, 4, 5, 10];

let pessoa = {
    nome: "Charllys",
    cargo: "Programador"
}

let dados = {
    ...pessoa,
    status: "Ativo", 
    cidade: "Mombaça/CE"
}

console.log(dados);*/

function novoUsuario(info){
    let dados = {
        ...info, 
        status: "Ativo", 
        codigo: "123"
    };
    console.log(dados);
}

novoUsuario({nome: "jose", sobrenome: "silva"})