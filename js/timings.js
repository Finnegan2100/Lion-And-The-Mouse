
function checkTimings() {

if (LION.paused === true) {
	vo.pause();
}

//SYNCING PAGE 1

if (pages[1].x < 1366 && pages[1].x > 0 && LION.currentPage === 1 && LION.paused === true) {
	vo.currentTime = 1.85;
}
if (pages[1].x > -1366 && pages[1].x < 0 && LION.currentPage === 3 && LION.paused === true) {
	vo.currentTime = 1.85;
}

//SYNCING PAGE 2

if (pages[1].x < 0 && pages[1].x > -1366 && LION.currentPage === 2 && LION.paused === true) {
	vo.currentTime = 7.65;
}
if (pages[1].x > -2700 && pages[1].x < -1366 && LION.currentPage === 4 && LION.paused === true) {
	vo.currentTime = 7.65;
}

//SYNCING PAGE 3

if (pages[1].x > -2700 && pages[1].x < -1366 && LION.currentPage === 3 && LION.paused === true) {
	vo.currentTime = 16.3;
}
if (pages[1].x > -4133 && pages[1].x < -2700 && LION.currentPage === 5 && LION.paused === true) {
	vo.currentTime = 16.3;
}

//SYNCING PAGE 4

if(pages[1].x > -4133 && pages[1].x < -2700 && LION.currentPage === 4 && LION.paused === true)
{
vo.currentTime = 22.6;
}
if(pages[1].x > -5478 && pages[1].x < -4133 && LION.currentPage === 6 && LION.paused === true)
{
vo.currentTime = 22.6;
}

//SYNCING PAGE 5

if (pages[1].x > -5478 && pages[1].x < -4133 && LION.currentPage === 5 && LION.paused === true) {
	vo.currentTime = 30.4;
}
if (pages[1].x > -6882 && pages[1].x < -5478 && LION.currentPage === 7 && LION.paused === true) {
	vo.currentTime = 30.4;
}

//SYNCING PAGE 6

if (pages[1].x > -6882 && pages[1].x < -5478 && LION.currentPage === 6 && LION.paused === true) {
	vo.currentTime = 38.4;
}
if (pages[1].x > -8228 && pages[1].x < -6882 && LION.currentPage === 8 && LION.paused === true) {
	vo.currentTime = 38.4;
}

//SYNCING PAGE 7

if (pages[1].x > -8228 && pages[1].x < -6882 && LION.currentPage === 7 && LION.paused === true) {
	vo.currentTime = 48.05;
}
if (pages[1].x > -9573 && pages[1].x < -8228 && LION.currentPage === 9 && LION.paused === true) {
	vo.currentTime = 48.05;
}
	
if (LION.currentPage === 2 && LION.narratorOn === true && LION.paused === false) {
    vo.play();
}

//PAGE 1 LINE 1

if (vo.currentTime < 2.0 && vo.currentTime > 1.8) {
    LION.value1 = 0;
    LION.yPos = 564;
}
if (vo.currentTime < 2.4 && vo.currentTime > 2.0) {
    LION.value1 = 1;
    LION.yPos = 564;
}
if (vo.currentTime < 2.7 && vo.currentTime > 2.4) {
    LION.value1 = 2;
    LION.yPos = 564;
}
if (vo.currentTime < 3.0 && vo.currentTime > 2.7) {
    LION.value1 = 3;
    LION.yPos = 564;
}
if( vo.currentTime < 3.35 && vo.currentTime > 3.0) {
	LION.value1 = 4;
	LION.yPos = 564;
}
if (vo.currentTime < 3.6 && vo.currentTime > 3.35) {
	LION.value1 = 5;
	LION.yPos = 564;
}
if (vo.currentTime < 3.9 && vo.currentTime > 3.6) {
	LION.value1 = 6;
	LION.yPos = 564;
}
if (vo.currentTime < 4.15 && vo.currentTime > 3.9) {
	LION.value1 = 7;
	LION.yPos = 564;
}
if (vo.currentTime < 4.4 && vo.currentTime > 4.15) {
	LION.value1 = 8;
	LION.yPos = 564;
}

//PAGE 1 LINE 2



if(vo.currentTime < 5.6 && vo.currentTime > 5.3)
{
LION.value1 = 10;
LION.yPos = 624;
}
if(vo.currentTime < 5.9 && vo.currentTime > 5.6)
{
LION.value1 = 11;
LION.yPos = 624;
}
if(vo.currentTime < 6.2 && vo.currentTime > 5.9)
{
LION.value1 = 12;
LION.yPos = 624;
}
if(vo.currentTime < 6.45 && vo.currentTime > 6.2)
{
LION.value1 = 13;
LION.yPos = 624;
}
if(vo.currentTime < 7.2 && vo.currentTime > 6.45)
{
LION.value1 = 14;
LION.yPos = 624;
}

if(vo.currentTime > 7.2 && vo.currentTime < 7.5)
{
LION.paused = true;
}

if(LION.currentPage === 3 && LION.narratorOn === true && LION.paused === false)
{
vo.play();
}


//PAGE 2 LINE 1


if(vo.currentTime < 8.4 && vo.currentTime > 7.6)
{
LION.value1 = 16;
LION.yPos = 564;
}
if(vo.currentTime < 9.0 && vo.currentTime > 8.4)
{
LION.value1 = 17;
LION.yPos = 564;
}
if(vo.currentTime < 9.4 && vo.currentTime > 9.0)
{
LION.value1 = 18;
LION.yPos = 564;
}
if(vo.currentTime < 10.1 && vo.currentTime > 9.4)
{
LION.value1 = 19;
LION.yPos = 564;
}
if(vo.currentTime < 10.3 && vo.currentTime > 10.1)
{
LION.value1 = 20;
LION.yPos = 564;
}
if(vo.currentTime < 10.9 && vo.currentTime > 10.3)
{
LION.value1 = 21;
LION.yPos = 564;
}
if(vo.currentTime < 11.5 && vo.currentTime > 10.9)
{
LION.value1 = 22;
LION.yPos = 564;
}


//PAGE 2 LINE 1


if(vo.currentTime < 8.6 && vo.currentTime > 8.0)
{
LION.value1 = 16;
LION.yPos = 564;
}
if(vo.currentTime < 9.6 && vo.currentTime > 8.6)
{
LION.value1 = 17;
LION.yPos = 564;
}
if(vo.currentTime < 10.0 && vo.currentTime > 9.6)
{
LION.value1 = 18;
LION.yPos = 564;
}
if(vo.currentTime < 10.3 && vo.currentTime > 10.0)
{
LION.value1 = 19;
LION.yPos = 564;
}
if(vo.currentTime < 10.6 && vo.currentTime > 10.3)
{
LION.value1 = 20;
LION.yPos = 564;
}
if(vo.currentTime < 11.2 && vo.currentTime > 10.6)
{
LION.value1 = 21;
LION.yPos = 564;
}
if(vo.currentTime < 11.7 && vo.currentTime > 11.2)
{
LION.value1 = 22;
LION.yPos = 564;
}


//PAGE 2 LINE 2



if(vo.currentTime < 12 && vo.currentTime > 11.5)
{
LION.value1 = 24;
LION.yPos = 624;
}
if(vo.currentTime < 12.3 && vo.currentTime > 12)
{
LION.value1 = 25;
LION.yPos = 624;
}
if(vo.currentTime < 12.7 && vo.currentTime > 12.3)
{
LION.value1 = 26;
LION.yPos = 624;
}
if(vo.currentTime < 13.2 && vo.currentTime > 12.7)
{
LION.value1 = 27;
LION.yPos = 624;
}
if(vo.currentTime < 13.7 && vo.currentTime > 13.2)
{
LION.value1 = 28;
LION.yPos = 624;
}
if(vo.currentTime < 14.0 && vo.currentTime > 13.7)
{
LION.value1 = 29;
LION.yPos = 624;
}
if(vo.currentTime < 14.3 && vo.currentTime > 14.0)
{
LION.value1 = 30;
LION.yPos = 624;
}
if(vo.currentTime < 14.6 && vo.currentTime > 14.3)
{
LION.value1 = 31;
LION.yPos = 624;
}
if(vo.currentTime < 14.9 && vo.currentTime > 14.6)
{
LION.value1 = 32;
LION.yPos = 624;
}
if(vo.currentTime < 15.6 && vo.currentTime > 14.9)
{
LION.value1 = 33;
LION.yPos = 624;
}
if(vo.currentTime > 15.6 && vo.currentTime < 16.0)
{
LION.paused = true;
}

if(LION.currentPage === 4 && LION.narratorOn === true && LION.paused === false)
{
vo.play();
}

//PAGE 3 LINE 1


if(vo.currentTime < 16.9 && vo.currentTime > 16.2)
{
LION.value1 = 35;
LION.yPos = 564;
}
if(vo.currentTime < 17.3 && vo.currentTime > 16.9)
{
LION.value1 = 36;
LION.yPos = 564;
}
if(vo.currentTime < 17.6 && vo.currentTime > 17.3)
{
LION.value1 = 37;
LION.yPos = 564;
}
if(vo.currentTime < 18 && vo.currentTime > 17.6)
{
LION.value1 = 38;
LION.yPos = 564;
}
if(vo.currentTime < 18.3 && vo.currentTime > 18)
{
LION.value1 = 39;
LION.yPos = 564;
}
if(vo.currentTime < 18.6 && vo.currentTime > 18.3)
{
LION.value1 = 40;
LION.yPos = 564;
}
if(vo.currentTime < 18.9 && vo.currentTime > 18.6)
{
LION.value1 = 41;
LION.yPos = 564;
}

//PAGE 3 LINE 2


if(vo.currentTime < 19.4 && vo.currentTime > 19.1)
{
LION.value1 = 43;
LION.yPos = 624;
}
if(vo.currentTime < 19.7 && vo.currentTime > 19.4)
{
LION.value1 = 44;
LION.yPos = 624;
}
if(vo.currentTime < 20 && vo.currentTime > 19.7)
{
LION.value1 = 45;
LION.yPos = 624;
}
if(vo.currentTime < 20.3 && vo.currentTime > 20)
{
LION.value1 = 46;
LION.yPos = 624;
}
if(vo.currentTime < 20.6 && vo.currentTime > 20.3)
{
LION.value1 = 47;
LION.yPos = 624;
}
if(vo.currentTime < 20.9 && vo.currentTime > 20.6)
{
LION.value1 = 48;
LION.yPos = 624;
}
if(vo.currentTime < 21.2 && vo.currentTime > 20.9)
{
LION.value1 = 49;
LION.yPos = 624;
}
if(vo.currentTime < 21.5 && vo.currentTime > 21.2)
{
LION.value1 = 50;
LION.yPos = 624;
}
if(vo.currentTime < 21.8 && vo.currentTime > 21.5)
{
LION.value1 = 51;
LION.yPos = 624;
}

if(vo.currentTime > 21.8 && vo.currentTime < 22.5)
{
LION.paused = true;
}

if(LION.currentPage === 5 && LION.narratorOn === true && LION.paused === false)
{
vo.play();
}

//PAGE 4 LINE 1


if(vo.currentTime < 23.1 && vo.currentTime > 22.5)
{
LION.value1 = 54;
LION.yPos = 564;
}

if(vo.currentTime < 23.6 && vo.currentTime > 23.1)
{
LION.value1 = 55;
LION.yPos = 564;
}
if(vo.currentTime < 24.4 && vo.currentTime > 23.6)
{
LION.value1 = 56;
LION.yPos = 564;
}
if(vo.currentTime < 24.7 && vo.currentTime > 24.4)
{
LION.value1 = 57;
LION.yPos = 564;
}
if(vo.currentTime < 25.0 && vo.currentTime > 24.7)
{
LION.value1 = 58;
LION.yPos = 564;
}
if(vo.currentTime < 25.3 && vo.currentTime > 25.0)
{
LION.value1 = 59;
LION.yPos = 564;
}
if(vo.currentTime < 25.6 && vo.currentTime > 25.3)
{
LION.value1 = 60;
LION.yPos = 564;
}


//PAGE 4 LINE 2


if(vo.currentTime < 26.6 && vo.currentTime > 25.6 )
{
LION.value1 = 62;
LION.yPos = 624;
}
if(vo.currentTime < 26.9 && vo.currentTime > 26.6)
{
LION.value1 = 63;
LION.yPos = 624;
}
if(vo.currentTime < 27.2 && vo.currentTime > 26.9)
{
LION.value1 = 64;
LION.yPos = 624;
}
if(vo.currentTime < 27.8 && vo.currentTime > 27.2)
{
LION.value1 = 65;
LION.yPos = 624;
}
if(vo.currentTime < 28.2 && vo.currentTime > 27.8)
{
LION.value1 = 66;
LION.yPos = 624;
}
if(vo.currentTime < 28.5 && vo.currentTime > 28.2)
{
LION.value1 = 67;
LION.yPos = 624;
}
if(vo.currentTime < 29.8 && vo.currentTime > 28.5)
{
LION.value1 = 68;
LION.yPos = 624;
}

if(vo.currentTime > 29.8 && vo.currentTime < 30.3)
{
LION.paused = true;
}


if(LION.currentPage === 6 && LION.narratorOn === true && LION.paused === false)
{
vo.play();
}

//PAGE 5 LINE 1

if(vo.currentTime < 30.6 && vo.currentTime > 30.3)
{
LION.value1 = 71;
LION.yPos = 564;
}
if(vo.currentTime < 31.6 && vo.currentTime > 30.6)
{
LION.value1 = 72;
LION.yPos = 564;
}
if(vo.currentTime < 32.2 && vo.currentTime > 31.6)
{
LION.value1 = 73;
LION.yPos = 564;
}
if(vo.currentTime < 32.5 && vo.currentTime > 32.2)
{
LION.value1 = 74;
LION.yPos = 564;
}
if(vo.currentTime < 32.8 && vo.currentTime > 32.5)
{
LION.value1 = 75;
LION.yPos = 564;
}
if(vo.currentTime < 33.1 && vo.currentTime > 32.8)
{
LION.value1 = 76;
LION.yPos = 564;
}
if(vo.currentTime < 33.4 && vo.currentTime > 33.1)
{
LION.value1 = 77;
LION.yPos = 564;
}
if(vo.currentTime < 34.0 && vo.currentTime > 33.4)
{
LION.value1 = 78;
LION.yPos = 564;
}
if(vo.currentTime < 34.3 && vo.currentTime > 34.0)
{
LION.value1 = 79;
LION.yPos = 564;
}
if(vo.currentTime < 34.6 && vo.currentTime > 34.3)
{
LION.value1 = 80;
LION.yPos = 564;
}
if(vo.currentTime < 34.9 && vo.currentTime > 34.6)
{
LION.value1 = 81;
LION.yPos = 564;
}


//PAGE 5 LINE 2


if(vo.currentTime < 35.2 && vo.currentTime > 34.9)
{
LION.value1 = 83;
LION.yPos = 624;
}
if(vo.currentTime < 35.5 && vo.currentTime > 35.2)
{
LION.value1 = 84;
LION.yPos = 624;
}
if(vo.currentTime < 35.8 && vo.currentTime > 35.5)
{
LION.value1 = 85;
LION.yPos = 624;
}
if(vo.currentTime < 36.1 && vo.currentTime > 35.8)
{
LION.value1 = 86;
LION.yPos = 624;
}
if(vo.currentTime < 36.4 && vo.currentTime > 36.1)
{
LION.value1 = 87;
LION.yPos = 624;
}
if(vo.currentTime < 36.7 && vo.currentTime > 36.4)
{
LION.value1 = 88;
LION.yPos = 624;
}
if(vo.currentTime < 37.0 && vo.currentTime > 36.7)
{
LION.value1 = 89;
LION.yPos = 624;
}
if(vo.currentTime < 37.3 && vo.currentTime > 37.0)
{
LION.value1 = 90;
LION.yPos = 624;
}

if(vo.currentTime < 38.0 && vo.currentTime > 37.3)
{
LION.paused = true;
}

if(LION.currentPage === 7 && LION.narratorOn === true && LION.paused === false)
{
vo.play();
}


//PAGE 6 LINE 1

if(vo.currentTime < 38.9 && vo.currentTime > 38.0)
{
LION.value1 = 92;
LION.yPos = 564;
}
if(vo.currentTime < 39.2 && vo.currentTime > 38.9)
{
LION.value1 = 93;
LION.yPos = 564;
}
if(vo.currentTime < 39.6 && vo.currentTime > 39.2)
{
LION.value1 = 94;
LION.yPos = 564;
}
if(vo.currentTime < 39.9 && vo.currentTime > 39.6)
{
LION.value1 = 95;
LION.yPos = 564;
}
if(vo.currentTime < 40.2 && vo.currentTime > 39.9)
{
LION.value1 = 96;
LION.yPos = 564;
}
if(vo.currentTime < 40.6 && vo.currentTime > 40.2)
{
LION.value1 = 97;
LION.yPos = 564;
}
if(vo.currentTime < 41.8 && vo.currentTime > 40.6)
{
LION.value1 = 98;
LION.yPos = 564;
}



//PAGE 6 LINE 2


if(vo.currentTime < 42.8 && vo.currentTime > 42.4)
{
LION.value1 = 101;
LION.yPos = 624;
}
if(vo.currentTime < 43.1 && vo.currentTime > 42.8)
{
LION.value1 = 102;
LION.yPos = 624;
}
if(vo.currentTime < 43.4 && vo.currentTime > 43.1)
{
LION.value1 = 103;
LION.yPos = 624;
}
if(vo.currentTime < 44.0 && vo.currentTime > 43.4)
{
LION.value1 = 104;
LION.yPos = 624;
}
if(vo.currentTime < 44.5 && vo.currentTime > 44.0)
{
LION.value1 = 105;
LION.yPos = 624;
}
if(vo.currentTime < 44.8 && vo.currentTime > 44.5)
{
LION.value1 = 106;
LION.yPos = 624;
}
if(vo.currentTime < 45.1 && vo.currentTime > 44.8)
{
LION.value1 = 107;
LION.yPos = 624;
}
if(vo.currentTime < 45.4 && vo.currentTime > 45.1)
{
LION.value1 = 108;
LION.yPos = 624;
}
if(vo.currentTime < 45.7 && vo.currentTime > 45.4)
{
LION.value1 = 109;
LION.yPos = 624;
}

if(vo.currentTime < 46.8 && vo.currentTime > 46.0)
{
LION.paused = true;
}

if(LION.currentPage === 8 && LION.narratorOn === true && LION.paused === false)
{
vo.play();
}


//PAGE 7 LINE 1

if(vo.currentTime < 48.4 && vo.currentTime > 47.4)
{
LION.value1 = 111;
LION.yPos = 564;
}
if(vo.currentTime < 48.7 && vo.currentTime > 48.4)
{
LION.value1 = 112;
LION.yPos = 564;
}
if(vo.currentTime < 49.0 && vo.currentTime > 48.7)
{
LION.value1 = 113;
LION.yPos = 564;
}
if(vo.currentTime < 49.3 && vo.currentTime > 49.0)
{
LION.value1 = 114;
LION.yPos = 564;
}
if(vo.currentTime < 49.6 && vo.currentTime > 49.3)
{
LION.value1 = 115;
LION.yPos = 564;
}
if(vo.currentTime < 50.0 && vo.currentTime > 49.6)
{
LION.value1 = 116;
LION.yPos = 564;
}
if(vo.currentTime < 50.3 && vo.currentTime > 50.0)
{
LION.value1 = 117;
LION.yPos = 564;
}
if(vo.currentTime < 50.5 && vo.currentTime > 50.3)
{
LION.value1 = 118;
LION.yPos = 564;
}
if(vo.currentTime < 50.8 && vo.currentTime > 50.5)
{
LION.value1 = 119;
LION.yPos = 564;
}


//PAGE 7 LINE 2


if(vo.currentTime < 51.3 && vo.currentTime > 51)
{
LION.value1 = 121;
LION.yPos = 624;
}
if(vo.currentTime < 51.7 && vo.currentTime > 51.3)
{
LION.value1 = 122;
LION.yPos = 624;
}
if(vo.currentTime < 52.0 && vo.currentTime > 51.7)
{
LION.value1 = 123;
LION.yPos = 624;
}
if(vo.currentTime < 52.3 && vo.currentTime > 52.0)
{
LION.value1 = 124;
LION.yPos = 624;
}
if(vo.currentTime < 52.6 && vo.currentTime > 52.3)
{
LION.value1 = 125;
LION.yPos = 624;
}
if(vo.currentTime < 53.2 && vo.currentTime > 53.0)
{
LION.paused = true;
}


if(LION.currentPage === 9 && LION.narratorOn === true && LION.paused === false)
{
vo.play();
}




}