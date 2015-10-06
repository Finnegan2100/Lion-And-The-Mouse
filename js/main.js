
var canvas = document.getElementById("canvas"),
	context = canvas.getContext("2d"),
	
	currentState = "loading",  
	narratorOn = false,

	assetsToLoad = [],
	widths1 = [],
	pressedTouch = false,
	
	vx = 0;


//TAKE BIG ARRAY OF WORDS:

var bigText = "Hoy es un día muy especial en Plaza Sésamo.  ¡Es el cumpleaños de Elmo!  Abelardo, Pancho, Lola, Chip y Gina están  planeando una fiesta sorpresa y cada uno tiene su tarea.  Pancho está a cargo de las decoraciones.  De camino a su casa se encuentra con Elmo.  — Pancho, Pancho ¿Sabes qué día es hoy?  Pancho, un poco nervioso, pretende no entender.  — Hoy es... el día del baño de Elefancio y ¡ya se  me ha hecho tarde! Nos vemos luego, Elmo.  Pancho se va y Elmo queda desconcertado.  — Hoy cumple años Elmo y Pancho no se acordó.  Chip y Lola preparan una invitación para la fiesta  que enviarán por correo electrónico.  Elmo entra de repente.  — Chip, Lola, ¿saben qué día es hoy?  — Hoy es... día de hacer limpieza en el café. Y hay  MUCHO por hacer. ¡Luego nos vemos, Elmo!  Elmo no entiende qué ha pasado.  ¡A todos se les olvidó su cumpleaños!  Abelardo y Gina están horneando el pastel sorpresa.  Elmo entra sin ser visto. “¡Elmo huele un pastel!”   — Ah si, es para… ¡el primo de Gina! Y ya tenemos que irnos.  Gina saca a Elmo de la cocina.  El Café Clic está listo para la fiesta.  — ¡Aquí está el pastel! —canta Abelardo.  — ¡Pues ya está todo listo! Sólo falta... ¿Alguien le  avisó a Elmo? —pregunta Lola alarmada.  Todos se miran con asombro. ¡No pueden creer que  se les hubiese olvidado el invitado de honor!  Sin darse cuenta, Elmo ha entrado al Café Clic.  — Amigos, Elmo los estaba buscando.  ¡Es Elmo! Sin haberlo planeado, todos gritan al tiempo,  “¡SORPRESA! ¡FELÍZ CUMPLEAÑOS!”  — Amigos, ¡se acordaron del cumpleaños de Elmo!  ¡Elmo pensó que lo habían olvidado!  Gina empieza a cantar “Cumpleaños Feliz” y  así comienza ¡la gran fiesta de Elmo!"; 

var sentences = bigText.split("  ");
var words = bigText.split(" ");

for (var i = 0; i < words.length; i++) {
	context.fillStyle = "#000";
	widths1.push(context.measureText(words[i]).width);
}


var LION = {

    WIDTH: 1366,  //WIDTH + HEIGHT are only used as values for determining the ratio. CurrentWidth/CurrentHeight are used for the resizing
    HEIGHT:  667, 
    RATIO:  null,
	scale: 1,
    currentWidth:  null,
    currentHeight:  null,
	ua: navigator.userAgent.toLowerCase(),

    init: function() {
		
		LION.RATIO = LION.WIDTH / LION.HEIGHT;    //SETS THE W/H RATIO (2.04) TO KEEP THE GAME CORRECTLY SIZED 
	},


    resize: function() {
		
		var innerW = window.innerWidth,
			innerH= window.innerHeight,
			c = canvas.style;
	
	   if (innerW > innerH) {
	       
			LION.currentHeight = innerH; //Repeat the assigments from init every call to resize 
			LION.currentWidth = LION.currentHeight * LION.RATIO;
			
			
			c.width = (LION.currentWidth / 1.5352) + 'px';
			c.height = LION.currentHeight + 'px';
			c.marginTop = 0 + "px";
			
			if (c.height === 320 + 'px') {
				c.marginLeft = 80 + "px";
			}
			if (c.height === 268 + 'px') {
				c.marginLeft = 100 + "px";
			}
			if (innerW === 480) {
				c.marginLeft = 30 + "px";
				page1.height = 1468;
			}
			
			LION.scale = LION.currentWidth / LION.WIDTH;
		}
		
		
		if (innerH > innerW) {
			
			c.width = innerW + 'px';
			
			LION.scale = LION.currentWidth / LION.WIDTH;
			
		    if (innerW === 768) {		//IPAD
			c.height = 672 + 'px';
			c.marginTop = 130 + "px";
			LION.currentWidth = 1376 + 'px';
			}
			if (innerW === 320) {		//IPHONE  && IPOD
				
				if (innerH === 529) {  //IPHONE
				
					c.height = 320 + 'px';
					LION.currentWidth = 655.35 + 'px';
					c.marginTop = 50 + "px";
					c.marginLeft = 0 + "px";
				}
				
				if (innerH === 356) {    //IPOD
				
					c.marginTop = 30 + "px";
					c.height = 300 + 'px';
					LION.currentWidth = 455.35 + 'px';
					c.marginLeft = 0 + "px";
					page1.height = 1468;
				}
			}
			
			if (innerW === 360) {		//GALAXY S3,S4,S5
				c.height = 287 + 'px';
				c.marginTop = 95 + "px";
				LION.currentWidth = 587.769;
			}
			if (innerW === 600) {		//NEXUS 7
				c.height = 431 + 'px';
				c.marginTop = 125 + "px";
				LION.currentWidth = 882.677;
			}
			if (innerW === 601) {		//TAB 4
				c.height = 431 + 'px';
				c.marginTop = 135 + "px";
				LION.currentWidth = 892.677;
			}
			if (innerW === 800) {		//NEXUS 10
				c.height = 631 + 'px';
				c.marginTop = 175 + "px";
				LION.currentWidth = 1292.272;
			}
			if (innerW === 384) {		//OPTIMUS G
				c.height = 311 + 'px';
				c.marginTop = 90 + "px";
				LION.currentWidth = 636.920;
			}
		}
        window.setTimeout(function() {
                window.scrollTo(0,1);
        }, 1);	
    }
};


LION.android = LION.ua.indexOf('android') > -1 ? true : false;
LION.ios = ( LION.ua.indexOf('iphone') > -1 || LION.ua.indexOf('ipad') > -1  ) ? 
    true : false;
LION.isFirefox = typeof InstallTrigger !== 'undefined';  
LION.isMac = navigator.platform.toUpperCase().indexOf('MAC')>=0;
LION.isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
LION.isChrome = !!window.chrome;             
LION.isIE = /*@cc_on!@*/false || !!document.documentMode; 
 
 var loadingColor = Object.create(spriteObject);
loadingColor.x = 300;
loadingColor.y = 200;
loadingColor.width = 530;
loadingColor.height = 200;

var loadingColorImage = new Image();
loadingColorImage.src = "images/loading-color.png";

var loadingWhite = Object.create(spriteObject);
loadingWhite.x = 449;
loadingWhite.y = 198;
loadingWhite.width = 530;
loadingWhite.height = 200;

var loadingWhiteImage = new Image();
loadingWhiteImage.src = "images/loading-white.png";
 


	
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

var mouseX = 0;		//DEFINING MOUSE X AND Y VALUES
var mouseY = 0;

var tapX = undefined;		//DEFINING TOUCH X AND Y VALUES (FOR TAPPING)
var tapY = undefined;

var EASING = 0.18;

var mouseDown = false;  //BOOLEAN FOR CHECKING IF MOUSE IS DOWN 
var touchDown = false;  //BOOLEAN FOR CHECKING IF TOUCH IS DOWN 
var mouseUp = false;  //BOOLEAN FOR CHECKING IF MOUSE IS UP 
var touchUp = false;  //BOOLEAN FOR CHECKING IF TOUCH IS UP 

var onPressed = false;
var offPressed = false;


var currentPage = 1;

var pages = [];

var moveLeft = false;
var moveRight = false;

var pressedHome = false;
var pressedRight = false;

var startFade = false;

var ratio = 0;
var paused = false;

var percentage = 0.01;
var increment = .039;

var checkingLoads = 0;

var mainCalled = false;
var checkingLoads = 0;

var passedPageOne = false;



//ARRAY OF STARTING X VALUES FOP EACH WORD



var startingPoints1 = [100,177,227,280,344,425,576,630,734,"p1ln2",100,160,200,413,470,  //HOY / ES
"p2ln1",100,277,427,517,604,632,724,"p2ln2",100,296,370,473,630,660,760,830,930,978,  //ABELARDO / PLANEANDO
"p3ln1",100,240,320,350,462,513,572,"p3ln2",100,160,288,323,372,460,510,695,765,   //PANCHO / DE
"p4ln1", "ds",150,293,430,563,640,706,750,800,100,250,300,393,558,723,774, //--PANCHO  / PANCHO
"p5ln1","filler",150,227,308,348,414,480,575,630,790,825,887,"p5ln2",100,165,220,332,450,523,643,757, //HOY  / ME
"p6ln1",100,230,285,335,365,460,572,624,"p6ln2",147,227,365,455,543,573,710,763,813, //PANCHO / HOY
"p7ln1",100,185,217,297,470,540,716,806,850,"p7ln2",100,174,334,404,523, //CHIP / QUE
"p8ln1",100,194,295,350,"p8ln2","filler",148,247,337,474,545,610,656, //ELMO / CHIP
"p9ln1","filler",148,226,310,373,426,533,689,739,783,880,910,"p9ln2",100,246,315,432,560,630,760, //HOY / MUCHO
"p10ln1",100,193,246,407,482,535,"p10ln2",100,150,254,300,360,470,520, //ELMO / A
"p11ln1",100,265,297,390,494,690,730,847,"p11ln2",100,193,294,354,414,514,636,745,796, //ABELARDO / ELMO
"p12ln1","filler1","filler2",160,216,266,310,440,492,603,654,760,794,845,1004,1074,"p12ln2",100,190,280,315,405,460,505, //AH / GINA
"p13ln1",100,140,232,302,386,468,557,600,"p13ln2","filler",149,250,334,373,503,644, //EL / AQUI
"p14ln1","filler",148,250,305,390,476,570,653,779,938,"p14ln2",100,200,230,340,550,630, //PUES / AVISO
"p15ln1",100,210,260,370,440,610,680,820,920,"p15ln2",100,148,209,347,507,545,695,750, //TODOS / SE
"p16ln1",100,164,270,408,500,555,703,743,832,"p16ln2","filler",147,297,387,447,574,  //SIN / AMIGOS
"p17ln1",100,157,263,324,467,650,755,865,911,"p17ln2",100,334,445, //ES  SORPRESA
"p18ln1","filler",148,294,354,539,603,824,874,"p18ln2",100,204,314,390,435,560, //AMIGOS / ELMO
"p19ln1",100,188,349,377,502,742,843,"p19ln2",100,158,334,385,477,586,636]; //GINA / ASI


var value1 = 0;      //THE VALUE INSIDE THE WORDS1 ARRAY


var yPos = 564;


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

function onLoad()
{ 
checkingLoads++;
}

// LOADING THE SOUND

var vo = document.querySelector("#vo"); 
vo.addEventListener("load", onLoad, false); 
vo.load();
assetsToLoad.push(vo);



//SOUND FIX FOR IOS

document.addEventListener('touchstart', function () {
	if(!pressedTouch) {
		vo.play();
		vo.pause();
	}
});




//MOUSE EVENT LISTENERS

window.addEventListener("mousemove",onMouseMove,false);
window.addEventListener("mousedown",onMouseDown,false);
window.addEventListener("mouseup",onMouseUp,false);

//MOUSE EVENT HANDLERS



//LOAD HANDLER

function onLoad()
{ 

   checkingLoads++;
}


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
	
	
	function fadeOut() 
	{
	context.globalAlpha -= .03;
	}
	function fadeIn() 
	{
	context.globalAlpha += .03;
	}
	
   
   
	
	LION.init();
	LION.resize();
	
	
	

function main() {

 
 if (context.globalAlpha < 1) 
 mouseDown = false;
 
LION.resize();
checkTimings();

startingPoints1 = [100,177,227,280,344,425,576,630,734,"p1ln2",100,160,200,413,470,  //HOY / ES
"p2ln1",100,277,427,517,604,632,724,"p2ln2",100,296,370,473,630,660,760,830,930,978,  //ABELARDO / PLANEANDO
"p3ln1",100,240,320,350,462,513,572,"p3ln2",100,160,288,323,372,460,510,695,765,   //PANCHO / DE
"p4ln1", "ds",150,293,430,563,640,706,750,800,100,250,300,393,558,723,774, //--PANCHO  / PANCHO
"p5ln1","filler",150,227,308,348,414,480,575,630,790,825,887,"p5ln2",100,165,220,332,450,523,643,757, //HOY  / ME
"p6ln1",100,234,285,335,365,460,574,624,"p6ln2",147,227,365,455,543,573,710,763,813, //PANCHO / HOY
"p7ln1",100,185,217,297,470,540,716,806,850,"p7ln2",100,174,334,404,523, //CHIP / QUE
"p8ln1",100,194,295,350,"p8ln2","filler",148,247,337,472,545,610,656, //ELMO / CHIP
"p9ln1","filler",148,226,310,373,426,533,689,739,783,880,910,"p9ln2",100,246,315,432,560,630,760, //HOY / MUCHO
"p10ln1",100,193,246,407,482,535,"p10ln2",100,150,254,300,360,470,520, //ELMO / A
"p11ln1",100,265,297,390,494,690,730,847,"p11ln2",100,193,294,354,414,514,636,743,796, //ABELARDO / ELMO
"p12ln1","filler1","filler2",160,216,264,310,440,492,603,654,758,792,843,1001,1073,"p12ln2",100,190,280,315,405,460,503, //AH / GINA
"p13ln1",100,140,232,302,386,468,557,600,"p13ln2","filler",149,250,334,373,503,644, //EL / AQUI
"p14ln1","filler",148,250,305,390,476,570,653,779,938,"p14ln2",100,200,230,340,550,630, //PUES / AVISO
"p15ln1",100,210,260,370,440,610,680,820,920,"p15ln2",100,148,209,347,507,545,695,750, //TODOS / SE
"p16ln1",100,164,270,408,500,555,703,743,832,"p16ln2","filler",147,297,387,447,574,  //SIN / AMIGOS
"p17ln1",100,157,263,324,467,650,755,865,911,"p17ln2",100,334,445, //ES  SORPRESA
"p18ln1","filler",148,294,354,539,603,821,874,"p18ln2",100,204,314,390,435,560, //AMIGOS / ELMO
"p19ln1",100,188,349,377,502,742,843,"p19ln2",100,158,334,385,477,586,636]; //GINA / ASI


//WRITING THE TEXT
context.fillStyle = "#333";

if(LION.isMac && LION.isChrome) 
context.font =  "37px sesame";

if(!LION.ios && !LION.isMac)
context.font =  "bold 37px sesame";

if(LION.isFirefox)
context.font =  "37px sesame";

if(LION.isSafari)
context.font =  "37px sesame";

if(LION.ios)
context.font = "37px sesameIOS";

if(LION.isIE)
context.font = "37px sesameIOS";


 if(window.innerWidth > window.innerHeight) {
 
	hotSpot1.x = 800;
	hotSpot6.x = 800;
	
	if(window.innerWidth === 568) {
			hotSpot6.x = 400
			hotSpot6.width = 200;
			hotSpot6.height = 250;
			}
		
	
	
		

}
if(window.innerHeight > window.innerWidth) {

   

	switch(canvas.style.height) {  

	        //PLAY BUTTON
	
			 case 672 + 'px':  //IPAD
			 hotSpot1.x = 710;
			 break;
		
			case 320 + 'px': //IPHONE
			hotSpot1.x = 550;
		    hotSpot3.x = 200;
			hotSpot3.width = 100;
			break;
			
			case 287 + 'px': //GALAXY S3/S4/S5
			hotSpot1.x = 775;
			break;
			
			case 276 + 'px':  //IPAD
			hotSpot1.x = 520;
			
			break;
			
			case 311 + 'px': //IPHONE
			hotSpot1.x = 750;
			break;	
			
			case 688 + 'px': //GALAXY TAB PRO
			hotSpot1.x = 720;
			break;	
	}	
	
		switch(window.innerWidth) {
		
		    //X BUTTON

			 case 768:  //IPAD
			 hotSpot6.x = 660;
			 break;
		
			case 320: //IPHONE/IPOD
			hotSpot6.x = 570;
			break;
			
			case 360:  //GALAXY S3/S4/S5
			hotSpot6.x = 300;
			break;
			
			case 600: //NEXUS 7
			hotSpot6.x = 540;
			break;	
			
			case 800: //NEXUS 10
			hotSpot6.x = 740;
			break;	
			
			case 384: //OPTIMUS G
			hotSpot6.x = 324;
			break;
			
			
	}	
}


hotSpot1.y = 520;
hotSpot1.width = 100;
hotSpot1.height = 100;

hotSpot2.x = 0;
hotSpot2.y = 0;
hotSpot2.width = 50;
hotSpot2.height = 60;

if(canvas.style.height !== 320 + 'px') {
hotSpot3.x = 280;
hotSpot3.y = 580;
hotSpot4.x = 433;
hotSpot4.y = 580;
hotSpot3.width = 160;
hotSpot3.height = 100;
hotSpot4.width = 160;
hotSpot4.height = 100;

}
if(canvas.style.height == 320 + 'px' && window.innerHeight === 529) { //IF IPHONE
hotSpot3.x = 50;
hotSpot3.y = 280;
hotSpot3.width = 120;

hotSpot4.x = 190;
hotSpot4.y = 280;
hotSpot4.width = 160;

hotSpot1.x = 230;
hotSpot1.y = 230;

hotSpot6.x = 250;

}

if(canvas.style.height == 300 + 'px' && window.innerHeight === 356) { //IF IPOD
hotSpot3.x = 50;
hotSpot3.y = 280;
hotSpot3.width = 120;

hotSpot4.x = 190;
hotSpot4.y = 280;
hotSpot4.width = 160;

hotSpot1.x = 230;
hotSpot1.y = 230;

hotSpot6.x = 250;

}
//hotSpot3.y = 580;


hotSpot5.x = 600;
hotSpot5.y = 513;
hotSpot5.width = 290;
hotSpot5.height = 136;

/*
hotSpot6.x = 720;
hotSpot6.y = 5;
hotSpot6.width = 160;
hotSpot6.height = 89;
*/


window.setTimeout(main,24);
context.clearRect(0,0,canvas.width,canvas.height);


//SET EACH PAGE AT 980 PIXELS TO THE RIGHT OF THE ONE BEFORE IT


for(var j = 1; j < 21; j++)
{
pages[j].x = pages[j - 1].x + 1366;
}

//MOVING PAGES LEFT


for(var i = 0; i < pages.length; i++)
{ 
    
   
		if(moveLeft === true)
	{
		vx = -325;
		pages[i].x += (vx * EASING);
		
		if(pages[1].x < 1166)
		paused = true;
	}
	
	if(moveRight === true)
	{
		vx = 325;
		pages[i].x += (vx * EASING);
		paused = true;
	}
		
		if(moveLeft === true && pages[currentPage].x < 0 && currentPage >= 1 && currentPage < 21 && context.globalAlpha === 1)
		{
		//console.log("I'm in here!");
		console.log(currentPage);
		 moveLeft = false;
		 currentPage++;
		 paused = false;
		 
		 mouseUp = false;
		 touchUp = false;
		}
		
		
		
		if(moveRight === true && pages[currentPage - 1].x > 1366)
		{
		 
		 moveRight = false;
		 currentPage--;
		 mouseUp = false;
		 touchUp = false;
		 paused = false;
		}
	
	if(moveLeft === false && moveRight === false)
		{
		 pages[currentPage - 1].x = 0;
		 pages[currentPage].x = 1366;
		} 
}
	
// STOPPING AT BEGINNING AND ENDING PAGES	
	
	if(page1.x > 0)
	{
	page1.x = 0;
	}
	if(page21.x < 0)
	{
	page21.x = 0;
	}
	

//DRAWING THE IMAGES ONTO THE PAGE

for(var k = 0; k < 21; k++)
{
context.drawImage(assetsToLoad[k + 2],pages[k].x,pages[k].y,pages[k].width,pages[k].height);
}


//CHECKING THE HOTSPOT VALUES

if(currentPage === 1 && moveLeft === false)
{
//context.drawImage(narradorBGImage,narradorBG.x,narradorBG.y,narradorBG.width,narradorBG.height);
	
	context.drawImage(narradorOffImage,narradorOff.x,narradorOff.y,narradorOff.width,narradorOff.height);
	context.drawImage(narradorOnImage,narradorOn.x,narradorOn.y,narradorOn.width,narradorOn.height);

}

if(currentPage === 1) {
	if(context.globalAlpha < 1.0)
	{
	console.log("currentAlpha < 1.0");
	fadeIn();
	mouseUp = false;
	touchUp = false;
	pressedHome = false;
    onPressed = false;
	currentPage = 1;
	}
	if(context.globalAlpha >= 0.9)
	{
	context.globalAlpha = 1;
	}
}


if(currentPage > 1)
{
passed1 = true;
context.drawImage(textboxShadowImage,textboxShadow.x,textboxShadow.y,textboxShadow.width,textboxShadow.height);
}

if(currentPage > 1 && currentPage < 21)
{


switch(currentPage)
{
case 2:
context.fillText(sentences[0],100,564);
context.fillText(sentences[1],100,624);
break;

case 3:
context.fillText(sentences[2],100,564);
context.fillText(sentences[3],100,624);
break;

case 4:
context.fillText(sentences[4],100,564);
context.fillText(sentences[5],100,624);
break;

case 5:
context.fillText(sentences[6],100,564);
context.fillText(sentences[7],100,624);
break;

case 6:
context.fillText(sentences[8],100,564);
context.fillText(sentences[9],100,624);
break;

case 7:
context.fillText(sentences[10],100,564);
context.fillText(sentences[11],100,624);
break;

case 8:
context.fillText(sentences[12],100,564);
context.fillText(sentences[13],100,624);
break;

case 9:
context.fillText(sentences[14],100,564);
context.fillText(sentences[15],100,624);
break;

case 10:
context.fillText(sentences[16],100,564);
context.fillText(sentences[17],100,624);
break;

case 11:
context.fillText(sentences[18],100,564);
context.fillText(sentences[19],100,624);
break;

case 12:
context.fillText(sentences[20],100,564);
context.fillText(sentences[21],100,624);
break;

case 13:
context.fillText(sentences[22],100,564);
context.fillText(sentences[23],100,624);
break;

case 14:
context.fillText(sentences[24],100,564);
context.fillText(sentences[25],100,624);
break;

case 15:
context.fillText(sentences[26],100,564);
context.fillText(sentences[27],100,624);
break;

case 16:
context.fillText(sentences[28],100,564);
context.fillText(sentences[29],100,624);
break;

case 17:
context.fillText(sentences[30],100,564);
context.fillText(sentences[31],100,624);
break;

case 18:
context.fillText(sentences[32],100,564);
context.fillText(sentences[33],100,624);
break;

case 19:
context.fillText(sentences[34],100,564);
context.fillText(sentences[35],100,624);
break;

case 20:
context.fillText(sentences[36],100,564);
context.fillText(sentences[37],100,624);
break;
}

}

if(currentPage === 21 && pages[22].x <= -24900.5)
{
context.drawImage(finImage,fin.x,fin.y,fin.width,fin.height);
context.drawImage(leerImage,leer.x,leer.y,leer.width,leer.height);
}

//DRAWING THE HIGHLIGHTED BOX FOR EACH WORD

if(currentPage > 1 && currentPage < 21 && narratorOn === true && paused === false)
{

context.save();

context.globalAlpha = .8;

if(yPos === 564)
context.fillStyle = "#ebebeb";

if(yPos === 624)
context.fillStyle = "#dcdcdc";


context.globalAlpha = .7;
context.fillStyle = "#ff2841";
context.fillText(words[value1],startingPoints1[value1],yPos);



context.restore();


}



if(currentPage > 1)
{
//context.drawImage(dropDownImage,dropDown.x,dropDown.y,dropDown.width,dropDown.height);
//context.drawImage(dropUpImage,dropUp.x,dropUp.y,dropUp.width,dropUp.height);
}

if(currentPage > 1)
{
if(onPressed === false && currentPage < 21)
{
context.drawImage(rightButtonImage,rightButton.x,rightButton.y,rightButton.width,rightButton.height);
}
if(onPressed === true && pressedRight === true && currentPage < 21)
{
context.drawImage(rightButtonImage,rightButton.x,rightButton.y,rightButton.width,rightButton.height);
}

context.drawImage(homeImage,home.x,home.y,home.width,home.height);



if (LION.android || LION.ios || LION.isIE) {
context.drawImage(xButtonImage,xButton.x,xButton.y,xButton.width,xButton.height);
}

}




if (startFade === true) {
	
	fadeOut();
	context.globalAlpha -= 0.1;
	currentPage = 1;
	startFade = false;
	vo.pause();
	offPressed = false;
	onPressed = false;
}
    
	  
		  if(mouseUp === true)
		  {
			if(currentPage === 1)
			{
					if(offPressed === true)
					{
					moveLeft = true;
					offPressed = false;
					narratorOn = false;
					mouseUp = false;
					pressedTouch = true;
					}
				   if(onPressed === true)
				   {
					moveLeft = true;
					onPressed = false;
					narratorOn = true;
					mouseUp = false;
					pressedTouch = true;
					//vo.playbackRate = .5;
				  }
			}
			
			if(currentPage > 1)
			{
				  if(pressedHome === true)
				  {
				  startFade = true;
				  pressedHome = false;
				  }
				  
				  if(pressedRight === true)
				  {
				  moveLeft = true;
				  pressedRight = false;
				  mouseUp = false;
				  }
			}
		 
		  }
		  
		  if(touchUp === true)
		  {
		  	if(currentPage === 1)
			{
					if(offPressed === true)
					{
					moveLeft = true;
					offPressed = false;
					narratorOn = false;
					touchUp = false;
					pressedTouch = true;
					}
				   if(onPressed === true)
				   {
					moveLeft = true;
					onPressed = false;
					narratorOn = true;
					touchUp = false;
					vo.play();
					pressedTouch = true;
				  }
			}
			
			if(currentPage > 1)
			{
				  if(pressedHome === true)
				  {
				  startFade = true;
				  pressedHome = false;
				  }
				  
				  if(pressedRight === true)
				  {
				  moveLeft = true;
				  pressedRight = false;
				  mouseUp = false;
				  }
			}
			}
	      

	

if(paused === true && moveLeft === false && moveRight === false && currentPage > 1 && currentPage < 21)
context.drawImage(rightButtonHintImage,rightButtonHint.x,rightButtonHint.y,rightButtonHint.width,rightButtonHint.height);
		
		
	
 context.fillStyle = "#000";
context.font =  "37px sesame";


checkCollision();
		  

}