# Minesweeper game

- The purpose of the code is to create a playable minesweeper grid;
- Thanks to a button, the user can generate a square grid;
- The grid will then be created by JavaScript through some functions;
- Thanks to the functions, we will be able to create every cell of the grid and give them the proper CSS classes and all the numbers between 1 and 100;
- Then, we can append the cells to the grid, 10 per row;
- Through another function, we can make the cells clickable;
- So, with a click, the user will be able to generate a console message with the proper number of the cell and to change the color of the same cell;

## Bonus

- Before playing the game, the user can select the difficulty level of the game: easy, medium or hard;
- The selection can be made through a `select`;
- Easy: 100 cells, 10 per row;
- Medium: 81 cells, 9 per row;
- Hard: 49 cells, 7 per row;
- In order to transform the code into a dynamic one, the number of cells to generate will be decided by recalling the proper function and by adding the correct value to the function arguments;
- The number of cells in a row will be decided by a CSS class;
- For each difficulty level, a function will add a proper class to the grid container;
- These classes will set different sizes for the cells;

## Logic

- Regardless of the difficulty chosen by the user, the minesweeper grid will contain 16 bombs, placed in 16 random cells;
- In order to generate them, we need to create an empty array;
- The array will then be filled by a `while` loop;
- The loop will generate 16 random numbers between 1 and the number of cells of the grid;
- In order to avoid duplicate numbers, the loop will also check if the randomized number is inside the array or not;
- We can now modify the function able to make the cells clickable;
- IF the number of the cell is inside the bomb array, the cell turns red and the game is over;
- ELSE the cell turns blue and the user can keep playing;
- The user reaches the game over state if they click on a bomb cell or if they reach the maximum number of clicks (number or cells of the grid - 16 bombs);
- The maximum number of clicks can be managed thanks to another empty array;
- This array can be filled with the numbers clicked by the user;
- IF the number isn't part of the array, we can add it with the `push` method;
- With the push, we can then manage the user score;
- For every push made in the array, the user scores 1 point;
- At the end of the game, the software generates the final score of the user;

## Superbonus 1

- IF the user clicks on a bomb cell, the game is over and the grid cannot be clicked anymore;
- In order to achieve this result, we can just remove the cell EventListener;

## Superbonus 2

- At the game over state, the software reveals all the bombs;
- This behaviour can be triggered with a `for` loop;
- IF the user clicks on a bomb cell, all the cells contained in the bomb array turn red.