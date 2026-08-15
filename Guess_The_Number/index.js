console.log(`JS Linked`);
//Number Guessing Game

const min = 1;
const max = 100;
let game = "yes";

while (game == "yes") {
    let answer = Math.floor(Math.random() * (max - min + 1) + min);
    let attempts = 1;
    var guess;
    let running = true;
    guess = window.prompt(`Enter your guess between ${min} and ${max}: `);

    while (running) {
        guess = Number(guess);

        if (isNaN(guess) || guess < min || guess > max) {
            guess = window.prompt("Please enter a valid Number: ");
        } else if (guess > answer) {
            guess = window.prompt("Think Lower: ");
            attempts++;
        } else if (guess < answer) {
            guess = window.prompt("Think Higher: ");
            attempts++;
        } else {
            game = window.prompt(`YOU WON in ${attempts} attempts! \n Want to play again? (yes/no)`);
            game = game.toLowerCase();
            running = false;
        }
    }
}
