console.log("JS Linked");

function generatePass(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbol) {
    const lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChar = "0123456789";
    const symbolChar = "!@#$%&?";

    let allowedChar = "";
    let password = "";

    allowedChar += includeLowerCase? lowerCaseChar : "";
    allowedChar += includeUpperCase? upperCaseChar : "";
    allowedChar += includeNumbers? numberChar : "";
    allowedChar += includeSymbol? symbolChar : "";

    for(let i=0; i<length; i++){
        const randomIndex = Math.floor(Math.random()*allowedChar.length);
        password += allowedChar[randomIndex];
    }
    return password;
}

const passwordlength = 50;
const includeLowerCase = 1;
const includeUpperCase = 1;
const includeNumbers = 1;
const includeSymbol = 1;

const password = generatePass(passwordlength, includeLowerCase, includeUpperCase, includeNumbers, includeSymbol);
console.log(`Password: ${password}`);