var light = document.getElementById("light");
var dark = document.getElementById("dark");

var header = document.getElementById("header");
var watchContainer = document.getElementById("watch-container");
var mainContainer = document.getElementById("main-container");

function darkMode(){
    light.classList.remove("hidden");
    dark.className += " hidden";

    header.className += " dark-bg-color";
    watchContainer.className += " dark-bg-color";
    mainContainer.className += " dark-bg-img";
}

function lightMode(){
    dark.classList.remove("hidden");
    light.className += " hidden";

    header.classList.remove("dark-bg-color");
    watchContainer.classList.remove("dark-bg-color");
    mainContainer.classList.remove("dark-bg-img");
}


var playBtn = document.getElementById("play");
var pauseBtn = document.getElementById("pause");
var stopBtn = document.getElementById("stop");

function play(){
    playBtn.className += " hidden";
    pauseBtn.classList.remove("hidden");
    stopBtn.classList.remove("hidden");
}

function stop(){
    playBtn.classList.remove("hidden");
    pauseBtn.className += " hidden";
    stopBtn.className += " hidden";
}

function pause(){
    pauseBtn.className += " hidden";
    playBtn.classList.remove("hidden");
}


var minText = document.getElementById("min");
var secText = document.getElementById("sec");
var msecText = document.getElementById("msec");

var min = 0, sec = 0, msec = 0;
var interval;

function timer(){
    msec++;
    msecText.innerHTML = msec;

    if(msec >= 100){                // going up to 100 millisecs 
        msec = 0;
        msecText.innerHTML = msec;
        sec++;
        secText.innerHTML = sec;
    }
    if(sec >= 5){
        sec = 0;
        secText.innerHTML = sec;
        msec = 0;
        msecText.innerHTML = msec;
        min++;
        minText.innerHTML = min;
    }
}

function startTimer(){
    interval = setInterval(timer, 10) // running at the frequency of 10 millisecs
}

function pauseTimer(){
    clearInterval(interval);
}

function resetTimer(){
    clearInterval(interval);
    
    minText.innerHTML = "00";
    secText.innerHTML = "00";
    msecText.innerHTML = "00";
}
