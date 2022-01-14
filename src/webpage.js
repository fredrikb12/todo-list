function createHeaderElement() {
    const header = createHTMLElement("header", "header", "header");
    const headerLeft = createHTMLElement("div", "header-left", "header-left");
    const headerLogo = createHTMLElement("h1", "header-logo", "header-logo");
    headerLogo.textContent = "getItDone"
    headerLeft.appendChild(headerLogo);
    const headerCenter = createHTMLElement("div", "header-center", "header-center");
    const addButton = createHTMLElement("button", "header-add-button", "header-add-button");
    addButton.textContent = "+";
    const addButtonText = createHTMLElement("p", "header-button-para", "header-button-para");
    addButtonText.textContent = "new item";
    appendChildHelper(headerCenter, [addButton, addButtonText]);
    const headerRight = createHTMLElement("div", "header-right", "header-right");
    const label = createHTMLElement("label", "switch", "darkModeSwitch");
    const input = createHTMLElement("input");
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
    const mainCenter = createHTMLElement("div", "main-center", "main-center");
    const mainRight = createHTMLElement("div", "main-right", "main-right");
}

function createHTMLElement(element, classes, id) {
    const returnElement = document.createElement(element);
    if (typeof classes === "object") {
        classes.forEach(function (classToAdd) {
            returnElement.classList.add(classToAdd);
        });
    } else if (typeof classes === "string") {
        returnElement.classList.add(classes);
    }
    if (typeof id === "string") {
        returnElement.setAttribute("id", id);
    }
    return returnElement;
}

function appendChildHelper(element, children) {
    if(typeof children === "object") {
        children.forEach(child => {
            element.appendChild(child);
        });
    } else {
       element.appendChild(children);
    }
    return element;
}



export { createHeaderElement };