const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const toggleButton = player.querySelector('.toggle');
const volumeSlider = player.querySelector('#my_volume');
const playbackRateSlider = player.querySelector('#my_playbackRate');
const progressBar = player.querySelector('.progress__filled');
const skipButtons = player.querySelectorAll('[data-skip]');
const progressDiv = player.querySelector('.progress');

//console.log(volumeSlider);


let isPlaying = false;

function toggle(){
	if(isPlaying){
		video.pause();
		toggleButton.textContent = '►';
		isPlaying = false;
	}
	else{
		video.play();
		toggleButton.textContent = '❚ ❚';
		isPlaying = true;
	}
}


setInterval(()=>{
	let progressState = (video.currentTime/video.duration)*100;
	//console.log(progressState);
	progressBar.style.flexBasis = `${progressState}%`;
},250);

function skipContent(){
	console.log(this.dataset.skip);
	video.currentTime += parseFloat(this.dataset.skip);
}

function createTooltip(){
let time = video.currentTime;
progressDiv.setAttribute('title','Time lapsed: '+ Math.round(time) +' secs');
}

function seekBar(evt)
{	
let currMousePos = evt.pageX - 127;
//console.log(currMousePos);
video.currentTime = currMousePos;

let lapsePercent = (currMousePos/this.offsetWidth)*100;
progressBar.style.flexBasis = `${Math.round(lapsePercent)}%`;

}


video.addEventListener('click',toggle);
toggleButton.addEventListener('click',toggle); 

volumeSlider.addEventListener('change', _=>{
	let vidVolume = volumeSlider.value;
	video.volume = vidVolume;
});

playbackRateSlider.addEventListener('change', _=>{
	let pbRate = playbackRateSlider.value;
	video.playbackRate = pbRate;
});



skipButtons.forEach((button)=>button.addEventListener('click',skipContent));
	
progressDiv.addEventListener('mouseenter',createTooltip);//useful when hover elements

progressDiv.addEventListener('click',seekBar);