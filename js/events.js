
function onMouseDown(event) {
	
	if (!startFade) {
		mouseDown = true;
		mouseUp = false;
		event.preventDefault(); 
	}
}

function onMouseUp(event) {
	
	mouseDown = false;
	mouseUp = true;
	event.preventDefault(); 
}

function onMouseMove(event) { 

	 mouseX = (event.pageX - canvas.offsetLeft) / LION.scale; 
	 mouseY = (event.pageY - canvas.offsetTop) / LION.scale;
	 event.preventDefault(); 
}