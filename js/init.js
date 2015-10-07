

function initializeText() {
	
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
LION.context.fillStyle = "#333";

if(LION.isMac && LION.isChrome) 
LION.context.font =  "37px sesame";

if(!LION.ios && !LION.isMac)
LION.context.font =  "bold 37px sesame";

if(LION.isFirefox)
LION.context.font =  "37px sesame";

if(LION.isSafari)
LION.context.font =  "37px sesame";

if(LION.ios)
LION.context.font = "37px sesameIOS";

if(LION.isIE)
LION.context.font = "37px sesameIOS";

for (var i = 0; i < words.length; i++) {
	LION.context.fillStyle = "#000";
	widths1.push(LION.context.measureText(words[i]).width);
}
	
	
}

function initializeHotSpots() {
	
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

   

	switch(LION.canvas.style.height) {  

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

if(LION.canvas.style.height !== 320 + 'px') {
hotSpot3.x = 280;
hotSpot3.y = 580;
hotSpot4.x = 433;
hotSpot4.y = 580;
hotSpot3.width = 160;
hotSpot3.height = 100;
hotSpot4.width = 160;
hotSpot4.height = 100;

}
if(LION.canvas.style.height == 320 + 'px' && window.innerHeight === 529) { //IF IPHONE
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

if(LION.canvas.style.height == 300 + 'px' && window.innerHeight === 356) { //IF IPOD
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
	
}

function initializePages() {
	
	
for(var j = 1; j < 21; j++)
{
pages[j].x = pages[j - 1].x + 1366;
}

//DRAWING THE IMAGES ONTO THE PAGE

for(var k = 0; k < 21; k++)
{
LION.context.drawImage(assetsToLoad[k + 2],pages[k].x,pages[k].y,pages[k].width,pages[k].height);
}
	
	
}

	
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
	
	LION.checkingLoads++;
}
	
