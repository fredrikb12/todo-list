import { bindClickEvents } from "./bindClickEvents";
import { appendChildHelper, createHTMLElement } from "./domHelpers";
import { getTodos, createTodos } from "./todoItems";
import { createNewTaskButton } from "./newTask";
import { addHomeProject } from "./projects";
import { createNewAddButton } from "./addButton";
import { createNewProjectButton } from "./newProject";

function createHeaderElement() {
    const header = createHTMLElement("header", "header", "header");
    const headerLeft = createHTMLElement("div", "header-left", "header-left");
    const headerLogo = createHTMLElement("h1", "header-logo", "header-logo");
    headerLogo.textContent = "todo-list"
    headerLeft.appendChild(headerLogo);
    const headerRight = createHTMLElement("div", "header-right", "header-right");
    const label = createHTMLElement("label", "switch", "dark-mode-switch");
    const input = createHTMLElement("input", "", "dark-mode-checkbox");
    input.type = "checkbox";
    input.checked = true;
    const span = createHTMLElement("span", ["slider", "round"]);
    const labelSymbol = createHTMLElement("p", "switch-text", "switch-text");
    labelSymbol.textContent = "💡";
    appendChildHelper(headerRight, [labelSymbol, appendChildHelper(label, [input, span])]);

    appendChildHelper(header, [headerLeft, headerRight]);

    return header;
}

function createMainElement() {
    const main = createHTMLElement("div", "main", "main");
    const mainLeft = createHTMLElement("div", "main-left", "main-left");
    const projectsContainer = createHTMLElement("div", "projects-container", "projects-container");
    const projectsButton = createHTMLElement("button", "projects-button", "projects-button");
    const projectsButtonText = createHTMLElement("p", "projects-text", "projects-text");
    projectsButtonText.innerHTML = "<span id=\"projects-span\">> </span>Projects";
    appendChildHelper(projectsContainer, appendChildHelper(projectsButton, projectsButtonText));
    const projectsContent = createHTMLElement("div", "projects-content", "projects-content");
    const projects = createHTMLElement("div", ["projects"], "projects");
    appendChildHelper(mainLeft, appendChildHelper(projectsContainer, appendChildHelper(projectsContent, [projects, createNewProjectButton()])));

    const importantContainer = createHTMLElement("div", "important-container", "important-container");
    const importantButton = createHTMLElement("button", "important-button", "important-button");
    const importantButtonText = createHTMLElement("p", "important-text", "important-text");
    importantButtonText.innerHTML = "<span id=\"projects-span\">> </span> Important";
    appendChildHelper(importantContainer, appendChildHelper(importantButton, importantButtonText));
    const importantFolder = createHTMLElement("div", ["important-folder", "sidebar-hidden"], "important-folder");
    appendChildHelper(mainLeft, appendChildHelper(importantContainer, importantFolder));

    const mainCenter = createHTMLElement("div", "main-center", "main-center");
    appendChildHelper(mainCenter, createMainCenterContent());
    appendChildHelper(main, [mainLeft, mainCenter]);

    return main;
}

function createMainCenterContent() {
    const content = createHTMLElement("div", "center-content", "center-content");
    const topContainer = createHTMLElement("div", "todo-top-container", "todo-top-container");
    const titleContainer = createHTMLElement("div", "project-title-container", "project-title-container");
    const title = createHTMLElement("h2", "todo-page-title", "todo-page-title");
    title.textContent = "Temporary Title";
    const dueDate = createHTMLElement("p", "", "todo-page-due-date");
    dueDate.textContent = "Due Date";
    appendChildHelper(content, appendChildHelper(topContainer, [title, dueDate]));

    const tasksContainer = createHTMLElement("div", "todos", "todos");
    appendChildHelper(content, tasksContainer);


    appendChildHelper(content, createNewTaskButton());

    return content;
}



function createInitialWebpage() {
    const contentDiv = document.getElementById("content");
    const header = createHeaderElement();
    const main = createMainElement();
    appendChildHelper(contentDiv, [header, main]);
    addHomeProject();
    createTodos(getTodos());
    bindClickEvents();
}

export { createInitialWebpage };