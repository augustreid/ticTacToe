# 2108 FE Final Solo Project -- Tic Tac Toe

## Abstract
The goal of this project was to build a functional attractive game of tic tac toe from the ground up.
We were provided a very basic layout to match, but otherwise given free reign in the design of the game. 
The game needed to be playable, to detect wins and draws, and to keep track of each player's wins so that 
they persist when the page is refreshed. I chose to implement an extra layer of game structure, so that 
the users are competing in a tournament. The first player to win three rounds wins the tournament, 
and then they are presented with a button to reload the page for a new tournament. 

## Creator
[August Reid](https://github.com/augustreid)

## Technologies
- Javascript
- HTML
- CSS 
- Atom

## Project Spec
Instructions and rubric for this project can be found [HERE](https://frontend.turing.edu/projects/module-1/tic-tac-toe-solo.html)

## Wins
I really enjoyed this challenge. The process of making a functional data model before connecting it to the DOM was very helpful.
I actually finished with a fully functional game a day early, which gave me time to dome refactoring. I also decided to use 
that extra time to implement a tournament style game, which included additional win tracking and a refresh button. 

## Challenges
My code got very messy and ham-fisted. Definitely not fully SRP and DRY. And I did end up with a few global variables. 
After meeting with my mentor, I had a list of things to work on and ideas for how to refactor for much cleaner code. 
I chose to implement some of those suggestions, but there were some that would require a serious overhaul of my data model and approach. 
I would love to start over from scratch with the knowledge I have now. 

## User Instructions
When the page loads, you will see a blank tic tac toe board, with side panels containing win data for `Player 1` and `Player 2`. 
Each player has an emoji token -- a `honeybee` or `sunflower`. The header above the board displays who's turn it is. 

<img width="1222" alt="Screen Shot 2021-09-28 at 4 52 49 PM" src="https://user-images.githubusercontent.com/87552193/135189540-b7327858-d51b-46fb-b972-2865eec3039a.png">

To take a turn, **click** on your chosen `square`, and it will be filled with your emoji token. 

<img width="1215" alt="Screen Shot 2021-09-28 at 4 53 40 PM" src="https://user-images.githubusercontent.com/87552193/135189611-28876da7-0546-4eea-9309-77abcae30be5.png">

If a player gets three tokens in a row horizontally, vertically, or diagonally, they **win!** The board header will declare the winner
before clearing the board for the next round. 
If the board is filled without either player achieving three in a row, a **draw** is declared. 

The `rounds counter` for each player keeps track of wins. 

<img width="1211" alt="Screen Shot 2021-09-28 at 4 54 28 PM" src="https://user-images.githubusercontent.com/87552193/135190627-ff35e1a0-e840-42ab-a94e-61fcd020f927.png">

When one player wins **three rounds**, they are declared **tournament champion**, and their `wins` data will be updated. A `button` will appear, which the user clicks 
to `start a new tournament`. Clicking this button will reload the page, clearing the `rounds` win data for each player back to zero.
However, the `tournament wins` count will persist on refresh. 


<img width="1211" alt="Screen Shot 2021-09-28 at 4 55 16 PM" src="https://user-images.githubusercontent.com/87552193/135191174-b6d63c4f-9d53-44e4-aa00-44dd90835f90.png">


<img width="1218" alt="Screen Shot 2021-09-28 at 4 51 26 PM" src="https://user-images.githubusercontent.com/87552193/135191219-28ec5098-e4f3-4db2-81b4-54a2ea6d8700.png">
