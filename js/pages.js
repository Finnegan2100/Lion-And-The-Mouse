function movePages() {	
	
	for (var i = 0; i < pages.length; i++) { 
    
		if (LION.moveLeft) {
			LION.vx = -325;
			pages[i].x += (LION.vx * LION.EASING);
		
		if (pages[1].x < 1166) {
			LION.paused = true;
		}
	}
	
	if (LION.moveRight) {
		LION.vx = 325;
		pages[i].x += (LION.vx * LION.EASING);
		LION.paused = true;
	}
		
	if (LION.moveLeft && pages[LION.currentPage].x < 0 && LION.currentPage >= 1 && LION.currentPage < 21 && LION.context.globalAlpha === 1) {

		LION.moveLeft = false;
		LION.currentPage++;
		LION.paused = false;
		LION.mouseUp = false;
		LION.touchUp = false;
	}
			
	if (LION.moveRight && pages[LION.currentPage - 1].x > 1366) {
		 
		LION.moveRight = false;
		LION.currentPage--;
		LION.mouseUp = false;
		LION.touchUp = false;
		LION.paused = false;
	}
	
	if (!LION.moveLeft && !LION.moveRight) {
	
		pages[LION.currentPage - 1].x = 0;
		pages[LION.currentPage].x = 1366;
	} 
}
		
	if (page1.x > 0) {
		page1.x = 0;
	}
	if (page21.x < 0) {
		page21.x = 0;
	}
}

