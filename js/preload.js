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
  
    if(!mainCalled) {
		window.setTimeout(checkCurrentState,24);
		
		switch(currentState) {
	
			case "loading":	
			
				context.drawImage(loadingWhiteImage,loadingWhiteX,loadingWhiteY,loadingWhiteWidth,loadingWhiteHeight);
				increment = assetsToLoad.length / 100;	
				percentage = checkingLoads / 100;
				context.drawImage(loadingColorImage,1,loadingColorImage.height - loadingColorImage.height * percentage,
				loadingColorImage.width,
				loadingColorImage.height * percentage,449,399 - loadingColorImage.height * percentage,loadingColorImage.width,
					loadingColorImage.height * percentage);
	
				if (percentage > .37) {
					currentState = "play";
				}
			break;

			case "play": 
				main();
				mainCalled = true;
			break;
		}
	}
}());