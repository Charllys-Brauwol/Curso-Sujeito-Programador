// setInterval - executa de tempo em tempo 

function acao(){
    document.write("Executando... <br/>");
}
/* Exemplo com fução anonima
setInterval(() => {
    document.write("Executando... <br/>");
}, 1000);

Pode atrelar com uma variável para parar por exemplo:

var tempo = setInterval(() => {
    document.write("Executando... <br/>");
}, 1000);

clearInterval(tempo);
*/

// setTimeout - executa somente uma vez

setTimeout(acao, 1000);