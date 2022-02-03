import ToDoFactory from "./todoFactory";
import { appendChildHelper, createHTMLElement, removeAllChildren } from "./domHelpers";
import { addTodoEvent, addDetailedCloseButtonEvent, addDetailedConfirmButtonEvent } from "./bindClickEvents";
import { createSlider, createCloseButton, createConfirmButton, createDateContainer, createTitleArea, createDescriptionArea } from "./newTask";
import { deleteItemFromProject } from "./projects";

const allTodos = [];

function getTodos() {
    if (allTodos.length < 1) {
        //addTodo("test", "stupid stuff", "16/3/1998", "high");
    }
    return allTodos;
}

function getTodosByID(indexes) {
    const todos = [];
    indexes.forEach(index => {
        todos.push(allTodos[index]);
    });
    return todos;
}

function addTodo(title, description, dueDate, priority, project) {
    const todo = ToDoFactory(title, description, dueDate, priority, project);
    todo.id = allTodos.length;
    allTodos.push(todo);

    createTodos(getTodos());
    return todo.id;
}

function createTodos(todos) {
    const todosContainer = document.getElementById("todos");
    removeAllChildren(todosContainer);
    todos.forEach(todo => {
        if(todo === null) return;
        const item = createHTMLElement("div", "todo-item", todo.id.toString());
        const leftContainer = createHTMLElement("div", "todo-item-left");
        const rightContainer = createHTMLElement("div", "todo-item-right");
        const title = createHTMLElement("p", "todo-title");
        title.textContent = todo.getTitle();
        appendChildHelper(leftContainer, title);
        const dueDate = createHTMLElement("p", "todo-due-date");
        dueDate.textContent = todo.getDueDate();
        appendChildHelper(rightContainer, dueDate);
        appendChildHelper(item, [leftContainer, rightContainer]);
        addTodoEvent(item);
        appendChildHelper(todosContainer, item);
    });
}

function editTodo(todoID, title, description, dueDate, priority, project) {
    const newTodo = ToDoFactory(title, description, dueDate, priority, project);
    newTodo.id = todoID;
    allTodos.splice(todoID, 1, newTodo);
    renderAllTodos();
    return newTodo.id;
}

function displayTodoDetails(todoID) {
    const todoNode = document.getElementById(todoID);
    const parent = todoNode.parentNode;
    const prevDetailedTodo = document.querySelector(".todo-detailed-container");
    if (prevDetailedTodo !== null) {
        createTodos(getTodos());
    }
    document.getElementById(todoID).remove();

    const container = createHTMLElement("div", "todo-detailed-container");
    const todoForm = createHTMLElement("div", "todo-detailed");
    const titleArea = createTitleArea();
    titleArea.value = getTodos()[todoID].getTitle();
    const descriptionArea = createDescriptionArea();
    descriptionArea.value = getTodos()[todoID].getDescription();
    const dateContainer = createDateContainer();
    dateContainer.querySelector(".priority-slider").value = getTodos()[todoID].getPriority();
    const confirmButton = createConfirmButton();
    confirmButton.setAttribute("id", "todo-detailed-confirm");
    addDetailedConfirmButtonEvent(confirmButton, todoID);
    const closeButton = createCloseButton();
    closeButton.setAttribute("id", "todo-detailed-close");
    addDetailedCloseButtonEvent(closeButton);
    appendChildHelper(container, appendChildHelper(todoForm, [titleArea, descriptionArea, dateContainer]));
    appendChildHelper(container, [confirmButton, closeButton]);
    appendChildHelper(parent, container);
}

function deleteTodo(todoID) {
    allTodos[todoID] = null;
    deleteItemFromProject(todoID);
}

function renderAllTodos() {
    createTodos(getTodos());
}

export { addTodo, getTodos, createTodos, editTodo, displayTodoDetails, getTodosByID, renderAllTodos };

