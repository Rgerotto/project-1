const grid = document.querySelector("#game-board");
const timer = document.querySelector(".time-of");
const startGame = document.querySelector(".button");
let scoreNumber = 0;
let loopInterval;
const backgroundMusic = new Audio("../audio/homealone-audio.mp3");

const characters = [
  { name: "robbers", img: "robbers.png", quantity: 1 },
  { name: "robbers1", img: "robbers1.png", quantity: 1 },
  { name: "robbers2", img: "robbers2.png", quantity: 1 },
  { name: "robbers3", img: "robbers3.png", quantity: 1 },
  { name: "robbers4", img: "robbers4.png", quantity: 1 },
  { name: "robbers5", img: "robbers5.png", quantity: 1 },
  { name: "family", img: "mother-and-father.jpeg", quantity: 1 },
  { name: "robbers", img: "robbers.png", quantity: 1 },
  { name: "robbers1", img: "robbers1.png", quantity: 1 },
  { name: "robbers2", img: "robbers2.png", quantity: 1 },
  { name: "robbers3", img: "robbers3.png", quantity: 1 },
  { name: "robbers4", img: "robbers4.png", quantity: 1 },
  { name: "robbers5", img: "robbers5.png", quantity: 1 },
  { name: "family", img: "mother-and-father.jpeg", quantity: 1 },
  { name: "kevin", img: "kevin-to-png.png", quantity: 20 },
];

const createCard = (character) => {
  const card = document.createElement("div"); // creating a div with class="card"
  card.className = "cards";

  const front = document.createElement("div"); //creating a div with class="face front"
  front.className = "face front";
  front.style.backgroundImage = `url(../img/${character.img})`;

  const back = document.createElement("div"); //creating a div with class="face back"
  back.className = "face back";
  back.setAttribute("quantity", character.quantity); //set the attribute to find the quantity
  back.setAttribute("data-name", character.name); //set the atribute to find the name of it object on array

  card.appendChild(front);
  card.appendChild(back);

  return card;
};

const loadGame = () => {
  //DUPLICATED AND SHUFFLE
  const duplicatedArray = [...characters]; //duplicate the array
  const shuffledArray = duplicatedArray.sort(() => Math.random() - 0.5); //mix the cards on it game
  shuffledArray.forEach((character) => {
    const card = createCard(character);
    grid.appendChild(card);
  });

  const timeOut = setTimeout(() => {
    document.querySelectorAll(".back").forEach((eachCard) => {
      eachCard.classList.remove("back");
      eachCard.classList.add("front");
    });
  }, 700);
  const TimeIn = setTimeout(() => {
    document.querySelectorAll(".front").forEach((eachCard) => {
      eachCard.classList.add("back");
      eachCard.classList.remove("front");
    });
  }, 1000);

  //CLICK SECTION & FLIP
  document.querySelectorAll(".back").forEach((eachCard) => {
    //select class BACK
    eachCard.addEventListener("click", () => {
      //add click to work on it click with the mouse
      eachCard.classList.add("front"); //remove class front
      eachCard.classList.remove("back"); //add class back

      const result = eachCard.getAttribute("quantity"); //creating variable to do SUM of the quantity
      scoreNumber = Number(result);
      scoreNumber += result;
      console.log(scoreNumber);
      if (scoreNumber >= 20) {
        clearInterval(loopInterval);
        function redirect() {
          window.location.href = "../pages/finish-game.html";
        }
        redirect();
        return alert(`Your time is: ${timer.innerHTML}`);
      }
    });
  });
};

startGame.addEventListener("click", () => {
  backgroundMusic.play();
  const startTimer = () => {
    loopInterval = setInterval(() => {
      const currentTime = Number(timer.innerHTML);
      timer.innerHTML = currentTime + 1;
    }, 100);
  };
  startTimer();
});

loadGame();
