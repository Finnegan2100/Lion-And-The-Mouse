function hitTestPoint(pointX, pointY, sprite) {  
    
	var hit = pointX > sprite.left() && pointX < sprite.right() && pointY > sprite.top() && pointY < sprite.bottom();
    return hit;
}

function checkCollision() {
  
    if (hitTestPoint(mouseX,mouseY,hotSpot1))  {
 
		if (mouseDown === true && currentPage > 1 && currentPage < 21 && context.globalAlpha === 1) {
			pressedRight = true;
			context.drawImage(rightButtonPressedImage,rightButtonPressed.x,rightButtonPressed.y,rightButtonPressed.width,rightButtonPressed.height);
		}
	}
  
	if (hitTestPoint(mouseX,mouseY,hotSpot2))  {
 
	    if (mouseDown === true && currentPage > 1 && context.globalAlpha === 1) {
		    pressedHome = true;
		    context.drawImage(endHomePressedImage,homePressed.x,homePressed.y,homePressed.width,homePressed.height);
		} 
  }
  
  
   if (hitTestPoint(mouseX,mouseY,hotSpot3))  {
 
		if(mouseDown === true && currentPage === 1 && moveLeft === false && context.globalAlpha === 1)
		  {
		  onPressed = true;
		  context.drawImage(narradorOnPressedImage,narradorOnPressed.x,narradorOnPressed.y,narradorOnPressed.width,narradorOnPressed.height);
		  }
		  if(mouseUp === true && currentPage === 1 && moveLeft === false && context.globalAlpha === 1)
		  {
		  context.drawImage(narradorOnImage,narradorOn.x,narradorOn.y,narradorOn.width,narradorOn.height);
		  }
  }
  
   if(hitTestPoint(mouseX,mouseY,hotSpot4))  {
 
		  if(mouseDown === true && currentPage === 1 && moveLeft === false && context.globalAlpha === 1)
		  {
		  offPressed = true;
		  context.drawImage(narradorOffPressedImage,narradorOffPressed.x,narradorOffPressed.y,narradorOffPressed.width,narradorOffPressed.height);
		  }	 
		  if(mouseUp === true && currentPage === 1 && moveLeft === false)
		  {
		   context.drawImage(narradorOffImage,narradorOff.x,narradorOff.y,narradorOff.width,narradorOff.height);
		  }
  }
  
  //console.log(pages[20].x);
   if(hitTestPoint(mouseX,mouseY,hotSpot5))  {

		  if(mouseDown === true && currentPage === 21)
		  {
		  startFade = true;
		  value1 = 0;
		  }
  }
  
     if(hitTestPoint(mouseX,mouseY,hotSpot6))  {
 
	     if(mouseDown === true)
		  {
		  //window.focus();
		  window.close();
		  }
  }
  
   
  if(hitTestPoint(tapX,tapY,hotSpot1))  {
 
	     if(touchDown === true && currentPage > 1 && currentPage < 21 && startFade === false && context.globalAlpha === 1)
		  {
		  pressedRight = true;
		  context.drawImage(rightButtonPressedImage,rightButtonPressed.x,rightButtonPressed.y,rightButtonPressed.width,rightButtonPressed.height);
		  }
  }
  
  if(hitTestPoint(tapX,tapY,hotSpot2))  {
 
	      if(touchDown === true && currentPage > 1 && context.globalAlpha === 1)
		  {
		  pressedHome = true;
		  context.drawImage(endHomePressedImage,homePressed.x,homePressed.y,homePressed.width,homePressed.height);
		  value1 = 0;
		  } 
  }
  
  
    if(hitTestPoint(tapX,tapY,hotSpot3))  {
 
		  if(touchDown === true && currentPage === 1 && moveLeft === false && context.globalAlpha === 1)
		  {
		  onPressed = true;
		  context.drawImage(narradorOnPressedImage,narradorOnPressed.x,narradorOnPressed.y,narradorOnPressed.width,narradorOnPressed.height);
		  }
		  if(touchUp === true && currentPage === 1 && moveLeft === false && context.globalAlpha === 1)
		  {
		  context.drawImage(narradorOnImage,narradorOn.x,narradorOn.y,narradorOn.width,narradorOn.height);
		  }
  }
  
   if(hitTestPoint(tapX,tapY,hotSpot4))  {
 
		  if(touchDown === true && currentPage === 1 && moveLeft === false && context.globalAlpha === 1)
		  {
		  offPressed = true;
		  context.drawImage(narradorOffPressedImage,narradorOffPressed.x,narradorOffPressed.y,narradorOffPressed.width,narradorOffPressed.height);
		  }	 
		  if(touchUp === true && currentPage === 1 && moveLeft === false && context.globalAlpha === 1)
		  {
		   context.drawImage(narradorOffImage,narradorOff.x,narradorOff.y,narradorOff.width,narradorOff.height);
		  }
  }
  
   if(hitTestPoint(tapX,tapY,hotSpot5))  {
	//mike
	      if(touchDown === true && currentPage === 21 && context.globalAlpha === 1)
		  {
		  startFade = true;
		  value1 = 0;
		  }
  }
  
     if (hitTestPoint(tapX,tapY,hotSpot6))  {
 
	      if (touchDown === true && currentPage > 1 && startFade === false && context.globalAlpha === 1) {
			window.history.back();
			window.close();
		 
				if (LION.ios) {
					window.history.back();
					window.open('','_self').close();
					window.close();
					touchDown = false;
				}
			touchDown = false;
		  }
		}
 
	}


  