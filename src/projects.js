import { appendChildHelper, createHTMLElement, removeAllChildren } from "./domHelpers";
import { createTodos, getTodosByID } from "./todoItems";

const projects = [];
const currentProject = 0;

function addProject(title) {
    title = title.slice(0, 1).toUpperCase() + title.slice(1, title.length).toLowerCase();
    projects.push({
        title: title,
        items: [],
    });
    projects[projects.length - 1].index = projects.length - 1;
    renderProjects();
    console.dir(projects);
}

function addHomeProject() {
    addProject("Home");
}

function addItemToProject(todoID, projectIndex) {
    console.log(`adding todo with id ${todoID} to project with index ${projectIndex}`);
    projects.forEach(project => {
        const foundIndex = project.items.findIndex(id => {
            return id == todoID;
        })
        if (foundIndex >= 0) {
            project.items.splice(foundIndex, 1);
        }
    });
    projects[projectIndex].items.push(todoID);
    if(projectIndex > 0) {
        projects[0].items.push(todoID);
    }
    console.log(projects[projectIndex]);
}

function deleteItemFromProject(todoID) {
    projects.forEach(project => {
        if (project.items.includes(todoID)) {
            project.items.splice(todoID, 1, "");
        }
    });
    createTodos(getTodosByID(getIDsOfProject(currentProject)));
}

function getIDsOfProject(projectIndex) {
    return projects[projectIndex].items;
}

function getProjects() {
    return projects;
}

function getProjectIndexByTitle(title) {
    console.log("Getting project index");
    console.log("Title is: " + title);
    for (let i = 0; i < projects.length; i++) {
        if (projects[i].title === title) {
            console.log(i);
            return i;
        } 
    }
    return 0;
}

function renderProjects() {
    const container = document.getElementById("projects");
    removeAllChildren(container);
    projects.forEach(project => {
        const newProjectElement = createHTMLElement("p", "projects-item");
        newProjectElement.textContent = project.title;
        newProjectElement.dataset.projectIndex = `${projects.findIndex(element => project === element)}`;
        newProjectElement.addEventListener("click", (e) => {
        createTodos(getTodosByID(getIDsOfProject(newProjectElement.dataset.projectIndex)));
        })
        appendChildHelper(container, newProjectElement);
    });
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
