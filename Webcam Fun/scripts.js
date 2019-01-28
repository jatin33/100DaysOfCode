const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');


const streaming = false;

	// used to get video stream from webcam using promises
	navigator.getUserMedia({video : true,audio : false}).
	then((stream)=>{
		video.srcObject = stream;
		video.play();
	}).
	catch((err)=>{
		console.log(err);
	});




function takePhoto(){

}