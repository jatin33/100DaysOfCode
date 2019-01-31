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
   	 const { videoHeight : height, videoWidth : width } = video;

   	 canvas.width = width;
   	 canvas.height = height;

   	 
   	 // to draw image on canvas
   	 setInterval(()=>{
   	 	ctx.drawImage(video,0,0,width,height);
   	 },16)
   	 
    };



	getVideo();
    video.addEventListener('canplay',paintToCanvas)

    function takePhoto () {
   	 paintToCanvas();

   	 const link = document.createElement('a');
   	 const data = canvas.toDataURL('image/jpeg');
   	 link.setAttribute('href', data);
   	 link.setAttribute('download', 'handsome');
     link.innerHTML = `<img src="${data}" alt="Handsome Man" />`;
     console.log(canvas.toDataURL('image/png'));
   	 snap.play();	
   	 strip.appendChild(link);
    }



  