console.log("-----------JS Linked-----------");

const display = document.getElementById("inp");

function appendDisplay(input) {

    if( ifOperator(display.value.slice(-1)) && ifOperator(input) ){
        display.value += '';
    }
    else display.value += input;
    display.scrollLeft = display.scrollWidth;
}
function clearDisplay(){
    display.value = "";
    display.scrollLeft = display.scrollWidth;
}
function deAppendDisplay() {
    display.value = display.value.slice(0,-1);
    display.scrollLeft = display.scrollWidth;
}
function calculate(){
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "ERROR: 067";
    }
    display.scrollLeft = display.scrollWidth;
}

function ifOperator(char){
    if(char == '+' || char == '-' || char == '/' || char == '*') return true;
    else return false;
}