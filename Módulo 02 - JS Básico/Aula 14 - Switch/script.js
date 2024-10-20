//Switch - condicional

function pedir(){
    var valor = prompt("Digite um valor: ");

    switch (Number (valor)) {
        case 1:
            alert("Você escolheu suco!");
            break;
        case 2: 
            alert("Você escolheu água.");
            break;
        case 3: 
            alert("Chamou o garçon");
            break
        default:
        alert("Escolha uma opção disponivel!")
            break;
    }
}