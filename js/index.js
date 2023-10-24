const grid = document.querySelector('#game-board');

const characters = [
    { name: 'aquaman', img: 'aquaman.jpg' },
    { name: 'batman', img: 'batman.jpg' },
    { name: 'captain america', img: 'captain-america.jpg' },
    { name: 'fantastic four', img: 'fantastic-four.jpg' },
    { name: 'aquaman', img: 'aquaman.jpg' },
    { name: 'batman', img: 'batman.jpg' },
    { name: 'captain america', img: 'captain-america.jpg' },
    { name: 'fantastic four', img: 'fantastic-four.jpg' },
    { name: 'flash', img: 'flash.jpg' }
];

const createCard = (character) => {

    const card = document.createElement('div'); // creating a div with class="card"
    card.classname = 'cards';

    const front = document.createElement('div');//creating a div with class="face front"
    front.className = 'face front';
    front.style.backgroundImage = `url(/img/${character.img})`;

    const back = document.createElement('div');//creating a div with class="face back"
    back.className = 'face back';

    card.appendChild(front);
    card.appendChild(back);
    
    /*CLICK SECTION & FLIP*/

    document.querySelectorAll('.back').forEach((eachCard) => {
        eachCard.addEventListener('click',() => {
            eachCard.classList.add('front')
            eachCard.classList.remove('back')  
        });
    });
    return card;
};
        


const loadGame = () => {
    console.log(characters.length);
    characters.forEach((character) => {
        const card = createCard(character);
        grid.appendChild(card);
    });
};
loadGame()






/*

//SCORE 
        let score = 50;
            
        //CARDS EMPTY 
        //let firstCard = '';
        //let secondCard = '';

        //CHECKING CARDS 
        const checkCards = () =>{
            if(firstCard === 'robbers'){
                score-=10;
                if(secondCard === 'family'){
                    score+=3;
                };
            };
        });

    document.querySelectorAll('.card').forEach(('card') => {
        card.addEventListener('click',() => {
            
        })
    })
});
const grid = document.querySelector('.cards-container');
*/
