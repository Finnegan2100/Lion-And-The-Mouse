function movePages() {	
	
if (currentPage > 1 && currentPage < 21 && narratorOn === true && paused === false) {

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