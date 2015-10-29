
	
	var loadingWhiteX = 449,
		loadingWhiteY = 198,
		loadingWhiteWidth = 529,
		loadingWhiteHeight = 299,
		loadingColorX = 449,
		loadingColorY = 198,
		loadingColorWidth = 529,
		loadingColorHeight = 400,
        loadingSourceY = 400;


(function checkCurrentState() {


	var loadingWhiteImage = new Image(),
		loadingColorImage = new Image();
	
	loadingWhiteImage.src = "images/wso_bk.png";
	loadingColorImage.src = "images/wso_outlinewhitebk.png";
  
    if(LION.mainCalled === false) {
		window.setTimeout(checkCurrentState,24);
		
		switch(LION.currentState) {
	
			case "loading":	
LION.context.clearRect(0,0,canvas.width,canvas.height);
LION.context.drawImage(loadingWhiteImage,loadingWhiteX,loadingWhiteY,loadingWhiteWidth,
                                       loadingWhiteHeight);                
                
LION.context.drawImage(loadingColorImage,0,0,loadingColorWidth,
                       loadingColorHeight,loadingColorX,loadingColorY,loadingWhiteWidth,
                                       loadingColorHeight * 0.75); 				
                
               
console.log(loadingColorWidth,loadingColorHeight,loadingWhiteWidth,loadingWhiteHeight);                
				//LION.increment = assetsToLoad.length / 100;	
				//LION.percentage = LION.checkingLoads / 100;
                //loadingSourceY += 10;
                loadingColorHeight -= 10;
				//LION.context.drawImage(loadingColorImage,1,loadingColorHeight - loadingColorHeight * LION.percentage,
				//loadingColorWidth,
				//loadingColorHeight * LION.percentage,529,loadingColorHeight * LION.percentage,loadingColorWidth,
				//	loadingColorHeight * LION.percentage);
	
				if (loadingColorHeight < 4) {
					LION.currentState = "play";
				}
			break;

			case "play": 
				main();
				LION.mainCalled = true;
			break;
		}
	}
}());