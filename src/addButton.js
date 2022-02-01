import { appendChildHelper, createHTMLElement } from "./domHelpers";
import addIcon from "./images/add.svg";

function createNewAddButton(containerClass, imageClass, textClass, text) {
    const container = createHTMLElement("div", containerClass);
    const addImage = createHTMLElement("img", imageClass);
    addImage.src = addIcon;
    const addText = createHTMLElement("p", textClass);
    addText.textContent = text;
    appendChildHelper(container, [addImage, addText]);
    return container;
}

export { createNewAddButton };

