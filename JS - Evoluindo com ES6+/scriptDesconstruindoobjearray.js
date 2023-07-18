//Objeto
let pessoa = {
    nome: "Charllys", 
    sobrenome: "Brauwol", 
    cargo: "Programador", 
    empresa: "Freela"
};

//Desconstruindo Objeto
//Cria como se fosse variáveis daquele obj
//nome: nomePessoa - renomeando váriável para não dá conflito com outras já criadas
//const {nome: nomePessoa, cargo} = pessoa;

//Array

let nomes = ["Charllys", "Pedro", "Carlos"];

//Descontruir um array
//let {0:nome_1, 2:nome_2} = nomes;
//Outra forma
let [nome_1, nome_2] = nomes;