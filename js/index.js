const grid = document.querySelector('#game-board');
const points = document.querySelector('.result-of');
const spanPlayer = document.querySelector('.player')
let scoreNumber = 0;
const characters = [
    { name: 'robbers', img: 'robbers.webp', quantity: 5},
    { name: 'robbers1', img: 'robbers1.webp', quantity: 5 },
    { name: 'robbers2', img: 'robbers2.webp', quantity: 5 },
    { name: 'robbers3', img: 'robbers3.webp', quantity: 5 },
    { name: 'robbers4', img: 'robbers4.webp', quantity: 5 },
    { name: 'robbers5', img: 'robbers5.webp', quantity: 5 },
    { name: 'family', img: 'mother-and-father.jpeg', quantity: -5 },
];

const createCard = (character) => {

    const card = document.createElement('div'); // creating a div with class="card"
    card.classname = 'cards';

    const front = document.createElement('div');//creating a div with class="face front"
    front.className = 'face front';
    front.style.backgroundImage = `url(/img/${character.img})`;

    const back = document.createElement('div');//creating a div with class="face back"
    back.className = 'face back';
    back.setAttribute("quantity", character.quantity)//set the attribute to find the quantity
    back.setAttribute("data-name", character.name);//set the atribute to find the name of it object on array
    console.log("quantity", character.quantity)
    card.appendChild(front);
    card.appendChild(back);
    
    
    return card;
};

const loadGame = () => {
    //DUPLICATED AND SHUFFLE
    const duplicatecharacters = [...characters];//duplicate the array
    const shuffledArray = duplicatecharacters.sort(() => Math.random() - 0.3)//mix the cards on it game
    shuffledArray.forEach((character) => {
        const card = createCard(character);
        grid.appendChild(card);
      });

    characters.forEach((character) => {
        const card = createCard(character);
        grid.appendChild(card);
    });

    const timeOut = setTimeout(() => {
        document.querySelectorAll('.back').forEach((eachCard) => {
            eachCard.classList.remove('back')
            eachCard.classList.add('front')
        })
    },2000)

    const TimeIn = setTimeout(() => {
        document.querySelectorAll('.front').forEach((eachCard) => {
            eachCard.classList.add('back')
            eachCard.classList.remove('front')
        })
    },5000)


    //CLICK SECTION & FLIP
    document.querySelectorAll('.back').forEach((eachCard) => { //select class BACK
        eachCard.addEventListener('click',() => { //add click to work on it click with the mouse
            eachCard.classList.add('front')//remove class front
            eachCard.classList.remove('back') //add class back
            //console.log(eachCard.getAttribute("data-name"));
            
            
            const result = eachCard.getAttribute("quantity");//creating variable to do SUM of the quantity
            scoreNumber += Number(result);
            points.innerText = scoreNumber;
            endGame()
            
           
        });
    });
    //NEXT STEEP TO STOP THE GAME WITHOU ALERT
    //SHOULD GO TO OTHER PAGE WITH KEVIN IMAGE SAYING
    // NO.....NO.... YOU LOSE!!
    const endGame = () => {
        if (scoreNumber === 20) {
            //return alert("Game Over!");
        }
    };
};

window.onload = () => {
    const playerName = localStorage.getItem('palyer');
    spanPlayer.innerHTML = playerName;
}


loadGame()

//TO START GAME
/*
const TimeIn = setTimeout(timetoStart, 500)
    function timeToStart(){
        document.getElementsByTagName('body')
    }

*/



