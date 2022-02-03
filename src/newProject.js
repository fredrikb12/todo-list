import { addCloseNewProjectButtonEvent, addConfirmNewProjectButtonEvent, addNewProjectButtonEvent } from "./bindClickEvents";
import { appendChildHelper, createHTMLElement } from "./domHelpers";
import { createConfirmButton, createCloseButton } from "./newTask";
import addIcon from "./images/add.svg";
import { createNewAddButton } from "./addButton";

function newProjectClick(e) {
    const parent = e.currentTarget.parentNode;
    e.currentTarget.remove();
    const container = createHTMLElement("div", "new-project-container", "new-project-container");
    const newProjectForm = createHTMLElement("div", "new-project-form", "new-project-form");
    const titleArea = createHTMLElement("input", ["textarea", "new-project-textarea"], "new-project-input");
    titleArea.placeholder = "Title: Coding";
    titleArea.type = "text";
    titleArea.size = "18";
    const confirmButton = createConfirmButton();
    addConfirmNewProjectButtonEvent(confirmButton);
    const closeButton = createCloseButton();
    addCloseNewProjectButtonEvent(closeButton);
    const buttonContainer = createHTMLElement("div", "", "new-project-button-container");

    appendChildHelper(container, appendChildHelper(newProjectForm, titleArea));
    appendChildHelper(container, appendChildHelper(buttonContainer, [confirmButton, closeButton]));
    appendChildHelper(parent, container);
    titleArea.focus();
}

function createNewProjectButton() {
    const newButton = createNewAddButton("new-project-button", "add-image", "new-project-text", "New Project");
    return newButton;
}

function reAppendNewProjectButton(parentNode) {
    const newButton = createNewProjectButton();
    addNewProjectButtonEvent(newButton);
    appendChildHelper(parentNode, newButton);
}

export { newProjectClick, createNewProjectButton, reAppendNewProjectButton };