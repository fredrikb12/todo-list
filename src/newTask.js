import { appendChildHelper, createHTMLElement } from "./domHelpers";
import { addConfirmButtonEvent, addCloseButtonEvent } from "./bindClickEvents";
import { getProjects } from "./projects";
import confirmIcon from "./images/confirm.svg";
import closeIcon from "./images/close.svg";
import addIcon from "./images/add.svg";
import { getTodosByID } from "./todoItems";

function newTaskClick(e, todoID) {
    const parent = e.currentTarget.parentNode;
    e.currentTarget.remove();
    const container = createHTMLElement("div", "new-todo-container", "new-todo-container");
    const newTodoForm = createHTMLElement("div", "new-todo-form", "new-todo-form");
    const titleArea = createTitleArea();
    const descriptionArea = createDescriptionArea();
    const dateContainer = createDateContainer(true, todoID);
    const confirmButton = createConfirmButton();
    addConfirmButtonEvent(confirmButton);
    confirmButton.setAttribute("id", "new-task-confirm");
    const closeButton = createCloseButton();
    closeButton.setAttribute("id", "new-task-close");
    addCloseButtonEvent(closeButton);
    appendChildHelper(container, appendChildHelper(newTodoForm, [titleArea, descriptionArea, dateContainer]));
    appendChildHelper(container, [confirmButton, closeButton]);
    appendChildHelper(parent, container);
    titleArea.focus();
}

function createSlider() {
    const sliderContainer = createHTMLElement("div", "slider-container");
    const prioSlider = createHTMLElement("input", "priority-slider");
    prioSlider.type = "range";
    prioSlider.min = "1";
    prioSlider.max = "10";
    prioSlider.value = "5";
    const prioText = createHTMLElement("p", "prio-text");
    prioText.textContent = "Priority: ";
    appendChildHelper(sliderContainer, [prioText, prioSlider]);
    return sliderContainer;
}

function createConfirmButton() {
    const confirmButton = createHTMLElement("img", ["task-button", "confirm-button"]);
    confirmButton.src = confirmIcon;
    return confirmButton;
}

function createCloseButton() {
    const closeButton = createHTMLElement("img", ["task-button", "close-button"]);
    closeButton.src = closeIcon;
    return closeButton;
}

function createDateContainer(isNewTask, todoID) {
    const dateContainer = createHTMLElement("div", "date-container");
    const datePicker = createHTMLElement("input", "due-date-picker");
    datePicker.type = "date";
    datePicker.valueAsDate = new Date();
    const projectContainer = createHTMLElement("div", "project-container");
    const selector = createHTMLElement("select", "project-selector");
    selector.name = "projects";
    getProjects().forEach((project) => {
        const newOption = createHTMLElement("option", "project-option");
        newOption.value = project.title;
        if (newOption.value === document.getElementById("todo-page-title").textContent && isNewTask) {
            newOption.setAttribute("selected", "\"selected\"");
        } else if (!isNewTask) {
            if(newOption.value === getTodosByID([todoID])[0].getProject()) {
                newOption.setAttribute("selected", "\"selected\"");
            }
        }
            newOption.textContent = project.title;
        appendChildHelper(selector, newOption);
    });

    appendChildHelper(projectContainer, selector);
    appendChildHelper(dateContainer, [datePicker, projectContainer, createSlider()]);
    return dateContainer;
}

function createDescriptionArea() {
    const descriptionArea = createHTMLElement("textarea", ["description-textarea", "textarea"]);
    descriptionArea.placeholder = "Details: Preferably before you starve."
    descriptionArea.rows = "5";
    return descriptionArea;
}

function createTitleArea() {
    const titleArea = createHTMLElement("textarea", ["title-textarea", "textarea"]);
    titleArea.placeholder = "Title: Eat food";
    return titleArea;
}

function createNewTaskButton() {
    const bottomContainer = createHTMLElement("div", "todo-add-container", "todo-add-container");
    const addImage = createHTMLElement("img", "add-image", "add-image");
    addImage.src = addIcon;
    const addText = createHTMLElement("p", "add-text", "add-text");
    addText.textContent = "New Task";
    appendChildHelper(bottomContainer, [addImage, addText]);
    return bottomContainer;
}

export { newTaskClick, createNewTaskButton, createSlider, createCloseButton, createConfirmButton, createDateContainer, createTitleArea, createDescriptionArea };