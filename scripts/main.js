function createGrid(dimension) {
    const gridContainer = document.querySelector('#grid-container');
    gridSizeLabel.textContent = `${gridSize.value} x ${gridSize.value}`;
    if (gridContainer.hasChildNodes) {
        gridContainer.querySelectorAll('*').forEach(n => n.remove());
    }

    for (let row = 0; row < dimension; row++) {
        const rows = document.createElement('div');
        rows.classList.add('row', 'squares')
        gridContainer.appendChild(rows);
        for (let column = 0; column < dimension; column++) {
            const columns = document.createElement('div');
            columns.classList.add('column', 'squares');
            rows.appendChild(columns);
        }
    }
}

function colorSquare(color, square) {
    square.setAttribute('style', `background-color: ${color};`)
}

function clearGrid() {
    squares.forEach(square => {
        square.setAttribute('style', 'background-color: lightgray;')
    })
}

function draw() {
    const squares = document.querySelectorAll('.column');
    squares.forEach(square => {
        square.addEventListener('mouseover', () => {
            colorSquare(colorPicker.value, square);
        });
    });
}

const gridSize = document.querySelector('input.grid-size');
const gridSizeLabel = document.querySelector('label.grid-size')
createGrid(gridSize.value);

gridSize.addEventListener('click', () => {
    createGrid(gridSize.value);
    draw();
});

draw();

const clearButton = document.querySelector('#clear-grid');
clearButton.addEventListener('click', () => {
    clearGrid();
    createGrid(gridSize.value);
    draw();
});


const colorPicker = document.querySelector('#color-picker');
console.log(colorPicker.value);