console.log("--------------------JS Linked--------------------");

const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
const suites = [
    {name: "Spade", black: true},
    {name: "Club", black: true},
    {name: "Diamond", black: false},
    {name: "Heart", black: false}];

console.log(cards);

//Fisher-Yates Method
function shuffle(arr){
    for(let i = arr.length-1; i>0; i--){
        const random = Math.floor(Math.random()* (i+1));
        
        [arr[i], arr[random]] = [arr[random], arr[i]];
    }
}

shuffle(cards);
console.log(cards);