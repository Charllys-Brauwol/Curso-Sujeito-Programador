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