  const msg = new SpeechSynthesisUtterance();
  let voices = [];
  msg.text = document.querySelector('[name="text"]').value;  
  const voicesDropdown = document.querySelector('#voices');
  
  

  const populateVoiceDropdown = (e) => {
  		speechSynthesis.getVoices().forEach(voice => voices.push(voice.name));		
  		for(let i = 0; i < voices.length; i++){
			const option = document.createElement('option');
			option.textContent = voices[i];
			option.value = voices[i];
			voicesDropdown.appendChild(option);
	}
}
window.speechSynthesis.onvoiceschanged = populateVoiceDropdown;

voicesDropdown.addEventListener('change',setVoice);

function setVoice () {
	console.log(this.value);
	msg.voice = voices.find(voice => voice.name === this.value);	
}

  const options = document.querySelectorAll('[type="range"], [name="text"]');
  
  options.forEach(option => option.addEventListener('change', setOption));
  
  function setOption () {
  	msg[this.name] = this.value;
  }

  function toggleSpeech (beginAgain = true) {
  speechSynthesis.cancel();
  if(beginAgain){
  	console.log(msg.voice);
  	speechSynthesis.speak(msg);
  }
  }
  const speakButton = document.querySelector('#speak');
  speakButton.addEventListener('click',toggleSpeech);
  const stopButton = document.querySelector('#stop');
  stopButton.addEventListener('click',toggleSpeech(false));