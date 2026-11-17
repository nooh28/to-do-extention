let tasks =[]
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const clearTasksButton = document.getElementById('clearTasksButton');
const taskList = document.getElementById('taskList');

const tasksFromLocalStorage = JSON.parse(localStorage.getItem('tasks'));
if (tasksFromLocalStorage) {
    tasks = tasksFromLocalStorage;
    renderTasks();
}

function renderTasks() {
    let taskItems = '';
    for (let i = 0; i < tasks.length; i++) {
        taskItems += `
        <li>
            ${tasks[i]} <br> <div></div>
        </li>
        `;
    }
    taskList.innerHTML = taskItems;
}
addTaskButton.addEventListener('click', function() {
    if(taskInput.value.trim() === '') {
        alert('Please enter a task');
        return;
    }
    else {
  tasks.push(taskInput.value);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    taskInput.value = '';
    renderTasks();}
});

clearTasksButton.addEventListener('dblclick', function() {
    tasks = [];
    localStorage.removeItem('tasks');
    renderTasks();
});
