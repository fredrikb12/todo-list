import bindClickEvents from "./bindClickEvents";


function createHeaderElement() {
    const header = createHTMLElement("header", "header", "header");
    const headerLeft = createHTMLElement("div", "header-left", "header-left");
    const headerLogo = createHTMLElement("h1", "header-logo", "header-logo");
    headerLogo.textContent = "todo-list"
    headerLeft.appendChild(headerLogo);
    const headerCenter = createHTMLElement("div", "header-center", "header-center");
    const addButton = createHTMLElement("button", "header-add-button", "header-add-button");
    addButton.textContent = "+";
    const addButtonText = createHTMLElement("p", "header-button-para", "header-button-para");
    addButtonText.textContent = "new item";
    appendChildHelper(headerCenter, [addButton, addButtonText]);
    const headerRight = createHTMLElement("div", "header-right", "header-right");
    const label = createHTMLElement("label", "switch", "dark-mode-switch");
    const input = createHTMLElement("input", "", "dark-mode-checkbox");
    input.type = "checkbox";
    input.checked = true;
    const span = createHTMLElement("span", ["slider", "round"]);
    const labelSymbol = createHTMLElement("p", "switch-text", "switch-text");
    labelSymbol.textContent = "💡";
    appendChildHelper(headerRight, [labelSymbol, appendChildHelper(label, [input, span])]);

    appendChildHelper(header, [headerLeft, headerCenter, headerRight]);

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
    const projectsFolder = createHTMLElement("div", ["projects-folder", "sidebar-hidden"], "projects-folder");
    projectsFolder.textContent = "Hello lala";

    appendChildHelper(mainLeft, appendChildHelper(projectsContainer, projectsFolder));

    const importantContainer = createHTMLElement("div", "important-container", "important-container");
    const importantButton = createHTMLElement("button", "important-button", "important-button");
    const importantButtonText = createHTMLElement("p", "important-text", "important-text");
    importantButtonText.innerHTML = "<span id=\"projects-span\">> </span> Important";
    appendChildHelper(importantContainer, appendChildHelper(importantButton, importantButtonText));
    const importantFolder = createHTMLElement("div", ["important-folder", "sidebar-hidden"], "important-folder");
    appendChildHelper(mainLeft, appendChildHelper(importantContainer, importantFolder));

    const mainCenter = createHTMLElement("div", "main-center", "main-center");
    const mainRight = createHTMLElement("div", "main-right", "main-right");



    appendChildHelper(main, [mainLeft, mainCenter, mainRight]);

    return main;
}

function createModal() {
    const modal = createHTMLElement("div", "itemModal", "itemModal");
    const modalLeft = createHTMLElement("div", "item-modal-left", "item-modal-left");
    const modalRight = createHTMLElement("div", "item-modal-right", "item-modal-right");
    


    appendChildHelper(modal, [modalLeft, modalRight]);
    return modal;
}

function createHTMLElement(element, classes, id) {
    const returnElement = document.createElement(element);
    if (typeof classes === "object") {
        classes.forEach(function (classToAdd) {
            returnElement.classList.add(classToAdd);
        });
    } else if (typeof classes === "string" && classes !== "") {
        returnElement.classList.add(classes);
    }
    if (typeof id === "string" && id !== "") {
        returnElement.setAttribute("id", id);
    }
    return returnElement;
}

function appendChildHelper(element, children) {
    if (Object.getPrototypeOf(children).constructor === Array && typeof children === "object") {
        children.forEach(child => {
            element.appendChild(child);
        });
    } else {
        element.appendChild(children);
    }
    return element;
}

function createInitialWebpage() {
    const contentDiv = document.getElementById("content");
    const header = createHeaderElement();
    const main = createMainElement();
    appendChildHelper(contentDiv, [header, main]);
    bindClickEvents();
}



export { createInitialWebpage };