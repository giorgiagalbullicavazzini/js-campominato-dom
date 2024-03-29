'use strict';

////////////
// Functions
////////////

// A function to create an element
function elementCreation(elementType) {
    const element = document.createElement(elementType);

    return element;
}

// A function to add a class to an element
function addClass(element, className) {
    element.classList.add(className);
}

// A function to add a text to an element
function addText(element, text) {
    element.innerText = text;
}

// A function to save the number of rows of a grid game
function gridRowGenerator(value) {
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

// A function to create a random number array generator
function randomArray(arrayElements, min, max) {
    // Creation of an empty array
    const generatedArray = [];

    // The array will be filled by a while loop
    // The loop will generate some random numbers between a min and a max number
    while (generatedArray.length < arrayElements) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

        // In order to avoid duplicate numbers, the loop will also check if the randomized number is inside the array or not
        if (!generatedArray.includes(randomNumber)) {
            generatedArray.push(randomNumber);
        }
    }

    return generatedArray;
}

// A function to manage a click eventListener that adds a specific CSS class
function addClassEvent(element, className) {
    element.addEventListener('click', function () {
        addClass(element, className);
    })
}

////////////
// Main
////////////

// Thanks to a button, the user can generate a square grid
const containerGrid = document.querySelector('.grid');
const play = document.querySelector('.play');
const points = document.querySelector('.points');
const pointsType = document.querySelector('.points-type');
const pointsText = document.querySelector('.points-text');


play.addEventListener('click', function () {
    containerGrid.innerHTML = '';
    points.innerText = '0';
    pointsType.innerText = 'punti';
    pointsText.classList.remove('hidden');

    // Before playing the game, the user can select the difficulty level of the game: easy, medium or hard
    // The number of cells will be decided by recalling the proper function and by adding the correct value to the function arguments
    const difficulty = document.getElementById('difficulty').value;

    const row = gridRowGenerator(difficulty);
    const cells = row * row;

    const bombNumber = 16;

    // Regardless of the difficulty chosen by the user, the grid will always contain the same number of bombs;
    const bombCells = randomArray(bombNumber, 1, cells);

    // The maximum number of clicks can be managed thanks to an empty array
    const clickedCells = [];
    let pointsCounter = 0;

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

        // The cells have a click eventListener
        // IF the cell is a normal one, it turns blue and the user can keep playing
        if (!bombCells.includes(i)) { 
            addClassEvent(cell, 'active');

            cell.addEventListener('click', function keepPlaying() {
                // The user reaches the game over state if they reach the maximum number of clicks (number or cells of the grid - number of bombs)
                if (!clickedCells.includes(i) && clickedCells.length === cells - 1 - bombNumber) {
                    // The points array can be filled with the numbers clicked by the user
                    clickedCells.push(i);
                    // For every push made in the array, the user scores 1 point
                    pointsCounter = clickedCells.length;
                    // At the end of the game, the software generates the final score of the user
                    points.innerText = pointsCounter;
                    if (pointsCounter === 1) {
                        pointsType.innerText = "punto";
                    } else {
                        pointsType.innerText = "punti";
                    }

                    const cellItems = document.querySelectorAll('.cell');
                    for (let i = 0; i < cellItems.length; i++) {
                        // At the game over state, the software reveals all the bombs
                        if (bombCells.includes(i + 1)) {
                            cellItems[i].classList.add('bomb');
                        }
                    
                        cellItems[i].replaceWith(cellItems[i].cloneNode(true));
                    }

                    alert('Hai vinto!');

                } else if (!clickedCells.includes(i)) {
                    // The points array can be filled with the numbers clicked by the user
                    clickedCells.push(i);
                    // For every push made in the array, the user scores 1 point
                    pointsCounter = clickedCells.length;
                    // At the end of the game, the software generates the final score of the user
                    points.innerText = pointsCounter;
                    if (pointsCounter === 1) {
                        pointsType.innerText = "punto";
                    } else {
                        pointsType.innerText = "punti";
                    }
                }
            })
        } else {
            // IF the number of the cell is inside the bomb array, the cell turns red and the game is over
            addClassEvent(cell, 'bomb');

            // IF the user clicks on a bomb cell, the grid cannot be clicked anymore
            cell.addEventListener('click', function gameOver() {
                const cellItems = document.querySelectorAll('.cell');
                for (let i = 0; i < cellItems.length; i++) {
                    // At the game over state, the software reveals all the bombs
                    if (bombCells.includes(i + 1)) {
                        cellItems[i].classList.add('bomb');
                    }

                    cellItems[i].replaceWith(cellItems[i].cloneNode(true));
                }

                alert('Game over!');
            })
        }

        containerGrid.append(cell);
    }
})