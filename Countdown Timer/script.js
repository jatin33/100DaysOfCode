const timerControls = document.querySelector('.timer__controls');
const displayTimeLeft = document.querySelector('.display__time-left');
const timeEntered = document.querySelector('#minutesControl');
let time = 0;
function setTime(e){
    if(e.target == 'input'){
        time = timeEntered.nodeValue;
    }else{
        time = e.target.dataset.time;
    }
    console.log(time);
    
}

timerControls.addEventListener('click',setTime);

function timer(){
    let min = time / 60;
}

setInterval(timer,1000);
