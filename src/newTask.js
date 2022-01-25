import { appendChildHelper, createHTMLElement } from "./domHelpers";
import { addConfirmButtonEvent, addCloseButtonEvent } from "./bindClickEvents";
import confirmIcon from "./images/confirm.svg";
import closeIcon from "./images/close.svg";
import addIcon from "./images/add.svg";

function newTaskClick(e) {
    const parent = e.currentTarget.parentNode;
    e.currentTarget.remove();
    const container = createHTMLElement("div", "new-todo-container", "new-todo-container");
    const newTodoForm = createHTMLElement("div", "new-todo-form", "new-todo-form");
    const titleArea = createHTMLElement("textarea", ["title-textarea", "textarea"]);
    titleArea.placeholder = "Title: Eat food";
    const descriptionArea = createHTMLElement("textarea", ["description-textarea", "textarea"]);
    descriptionArea.placeholder = "Details: Preferably before you starve."
    descriptionArea.rows="6";
    const confirmButton = createHTMLElement("img", "task-button", "confirm-button");
    confirmButton.src = confirmIcon;
    addConfirmButtonEvent(confirmButton);
    const closeButton = createHTMLElement("img", "task-button", "close-button");
    closeButton.src = closeIcon;
    addCloseButtonEvent(closeButton);
    appendChildHelper(container, appendChildHelper(newTodoForm, [titleArea, descriptionArea]));
    appendChildHelper(container, [confirmButton, closeButton]);
    appendChildHelper(parent, container);
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

export { newTaskClick, createNewTaskButton };