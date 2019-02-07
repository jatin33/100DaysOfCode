  const msg = new SpeechSynthesisUtterance();
  let voices = [];
  
  const voicesDropdown = document.querySelector('#voices');
  console.log(voicesDropdown);
  

  const voiceschanged = () => {
  		speechSynthesis.getVoices().forEach(voice => voices.push(voice.name + '-' + voice.lang));		
  		for(let i = 0; i < voices.length; i++){
			const option = document.createElement('option');
			option.textContent = voices[i];
			option.value = voices[i];
			voicesDropdown.appendChild(option);
	}
}
	speechSynthesis.onvoiceschanged = voiceschanged;

  const options = document.querySelectorAll('[type="range"], [name="text"]');
  console.log(options);
  const speakButton = document.querySelector('#speak');
  const stopButton = document.querySelector('#stop');