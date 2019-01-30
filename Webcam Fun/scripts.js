const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');


	

	// used to get video stream from webcam using promises
	
	const getVideo = () => {
	navigator.mediaDevices.getUserMedia({video : true,audio : false})
	.then((stream)=>{
		video.srcObject = stream;
		// console.log('inside success callback');
		video.play();
	})
	.catch((err)=>{
		console.log(`OH NO!!!${err}`);
	});
   };

    const paintToCanvas = ()=>{
   	// extract video height and width 
   	// so canvas can adjust accordingly
   	 const { height : videoHeight, width : videoWidth } = video;

   	 canvas.width = videoWidth;
   	 canvas.height = videoHeight;

   	 
   	 // to draw image on canvas
   	 ctx.drawImage(video,0,0,videoWidth,videoHeight);
   	 
    };

	getVideo();
    video.addEventListener('canplay',paintToCanvas)





  