var area = document.getElementById('area');

function entrar() {
    var nome = prompt("Digite seu nome: ");

    if (nome == '' || nome == null) {
        alert("Ops, algo deu errado!");
        area.innerHTML = "Clique no botão para acessar.";
    } else {
        area.innerHTML = "Bem vindo " + nome + " ";
        let botaosair = document.createElement("button");
        botaosair.innerHTML = "Sair da Conta";
        botaosair.onclick = sair;
        area.appendChild(botaosair);
    }

}

function sair() {
    alert("Até mais!");
    area.innerHTML = "Você saiu!";
}

function mediaAluno(nota1, nota2){
    var media = (nota1 + nota2)/2;

    if(media >= 7){
        console.log("Aluno aprovado: " + media);
    }else if ( media < 7){
        console.log("Aluno reprovado: " + media);
    }
}

function aluno (nome, curso){
    var mensagem = "Seja bem vindo " + nome + " ao curso de " + curso;

    console.log(mensagem);
}