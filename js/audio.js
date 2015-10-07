
function initializeAudio() {
	
	var vo = document.querySelector("#vo"); 
	vo.addEventListener("load", onLoad, false); 
	vo.load();
	assetsToLoad.push(vo);

	document.addEventListener('touchstart', function () {
		if(!LION.pressedTouch) {
			vo.play();
			vo.pause();
		}
	});
}