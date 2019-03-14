const timerControls = document.querySelector('.timer__controls');
const displayTimeLeft = document.querySelector('.display__time-left');
const form = document.querySelector('#custom');
let countdown;


function setTime(e){  
      let seconds = e.target.dataset.time;
      timer(seconds);
}

form.addEventListener('submit',function(e){
    e.preventDefault();
    let seconds = this.minutes * 60;
    timer(seconds);
    this.reset();
});

timerControls.addEventListener('click',setTime);

function timer(seconds){
    clearInterval(countdown);
    
    countdown = setInterval(()=>{
        if(seconds === 0){
            clearInterval(countdown);
            return;
        }
        displayCurrentTime(seconds);
        seconds--;
    },1000);
}

function displayCurrentTime(seconds){
let min = Math.floor(seconds / 60);
let secs = seconds % 60;
displayTimeLeft.innerHTML = `${min}:${secs < 10 ? '0' : ''}${secs}`;
}