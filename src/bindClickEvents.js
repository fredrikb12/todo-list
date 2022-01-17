function bindClickEvents() {
    const [newItemButton, projectsButton, importantButton] = findButtons(["header-add-button", "projects-button", "important-button"]);
    const darkModeCheckbox = document.getElementById("dark-mode-checkbox");

    newItemButton.addEventListener("click", () => {
        //show some modal form for adding a new todo
    });

    projectsButton.addEventListener("click", (e) => {
        e.stopPropagation();
        projectsButton.nextElementSibling.classList.toggle("sidebar-hidden");
    });

    importantButton.addEventListener("click", (e) => {
        e.stopPropagation();
        importantButton.nextElementSibling.classList.toggle("sidebar-hidden");
    });

    darkModeCheckbox.addEventListener("click", () => {
        //change color scheme somehow
    })
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
        domButtons.find(function(button) {
            return button.id === buttonIDs;
        });
    }
    return returnButtons;
}

export default bindClickEvents;