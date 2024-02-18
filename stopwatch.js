
let display = document.getElementById("display");

let timer = null;
let startTime= 0;
let elapsedTime=0;
let isTimeRunning =false;

function start(){
    if(!isTimeRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update,10);
        isTimeRunning=true;
    }

}

function stop(){

    if(isTimeRunning){
    clearInterval(timer);
    elapsedTime = Date.now() - startTime;
    isTimeRunning=false;
    }
    
}

function reset(){
        clearInterval(timer);
        startTime= 0;
        elapsedTime=0;
        isTimeRunning =false;
        display.textContent ="00:00:00:00";
    
}

function update(){

    //const currentTime = Date.now();
    //elapsedTime = currentTime - startTime;
    elapsedTime = Date.now() - startTime;

    let hours = Math.floor(elapsedTime/(1000*60*60));
    let minutes=  Math.floor(elapsedTime/(1000*60)%60);
    let seconds= Math.floor( (elapsedTime /1000)%60);
    let milliseconds = Math.floor((elapsedTime%1000)/10);

    hours = String(hours).padStart(2,"0");
    minutes = String(minutes).padStart(2,"0");
    seconds = String(seconds).padStart(2,"0");
    milliseconds = String(milliseconds).padStart(2,"0");

    display.innerText =`${hours}:${minutes}:${seconds}:${milliseconds}`;

}