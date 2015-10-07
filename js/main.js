
var canvas = document.getElementById("canvas"),
	context = canvas.getContext("2d"),
	
	currentState = "loading",  
	narratorOn = false,

	assetsToLoad = [],
	widths1 = [],
	pressedTouch = false,
	
	vx = 0,
	mouseX = 0,
	mouseY = 0,
	tapX,	
	tapY,
	EASING = 0.18,
	mouseDown = false,
	touchDown = false, 
	mouseUp = false, 
	touchUp = false,
	onPressed = false,
	offPressed = false,
	currentPage = 1,
	pages = [],
	moveLeft = false,
	moveRight = false,
	pressedHome = false,
	pressedRight = false,
	paused = false,
	percentage = 0.01,
	increment = .039,
	mainCalled = false,
	checkingLoads = 0,
	
	startingPoints1 = [],
	value1 = 0, 
	yPos = 564,

	bigText = "Hoy es un día muy especial en Plaza Sésamo.  ¡Es el cumpleaños de Elmo!  Abelardo, Pancho, Lola, Chip y Gina están  planeando una fiesta sorpresa y cada uno tiene su tarea.  Pancho está a cargo de las decoraciones.  De camino a su casa se encuentra con Elmo.  — Pancho, Pancho ¿Sabes qué día es hoy?  Pancho, un poco nervioso, pretende no entender.  — Hoy es... el día del baño de Elefancio y ¡ya se  me ha hecho tarde! Nos vemos luego, Elmo.  Pancho se va y Elmo queda desconcertado.  — Hoy cumple años Elmo y Pancho no se acordó.  Chip y Lola preparan una invitación para la fiesta  que enviarán por correo electrónico.  Elmo entra de repente.  — Chip, Lola, ¿saben qué día es hoy?  — Hoy es... día de hacer limpieza en el café. Y hay  MUCHO por hacer. ¡Luego nos vemos, Elmo!  Elmo no entiende qué ha pasado.  ¡A todos se les olvidó su cumpleaños!  Abelardo y Gina están horneando el pastel sorpresa.  Elmo entra sin ser visto. “¡Elmo huele un pastel!”   — Ah si, es para… ¡el primo de Gina! Y ya tenemos que irnos.  Gina saca a Elmo de la cocina.  El Café Clic está listo para la fiesta.  — ¡Aquí está el pastel! —canta Abelardo.  — ¡Pues ya está todo listo! Sólo falta... ¿Alguien le  avisó a Elmo? —pregunta Lola alarmada.  Todos se miran con asombro. ¡No pueden creer que  se les hubiese olvidado el invitado de honor!  Sin darse cuenta, Elmo ha entrado al Café Clic.  — Amigos, Elmo los estaba buscando.  ¡Es Elmo! Sin haberlo planeado, todos gritan al tiempo,  “¡SORPRESA! ¡FELÍZ CUMPLEAÑOS!”  — Amigos, ¡se acordaron del cumpleaños de Elmo!  ¡Elmo pensó que lo habían olvidado!  Gina empieza a cantar “Cumpleaños Feliz” y  así comienza ¡la gran fiesta de Elmo!", 
	sentences = bigText.split("  "),
	words = bigText.split(" ");

 var loadingColor = Object.create(spriteObject);
loadingColor.x = 300;
loadingColor.y = 200;
loadingColor.width = 530;
loadingColor.height = 200;

var loadingColorImage = new Image();
loadingColorImage.src = "images/loading-color.png";

var loadingWhiteImage = new Image();
loadingWhiteImage.src = "images/loading-white.png";

var loadingWhite = Object.create(spriteObject);
loadingWhite.x = 449;
loadingWhite.y = 198;
loadingWhite.width = 530;
loadingWhite.height = 200;

var xButton = Object.create(spriteObject);
xButton.x = 1300;
xButton.y = 15;
xButton.width = 60;
xButton.height = 39;

var narradorBG = Object.create(spriteObject);
narradorBG.x = 470;
narradorBG.y = 530;
narradorBG.width = 450;
narradorBG.height = 130;

var narradorOn = Object.create(spriteObject);
narradorOn.x = 20;
narradorOn.y = 20;
narradorOn.width = 144;
narradorOn.height = 104;

var narradorOnPressed = Object.create(spriteObject);
narradorOnPressed.x = 20;
narradorOnPressed.y = 23;
narradorOnPressed.width = 144;
narradorOnPressed.height = 104;

var narradorOff = Object.create(spriteObject);
narradorOff.x = 170;
narradorOff.y = 20;
narradorOff.width = 144;
narradorOff.height = 104;

var narradorOffPressed = Object.create(spriteObject);
narradorOffPressed.x = 170;
narradorOffPressed.y = 23;
narradorOffPressed.width = 144;
narradorOffPressed.height = 104;



var dropDown = Object.create(spriteObject);  //DROP DOWN IMAGE ON TOP OF SCREEN
dropDown.x = 0;
dropDown.y = 0;
dropDown.width = 1366;
dropDown.height = 26;

var dropUp = Object.create(spriteObject);  //DROP DOWN IMAGE ON TOP OF SCREEN
dropUp.x = 0;
dropUp.y = 641;
dropUp.width = 1366;
dropUp.height = 26;

var home = Object.create(spriteObject);  //DROP DOWN IMAGE ON TOP OF SCREEN
home.x = 0;
home.y = 0;
home.width = 148;
home.height = 56;

var homePressed = Object.create(spriteObject);  //DROP DOWN IMAGE ON TOP OF SCREEN
homePressed.x = 0;
homePressed.y = 0;
homePressed.width = 148;
homePressed.height = 56;

var textboxShadow = Object.create(spriteObject);  //TEXTBOX SHADOW 
textboxShadow.x = -13;
textboxShadow.y = 510;
textboxShadow.width = 1390;
textboxShadow.height = 150;

var rightButton = Object.create(spriteObject);  //PLAY BUTTON 
rightButton.x = 1100;
rightButton.y = 555;
rightButton.width = 250;
rightButton.height = 104;

var rightButtonPressed = Object.create(spriteObject);  //PLAY BUTTON 
rightButtonPressed.x = 1100;
rightButtonPressed.y = 555;
rightButtonPressed.width = 250;
rightButtonPressed.height = 104;

var rightButtonHint = Object.create(spriteObject);  //PLAY BUTTON 
rightButtonHint.x = 1200;
rightButtonHint.y = 505;
rightButtonHint.width = 180;
rightButtonHint.height = 157.5;

var rightButtonHintImage = new Image();
rightButtonHintImage.src = "images/Colombia_ebook_nextarrowHINT.PNG";

var fin = Object.create(spriteObject);
fin.x = 100;
fin.y = 550;
fin.width = 150;
fin.height = 65;

var leer = Object.create(spriteObject);
leer.x = 975;
leer.y = 515;
leer.width = 290;
leer.height = 136;

var endHome = Object.create(spriteObject);
endHome.x = 710;
endHome.y = 555;
endHome.width = 105;
endHome.height = 75;

var endHomePressed = Object.create(spriteObject);
endHomePressed.x = 710;
endHomePressed.y = 555;
endHomePressed.width = 105;
endHomePressed.height = 75;


  
var hotSpot1 = Object.create(spriteObject);  //PLAY BUTTON HOTSPOT


hotSpot1.x = 1180;
hotSpot1.y = 475;
hotSpot1.width = 180;
hotSpot1.height = 180;

var hotSpot2 = Object.create(spriteObject);  //PLAY BUTTON HOTSPOT
hotSpot2.x = 0;
hotSpot2.y = 0;
hotSpot2.width = 120;
hotSpot2.height = 60;

var hotSpot3 = Object.create(spriteObject);  //NARRADOR ON BUTTON HOTSPOT
hotSpot3.x = 20;
hotSpot3.y = 20;
hotSpot3.width = 200;
hotSpot3.height = 62;

var hotSpot4 = Object.create(spriteObject);  //NARRADOR OFF BUTTON HOTSPOT
hotSpot4.x = 170;
hotSpot4.y = 20;
hotSpot4.width = 200;
hotSpot4.height = 62;

var hotSpot5 = Object.create(spriteObject);  //LEER DE NUEVO HOTSPOT
hotSpot5.x = 770;
hotSpot5.y = 533;
hotSpot5.width = 92;
hotSpot5.height = 80;

var hotSpot6 = Object.create(spriteObject);  //X BUTTON HOTSPOT
hotSpot6.x = 1300;
hotSpot6.y = 5;
hotSpot6.width = 110;
hotSpot6.height = 69;









//LOADING THE IMAGES AND CALLING LOAD EVENT

var backgroundImage = new Image();
backgroundImage.addEventListener("load", onLoad, false);
backgroundImage.src = "images/Colombia_ebook_testBGimage.png";
assetsToLoad.push(backgroundImage);

var textboxShadowImage = new Image();
textboxShadowImage.addEventListener("load", onLoad, false);
textboxShadowImage.src = "images/Colombia_ebook_textboxtestimage.png";
assetsToLoad.push(textboxShadowImage);



var page1 = Object.create(spriteObject);
page1.x = 0;
page1.y = 0;
page1.width = 1366;
page1.height = 667;
pages.push(page1);

var page2 = Object.create(page1);
page2.x = 1366;
page2.y = 0;
page2.width = 1366;
page2.height = 667;
pages.push(page2);

var page3 = Object.create(page2);
pages.push(page3);

var page4 = Object.create(page2);
pages.push(page4);

var page5 = Object.create(page2);
pages.push(page5);

var page6 = Object.create(page2);
pages.push(page6);

var page7 = Object.create(page2);
pages.push(page7);

var page8 = Object.create(page2);
pages.push(page8);

var page9 = Object.create(page2);
pages.push(page9);

var page10 = Object.create(page2);
pages.push(page10);

var page11 = Object.create(page2);
pages.push(page11);

var page12 = Object.create(page2);
pages.push(page12);

var page13 = Object.create(page2);
pages.push(page13);

var page14 = Object.create(page2);
pages.push(page14);

var page15 = Object.create(page2);
pages.push(page15);

var page16 = Object.create(page2);
pages.push(page16);

var page17 = Object.create(page2);
pages.push(page17);

var page18 = Object.create(page2);
pages.push(page18);

var page19 = Object.create(page2);
pages.push(page19);

var page20 = Object.create(page2);
pages.push(page20);

var page21 = Object.create(page2);
pages.push(page21);

var page22 = Object.create(page2);
pages.push(page22);

var page23 = Object.create(page2);
pages.push(page23);


var page1Image = new Image();
page1Image.addEventListener("load", onLoad, false);
page1Image.src = "images/pages/page_0.png";
assetsToLoad.push(page1Image);

var page2Image = new Image();
page2Image.addEventListener("load", onLoad, false);
page2Image.src = "images/pages/page_1.png";
assetsToLoad.push(page2Image);

var page3Image = new Image();
page3Image.addEventListener("load", onLoad, false);
page3Image.src = "images/pages/page_2.png";
assetsToLoad.push(page3Image);

var page4Image = new Image();
page4Image.addEventListener("load", onLoad, false);
page4Image.src = "images/pages/page_3.png";
assetsToLoad.push(page4Image);

var page5Image = new Image();
page5Image.addEventListener("load", onLoad, false);
page5Image.src = "images/pages/page_4.png";
assetsToLoad.push(page5Image);

var page6Image = new Image();
page6Image.addEventListener("load", onLoad, false);
page6Image.src = "images/pages/page_5.png";
assetsToLoad.push(page6Image);

var page7Image = new Image();
page7Image.addEventListener("load", onLoad, false);
page7Image.src = "images/pages/page_6.png";
assetsToLoad.push(page7Image);

var page8Image = new Image();
page8Image.addEventListener("load", onLoad, false);
page8Image.src = "images/Colombia_ebook_slide_8.png";
assetsToLoad.push(page8Image);

var page9Image = new Image();
page9Image.addEventListener("load", onLoad, false);
page9Image.src = "images/Colombia_ebook_slide_7.png";
assetsToLoad.push(page9Image);

var page10Image = new Image();
page10Image.addEventListener("load", onLoad, false);
page10Image.src = "images/Colombia_ebook_slide_9.png";
assetsToLoad.push(page10Image);

var page11Image = new Image();
page11Image.addEventListener("load", onLoad, false);
page11Image.src = "images/Colombia_ebook_slide_10.png";
assetsToLoad.push(page11Image);

var page12Image = new Image();
page12Image.addEventListener("load", onLoad, false);
page12Image.src = "images/Colombia_ebook_slide_11.png";
assetsToLoad.push(page12Image);

var page13Image = new Image();
page13Image.addEventListener("load", onLoad, false);
page13Image.src = "images/Colombia_ebook_slide_12.png";
assetsToLoad.push(page13Image);

var page14Image = new Image();
page14Image.addEventListener("load", onLoad, false);
page14Image.src = "images/Colombia_ebook_slide_13.png";
assetsToLoad.push(page14Image);

var page15Image = new Image();
page15Image.addEventListener("load", onLoad, false);
page15Image.src = "images/Colombia_ebook_slide_14.png";
assetsToLoad.push(page15Image);

var page16Image = new Image();
page16Image.addEventListener("load", onLoad, false);
page16Image.src = "images/Colombia_ebook_slide_15.png";
assetsToLoad.push(page16Image);

var page17Image = new Image();
page17Image.addEventListener("load", onLoad, false);
page17Image.src = "images/Colombia_ebook_slide_16.png";
assetsToLoad.push(page17Image);

var page18Image = new Image();
page18Image.addEventListener("load", onLoad, false);
page18Image.src = "images/Colombia_ebook_slide_17.png";
assetsToLoad.push(page18Image);

var page19Image = new Image();
page19Image.addEventListener("load", onLoad, false);
page19Image.src = "images/Colombia_ebook_slide_18.png";
assetsToLoad.push(page19Image);

var page20Image = new Image();
page20Image.addEventListener("load", onLoad, false);
page20Image.src = "images/Colombia_ebook_slide_19.png";
assetsToLoad.push(page20Image);

var page21Image = new Image();
page21Image.addEventListener("load", onLoad, false);
page21Image.src = "images/Colombia_ebook_finalscreen.png";
assetsToLoad.push(page21Image);


var rightButtonImage = new Image();
rightButtonImage.addEventListener("load", onLoad, false);
rightButtonImage.src = "images/button2/next_1.png";
assetsToLoad.push(rightButtonImage);

var rightButtonPressedImage = new Image();
rightButtonPressedImage.addEventListener("load", onLoad, false);
rightButtonPressedImage.src = "images/button2/next_2.png";
assetsToLoad.push(rightButtonPressedImage);

var dropDownImage = new Image();
dropDownImage.addEventListener("load", onLoad, false);
dropDownImage.src = "images/Colombia_ebook_yellowbar_top.png";
assetsToLoad.push(dropDownImage);

var dropUpImage = new Image();
dropUpImage.addEventListener("load", onLoad, false);
dropUpImage.src = "images/Colombia_ebook_yellowbar_bottom.png";
assetsToLoad.push(dropUpImage);

var xButtonImage = new Image();
xButtonImage.addEventListener("load", onLoad, false);
xButtonImage.src = "images/Colombia_ebook_Xbtn.png";
assetsToLoad.push(xButtonImage);

var narradorBGImage = new Image();
narradorBGImage.addEventListener("load", onLoad, false);
narradorBGImage.src = "images/narrador_bg.png";
assetsToLoad.push(narradorBGImage);

var narradorOnImage = new Image();
narradorOnImage.addEventListener("load", onLoad, false);
narradorOnImage.src = "images/button2/soundon_1.png";
assetsToLoad.push(narradorOnImage);

var narradorOnPressedImage = new Image();
narradorOnPressedImage.addEventListener("load", onLoad, false);
narradorOnPressedImage.src = "images/button2/soundon_2.png";
assetsToLoad.push(narradorOnPressedImage);

var narradorOffImage = new Image();
narradorOffImage.addEventListener("load", onLoad, false);
narradorOffImage.src = "images/button2/soundoff_1.png";
assetsToLoad.push(narradorOffImage);

var narradorOffPressedImage = new Image();
narradorOffPressedImage.addEventListener("load", onLoad, false);
narradorOffPressedImage.src = "images/button2/soundoff_2.png";
assetsToLoad.push(narradorOffPressedImage);

var finImage = new Image();
finImage.addEventListener("load", onLoad, false);
finImage.src = "images/Colombia_ebook_FIN.png";
assetsToLoad.push(finImage);

var leerImage = new Image();
leerImage.addEventListener("load", onLoad, false);
leerImage.src = "images/Colombia_ebook_LEERDENUEVO.png";
assetsToLoad.push(leerImage);

var homeImage = new Image();
homeImage.addEventListener("load", onLoad, false);
homeImage.src = "images/button2/home_1.png";
assetsToLoad.push(homeImage);

var endHomeImage = new Image();
endHomeImage.addEventListener("load", onLoad, false);
endHomeImage.src = "images/button2/home_1.png";
assetsToLoad.push(endHomeImage);

var endHomePressedImage = new Image();
endHomePressedImage.addEventListener("load", onLoad, false);
endHomePressedImage.src = "images/button2/home_2.png";
assetsToLoad.push(endHomePressedImage);

function onLoad() { 
	
	checkingLoads++;
}


initializeAudio();


window.addEventListener("mousemove",onMouseMove,false);
window.addEventListener("mousedown",onMouseDown,false);
window.addEventListener("mouseup",onMouseUp,false);

	LION.init();
	LION.resize();
	
	initializeText();
	initializeHotSpots();
	

	

	function main() {

		LION.resize();
		checkTimings();

		setTimeout(main,24);
		context.clearRect(0,0,canvas.width,canvas.height);

		initializePages();
		movePages();
		renderPageText();
		checkCollision();
		renderUI();
	
	}

