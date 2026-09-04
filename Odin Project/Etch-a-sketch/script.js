const container = document.querySelector('container');

function createGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div')
        square.classList.add('square')

        square.style.height = `${500 / size}px`
        square.style.width = `${500 / size}px`
        container.appendChild(square)
    }
}

createGrid(16);