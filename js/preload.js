(function checkCurrentState() {
	
	var loadingWhiteX = 449,
		loadingWhiteY = 198,
		loadingWhiteWidth = 530,
		loadingWhiteHeight = 200,
		loadingColorX = 300,
		loadingColorY = 200,
		loadingColorWidth = 530,
		loadingColorHeight = 200;

	var loadingWhiteImage = new Image(),
		loadingColorImage = new Image();
	
	loadingWhiteImage.src = "images/loading-white.png";
	loadingColorImage.src = "images/loading-color.png";
  
    if(LION.mainCalled === false) {
		window.setTimeout(checkCurrentState,24);
		
		switch(LION.currentState) {
	
			case "loading":	
			
				LION.context.drawImage(loadingWhiteImage,loadingWhiteX,loadingWhiteY,loadingWhiteWidth,loadingWhiteHeight);
				LION.increment = assetsToLoad.length / 100;	
				LION.percentage = LION.checkingLoads / 100;
				LION.context.drawImage(loadingColorImage,1,loadingColorImage.height - loadingColorImage.height * LION.percentage,
				loadingColorImage.width,
				loadingColorImage.height * LION.percentage,449,399 - loadingColorImage.height * LION.percentage,loadingColorImage.width,
					loadingColorImage.height * LION.percentage);
	
				if (LION.percentage > .37) {
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