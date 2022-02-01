import { appendChildHelper, createHTMLElement } from "./domHelpers";

const projects = [];

function addProject(title) {
    title = title.slice(0, 1).toUpperCase() + title.slice(1, title.length).toLowerCase();
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
        const foundIndex = project.items.findIndex(id => {
            return id == todoID;
        })
        if (foundIndex >= 0) {
            project.items.splice(foundIndex, 1);
        }
    });
    projects[projectIndex].items.push(todoID);
}

function getIDsOfProject(projectIndex) {
    return projects[projectIndex].items;
}

function getProjects() {
    return projects;
}

function renderProjects() {
    const container = document.getElementById("projects");
    projects.forEach(project => {
        const newProjectElement = createHTMLElement("p", "projects-item");
        newProjectElement.textContent = project.title;
        newProjectElement.id = `project-${projects.findIndex(element => project === element)}`;
        appendChildHelper(container, newProjectElement);
    });
}

export { addProject, addHomeProject, addItemToProject, getIDsOfProject, getProjects, renderProjects };
