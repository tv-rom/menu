

let Hfont;
let H2font;
let font;
let pfont;




function preload() {
  // Ensure the .ttf or .otf font stored in the assets directory
  // is loaded before setup() and draw() are called
  Hfont = loadFont('f1.otf');
  H2font = loadFont('f2.otf');
  font = loadFont('f3.otf');
  pfont = loadFont('f4.otf');
}

    var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1A4Usq7AdXVVhw70-BBc4zg1VaUtqsIzyWFqR0fUqHmg/edit?usp=sharing';
 	var data = [];

    var BEERS_DRAFT=[];
    var BEERS_CAN=[]; 
    var CIDERS=[];
    var MARGARITAS=[];
    var WINES=[];
    var WINES_CAN=[];
    var SPECIALS=[];

    var BD_PRICE=[]; 
    var BC_PRICE=[]; 
    var C_PRICE=[]; 
    var M_PRICE=[]; 
    var W_PRICE=[]; 
    var WC_PRICE=[]; 
    var S_PRICE=[];

    var page;

    var vid;

    var t;

function setup() {
	//createCanvas(1920, 1080);
	createCanvas(1920, 1080);
  // put setup code here
    Tabletop.init( { key: publicSpreadsheetUrl,
                     callback: showInfo,
                     simpleSheet: true } )
  

  //window.addEventListener('DOMContentLoaded', init)

vid = createVideo("windy.mp4");
vid.loop();

t=0;


}

var s=40;
var b=140;

var line1x=220;
var line1draft=90;
var line1space=b+180;

var line2x=line1x+410;
var line2space=b+180;

var line3x=line1x+870;
var line3space=b+50;
var line3space2=b+250;



function showInfo(stuff, tabletop) {
    //alert('Successfully processed!')
    //console.log(data);
    //data = stuff;
   for (let i = 0; i < 30; i += 1) {
    BEERS_DRAFT[i] = stuff[i].BEERS_DRAFT;
    BEERS_CAN[i] = stuff[i].BEERS_CAN;
    CIDERS[i] = stuff[i].CIDERS;
    MARGARITAS[i] = stuff[i].MARGARITAS;
    WINES[i] = stuff[i].WINES;
    WINES_CAN[i] = stuff[i].WINES_CAN;
    SPECIALS[i] = stuff[i].SPECIALS;

    BD_PRICE[i] = stuff[i].BD_PRICE;
    BC_PRICE[i] = stuff[i].BC_PRICE;
    C_PRICE[i] = stuff[i].C_PRICE;
    M_PRICE[i] = stuff[i].M_PRICE;
    W_PRICE[i] = stuff[i].W_PRICE;
    WC_PRICE[i] = stuff[i].WC_PRICE;
    S_PRICE[i] = stuff[i].S_PRICE;


  }
}


function draw() {
 background(0);
 //image(vid,0,0,1920,1080);
 //fill(0,0,0,60);
 //rect(0,0,2000,2000);

 t+=1;

 if (t>20){t==0;}

 if (t<=10){page=1;}
 if (t>10){page=2;}

 console.log(t);

	if (page==1){

				Htextt("BEERS",line1x,b-10,50);
				H2textt("Draft",line1x,b+s+5,30);

				for (let i=0;i<10;i+=1){
					textt(BEERS_DRAFT[i],line1x+40,b+line1draft+(i*s),30);
				}

				for (let i=0;i<10;i+=1){
					Ptextt(BD_PRICE[i],line1x+30,b+line1draft+(i*s),30);
				}

				H2textt("Canned",line1x,b+line1space,30);

				 for (let i=0;i<10;i+=1){
					textt(BEERS_CAN[i],line1x+40,b+s+line1space+(i*s),30);
				}

				for (let i=0;i<10;i+=1){
					Ptextt(BC_PRICE[i],line1x+30,b+s+line1space+(i*s),30);
				}

				Htextt("CIDERS",line2x,b-10,50);

				  for (let i=0;i<10;i+=1){
					textt(CIDERS[i],line2x+40,b+s+(i*s),30);
				}

				for (let i=0;i<10;i+=1){
					Ptextt(C_PRICE[i],line2x+30,b+s+(i*s),30);
				}

				Htextt("MARGARITAS",line2x,line2space+b-10,50);

				  for (let i=0;i<10;i+=1){
					textt(MARGARITAS[i],line2x+40,line2space+b+s+(i*s),30);
				}

				for (let i=0;i<10;i+=1){
					Ptextt(M_PRICE[i],line2x+30,line2space+b+s+(i*s),30);
				}

				Htextt("WINES",line3x,b-10,50);

				  for (let i=0;i<10;i+=1){
					textt(WINES[i],line3x+40,b+s+(i*s),30);
				}

				for (let i=0;i<10;i+=1){
					Ptextt(W_PRICE[i],line3x+30,b+s+(i*s),30);
				}

				H2textt("Canned",line3x,b+line3space,30)

				for (let i=0;i<10;i+=1){
					textt(WINES_CAN[i],line3x+40,line3space+b+s+(i*s),30);
				}

				for (let i=0;i<10;i+=1){
					Ptextt(WC_PRICE[i],line3x+30,line3space+b+s+(i*s),30);
				}

				Htextt("SPECIALS",line3x,line3space2+b-10,50);

				  for (let i=0;i<10;i+=1){
					textt(SPECIALS[i],line3x+40,line3space2+b+s+(i*s),30);
				}

				for (let i=0;i<10;i+=1){
					Ptextt(S_PRICE[i],line3x+30,line3space2+b+s+(i*s),30);
				}

	}

if (page==2){
Htextt("HELLO",line3x,line3space2+b-10,50);
}



}



function Htextt(string,x,y,size){
textFont(Hfont);
fill(255);
textSize(size);
textAlign(LEFT);
text(string,x,y);

}

function H2textt(string,x,y,size){
textFont(H2font);
fill(255);
textSize(size);
textAlign(LEFT);
text(string,x,y);

}

function textt(string,x,y,size){
textFont(font);
fill(255);
textSize(size);
textAlign(LEFT);
text(string,x,y);

}

function Ptextt(string,x,y,size){
textFont(pfont);
fill(255);
textSize(size);
textAlign(RIGHT);
text(string,x,y);

}




