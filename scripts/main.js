function createGrid(dimension) {
    const gridContainer = document.querySelector('#grid-container');
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

createGrid(16);

const squares = document.querySelectorAll('.column');
squares.forEach(square => {
    square.addEventListener('mouseover', () => {
        colorSquare(colorPicker.value, square);
    });
});

const clearButton = document.querySelector('#clear-grid');
clearButton.addEventListener('click', () => {
    clearGrid();
    const userDimension = prompt('Set grid dimensions: ');
    createGrid(userDimension);
    const squares = document.querySelectorAll('.column');
    squares.forEach(square => {
        square.addEventListener('mouseover', () => {
            colorSquare(colorPicker.value, square);
        });
});
});

const colorPicker = document.querySelector('#color-picker');
console.log(colorPicker.value);