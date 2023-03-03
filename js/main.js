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

// A function to add a text to an element
function addText (element, text) {
    element.innerText = text;
}

// A function to save the number of rows of a grid game
function gridRowGenerator (value) {
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

// Random number array generator
function randomArray(arrayElements, min, max) {
    // Creation of an empty array
    const generatedArray = [];

    // The array will be filled by a while loop
    // The loop will generate 16 random numbers between 1 and the number of cells of the grid
    while (generatedArray.length < arrayElements) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

        // In order to avoid duplicate numbers, the loop will also check if the randomized number is inside the array or not
        if (!generatedArray.includes(randomNumber)) {
            generatedArray.push(randomNumber);
        }
    }

    console.log(generatedArray);
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

    const row = gridRowGenerator(difficulty);
    const cells = row * row;

    // Creation of the grid
    for (let i = 1; i <= cells; i++) {
        // The cells have the proper class and numbers
        const cell = elementCreation('div');
        addClass(cell, 'cell');
        addText(cell, i);

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

    // Regardless of the difficulty chosen by the user, the grid will always contain 16 bombs;
    randomArray(16, 1, cells);
})


// We can now modify the function able to make the cells clickable
// IF the number of the cell is inside the bomb array, the cell turns red and the game is over
// ELSE the cell turns blue and the user can keep playing
// The user reaches the game over state if they click on a bomb cell or if they reach the maximum number of clicks (number or cells of the grid - 16 bombs)
// The maximum number of clicks can be managed thanks to another empty array
// This array can be filled with the numbers clicked by the user
// IF the number isn't part of the array, we can add it with the `push` method
// With the push, we can then manage the user score
// For every push made in the array, the user scores 1 point
// At the end of the game, the software generates the final score of the user


// IF the user clicks on a bomb cell, the game is over and the grid cannot be clicked anymore
// In order to achieve this result, we can just remove the cell EventListener


// At the game over state, the software reveals all the bombs
// This behaviour can be triggered with a `for` loop
// IF the user clicks on a bomb cell, all the cells contained in the bomb array turn red