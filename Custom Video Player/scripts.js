const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const toggleButton = player.querySelector('.toggle');
const volumeSlider = player.querySelector('#my_volume');
const playbackRateSlider = player.querySelector('#my_playbackRate');
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

video.addEventListener('click',toggle);
toggleButton.addEventListener('click',toggle); 

volumeSlider.addEventListener('change', _=>{
	let vidVolume = volumeSlider.value;
	video.volume = vidVolume;
});

playbackRateSlider.addEventListener('change',_=>{
	let pbRate = playbackRateSlider.value;
	video.playbackRate = pbRate;
});