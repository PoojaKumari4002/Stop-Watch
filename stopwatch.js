let start=document.querySelector(".start");
let stop=document.querySelector(".stop");
let reset=document.querySelector(".reset");
let hour=document.querySelector(".hr");
let minute=document.querySelector(".min");
let second=document.querySelector(".sec");
let msec=document.querySelector(".ms");

let hr= 0;
let min= 0;
let sec= 0;
let ms= 0;

let stopwatch=false;
let timeInterval;
const startTime = ()=>{
    if(!stopwatch){
        stopwatch = true;
        timeInterval=setInterval(updateTime,10);
    }
}
const updateTime=()=>{
    ms++;  
    msec.innerText = ms.toString().padStart(2,'0');
    if(ms==100){
        ms=0;
        sec++;
        second.innerText = sec.toString().padStart(2,'0');
    }
    if(sec==60){
        sec=0;
        min++;
        count=0;
        minute.innerText = min.toString().padStart(2,'0'); 
    }
    if(min==60){
        min=0;
        hr++;
        hour.innerText = hr.toString().padStart(2,'0'); 
    }
} 
  
const stopTime = ()=>{
    stopwatch = false;
    clearInterval(timeInterval);
}
const resetTime = ()=>{
    stopwatch = false;
    clearInterval(timeInterval);
    hr= 0;
    min= 0;
    sec= 0;
    ms= 0;
    msec.innerText = "00";
    second.innerText = "00";
    minute.innerText = "00";
    hour.innerText = "00";
}
start.addEventListener('click',startTime);
stop.addEventListener('click',stopTime);
reset.addEventListener('click',resetTime);