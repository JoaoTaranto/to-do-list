const inputElement = document.querySelector('.new-task-input');
const addTaskButton = document.querySelector('.new-task-button');
const validateInput = () => inputElement.value.trim().length > 0;
const tasksContainer = document.querySelector('.tasks-container')

const handleAddTask = () => {
    const inputIsValid = validateInput();

    if (!inputIsValid) {
        return inputElement.classList.add("error");
    }

    const taskItemContainer = document.createElement('div');
    taskItemContainer.classList.add('task-item');

    const taskContent = document.createElement('p');
    taskContent.innerText = inputElement.value;

    const actionTask = document.createElement('div')
    actionTask.classList.add('action-task')


    const checkItem = document.createElement('i')
    checkItem.classList.add('fa-solid')
    checkItem.classList.add('fa-square-check')
    checkItem.addEventListener('click', () => handleCheckClick(taskContent))


    const deleteItem = document.createElement('i')
    deleteItem.classList.add('fa-solid')
    deleteItem.classList.add('fa-trash-can')
    deleteItem.addEventListener('click', () => handleDeleteClick(taskItemContainer, taskContent))

    taskItemContainer.appendChild(taskContent)
    taskItemContainer.appendChild(actionTask)
    actionTask.appendChild(checkItem)
    actionTask.appendChild(deleteItem)

    tasksContainer.appendChild(taskItemContainer)

    inputElement.value = ""
}

const handleCheckClick = (taskContent) => {
    const itemCheck = document.querySelector('.action-task').firstChild;
    const tasks = tasksContainer.childNodes;
    for (const task of tasks) {
        const currentTaskIsBeingClicked = task.firstChild.isSameNode(taskContent)
        if (currentTaskIsBeingClicked) {
            task.firstChild.classList.toggle('completed')
            itemCheck.classList.toggle('icon-completed')
        }
    }
}

const handleDeleteClick = (taskItemContainer, taskContent) => {
    const tasks = tasksContainer.childNodes;
    
    for (const task of tasks) {
        const currentTaskIsBeingClicked = task.firstChild.isSameNode(taskContent)
        if (currentTaskIsBeingClicked) {
            taskItemContainer.remove()
        }
    }
}

const handleInputChange = () => {
    const inputIsValid = validateInput();

    if (inputIsValid) {
        return inputElement.classList.remove("error");
    }
}

addTaskButton.addEventListener("click", () => handleAddTask());

inputElement.addEventListener("change", () => handleInputChange())

