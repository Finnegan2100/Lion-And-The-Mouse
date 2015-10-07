function hitTestPoint(pointX, pointY, sprite) {  
    
	var hit = pointX > sprite.left() && pointX < sprite.right() && pointY > sprite.top() && pointY < sprite.bottom();
    return hit;
}

function checkCollision() {
  
    if (hitTestPoint(LION.mouseX,LION.mouseY,hotSpot1))  {
 
		if (LION.mouseDown === true && LION.currentPage > 1 && LION.currentPage < 21 && LION.context.globalAlpha === 1) {
			LION.pressedRight = true;
			LION.context.drawImage(rightButtonPressedImage,rightButtonPressed.x,rightButtonPressed.y,rightButtonPressed.width,rightButtonPressed.height);
		}
	}
  
	if (hitTestPoint(LION.mouseX,LION.mouseY,hotSpot2))  {
 
	    if (LION.mouseDown === true && LION.currentPage > 1 && LION.context.globalAlpha === 1) {
		    LION.pressedHome = true;
		    LION.context.drawImage(endHomePressedImage,homePressed.x,homePressed.y,homePressed.width,homePressed.height);
		} 
  }
  
  
   if (hitTestPoint(LION.mouseX,LION.mouseY,hotSpot3))  {
 
		if(LION.mouseDown === true && LION.currentPage === 1 && LION.moveLeft === false && LION.context.globalAlpha === 1)
		  {
		  LION.onPressed = true;
		  LION.context.drawImage(narradorOnPressedImage,narradorOnPressed.x,narradorOnPressed.y,narradorOnPressed.width,narradorOnPressed.height);
		  }
		  if(LION.mouseUp === true && LION.currentPage === 1 && LION.moveLeft === false && LION.context.globalAlpha === 1)
		  {
		  LION.context.drawImage(narradorOnImage,narradorOn.x,narradorOn.y,narradorOn.width,narradorOn.height);
		  }
  }
  
   if(hitTestPoint(LION.mouseX,LION.mouseY,hotSpot4))  {
 
		  if(LION.mouseDown === true && LION.currentPage === 1 && LION.moveLeft === false && LION.context.globalAlpha === 1)
		  {
		  LION.offPressed = true;
		  LION.context.drawImage(narradorOffPressedImage,narradorOffPressed.x,narradorOffPressed.y,narradorOffPressed.width,narradorOffPressed.height);
		  }	 
		  if(LION.mouseUp === true && LION.currentPage === 1 && LION.moveLeft === false)
		  {
		   LION.context.drawImage(narradorOffImage,narradorOff.x,narradorOff.y,narradorOff.width,narradorOff.height);
		  }
  }
  
  //console.log(pages[20].x);
   if(hitTestPoint(LION.mouseX,LION.mouseY,hotSpot5))  {

		  if(LION.mouseDown === true && LION.currentPage === 21)
		  {
		  startFade = true;
		  LION.value1 = 0;
		  }
  }
  
     if(hitTestPoint(LION.mouseX,LION.mouseY,hotSpot6))  {
 
	     if(LION.mouseDown === true)
		  {
		  //window.focus();
		  window.close();
		  }
  }
  
   
  if(hitTestPoint(LION.tapX,LION.tapY,hotSpot1))  {
 
	     if(LION.touchDown === true && LION.currentPage > 1 && LION.currentPage < 21 && startFade === false && LION.context.globalAlpha === 1)
		  {
		  LION.pressedRight = true;
		  LION.context.drawImage(rightButtonPressedImage,rightButtonPressed.x,rightButtonPressed.y,rightButtonPressed.width,rightButtonPressed.height);
		  }
  }
  
  if(hitTestPoint(LION.tapX,LION.tapY,hotSpot2))  {
 
	      if(LION.touchDown === true && LION.currentPage > 1 && LION.context.globalAlpha === 1)
		  {
		  LION.pressedHome = true;
		  LION.context.drawImage(endHomePressedImage,homePressed.x,homePressed.y,homePressed.width,homePressed.height);
		  LION.value1 = 0;
		  } 
  }
  
  
    if(hitTestPoint(LION.tapX,LION.tapY,hotSpot3))  {
 
		  if(LION.touchDown === true && LION.currentPage === 1 && LION.moveLeft === false && LION.context.globalAlpha === 1)
		  {
		  LION.onPressed = true;
		  LION.context.drawImage(narradorOnPressedImage,narradorOnPressed.x,narradorOnPressed.y,narradorOnPressed.width,narradorOnPressed.height);
		  }
		  if(LION.touchUp === true && LION.currentPage === 1 && LION.moveLeft === false && LION.context.globalAlpha === 1)
		  {
		  LION.context.drawImage(narradorOnImage,narradorOn.x,narradorOn.y,narradorOn.width,narradorOn.height);
		  }
  }
  
   if(hitTestPoint(LION.tapX,LION.tapY,hotSpot4))  {
 
		  if(LION.touchDown === true && LION.currentPage === 1 && LION.moveLeft === false && LION.context.globalAlpha === 1)
		  {
		  LION.offPressed = true;
		  LION.context.drawImage(narradorOffPressedImage,narradorOffPressed.x,narradorOffPressed.y,narradorOffPressed.width,narradorOffPressed.height);
		  }	 
		  if(LION.touchUp === true && LION.currentPage === 1 && LION.moveLeft === false && LION.context.globalAlpha === 1)
		  {
		   LION.context.drawImage(narradorOffImage,narradorOff.x,narradorOff.y,narradorOff.width,narradorOff.height);
		  }
  }
  
   if(hitTestPoint(LION.tapX,LION.tapY,hotSpot5))  {
	//mike
	      if(LION.touchDown === true && LION.currentPage === 21 && LION.context.globalAlpha === 1)
		  {
		  startFade = true;
		  LION.value1 = 0;
		  }
  }
  
     if (hitTestPoint(LION.tapX,LION.tapY,hotSpot6))  {
 
	      if (LION.touchDown === true && LION.currentPage > 1 && startFade === false && LION.context.globalAlpha === 1) {
			window.history.back();
			window.close();
		 
				if (LION.ios) {
					window.history.back();
					window.open('','_self').close();
					window.close();
					LION.touchDown = false;
				}
			LION.touchDown = false;
		  }
		}
 
	}


  