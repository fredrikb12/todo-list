import { appendChildHelper, createHTMLElement, removeAllChildren } from "./domHelpers";
import { createTodos, getTodos, getTodosByID } from "./todoItems";
import deleteIcon from "./images/delete.svg";

const projects = [];
const currentProject = 0;

function addProject(title) {
    title = title.slice(0, 1).toUpperCase() + title.slice(1, title.length).toLowerCase();
    for (let i = 0; i < projects.length; i++) {
        if(projects[i] == null) continue;
        if (projects[i].title === title) return;
    }
    projects.push({
        title: title,
        items: [],
    });
    projects[projects.length - 1].index = projects.length - 1;
    renderProjects();
}

function addHomeProject() {
    addProject("Home");
}

function addItemToProject(todoID, projectIndex) {
    projects.forEach(project => {
        if (project == null || project == undefined) return;
        const foundIndex = project.items.findIndex(id => {
            return id == todoID;
        })
        if (foundIndex >= 0) {
            project.items.splice(foundIndex, 1);
        }
    });
    projects[projectIndex].items.push(todoID);
    if (projectIndex > 0) {
        projects[0].items.push(todoID);
    }
}

function deleteItemFromProject(todoID) {
    let projectTitle;
    getProjects().forEach(project => {
        if (project == null || project == undefined) return;
        if (project.items.includes(+todoID)) {
            project.items.splice(todoID, 1, "");
            projectTitle = project.title;
        }
    });
    createTodos(getTodosByID(getIDsOfProject(getProjectIndexByTitle(projectTitle))));
}

function deleteProject(projectIndex) {
    console.log(`Deleting project with index ${projectIndex}`);
    const projectToDelete = getProjects()[projectIndex];
    getProjects()[projectIndex].items.forEach(index => {
        console.log(`Assigning todo with index ${index} to home project`);
        console.log(getTodos()[index]);
        getTodos()[index].setProject("Home");
        console.log(getTodos()[index].getProject());
    });
    getProjects().splice(projectIndex, 1, null);

}

function getIDsOfProject(projectIndex) {
    return projects[projectIndex].items;
}

function getProjects() {
    return projects;
}

function setProjectToHome(project) {
    project.items.forEach(item => {
        item.setProject("Home");
    });
}

function getProjectIndexByTitle(title) {
    for (let i = 0; i < projects.length; i++) {
        if (projects[i] == null) continue;
        if (projects[i].title === title) {
            return i;
        }
    }
    return 0;
}

function renderProjects() {
    const container = document.getElementById("projects");
    removeAllChildren(container);
    projects.forEach(project => {
        if(project == null) return;
        const newProjectContainer = createHTMLElement("div", "projects-item-container");
        const newProjectElement = createHTMLElement("p", "projects-item");
        newProjectElement.textContent = project.title;
        newProjectElement.dataset.projectIndex = `${projects.findIndex(element => project === element)}`;
        newProjectElement.addEventListener("click", (e) => {
            const titleNode = document.getElementById("todo-page-title");
            const projectIndex = newProjectElement.dataset.projectIndex
            titleNode.textContent = getProjects()[projectIndex].title;
            createTodos(getTodosByID(getIDsOfProject(projectIndex)));

        });

        const projectIndex = newProjectElement.dataset.projectIndex;
        if (projectIndex > 0) {
            console.log(projectIndex);
            const newDeleteButton = createHTMLElement("img", "projects-item-delete");
            newDeleteButton.src = deleteIcon;
            newDeleteButton.addEventListener("click", (e) => {
                handleProjectDeletion(e, projectIndex)
            });
            appendChildHelper(container, appendChildHelper(newProjectContainer, [newProjectElement, newDeleteButton]));
        } else {
            appendChildHelper(container, appendChildHelper(newProjectContainer, [newProjectElement]));
        }


    });
}

function handleProjectDeletion(e, projectIndex) {
    e.target.parentNode.remove();
    deleteProject(projectIndex);
}

function editProjectName(string, projectIndex) {
    if (typeof string === "string") {
        projects[projectIndex].title = string;
    }
}

export {
    addProject, addHomeProject, addItemToProject, deleteItemFromProject, editProjectName,
    getIDsOfProject, getProjects, getProjectIndexByTitle, renderProjects
};
