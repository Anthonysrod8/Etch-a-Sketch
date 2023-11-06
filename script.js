const container = document.querySelector('#container');

let maker = (rows, cols) => {
    container.style.setProperty('--grid-rows', rows)
    container.style.setProperty('--grid-cols', cols)
    for (let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement('div');
        container.appendChild(cell).className = 'grid-item';
        cell.innerText = (i + 1)

    }
}
maker(16, 16)