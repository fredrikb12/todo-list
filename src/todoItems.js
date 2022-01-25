import ToDoFactory from "./todoFactory";
import { appendChildHelper, createHTMLElement } from "./domHelpers";

const allTodos = [];

function getTodos() {
    if (allTodos.length < 1) {
        //addTodo("test", "stupid stuff", "16/3/1998", "high", "i don't know why there are notes");
    }
    return allTodos;
}

function addTodo(title, description, dueDate, priority, notes) {
    const todo = ToDoFactory(title, description, dueDate, priority, notes);
    allTodos.push(todo);
    todo.id = allTodos.length - 1;
    console.log(getTodos()[todo.id].getTitle());

    createTodos(getTodos());
}

function createTodos(todos) {
    const todosContainer = document.getElementById("todos");
    while(todosContainer.firstChild) {
        todosContainer.removeChild(todosContainer.firstChild);
    }
    todos.forEach(todo => {
        const item = createHTMLElement("div", "todo-item", todo.id.toString());
        const title = createHTMLElement("p", "todo-title");
        title.textContent = todo.getTitle();
        const dueDate = createHTMLElement("p", "todo-due-date");
        dueDate.textContent = todo.getDueDate();
       console.log(todo.getTitle());
       console.log(Object.getPrototypeOf(todo));
        appendChildHelper(item, [title, dueDate]);
        appendChildHelper(todosContainer, item);
    });
}

export { addTodo, getTodos, createTodos };

