const player = document.querySelector('.player');

const video = player.querySelector('.viewer');

const toggleButton = player.querySelector('.toggle');

//console.log(video);

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

