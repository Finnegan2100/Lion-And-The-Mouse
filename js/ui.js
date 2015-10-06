function renderUI() {

	if (currentPage === 1 && moveLeft === false) {
		context.drawImage(narradorOffImage,narradorOff.x,narradorOff.y,narradorOff.width,narradorOff.height);
		context.drawImage(narradorOnImage,narradorOn.x,narradorOn.y,narradorOn.width,narradorOn.height);
	}
	if (currentPage === 21 && pages[22].x <= -24900.5) {
		context.drawImage(finImage,fin.x,fin.y,fin.width,fin.height);
		context.drawImage(leerImage,leer.x,leer.y,leer.width,leer.height);
	}
	if (currentPage > 1) {
		passed1 = true;
		context.drawImage(textboxShadowImage,textboxShadow.x,textboxShadow.y,textboxShadow.width,textboxShadow.height);
	}	
	if (currentPage > 1) {
		if (onPressed === false && currentPage < 21) {
			context.drawImage(rightButtonImage,rightButton.x,rightButton.y,rightButton.width,rightButton.height);
		}
		if (onPressed === true && pressedRight === true && currentPage < 21) {
			context.drawImage(rightButtonImage,rightButton.x,rightButton.y,rightButton.width,rightButton.height);
		}
		context.drawImage(homeImage,home.x,home.y,home.width,home.height);
			
		if (LION.android || LION.ios || LION.isIE) {
			context.drawImage(xButtonImage,xButton.x,xButton.y,xButton.width,xButton.height);
		}
	}
	if (paused === true && moveLeft === false && moveRight === false && currentPage > 1 && currentPage < 21) {
		context.drawImage(rightButtonHintImage,rightButtonHint.x,rightButtonHint.y,rightButtonHint.width,rightButtonHint.height);
	}
}