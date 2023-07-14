//while = enquanto;

/*var x = 0;

while(x <10){
    document.write("<br> O valor de x é: " + x);
    x++;
}

// for = para

for(a = 0; a < 5; a++){
    document.write("<br> O valor de a é: " + a); 
}*/

//switch = condicional

function pedir() {
    var valor = prompt("Digite um valor de 1 a 4");

    switch (Number(valor)) {

        case 1:
            alert("Você escolheu suco");
            break;
        case 2:
            alert("Você escolheu água");
            break;
        case 3:
            alert("Você escolheu sorvete.");
            break;
        case 4:
            alert("Você chamou o garçom.");
            break;
        default:
            alert("Escolha uma opção.")
    }
}