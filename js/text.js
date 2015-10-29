function renderPageText() {
	
	if(LION.currentPage > 1 && LION.currentPage < 21){
		switch(LION.currentPage) {
		
			case 2:
			LION.context.fillText(sentences[0],45,564);
			LION.context.fillText(sentences[1],45,624);
			break;

			case 3:
			LION.context.fillText(sentences[2],45,564);
			LION.context.fillText(sentences[3],45,624);
			break;

			case 4:
			LION.context.fillText(sentences[4],45,564);
			LION.context.fillText(sentences[5],45,624);
			break;

			case 5:
			LION.context.fillText(sentences[6],45,564);
			LION.context.fillText(sentences[7],45,624);
			break;

			case 6:
			LION.context.fillText(sentences[8],45,564);
			LION.context.fillText(sentences[9],45,624);
			break;

			case 7:
			LION.context.fillText(sentences[10],45,564);
			LION.context.fillText(sentences[11],45,624);
			break;	
		}
	}	
}