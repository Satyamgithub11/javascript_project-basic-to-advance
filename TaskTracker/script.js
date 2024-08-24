document.addEventListener('DOMContentLoaded', loadTasks);
document.getElementById('task-form').addEventListener('submit', addTask);
document.getElementById('task-list').addEventListener('click', manageTasks);

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => createTaskElement(task.text, task.completed));
}

function addTask(e) {
    e.preventDefault();
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        createTaskElement(taskText);
        storeTaskInLocalStorage(taskText);
        taskInput.value = '';
    }
}

function createTaskElement(taskText, completed = false) {
    const li = document.createElement('li');
    li.textContent = taskText;
    if (completed) li.classList.add('completed');

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';

    li.appendChild(deleteBtn);
    document.getElementById('task-list').appendChild(li);
}

function manageTasks(e) {
    if (e.target.classList.contains('delete-btn')) {
        removeTask(e.target.parentElement);
    } else {
        toggleTaskCompletion(e.target);
    }
}

function removeTask(taskElement) {
    taskElement.remove();
    removeTaskFromLocalStorage(taskElement.textContent.replace('Delete', '').trim());
}

function toggleTaskCompletion(taskElement) {
    taskElement.classList.toggle('completed');
    updateTaskStatusInLocalStorage(taskElement.textContent.replace('Delete', '').trim(), taskElement.classList.contains('completed'));
}

function storeTaskInLocalStorage(taskText) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push({ text: taskText, completed: false });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTaskFromLocalStorage(taskText) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(task => task.text !== taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function updateTaskStatusInLocalStorage(taskText, completed) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.map(task => task.text === taskText ? { text: task.text, completed } : task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
