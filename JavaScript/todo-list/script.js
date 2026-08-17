const { check } = require("express-validator");

// Select DOM Elements
const input = document.getElementById('todo-input')
const AddBtn = document.getElementById('add-button')
const list = document.getElementById('todo-list')

// Try to load saved todos from local storage(if any)
const saved = localStorage.getItem('todos');
const todos = saved? JSON.parse(saved) : [];

function saveTodos() {
    // Save current todos
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Create a DOM node for a todo object and append in to the list 
function createTodoNode(todo, index) {
    const li = document.createElement('li');

    // Checkbox to toggle completion
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = !!todo.completed;
    checkbox.addEventListener('change', () => {
        todo.completed = checkbox.checked;

        // TODO : Visual feedback 
        saveTodos();
    }) 
}


// Render the whole todo list from todos array
function render() {
    list.innerHTML = '';

    // Recreate each item
    todos.forEach((todo, index) => {
        const todoNode = createTodoNode(todo, index);
        list.appendChild(todoNode);
    });
}