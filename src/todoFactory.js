const ToDoFactory = (title, description, dueDate, priority) => {
    const getTitle = () => title;
    const getDescription = () => description;
    const getDueDate = () => dueDate;
    const getPriority = () => priority;
    const setPriority = (input) => this.priority = input;
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
    const getProject = () => {
        if(this.hasOwnProperty("project")) {
            return this.project;
        } else {
            console.log("project property not set.");
            return;
        }
    }
    const setProject = (input) => {
        this.project = input;
    }


    return { getTitle, getDescription, getDueDate, getPriority, setPriority, getComplete, setComplete, getProject, setProject };
}

export default ToDoFactory;