console.log("JS Linked");

//DOM
const startScreen = document.getElementById("start_screen");
const gameScreen = document.getElementById("game_screen");
const resultScreen = document.getElementById("result_screen");
let currentScreen = startScreen;

const choices = ["rock", "paper", "scissors"];
const emoji = ["✊", "🖐️", "✌️"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const instanceResult = document.getElementById("instance_result");

restartGame();

function startGame(){
    startScreen.classList.add("hide");
    gameScreen.classList.remove("hide");
}

function playGame(playerChoice){
    const randomIndex = Math.floor(Math.random()*3);
    const computerChoice = choices[randomIndex];
    if(computerChoice === playerChoice){
        instanceResult.textContent = "Its a Tie!";
        instanceResult.style.color = "whitesmoke"
    }else{
        switch (computerChoice) {
            case "scissors":
                (playerChoice === "rock")? wintext() : lostext();
                break;
            case "rock":
                (playerChoice === "paper")? wintext() : lostext();
                break;
            case "paper":
                (playerChoice === "scissors")? wintext() : lostext();
                break; 
            default:
                break;
        }
    }

    playerDisplay.textContent = emoji[choices.indexOf(playerChoice)];
    computerDisplay.textContent = emoji[randomIndex];
}
function endGame(){
    gameScreen.classList.add("hide");
    resultScreen.classList.remove("hide");
}
function restartGame(){
    gameScreen.classList.add("hide");
    resultScreen.classList.add("hide");
    startScreen.classList.remove("hide");
}


function changeScreenTo(newScreen){
    currentScreen.classList.remove("current_screen");
    currentScreen = newScreen;
    currentScreen.classList.add("current_screen");
}
function wintext(){
    instanceResult.textContent = "You Won!"
    instanceResult.style.color = "#02ff1c";
}
function lostext(){
    instanceResult.textContent = "You Lost!"
    instanceResult.style.color = "#f80202";
}