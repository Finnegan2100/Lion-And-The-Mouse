
function checkTimings() {

if (paused === true) {
	vo.pause();
}

//SYNCING PAGE 1

if (pages[1].x < 1366 && pages[1].x > 0 && currentPage === 1 && paused === true) {
	vo.currentTime = 1.85;
}
if (pages[1].x > -1366 && pages[1].x < 0 && currentPage === 3 && paused === true) {
	vo.currentTime = 1.85;
}

//SYNCING PAGE 2

if (pages[1].x < 0 && pages[1].x > -1366 && currentPage === 2 && paused === true) {
	vo.currentTime = 7.65;
}
if (pages[1].x > -2700 && pages[1].x < -1366 && currentPage === 4 && paused === true) {
	vo.currentTime = 7.65;
}

//SYNCING PAGE 3

if (pages[1].x > -2700 && pages[1].x < -1366 && currentPage === 3 && paused === true) {
	vo.currentTime = 16.3;
}
if (pages[1].x > -4133 && pages[1].x < -2700 && currentPage === 5 && paused === true) {
	vo.currentTime = 16.3;
}

//SYNCING PAGE 4

if(pages[1].x > -4133 && pages[1].x < -2700 && currentPage === 4 && paused === true)
{
vo.currentTime = 22.6;
}
if(pages[1].x > -5478 && pages[1].x < -4133 && currentPage === 6 && paused === true)
{
vo.currentTime = 22.6;
}

//SYNCING PAGE 5

if (pages[1].x > -5478 && pages[1].x < -4133 && currentPage === 5 && paused === true) {
	vo.currentTime = 30.4;
}
if (pages[1].x > -6882 && pages[1].x < -5478 && currentPage === 7 && paused === true) {
	vo.currentTime = 30.4;
}

//SYNCING PAGE 6

if (pages[1].x > -6882 && pages[1].x < -5478 && currentPage === 6 && paused === true) {
	vo.currentTime = 38.4;
}
if (pages[1].x > -8228 && pages[1].x < -6882 && currentPage === 8 && paused === true) {
	vo.currentTime = 38.4;
}

//SYNCING PAGE 7

if (pages[1].x > -8228 && pages[1].x < -6882 && currentPage === 7 && paused === true) {
	vo.currentTime = 48.05;
}
if (pages[1].x > -9573 && pages[1].x < -8228 && currentPage === 9 && paused === true) {
	vo.currentTime = 48.05;
}
/*
//SYNCING PAGE 8

if(pages[1].x > -9573 && pages[1].x < -8228 && currentPage === 8 && paused === true)
{
vo.currentTime = 53.3;
}
if(pages[1].x > -10977 && pages[1].x < -9573 && currentPage === 10 && paused === true)
{
vo.currentTime = 53.3;
}

//SYNCING PAGE 9

if(pages[1].x > -10977 && pages[1].x < -9573 && currentPage === 9 && paused === true)
{
vo.currentTime = 59.26;
}
if(pages[1].x > -12323 && pages[1].x < -10977 && currentPage === 11 && paused === true)
{
vo.currentTime = 59.26;
}

//SYNCING PAGE 10

if(pages[1].x > -12323 && pages[1].x < -10977 && currentPage === 10 && paused === true)
{
vo.currentTime = 68.4;
}
if(pages[1].x > -13668 && pages[1].x < -12323 && currentPage === 12 && paused === true)
{
vo.currentTime = 68.4;
}


//SYNCING PAGE 11

if(pages[1].x > -13668 && pages[1].x < -12323 && currentPage === 11 && paused === true)
{
vo.currentTime = 76.4;
}
if(pages[1].x > -15072 && pages[1].x < -13668 && currentPage === 13 && paused === true)
{
vo.currentTime = 76.4;
}

//SYNCING PAGE 12

if(pages[1].x > -15072 && pages[1].x < -13668 && currentPage === 12 && paused === true)
{
vo.currentTime = 87.2;
}
if(pages[1].x > -16418 && pages[1].x < -15072 && currentPage === 14 && paused === true)
{
vo.currentTime = 87.2;
}

//SYNCING PAGE 13

if(pages[1].x > -16418 && pages[1].x < -15072 && currentPage === 13 && paused === true)
{
vo.currentTime = 96.8;
}
if(pages[1].x > -17763 && pages[1].x < -16418 && currentPage === 15 && paused === true)
{
vo.currentTime = 96.8;
}

//SYNCING PAGE 14

if(pages[1].x > -17763 && pages[1].x < -16418 && currentPage === 14 && paused === true)
{
vo.currentTime = 105.1;
}
if(pages[1].x > -19167 && pages[1].x < -17763 && currentPage === 16 && paused === true)
{
vo.currentTime = 105.1;
}

//SYNCING PAGE 15

if(pages[1].x > -19167 && pages[1].x < -17163 && currentPage === 15 && paused === true)
{
vo.currentTime = 114.3;
}
if(pages[1].x > -20513 && pages[1].x < -19167 && currentPage === 17 && paused === true)
{
vo.currentTime = 114.3;
}

//SYNCING PAGE 16

if(pages[1].x > -20513 && pages[1].x < -19167 && currentPage === 16 && paused === true)
{
vo.currentTime = 121.3;
}
if(pages[1].x > -21858 && pages[1].x < -20513 && currentPage === 18 && paused === true)
{
vo.currentTime = 121.3;
}

//SYNCING PAGE 17

if(pages[1].x > -21858 && pages[1].x < -20513 && currentPage === 17 && paused === true)
{
vo.currentTime = 130.3;
}
if(pages[1].x > -23262 && pages[1].x < -21858 && currentPage === 19 && paused === true)
{
vo.currentTime = 130.3;
}

//SYNCING PAGE 18

if(pages[1].x > -23262 && pages[1].x < -21858 && currentPage === 18 && paused === true)
{
vo.currentTime = 138.5;
}
if(pages[1].x > -24608 && pages[1].x < -23262 && currentPage === 20 && paused === true)
{
vo.currentTime = 138.5;
}

//SYNCING PAGE 19

if(pages[1].x > -24608 && pages[1].x < -23262 && currentPage === 19 && paused === true)
{
vo.currentTime = 145.2;
}
if(pages[1].x > -26012 && pages[1].x < -24608 && currentPage === 21 && paused === true)
{
vo.currentTime = 145.2;
}
*/

	
if (currentPage === 2 && narratorOn === true && paused === false) {
    vo.play();
}

//PAGE 1 LINE 1

if (vo.currentTime < 2.0 && vo.currentTime > 1.8) {
    value1 = 0;
    yPos = 564;
}
if (vo.currentTime < 2.4 && vo.currentTime > 2.0) {
    value1 = 1;
    yPos = 564;
}
if (vo.currentTime < 2.7 && vo.currentTime > 2.4) {
    value1 = 2;
    yPos = 564;
}
if (vo.currentTime < 3.0 && vo.currentTime > 2.7) {
    value1 = 3;
    yPos = 564;
}
if( vo.currentTime < 3.35 && vo.currentTime > 3.0) {
	value1 = 4;
	yPos = 564;
}
if (vo.currentTime < 3.6 && vo.currentTime > 3.35) {
	value1 = 5;
	yPos = 564;
}
if (vo.currentTime < 3.9 && vo.currentTime > 3.6) {
	value1 = 6;
	yPos = 564;
}
if (vo.currentTime < 4.15 && vo.currentTime > 3.9) {
	value1 = 7;
	yPos = 564;
}
if (vo.currentTime < 4.4 && vo.currentTime > 4.15) {
	value1 = 8;
	yPos = 564;
}

//PAGE 1 LINE 2



if(vo.currentTime < 5.6 && vo.currentTime > 5.3)
{
value1 = 10;
yPos = 624;
}
if(vo.currentTime < 5.9 && vo.currentTime > 5.6)
{
value1 = 11;
yPos = 624;
}
if(vo.currentTime < 6.2 && vo.currentTime > 5.9)
{
value1 = 12;
yPos = 624;
}
if(vo.currentTime < 6.45 && vo.currentTime > 6.2)
{
value1 = 13;
yPos = 624;
}
if(vo.currentTime < 7.2 && vo.currentTime > 6.45)
{
value1 = 14;
yPos = 624;
}

if(vo.currentTime > 7.2 && vo.currentTime < 7.5)
{
paused = true;
}

if(currentPage === 3 && narratorOn === true && paused === false)
{
vo.play();
}


//PAGE 2 LINE 1


if(vo.currentTime < 8.4 && vo.currentTime > 7.6)
{
value1 = 16;
yPos = 564;
}
if(vo.currentTime < 9.0 && vo.currentTime > 8.4)
{
value1 = 17;
yPos = 564;
}
if(vo.currentTime < 9.4 && vo.currentTime > 9.0)
{
value1 = 18;
yPos = 564;
}
if(vo.currentTime < 10.1 && vo.currentTime > 9.4)
{
value1 = 19;
yPos = 564;
}
if(vo.currentTime < 10.3 && vo.currentTime > 10.1)
{
value1 = 20;
yPos = 564;
}
if(vo.currentTime < 10.9 && vo.currentTime > 10.3)
{
value1 = 21;
yPos = 564;
}
if(vo.currentTime < 11.5 && vo.currentTime > 10.9)
{
value1 = 22;
yPos = 564;
}


//PAGE 2 LINE 1


if(vo.currentTime < 8.6 && vo.currentTime > 8.0)
{
value1 = 16;
yPos = 564;
}
if(vo.currentTime < 9.6 && vo.currentTime > 8.6)
{
value1 = 17;
yPos = 564;
}
if(vo.currentTime < 10.0 && vo.currentTime > 9.6)
{
value1 = 18;
yPos = 564;
}
if(vo.currentTime < 10.3 && vo.currentTime > 10.0)
{
value1 = 19;
yPos = 564;
}
if(vo.currentTime < 10.6 && vo.currentTime > 10.3)
{
value1 = 20;
yPos = 564;
}
if(vo.currentTime < 11.2 && vo.currentTime > 10.6)
{
value1 = 21;
yPos = 564;
}
if(vo.currentTime < 11.7 && vo.currentTime > 11.2)
{
value1 = 22;
yPos = 564;
}


//PAGE 2 LINE 2



if(vo.currentTime < 12 && vo.currentTime > 11.5)
{
value1 = 24;
yPos = 624;
}
if(vo.currentTime < 12.3 && vo.currentTime > 12)
{
value1 = 25;
yPos = 624;
}
if(vo.currentTime < 12.7 && vo.currentTime > 12.3)
{
value1 = 26;
yPos = 624;
}
if(vo.currentTime < 13.2 && vo.currentTime > 12.7)
{
value1 = 27;
yPos = 624;
}
if(vo.currentTime < 13.7 && vo.currentTime > 13.2)
{
value1 = 28;
yPos = 624;
}
if(vo.currentTime < 14.0 && vo.currentTime > 13.7)
{
value1 = 29;
yPos = 624;
}
if(vo.currentTime < 14.3 && vo.currentTime > 14.0)
{
value1 = 30;
yPos = 624;
}
if(vo.currentTime < 14.6 && vo.currentTime > 14.3)
{
value1 = 31;
yPos = 624;
}
if(vo.currentTime < 14.9 && vo.currentTime > 14.6)
{
value1 = 32;
yPos = 624;
}
if(vo.currentTime < 15.6 && vo.currentTime > 14.9)
{
value1 = 33;
yPos = 624;
}
if(vo.currentTime > 15.6 && vo.currentTime < 16.0)
{
paused = true;
}

if(currentPage === 4 && narratorOn === true && paused === false)
{
vo.play();
}

//PAGE 3 LINE 1


if(vo.currentTime < 16.9 && vo.currentTime > 16.2)
{
value1 = 35;
yPos = 564;
}
if(vo.currentTime < 17.3 && vo.currentTime > 16.9)
{
value1 = 36;
yPos = 564;
}
if(vo.currentTime < 17.6 && vo.currentTime > 17.3)
{
value1 = 37;
yPos = 564;
}
if(vo.currentTime < 18 && vo.currentTime > 17.6)
{
value1 = 38;
yPos = 564;
}
if(vo.currentTime < 18.3 && vo.currentTime > 18)
{
value1 = 39;
yPos = 564;
}
if(vo.currentTime < 18.6 && vo.currentTime > 18.3)
{
value1 = 40;
yPos = 564;
}
if(vo.currentTime < 18.9 && vo.currentTime > 18.6)
{
value1 = 41;
yPos = 564;
}

//PAGE 3 LINE 2


if(vo.currentTime < 19.4 && vo.currentTime > 19.1)
{
value1 = 43;
yPos = 624;
}
if(vo.currentTime < 19.7 && vo.currentTime > 19.4)
{
value1 = 44;
yPos = 624;
}
if(vo.currentTime < 20 && vo.currentTime > 19.7)
{
value1 = 45;
yPos = 624;
}
if(vo.currentTime < 20.3 && vo.currentTime > 20)
{
value1 = 46;
yPos = 624;
}
if(vo.currentTime < 20.6 && vo.currentTime > 20.3)
{
value1 = 47;
yPos = 624;
}
if(vo.currentTime < 20.9 && vo.currentTime > 20.6)
{
value1 = 48;
yPos = 624;
}
if(vo.currentTime < 21.2 && vo.currentTime > 20.9)
{
value1 = 49;
yPos = 624;
}
if(vo.currentTime < 21.5 && vo.currentTime > 21.2)
{
value1 = 50;
yPos = 624;
}
if(vo.currentTime < 21.8 && vo.currentTime > 21.5)
{
value1 = 51;
yPos = 624;
}

if(vo.currentTime > 21.8 && vo.currentTime < 22.5)
{
paused = true;
}

if(currentPage === 5 && narratorOn === true && paused === false)
{
vo.play();
}

//PAGE 4 LINE 1


if(vo.currentTime < 23.1 && vo.currentTime > 22.5)
{
value1 = 54;
yPos = 564;
}

if(vo.currentTime < 23.6 && vo.currentTime > 23.1)
{
value1 = 55;
yPos = 564;
}
if(vo.currentTime < 24.4 && vo.currentTime > 23.6)
{
value1 = 56;
yPos = 564;
}
if(vo.currentTime < 24.7 && vo.currentTime > 24.4)
{
value1 = 57;
yPos = 564;
}
if(vo.currentTime < 25.0 && vo.currentTime > 24.7)
{
value1 = 58;
yPos = 564;
}
if(vo.currentTime < 25.3 && vo.currentTime > 25.0)
{
value1 = 59;
yPos = 564;
}
if(vo.currentTime < 25.6 && vo.currentTime > 25.3)
{
value1 = 60;
yPos = 564;
}


//PAGE 4 LINE 2


if(vo.currentTime < 26.6 && vo.currentTime > 25.6 )
{
value1 = 62;
yPos = 624;
}
if(vo.currentTime < 26.9 && vo.currentTime > 26.6)
{
value1 = 63;
yPos = 624;
}
if(vo.currentTime < 27.2 && vo.currentTime > 26.9)
{
value1 = 64;
yPos = 624;
}
if(vo.currentTime < 27.8 && vo.currentTime > 27.2)
{
value1 = 65;
yPos = 624;
}
if(vo.currentTime < 28.2 && vo.currentTime > 27.8)
{
value1 = 66;
yPos = 624;
}
if(vo.currentTime < 28.5 && vo.currentTime > 28.2)
{
value1 = 67;
yPos = 624;
}
if(vo.currentTime < 29.8 && vo.currentTime > 28.5)
{
value1 = 68;
yPos = 624;
}

if(vo.currentTime > 29.8 && vo.currentTime < 30.3)
{
paused = true;
}


if(currentPage === 6 && narratorOn === true && paused === false)
{
vo.play();
}

//PAGE 5 LINE 1

if(vo.currentTime < 30.6 && vo.currentTime > 30.3)
{
value1 = 71;
yPos = 564;
}
if(vo.currentTime < 31.6 && vo.currentTime > 30.6)
{
value1 = 72;
yPos = 564;
}
if(vo.currentTime < 32.2 && vo.currentTime > 31.6)
{
value1 = 73;
yPos = 564;
}
if(vo.currentTime < 32.5 && vo.currentTime > 32.2)
{
value1 = 74;
yPos = 564;
}
if(vo.currentTime < 32.8 && vo.currentTime > 32.5)
{
value1 = 75;
yPos = 564;
}
if(vo.currentTime < 33.1 && vo.currentTime > 32.8)
{
value1 = 76;
yPos = 564;
}
if(vo.currentTime < 33.4 && vo.currentTime > 33.1)
{
value1 = 77;
yPos = 564;
}
if(vo.currentTime < 34.0 && vo.currentTime > 33.4)
{
value1 = 78;
yPos = 564;
}
if(vo.currentTime < 34.3 && vo.currentTime > 34.0)
{
value1 = 79;
yPos = 564;
}
if(vo.currentTime < 34.6 && vo.currentTime > 34.3)
{
value1 = 80;
yPos = 564;
}
if(vo.currentTime < 34.9 && vo.currentTime > 34.6)
{
value1 = 81;
yPos = 564;
}


//PAGE 5 LINE 2


if(vo.currentTime < 35.2 && vo.currentTime > 34.9)
{
value1 = 83;
yPos = 624;
}
if(vo.currentTime < 35.5 && vo.currentTime > 35.2)
{
value1 = 84;
yPos = 624;
}
if(vo.currentTime < 35.8 && vo.currentTime > 35.5)
{
value1 = 85;
yPos = 624;
}
if(vo.currentTime < 36.1 && vo.currentTime > 35.8)
{
value1 = 86;
yPos = 624;
}
if(vo.currentTime < 36.4 && vo.currentTime > 36.1)
{
value1 = 87;
yPos = 624;
}
if(vo.currentTime < 36.7 && vo.currentTime > 36.4)
{
value1 = 88;
yPos = 624;
}
if(vo.currentTime < 37.0 && vo.currentTime > 36.7)
{
value1 = 89;
yPos = 624;
}
if(vo.currentTime < 37.3 && vo.currentTime > 37.0)
{
value1 = 90;
yPos = 624;
}

if(vo.currentTime < 38.0 && vo.currentTime > 37.3)
{
paused = true;
}

if(currentPage === 7 && narratorOn === true && paused === false)
{
vo.play();
}


//PAGE 6 LINE 1

if(vo.currentTime < 38.9 && vo.currentTime > 38.0)
{
value1 = 92;
yPos = 564;
}
if(vo.currentTime < 39.2 && vo.currentTime > 38.9)
{
value1 = 93;
yPos = 564;
}
if(vo.currentTime < 39.6 && vo.currentTime > 39.2)
{
value1 = 94;
yPos = 564;
}
if(vo.currentTime < 39.9 && vo.currentTime > 39.6)
{
value1 = 95;
yPos = 564;
}
if(vo.currentTime < 40.2 && vo.currentTime > 39.9)
{
value1 = 96;
yPos = 564;
}
if(vo.currentTime < 40.6 && vo.currentTime > 40.2)
{
value1 = 97;
yPos = 564;
}
if(vo.currentTime < 41.8 && vo.currentTime > 40.6)
{
value1 = 98;
yPos = 564;
}



//PAGE 6 LINE 2


if(vo.currentTime < 42.8 && vo.currentTime > 42.4)
{
value1 = 101;
yPos = 624;
}
if(vo.currentTime < 43.1 && vo.currentTime > 42.8)
{
value1 = 102;
yPos = 624;
}
if(vo.currentTime < 43.4 && vo.currentTime > 43.1)
{
value1 = 103;
yPos = 624;
}
if(vo.currentTime < 44.0 && vo.currentTime > 43.4)
{
value1 = 104;
yPos = 624;
}
if(vo.currentTime < 44.5 && vo.currentTime > 44.0)
{
value1 = 105;
yPos = 624;
}
if(vo.currentTime < 44.8 && vo.currentTime > 44.5)
{
value1 = 106;
yPos = 624;
}
if(vo.currentTime < 45.1 && vo.currentTime > 44.8)
{
value1 = 107;
yPos = 624;
}
if(vo.currentTime < 45.4 && vo.currentTime > 45.1)
{
value1 = 108;
yPos = 624;
}
if(vo.currentTime < 45.7 && vo.currentTime > 45.4)
{
value1 = 109;
yPos = 624;
}

if(vo.currentTime < 46.8 && vo.currentTime > 46.0)
{
paused = true;
}

if(currentPage === 8 && narratorOn === true && paused === false)
{
vo.play();
}


//PAGE 7 LINE 1

if(vo.currentTime < 48.4 && vo.currentTime > 47.4)
{
value1 = 111;
yPos = 564;
}
if(vo.currentTime < 48.7 && vo.currentTime > 48.4)
{
value1 = 112;
yPos = 564;
}
if(vo.currentTime < 49.0 && vo.currentTime > 48.7)
{
value1 = 113;
yPos = 564;
}
if(vo.currentTime < 49.3 && vo.currentTime > 49.0)
{
value1 = 114;
yPos = 564;
}
if(vo.currentTime < 49.6 && vo.currentTime > 49.3)
{
value1 = 115;
yPos = 564;
}
if(vo.currentTime < 50.0 && vo.currentTime > 49.6)
{
value1 = 116;
yPos = 564;
}
if(vo.currentTime < 50.3 && vo.currentTime > 50.0)
{
value1 = 117;
yPos = 564;
}
if(vo.currentTime < 50.5 && vo.currentTime > 50.3)
{
value1 = 118;
yPos = 564;
}
if(vo.currentTime < 50.8 && vo.currentTime > 50.5)
{
value1 = 119;
yPos = 564;
}


//PAGE 7 LINE 2


if(vo.currentTime < 51.3 && vo.currentTime > 51)
{
value1 = 121;
yPos = 624;
}
if(vo.currentTime < 51.7 && vo.currentTime > 51.3)
{
value1 = 122;
yPos = 624;
}
if(vo.currentTime < 52.0 && vo.currentTime > 51.7)
{
value1 = 123;
yPos = 624;
}
if(vo.currentTime < 52.3 && vo.currentTime > 52.0)
{
value1 = 124;
yPos = 624;
}
if(vo.currentTime < 52.6 && vo.currentTime > 52.3)
{
value1 = 125;
yPos = 624;
}
if(vo.currentTime < 53.2 && vo.currentTime > 53.0)
{
paused = true;
}


if(currentPage === 9 && narratorOn === true && paused === false)
{
vo.play();
}


//PAGE 8 LINE 1

if(vo.currentTime < 53.7 && vo.currentTime > 53.2)
{
value1 = 127;
yPos = 564;
}
if(vo.currentTime < 54.0 && vo.currentTime > 53.7)
{
value1 = 128;
yPos = 564;
}
if(vo.currentTime < 54.3 && vo.currentTime > 54.0)
{
value1 = 129;
yPos = 564;
}
if(vo.currentTime < 54.6 && vo.currentTime > 54.3)
{
value1 = 130;
yPos = 564;
}



//PAGE 8 LINE 2


if(vo.currentTime < 56.4 && vo.currentTime > 55.7 )
{
value1 = 133;
yPos = 624;
}
if(vo.currentTime < 57.0 && vo.currentTime > 56.4)
{
value1 = 134;
yPos = 624;
}
if(vo.currentTime < 57.4 && vo.currentTime > 57.0)
{
value1 = 135;
yPos = 624;
}
if(vo.currentTime < 57.7 && vo.currentTime > 57.4)
{
value1 = 136;
yPos = 624;
}
if(vo.currentTime < 58.0 && vo.currentTime > 57.7)
{
value1 = 137;
yPos = 624;
}
if(vo.currentTime < 58.3 && vo.currentTime > 58.0)
{
value1 = 138;
yPos = 624;
}
if(vo.currentTime < 58.4 && vo.currentTime > 58.3)
{
value1 = 139;
yPos = 624;
}

if(vo.currentTime < 58.9 && vo.currentTime > 58.4)
{
paused = true;
}


if(currentPage === 10 && narratorOn === true && paused === false)
{
vo.play();
}

/*

//PAGE 9 LINE 1

if(vo.currentTime < 60.6 && vo.currentTime > 59.0)
{
value1 = 142;
yPos = 564;
}
if(vo.currentTime < 61.2 && vo.currentTime > 60.6)
{
value1 = 143;
yPos = 564;
}
if(vo.currentTime < 61.7 && vo.currentTime > 61.2)
{
value1 = 144;
yPos = 564;
}
if(vo.currentTime < 62.0 && vo.currentTime > 61.7)
{
value1 = 145;
yPos = 564;
}
if(vo.currentTime < 62.3 && vo.currentTime > 62.0)
{
value1 = 146;
yPos = 564;
}
if(vo.currentTime < 62.6 && vo.currentTime > 62.3)
{
value1 = 147;
yPos = 564;
}
if(vo.currentTime < 62.9 && vo.currentTime > 62.6)
{
value1 = 148;
yPos = 564;
}
if(vo.currentTime < 63.2 && vo.currentTime > 62.9)
{
value1 = 149;
yPos = 564;
}

if(vo.currentTime < 63.5 && vo.currentTime > 63.2)
{
value1 = 150;
yPos = 564;
}
if(vo.currentTime < 63.8 && vo.currentTime > 63.5)
{
value1 = 151;
yPos = 564;
}
if(vo.currentTime < 64.1 && vo.currentTime > 63.8)
{
value1 = 152;
yPos = 564;
}

//PAGE 9 LINE 2


if(vo.currentTime < 64.4 && vo.currentTime > 64.1)
{
value1 = 154;
yPos = 624;
}
if(vo.currentTime < 64.7 && vo.currentTime > 64.4)
{
value1 = 155;
yPos = 624;
}
if(vo.currentTime < 65.0 && vo.currentTime > 64.7)
{
value1 = 156;
yPos = 624;
}
if(vo.currentTime < 65.3 && vo.currentTime > 65.0)
{
value1 = 157;
yPos = 624;
}
if(vo.currentTime < 65.6 && vo.currentTime > 65.3)
{
value1 = 158;
yPos = 624;
}
if(vo.currentTime < 65.9 && vo.currentTime > 65.6)
{
value1 = 159;
yPos = 624;
}
if(vo.currentTime < 66.3 && vo.currentTime > 65.9)
{
value1 = 160;
yPos = 624;
}

if(vo.currentTime < 67.4 && vo.currentTime > 66.8)
{
paused = true;
}


if(currentPage === 11 && narratorOn === true && paused === false)
{
vo.play();
}


//PAGE 10 LINE 1

if(vo.currentTime < 68.6 && vo.currentTime > 67.8)
{
value1 = 162;
yPos = 564;
}
if(vo.currentTime < 68.9 && vo.currentTime > 68.6)
{
value1 = 163;
yPos = 564;
}
if(vo.currentTime < 69.2 && vo.currentTime > 68.9)
{
value1 = 164;
yPos = 564;
}
if(vo.currentTime < 79.4 && vo.currentTime > 69.2)
{
value1 = 165;
yPos = 564;
}
if(vo.currentTime < 69.7 && vo.currentTime > 69.4)
{
value1 = 166;
yPos = 564;
}
if(vo.currentTime < 70.5 && vo.currentTime > 69.7)
{
value1 = 167;
yPos = 564;
}


//PAGE 10 LINE 2


if(vo.currentTime < 71.2 && vo.currentTime > 70.5)
{
value1 = 169;
yPos = 624;
}
if(vo.currentTime < 71.5 && vo.currentTime > 71.2)
{
value1 = 170;
yPos = 624;
}
if(vo.currentTime < 71.8 && vo.currentTime > 71.5)
{
value1 = 171;
yPos = 624;
}
if(vo.currentTime < 72.1 && vo.currentTime > 71.8)
{
value1 = 172;
yPos = 624;
}
if(vo.currentTime < 72.4 && vo.currentTime > 72.1)
{
value1 = 173;
yPos = 624;
}
if(vo.currentTime < 72.7 && vo.currentTime > 72.4)
{
value1 = 174;
yPos = 624;
}
if(vo.currentTime < 73.0 && vo.currentTime > 72.7)
{
value1 = 175;
yPos = 624;
}

if(vo.currentTime < 73.7 && vo.currentTime > 73.0)
{
paused = true;
}

if(currentPage === 12 && narratorOn === true && paused === false)
{
vo.play();
}


//PAGE 11 LINE 1

if(vo.currentTime < 77.1 && vo.currentTime > 76.3)
{
value1 = 177;
yPos = 564;
}
if(vo.currentTime < 77.4 && vo.currentTime > 77.1)
{
value1 = 178;
yPos = 564;
}
if(vo.currentTime < 77.7 && vo.currentTime > 77.4)
{
value1 = 179;
yPos = 564;
}
if(vo.currentTime < 78.0 && vo.currentTime > 77.7)
{
value1 = 180;
yPos = 564;
}
if(vo.currentTime < 78.4 && vo.currentTime > 78.0)
{
value1 = 181;
yPos = 564;
}
if(vo.currentTime < 78.7 && vo.currentTime > 78.4)
{
value1 = 182;
yPos = 564;
}
if(vo.currentTime < 79.0 && vo.currentTime > 78.7)
{
value1 = 183;
yPos = 564;
}
if(vo.currentTime < 80.1 && vo.currentTime > 79.0)
{
value1 = 184;
yPos = 564;
}


//PAGE 11 LINE 2


if(vo.currentTime < 80.6 && vo.currentTime > 80.3 )
{
value1 = 186;
yPos = 624;
}
if(vo.currentTime < 80.9 && vo.currentTime > 80.6)
{
value1 = 187;
yPos = 624;
}
if(vo.currentTime < 81.2 && vo.currentTime > 80.9)
{
value1 = 188;
yPos = 624;
}
if(vo.currentTime < 81.5 && vo.currentTime > 81.2)
{
value1 = 189;
yPos = 624;
}
if(vo.currentTime < 81.8 && vo.currentTime > 81.5)
{
value1 = 190;
yPos = 624;
}
if(vo.currentTime < 84.1 && vo.currentTime > 83.8)
{
value1 = 191;
yPos = 624;
}
if(vo.currentTime < 84.4 && vo.currentTime > 84.1)
{
value1 = 191;
yPos = 624;
}
if(vo.currentTime < 84.7 && vo.currentTime > 84.4)
{
value1 = 192;
yPos = 624;
}
if(vo.currentTime < 85.0 && vo.currentTime > 84.7)
{
value1 = 193;
yPos = 624;
}
if(vo.currentTime < 85.3 && vo.currentTime > 85.0)
{
value1 = 194;
yPos = 624;
}

if(vo.currentTime < 85.9 && vo.currentTime > 85.7)
{
paused = true;
}


if(currentPage === 13 && narratorOn === true && paused === false)
{
vo.play();
}


//PAGE 12 LINE 1

if(vo.currentTime < 88.0 && vo.currentTime > 87.1)
{
value1 = 198;
yPos = 564;
}
if(vo.currentTime < 88.3 && vo.currentTime > 88.0)
{
value1 = 199;
yPos = 564;
}
if(vo.currentTime < 88.6 && vo.currentTime > 88.3)
{
value1 = 200;
yPos = 564;
}
if(vo.currentTime < 88.9 && vo.currentTime > 88.6)
{
value1 = 201;
yPos = 564;
}
if(vo.currentTime < 89.3 && vo.currentTime > 88.9)
{
value1 = 202;
yPos = 564;
}
if(vo.currentTime < 89.8 && vo.currentTime > 89.3)
{
value1 = 203;
yPos = 564;
}
if(vo.currentTime < 90.1 && vo.currentTime > 89.8)
{
value1 = 204;
yPos = 564;
}
if(vo.currentTime < 90.6 && vo.currentTime > 90.1)
{
value1 = 205;
yPos = 564;
}
if(vo.currentTime < 90.9 && vo.currentTime > 90.6)
{
value1 = 206;
yPos = 564;
}
if(vo.currentTime < 91.2 && vo.currentTime > 90.9)
{
value1 = 207;
yPos = 564;
}
if(vo.currentTime < 91.5 && vo.currentTime > 91.2)
{
value1 = 208;
yPos = 564;
}
if(vo.currentTime < 91.8 && vo.currentTime > 91.5)
{
value1 = 209;
yPos = 564;
}
if(vo.currentTime < 92.1 && vo.currentTime > 91.8)
{
value1 = 210;
yPos = 564;
}


//PAGE 12 LINE 2


if(vo.currentTime < 93.1 && vo.currentTime > 92.5 )
{
value1 = 212;
yPos = 624;
}
if(vo.currentTime < 93.4 && vo.currentTime > 93.1)
{
value1 = 213;
yPos = 624;
}
if(vo.currentTime < 93.7 && vo.currentTime > 93.4)
{
value1 = 214;
yPos = 624;
}
if(vo.currentTime < 94.0 && vo.currentTime > 93.7)
{
value1 = 215;
yPos = 624;
}
if(vo.currentTime < 94.3 && vo.currentTime > 94.0)
{
value1 = 216;
yPos = 624;
}
if(vo.currentTime < 94.6 && vo.currentTime > 94.3)
{
value1 = 217;
yPos = 624;
}
if(vo.currentTime < 94.9 && vo.currentTime > 94.6)
{
value1 = 218;
yPos = 624;
}

if(vo.currentTime < 96.7 && vo.currentTime > 94.9)
{
paused = true;
}


if(currentPage === 14 && narratorOn === true && paused === false)
{
vo.play();
}

//PAGE 13 LINE 1


if(vo.currentTime < 97.1 && vo.currentTime > 96.7)
{
value1 = 220;
yPos = 564;
}
if(vo.currentTime < 97.4 && vo.currentTime > 97.1)
{
value1 = 221;
yPos = 564;
}
if(vo.currentTime < 97.8 && vo.currentTime > 97.4)
{
value1 = 222;
yPos = 564;
}
if(vo.currentTime < 98.2 && vo.currentTime > 97.8)
{
value1 = 223;
yPos = 564;
}
if(vo.currentTime < 98.5 && vo.currentTime > 98.2)
{
value1 = 224;
yPos = 564;
}
if(vo.currentTime < 98.8 && vo.currentTime > 98.5)
{
value1 = 225;
yPos = 564;
}
if(vo.currentTime < 99.1 && vo.currentTime > 98.8)
{
value1 = 226;
yPos = 564;
}
if(vo.currentTime < 100.3 && vo.currentTime > 99.1)
{
value1 = 227;
yPos = 564;
}



//PAGE 13 LINE 2


if(vo.currentTime < 100.6 && vo.currentTime > 100.3)
{
value1 = 230;
yPos = 624;
}
if(vo.currentTime < 100.9 && vo.currentTime > 100.6)
{
value1 = 231;
yPos = 624;
}
if(vo.currentTime < 101.2 && vo.currentTime > 100.9)
{
value1 = 232;
yPos = 624;
}
if(vo.currentTime < 101.6 && vo.currentTime > 101.2)
{
value1 = 233;
yPos = 624;
}
if(vo.currentTime < 101.9 && vo.currentTime > 101.6)
{
value1 = 234;
yPos = 624;
}
if(vo.currentTime < 103.0 && vo.currentTime > 101.9)
{
value1 = 235;
yPos = 624;
}

if(vo.currentTime < 103.3 && vo.currentTime > 103.0)
{
paused = true;
}

if(currentPage === 15 && narratorOn === true && paused === false)
{
vo.play();
}

//PAGE 14 LINE 1



if(vo.currentTime < 106.0 && vo.currentTime > 104.9)
{
value1 = 238;
yPos = 564;
}
if(vo.currentTime < 106.3 && vo.currentTime > 106.0)
{
value1 = 239;
yPos = 564;
}
if(vo.currentTime < 106.6 && vo.currentTime > 106.3)
{
value1 = 240;
yPos = 564;
}
if(vo.currentTime < 106.9 && vo.currentTime > 106.6)
{
value1 = 241;
yPos = 564;
}
if(vo.currentTime < 107.4 && vo.currentTime > 106.9)
{
value1 = 242;
yPos = 564;
}
if(vo.currentTime < 107.7 && vo.currentTime > 107.4)
{
value1 = 243;
yPos = 564;
}
if(vo.currentTime < 108.9 && vo.currentTime > 107.7)
{
value1 = 244;
yPos = 564;
}
if(vo.currentTime < 109.2 && vo.currentTime > 108.9)
{
value1 = 245;
yPos = 564;
}


//PAGE 14 LINE 2


if(vo.currentTime < 109.7 && vo.currentTime > 109.1 )
{
value1 = 248;
yPos = 624;
}
if(vo.currentTime < 110.0 && vo.currentTime > 109.7)
{
value1 = 249;
yPos = 624;
}
if(vo.currentTime < 110.7 && vo.currentTime > 110.0)
{
value1 = 250;
yPos = 624;
}
if(vo.currentTime < 111.2 && vo.currentTime > 110.7)
{
value1 = 251;
yPos = 624;
}
if(vo.currentTime < 111.7 && vo.currentTime > 111.2)
{
value1 = 252;
yPos = 624;
}
if(vo.currentTime < 112.0 && vo.currentTime > 111.7)
{
value1 = 253;
yPos = 624;
}

if(vo.currentTime < 113.4 && vo.currentTime > 112.9)
{
paused = true;
}

if(currentPage === 16 && narratorOn === true && paused === false)
{
vo.play();
}

//PAGE 15 LINE 1


if(vo.currentTime < 114.7 && vo.currentTime > 113.8)
{
value1 = 255;
yPos = 564;
}
if(vo.currentTime < 115.0 && vo.currentTime > 114.7)
{
value1 = 256;
yPos = 564;
}
if(vo.currentTime < 115.3 && vo.currentTime > 115.0)
{
value1 = 257;
yPos = 564;
}
if(vo.currentTime < 115.6 && vo.currentTime > 115.3)
{
value1 = 258;
yPos = 564;
}
if(vo.currentTime < 116.3 && vo.currentTime > 115.6)
{
value1 = 259;
yPos = 564;
}
if(vo.currentTime < 116.6 && vo.currentTime > 116.3)
{
value1 = 260;
yPos = 564;
}
if(vo.currentTime < 116.9 && vo.currentTime > 116.6)
{
value1 = 261;
yPos = 564;
}
if(vo.currentTime < 117.2 && vo.currentTime > 116.9)
{
value1 = 262;
yPos = 564;
}
if(vo.currentTime < 117.5 && vo.currentTime > 117.2)
{
value1 = 263;
yPos = 564;
}


//PAGE 15 LINE 2



if(vo.currentTime < 117.9 && vo.currentTime > 117.6)
{
value1 = 265;
yPos = 624;
}
if(vo.currentTime < 118.2 && vo.currentTime > 117.9)
{
value1 = 266;
yPos = 624;
}
if(vo.currentTime < 118.5 && vo.currentTime > 118.2)
{
value1 = 267;
yPos = 624;
}
if(vo.currentTime < 118.8 && vo.currentTime > 118.5)
{
value1 = 268;
yPos = 624;
}
if(vo.currentTime < 119.1 && vo.currentTime > 118.8)
{
value1 = 269;
yPos = 624;
}
if(vo.currentTime < 119.4 && vo.currentTime > 119.1)
{
value1 = 270;
yPos = 624;
}
if(vo.currentTime < 119.7 && vo.currentTime > 119.4)
{
value1 = 271;
yPos = 624;
}
if(vo.currentTime < 120.2 && vo.currentTime > 119.7)
{
value1 = 272;
yPos = 624;
}

if(vo.currentTime < 120.6 && vo.currentTime > 120.2)
{
paused = true;
}


if(currentPage === 17 && narratorOn === true && paused === false)
{
vo.play();
}

//PAGE 16 LINE 1

if(vo.currentTime < 121.8 && vo.currentTime > 120.8)
{
value1 = 274;
yPos = 564;
}
if(vo.currentTime < 122.2 && vo.currentTime > 121.8)
{
value1 = 275;
yPos = 564;
}
if(vo.currentTime < 122.9 && vo.currentTime > 122.2)
{
value1 = 276;
yPos = 564;
}
if(vo.currentTime < 123.3 && vo.currentTime > 122.9)
{
value1 = 277;
yPos = 564;
}
if(vo.currentTime < 123.8 && vo.currentTime > 123.3)
{
value1 = 278;
yPos = 564;
}
if(vo.currentTime < 124.1 && vo.currentTime > 123.8)
{
value1 = 279;
yPos = 564;
}
if(vo.currentTime < 124.4 && vo.currentTime > 124.1)
{
value1 = 280;
yPos = 564;
}
if(vo.currentTime < 124.7 && vo.currentTime > 124.4)
{
value1 = 281;
yPos = 564;
}
if(vo.currentTime < 125.4 && vo.currentTime > 124.7)
{
value1 = 282;
yPos = 564;
}


//PAGE 16 LINE 2


if(vo.currentTime < 127.0 && vo.currentTime > 125.4)
{
value1 = 285;
yPos = 624;
}
if(vo.currentTime < 127.3 && vo.currentTime > 127.0)
{
value1 = 286;
yPos = 624;
}
if(vo.currentTime < 127.6 && vo.currentTime > 127.3)
{
value1 = 287;
yPos = 624;
}
if(vo.currentTime < 127.9 && vo.currentTime > 127.6)
{
value1 = 288;
yPos = 624;
}
if(vo.currentTime < 128.2 && vo.currentTime > 127.9)
{
value1 = 289;
yPos = 624;
}

if(vo.currentTime < 129.3 && vo.currentTime > 129.2)
{
paused = true;
}


if(currentPage === 18 && narratorOn === true && paused === false)
{
vo.play();
}

//PAGE 17 LINE 1



if(vo.currentTime < 130.7 && vo.currentTime > 130.1)
{
value1 = 291;
yPos = 564;
}
if(vo.currentTime < 131.4 && vo.currentTime > 130.7)
{
value1 = 292;
yPos = 564;
}
if(vo.currentTime < 131.7 && vo.currentTime > 131.4)
{
value1 = 293;
yPos = 564;
}
if(vo.currentTime < 132.3 && vo.currentTime > 131.7)
{
value1 = 294;
yPos = 564;
}
if(vo.currentTime < 132.7 && vo.currentTime > 132.3)
{
value1 = 295;
yPos = 564;
}
if(vo.currentTime < 133.0 && vo.currentTime > 132.7)
{
value1 = 296;
yPos = 564;
}
if(vo.currentTime < 133.3 && vo.currentTime > 133.0)
{
value1 = 297;
yPos = 564;
}
if(vo.currentTime < 133.6 && vo.currentTime > 133.3)
{
value1 = 298;
yPos = 564;
}
if(vo.currentTime < 133.9 && vo.currentTime > 133.6)
{
value1 = 299;
yPos = 564;
}


//PAGE 17 LINE 2


if(vo.currentTime < 135.5 && vo.currentTime > 133.8)
{
value1 = 301;
yPos = 624;
}
if(vo.currentTime < 135.9 && vo.currentTime > 135.5)
{
value1 = 302;
yPos = 624;
}
if(vo.currentTime < 136.4 && vo.currentTime > 135.9)
{
value1 = 303;
yPos = 624;
}

if(vo.currentTime < 138.0 && vo.currentTime > 137.7)
{
paused = true;
}

if(currentPage === 19 && narratorOn === true && paused === false)
{
vo.play();
}

//PAGE 18 LINE 1


if(vo.currentTime < 139.7 && vo.currentTime > 138.4)
{
value1 = 306;
yPos = 564;
}
if(vo.currentTime < 140.0 && vo.currentTime > 139.7)
{
value1 = 307;
yPos = 564;
}
if(vo.currentTime < 140.4 && vo.currentTime > 140.0)
{
value1 = 308;
yPos = 564;
}
if(vo.currentTime < 140.8 && vo.currentTime > 140.4)
{
value1 = 309;
yPos = 564;
}
if(vo.currentTime < 141.3 && vo.currentTime > 140.8)
{
value1 = 310;
yPos = 564;
}
if(vo.currentTime < 141.6 && vo.currentTime > 141.3)
{
value1 = 311;
yPos = 564;
}
if(vo.currentTime < 141.9 && vo.currentTime > 141.6)
{
value1 = 312;
yPos = 564;
}


//PAGE 18 LINE 2


if(vo.currentTime < 142.6 && vo.currentTime > 142.2)
{
value1 = 314;
yPos = 624;
}
if(vo.currentTime < 142.9 && vo.currentTime > 142.6)
{
value1 = 315;
yPos = 624;
}
if(vo.currentTime < 143.2 && vo.currentTime > 142.9)
{
value1 = 316;
yPos = 624;
}
if(vo.currentTime < 143.5 && vo.currentTime > 143.2)
{
value1 = 317;
yPos = 624;
}
if(vo.currentTime < 143.8 && vo.currentTime > 143.5)
{
value1 = 318;
yPos = 624;
}
if(vo.currentTime < 144.1 && vo.currentTime > 143.8)
{
value1 = 319;
yPos = 624;
}

if(vo.currentTime < 145.1 && vo.currentTime > 144.8)
{
paused = true;
}

if(currentPage === 20 && narratorOn === true && paused === false)
{
vo.play();
}

//PAGE 19 LINE 1


if(vo.currentTime < 146.1 && vo.currentTime > 145.1)
{
value1 = 321;
yPos = 564;
}
if(vo.currentTime < 146.4 && vo.currentTime > 146.1)
{
value1 = 322;
yPos = 564;
}
if(vo.currentTime < 146.7 && vo.currentTime > 146.4)
{
value1 = 323;
yPos = 564;
}
if(vo.currentTime < 147.3 && vo.currentTime > 146.7)
{
value1 = 324;
yPos = 564;
}
if(vo.currentTime < 148.5 && vo.currentTime > 147.3)
{
value1 = 325;
yPos = 564;
}
if(vo.currentTime < 149.5 && vo.currentTime > 148.5)
{
value1 = 326;
yPos = 564;
}
if(vo.currentTime < 150.1 && vo.currentTime > 149.5)
{
value1 = 327;
yPos = 564;
}

//PAGE 19 LINE 2


if(vo.currentTime < 150.8 && vo.currentTime > 150.1)
{
value1 = 329;
yPos = 624;
}
if(vo.currentTime < 151.2 && vo.currentTime > 150.8)
{
value1 = 330;
yPos = 624;
}
if(vo.currentTime < 151.7 && vo.currentTime > 151.2)
{
value1 = 331;
yPos = 624;
}
if(vo.currentTime < 152.0 && vo.currentTime > 151.7)
{
value1 = 332;
yPos = 624;
}
if(vo.currentTime < 152.3 && vo.currentTime > 152.0)
{
value1 = 333;
yPos = 624;
}
if(vo.currentTime < 152.7 && vo.currentTime > 152.3)
{
value1 = 334;
yPos = 624;
}
if(vo.currentTime < 155.0 && vo.currentTime > 152.7)
{
value1 = 335;
yPos = 624;
}
*/

if(vo.currentTime > 155)
{
paused = true;
}


}