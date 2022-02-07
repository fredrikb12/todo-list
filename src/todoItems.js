import { appendChildHelper, createHTMLElement, removeAllChildren } from "./domHelpers";
import { addTodoEvent, addDetailedCloseButtonEvent, addDetailedConfirmButtonEvent, addDeleteTodoEvent } from "./bindClickEvents";
import { createSlider, createCloseButton, createConfirmButton, createDateContainer, createTitleArea, createDescriptionArea } from "./newTask";
import { deleteItemFromProject, getProjectIndexByTitle, getProjects } from "./projects";
import { todoItem } from "./todoItem";
import deleteIcon from "./images/delete.svg";

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
    const todo = new todoItem(title, description, dueDate, priority, project);
    todo.id = allTodos.length;
    allTodos.push(todo);

    createTodos(getTodos());
    renderImportantTodos();
    return todo.id;
}

function createTodos(todos) {
    if (todos === []) {
        return null;
    }
    const todosContainer = document.getElementById("todos");
    removeAllChildren(todosContainer);
    todos.forEach(todo => {
        if (!todo) return;
        const item = createHTMLElement("div", "todo-item", todo.id.toString());
        const leftContainer = createHTMLElement("div", "todo-item-left");
        const rightContainer = createHTMLElement("div", "todo-item-right");
        const title = createHTMLElement("p", "todo-title");
        title.textContent = todo.getTitle();
        appendChildHelper(leftContainer, title);
        const dueDate = createHTMLElement("p", "todo-due-date");
        dueDate.textContent = todo.getDueDate();
        const deleteButton = createHTMLElement("img", "delete-todo-button", "");
        deleteButton.src = deleteIcon;
        addDeleteTodoEvent(deleteButton);
        appendChildHelper(rightContainer, [dueDate, deleteButton]);
        appendChildHelper(item, [leftContainer, rightContainer]);
        addTodoEvent(item);
        appendChildHelper(todosContainer, item);
    });
}

function editTodo(todoID, title, description, dueDate, priority, project) {
    const newTodo = new todoItem(title, description, dueDate, priority, project);
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
    const dateContainer = createDateContainer(false, todoID);
    dateContainer.querySelector(".priority-slider").value = getTodos()[todoID].getPriority();
    dateContainer.querySelector(".date-container .due-date-picker").value = getTodos()[todoID].getDueDate();
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
    renderImportantTodos();
}

function renderAllTodos() {
    createTodos(getTodos());
}

function renderImportantTodos() {
    const importantTodos = [];
    getTodos().forEach(todo => {
        if(todo === null) return;
        if (todo.getPriority() >= 8) {
            importantTodos.push({ title: todo.getTitle(), id: todo.id, priority: todo.getPriority() });
        }
    });
    const container = document.getElementById("important-folder");
    removeAllChildren(container);
    importantTodos.forEach(todo => {
        const newImportantElement = createHTMLElement("p", "important-item");
        newImportantElement.textContent = todo.title + `\xa0 \xa0 \xa0 (${todo.priority})`;
        newImportantElement.dataset.todoid = todo.id;
        newImportantElement.addEventListener("click", (e) => {
            const projects = getProjects();
            let project;
            for (let i = projects.length - 1; i >= 0; i--) {
                if (projects[i].items.includes(todo.id)) {
                    project = projects[i];
                    break;
                }
            }
            document.getElementById("todo-page-title").textContent = project.title;
            createTodos(getTodosByID(project.items));
            displayTodoDetails(todo.id);
        });
        appendChildHelper(container, newImportantElement);
    });
}

export { addTodo, getTodos, createTodos, deleteTodo, editTodo, displayTodoDetails, getTodosByID, renderAllTodos };

