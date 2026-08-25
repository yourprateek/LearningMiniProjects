console.log("-----------JS Linked-----------");

const display = document.getElementById("inp");

function appendDisplay(input) {

    if( ifOperator(display.value.slice(-1)) && ifOperator(input) ){
        deAppendDisplay();
        display.value += input;
    }else if(currNum(display.value) == '0'){
        deAppendDisplay(); 
        if(ifOperator(display.value.slice(-1)) && ifOperator(input)){
            deAppendDisplay();
        }
        display.value += input;
    }

    else if( isDecimal(display.value) && input == '.') display.value += '';
    else display.value += input;
    display.scrollLeft = display.scrollWidth;
}
function clearDisplay(){
    display.value = "0";
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
        display.value = "ERROR: 67";
        setTimeout(() => {
            clearDisplay();
        }, 800);
    }
    display.scrollLeft = display.scrollWidth;
}

function ifOperator(char){
    if(char == '+' || char == '-' || char == '/' || char == '*' || char == '.') return true;
    else return false;
}
function currNum(expString){
    const num = expString.split(/[-+/*]/);
    return num.slice(-1)[0];
}
function isDecimal(expression){
    const currentNum = currNum(expression);
    
    if(currentNum.split('.').length < 2 ) return false;
    else return true; 
}