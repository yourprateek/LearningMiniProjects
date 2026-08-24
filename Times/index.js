console.log("--------------------JS Linked--------------------");

//CLOCK

updateClock();
function updateClock(){
    const now = new Date();
    let hours = now.getHours();
    const meridiem = (hours < 12)? "AM" : "PM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0);
    const min = now.getMinutes().toString().padStart(2, 0);
    const sec = now.getSeconds().toString().padStart(2, 0);

    const timeString = `${hours}:${min}:${sec} ${meridiem}`;
    document.getElementById("clock").textContent = timeString;
}
setInterval(updateClock, 1000);

//TIMER

const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");

let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function updateTimer(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let timerHour = Math.floor(elapsedTime/ (1000 * 60 * 60));
    let timerMin  = Math.floor(elapsedTime/ (1000*60)% 60);
    let timerSec  = Math.floor(elapsedTime/ 1000% 60);
    let milliSec  = Math.floor(elapsedTime%1000 /10);
    timerHour = timerHour.toString().padStart(2, 0);
    timerMin  = timerMin.toString().padStart(2, 0);
    timerSec  = timerSec.toString().padStart(2, 0);
    milliSec = milliSec.toString().padStart(2, 0);

    display.textContent = `${timerHour}:${timerMin}:${timerSec}:${milliSec}`;
}

function start(){
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(updateTimer, 10);

        isRunning = true;
        startBtn.disabled = true;
        stopBtn.disabled = false;
    }
}

function stop(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;

        isRunning = false;
        startBtn.disabled = false;
        stopBtn.disabled = true;
    }
}

function reset() {
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    startBtn.disabled = false;
    stopBtn.disabled = false;

    display.textContent = "00:00:00:00";
}