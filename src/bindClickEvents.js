import { appendChildHelper } from "./domHelpers";
import { newProjectClick, reAppendNewProjectButton } from "./newProject";
import { createNewTaskButton, newTaskClick } from "./newTask";
import { addItemToProject, addProject, getProjectIndexByTitle } from "./projects";
import { addTodo, createTodos, displayTodoDetails, editTodo, getTodos, renderAllTodos } from "./todoItems";

function bindClickEvents() {
    const [projectsButton, importantButton] = findButtons(["projects-button", "important-button"]);
    const darkModeCheckbox = document.getElementById("dark-mode-checkbox");
    const addTaskButton = document.getElementById("todo-add-container");
    const addProjectButton = document.querySelector(".new-project-button");

    addProjectsButtonEvent(projectsButton);
    addImportantButtonEvent(importantButton);
    addAddTaskButtonEvent(addTaskButton);
    addNewProjectButtonEvent(addProjectButton);

    darkModeCheckbox.addEventListener("click", () => {
        //change color scheme somehow
    });
}

function addAddTaskButtonEvent(addTaskButton) {
    addTaskButton.addEventListener("click", (e) => {
        newTaskClick(e);
    });
}

function addProjectsButtonEvent(projectsButton) {
    projectsButton.addEventListener("click", (e) => {
        e.stopPropagation();
        projectsButton.nextElementSibling.classList.toggle("sidebar-hidden");
    });
}

function addImportantButtonEvent(importantButton) {
    importantButton.addEventListener("click", (e) => {
        e.stopPropagation();
        importantButton.nextElementSibling.classList.toggle("sidebar-hidden");
    });
}

function addCloseButtonEvent(closeButton) {
    closeButton.addEventListener("click", (e) => {
        const parent = closeButton.parentNode;
        parent.remove();
        reAppendNewTaskButton();
    });
}

function addConfirmButtonEvent(confirmButton) {
    confirmButton.addEventListener("click", (e) => {
        const parent = confirmButton.parentNode;
        const title = parent.querySelector(".title-textarea");
        if (title.value === "") {
            title.placeholder = "This field cannot be empty.";
            title.classList.add("red-text");
            setTimeout(() => {
                title.classList.remove("red-text");
            }, 750);
            return;
        }
        const description = parent.querySelector(".description-textarea").value;
        const dueDate = parent.querySelector(".date-container .due-date-picker").valueAsDate;
        const date = `${dueDate.getDate()}/${dueDate.getMonth() + 1}/${dueDate.getFullYear()}`;
        const priority = parent.querySelector(".priority-slider").value;
        const project = parent.querySelector(".project-selector").value;
        const todoID = addTodo(title.value, description, date, priority, project);
        addItemToProject(todoID, getProjectIndexByTitle(project));
        parent.remove();
        reAppendNewTaskButton();
    });
}

function addNewProjectButtonEvent(button) {
    button.addEventListener("click", (e) => {
        newProjectClick(e);
    });
}

function addConfirmNewProjectButtonEvent(confirmButton) {
    confirmButton.addEventListener("click", (e) => {
        const container = confirmButton.parentNode.parentNode;
        const textarea = document.getElementById("new-project-input");
        const title = textarea.value;
        addProject(title);
        container.remove();
        reAppendNewProjectButton(document.getElementById("projects-content"));
    });
}

function addCloseNewProjectButtonEvent(closeButton) {
    closeButton.addEventListener("click", (e) => {
        const container = closeButton.parentNode.parentNode;
        container.remove();
        reAppendNewProjectButton(document.getElementById("projects-content"));
    });
}

function addDetailedConfirmButtonEvent(confirmButton, id) {
    confirmButton.addEventListener("click", (e) => {
        const parent = confirmButton.parentNode;
        const title = parent.querySelector(".title-textarea");
        if (title.value === "") {
            title.placeholder = "This field cannot be empty.";
            title.classList.add("red-text");
            setTimeout(() => {
                title.classList.remove("red-text");
            }, 750);
            return;
        }
        const description = parent.querySelector(".description-textarea").value;
        const dueDate = parent.querySelector(".date-container .due-date-picker").valueAsDate;
        const date = `${dueDate.getDate()}/${dueDate.getMonth() + 1}/${dueDate.getFullYear()}`;
        const priority = parent.querySelector(".priority-slider").value;
        const project = parent.querySelector(".project-selector").value;
        const editedTodoID = editTodo(id, title.value, description, date, priority, project);
        parent.remove();
        renderAllTodos();
        const currentProjectIndex = getProjectIndexByTitle(project);
        addItemToProject(editedTodoID, currentProjectIndex);
    });
}

function addDetailedCloseButtonEvent(closeButton) {
    closeButton.addEventListener("click", (e) => {
        createTodos(getTodos());
    });
}

function reAppendNewTaskButton() {
    const newTaskButton = createNewTaskButton();
    addAddTaskButtonEvent(newTaskButton);
    appendChildHelper(document.getElementById("center-content"), newTaskButton);
}

function addTodoEvent(todo) {
    todo.addEventListener("click", (e) => {
        displayTodoDetails(e.currentTarget.id);
    });
}

function findButtons(buttonIDs) {
    const domButtons = [...document.querySelectorAll("button")];
    const returnButtons = [];
    if (typeof buttonIDs === "object") {
        buttonIDs.forEach(id => {
            domButtons.find(function (button) {
                if (button.id === id) {
                    returnButtons.push(button);
                }
            });
        });
    } else {
        domButtons.find(function (button) {
            return button.id === buttonIDs;
        });
    }
    return returnButtons;
}

export {
    bindClickEvents, addConfirmButtonEvent, addCloseButtonEvent,
    addTodoEvent, addDetailedCloseButtonEvent, addDetailedConfirmButtonEvent,
    addCloseNewProjectButtonEvent, addConfirmNewProjectButtonEvent, addNewProjectButtonEvent
};