

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