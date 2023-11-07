const container = document.querySelector('#container');

const rowAmount = 0;

const button = document.querySelector('button')

button.addEventListener('click', () => {
    let choice = Number(prompt('how many squares you want?'))

    if (choice > 100) {
        choice = Number(prompt('Make sure its under under 101'))
    }
    const newContainer = document.querySelector('.newContainer')

    if (!newContainer) {
        maker(choice)
    } else {
        newContainer.remove()
        maker(choice)
    }
    
})

let maker = (amount) => {
    const newContainer = document.createElement('div')
    newContainer.classList.add('newContainer')
    for (let i = 0; i < amount; i++) {
        const rows = document.createElement('div')
        rows.classList.add('rows')

        for (let j = 0; j < amount; j++) {
            const rowBox = document.createElement('div')
            rowBox.classList.add('rowBox')
            rows.appendChild(rowBox)
            rowBox.addEventListener('mouseover', () => {
                rowBox.style.background = 'blue';
            })
        }
        newContainer.appendChild(rows)
    }
    container.appendChild(newContainer)
}


maker(rowAmount)