const grid = document.querySelector('#game-board');

const characters = [
    { name: 'javascript', img: 'javascript-1.svg' },
    { name: 'ironhack', img: 'ironhack.png' },
    { name: 'javascript', img: 'javascript-1.svg' },
    { name: 'ironhack', img: 'ironhack.png' },
    { name: 'ironhack', img: 'ironhack.png' }
];

const createCard = (character) => {

    const card = document.createElement('div'); // creating a div with class="card"
    card.classname = 'cards';

    const front = document.createElement('div');//creating a div with class="face front"
    front.className = 'face front';
    front.style.backgroundImage = `url(/img/${character.img})`;

    const back = document.createElement('div');//creating a div with class="face back"
    back.className = 'face back';

    back.setAttribute("data-name", character.name);//set the atribute to find the name of it object on array

    card.appendChild(front);
    card.appendChild(back);
    
    
    return card;
};

const loadGame = () => {
    //DUPLICATED AND SHUFFLE
    const duplicatecharacters = [...characters, ...characters];//duplicate the array
    const shuffledArray = duplicatecharacters.sort(() => Math.random() - 0.3)//mix the cards on it game
    shuffledArray.forEach((character) => {
        const card = createCard(character);
        grid.appendChild(card);
      });

    characters.forEach((character) => {
        const card = createCard(character);
        grid.appendChild(card);
    });
    //CLICK SECTION & FLIP
    document.querySelectorAll('.back').forEach((eachCard) => { //select class BACK
        eachCard.addEventListener('click',() => { //add click to work on it click with the mouse
            eachCard.classList.add('front')//remove class front
            eachCard.classList.remove('back') //add class back
            console.log(eachCard.getAttribute("data-name"));

            //try to upload the score
            if(("data-name".name) === "javascript"){
                //console.log(eachCard.getAttribute('data-name'))
                return true
            }

        });
    });
    
};
loadGame()