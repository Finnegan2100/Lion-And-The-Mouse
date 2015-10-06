
	

	var triggerElementID = null; // this variable is used to identity the triggering element
	var fingerCount = 0;
	var startX = 0;
	var startY = 0;
	var curX = 0;
	var curY = 0;
	var deltaX = 0;
	var deltaY = 0;
	var horzDiff = 0;
	var vertDiff = 0;
	var minLength = 72; 
	var swipeLength = 0;
	var swipeAngle = null;
	var swipeDirection = null;
	

	function touchStart(event,passedName) {
		event.preventDefault();
		fingerCount = event.touches.length;
		
		if ( fingerCount === 1) {
			startX = event.touches[0].pageX;
			startY = event.touches[0].pageY;
			triggerElementID = passedName;
		} else {
			touchCancel(event);
		}
		
  touchDown = true;
  touchUp = false;
		
  tapX = event.targetTouches[0].pageX - canvas.offsetLeft;
  tapY = event.targetTouches[0].pageY - canvas.offsetTop;
	}

	function touchMove(event) {
	
	   tapX = (event.targetTouches[0].pageX - canvas.offsetLeft) / LION.scale;
	  tapY = (event.targetTouches[0].pageY - canvas.offsetTop) / LION.scale ;
		event.preventDefault();
		if ( event.touches.length === 1 ) {
			curX = event.touches[0].pageX;
			curY = event.touches[0].pageY;
		} else {
			touchCancel(event);
		}
		
  tapX = (event.targetTouches[0].pageX - canvas.offsetLeft) / LION.scale;
  tapY = (event.targetTouches[0].pageY - canvas.offsetTop) / LION.scale ;
	}
	
	function touchEnd(event) {
		event.preventDefault();
		
		touchDown = false;
		touchUp = true;
		event.preventDefault();
		
		if ( fingerCount == 1 && curX != 0 ) {
			swipeLength = Math.round(Math.sqrt(Math.pow(curX - startX,2) + Math.pow(curY - startY,2)));
			if ( swipeLength >= minLength ) {
				caluculateAngle();
				determineSwipeDirection();
				processingRoutine();
				touchCancel(event); 
			} else {
				touchCancel(event);
			}	
		} else {
			touchCancel(event);
		}
	}

	function touchCancel(event) {
	
		fingerCount = 0;
		startX = 0;
		startY = 0;
		curX = 0;
		curY = 0;
		deltaX = 0;
		deltaY = 0;
		horzDiff = 0;
		vertDiff = 0;
		swipeLength = 0;
		swipeAngle = null;
		swipeDirection = null;
		triggerElementID = null;
	}
	
	function caluculateAngle() {
		var X = startX-curX;
		var Y = curY-startY;
		var Z = Math.round(Math.sqrt(Math.pow(X,2)+Math.pow(Y,2))); 
		var r = Math.atan2(Y,X); 
		swipeAngle = Math.round(r*180/Math.PI); 
		if ( swipeAngle < 0 ) { swipeAngle =  360 - Math.abs(swipeAngle); }
	}
	
	function determineSwipeDirection() {
		if ( (swipeAngle <= 45) && (swipeAngle >= 0) ) {
			swipeDirection = 'left';

		} else if ( (swipeAngle <= 360) && (swipeAngle >= 315) ) {
			swipeDirection = 'left';
		} else if ( (swipeAngle >= 135) && (swipeAngle <= 225) ) {
			swipeDirection = 'right';
		}
	}
	function processingRoutine() {
		var swipedElement = document.getElementById(triggerElementID);
		if ( swipeDirection == 'left' && currentPage < 21) {
			moveLeft = true;
			moveRight = false;
		} else if ( swipeDirection == 'right' && currentPage < 21) {
			moveRight = true;
			moveLeft = false;
	
		}
	}