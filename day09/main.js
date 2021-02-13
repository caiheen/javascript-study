const hours = document.querySelector(".hours");
const mins = document.querySelector(".mins");
const secs = document.querySelector(".sec");
const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");

let hour = 0;
let min = 0;
let sec = 0;

let timer;

function play(){
    timer = setTimeout(function(){
        sec++;
        if(sec > 59){
            sec = 0;
            min++;
        }
        if(min > 59){
            hour++;
        }
        
        hours.innerHTML = hour < 10 ? "0"+hour : hour;
        mins.innerHTML = min < 10 ? "0"+min : min;
        secs.innerHTML = sec < 10 ? "0"+sec : sec;
        play();
    },1000);

}

function pause(){
    clearTimeout(timer);
}

function clear(){
    hour = 0;
    min = 0;
    sec = 0;

    hours.innerHTML = "00";
    mins.innerHTML = "00";
    secs.innerHTML = "00";
}

start.addEventListener('click', play);
stop.addEventListener('click', pause);
reset.addEventListener('click', clear);