



var LION = {

    WIDTH: 1366,  //WIDTH + HEIGHT are only used as values for determining the ratio. CurrentWidth/CurrentHeight are used for the resizing
    HEIGHT:  667, 
    RATIO:  null,
	scale: 1,
    currentWidth:  null,
    currentHeight:  null,
	ua: navigator.userAgent.toLowerCase(),
	vx: 0,
	mouseX: 0,
	mouseY: 0,
	tapX: undefined,	
	tapY: undefined,
	EASING: 0.18,
	mouseDown: false,
	touchDown: false, 
	mouseUp: false, 
	touchUp: false,
	onPressed: false,
	offPressed: false,
	currentPage: 1,
	
	canvas: document.getElementById("canvas"),
	context: this.canvas.getContext("2d"),
	currentState: "loading",  
	narratorOn: false,

	pressedTouch: false,
	
	
	moveLeft: false,
	moveRight: false,
	pressedHome: false,
	pressedRight: false,
	paused: false,
	percentage: 0.01,
	increment: .039,
	mainCalled: false,
	checkingLoads: 0,
	
	value1: 0, 
	yPos: 564,

	
	

    init: function() {
		
		LION.RATIO = LION.WIDTH / LION.HEIGHT;    //SETS THE W/H RATIO (2.04) TO KEEP THE GAME CORRECTLY SIZED 
	},


    resize: function() {
		
		var innerW = window.innerWidth,
			innerH= window.innerHeight,
			c = LION.canvas.style;
	
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


var bigText = "Hoy es un día muy especial en Plaza Sésamo.  ¡Es el cumpleaños de Elmo!  Abelardo, Pancho, Lola, Chip y Gina están  planeando una fiesta sorpresa y cada uno tiene su tarea.  Pancho está a cargo de las decoraciones.  De camino a su casa se encuentra con Elmo.  — Pancho, Pancho ¿Sabes qué día es hoy?  Pancho, un poco nervioso, pretende no entender.  — Hoy es... el día del baño de Elefancio y ¡ya se  me ha hecho tarde! Nos vemos luego, Elmo.  Pancho se va y Elmo queda desconcertado.  — Hoy cumple años Elmo y Pancho no se acordó.  Chip y Lola preparan una invitación para la fiesta  que enviarán por correo electrónico.  Elmo entra de repente.  — Chip, Lola, ¿saben qué día es hoy?  — Hoy es... día de hacer limpieza en el café. Y hay  MUCHO por hacer. ¡Luego nos vemos, Elmo!  Elmo no entiende qué ha pasado.  ¡A todos se les olvidó su cumpleaños!  Abelardo y Gina están horneando el pastel sorpresa.  Elmo entra sin ser visto. “¡Elmo huele un pastel!”   — Ah si, es para… ¡el primo de Gina! Y ya tenemos que irnos.  Gina saca a Elmo de la cocina.  El Café Clic está listo para la fiesta.  — ¡Aquí está el pastel! —canta Abelardo.  — ¡Pues ya está todo listo! Sólo falta... ¿Alguien le  avisó a Elmo? —pregunta Lola alarmada.  Todos se miran con asombro. ¡No pueden creer que  se les hubiese olvidado el invitado de honor!  Sin darse cuenta, Elmo ha entrado al Café Clic.  — Amigos, Elmo los estaba buscando.  ¡Es Elmo! Sin haberlo planeado, todos gritan al tiempo,  “¡SORPRESA! ¡FELÍZ CUMPLEAÑOS!”  — Amigos, ¡se acordaron del cumpleaños de Elmo!  ¡Elmo pensó que lo habían olvidado!  Gina empieza a cantar “Cumpleaños Feliz” y  así comienza ¡la gran fiesta de Elmo!", 
	sentences = bigText.split("  "),
	words = bigText.split(" "),
	assetsToLoad = [],
	widths1 = [],
	pages = [],
	startingPoints1 = [];
