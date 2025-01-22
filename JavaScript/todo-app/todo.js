const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const addButton = document.getElementById("addButton")

function loadTodos() {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.forEach(todo => {
      createTodoElement(todo);
    });
  }

function createTodoElement(todoText) {
    const li = document.createElement("li");
    li.textContent = todoText;
  
  
    li.addEventListener("click", function() {
      li.classList.toggle("completed");
      updateLocalStorage();
    });
  
    todoList.appendChild(li);
}

addButton.addEventListener("click", function() {
    const todoText = todoInput.value.trim();

    if(todoText !== "") {
        createTodoElement(todoText);
    }
});

function updateLocalStorage() {
    const todos = [];
    const todoItems = todoList.getElementsByTagName("li");

    for (let i = 0; i < todoItems.length; i++) {
        todos.push(todoItems[i].textContent);
}
    localStorage.setItem("todos", JSON.stringify(todos));
    
}
 loadTodos();

