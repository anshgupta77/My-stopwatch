function startTime(){
    timerInterval = setInterval(()=>{
        sec++;
        if(sec == 60){
            sec=0;
            min++;
        }
        if(min == 60){
            min=0;
            hour++;
        }
        const formatTime = (hour<10? "0" : "")+hour+":"+(min<10? "0" : "")+min+":"+(sec<10? "0" :"")+sec;
        timer.innerHTML=formatTime;
        if(hour == 99){
            clearInterval(timerInterval);
        }
    },1000)
}


function cleartimer(){
    clearInterval(timerInterval);
}

function toggleResumeButton(){
    if(pause.innerHTML == "Pause"){
        cleartimer();
        pause.innerHTML="Resume";
    }
    else{
        startTime();
        pause.innerHTML="Pause";
    }
}

let timer = document.getElementById("timer");
let start = document.getElementById("start");
let reset = document.getElementById("reset");
let pause = document.getElementById("pause");
let sec = 0;
let min = 0;
let hour = 0;
let timerInterval;
start.disabled=false;
reset.disabled=true;
pause.disabled=true;
start.addEventListener("click",(event)=>{
    startTime();
    start.disabled = true;
    reset.disabled=false;
    pause.disabled=false;
})
reset.addEventListener("click",()=>{
    location.reload();
    start.disabled = false;
})
pause.addEventListener("click",toggleResumeButton)
