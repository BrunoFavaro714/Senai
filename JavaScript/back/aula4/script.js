var afazer = document.querySelector(".todo");

fetch("https://jsonplaceholder.typicode.com/todos")
.then((response) => {
    return response.json();
})
.then((data) => {
    data.forEach(todo => {
       let novoAfazer =  afazer.cloneNode(true);

       novoAfazer.classList.remove("modelo");

       novoAfazer.querySelector("#userId").value = todo.userId;
       novoAfazer.querySelector("#check").checked = todo.completed;
       novoAfazer.querySelector("#todoName").innerHTML = todo.title;
       novoAfazer.querySelector("#todoId").value = todo.id;

       document.querySelector(".todos").appendChild(novoAfazer);
    });
});