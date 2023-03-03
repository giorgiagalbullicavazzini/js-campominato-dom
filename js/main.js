'use strict';

////////////
// Functions
////////////

// A function to create an element
function elementCreation (elementType) {
    const element = document.createElement(elementType);

    return element;
}

// A function to add a class to an element
function addClass (element, className) {
    element.classList.add(className);
}

// A function to index a generic element
function addIndex (element, i) {
    element.innerText = i;
}

// A function to create a grid generator
function gridGenerator (value) {
    let counter = 0;

    switch (value) {

        case '':
            alert('Seleziona la difficoltà!');
            break;
        
        case 'easy':
            counter = 10;
            break;
        
        case 'medium':
            counter = 9;
            break;

        case 'hard':
            counter = 7;
            break;
    }

    return counter;
}

////////////
// Main
////////////

// Thanks to a button, the user can generate a square grid
const containerGrid = document.querySelector('.grid');
const play = document.querySelector('.play');

play.addEventListener('click', function() {
    containerGrid.innerHTML = '';

    // Before playing the game, the user can select the difficulty level of the game: easy, medium or hard
    // The number of cells will be decided by recalling the proper function and by adding the correct value to the function arguments
    const difficulty = document.getElementById('difficulty').value;

    const row = gridGenerator(difficulty);
    const cells = row * row;

    // Creation of the grid
    for (let i = 1; i <= cells; i++) {
        // The cells have the proper class and numbers
        const cell = elementCreation('div');
        addClass(cell, 'cell');
        addIndex(cell, i);

        // The number of cells in a row will be decided by a CSS class
        if (row === 10) {
            addClass(cell, 'cell-10');
        } else if (row === 9) {
            addClass(cell, 'cell-9');
        } else if (row === 7) {
            addClass(cell, 'cell-7');
        }

        containerGrid.append(cell);

        // The cells have a click eventListener 
        cell.addEventListener('click', function() {
            addClass(cell, 'active');
            console.log(i);
        })
    }
})