function movePages() {	
	
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
	

}

function renderPageText() {
	
	if(currentPage > 1 && currentPage < 21) {


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

	
	
}