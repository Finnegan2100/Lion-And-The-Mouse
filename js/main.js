
	initialize();
	
    function initialize() {

		initializeAudio();
		LION.init();
		LION.resize();
		
		initializeText();
		initializeHotSpots();
	}
	


	function main() {

		LION.resize();
		checkTimings();

		setTimeout(main,24);
		LION.context.clearRect(0,0,LION.canvas.width,LION.canvas.height);

		initializePages();
		movePages();
		renderPageText();
		checkCollision();
		renderUI();
	}

