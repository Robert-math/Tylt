let  canvas = document.getElementById('c1');
let ctx = canvas.getContext('2d');
let pi = Math.PI;

let koordinatner = [[50,50],[150,50],[250,50],[350,50],[450,50],
                    [50,150],[150,150],[250,150],[350,150],[450,150],
                    [50,250],[150,250],[250,250],[350,250],[450,250],
                    [50,350],[150,350],[250,350],[350,350],[450,250],
                    [50,450],[150,450],[250,450],[350,450],[450,450]
];


let patneshner = [ [150,50],[250,150],[350,250],[150,450] ];
let klor1 = [150,150];
let klor2 = [350,150];
let klor1ka = true;
let klor2ka = true;

function hamynknumenAjic (masiv1,masiv2){
    if(masiv1[0]+100 == masiv2[0] && masiv1[1] == masiv2[1] ){
        return true;
    }else{
        return false;
    }
}
function hamynknumenDzaxic (masiv1,masiv2){
    if(masiv1[0]-100 == masiv2[0] && masiv1[1] == masiv2[1]){
        return true;
    }else{
        return false;
    }
}
function hamynknumenVerevic (masiv1,masiv2){
    if(masiv1[0] == masiv2[0] && masiv1[1]-100 == masiv2[1]){
        return true;
    }else{
        return false;
    }
}
function hamynknumenNerqevic (masiv1,masiv2){
    if(masiv1[0] == masiv2[0] && masiv1[1]+100 == masiv2[1] ){
        return true;
    }else{
        return false;
    }
}

ctx.fillStyle = "grey";
ctx.fillRect(patneshner[0][0]-50,patneshner[0][1]-50,100,100);
ctx.fillRect(patneshner[1][0]-50,patneshner[1][1]-50,100,100);
ctx.fillRect(patneshner[2][0]-50,patneshner[2][1]-50,100,100);
ctx.fillRect(patneshner[3][0]-50,patneshner[3][1]-50,100,100);
ctx.fillStyle = "blue";
ctx.beginPath();
ctx.arc(250,250,45,0,2*pi);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = "green";
ctx.arc(klor1[0],klor1[1],45,0,2*pi);
ctx.fill();
ctx.beginPath();
ctx.arc(klor2[0],klor2[1],45,0,2*pi);
ctx.fill();

function right(){
   if(klor1ka){ ctx.clearRect(klor1[0]-50,klor1[1]-50,100,100);}
   if(klor2ka){ ctx.clearRect(klor2[0]-50,klor2[1]-50,100,100);}
   if(!klor1ka){
    while(klor2[0]+100<=450 && !hamynknumenAjic(klor2,patneshner[0]) && !hamynknumenAjic(klor2,patneshner[1]) && !hamynknumenAjic(klor2,patneshner[2]) && !hamynknumenAjic(klor2,patneshner[3])){
        klor2[0]+=100;
    }
   }else if(!klor2ka){
    while(klor1[0]+100<=450 && !hamynknumenAjic(klor1,patneshner[0]) && !hamynknumenAjic(klor1,patneshner[1]) && !hamynknumenAjic(klor1,patneshner[2]) && !hamynknumenAjic(klor1,patneshner[3]) ){
        klor1[0]+=100;
    }
   }else if(klor1[0] > klor2[0] ){
    while(klor1[0]+100<=450 && !hamynknumenAjic(klor1,patneshner[0]) && !hamynknumenAjic(klor1,patneshner[1]) && !hamynknumenAjic(klor1,patneshner[2]) && !hamynknumenAjic(klor1,patneshner[3]) ){
        klor1[0]+=100;
    }
    while(klor2[0]+100<=450&& !hamynknumenAjic  (klor2,klor1) && !hamynknumenAjic(klor2,patneshner[0]) && !hamynknumenAjic(klor2,patneshner[1]) && !hamynknumenAjic(klor2,patneshner[2]) && !hamynknumenAjic(klor2,patneshner[3])){
        klor2[0]+=100;
    }
}else if(klor1[0] <= klor2[0] ){
    while(klor2[0]+100<=450 && !hamynknumenAjic(klor2,patneshner[0]) && !hamynknumenAjic(klor2,patneshner[1]) && !hamynknumenAjic(klor2,patneshner[2]) && !hamynknumenAjic(klor2,patneshner[3])){
        klor2[0]+=100;
    }
    while(klor1[0]+100<=450 && !hamynknumenAjic(klor1,klor2) && !hamynknumenAjic(klor1,patneshner[0]) && !hamynknumenAjic(klor1,patneshner[1]) && !hamynknumenAjic(klor1,patneshner[2]) && !hamynknumenAjic(klor1,patneshner[3]) ){
        klor1[0]+=100;
    }
    
}



if (klor1ka){
    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.arc(klor1[0],klor1[1],45,0,2*pi);
    ctx.fill();
}
if(klor2ka){
    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.arc(klor2[0],klor2[1],45,0,2*pi);
    ctx.fill();
}
    if(klor1[0] == 250 && klor1[1] == 250){
        klor1ka = false;
        ctx.fillStyle = "blue";
        ctx.beginPath();
        ctx.arc(250,250,45,0,2*pi);
        ctx.fill();
    }
    if(klor2[0] == 250 && klor2[1] == 250){
        klor2ka = false;
        ctx.fillStyle = "blue";
        ctx.beginPath();
        ctx.arc(250,250,45,0,2*pi);
        ctx.fill();
    }

    
}


function left(){
    if(klor1ka){ ctx.clearRect(klor1[0]-50,klor1[1]-50,100,100);}
   if(klor2ka){ ctx.clearRect(klor2[0]-50,klor2[1]-50,100,100);}
   if(!klor1ka){
    while(klor2[0]-100>=50  && !hamynknumenDzaxic(klor2,patneshner[0]) && !hamynknumenDzaxic(klor2,patneshner[1]) && !hamynknumenDzaxic(klor2,patneshner[2]) && !hamynknumenDzaxic(klor2,patneshner[3])){
        klor2[0]-=100;
    }
   }else if(!klor2ka){
    while(klor1[0]-100>=50  && !hamynknumenDzaxic(klor1,patneshner[0]) && !hamynknumenDzaxic(klor1,patneshner[1]) && !hamynknumenDzaxic(klor1,patneshner[2]) && !hamynknumenDzaxic(klor1,patneshner[3])) {
        klor1[0]-=100;
    }
   }else if(klor1[0]<klor2[0] ){
    while(klor1[0]-100>=50  && !hamynknumenDzaxic(klor1,patneshner[0]) && !hamynknumenDzaxic(klor1,patneshner[1]) && !hamynknumenDzaxic(klor1,patneshner[2]) && !hamynknumenDzaxic(klor1,patneshner[3])) {
        klor1[0]-=100;
    }
    while(klor2[0]-100>=50 && !hamynknumenDzaxic(klor2,klor1) && !hamynknumenDzaxic(klor2,patneshner[0]) && !hamynknumenDzaxic(klor2,patneshner[1]) && !hamynknumenDzaxic(klor2,patneshner[2]) && !hamynknumenDzaxic(klor2,patneshner[3])){
        klor2[0]-=100;
    }
}else if(klor1[0] >= klor2[0] ){
    while(klor2[0]-100>=50  && !hamynknumenDzaxic(klor2,patneshner[0]) && !hamynknumenDzaxic(klor2,patneshner[1]) && !hamynknumenDzaxic(klor2,patneshner[2]) && !hamynknumenDzaxic(klor2,patneshner[3])){
        klor2[0]-=100;
    }
    while(klor1[0]-100>=50 && !hamynknumenDzaxic(klor1,klor2) && !hamynknumenDzaxic(klor1,patneshner[0]) && !hamynknumenDzaxic(klor1,patneshner[1]) && !hamynknumenDzaxic(klor1,patneshner[2]) && !hamynknumenDzaxic(klor1,patneshner[3])) {
        klor1[0]-=100;
    }
}

    if(klor1ka){
    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.arc(klor1[0],klor1[1],45,0,2*pi);
    ctx.fill();
}
if(klor2ka){
    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.arc(klor2[0],klor2[1],45,0,2*pi);
    ctx.fill();
    }
    if(klor1[0] == 250 && klor1[1] == 250){
        klor1ka = false;
        ctx.fillStyle = "blue";
        ctx.beginPath();
        ctx.arc(250,250,45,0,2*pi);
        ctx.fill();
    }
    if(klor2[0] == 250 && klor2[1] == 250){
        klor2ka = false;
        ctx.fillStyle = "blue";
        ctx.beginPath();
        ctx.arc(250,250,45,0,2*pi);
        ctx.fill();
    }

}

function up(){
    if(klor1ka){ ctx.clearRect(klor1[0]-50,klor1[1]-50,100,100);}
   if(klor2ka){ ctx.clearRect(klor2[0]-50,klor2[1]-50,100,100);}
    if(!klor1ka){
        while(klor2[1]-100>=50  && !hamynknumenVerevic(klor2,patneshner[0]) && !hamynknumenVerevic(klor2,patneshner[1]) && !hamynknumenVerevic(klor2,patneshner[2]) && !hamynknumenVerevic(klor2,patneshner[3])){
            klor2[1]-=100;
        }
    }else if(!klor2ka){
        while(klor1[1]-100>=50  && !hamynknumenVerevic(klor1,patneshner[0]) && !hamynknumenVerevic(klor1,patneshner[1]) && !hamynknumenVerevic(klor1,patneshner[2]) && !hamynknumenVerevic(klor1,patneshner[3])) {
            klor1[1]-=100;
        }
    }else if(klor1[1] < klor2[1]){
    while(klor1[1]-100>=50  && !hamynknumenVerevic(klor1,patneshner[0]) && !hamynknumenVerevic(klor1,patneshner[1]) && !hamynknumenVerevic(klor1,patneshner[2]) && !hamynknumenVerevic(klor1,patneshner[3])) {
        klor1[1]-=100;
    }
    while(klor2[1]-100>=50 && !hamynknumenVerevic(klor2,klor1) && !hamynknumenVerevic(klor2,patneshner[0]) && !hamynknumenVerevic(klor2,patneshner[1]) && !hamynknumenVerevic(klor2,patneshner[2]) && !hamynknumenVerevic(klor2,patneshner[3])){
        klor2[1]-=100;
    }
}else if(klor1[1] >= klor2[1] ){
    while(klor2[1]-100>=50  && !hamynknumenVerevic(klor2,patneshner[0]) && !hamynknumenVerevic(klor2,patneshner[1]) && !hamynknumenVerevic(klor2,patneshner[2]) && !hamynknumenVerevic(klor2,patneshner[3])){
        klor2[1]-=100;
    }
    while(klor1[1]-100>=50 && !hamynknumenVerevic(klor1,klor2) && !hamynknumenVerevic(klor1,patneshner[0]) && !hamynknumenVerevic(klor1,patneshner[1]) && !hamynknumenVerevic(klor1,patneshner[2]) && !hamynknumenVerevic(klor1,patneshner[3])) {
        klor1[1]-=100;
    }
}

if (klor1ka){
    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.arc(klor1[0],klor1[1],45,0,2*pi);
    ctx.fill();
}
if(klor2ka){
    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.arc(klor2[0],klor2[1],45,0,2*pi);
    ctx.fill();
}
    if(klor1[0] == 250 && klor1[1] == 250){
        klor1ka = false;
        ctx.fillStyle = "blue";
        ctx.beginPath();
        ctx.arc(250,250,45,0,2*pi);
        ctx.fill();
    }
    if(klor2[0] == 250 && klor2[1] == 250){
        klor2ka = false;
        ctx.fillStyle = "blue";
        ctx.beginPath();
        ctx.arc(250,250,45,0,2*pi);
        ctx.fill();
    }
  

}

function down(){
    if(klor1ka){ ctx.clearRect(klor1[0]-50,klor1[1]-50,100,100);}
   if(klor2ka){ ctx.clearRect(klor2[0]-50,klor2[1]-50,100,100);}
    if(!klor1ka){
        while(klor2[1]+100<=450 && !hamynknumenNerqevic(klor2,patneshner[0]) && !hamynknumenNerqevic(klor2,patneshner[1]) && !hamynknumenNerqevic(klor2,patneshner[2]) && !hamynknumenNerqevic(klor2,patneshner[3])){
            klor2[1]+=100;
        }
    }else if(!klor2ka){
        while(klor1[1]+100<=450  && !hamynknumenNerqevic(klor1,patneshner[0]) && !hamynknumenNerqevic(klor1,patneshner[1]) && !hamynknumenNerqevic(klor1,patneshner[2]) && !hamynknumenNerqevic(klor1,patneshner[3])) {
            klor1[1]+=100;
        } 
    }else if(klor1[1] > klor2[1] ){
    while(klor1[1]+100<=450  && !hamynknumenNerqevic(klor1,patneshner[0]) && !hamynknumenNerqevic(klor1,patneshner[1]) && !hamynknumenNerqevic(klor1,patneshner[2]) && !hamynknumenNerqevic(klor1,patneshner[3])) {
        klor1[1]+=100;
    }
    while(klor2[1]+100<=450 && !hamynknumenNerqevic(klor2,klor1)&& !hamynknumenNerqevic(klor2,patneshner[0]) && !hamynknumenNerqevic(klor2,patneshner[1]) && !hamynknumenNerqevic(klor2,patneshner[2]) && !hamynknumenNerqevic(klor2,patneshner[3])){
        klor2[1]+=100;
    }
}else if(klor1[1]<= klor2[1] ){
    
    while(klor2[1]+100<=450 && !hamynknumenNerqevic(klor2,patneshner[0]) && !hamynknumenNerqevic(klor2,patneshner[1]) && !hamynknumenNerqevic(klor2,patneshner[2]) && !hamynknumenNerqevic(klor2,patneshner[3])){
        klor2[1]+=100;
    }
    while(klor1[1]+100<=450 && !hamynknumenNerqevic(klor1,klor2)  && !hamynknumenNerqevic(klor1,patneshner[0]) && !hamynknumenNerqevic(klor1,patneshner[1]) && !hamynknumenNerqevic(klor1,patneshner[2]) && !hamynknumenNerqevic(klor1,patneshner[3])) {
        klor1[1]+=100;
    }
}



if (klor1ka){
    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.arc(klor1[0],klor1[1],45,0,2*pi);
    ctx.fill();
}
if(klor2ka){
    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.arc(klor2[0],klor2[1],45,0,2*pi);
    ctx.fill();
}
    if(klor1[0] == 250 && klor1[1] == 250){
        klor1ka = false;
        ctx.fillStyle = "blue";
        ctx.beginPath();
        ctx.arc(250,250,45,0,2*pi);
        ctx.fill();
    }
    if(klor2[0] == 250 && klor2[1] == 250){
        klor2ka = false;
        ctx.fillStyle = "blue";
        ctx.beginPath();
        ctx.arc(250,250,45,0,2*pi);
        ctx.fill();
    }
  

}


document.addEventListener('keydown', function (event) {
    if (event.key === 'w') {
     up() ;
    }else if(event.key === 'a') {
      left();
    }else if(event.key === 's') {
       down();
    }else if(event.key === 'd') {
        right();
    }


  });