

addEventListener("mousemove",onMouseMove,false);
addEventListener("mousedown",onMouseDown,false);
addEventListener("mouseup",onMouseUp,false);


function onMouseDown(event) {

	LION.mouseDown = true;
	LION.mouseUp = false;
	event.preventDefault(); 
}

function onMouseUp(event) {
	
	LION.mouseDown = false;
	LION.mouseUp = true;
	event.preventDefault(); 
}

function onMouseMove(event) { 

	 LION.mouseX = (event.pageX - canvas.offsetLeft) / LION.scale; 
	 LION.mouseY = (event.pageY - canvas.offsetTop) / LION.scale;
	 event.preventDefault(); 
}