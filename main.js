/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/bindClickEvents.js":
/*!********************************!*\
  !*** ./src/bindClickEvents.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bindClickEvents": () => (/* binding */ bindClickEvents),
/* harmony export */   "addConfirmButtonEvent": () => (/* binding */ addConfirmButtonEvent),
/* harmony export */   "addCloseButtonEvent": () => (/* binding */ addCloseButtonEvent),
/* harmony export */   "addTodoEvent": () => (/* binding */ addTodoEvent),
/* harmony export */   "addDetailedCloseButtonEvent": () => (/* binding */ addDetailedCloseButtonEvent),
/* harmony export */   "addDetailedConfirmButtonEvent": () => (/* binding */ addDetailedConfirmButtonEvent)
/* harmony export */ });
/* harmony import */ var _domHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domHelpers */ "./src/domHelpers.js");
/* harmony import */ var _newTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newTask */ "./src/newTask.js");
/* harmony import */ var _todoItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoItems */ "./src/todoItems.js");




function bindClickEvents() {
    const [projectsButton, importantButton] = findButtons(["projects-button", "important-button"]);
    const darkModeCheckbox = document.getElementById("dark-mode-checkbox");
    const addTaskButton = document.getElementById("todo-add-container");

    addProjectsButtonEvent(projectsButton);
    addImportantButtonEvent(importantButton);
    addAddTaskButtonEvent(addTaskButton);

    darkModeCheckbox.addEventListener("click", () => {
        //change color scheme somehow
    });
}

function addAddTaskButtonEvent(addTaskButton) {
    addTaskButton.addEventListener("click", (e) => {
        (0,_newTask__WEBPACK_IMPORTED_MODULE_1__.newTaskClick)(e);
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
        if(title.value === "") {
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
        (0,_todoItems__WEBPACK_IMPORTED_MODULE_2__.addTodo)(title.value, description, date, priority);
        parent.remove();
        reAppendNewTaskButton();
    });
}

function addDetailedConfirmButtonEvent(confirmButton) {
    confirmButton.addEventListener("click", (e) => {

    });
}

function addDetailedCloseButtonEvent(closeButton) {
    closeButton.addEventListener("click", (e) => {

    });
}

function reAppendNewTaskButton() {
    const newTaskButton = (0,_newTask__WEBPACK_IMPORTED_MODULE_1__.createNewTaskButton)();
    addAddTaskButtonEvent(newTaskButton);
    (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.appendChildHelper)(document.getElementById("center-content"), newTaskButton);
}

function addTodoEvent(todo) {
    todo.addEventListener("click", (e) => {
        (0,_todoItems__WEBPACK_IMPORTED_MODULE_2__.displayTodoDetails)(e.currentTarget.id);
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



/***/ }),

/***/ "./src/domHelpers.js":
/*!***************************!*\
  !*** ./src/domHelpers.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHTMLElement": () => (/* binding */ createHTMLElement),
/* harmony export */   "appendChildHelper": () => (/* binding */ appendChildHelper),
/* harmony export */   "removeAllChildren": () => (/* binding */ removeAllChildren)
/* harmony export */ });
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

function removeAllChildren(element) {
    while(element.firstChild) {
        element.removeChild(element.firstChild);
    }
}



/***/ }),

/***/ "./src/newTask.js":
/*!************************!*\
  !*** ./src/newTask.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newTaskClick": () => (/* binding */ newTaskClick),
/* harmony export */   "createNewTaskButton": () => (/* binding */ createNewTaskButton),
/* harmony export */   "createSlider": () => (/* binding */ createSlider),
/* harmony export */   "createCloseButton": () => (/* binding */ createCloseButton),
/* harmony export */   "createConfirmButton": () => (/* binding */ createConfirmButton),
/* harmony export */   "createDateContainer": () => (/* binding */ createDateContainer),
/* harmony export */   "createTitleArea": () => (/* binding */ createTitleArea),
/* harmony export */   "createDescriptionArea": () => (/* binding */ createDescriptionArea)
/* harmony export */ });
/* harmony import */ var _domHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domHelpers */ "./src/domHelpers.js");
/* harmony import */ var _bindClickEvents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bindClickEvents */ "./src/bindClickEvents.js");
/* harmony import */ var _images_confirm_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/confirm.svg */ "./src/images/confirm.svg");
/* harmony import */ var _images_close_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/close.svg */ "./src/images/close.svg");
/* harmony import */ var _images_add_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/add.svg */ "./src/images/add.svg");






function newTaskClick(e) {
    const parent = e.currentTarget.parentNode;
    e.currentTarget.remove();
    const container = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)("div", "new-todo-container", "new-todo-container");
    const newTodoForm = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)("div", "new-todo-form", "new-todo-form");
    const titleArea = createTitleArea();
    const descriptionArea = createDescriptionArea();
    const dateContainer = createDateContainer();
    const confirmButton = createConfirmButton();
    (0,_bindClickEvents__WEBPACK_IMPORTED_MODULE_1__.addConfirmButtonEvent)(confirmButton);
    confirmButton.setAttribute("id", "new-task-confirm");
    const closeButton = createCloseButton();
    closeButton.setAttribute("id", "new-task-close");
    (0,_bindClickEvents__WEBPACK_IMPORTED_MODULE_1__.addCloseButtonEvent)(closeButton);
    (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.appendChildHelper)(container, (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.appendChildHelper)(newTodoForm, [titleArea, descriptionArea, dateContainer]));
    (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.appendChildHelper)(container, [confirmButton, closeButton]);
    (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.appendChildHelper)(parent, container);
}

function createSlider() {
    const sliderContainer = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)("div", "slider-container");
    const prioSlider = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)("input", "priority-slider");
    prioSlider.type = "range";
    prioSlider.min = "1";
    prioSlider.max = "10";
    prioSlider.value = "5";
    const prioText = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)("p", "prio-text");
    prioText.textContent = "Priority: ";
    (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.appendChildHelper)(sliderContainer, [prioText, prioSlider]);
    return sliderContainer;
}

function createConfirmButton() {
    const confirmButton = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)("img", ["task-button", "confirm-button"]);
    confirmButton.src = _images_confirm_svg__WEBPACK_IMPORTED_MODULE_2__;
    return confirmButton;
}

function createCloseButton() {
    const closeButton = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)("img", ["task-button", "close-button"]);
    closeButton.src = _images_close_svg__WEBPACK_IMPORTED_MODULE_3__;
    return closeButton;
}

function createDateContainer() {
    const dateContainer = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)("div", "date-container");
    const datePicker = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)("input", "due-date-picker");
    datePicker.type = "date";
    datePicker.valueAsDate = new Date();

    (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.appendChildHelper)(dateContainer, [datePicker, createSlider()]);
    return dateContainer;
}

function createDescriptionArea() {
    const descriptionArea = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)("textarea", ["description-textarea", "textarea"]);
    descriptionArea.placeholder = "Details: Preferably before you starve."
    descriptionArea.rows = "5";
    return descriptionArea;
}

function createTitleArea() {
    const titleArea = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)("textarea", ["title-textarea", "textarea"]);
    titleArea.placeholder = "Title: Eat food";
    return titleArea;
}

function createNewTaskButton() {
    const bottomContainer = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)("div", "todo-add-container", "todo-add-container");
    const addImage = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)("img", "add-image", "add-image");
    addImage.src = _images_add_svg__WEBPACK_IMPORTED_MODULE_4__;
    const addText = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)("p", "add-text", "add-text");
    addText.textContent = "New Task";
    (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.appendChildHelper)(bottomContainer, [addImage, addText]);
    return bottomContainer;
}



/***/ }),

/***/ "./src/todoFactory.js":
/*!****************************!*\
  !*** ./src/todoFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const ToDoFactory = (title, description, dueDate, priority) => {
    const getTitle = () => title;
    const getDescription = () => description;
    const getDueDate = () => dueDate;
    const getPriority = () => priority;
    const setPriority = (input) => undefined.priority = input;
    const getComplete = () => {
        if (undefined.hasOwnProperty("complete")) {
            return undefined.complete;
        } else {
            console.log("Complete property not set.");
            return;
        }
    }
    const setComplete = () => {
        if (undefined.hasOwnProperty("complete")) {
            undefined.complete = !undefined.complete;
        } else {
            undefined.complete = true;
        }
    }
    const getProject = () => {
        if(undefined.hasOwnProperty("project")) {
            return undefined.project;
        } else {
            console.log("project property not set.");
            return;
        }
    }
    const setProject = (input) => {
        undefined.project = input;
    }


    return { getTitle, getDescription, getDueDate, getPriority, setPriority, getComplete, setComplete, getProject, setProject };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToDoFactory);

/***/ }),

/***/ "./src/todoItems.js":
/*!**************************!*\
  !*** ./src/todoItems.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTodo": () => (/* binding */ addTodo),
/* harmony export */   "getTodos": () => (/* binding */ getTodos),
/* harmony export */   "createTodos": () => (/* binding */ createTodos),
/* harmony export */   "displayTodoDetails": () => (/* binding */ displayTodoDetails)
/* harmony export */ });
/* harmony import */ var _todoFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoFactory */ "./src/todoFactory.js");
/* harmony import */ var _domHelpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domHelpers */ "./src/domHelpers.js");
/* harmony import */ var _bindClickEvents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bindClickEvents */ "./src/bindClickEvents.js");
/* harmony import */ var _newTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./newTask */ "./src/newTask.js");






const allTodos = [];

function getTodos() {
    if (allTodos.length < 1) {
        //addTodo("test", "stupid stuff", "16/3/1998", "high", "i don't know why there are notes");
    }
    return allTodos;
}

function addTodo(title, description, dueDate, priority) {
    const todo = (0,_todoFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(title, description, dueDate, priority);
    allTodos.push(todo);
    todo.id = allTodos.length - 1;
    createTodos(getTodos());
}

function createTodos(todos) {
    const todosContainer = document.getElementById("todos");
    (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.removeAllChildren)(todosContainer);
    todos.forEach(todo => {
        const item = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("div", "todo-item", todo.id.toString());
        const leftContainer = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("div", "todo-item-left");
        const rightContainer = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("div", "todo-item-right");
        const title = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("p", "todo-title");
        title.textContent = todo.getTitle();
        (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.appendChildHelper)(leftContainer, title);
        const dueDate = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("p", "todo-due-date");
        dueDate.textContent = todo.getDueDate();
        (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.appendChildHelper)(rightContainer, dueDate);
        (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.appendChildHelper)(item, [leftContainer, rightContainer]);
        (0,_bindClickEvents__WEBPACK_IMPORTED_MODULE_2__.addTodoEvent)(item);
        (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.appendChildHelper)(todosContainer, item);
    });
}

function displayTodoDetails(todoID) {
    const todoNode = document.getElementById(todoID);
    const parent = todoNode.parentNode;
    const prevDetailedTodo = document.querySelector(".todo-detailed-container");
    if(prevDetailedTodo !== null) {
        createTodos(getTodos());
    }
    document.getElementById(todoID).remove();



    
    const container = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("div", "todo-detailed-container");
    const todoForm = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("div", "todo-detailed");
    const titleArea = (0,_newTask__WEBPACK_IMPORTED_MODULE_3__.createTitleArea)();
    titleArea.value = getTodos()[todoID].getTitle();
    const descriptionArea = (0,_newTask__WEBPACK_IMPORTED_MODULE_3__.createDescriptionArea)();
    descriptionArea.value = getTodos()[todoID].getDescription();
    const dateContainer = (0,_newTask__WEBPACK_IMPORTED_MODULE_3__.createDateContainer)();
    dateContainer.querySelector(".priority-slider").value = getTodos()[todoID].getPriority();
    const confirmButton = (0,_newTask__WEBPACK_IMPORTED_MODULE_3__.createConfirmButton)();
    confirmButton.setAttribute("id", "todo-detailed-confirm");
    (0,_bindClickEvents__WEBPACK_IMPORTED_MODULE_2__.addDetailedConfirmButtonEvent)(confirmButton);
    const closeButton = (0,_newTask__WEBPACK_IMPORTED_MODULE_3__.createCloseButton)();
    closeButton.setAttribute("id", "todo-detailed-close");
    (0,_bindClickEvents__WEBPACK_IMPORTED_MODULE_2__.addDetailedCloseButtonEvent)(closeButton);
    (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.appendChildHelper)(container, (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.appendChildHelper)(todoForm, [titleArea, descriptionArea, dateContainer]));
    (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.appendChildHelper)(container, [confirmButton, closeButton]);
    console.log(parent);
    (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.appendChildHelper)(parent, container);
}





/***/ }),

/***/ "./src/webpage.js":
/*!************************!*\
  !*** ./src/webpage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createInitialWebpage": () => (/* binding */ createInitialWebpage)
/* harmony export */ });
/* harmony import */ var _bindClickEvents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bindClickEvents */ "./src/bindClickEvents.js");
/* harmony import */ var _domHelpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domHelpers */ "./src/domHelpers.js");
/* harmony import */ var _todoItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoItems */ "./src/todoItems.js");
/* harmony import */ var _newTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./newTask */ "./src/newTask.js");





function createHeaderElement() {
    const header = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("header", "header", "header");
    const headerLeft = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("div", "header-left", "header-left");
    const headerLogo = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("h1", "header-logo", "header-logo");
    headerLogo.textContent = "todo-list"
    headerLeft.appendChild(headerLogo);
    const headerRight = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("div", "header-right", "header-right");
    const label = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("label", "switch", "dark-mode-switch");
    const input = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("input", "", "dark-mode-checkbox");
    input.type = "checkbox";
    input.checked = true;
    const span = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("span", ["slider", "round"]);
    const labelSymbol = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("p", "switch-text", "switch-text");
    labelSymbol.textContent = "💡";
    (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.appendChildHelper)(headerRight, [labelSymbol, (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.appendChildHelper)(label, [input, span])]);

    (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.appendChildHelper)(header, [headerLeft, headerRight]);

    return header;
}

function createMainElement() {
    const main = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("div", "main", "main");
    const mainLeft = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("div", "main-left", "main-left");
    const projectsContainer = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("div", "projects-container", "projects-container");
    const projectsButton = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("button", "projects-button", "projects-button");
    const projectsButtonText = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("p", "projects-text", "projects-text");
    projectsButtonText.innerHTML = "<span id=\"projects-span\">> </span>Projects";
    (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.appendChildHelper)(projectsContainer, (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.appendChildHelper)(projectsButton, projectsButtonText));
    const projectsFolder = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("div", ["projects-folder", "sidebar-hidden"], "projects-folder");

    (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.appendChildHelper)(mainLeft, (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.appendChildHelper)(projectsContainer, projectsFolder));

    const importantContainer = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("div", "important-container", "important-container");
    const importantButton = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("button", "important-button", "important-button");
    const importantButtonText = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("p", "important-text", "important-text");
    importantButtonText.innerHTML = "<span id=\"projects-span\">> </span> Important";
    (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.appendChildHelper)(importantContainer, (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.appendChildHelper)(importantButton, importantButtonText));
    const importantFolder = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("div", ["important-folder", "sidebar-hidden"], "important-folder");
    (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.appendChildHelper)(mainLeft, (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.appendChildHelper)(importantContainer, importantFolder));

    const mainCenter = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("div", "main-center", "main-center");
    (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.appendChildHelper)(mainCenter, createMainCenterContent());
    (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.appendChildHelper)(main, [mainLeft, mainCenter]);

    return main;
}

function createMainCenterContent() {
    const content = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("div", "center-content", "center-content");
    const topContainer = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("div", "todo-top-container", "todo-top-container");
    const titleContainer = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("div", "project-title-container", "project-title-container");
    const title = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("h2", "todo-page-title", "todo-page-title");
    title.textContent = "Temporary Title";
    const dueDate = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("p", "", "todo-page-due-date");
    dueDate.textContent = "Due Date";
    (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.appendChildHelper)(content, (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.appendChildHelper)(topContainer, [title, dueDate]));

    const tasksContainer = (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.createHTMLElement)("div", "todos", "todos");
    (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.appendChildHelper)(content, tasksContainer);


    (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.appendChildHelper)(content, (0,_newTask__WEBPACK_IMPORTED_MODULE_3__.createNewTaskButton)());

    return content;
}



function createInitialWebpage() {
    const contentDiv = document.getElementById("content");
    const header = createHeaderElement();
    const main = createMainElement();
    (0,_domHelpers__WEBPACK_IMPORTED_MODULE_1__.appendChildHelper)(contentDiv, [header, main]);
    (0,_todoItems__WEBPACK_IMPORTED_MODULE_2__.createTodos)((0,_todoItems__WEBPACK_IMPORTED_MODULE_2__.getTodos)());
    (0,_bindClickEvents__WEBPACK_IMPORTED_MODULE_0__.bindClickEvents)();
}



/***/ }),

/***/ "./src/images/add.svg":
/*!****************************!*\
  !*** ./src/images/add.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c687829df54166165ab9.svg";

/***/ }),

/***/ "./src/images/close.svg":
/*!******************************!*\
  !*** ./src/images/close.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ca8c67c13ad6df4a63f1.svg";

/***/ }),

/***/ "./src/images/confirm.svg":
/*!********************************!*\
  !*** ./src/images/confirm.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a2d8d381eb4fc0a5ff0c.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _webpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webpage */ "./src/webpage.js");


(0,_webpage__WEBPACK_IMPORTED_MODULE_0__.createInitialWebpage)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MkIsOERBQWlCO0FBQzVDLElBQUksOERBQWlCOzs7QUFHckIsSUFBSSw4REFBaUIsVUFBVSw2REFBbUI7O0FBRWxEO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksOERBQWlCO0FBQ3JCLElBQUksdURBQVcsQ0FBQyxvREFBUTtBQUN4QixJQUFJLGlFQUFlO0FBQ25COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2pGQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7O0FDZmlEOztBQUVqRCw4REFBb0IsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9iaW5kQ2xpY2tFdmVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbUhlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL25ld1Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG9GYWN0b3J5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvSXRlbXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3dlYnBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhcHBlbmRDaGlsZEhlbHBlciB9IGZyb20gXCIuL2RvbUhlbHBlcnNcIjtcbmltcG9ydCB7IGNyZWF0ZU5ld1Rhc2tCdXR0b24sIG5ld1Rhc2tDbGljayB9IGZyb20gXCIuL25ld1Rhc2tcIjtcbmltcG9ydCB7IGFkZFRvZG8sIGRpc3BsYXlUb2RvRGV0YWlscyB9IGZyb20gXCIuL3RvZG9JdGVtc1wiO1xuXG5mdW5jdGlvbiBiaW5kQ2xpY2tFdmVudHMoKSB7XG4gICAgY29uc3QgW3Byb2plY3RzQnV0dG9uLCBpbXBvcnRhbnRCdXR0b25dID0gZmluZEJ1dHRvbnMoW1wicHJvamVjdHMtYnV0dG9uXCIsIFwiaW1wb3J0YW50LWJ1dHRvblwiXSk7XG4gICAgY29uc3QgZGFya01vZGVDaGVja2JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGFyay1tb2RlLWNoZWNrYm94XCIpO1xuICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tYWRkLWNvbnRhaW5lclwiKTtcblxuICAgIGFkZFByb2plY3RzQnV0dG9uRXZlbnQocHJvamVjdHNCdXR0b24pO1xuICAgIGFkZEltcG9ydGFudEJ1dHRvbkV2ZW50KGltcG9ydGFudEJ1dHRvbik7XG4gICAgYWRkQWRkVGFza0J1dHRvbkV2ZW50KGFkZFRhc2tCdXR0b24pO1xuXG4gICAgZGFya01vZGVDaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAvL2NoYW5nZSBjb2xvciBzY2hlbWUgc29tZWhvd1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRBZGRUYXNrQnV0dG9uRXZlbnQoYWRkVGFza0J1dHRvbikge1xuICAgIGFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIG5ld1Rhc2tDbGljayhlKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdHNCdXR0b25FdmVudChwcm9qZWN0c0J1dHRvbikge1xuICAgIHByb2plY3RzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBwcm9qZWN0c0J1dHRvbi5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnRvZ2dsZShcInNpZGViYXItaGlkZGVuXCIpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRJbXBvcnRhbnRCdXR0b25FdmVudChpbXBvcnRhbnRCdXR0b24pIHtcbiAgICBpbXBvcnRhbnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGltcG9ydGFudEJ1dHRvbi5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnRvZ2dsZShcInNpZGViYXItaGlkZGVuXCIpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRDbG9zZUJ1dHRvbkV2ZW50KGNsb3NlQnV0dG9uKSB7XG4gICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGNsb3NlQnV0dG9uLnBhcmVudE5vZGU7XG4gICAgICAgIHBhcmVudC5yZW1vdmUoKTtcbiAgICAgICAgcmVBcHBlbmROZXdUYXNrQnV0dG9uKCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZENvbmZpcm1CdXR0b25FdmVudChjb25maXJtQnV0dG9uKSB7XG4gICAgY29uZmlybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gY29uZmlybUJ1dHRvbi5wYXJlbnROb2RlO1xuICAgICAgICBjb25zdCB0aXRsZSA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlLXRleHRhcmVhXCIpO1xuICAgICAgICBpZih0aXRsZS52YWx1ZSA9PT0gXCJcIikge1xuICAgICAgICAgICAgdGl0bGUucGxhY2Vob2xkZXIgPSBcIlRoaXMgZmllbGQgY2Fubm90IGJlIGVtcHR5LlwiO1xuICAgICAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInJlZC10ZXh0XCIpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGl0bGUuY2xhc3NMaXN0LnJlbW92ZShcInJlZC10ZXh0XCIpO1xuICAgICAgICAgICAgfSwgNzUwKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKFwiLmRlc2NyaXB0aW9uLXRleHRhcmVhXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBkdWVEYXRlID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGF0ZS1jb250YWluZXIgLmR1ZS1kYXRlLXBpY2tlclwiKS52YWx1ZUFzRGF0ZTtcbiAgICAgICAgY29uc3QgZGF0ZSA9IGAke2R1ZURhdGUuZ2V0RGF0ZSgpfS8ke2R1ZURhdGUuZ2V0TW9udGgoKSArIDF9LyR7ZHVlRGF0ZS5nZXRGdWxsWWVhcigpfWA7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJpb3JpdHktc2xpZGVyXCIpLnZhbHVlO1xuICAgICAgICBhZGRUb2RvKHRpdGxlLnZhbHVlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHkpO1xuICAgICAgICBwYXJlbnQucmVtb3ZlKCk7XG4gICAgICAgIHJlQXBwZW5kTmV3VGFza0J1dHRvbigpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBhZGREZXRhaWxlZENvbmZpcm1CdXR0b25FdmVudChjb25maXJtQnV0dG9uKSB7XG4gICAgY29uZmlybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBhZGREZXRhaWxlZENsb3NlQnV0dG9uRXZlbnQoY2xvc2VCdXR0b24pIHtcbiAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiByZUFwcGVuZE5ld1Rhc2tCdXR0b24oKSB7XG4gICAgY29uc3QgbmV3VGFza0J1dHRvbiA9IGNyZWF0ZU5ld1Rhc2tCdXR0b24oKTtcbiAgICBhZGRBZGRUYXNrQnV0dG9uRXZlbnQobmV3VGFza0J1dHRvbik7XG4gICAgYXBwZW5kQ2hpbGRIZWxwZXIoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjZW50ZXItY29udGVudFwiKSwgbmV3VGFza0J1dHRvbik7XG59XG5cbmZ1bmN0aW9uIGFkZFRvZG9FdmVudCh0b2RvKSB7XG4gICAgdG9kby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZGlzcGxheVRvZG9EZXRhaWxzKGUuY3VycmVudFRhcmdldC5pZCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGZpbmRCdXR0b25zKGJ1dHRvbklEcykge1xuICAgIGNvbnN0IGRvbUJ1dHRvbnMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvblwiKV07XG4gICAgY29uc3QgcmV0dXJuQnV0dG9ucyA9IFtdO1xuICAgIGlmICh0eXBlb2YgYnV0dG9uSURzID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIGJ1dHRvbklEcy5mb3JFYWNoKGlkID0+IHtcbiAgICAgICAgICAgIGRvbUJ1dHRvbnMuZmluZChmdW5jdGlvbiAoYnV0dG9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJ1dHRvbi5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuQnV0dG9ucy5wdXNoKGJ1dHRvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRvbUJ1dHRvbnMuZmluZChmdW5jdGlvbiAoYnV0dG9uKSB7XG4gICAgICAgICAgICByZXR1cm4gYnV0dG9uLmlkID09PSBidXR0b25JRHM7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcmV0dXJuQnV0dG9ucztcbn1cblxuZXhwb3J0IHsgYmluZENsaWNrRXZlbnRzLCBhZGRDb25maXJtQnV0dG9uRXZlbnQsIGFkZENsb3NlQnV0dG9uRXZlbnQsIGFkZFRvZG9FdmVudCwgYWRkRGV0YWlsZWRDbG9zZUJ1dHRvbkV2ZW50LCBhZGREZXRhaWxlZENvbmZpcm1CdXR0b25FdmVudCB9OyIsImZ1bmN0aW9uIGNyZWF0ZUhUTUxFbGVtZW50KGVsZW1lbnQsIGNsYXNzZXMsIGlkKSB7XG4gICAgY29uc3QgcmV0dXJuRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgaWYgKHR5cGVvZiBjbGFzc2VzID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIGNsYXNzZXMuZm9yRWFjaChmdW5jdGlvbiAoY2xhc3NUb0FkZCkge1xuICAgICAgICAgICAgcmV0dXJuRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzVG9BZGQpO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjbGFzc2VzID09PSBcInN0cmluZ1wiICYmIGNsYXNzZXMgIT09IFwiXCIpIHtcbiAgICAgICAgcmV0dXJuRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzZXMpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGlkID09PSBcInN0cmluZ1wiICYmIGlkICE9PSBcIlwiKSB7XG4gICAgICAgIHJldHVybkVsZW1lbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0dXJuRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gYXBwZW5kQ2hpbGRIZWxwZXIoZWxlbWVudCwgY2hpbGRyZW4pIHtcbiAgICBpZiAoT2JqZWN0LmdldFByb3RvdHlwZU9mKGNoaWxkcmVuKS5jb25zdHJ1Y3RvciA9PT0gQXJyYXkgJiYgdHlwZW9mIGNoaWxkcmVuID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIGNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGRyZW4pO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQWxsQ2hpbGRyZW4oZWxlbWVudCkge1xuICAgIHdoaWxlKGVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxufVxuXG5leHBvcnQgeyBjcmVhdGVIVE1MRWxlbWVudCwgYXBwZW5kQ2hpbGRIZWxwZXIsIHJlbW92ZUFsbENoaWxkcmVuIH07IiwiaW1wb3J0IHsgYXBwZW5kQ2hpbGRIZWxwZXIsIGNyZWF0ZUhUTUxFbGVtZW50IH0gZnJvbSBcIi4vZG9tSGVscGVyc1wiO1xuaW1wb3J0IHsgYWRkQ29uZmlybUJ1dHRvbkV2ZW50LCBhZGRDbG9zZUJ1dHRvbkV2ZW50IH0gZnJvbSBcIi4vYmluZENsaWNrRXZlbnRzXCI7XG5pbXBvcnQgY29uZmlybUljb24gZnJvbSBcIi4vaW1hZ2VzL2NvbmZpcm0uc3ZnXCI7XG5pbXBvcnQgY2xvc2VJY29uIGZyb20gXCIuL2ltYWdlcy9jbG9zZS5zdmdcIjtcbmltcG9ydCBhZGRJY29uIGZyb20gXCIuL2ltYWdlcy9hZGQuc3ZnXCI7XG5cbmZ1bmN0aW9uIG5ld1Rhc2tDbGljayhlKSB7XG4gICAgY29uc3QgcGFyZW50ID0gZS5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgZS5jdXJyZW50VGFyZ2V0LnJlbW92ZSgpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZGl2XCIsIFwibmV3LXRvZG8tY29udGFpbmVyXCIsIFwibmV3LXRvZG8tY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IG5ld1RvZG9Gb3JtID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIiwgXCJuZXctdG9kby1mb3JtXCIsIFwibmV3LXRvZG8tZm9ybVwiKTtcbiAgICBjb25zdCB0aXRsZUFyZWEgPSBjcmVhdGVUaXRsZUFyZWEoKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbkFyZWEgPSBjcmVhdGVEZXNjcmlwdGlvbkFyZWEoKTtcbiAgICBjb25zdCBkYXRlQ29udGFpbmVyID0gY3JlYXRlRGF0ZUNvbnRhaW5lcigpO1xuICAgIGNvbnN0IGNvbmZpcm1CdXR0b24gPSBjcmVhdGVDb25maXJtQnV0dG9uKCk7XG4gICAgYWRkQ29uZmlybUJ1dHRvbkV2ZW50KGNvbmZpcm1CdXR0b24pO1xuICAgIGNvbmZpcm1CdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuZXctdGFzay1jb25maXJtXCIpO1xuICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gY3JlYXRlQ2xvc2VCdXR0b24oKTtcbiAgICBjbG9zZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5ldy10YXNrLWNsb3NlXCIpO1xuICAgIGFkZENsb3NlQnV0dG9uRXZlbnQoY2xvc2VCdXR0b24pO1xuICAgIGFwcGVuZENoaWxkSGVscGVyKGNvbnRhaW5lciwgYXBwZW5kQ2hpbGRIZWxwZXIobmV3VG9kb0Zvcm0sIFt0aXRsZUFyZWEsIGRlc2NyaXB0aW9uQXJlYSwgZGF0ZUNvbnRhaW5lcl0pKTtcbiAgICBhcHBlbmRDaGlsZEhlbHBlcihjb250YWluZXIsIFtjb25maXJtQnV0dG9uLCBjbG9zZUJ1dHRvbl0pO1xuICAgIGFwcGVuZENoaWxkSGVscGVyKHBhcmVudCwgY29udGFpbmVyKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2xpZGVyKCkge1xuICAgIGNvbnN0IHNsaWRlckNvbnRhaW5lciA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZGl2XCIsIFwic2xpZGVyLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBwcmlvU2xpZGVyID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJpbnB1dFwiLCBcInByaW9yaXR5LXNsaWRlclwiKTtcbiAgICBwcmlvU2xpZGVyLnR5cGUgPSBcInJhbmdlXCI7XG4gICAgcHJpb1NsaWRlci5taW4gPSBcIjFcIjtcbiAgICBwcmlvU2xpZGVyLm1heCA9IFwiMTBcIjtcbiAgICBwcmlvU2xpZGVyLnZhbHVlID0gXCI1XCI7XG4gICAgY29uc3QgcHJpb1RleHQgPSBjcmVhdGVIVE1MRWxlbWVudChcInBcIiwgXCJwcmlvLXRleHRcIik7XG4gICAgcHJpb1RleHQudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OiBcIjtcbiAgICBhcHBlbmRDaGlsZEhlbHBlcihzbGlkZXJDb250YWluZXIsIFtwcmlvVGV4dCwgcHJpb1NsaWRlcl0pO1xuICAgIHJldHVybiBzbGlkZXJDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbmZpcm1CdXR0b24oKSB7XG4gICAgY29uc3QgY29uZmlybUJ1dHRvbiA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiaW1nXCIsIFtcInRhc2stYnV0dG9uXCIsIFwiY29uZmlybS1idXR0b25cIl0pO1xuICAgIGNvbmZpcm1CdXR0b24uc3JjID0gY29uZmlybUljb247XG4gICAgcmV0dXJuIGNvbmZpcm1CdXR0b247XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNsb3NlQnV0dG9uKCkge1xuICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJpbWdcIiwgW1widGFzay1idXR0b25cIiwgXCJjbG9zZS1idXR0b25cIl0pO1xuICAgIGNsb3NlQnV0dG9uLnNyYyA9IGNsb3NlSWNvbjtcbiAgICByZXR1cm4gY2xvc2VCdXR0b247XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURhdGVDb250YWluZXIoKSB7XG4gICAgY29uc3QgZGF0ZUNvbnRhaW5lciA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZGl2XCIsIFwiZGF0ZS1jb250YWluZXJcIik7XG4gICAgY29uc3QgZGF0ZVBpY2tlciA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiaW5wdXRcIiwgXCJkdWUtZGF0ZS1waWNrZXJcIik7XG4gICAgZGF0ZVBpY2tlci50eXBlID0gXCJkYXRlXCI7XG4gICAgZGF0ZVBpY2tlci52YWx1ZUFzRGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgICBhcHBlbmRDaGlsZEhlbHBlcihkYXRlQ29udGFpbmVyLCBbZGF0ZVBpY2tlciwgY3JlYXRlU2xpZGVyKCldKTtcbiAgICByZXR1cm4gZGF0ZUNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGVzY3JpcHRpb25BcmVhKCkge1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uQXJlYSA9IGNyZWF0ZUhUTUxFbGVtZW50KFwidGV4dGFyZWFcIiwgW1wiZGVzY3JpcHRpb24tdGV4dGFyZWFcIiwgXCJ0ZXh0YXJlYVwiXSk7XG4gICAgZGVzY3JpcHRpb25BcmVhLnBsYWNlaG9sZGVyID0gXCJEZXRhaWxzOiBQcmVmZXJhYmx5IGJlZm9yZSB5b3Ugc3RhcnZlLlwiXG4gICAgZGVzY3JpcHRpb25BcmVhLnJvd3MgPSBcIjVcIjtcbiAgICByZXR1cm4gZGVzY3JpcHRpb25BcmVhO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUaXRsZUFyZWEoKSB7XG4gICAgY29uc3QgdGl0bGVBcmVhID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJ0ZXh0YXJlYVwiLCBbXCJ0aXRsZS10ZXh0YXJlYVwiLCBcInRleHRhcmVhXCJdKTtcbiAgICB0aXRsZUFyZWEucGxhY2Vob2xkZXIgPSBcIlRpdGxlOiBFYXQgZm9vZFwiO1xuICAgIHJldHVybiB0aXRsZUFyZWE7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld1Rhc2tCdXR0b24oKSB7XG4gICAgY29uc3QgYm90dG9tQ29udGFpbmVyID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIiwgXCJ0b2RvLWFkZC1jb250YWluZXJcIiwgXCJ0b2RvLWFkZC1jb250YWluZXJcIik7XG4gICAgY29uc3QgYWRkSW1hZ2UgPSBjcmVhdGVIVE1MRWxlbWVudChcImltZ1wiLCBcImFkZC1pbWFnZVwiLCBcImFkZC1pbWFnZVwiKTtcbiAgICBhZGRJbWFnZS5zcmMgPSBhZGRJY29uO1xuICAgIGNvbnN0IGFkZFRleHQgPSBjcmVhdGVIVE1MRWxlbWVudChcInBcIiwgXCJhZGQtdGV4dFwiLCBcImFkZC10ZXh0XCIpO1xuICAgIGFkZFRleHQudGV4dENvbnRlbnQgPSBcIk5ldyBUYXNrXCI7XG4gICAgYXBwZW5kQ2hpbGRIZWxwZXIoYm90dG9tQ29udGFpbmVyLCBbYWRkSW1hZ2UsIGFkZFRleHRdKTtcbiAgICByZXR1cm4gYm90dG9tQ29udGFpbmVyO1xufVxuXG5leHBvcnQgeyBuZXdUYXNrQ2xpY2ssIGNyZWF0ZU5ld1Rhc2tCdXR0b24sIGNyZWF0ZVNsaWRlciwgY3JlYXRlQ2xvc2VCdXR0b24sIGNyZWF0ZUNvbmZpcm1CdXR0b24sIGNyZWF0ZURhdGVDb250YWluZXIsIGNyZWF0ZVRpdGxlQXJlYSwgY3JlYXRlRGVzY3JpcHRpb25BcmVhIH07IiwiY29uc3QgVG9Eb0ZhY3RvcnkgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xuICAgIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gdGl0bGU7XG4gICAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoKSA9PiBkZXNjcmlwdGlvbjtcbiAgICBjb25zdCBnZXREdWVEYXRlID0gKCkgPT4gZHVlRGF0ZTtcbiAgICBjb25zdCBnZXRQcmlvcml0eSA9ICgpID0+IHByaW9yaXR5O1xuICAgIGNvbnN0IHNldFByaW9yaXR5ID0gKGlucHV0KSA9PiB0aGlzLnByaW9yaXR5ID0gaW5wdXQ7XG4gICAgY29uc3QgZ2V0Q29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KFwiY29tcGxldGVcIikpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDb21wbGV0ZSBwcm9wZXJ0eSBub3Qgc2V0LlwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBzZXRDb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoXCJjb21wbGV0ZVwiKSkge1xuICAgICAgICAgICAgdGhpcy5jb21wbGV0ZSA9ICF0aGlzLmNvbXBsZXRlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb21wbGV0ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgZ2V0UHJvamVjdCA9ICgpID0+IHtcbiAgICAgICAgaWYodGhpcy5oYXNPd25Qcm9wZXJ0eShcInByb2plY3RcIikpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2plY3Q7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInByb2plY3QgcHJvcGVydHkgbm90IHNldC5cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgc2V0UHJvamVjdCA9IChpbnB1dCkgPT4ge1xuICAgICAgICB0aGlzLnByb2plY3QgPSBpbnB1dDtcbiAgICB9XG5cblxuICAgIHJldHVybiB7IGdldFRpdGxlLCBnZXREZXNjcmlwdGlvbiwgZ2V0RHVlRGF0ZSwgZ2V0UHJpb3JpdHksIHNldFByaW9yaXR5LCBnZXRDb21wbGV0ZSwgc2V0Q29tcGxldGUsIGdldFByb2plY3QsIHNldFByb2plY3QgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9Eb0ZhY3Rvcnk7IiwiaW1wb3J0IFRvRG9GYWN0b3J5IGZyb20gXCIuL3RvZG9GYWN0b3J5XCI7XG5pbXBvcnQgeyBhcHBlbmRDaGlsZEhlbHBlciwgY3JlYXRlSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi9kb21IZWxwZXJzXCI7XG5pbXBvcnQgeyBhZGRUb2RvRXZlbnQsIGFkZERldGFpbGVkQ2xvc2VCdXR0b25FdmVudCwgYWRkRGV0YWlsZWRDb25maXJtQnV0dG9uRXZlbnQgfSBmcm9tIFwiLi9iaW5kQ2xpY2tFdmVudHNcIjtcbmltcG9ydCB7IHJlbW92ZUFsbENoaWxkcmVuIH0gZnJvbSBcIi4vZG9tSGVscGVyc1wiO1xuaW1wb3J0IHsgY3JlYXRlU2xpZGVyLCBjcmVhdGVDbG9zZUJ1dHRvbiwgY3JlYXRlQ29uZmlybUJ1dHRvbiwgY3JlYXRlRGF0ZUNvbnRhaW5lciwgY3JlYXRlVGl0bGVBcmVhLCBjcmVhdGVEZXNjcmlwdGlvbkFyZWEgfSBmcm9tIFwiLi9uZXdUYXNrXCI7XG5cbmNvbnN0IGFsbFRvZG9zID0gW107XG5cbmZ1bmN0aW9uIGdldFRvZG9zKCkge1xuICAgIGlmIChhbGxUb2Rvcy5sZW5ndGggPCAxKSB7XG4gICAgICAgIC8vYWRkVG9kbyhcInRlc3RcIiwgXCJzdHVwaWQgc3R1ZmZcIiwgXCIxNi8zLzE5OThcIiwgXCJoaWdoXCIsIFwiaSBkb24ndCBrbm93IHdoeSB0aGVyZSBhcmUgbm90ZXNcIik7XG4gICAgfVxuICAgIHJldHVybiBhbGxUb2Rvcztcbn1cblxuZnVuY3Rpb24gYWRkVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgY29uc3QgdG9kbyA9IFRvRG9GYWN0b3J5KHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuICAgIGFsbFRvZG9zLnB1c2godG9kbyk7XG4gICAgdG9kby5pZCA9IGFsbFRvZG9zLmxlbmd0aCAtIDE7XG4gICAgY3JlYXRlVG9kb3MoZ2V0VG9kb3MoKSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRvZG9zKHRvZG9zKSB7XG4gICAgY29uc3QgdG9kb3NDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG9zXCIpO1xuICAgIHJlbW92ZUFsbENoaWxkcmVuKHRvZG9zQ29udGFpbmVyKTtcbiAgICB0b2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgICBjb25zdCBpdGVtID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIiwgXCJ0b2RvLWl0ZW1cIiwgdG9kby5pZC50b1N0cmluZygpKTtcbiAgICAgICAgY29uc3QgbGVmdENvbnRhaW5lciA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZGl2XCIsIFwidG9kby1pdGVtLWxlZnRcIik7XG4gICAgICAgIGNvbnN0IHJpZ2h0Q29udGFpbmVyID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIiwgXCJ0b2RvLWl0ZW0tcmlnaHRcIik7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJwXCIsIFwidG9kby10aXRsZVwiKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSB0b2RvLmdldFRpdGxlKCk7XG4gICAgICAgIGFwcGVuZENoaWxkSGVscGVyKGxlZnRDb250YWluZXIsIHRpdGxlKTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGNyZWF0ZUhUTUxFbGVtZW50KFwicFwiLCBcInRvZG8tZHVlLWRhdGVcIik7XG4gICAgICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSB0b2RvLmdldER1ZURhdGUoKTtcbiAgICAgICAgYXBwZW5kQ2hpbGRIZWxwZXIocmlnaHRDb250YWluZXIsIGR1ZURhdGUpO1xuICAgICAgICBhcHBlbmRDaGlsZEhlbHBlcihpdGVtLCBbbGVmdENvbnRhaW5lciwgcmlnaHRDb250YWluZXJdKTtcbiAgICAgICAgYWRkVG9kb0V2ZW50KGl0ZW0pO1xuICAgICAgICBhcHBlbmRDaGlsZEhlbHBlcih0b2Rvc0NvbnRhaW5lciwgaXRlbSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUb2RvRGV0YWlscyh0b2RvSUQpIHtcbiAgICBjb25zdCB0b2RvTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRvZG9JRCk7XG4gICAgY29uc3QgcGFyZW50ID0gdG9kb05vZGUucGFyZW50Tm9kZTtcbiAgICBjb25zdCBwcmV2RGV0YWlsZWRUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLWRldGFpbGVkLWNvbnRhaW5lclwiKTtcbiAgICBpZihwcmV2RGV0YWlsZWRUb2RvICE9PSBudWxsKSB7XG4gICAgICAgIGNyZWF0ZVRvZG9zKGdldFRvZG9zKCkpO1xuICAgIH1cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0b2RvSUQpLnJlbW92ZSgpO1xuXG5cblxuICAgIFxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZGl2XCIsIFwidG9kby1kZXRhaWxlZC1jb250YWluZXJcIik7XG4gICAgY29uc3QgdG9kb0Zvcm0gPSBjcmVhdGVIVE1MRWxlbWVudChcImRpdlwiLCBcInRvZG8tZGV0YWlsZWRcIik7XG4gICAgY29uc3QgdGl0bGVBcmVhID0gY3JlYXRlVGl0bGVBcmVhKCk7XG4gICAgdGl0bGVBcmVhLnZhbHVlID0gZ2V0VG9kb3MoKVt0b2RvSURdLmdldFRpdGxlKCk7XG4gICAgY29uc3QgZGVzY3JpcHRpb25BcmVhID0gY3JlYXRlRGVzY3JpcHRpb25BcmVhKCk7XG4gICAgZGVzY3JpcHRpb25BcmVhLnZhbHVlID0gZ2V0VG9kb3MoKVt0b2RvSURdLmdldERlc2NyaXB0aW9uKCk7XG4gICAgY29uc3QgZGF0ZUNvbnRhaW5lciA9IGNyZWF0ZURhdGVDb250YWluZXIoKTtcbiAgICBkYXRlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIucHJpb3JpdHktc2xpZGVyXCIpLnZhbHVlID0gZ2V0VG9kb3MoKVt0b2RvSURdLmdldFByaW9yaXR5KCk7XG4gICAgY29uc3QgY29uZmlybUJ1dHRvbiA9IGNyZWF0ZUNvbmZpcm1CdXR0b24oKTtcbiAgICBjb25maXJtQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kby1kZXRhaWxlZC1jb25maXJtXCIpO1xuICAgIGFkZERldGFpbGVkQ29uZmlybUJ1dHRvbkV2ZW50KGNvbmZpcm1CdXR0b24pO1xuICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gY3JlYXRlQ2xvc2VCdXR0b24oKTtcbiAgICBjbG9zZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG8tZGV0YWlsZWQtY2xvc2VcIik7XG4gICAgYWRkRGV0YWlsZWRDbG9zZUJ1dHRvbkV2ZW50KGNsb3NlQnV0dG9uKTtcbiAgICBhcHBlbmRDaGlsZEhlbHBlcihjb250YWluZXIsIGFwcGVuZENoaWxkSGVscGVyKHRvZG9Gb3JtLCBbdGl0bGVBcmVhLCBkZXNjcmlwdGlvbkFyZWEsIGRhdGVDb250YWluZXJdKSk7XG4gICAgYXBwZW5kQ2hpbGRIZWxwZXIoY29udGFpbmVyLCBbY29uZmlybUJ1dHRvbiwgY2xvc2VCdXR0b25dKTtcbiAgICBjb25zb2xlLmxvZyhwYXJlbnQpO1xuICAgIGFwcGVuZENoaWxkSGVscGVyKHBhcmVudCwgY29udGFpbmVyKTtcbn1cblxuZXhwb3J0IHsgYWRkVG9kbywgZ2V0VG9kb3MsIGNyZWF0ZVRvZG9zLCBkaXNwbGF5VG9kb0RldGFpbHMgfTtcblxuIiwiaW1wb3J0IHsgYmluZENsaWNrRXZlbnRzIH0gZnJvbSBcIi4vYmluZENsaWNrRXZlbnRzXCI7XG5pbXBvcnQgeyBhcHBlbmRDaGlsZEhlbHBlciwgY3JlYXRlSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi9kb21IZWxwZXJzXCI7XG5pbXBvcnQgeyBnZXRUb2RvcywgY3JlYXRlVG9kb3MgfSBmcm9tIFwiLi90b2RvSXRlbXNcIjtcbmltcG9ydCB7IGNyZWF0ZU5ld1Rhc2tCdXR0b24gfSBmcm9tIFwiLi9uZXdUYXNrXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlckVsZW1lbnQoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJoZWFkZXJcIiwgXCJoZWFkZXJcIiwgXCJoZWFkZXJcIik7XG4gICAgY29uc3QgaGVhZGVyTGVmdCA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZGl2XCIsIFwiaGVhZGVyLWxlZnRcIiwgXCJoZWFkZXItbGVmdFwiKTtcbiAgICBjb25zdCBoZWFkZXJMb2dvID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJoMVwiLCBcImhlYWRlci1sb2dvXCIsIFwiaGVhZGVyLWxvZ29cIik7XG4gICAgaGVhZGVyTG9nby50ZXh0Q29udGVudCA9IFwidG9kby1saXN0XCJcbiAgICBoZWFkZXJMZWZ0LmFwcGVuZENoaWxkKGhlYWRlckxvZ28pO1xuICAgIGNvbnN0IGhlYWRlclJpZ2h0ID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIiwgXCJoZWFkZXItcmlnaHRcIiwgXCJoZWFkZXItcmlnaHRcIik7XG4gICAgY29uc3QgbGFiZWwgPSBjcmVhdGVIVE1MRWxlbWVudChcImxhYmVsXCIsIFwic3dpdGNoXCIsIFwiZGFyay1tb2RlLXN3aXRjaFwiKTtcbiAgICBjb25zdCBpbnB1dCA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiaW5wdXRcIiwgXCJcIiwgXCJkYXJrLW1vZGUtY2hlY2tib3hcIik7XG4gICAgaW5wdXQudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICBpbnB1dC5jaGVja2VkID0gdHJ1ZTtcbiAgICBjb25zdCBzcGFuID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJzcGFuXCIsIFtcInNsaWRlclwiLCBcInJvdW5kXCJdKTtcbiAgICBjb25zdCBsYWJlbFN5bWJvbCA9IGNyZWF0ZUhUTUxFbGVtZW50KFwicFwiLCBcInN3aXRjaC10ZXh0XCIsIFwic3dpdGNoLXRleHRcIik7XG4gICAgbGFiZWxTeW1ib2wudGV4dENvbnRlbnQgPSBcIvCfkqFcIjtcbiAgICBhcHBlbmRDaGlsZEhlbHBlcihoZWFkZXJSaWdodCwgW2xhYmVsU3ltYm9sLCBhcHBlbmRDaGlsZEhlbHBlcihsYWJlbCwgW2lucHV0LCBzcGFuXSldKTtcblxuICAgIGFwcGVuZENoaWxkSGVscGVyKGhlYWRlciwgW2hlYWRlckxlZnQsIGhlYWRlclJpZ2h0XSk7XG5cbiAgICByZXR1cm4gaGVhZGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNYWluRWxlbWVudCgpIHtcbiAgICBjb25zdCBtYWluID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIiwgXCJtYWluXCIsIFwibWFpblwiKTtcbiAgICBjb25zdCBtYWluTGVmdCA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZGl2XCIsIFwibWFpbi1sZWZ0XCIsIFwibWFpbi1sZWZ0XCIpO1xuICAgIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIiwgXCJwcm9qZWN0cy1jb250YWluZXJcIiwgXCJwcm9qZWN0cy1jb250YWluZXJcIik7XG4gICAgY29uc3QgcHJvamVjdHNCdXR0b24gPSBjcmVhdGVIVE1MRWxlbWVudChcImJ1dHRvblwiLCBcInByb2plY3RzLWJ1dHRvblwiLCBcInByb2plY3RzLWJ1dHRvblwiKTtcbiAgICBjb25zdCBwcm9qZWN0c0J1dHRvblRleHQgPSBjcmVhdGVIVE1MRWxlbWVudChcInBcIiwgXCJwcm9qZWN0cy10ZXh0XCIsIFwicHJvamVjdHMtdGV4dFwiKTtcbiAgICBwcm9qZWN0c0J1dHRvblRleHQuaW5uZXJIVE1MID0gXCI8c3BhbiBpZD1cXFwicHJvamVjdHMtc3BhblxcXCI+PiA8L3NwYW4+UHJvamVjdHNcIjtcbiAgICBhcHBlbmRDaGlsZEhlbHBlcihwcm9qZWN0c0NvbnRhaW5lciwgYXBwZW5kQ2hpbGRIZWxwZXIocHJvamVjdHNCdXR0b24sIHByb2plY3RzQnV0dG9uVGV4dCkpO1xuICAgIGNvbnN0IHByb2plY3RzRm9sZGVyID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIiwgW1wicHJvamVjdHMtZm9sZGVyXCIsIFwic2lkZWJhci1oaWRkZW5cIl0sIFwicHJvamVjdHMtZm9sZGVyXCIpO1xuXG4gICAgYXBwZW5kQ2hpbGRIZWxwZXIobWFpbkxlZnQsIGFwcGVuZENoaWxkSGVscGVyKHByb2plY3RzQ29udGFpbmVyLCBwcm9qZWN0c0ZvbGRlcikpO1xuXG4gICAgY29uc3QgaW1wb3J0YW50Q29udGFpbmVyID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIiwgXCJpbXBvcnRhbnQtY29udGFpbmVyXCIsIFwiaW1wb3J0YW50LWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBpbXBvcnRhbnRCdXR0b24gPSBjcmVhdGVIVE1MRWxlbWVudChcImJ1dHRvblwiLCBcImltcG9ydGFudC1idXR0b25cIiwgXCJpbXBvcnRhbnQtYnV0dG9uXCIpO1xuICAgIGNvbnN0IGltcG9ydGFudEJ1dHRvblRleHQgPSBjcmVhdGVIVE1MRWxlbWVudChcInBcIiwgXCJpbXBvcnRhbnQtdGV4dFwiLCBcImltcG9ydGFudC10ZXh0XCIpO1xuICAgIGltcG9ydGFudEJ1dHRvblRleHQuaW5uZXJIVE1MID0gXCI8c3BhbiBpZD1cXFwicHJvamVjdHMtc3BhblxcXCI+PiA8L3NwYW4+IEltcG9ydGFudFwiO1xuICAgIGFwcGVuZENoaWxkSGVscGVyKGltcG9ydGFudENvbnRhaW5lciwgYXBwZW5kQ2hpbGRIZWxwZXIoaW1wb3J0YW50QnV0dG9uLCBpbXBvcnRhbnRCdXR0b25UZXh0KSk7XG4gICAgY29uc3QgaW1wb3J0YW50Rm9sZGVyID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIiwgW1wiaW1wb3J0YW50LWZvbGRlclwiLCBcInNpZGViYXItaGlkZGVuXCJdLCBcImltcG9ydGFudC1mb2xkZXJcIik7XG4gICAgYXBwZW5kQ2hpbGRIZWxwZXIobWFpbkxlZnQsIGFwcGVuZENoaWxkSGVscGVyKGltcG9ydGFudENvbnRhaW5lciwgaW1wb3J0YW50Rm9sZGVyKSk7XG5cbiAgICBjb25zdCBtYWluQ2VudGVyID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIiwgXCJtYWluLWNlbnRlclwiLCBcIm1haW4tY2VudGVyXCIpO1xuICAgIGFwcGVuZENoaWxkSGVscGVyKG1haW5DZW50ZXIsIGNyZWF0ZU1haW5DZW50ZXJDb250ZW50KCkpO1xuICAgIGFwcGVuZENoaWxkSGVscGVyKG1haW4sIFttYWluTGVmdCwgbWFpbkNlbnRlcl0pO1xuXG4gICAgcmV0dXJuIG1haW47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW5DZW50ZXJDb250ZW50KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBjcmVhdGVIVE1MRWxlbWVudChcImRpdlwiLCBcImNlbnRlci1jb250ZW50XCIsIFwiY2VudGVyLWNvbnRlbnRcIik7XG4gICAgY29uc3QgdG9wQ29udGFpbmVyID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIiwgXCJ0b2RvLXRvcC1jb250YWluZXJcIiwgXCJ0b2RvLXRvcC1jb250YWluZXJcIik7XG4gICAgY29uc3QgdGl0bGVDb250YWluZXIgPSBjcmVhdGVIVE1MRWxlbWVudChcImRpdlwiLCBcInByb2plY3QtdGl0bGUtY29udGFpbmVyXCIsIFwicHJvamVjdC10aXRsZS1jb250YWluZXJcIik7XG4gICAgY29uc3QgdGl0bGUgPSBjcmVhdGVIVE1MRWxlbWVudChcImgyXCIsIFwidG9kby1wYWdlLXRpdGxlXCIsIFwidG9kby1wYWdlLXRpdGxlXCIpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJUZW1wb3JhcnkgVGl0bGVcIjtcbiAgICBjb25zdCBkdWVEYXRlID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJwXCIsIFwiXCIsIFwidG9kby1wYWdlLWR1ZS1kYXRlXCIpO1xuICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlXCI7XG4gICAgYXBwZW5kQ2hpbGRIZWxwZXIoY29udGVudCwgYXBwZW5kQ2hpbGRIZWxwZXIodG9wQ29udGFpbmVyLCBbdGl0bGUsIGR1ZURhdGVdKSk7XG5cbiAgICBjb25zdCB0YXNrc0NvbnRhaW5lciA9IGNyZWF0ZUhUTUxFbGVtZW50KFwiZGl2XCIsIFwidG9kb3NcIiwgXCJ0b2Rvc1wiKTtcbiAgICBhcHBlbmRDaGlsZEhlbHBlcihjb250ZW50LCB0YXNrc0NvbnRhaW5lcik7XG5cblxuICAgIGFwcGVuZENoaWxkSGVscGVyKGNvbnRlbnQsIGNyZWF0ZU5ld1Rhc2tCdXR0b24oKSk7XG5cbiAgICByZXR1cm4gY29udGVudDtcbn1cblxuXG5cbmZ1bmN0aW9uIGNyZWF0ZUluaXRpYWxXZWJwYWdlKCkge1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgY29uc3QgaGVhZGVyID0gY3JlYXRlSGVhZGVyRWxlbWVudCgpO1xuICAgIGNvbnN0IG1haW4gPSBjcmVhdGVNYWluRWxlbWVudCgpO1xuICAgIGFwcGVuZENoaWxkSGVscGVyKGNvbnRlbnREaXYsIFtoZWFkZXIsIG1haW5dKTtcbiAgICBjcmVhdGVUb2RvcyhnZXRUb2RvcygpKTtcbiAgICBiaW5kQ2xpY2tFdmVudHMoKTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlSW5pdGlhbFdlYnBhZ2UgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgeyBjcmVhdGVJbml0aWFsV2VicGFnZSB9IGZyb20gXCIuL3dlYnBhZ2VcIjtcblxuY3JlYXRlSW5pdGlhbFdlYnBhZ2UoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=