const container = document.querySelector('#container');
const changeGridSize = document.querySelector('#resize')
const colorMode = document.querySelector('#colorMode')

let mode = 'single'
let selectedColor = randomColor()
let gridSize = 16

function createGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div')
        square.classList.add('square')

        square.style.height = `${500 / size}px`
        square.style.width = `${500 / size}px`
        let opacity = 0;
        square.addEventListener("mouseover", function () {
            opacity += 0.1;
            square.style.opacity = opacity;
            if(mode === 'single')
                square.style.backgroundColor = selectedColor
            else    
                square.style.backgroundColor = randomColor()
        });
        container.appendChild(square)
    }
}

createGrid(gridSize);

changeGridSize.addEventListener('click', () => {
    let size = prompt("Enter grid size")
    if (size > 100) {
        alert("Grid size cannot be more than 100")
        return
    }
    gridSize = size
    container.innerHTML = "";
    createGrid(gridSize)
})

colorMode.addEventListener('change', () => {
    mode = colorMode.value
    if(mode === 'single')
        selectedColor = randomColor()

    container.innerHTML = "";
    createGrid(gridSize)
})

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`
}