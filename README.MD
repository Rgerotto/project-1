# NOME OF MY PROJECT

Home Alone

## My projec idea

add img here
![Project game](project%20game.png)

## Backlog

-put sound of it card clicked
-transiction from page to page

## the inicial ideia was

--everytime when the client choose a card when there are on the back the roobers shopuld show the pic of Kevin scary
--it pic of the roobers the score should increase points
--it pic of the family shoulkd decrease half points
-use pic of Kevin (Macaulay Culkin) scray one  
-use pic of the roobers
-use pic of the family of Kevin

-
-
-
-

## creat a game loop

game loop needs to be there only if we want to make things move without the user interaction

javascript
let gameLoopID
function gameloop(){
//update game status
//render game
if (!gameover){}
gameLoopID = requestAnimationForm(gameLoop)
}

if you want certain actions to happen after a few seconds/frames, it's good to add a frameCount:

javascript
let gameLoopID;
let frameCount = 0;
function gameLoop(){
rameCount++;
if(frameCount % 100 === 0){
addEnemy()
}
}
