const timeElement = document.getElementById("Time");
let intervalId;
let elapsedTime = 0;

function updateTime(){
    const Hours = Math.floor(elapsedTime/3600000);
    const Minutes = Math.floor((elapsedTime%3600000)/60000);
    const Seconds = Math.floor((elapsedTime%60000)/1000);
    const MilliSeconds = elapsedTime % 1000;

    timeElement.textContent= `${Hours.toString().padStart(2,"0")}:
    ${Minutes.toString().padStart(2,"0")}:
    ${Seconds.toString().padStart(2,"0")}.
    ${MilliSeconds.toString().padStart(3,"0")}`;

    elapsedTime += 100;
}   

function StartStopwatch(){
    intervalId=setInterval(updateTime,100);
}

function PauseStopwatch(){
    clearInterval(intervalId);
}

function ResetStopwatch(){
    PauseStopwatch();
    elapsedTime=0;
    timeElement.textContent="00:00:00.000";
}

document.getElementById("Start").addEventListener("click",StartStopwatch);
document.getElementById("Pause").addEventListener("click",PauseStopwatch);
document.getElementById("Reset").addEventListener("click",ResetStopwatch);