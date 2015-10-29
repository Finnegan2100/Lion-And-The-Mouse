function renderUI() {

	if (LION.currentPage === 1 && LION.moveLeft === false) {
		LION.context.drawImage(narradorOffImage,narradorOff.x,narradorOff.y,narradorOff.width,narradorOff.height);
		LION.context.drawImage(narradorOnImage,narradorOn.x,narradorOn.y,narradorOn.width,narradorOn.height);
	}
	if (LION.currentPage === 7) {
		LION.context.drawImage(finImage,fin.x,fin.y,fin.width,fin.height);
		LION.context.drawImage(leerImage,leer.x,leer.y,leer.width,leer.height);
	}
	if (LION.currentPage > 1) {
		passed1 = true;
		LION.context.drawImage(textboxShadowImage,textboxShadow.x,textboxShadow.y,textboxShadow.width,textboxShadow.height);
	}	
	if (LION.currentPage > 1) {
		if (LION.onPressed === false && LION.currentPage < 21) {
			LION.context.drawImage(rightButtonImage,rightButton.x,rightButton.y,rightButton.width,rightButton.height);
		}
		if (LION.onPressed === true && LION.pressedRight === true && LION.currentPage < 21) {
			LION.context.drawImage(rightButtonImage,rightButton.x,rightButton.y,rightButton.width,rightButton.height);
		}
		LION.context.drawImage(homeImage,home.x,home.y,home.width,home.height);
			
		if (LION.android || LION.ios || LION.isIE) {
			LION.context.drawImage(xButtonImage,xButton.x,xButton.y,xButton.width,xButton.height);
		}
	}
	if (LION.paused === true && LION.moveLeft === false && LION.moveRight === false && LION.currentPage > 1 && LION.currentPage < 21) {
		LION.context.drawImage(rightButtonHintImage,rightButtonHint.x,rightButtonHint.y,rightButtonHint.width,rightButtonHint.height);
	}
	
	if (LION.mouseUp === true) {
		if (LION.currentPage === 1) {
			if (LION.offPressed === true) {
				LION.moveLeft = true;
				LION.offPressed = false;
				LION.narratorOn = false;
				LION.mouseUp = false;
				LION.pressedTouch = true;
			}
			if (LION.onPressed === true) {
				LION.moveLeft = true;
				LION.onPressed = false;
				LION.narratorOn = true;
				LION.mouseUp = false;
				LION.pressedTouch = true;
			}
		}
			
		if (LION.currentPage > 1) {
			if (LION.pressedHome === true) {
                LION.currentPage = 1;
				LION.pressedHome = false;
			} 
		   if (LION.pressedRight === true) {
				LION.moveLeft = true;
				LION.pressedRight = false;
				LION.mouseUp = false;
			}
		}	 
	}
		  
	if (LION.touchUp === true) {
		if (LION.currentPage === 1) {
			if (LION.offPressed === true) {
				LION.moveLeft = true;
				LION.offPressed = false;
				LION.narratorOn = false;
				LION.touchUp = false;
				LION.pressedTouch = true;
			}
			if (LION.onPressed === true)	{
				LION.moveLeft = true;
				LION.onPressed = false;
				LION.narratorOn = true;
				LION.touchUp = false;
				vo.play();
				LION.pressedTouch = true;
			}
		}	
		if (LION.currentPage > 1) {
			if (LION.pressedHome === true) {
                LION.currentPage = 1;
				LION.pressedHome = false;
			}
			if (LION.pressedRight === true) {
				LION.moveLeft = true;
				LION.pressedRight = false;
				LION.touchUp = false;
			}
		}
	}
	
}