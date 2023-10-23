const grid = document.querySelector('#game-board');

const characters = [
    { name: 'aquaman', img: 'aquaman.jpg' },
    { name: 'batman', img: 'batman.jpg' },
    { name: 'captain america', img: 'captain-america.jpg' },
    { name: 'fantastic four', img: 'fantastic-four.jpg' },
    { name: 'flash', img: 'flash.jpg' },
];
/*CREATING NEW CARDS (CHARACTERS) */
const createCard = () => {
    const card = document.createElement('div'); // creating a div with class="card"
    card.classname = 'card';

    const front = document.createElement('div');//creating a div with class="face front"
    front.className = 'face front';
    front.style.backgroundImage() = `url${characters.img}`

    const back = document.createElement('div');//creating a div with class="face back"
    back.className = 'face back';

    card.appendChild(front);
    card.appendChild(back);

    return card;
    console.log(card);
}
createCard();



const loadGame = () => {
    characters.forEach((character) => {
        const card = createCard();
        grid.appendChild(card);
    });
};
loadGame()





/*
const robbers = [
    {name: 'robbers', img: 'robbers.webp'},
    {name: 'robbers1', img: 'robbers1.webp'},
    {name: 'robbers2', img: 'robbers2.webp'},
    {name: 'robbers3', img: 'robbers3.webp'},
    {name: 'robbers5', img: 'robbers5.webp'},
]
const family = [
    {name: 'family', img: 'mother-and-father'},
    {name: 'family', img: 'mother-and-father'},
]

const homeAloneGame = new homeAlone(cards);
window.addEventListener('load', (event) => {
    let page = '';
    homeAloneGame.cards.forEach((cardGame) => {
        page += `<div class="card" data-card-name="${cardGame.name}">
        <div class="back" name="${cardGame.img}"></div>
        <div class="front" style="background: url(img/${cardGame.card}) no-repeat"></div>
        </div>
        `;
    });
    document.querySelector('#').innerHTML = page;

    document.querySelectorAll('.card').forEach(('card') => {
        card.addEventListener('click',() => {
            
        })
    })
});
const grid = document.querySelector('.cards-container');

/*SCORE 

let score = 50;

/*CARDS EMPTY 
let firstCard = '';
let secondCard = '';

/*CHECKING CARDS 
const checkCards = () =>{
    if(firstCard === 'robbers'){
        score-=10;
        if(secondCard === 'family'){
            score+=3;
        }
}
*/