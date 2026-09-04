//const { check } = require("express-validator");

// Select DOM Elements
const input = document.getElementById('todo-input')
const AddBtn = document.getElementById('add-button')
const list = document.getElementById('todo-list')

// Try to load saved todos from local storage(if any)
const saved = localStorage.getItem('todos');
const todos = saved ? JSON.parse(saved) : [];

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

        // Visual feedback 
        textSpan.style.textDecoration = todo.completed ? 'line-through' : ""
        saveTodos();
    });

    // Text of the todo
    const textSpan = document.createElement('span')
    textSpan.textContent = todo.text
    textSpan.style.margin = '0 8px'
    if (todo.completed) {
        textSpan.style.textDecoration = 'line-through'
    }

    // Add double-click listener to edit node
    textSpan.addEventListener('dblclick', () => {
        const newText = prompt('Edit todo', todo.text)
        if (newText !== null) {
            todo.text = newText.trim()
            textSpan.textContent = todo.text
            saveTodos()
        }
    })

    // Delete todo button
    const delBtn = document.createElement('button');
    delBtn.textContent = "Delete"
    delBtn.addEventListener('click', () => {
        todos.splice(index, 1)
        render()
        saveTodos()
    })

    li.appendChild(checkbox)
    li.appendChild(textSpan)
    li.appendChild(delBtn)
    return li
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
function addTodo() {
    const text = input.value.trim()
    if (!text)
        return
    todos.push({ text, completed: false })
    input.value = ''
    render()
    saveTodos()
}

AddBtn.addEventListener('click', addTodo)
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTodo()
    }
})

render()