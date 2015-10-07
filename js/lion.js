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