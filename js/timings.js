
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
/*
//SYNCING PAGE 8

if(pages[1].x > -9573 && pages[1].x < -8228 && LION.currentPage === 8 && LION.paused === true)
{
vo.currentTime = 53.3;
}
if(pages[1].x > -10977 && pages[1].x < -9573 && LION.currentPage === 10 && LION.paused === true)
{
vo.currentTime = 53.3;
}

//SYNCING PAGE 9

if(pages[1].x > -10977 && pages[1].x < -9573 && LION.currentPage === 9 && LION.paused === true)
{
vo.currentTime = 59.26;
}
if(pages[1].x > -12323 && pages[1].x < -10977 && LION.currentPage === 11 && LION.paused === true)
{
vo.currentTime = 59.26;
}

//SYNCING PAGE 10

if(pages[1].x > -12323 && pages[1].x < -10977 && LION.currentPage === 10 && LION.paused === true)
{
vo.currentTime = 68.4;
}
if(pages[1].x > -13668 && pages[1].x < -12323 && LION.currentPage === 12 && LION.paused === true)
{
vo.currentTime = 68.4;
}


//SYNCING PAGE 11

if(pages[1].x > -13668 && pages[1].x < -12323 && LION.currentPage === 11 && LION.paused === true)
{
vo.currentTime = 76.4;
}
if(pages[1].x > -15072 && pages[1].x < -13668 && LION.currentPage === 13 && LION.paused === true)
{
vo.currentTime = 76.4;
}

//SYNCING PAGE 12

if(pages[1].x > -15072 && pages[1].x < -13668 && LION.currentPage === 12 && LION.paused === true)
{
vo.currentTime = 87.2;
}
if(pages[1].x > -16418 && pages[1].x < -15072 && LION.currentPage === 14 && LION.paused === true)
{
vo.currentTime = 87.2;
}

//SYNCING PAGE 13

if(pages[1].x > -16418 && pages[1].x < -15072 && LION.currentPage === 13 && LION.paused === true)
{
vo.currentTime = 96.8;
}
if(pages[1].x > -17763 && pages[1].x < -16418 && LION.currentPage === 15 && LION.paused === true)
{
vo.currentTime = 96.8;
}

//SYNCING PAGE 14

if(pages[1].x > -17763 && pages[1].x < -16418 && LION.currentPage === 14 && LION.paused === true)
{
vo.currentTime = 105.1;
}
if(pages[1].x > -19167 && pages[1].x < -17763 && LION.currentPage === 16 && LION.paused === true)
{
vo.currentTime = 105.1;
}

//SYNCING PAGE 15

if(pages[1].x > -19167 && pages[1].x < -17163 && LION.currentPage === 15 && LION.paused === true)
{
vo.currentTime = 114.3;
}
if(pages[1].x > -20513 && pages[1].x < -19167 && LION.currentPage === 17 && LION.paused === true)
{
vo.currentTime = 114.3;
}

//SYNCING PAGE 16

if(pages[1].x > -20513 && pages[1].x < -19167 && LION.currentPage === 16 && LION.paused === true)
{
vo.currentTime = 121.3;
}
if(pages[1].x > -21858 && pages[1].x < -20513 && LION.currentPage === 18 && LION.paused === true)
{
vo.currentTime = 121.3;
}

//SYNCING PAGE 17

if(pages[1].x > -21858 && pages[1].x < -20513 && LION.currentPage === 17 && LION.paused === true)
{
vo.currentTime = 130.3;
}
if(pages[1].x > -23262 && pages[1].x < -21858 && LION.currentPage === 19 && LION.paused === true)
{
vo.currentTime = 130.3;
}

//SYNCING PAGE 18

if(pages[1].x > -23262 && pages[1].x < -21858 && LION.currentPage === 18 && LION.paused === true)
{
vo.currentTime = 138.5;
}
if(pages[1].x > -24608 && pages[1].x < -23262 && LION.currentPage === 20 && LION.paused === true)
{
vo.currentTime = 138.5;
}

//SYNCING PAGE 19

if(pages[1].x > -24608 && pages[1].x < -23262 && LION.currentPage === 19 && LION.paused === true)
{
vo.currentTime = 145.2;
}
if(pages[1].x > -26012 && pages[1].x < -24608 && LION.currentPage === 21 && LION.paused === true)
{
vo.currentTime = 145.2;
}
*/

	
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


//PAGE 8 LINE 1

if(vo.currentTime < 53.7 && vo.currentTime > 53.2)
{
LION.value1 = 127;
LION.yPos = 564;
}
if(vo.currentTime < 54.0 && vo.currentTime > 53.7)
{
LION.value1 = 128;
LION.yPos = 564;
}
if(vo.currentTime < 54.3 && vo.currentTime > 54.0)
{
LION.value1 = 129;
LION.yPos = 564;
}
if(vo.currentTime < 54.6 && vo.currentTime > 54.3)
{
LION.value1 = 130;
LION.yPos = 564;
}



//PAGE 8 LINE 2


if(vo.currentTime < 56.4 && vo.currentTime > 55.7 )
{
LION.value1 = 133;
LION.yPos = 624;
}
if(vo.currentTime < 57.0 && vo.currentTime > 56.4)
{
LION.value1 = 134;
LION.yPos = 624;
}
if(vo.currentTime < 57.4 && vo.currentTime > 57.0)
{
LION.value1 = 135;
LION.yPos = 624;
}
if(vo.currentTime < 57.7 && vo.currentTime > 57.4)
{
LION.value1 = 136;
LION.yPos = 624;
}
if(vo.currentTime < 58.0 && vo.currentTime > 57.7)
{
LION.value1 = 137;
LION.yPos = 624;
}
if(vo.currentTime < 58.3 && vo.currentTime > 58.0)
{
LION.value1 = 138;
LION.yPos = 624;
}
if(vo.currentTime < 58.4 && vo.currentTime > 58.3)
{
LION.value1 = 139;
LION.yPos = 624;
}

if(vo.currentTime < 58.9 && vo.currentTime > 58.4)
{
LION.paused = true;
}


if(LION.currentPage === 10 && LION.narratorOn === true && LION.paused === false)
{
vo.play();
}

/*

//PAGE 9 LINE 1

if(vo.currentTime < 60.6 && vo.currentTime > 59.0)
{
LION.value1 = 142;
LION.yPos = 564;
}
if(vo.currentTime < 61.2 && vo.currentTime > 60.6)
{
LION.value1 = 143;
LION.yPos = 564;
}
if(vo.currentTime < 61.7 && vo.currentTime > 61.2)
{
LION.value1 = 144;
LION.yPos = 564;
}
if(vo.currentTime < 62.0 && vo.currentTime > 61.7)
{
LION.value1 = 145;
LION.yPos = 564;
}
if(vo.currentTime < 62.3 && vo.currentTime > 62.0)
{
LION.value1 = 146;
LION.yPos = 564;
}
if(vo.currentTime < 62.6 && vo.currentTime > 62.3)
{
LION.value1 = 147;
LION.yPos = 564;
}
if(vo.currentTime < 62.9 && vo.currentTime > 62.6)
{
LION.value1 = 148;
LION.yPos = 564;
}
if(vo.currentTime < 63.2 && vo.currentTime > 62.9)
{
LION.value1 = 149;
LION.yPos = 564;
}

if(vo.currentTime < 63.5 && vo.currentTime > 63.2)
{
LION.value1 = 150;
LION.yPos = 564;
}
if(vo.currentTime < 63.8 && vo.currentTime > 63.5)
{
LION.value1 = 151;
LION.yPos = 564;
}
if(vo.currentTime < 64.1 && vo.currentTime > 63.8)
{
LION.value1 = 152;
LION.yPos = 564;
}

//PAGE 9 LINE 2


if(vo.currentTime < 64.4 && vo.currentTime > 64.1)
{
LION.value1 = 154;
LION.yPos = 624;
}
if(vo.currentTime < 64.7 && vo.currentTime > 64.4)
{
LION.value1 = 155;
LION.yPos = 624;
}
if(vo.currentTime < 65.0 && vo.currentTime > 64.7)
{
LION.value1 = 156;
LION.yPos = 624;
}
if(vo.currentTime < 65.3 && vo.currentTime > 65.0)
{
LION.value1 = 157;
LION.yPos = 624;
}
if(vo.currentTime < 65.6 && vo.currentTime > 65.3)
{
LION.value1 = 158;
LION.yPos = 624;
}
if(vo.currentTime < 65.9 && vo.currentTime > 65.6)
{
LION.value1 = 159;
LION.yPos = 624;
}
if(vo.currentTime < 66.3 && vo.currentTime > 65.9)
{
LION.value1 = 160;
LION.yPos = 624;
}

if(vo.currentTime < 67.4 && vo.currentTime > 66.8)
{
LION.paused = true;
}


if(LION.currentPage === 11 && LION.narratorOn === true && LION.paused === false)
{
vo.play();
}


//PAGE 10 LINE 1

if(vo.currentTime < 68.6 && vo.currentTime > 67.8)
{
LION.value1 = 162;
LION.yPos = 564;
}
if(vo.currentTime < 68.9 && vo.currentTime > 68.6)
{
LION.value1 = 163;
LION.yPos = 564;
}
if(vo.currentTime < 69.2 && vo.currentTime > 68.9)
{
LION.value1 = 164;
LION.yPos = 564;
}
if(vo.currentTime < 79.4 && vo.currentTime > 69.2)
{
LION.value1 = 165;
LION.yPos = 564;
}
if(vo.currentTime < 69.7 && vo.currentTime > 69.4)
{
LION.value1 = 166;
LION.yPos = 564;
}
if(vo.currentTime < 70.5 && vo.currentTime > 69.7)
{
LION.value1 = 167;
LION.yPos = 564;
}


//PAGE 10 LINE 2


if(vo.currentTime < 71.2 && vo.currentTime > 70.5)
{
LION.value1 = 169;
LION.yPos = 624;
}
if(vo.currentTime < 71.5 && vo.currentTime > 71.2)
{
LION.value1 = 170;
LION.yPos = 624;
}
if(vo.currentTime < 71.8 && vo.currentTime > 71.5)
{
LION.value1 = 171;
LION.yPos = 624;
}
if(vo.currentTime < 72.1 && vo.currentTime > 71.8)
{
LION.value1 = 172;
LION.yPos = 624;
}
if(vo.currentTime < 72.4 && vo.currentTime > 72.1)
{
LION.value1 = 173;
LION.yPos = 624;
}
if(vo.currentTime < 72.7 && vo.currentTime > 72.4)
{
LION.value1 = 174;
LION.yPos = 624;
}
if(vo.currentTime < 73.0 && vo.currentTime > 72.7)
{
LION.value1 = 175;
LION.yPos = 624;
}

if(vo.currentTime < 73.7 && vo.currentTime > 73.0)
{
LION.paused = true;
}

if(LION.currentPage === 12 && LION.narratorOn === true && LION.paused === false)
{
vo.play();
}


//PAGE 11 LINE 1

if(vo.currentTime < 77.1 && vo.currentTime > 76.3)
{
LION.value1 = 177;
LION.yPos = 564;
}
if(vo.currentTime < 77.4 && vo.currentTime > 77.1)
{
LION.value1 = 178;
LION.yPos = 564;
}
if(vo.currentTime < 77.7 && vo.currentTime > 77.4)
{
LION.value1 = 179;
LION.yPos = 564;
}
if(vo.currentTime < 78.0 && vo.currentTime > 77.7)
{
LION.value1 = 180;
LION.yPos = 564;
}
if(vo.currentTime < 78.4 && vo.currentTime > 78.0)
{
LION.value1 = 181;
LION.yPos = 564;
}
if(vo.currentTime < 78.7 && vo.currentTime > 78.4)
{
LION.value1 = 182;
LION.yPos = 564;
}
if(vo.currentTime < 79.0 && vo.currentTime > 78.7)
{
LION.value1 = 183;
LION.yPos = 564;
}
if(vo.currentTime < 80.1 && vo.currentTime > 79.0)
{
LION.value1 = 184;
LION.yPos = 564;
}


//PAGE 11 LINE 2


if(vo.currentTime < 80.6 && vo.currentTime > 80.3 )
{
LION.value1 = 186;
LION.yPos = 624;
}
if(vo.currentTime < 80.9 && vo.currentTime > 80.6)
{
LION.value1 = 187;
LION.yPos = 624;
}
if(vo.currentTime < 81.2 && vo.currentTime > 80.9)
{
LION.value1 = 188;
LION.yPos = 624;
}
if(vo.currentTime < 81.5 && vo.currentTime > 81.2)
{
LION.value1 = 189;
LION.yPos = 624;
}
if(vo.currentTime < 81.8 && vo.currentTime > 81.5)
{
LION.value1 = 190;
LION.yPos = 624;
}
if(vo.currentTime < 84.1 && vo.currentTime > 83.8)
{
LION.value1 = 191;
LION.yPos = 624;
}
if(vo.currentTime < 84.4 && vo.currentTime > 84.1)
{
LION.value1 = 191;
LION.yPos = 624;
}
if(vo.currentTime < 84.7 && vo.currentTime > 84.4)
{
LION.value1 = 192;
LION.yPos = 624;
}
if(vo.currentTime < 85.0 && vo.currentTime > 84.7)
{
LION.value1 = 193;
LION.yPos = 624;
}
if(vo.currentTime < 85.3 && vo.currentTime > 85.0)
{
LION.value1 = 194;
LION.yPos = 624;
}

if(vo.currentTime < 85.9 && vo.currentTime > 85.7)
{
LION.paused = true;
}


if(LION.currentPage === 13 && LION.narratorOn === true && LION.paused === false)
{
vo.play();
}


//PAGE 12 LINE 1

if(vo.currentTime < 88.0 && vo.currentTime > 87.1)
{
LION.value1 = 198;
LION.yPos = 564;
}
if(vo.currentTime < 88.3 && vo.currentTime > 88.0)
{
LION.value1 = 199;
LION.yPos = 564;
}
if(vo.currentTime < 88.6 && vo.currentTime > 88.3)
{
LION.value1 = 200;
LION.yPos = 564;
}
if(vo.currentTime < 88.9 && vo.currentTime > 88.6)
{
LION.value1 = 201;
LION.yPos = 564;
}
if(vo.currentTime < 89.3 && vo.currentTime > 88.9)
{
LION.value1 = 202;
LION.yPos = 564;
}
if(vo.currentTime < 89.8 && vo.currentTime > 89.3)
{
LION.value1 = 203;
LION.yPos = 564;
}
if(vo.currentTime < 90.1 && vo.currentTime > 89.8)
{
LION.value1 = 204;
LION.yPos = 564;
}
if(vo.currentTime < 90.6 && vo.currentTime > 90.1)
{
LION.value1 = 205;
LION.yPos = 564;
}
if(vo.currentTime < 90.9 && vo.currentTime > 90.6)
{
LION.value1 = 206;
LION.yPos = 564;
}
if(vo.currentTime < 91.2 && vo.currentTime > 90.9)
{
LION.value1 = 207;
LION.yPos = 564;
}
if(vo.currentTime < 91.5 && vo.currentTime > 91.2)
{
LION.value1 = 208;
LION.yPos = 564;
}
if(vo.currentTime < 91.8 && vo.currentTime > 91.5)
{
LION.value1 = 209;
LION.yPos = 564;
}
if(vo.currentTime < 92.1 && vo.currentTime > 91.8)
{
LION.value1 = 210;
LION.yPos = 564;
}


//PAGE 12 LINE 2


if(vo.currentTime < 93.1 && vo.currentTime > 92.5 )
{
LION.value1 = 212;
LION.yPos = 624;
}
if(vo.currentTime < 93.4 && vo.currentTime > 93.1)
{
LION.value1 = 213;
LION.yPos = 624;
}
if(vo.currentTime < 93.7 && vo.currentTime > 93.4)
{
LION.value1 = 214;
LION.yPos = 624;
}
if(vo.currentTime < 94.0 && vo.currentTime > 93.7)
{
LION.value1 = 215;
LION.yPos = 624;
}
if(vo.currentTime < 94.3 && vo.currentTime > 94.0)
{
LION.value1 = 216;
LION.yPos = 624;
}
if(vo.currentTime < 94.6 && vo.currentTime > 94.3)
{
LION.value1 = 217;
LION.yPos = 624;
}
if(vo.currentTime < 94.9 && vo.currentTime > 94.6)
{
LION.value1 = 218;
LION.yPos = 624;
}

if(vo.currentTime < 96.7 && vo.currentTime > 94.9)
{
LION.paused = true;
}


if(LION.currentPage === 14 && LION.narratorOn === true && LION.paused === false)
{
vo.play();
}

//PAGE 13 LINE 1


if(vo.currentTime < 97.1 && vo.currentTime > 96.7)
{
LION.value1 = 220;
LION.yPos = 564;
}
if(vo.currentTime < 97.4 && vo.currentTime > 97.1)
{
LION.value1 = 221;
LION.yPos = 564;
}
if(vo.currentTime < 97.8 && vo.currentTime > 97.4)
{
LION.value1 = 222;
LION.yPos = 564;
}
if(vo.currentTime < 98.2 && vo.currentTime > 97.8)
{
LION.value1 = 223;
LION.yPos = 564;
}
if(vo.currentTime < 98.5 && vo.currentTime > 98.2)
{
LION.value1 = 224;
LION.yPos = 564;
}
if(vo.currentTime < 98.8 && vo.currentTime > 98.5)
{
LION.value1 = 225;
LION.yPos = 564;
}
if(vo.currentTime < 99.1 && vo.currentTime > 98.8)
{
LION.value1 = 226;
LION.yPos = 564;
}
if(vo.currentTime < 100.3 && vo.currentTime > 99.1)
{
LION.value1 = 227;
LION.yPos = 564;
}



//PAGE 13 LINE 2


if(vo.currentTime < 100.6 && vo.currentTime > 100.3)
{
LION.value1 = 230;
LION.yPos = 624;
}
if(vo.currentTime < 100.9 && vo.currentTime > 100.6)
{
LION.value1 = 231;
LION.yPos = 624;
}
if(vo.currentTime < 101.2 && vo.currentTime > 100.9)
{
LION.value1 = 232;
LION.yPos = 624;
}
if(vo.currentTime < 101.6 && vo.currentTime > 101.2)
{
LION.value1 = 233;
LION.yPos = 624;
}
if(vo.currentTime < 101.9 && vo.currentTime > 101.6)
{
LION.value1 = 234;
LION.yPos = 624;
}
if(vo.currentTime < 103.0 && vo.currentTime > 101.9)
{
LION.value1 = 235;
LION.yPos = 624;
}

if(vo.currentTime < 103.3 && vo.currentTime > 103.0)
{
LION.paused = true;
}

if(LION.currentPage === 15 && LION.narratorOn === true && LION.paused === false)
{
vo.play();
}

//PAGE 14 LINE 1



if(vo.currentTime < 106.0 && vo.currentTime > 104.9)
{
LION.value1 = 238;
LION.yPos = 564;
}
if(vo.currentTime < 106.3 && vo.currentTime > 106.0)
{
LION.value1 = 239;
LION.yPos = 564;
}
if(vo.currentTime < 106.6 && vo.currentTime > 106.3)
{
LION.value1 = 240;
LION.yPos = 564;
}
if(vo.currentTime < 106.9 && vo.currentTime > 106.6)
{
LION.value1 = 241;
LION.yPos = 564;
}
if(vo.currentTime < 107.4 && vo.currentTime > 106.9)
{
LION.value1 = 242;
LION.yPos = 564;
}
if(vo.currentTime < 107.7 && vo.currentTime > 107.4)
{
LION.value1 = 243;
LION.yPos = 564;
}
if(vo.currentTime < 108.9 && vo.currentTime > 107.7)
{
LION.value1 = 244;
LION.yPos = 564;
}
if(vo.currentTime < 109.2 && vo.currentTime > 108.9)
{
LION.value1 = 245;
LION.yPos = 564;
}


//PAGE 14 LINE 2


if(vo.currentTime < 109.7 && vo.currentTime > 109.1 )
{
LION.value1 = 248;
LION.yPos = 624;
}
if(vo.currentTime < 110.0 && vo.currentTime > 109.7)
{
LION.value1 = 249;
LION.yPos = 624;
}
if(vo.currentTime < 110.7 && vo.currentTime > 110.0)
{
LION.value1 = 250;
LION.yPos = 624;
}
if(vo.currentTime < 111.2 && vo.currentTime > 110.7)
{
LION.value1 = 251;
LION.yPos = 624;
}
if(vo.currentTime < 111.7 && vo.currentTime > 111.2)
{
LION.value1 = 252;
LION.yPos = 624;
}
if(vo.currentTime < 112.0 && vo.currentTime > 111.7)
{
LION.value1 = 253;
LION.yPos = 624;
}

if(vo.currentTime < 113.4 && vo.currentTime > 112.9)
{
LION.paused = true;
}

if(LION.currentPage === 16 && LION.narratorOn === true && LION.paused === false)
{
vo.play();
}

//PAGE 15 LINE 1


if(vo.currentTime < 114.7 && vo.currentTime > 113.8)
{
LION.value1 = 255;
LION.yPos = 564;
}
if(vo.currentTime < 115.0 && vo.currentTime > 114.7)
{
LION.value1 = 256;
LION.yPos = 564;
}
if(vo.currentTime < 115.3 && vo.currentTime > 115.0)
{
LION.value1 = 257;
LION.yPos = 564;
}
if(vo.currentTime < 115.6 && vo.currentTime > 115.3)
{
LION.value1 = 258;
LION.yPos = 564;
}
if(vo.currentTime < 116.3 && vo.currentTime > 115.6)
{
LION.value1 = 259;
LION.yPos = 564;
}
if(vo.currentTime < 116.6 && vo.currentTime > 116.3)
{
LION.value1 = 260;
LION.yPos = 564;
}
if(vo.currentTime < 116.9 && vo.currentTime > 116.6)
{
LION.value1 = 261;
LION.yPos = 564;
}
if(vo.currentTime < 117.2 && vo.currentTime > 116.9)
{
LION.value1 = 262;
LION.yPos = 564;
}
if(vo.currentTime < 117.5 && vo.currentTime > 117.2)
{
LION.value1 = 263;
LION.yPos = 564;
}


//PAGE 15 LINE 2



if(vo.currentTime < 117.9 && vo.currentTime > 117.6)
{
LION.value1 = 265;
LION.yPos = 624;
}
if(vo.currentTime < 118.2 && vo.currentTime > 117.9)
{
LION.value1 = 266;
LION.yPos = 624;
}
if(vo.currentTime < 118.5 && vo.currentTime > 118.2)
{
LION.value1 = 267;
LION.yPos = 624;
}
if(vo.currentTime < 118.8 && vo.currentTime > 118.5)
{
LION.value1 = 268;
LION.yPos = 624;
}
if(vo.currentTime < 119.1 && vo.currentTime > 118.8)
{
LION.value1 = 269;
LION.yPos = 624;
}
if(vo.currentTime < 119.4 && vo.currentTime > 119.1)
{
LION.value1 = 270;
LION.yPos = 624;
}
if(vo.currentTime < 119.7 && vo.currentTime > 119.4)
{
LION.value1 = 271;
LION.yPos = 624;
}
if(vo.currentTime < 120.2 && vo.currentTime > 119.7)
{
LION.value1 = 272;
LION.yPos = 624;
}

if(vo.currentTime < 120.6 && vo.currentTime > 120.2)
{
LION.paused = true;
}


if(LION.currentPage === 17 && LION.narratorOn === true && LION.paused === false)
{
vo.play();
}

//PAGE 16 LINE 1

if(vo.currentTime < 121.8 && vo.currentTime > 120.8)
{
LION.value1 = 274;
LION.yPos = 564;
}
if(vo.currentTime < 122.2 && vo.currentTime > 121.8)
{
LION.value1 = 275;
LION.yPos = 564;
}
if(vo.currentTime < 122.9 && vo.currentTime > 122.2)
{
LION.value1 = 276;
LION.yPos = 564;
}
if(vo.currentTime < 123.3 && vo.currentTime > 122.9)
{
LION.value1 = 277;
LION.yPos = 564;
}
if(vo.currentTime < 123.8 && vo.currentTime > 123.3)
{
LION.value1 = 278;
LION.yPos = 564;
}
if(vo.currentTime < 124.1 && vo.currentTime > 123.8)
{
LION.value1 = 279;
LION.yPos = 564;
}
if(vo.currentTime < 124.4 && vo.currentTime > 124.1)
{
LION.value1 = 280;
LION.yPos = 564;
}
if(vo.currentTime < 124.7 && vo.currentTime > 124.4)
{
LION.value1 = 281;
LION.yPos = 564;
}
if(vo.currentTime < 125.4 && vo.currentTime > 124.7)
{
LION.value1 = 282;
LION.yPos = 564;
}


//PAGE 16 LINE 2


if(vo.currentTime < 127.0 && vo.currentTime > 125.4)
{
LION.value1 = 285;
LION.yPos = 624;
}
if(vo.currentTime < 127.3 && vo.currentTime > 127.0)
{
LION.value1 = 286;
LION.yPos = 624;
}
if(vo.currentTime < 127.6 && vo.currentTime > 127.3)
{
LION.value1 = 287;
LION.yPos = 624;
}
if(vo.currentTime < 127.9 && vo.currentTime > 127.6)
{
LION.value1 = 288;
LION.yPos = 624;
}
if(vo.currentTime < 128.2 && vo.currentTime > 127.9)
{
LION.value1 = 289;
LION.yPos = 624;
}

if(vo.currentTime < 129.3 && vo.currentTime > 129.2)
{
LION.paused = true;
}


if(LION.currentPage === 18 && LION.narratorOn === true && LION.paused === false)
{
vo.play();
}

//PAGE 17 LINE 1



if(vo.currentTime < 130.7 && vo.currentTime > 130.1)
{
LION.value1 = 291;
LION.yPos = 564;
}
if(vo.currentTime < 131.4 && vo.currentTime > 130.7)
{
LION.value1 = 292;
LION.yPos = 564;
}
if(vo.currentTime < 131.7 && vo.currentTime > 131.4)
{
LION.value1 = 293;
LION.yPos = 564;
}
if(vo.currentTime < 132.3 && vo.currentTime > 131.7)
{
LION.value1 = 294;
LION.yPos = 564;
}
if(vo.currentTime < 132.7 && vo.currentTime > 132.3)
{
LION.value1 = 295;
LION.yPos = 564;
}
if(vo.currentTime < 133.0 && vo.currentTime > 132.7)
{
LION.value1 = 296;
LION.yPos = 564;
}
if(vo.currentTime < 133.3 && vo.currentTime > 133.0)
{
LION.value1 = 297;
LION.yPos = 564;
}
if(vo.currentTime < 133.6 && vo.currentTime > 133.3)
{
LION.value1 = 298;
LION.yPos = 564;
}
if(vo.currentTime < 133.9 && vo.currentTime > 133.6)
{
LION.value1 = 299;
LION.yPos = 564;
}


//PAGE 17 LINE 2


if(vo.currentTime < 135.5 && vo.currentTime > 133.8)
{
LION.value1 = 301;
LION.yPos = 624;
}
if(vo.currentTime < 135.9 && vo.currentTime > 135.5)
{
LION.value1 = 302;
LION.yPos = 624;
}
if(vo.currentTime < 136.4 && vo.currentTime > 135.9)
{
LION.value1 = 303;
LION.yPos = 624;
}

if(vo.currentTime < 138.0 && vo.currentTime > 137.7)
{
LION.paused = true;
}

if(LION.currentPage === 19 && LION.narratorOn === true && LION.paused === false)
{
vo.play();
}

//PAGE 18 LINE 1


if(vo.currentTime < 139.7 && vo.currentTime > 138.4)
{
LION.value1 = 306;
LION.yPos = 564;
}
if(vo.currentTime < 140.0 && vo.currentTime > 139.7)
{
LION.value1 = 307;
LION.yPos = 564;
}
if(vo.currentTime < 140.4 && vo.currentTime > 140.0)
{
LION.value1 = 308;
LION.yPos = 564;
}
if(vo.currentTime < 140.8 && vo.currentTime > 140.4)
{
LION.value1 = 309;
LION.yPos = 564;
}
if(vo.currentTime < 141.3 && vo.currentTime > 140.8)
{
LION.value1 = 310;
LION.yPos = 564;
}
if(vo.currentTime < 141.6 && vo.currentTime > 141.3)
{
LION.value1 = 311;
LION.yPos = 564;
}
if(vo.currentTime < 141.9 && vo.currentTime > 141.6)
{
LION.value1 = 312;
LION.yPos = 564;
}


//PAGE 18 LINE 2


if(vo.currentTime < 142.6 && vo.currentTime > 142.2)
{
LION.value1 = 314;
LION.yPos = 624;
}
if(vo.currentTime < 142.9 && vo.currentTime > 142.6)
{
LION.value1 = 315;
LION.yPos = 624;
}
if(vo.currentTime < 143.2 && vo.currentTime > 142.9)
{
LION.value1 = 316;
LION.yPos = 624;
}
if(vo.currentTime < 143.5 && vo.currentTime > 143.2)
{
LION.value1 = 317;
LION.yPos = 624;
}
if(vo.currentTime < 143.8 && vo.currentTime > 143.5)
{
LION.value1 = 318;
LION.yPos = 624;
}
if(vo.currentTime < 144.1 && vo.currentTime > 143.8)
{
LION.value1 = 319;
LION.yPos = 624;
}

if(vo.currentTime < 145.1 && vo.currentTime > 144.8)
{
LION.paused = true;
}

if(LION.currentPage === 20 && LION.narratorOn === true && LION.paused === false)
{
vo.play();
}

//PAGE 19 LINE 1


if(vo.currentTime < 146.1 && vo.currentTime > 145.1)
{
LION.value1 = 321;
LION.yPos = 564;
}
if(vo.currentTime < 146.4 && vo.currentTime > 146.1)
{
LION.value1 = 322;
LION.yPos = 564;
}
if(vo.currentTime < 146.7 && vo.currentTime > 146.4)
{
LION.value1 = 323;
LION.yPos = 564;
}
if(vo.currentTime < 147.3 && vo.currentTime > 146.7)
{
LION.value1 = 324;
LION.yPos = 564;
}
if(vo.currentTime < 148.5 && vo.currentTime > 147.3)
{
LION.value1 = 325;
LION.yPos = 564;
}
if(vo.currentTime < 149.5 && vo.currentTime > 148.5)
{
LION.value1 = 326;
LION.yPos = 564;
}
if(vo.currentTime < 150.1 && vo.currentTime > 149.5)
{
LION.value1 = 327;
LION.yPos = 564;
}

//PAGE 19 LINE 2


if(vo.currentTime < 150.8 && vo.currentTime > 150.1)
{
LION.value1 = 329;
LION.yPos = 624;
}
if(vo.currentTime < 151.2 && vo.currentTime > 150.8)
{
LION.value1 = 330;
LION.yPos = 624;
}
if(vo.currentTime < 151.7 && vo.currentTime > 151.2)
{
LION.value1 = 331;
LION.yPos = 624;
}
if(vo.currentTime < 152.0 && vo.currentTime > 151.7)
{
LION.value1 = 332;
LION.yPos = 624;
}
if(vo.currentTime < 152.3 && vo.currentTime > 152.0)
{
LION.value1 = 333;
LION.yPos = 624;
}
if(vo.currentTime < 152.7 && vo.currentTime > 152.3)
{
LION.value1 = 334;
LION.yPos = 624;
}
if(vo.currentTime < 155.0 && vo.currentTime > 152.7)
{
LION.value1 = 335;
LION.yPos = 624;
}
*/

if(vo.currentTime > 155)
{
LION.paused = true;
}


}