console.log("JS Linked");

// let username= window.prompt("Enter your UserName: ").trim();
// username = username.charAt(0).toUpperCase() + username.slice(1, username.indexOf(" ")+1).toLowerCase() + username.charAt(username.indexOf(" ")+1).toUpperCase() + username.slice(username.indexOf(" ")+2).toLowerCase();
// console.log(username);

// let numbers = [1, 2, 3, 5, 6, 7, 9, 10];
// function display(element){
//     console.log(element);
// }
// function double(element, index, array){
//     array[index] = element * 2;
// }
// console.log("The members of array are: ");
// numbers.forEach(double);
// numbers.forEach(display);

class Account{
    #balance;
    constructor(newfullName, newbalance, newfavColor){
        this.fullName = newfullName;
        this.balance = newbalance;
        this.favColor = newfavColor;

        [this.firstName = '', this.lastName = ''] = this.fullName.split(" ");
    }

    set balance(nicebalance){
        if ( typeof nicebalance === "number") {
            this.#balance = nicebalance;
        }else console.error("Balance must be a number above -1");
    }

    get balance(){
        return this.#balance;
    }

    
};

const myAccount = new Account("Prateek Gupta", 100, 'black');

console.log(myAccount.balance);
myAccount.balance = 1000;
console.log(myAccount.balance);
console.log(`This Account is of ${myAccount.firstName} ${myAccount.lastName}`);

const aryanAccount = new Account("Aryan Sahu", 0, 'white');

console.log(aryanAccount.balance);
aryanAccount.balance = -100;
console.log(aryanAccount.balance);
console.log(`This Account is of ${aryanAccount.firstName} ${aryanAccount.lastName}`);

const user = { username: 'Prateek', age: 21 };

// Extract 'username' and rename the local variable to 'name'
const { username: myname } = user;
console.log(`${myname} is my name`); // 'Prateek'
