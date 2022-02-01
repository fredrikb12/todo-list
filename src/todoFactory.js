const ToDoFactory = (title, description, dueDate, priority, project) => {
    const getTitle = () => title;
    const setTitle = (input) => this.title = input;
    const getDescription = () => description;
    const setDescription = (input) => this.description = input;
    const getDueDate = () => dueDate;
    const setDueDate = (input) => this.dueDate = input;
    const getPriority = () => priority;
    const setPriority = (input) => this.priority = input;
    const getProject = () => project;
    const setProject = (input) => this.project = input;
    const getComplete = () => {
        if (this.hasOwnProperty("complete")) {
            return this.complete;
        } else {
            console.log("Complete property not set.");
            return;
        }
    }
    const setComplete = () => {
        if (this.hasOwnProperty("complete")) {
            this.complete = !this.complete;
        } else {
            this.complete = true;
        }
    }
   /* const getProject = () => {
        if(this.hasOwnProperty("project")) {
            return this.project;
        } else {
            console.log("project property not set.");
            return;
        }
    }
    const setProject = (input) => {
        this.project = input;
    }*/


    return { getTitle, setTitle, getDescription, setDescription, getDueDate, setDueDate, getPriority, setPriority, getComplete, setComplete, getProject, setProject };
}

export default ToDoFactory;