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

   	 	let pixels = ctx.getImageData(0,0,width,height);
   	 	// console.log(pixels);
   	 	// pixels = redEffect(pixels);
   	 	 ctx.putImageData(redEffect(pixels),0,0);
   	 	// debugger;
   	 },160);
   	 
    };



	getVideo();
    video.addEventListener('canplay',paintToCanvas)

    function takePhoto () {
   	 paintToCanvas();

   	 snap.play();	
   	 const link = document.createElement('a');
   	 const data = canvas.toDataURL('image/jpeg');
   	 console.log(data);
   	 link.setAttribute('href', data);
   	 link.setAttribute('download', 'handsome');
     link.innerHTML = `<img src="${data}" alt="Handsome Man" />`;
     console.log(canvas.toDataURL('image/png'));
   	 
   	 strip.appendChild(link);


    }

    // filter that creates red effect
    function redEffect(pixels){
    	for(let i = 0; i < pixels.data.length; i += 4){
    		pixels.data[i] = pixels.data[i] + 220;
    	}
    	return pixels;
    }

    // filter that creates rgb split
  	// function rgbSplit(pixels){
  	//  	for(let i = 0; i < pixels.data.length; i++){
   //  		pixels.data[i + 50] = pixels.data[i];
   //  		pixels.data[i + 10] = pixels.data[i + 1];
   //  		pixels.data[i + 20] = pixels.data[i + 2];
   //  	}
   //  	return pixels;	
  	// }


  	// function greenScreenEffect(pixels){

  	// }