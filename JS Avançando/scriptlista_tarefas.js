let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

let tarefa = JSON.parse(localStorage.getItem("@listaTarefas")) || [];

function renderTarefas() {
    listElement.innerHTML = '';

    tarefa.map((todo) => {
        let liElement = document.createElement("li");
        let tarefaText = document.createTextNode(todo);

        let linkElement = document.createElement("a");
        linkElement.setAttribute("href", "#");

        let linkText = document.createTextNode("Excluir");
        linkElement.appendChild(linkText);

        let posicao = tarefa.indexOf(todo);

        linkElement.setAttribute("onclick", `deletarTarefa(${posicao})`);

        liElement.appendChild(tarefaText);
        liElement.appendChild(linkElement);
        listElement.appendChild(liElement);
    })
}

renderTarefas();

function adicionarTarefas() {
    if (inputElement.value === '') {
        alert('Digite alguma tarefa');
        return false;
    } else {
        let novaTarefa = inputElement.value;

        tarefa.push(novaTarefa);
        inputElement.value = '';

        renderTarefas();
        salvarDados();
    }
}

buttonElement.onclick = adicionarTarefas;

function deletarTarefa(posicao){
    tarefa.splice(posicao, 1);

    renderTarefas();
    salvarDados();
}

function salvarDados(){
    localStorage.setItem("@listaTarefas", JSON.stringify(tarefa));
}