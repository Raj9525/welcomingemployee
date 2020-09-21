var today=new Date();
var time=today.getHours();
var greet;
//alert(time);

window.onload=greetMsg();


function greetMsg(){

  if (time>=0 || time<12){
      greet="Good Morning";
  }
  else if (time>=12 || time<16){
    greet="Good after Noon";
  }
  else if (time>=16 || time<0){
    greet="Good Evening";
  }


}


//________________----________________________________________________________________________

window.onload = loading;

function loading(){
var prename = localStorage.getItem("uname");
var uName ;
if (typeof(Storage) == "undefined"||prename==null || prename=="null") {
  uName = prompt("Please enter your name", "");
  document.getElementById("uname").innerHTML =
  greet+ " " + uName + "!";
  localStorage.setItem("uname", uName);
  //localStorage.removeItem("uname");
}

else if (typeof(Storage) !== "undefined"||prename !== null) {

  
  document.getElementById("uname").innerHTML =
    greet +" "+ prename + "!";
    //localStorage.removeItem("uname");
}
//localStorage.removeItem("uname");
setTimeout(function() {
  document.getElementById("uname").style.opacity="1";
  document.getElementById("uname").style.left="25px";
  document.getElementById("uname").style.top="35px";

}, 3000);

setTimeout(function() {
  document.getElementById("uname").style.opacity="0";
  document.getElementById("uname").style.left="25px";
  document.getElementById("uname").style.top="-25px";

}, 8000);

}



//---------------------------------------------------------------------------------------------------------------------------------------





/*window.onload=ld();

function ld(){
if(view==0){
  var conf= confirm("complete tutorial?");
  if(conf==ture){
    popLoad();
  }
  else if(conf==false){

  }
}
else if(view==1){

}
}
*/


/*function check(){

  

  if( checkBox.checked == true){
 
 alert("From now this instructions window will not be shown while loading. But you can access this window from (i) button");
 
 localStorage.setItem("show","false");
 var show=localStorage.getItem("show");
 

console.log(show);


}
else{
  alert("From now this instructions window will be shown while loading");
  localStorage.setItem("show","true");
}
}*/

//Checkbox




//---------------------------------------------___________________________________________________________________________________________________________


var s=0;
var r=6;
var x;
var y; 
var w=300;
var h=300;
//var bny=10;
//var bnx=22;
var tp=10;
var rt=4.5;

//__________________________________________________________________________________________



function closebtn(){
pos=7;
document.documentElement.style.setProperty('--trans', 'all 0.5s ease-in-out');
document.getElementById("insbanner").style.transition= "all 0.5s ease-in-out";
ins();
 // (new ins()).clos();
}
//-----------------------------------------------------------------------------------------------------
  function help(){
    pos=1;
    x=0;
    y=0;
    document.documentElement.style.setProperty('--trans', 'all 0.3s ease-in-out');
document.getElementById("insbanner").style.transition= "all 0.3s ease-in-out";
document.documentElement.style.setProperty('--x', x + 'px');
  document.documentElement.style.setProperty('--y', y + 'px');
    
    popLoad();


  }
//--------------------------------------------------------------------------------




  




  //----------------------------------------------------------------------------------------------------Responsive

  function blw1440(){

  }


//----------------------------------------------------------------------------------------------------------------------------------------------
       
//localStorage.setItem("show","true")

var show=localStorage.getItem("show");
var view=localStorage.getItem("view");

if(show=="true"){
  document.getElementById("insbanner").style.transform="translate(0,-220px)";
  popLoad();
  
  
}


//___________________________________________________________________________________________
  




var a=1;
var b=2;

function popLoad(){
  document.getElementById("lef").setAttribute("src", "img/left.svg");
setTimeout(function(){
  r=6;
  
document.documentElement.style.setProperty('--w', w + 'px');
document.documentElement.style.setProperty('--h', h + 'px');
document.documentElement.style.setProperty('--r', r + '%');
document.documentElement.style.setProperty('--tp', tp + '%');
document.documentElement.style.setProperty('--rt', rt + '%');






document.getElementById("big").style.opacity="1";
document.getElementById("big").style.visibility="visible";
document.getElementById("insbanner").style.opacity="1";
document.getElementById("insbanner").style.visibility="visible";
document.getElementById("clck").style.visibility="visible";
document.getElementById("clck").style.opacity="1";
document.getElementById("insbanner").style.transform="scale(1)";
document.getElementById("closebtn").style.opacity="1";



},500
);
//-----------------------------------------------------------------------------------------------------

      


setTimeout(function() {

  x=0;
  y=220;  

  document.documentElement.style.setProperty('--w', w + 'px');
  document.documentElement.style.setProperty('--h', h + 'px');
  document.documentElement.style.setProperty('--r', r + '%');
  document.getElementById("big").style.opacity="1";

  document.documentElement.style.setProperty('--x', x + 'px');
  document.documentElement.style.setProperty('--y', y + 'px');
  document.documentElement.style.setProperty('--trans', 'all 3s ease-in-out');
  document.getElementById("insbanner").style.transform="translate(0,220px)";
document.getElementById("insbanner").style.transition= "all 3s ease-in-out";
document.getElementById("closebtn").style.visibility="visible";

}, 1500);


}

//--------------------------------------------------------------------------------------------------------







//1792*1120
var pos=1;
function mac(){
if (window.screen.width>=1441){

ins();


}
else if (window.screen.width<=1440){
  ins1920();
}
}
//---------------------------
    function ins(){

    if(pos==1){
        pos=2;
        s=1;
        w=300;
        h=150;
        r=50;
        x=0;
        y=450;
        bt=700;
        br=22;

        



        document.documentElement.style.setProperty('--x', x + 'px');
        document.documentElement.style.setProperty('--y', y + 'px');
        
        document.documentElement.style.setProperty('--r', r + '%');
        document.documentElement.style.setProperty('--s', s + 'px');


        document.documentElement.style.setProperty('--trans', 'all 1s ease-in-out');
        document.getElementById("insbanner").style.transform="translate(0,550px)";
      document.getElementById("insbanner").style.transition= "all 1s ease-in-out";
    

  document.getElementById("insbanner").innerHTML="&nbsp;&nbsp;&nbsp;Step 2.Upload a photo&nbsp;&nbsp;&nbsp;";
  document.getElementById("lef").setAttribute("src", "img/leftfill.svg");
  document.getElementById("step123").innerHTML="2/6";
  
    //document.getElementById("big").style.top="-5mm";
    
    localStorage.setItem("view","0");
    
}
else if(pos==2){
    pos=3;
    s=1;
    w=300;
    h=100;
    r=50;
    x=90;
    y=600;
    bt=820;
    br=22;
    document.documentElement.style.setProperty('--x', x + 'px');
    document.documentElement.style.setProperty('--y', y + 'px');
   // document.documentElement.style.setProperty('--w', w + 'px');
   // document.documentElement.style.setProperty('--h', h + 'px');
    document.documentElement.style.setProperty('--r', r + '%');
    document.documentElement.style.setProperty('--s', s + 'px');


    document.documentElement.style.setProperty('--trans', 'all 1s ease-in-out');
    document.getElementById("insbanner").style.transform="translate(0,690px)";
  document.getElementById("insbanner").style.transition= "all 1s ease-in-out";

  

  document.getElementById("insbanner").innerHTML="&nbsp;&nbsp;&nbsp;Step 3. Submit your details&nbsp;&nbsp;&nbsp;";
  document.getElementById("step123").innerHTML="3/6";
    //document.getElementById("big").style.top="-5mm";
}

else if(pos==3){
  pos=4;
  s=1;
  w=600;
  h=600;
  r=5;
  x=-750;
  y=70;
  bt=600;
  br=7;
  document.documentElement.style.setProperty('--x', x + 'px');
  document.documentElement.style.setProperty('--y', y + 'px');
  //document.documentElement.style.setProperty('--w', w + 'px');
  //document.documentElement.style.setProperty('--h', h + 'px');
  document.documentElement.style.setProperty('--r', r + '%');
  document.documentElement.style.setProperty('--s', s + 'px');



  
    document.getElementById("insbanner").style.transform="translate(200px,210px)";
  



  document.getElementById("insbanner").innerHTML="&nbsp;&nbsp;&nbsp;Preview the details&nbsp;&nbsp;&nbsp;";

  document.getElementById("step123").innerHTML="4/6";

  setTimeout(function(){

  
    s=1;
    w=500;
    h=500;
    r=5;
    x=-750;
    y=200;
    bt=680;
    br=26;
    document.documentElement.style.setProperty('--x', x + 'px');
    document.documentElement.style.setProperty('--y', y + 'px');
    //document.documentElement.style.setProperty('--w', w + 'px');
    //document.documentElement.style.setProperty('--h', h + 'px');
    document.documentElement.style.setProperty('--r', r + '%');
  
  
    
  


  document.documentElement.style.setProperty('--trans', 'all 1s ease-in-out');
    document.getElementById("insbanner").style.transform="translate(200px,190px)";
  document.getElementById("insbanner").style.transition= "all 1s ease-in-out";
    
  
  
    },1000)

  setTimeout(function(){

  
  s=1;
  w=500;
  h=500;
  r=5;
  x=-1070;
  y=300;
  
  document.documentElement.style.setProperty('--x', x + 'px');
  document.documentElement.style.setProperty('--y', y + 'px');
  //document.documentElement.style.setProperty('--w', w + 'px');
  //document.documentElement.style.setProperty('--h', h + 'px');
  document.documentElement.style.setProperty('--r', r + '%');
  document.documentElement.style.setProperty('--s', s + 'px');




  document.getElementById("insbanner").innerHTML="&nbsp;&nbsp;&nbsp;Step 4. Drag/adjust the photo&nbsp;&nbsp;&nbsp;";
  document.getElementById("insbanner").style.transform="translate(-160px,210px)";



  },4000)

  setTimeout(function(){

  
    s=1;
    w=500;
    h=500;
    r=50;
    x=-1070;
    y=250;
    bt=680;
    br=26;
    document.documentElement.style.setProperty('--x', x + 'px');
    document.documentElement.style.setProperty('--y', y + 'px');
    //document.documentElement.style.setProperty('--w', w + 'px');
    //document.documentElement.style.setProperty('--h', h + 'px');
    document.documentElement.style.setProperty('--r', r + '%');
  
  
    
  


  document.documentElement.style.setProperty('--trans', 'all 1s ease-in-out');
  document.getElementById("insbanner").style.transform="translate(-160px,230px)";
  document.getElementById("insbanner").style.transition= "all 1s ease-in-out";
    
  
  
    },5000)
  //document.getElementById("big").style.top="-5mm";
}

else if(pos==4){
  pos=5;
  s=1;
  w=350;
  h=350;
  r=50;
  x=-1070;
  y=80;
  bt=470;
  br=29;
  document.documentElement.style.setProperty('--x', x + 'px');
  document.documentElement.style.setProperty('--y', y + 'px');
  //document.documentElement.style.setProperty('--w', w + 'px');
  //document.documentElement.style.setProperty('--h', h + 'px');
  document.documentElement.style.setProperty('--r', r + '%');
  document.documentElement.style.setProperty('--s', s + 'px');


document.getElementById("insbanner").style.fontSize="26px";
document.getElementById("insbanner").style.transform="translate(-160px,320px)";
  document.getElementById("insbanner").innerHTML="&nbsp;&nbsp;&nbsp;The photo must have 18mm space above&nbsp;&nbsp;&nbsp;";

  document.getElementById("step123").innerHTML="5/6";

  setTimeout(function(){

  
  s=1;
  w=160;
  h=160;
  r=50;
  x=-760;
  y=650;
  bt=808;
  br=60;
  document.documentElement.style.setProperty('--x', x + 'px');
  document.documentElement.style.setProperty('--y', y + 'px');
  //document.documentElement.style.setProperty('--w', w + 'px');
  //document.documentElement.style.setProperty('--h', h + 'px');
  document.documentElement.style.setProperty('--r', r + '%');
  document.documentElement.style.setProperty('--s', s + 'px');


  document.getElementById("insbanner").style.transform="translate(140px,620px)";
  document.getElementById("insbanner").innerHTML="&nbsp;&nbsp;&nbsp;Step 5. Fix the photo into the art&nbsp;&nbsp;&nbsp;";


  },2000);
  //document.getElementById("big").style.top="-5mm";
}

else if(pos==5){
  pos=6;
  s=1;
  w=160;
  h=160;
  r=50;
  x=-590;
  y=650;
  bt=800;
  br=7;
  document.documentElement.style.setProperty('--x', x + 'px');
  document.documentElement.style.setProperty('--y', y + 'px');
  //document.documentElement.style.setProperty('--w', w + 'px');
  //document.documentElement.style.setProperty('--h', h + 'px');
  document.documentElement.style.setProperty('--r', r + '%');
  document.documentElement.style.setProperty('--s', s + 'px');


  document.getElementById("insbanner").style.transform="translate(300px,620px)";
  document.getElementById("insbanner").innerHTML="&nbsp;&nbsp;&nbsp;Adjust again if you need&nbsp;&nbsp;&nbsp;";


  
  //document.getElementById("big").style.top="-5mm";
}


else if (pos==6){
  pos=7;
  s=1;
  w=220;
  h=200;
  r=50;
  x=-0;
  y=730;
  bt=830;
  br=17;
  document.documentElement.style.setProperty('--x', x + 'px');
  document.documentElement.style.setProperty('--y', y + 'px');
  //document.documentElement.style.setProperty('--w', w + 'px');
  //document.documentElement.style.setProperty('--h', h + 'px');
  document.documentElement.style.setProperty('--r', r + '%');
  document.documentElement.style.setProperty('--s', s + 'px');


  document.getElementById("insbanner").style.transform="translate(20px,730px)";
  document.getElementById("insbanner").innerHTML="&nbsp;&nbsp;&nbsp;Step 6. Download&nbsp;&nbsp;&nbsp;";

  
  document.getElementById("step123").innerHTML="6/6";
}

else if(pos==7){
  pos=8;
  s=1;
  w=0;
  h=0;
  r=50;
  x=-0;
  y=750;
  bt=970;
  br=-5;
  
  
  document.documentElement.style.setProperty('--r', r + '%');
  document.documentElement.style.setProperty('--s', s + 'px');

  
  
  

  setTimeout(function (){
    pos=8;
    s=1;
    w=300;
    h=300;
    r=50;
    x=-0;
    y=750;
    bt=970;
    br=-5;

    document.getElementById("big").style.opacity="0";
document.getElementById("big").style.visibility="hidden";
document.getElementById("insbanner").style.opacity="0";
document.getElementById("insbanner").style.visibility="hidden";
document.getElementById("clck").style.visibility="hidden";
document.getElementById("clck").style.opacity="0";



document.documentElement.style.setProperty('--x', x + 'px');
  document.documentElement.style.setProperty('--y', y + 'px');
//document.documentElement.style.setProperty('--w', w + 'px');
 // document.documentElement.style.setProperty('--h', h + 'px');

  document.getElementById("closebtn").style.visibility="hidden";
  
  document.getElementById("insbanner").style.transform="translate(-10px,730px)";


  },200);
  

  localStorage.setItem("view","1");
  localStorage.setItem("show","false");

}



console.log(pos);


}



//--------------------------------------------------------------------------------------------------------------------------------------------
//_________________________________________________-----------------------____----------__------____-_---______-------____________________-------









function ins1920(){

  if(pos==1){
    pos=2;
    s=1;
    w=300;
    h=150;
    r=50;
    x=0;
    y=450;
    bt=700;
    br=22;

    



    document.documentElement.style.setProperty('--x', x + 'px');
    document.documentElement.style.setProperty('--y', y + 'px');
    
    document.documentElement.style.setProperty('--r', r + '%');
    document.documentElement.style.setProperty('--s', s + 'px');


    document.documentElement.style.setProperty('--trans', 'all 1s ease-in-out');
    document.getElementById("insbanner").style.transform="translate(0,550px)";
  document.getElementById("insbanner").style.transition= "all 1s ease-in-out";


document.getElementById("insbanner").innerHTML="&nbsp;&nbsp;&nbsp;Step 2.Upload a photo&nbsp;&nbsp;&nbsp;";
document.getElementById("lef").setAttribute("src", "img/leftfill.svg");
document.getElementById("step123").innerHTML="2/6";

//document.getElementById("big").style.top="-5mm";

localStorage.setItem("view","0");

}
else if(pos==2){
pos=3;
s=1;
w=300;
h=100;
r=50;
x=90;
y=600;
bt=820;
br=22;
document.documentElement.style.setProperty('--x', x + 'px');
document.documentElement.style.setProperty('--y', y + 'px');
// document.documentElement.style.setProperty('--w', w + 'px');
// document.documentElement.style.setProperty('--h', h + 'px');
document.documentElement.style.setProperty('--r', r + '%');
document.documentElement.style.setProperty('--s', s + 'px');


document.documentElement.style.setProperty('--trans', 'all 1s ease-in-out');
document.getElementById("insbanner").style.transform="translate(0,690px)";
document.getElementById("insbanner").style.transition= "all 1s ease-in-out";



document.getElementById("insbanner").innerHTML="&nbsp;&nbsp;&nbsp;Step 3. Submit your details&nbsp;&nbsp;&nbsp;";
document.getElementById("step123").innerHTML="3/6";
//document.getElementById("big").style.top="-5mm";
}

else if(pos==3){
pos=4;
s=1;
w=600;
h=600;
r=5;
x=-750;
y=70;
bt=600;
br=7;
document.documentElement.style.setProperty('--x', x + 'px');
document.documentElement.style.setProperty('--y', y + 'px');
//document.documentElement.style.setProperty('--w', w + 'px');
//document.documentElement.style.setProperty('--h', h + 'px');
document.documentElement.style.setProperty('--r', r + '%');
document.documentElement.style.setProperty('--s', s + 'px');




document.getElementById("insbanner").style.transform="translate(200px,210px)";




document.getElementById("insbanner").innerHTML="&nbsp;&nbsp;&nbsp;Preview the details&nbsp;&nbsp;&nbsp;";

document.getElementById("step123").innerHTML="4/6";

setTimeout(function(){


s=1;
w=500;
h=500;
r=5;
x=-750;
y=200;
bt=680;
br=26;
document.documentElement.style.setProperty('--x', x + 'px');
document.documentElement.style.setProperty('--y', y + 'px');
//document.documentElement.style.setProperty('--w', w + 'px');
//document.documentElement.style.setProperty('--h', h + 'px');
document.documentElement.style.setProperty('--r', r + '%');






document.documentElement.style.setProperty('--trans', 'all 1s ease-in-out');
document.getElementById("insbanner").style.transform="translate(200px,190px)";
document.getElementById("insbanner").style.transition= "all 1s ease-in-out";



},1000)

setTimeout(function(){


s=1;
w=500;
h=500;
r=5;
x=-1070;
y=300;

document.documentElement.style.setProperty('--x', x + 'px');
document.documentElement.style.setProperty('--y', y + 'px');
//document.documentElement.style.setProperty('--w', w + 'px');
//document.documentElement.style.setProperty('--h', h + 'px');
document.documentElement.style.setProperty('--r', r + '%');
document.documentElement.style.setProperty('--s', s + 'px');




document.getElementById("insbanner").innerHTML="&nbsp;&nbsp;&nbsp;Step 4. Drag/adjust the photo&nbsp;&nbsp;&nbsp;";
document.getElementById("insbanner").style.transform="translate(-160px,210px)";



},4000)

setTimeout(function(){


s=1;
w=500;
h=500;
r=50;
x=-1070;
y=250;
bt=680;
br=26;
document.documentElement.style.setProperty('--x', x + 'px');
document.documentElement.style.setProperty('--y', y + 'px');
//document.documentElement.style.setProperty('--w', w + 'px');
//document.documentElement.style.setProperty('--h', h + 'px');
document.documentElement.style.setProperty('--r', r + '%');






document.documentElement.style.setProperty('--trans', 'all 1s ease-in-out');
document.getElementById("insbanner").style.transform="translate(-160px,230px)";
document.getElementById("insbanner").style.transition= "all 1s ease-in-out";



},5000)
//document.getElementById("big").style.top="-5mm";
}

else if(pos==4){
pos=5;
s=1;
w=350;
h=350;
r=50;
x=-1070;
y=80;
bt=470;
br=29;
document.documentElement.style.setProperty('--x', x + 'px');
document.documentElement.style.setProperty('--y', y + 'px');
//document.documentElement.style.setProperty('--w', w + 'px');
//document.documentElement.style.setProperty('--h', h + 'px');
document.documentElement.style.setProperty('--r', r + '%');
document.documentElement.style.setProperty('--s', s + 'px');


document.getElementById("insbanner").style.fontSize="26px";
document.getElementById("insbanner").style.transform="translate(-160px,320px)";
document.getElementById("insbanner").innerHTML="&nbsp;&nbsp;&nbsp;The photo must have 18mm space above&nbsp;&nbsp;&nbsp;";

document.getElementById("step123").innerHTML="5/6";

setTimeout(function(){


s=1;
w=160;
h=160;
r=50;
x=-760;
y=650;
bt=808;
br=60;
document.documentElement.style.setProperty('--x', x + 'px');
document.documentElement.style.setProperty('--y', y + 'px');
//document.documentElement.style.setProperty('--w', w + 'px');
//document.documentElement.style.setProperty('--h', h + 'px');
document.documentElement.style.setProperty('--r', r + '%');
document.documentElement.style.setProperty('--s', s + 'px');


document.getElementById("insbanner").style.transform="translate(140px,620px)";
document.getElementById("insbanner").innerHTML="&nbsp;&nbsp;&nbsp;Step 5. Fix the photo into the art&nbsp;&nbsp;&nbsp;";


},2000);
//document.getElementById("big").style.top="-5mm";
}

else if(pos==5){
pos=6;
s=1;
w=160;
h=160;
r=50;
x=-590;
y=650;
bt=800;
br=7;
document.documentElement.style.setProperty('--x', x + 'px');
document.documentElement.style.setProperty('--y', y + 'px');
//document.documentElement.style.setProperty('--w', w + 'px');
//document.documentElement.style.setProperty('--h', h + 'px');
document.documentElement.style.setProperty('--r', r + '%');
document.documentElement.style.setProperty('--s', s + 'px');


document.getElementById("insbanner").style.transform="translate(300px,620px)";
document.getElementById("insbanner").innerHTML="&nbsp;&nbsp;&nbsp;Adjust again if you need&nbsp;&nbsp;&nbsp;";



//document.getElementById("big").style.top="-5mm";
}


else if (pos==6){
pos=7;
s=1;
w=220;
h=200;
r=50;
x=-0;
y=730;
bt=830;
br=17;
document.documentElement.style.setProperty('--x', x + 'px');
document.documentElement.style.setProperty('--y', y + 'px');
//document.documentElement.style.setProperty('--w', w + 'px');
//document.documentElement.style.setProperty('--h', h + 'px');
document.documentElement.style.setProperty('--r', r + '%');
document.documentElement.style.setProperty('--s', s + 'px');


document.getElementById("insbanner").style.transform="translate(20px,730px)";
document.getElementById("insbanner").innerHTML="&nbsp;&nbsp;&nbsp;Step 6. Download&nbsp;&nbsp;&nbsp;";


document.getElementById("step123").innerHTML="6/6";
}

else if(pos==7){
pos=8;
s=1;
w=0;
h=0;
r=50;
x=-0;
y=750;
bt=970;
br=-5;


document.documentElement.style.setProperty('--r', r + '%');
document.documentElement.style.setProperty('--s', s + 'px');





setTimeout(function (){
pos=8;
s=1;
w=300;
h=300;
r=50;
x=-0;
y=750;
bt=970;
br=-5;

document.getElementById("big").style.opacity="0";
document.getElementById("big").style.visibility="hidden";
document.getElementById("insbanner").style.opacity="0";
document.getElementById("insbanner").style.visibility="hidden";
document.getElementById("clck").style.visibility="hidden";
document.getElementById("clck").style.opacity="0";



document.documentElement.style.setProperty('--x', x + 'px');
document.documentElement.style.setProperty('--y', y + 'px');
//document.documentElement.style.setProperty('--w', w + 'px');
// document.documentElement.style.setProperty('--h', h + 'px');

document.getElementById("closebtn").style.visibility="hidden";

document.getElementById("insbanner").style.transform="translate(-10px,730px)";


},200);


localStorage.setItem("view","1");
localStorage.setItem("show","false");

}



console.log(pos);


}



//---------------------------------------------------------------------------------------------------insback


function macback(){
 // if (window.screen.height>=1120){
  
  backins();
  
  
  }
 /* else if (window.screen.height<=1119){
    backins1920();
  }
  }*/
  
      function backins(){
  
      if(pos==2){
          pos=1;
          w=300;
          h=300;
    x=0;
    y=0;
    document.documentElement.style.setProperty('--trans', 'all 0.5s ease-in-out');
document.getElementById("insbanner").style.transition= "all 0.5s ease-in-out";
document.documentElement.style.setProperty('--x', x + 'px');
  document.documentElement.style.setProperty('--y', y + 'px');
    
    popLoad();

      
  }
  else if(pos==3){
      pos=1;
      ins();
  }
  
  else if(pos==4){
    pos=2;
   ins();
  
  
    
    //document.getElementById("big").style.top="-5mm";
  }
  
  else if(pos==5){
    pos=3;
   ins();
  }
  
  else if(pos==6){
    pos=4;
    ins();
  }

  else if(pos==7){
    pos=5;
    ins();
  }
  
  
  
  console.log(pos);
  
  
  }


  //---------------------------------------------------------------------------------------------------








  /*

  function backins1920(){
  
     if(pos==2){
          pos=1;
          w=300;
          h=300;
    x=0;
    y=0;
    document.documentElement.style.setProperty('--trans', 'all 0.5s ease-in-out');
document.getElementById("insbanner").style.transition= "all 0.5s ease-in-out";
document.documentElement.style.setProperty('--x', x + 'px');
  document.documentElement.style.setProperty('--y', y + 'px');
    
    popLoad();

      
  }
  else if(pos==3){
      pos=1;
      ins();
  }
  
  else if(pos==4){
    pos=2;
   ins();
  
  
    
    //document.getElementById("big").style.top="-5mm";
  }
  
  else if(pos==5){
    pos=3;
   ins();
  }
  
  else if(pos==6){
    pos=4;
    ins();
  }

  else if(pos==7){
    pos=5;
    ins();
  }
  
  
  
  console.log(pos);


}

*/





/*window.alert("1. Edit texts in the text area & click submit\n2. Choose your image\n3. Drag to adjust the Employee's photo to get exact output"+
    "\n4. Click fix button\n5. If you want to adjust again click adjust button and adjust \n6. Once you satisfied with the look then download\n\n"
    + "***Note: When uploading an image, please make sure the space between employee's head and top edge of the image in atleast 18mm same like below default image" );*/


   
/*Image conversion & download
    $(document).ready(function(){
var element = $("#container"); // global variable
var getCanvas; // global variable
var EmpName = document.getElementById('p2');
$("#btn-Preview-Image").on('click', function () {
     html2canvas(element, {
     onrendered: function (canvas) {
            $("#previewImage").append(canvas);
            getCanvas = canvas;
         }
     });
});
*/


var EmpName = document.getElementById('p2');
var action=1;

function convert() {
if (action==1){
    const original = document.querySelector('#container')
    const canvasContainer = document.querySelector('#previewImage')
  
  html2canvas(original, {
     scale: 2,
     useCORS: true,
   }).then(canvas => {
    canvasContainer.appendChild(canvas);
    canvas.setAttribute("id","canva");
    canva=document.querySelector("#canva");
  const a=document.createElement("a");
          document.body.appendChild(a);
          a.href=canva.toDataURL();
          a.download="Welcome" + "_" + EmpName.textContent +".png";
          a.click();
          //document.body.removeChild(a);
          action=2;
          console.log(action);
  })
  }

if (action==2){
    const original = document.querySelector('#container')
    const canvasContainer = document.querySelector('#previewImage')
  
  html2canvas(original, {
     scale: 2,
     useCORS: true,
   }).then(canvas => {
    canvasContainer.appendChild(canvas);
    canvas.setAttribute("id","canva");
    canva=document.querySelector("#canva");
  const a=document.createElement("a");
          document.body.appendChild(a);
          a.href=canva.toDataURL();
          a.download="Welcome" + "_" + EmpName.textContent +".png";
          a.click();
          document.body.removeChild(a);
          action=2;
          console.log(action);
  })
    var item = document.getElementById("canva");
    item.parentNode.removeChild(item);
    action=1;
}

}
  
  
  

//$("#btn-Convert-Html2Image").on('click', function () {
//var imgageData = getCanvas.toDataURL('image/png',1.0);
//var newData = imgageData.replace(/^data:image\/png/, "data:application/octet-stream");
//$("#btn-Convert-Html2Image").attr("download", "Welcome" + "_" + EmpName.textContent +".png").attr("href", newData);
//});

//});



/*Get input*/


/*var action=1;
        function resize(){    
            window.drag = null;
        var bg = document.getElementsByClassName('bg-img')[0];
        if ( action == 1 ) {            
            
            bg.style.resize = "both";
            bg.style.overflow = "scroll";
            window.drag = null;
            $bg = $('.bg-img1');
            action = 2;
        } 
        else if ( action == 2 ) {
            $bg = $('.bg-img');
               bg.style.resize = "both";
            bg.style.overflow = "scroll";
            window.drag = dragFunc;
            dragFunc();
            action = 1;
        }
        
        console.log(action)
    }*/



function previewFile(fileInput) {
var file = fileInput.files[0];
var reader = new FileReader();

reader.addEventListener("load", function() {
setBackground(reader.result);
}, false);

if (file) {
reader.readAsDataURL(file);
}
}
function setBackground(imageURL){
document.getElementById("layer2").style.backgroundImage = "url(" + imageURL + ")";
/*document.body.style.backgroundSize = "100% auto";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundPosition = "center top";*/
}

/*Custom functions*/

function anchor(){
document.getElementById("layer1").style.zIndex = "1";
document.getElementById("layer2").style.zIndex = "";
}

function refix(){
document.getElementById("layer2").style.zIndex = "6";
}







function myFunction1() {

    var para2 = document.getElementById("name").value;
    document.getElementById("p2").innerHTML = para2;
    var para3 = document.getElementById("designation").value;
    document.getElementById("p3").innerHTML = para3;
    var para4 = document.getElementById("content").value;
    document.getElementById("p4").innerHTML = para4;
    var para5 = document.getElementById("mail").value;
    document.getElementById("p5").innerHTML = para5;
    var para6 = document.getElementById("mobile").value;
    document.getElementById("p6").innerHTML = para6;
  
}
function myFunction2() {
var employeeName=document.getElementById("name").value;
document.getElementById("p7").innerHTML = "Please join me in welcoming "+employeeName+" to our YAP family. Welcome&nbsp;aboard!!!";

}
function checkInput(ob) {
  var invalidChars = /[^0-9]/gi
  if(invalidChars.test(ob.value)) {
            ob.value = ob.value.replace(invalidChars,"");
      }
}



/* Remove class
$('.preview').click(
    function(){ $(this).addClass('preview1') },
    function(){ $(this).removeClass('preview') }
)
$('.preview').click(
    function(){ $(this).addClass('hover') },
    function(){ $(this).removeClass('hover') }
)
Romove class*/

/*var dragtip = document.getElementById('bg-img');
window.onmousemove = function (e) {
var x = e.clientX,
    y = e.clientY;
dragtip.style.top = (y + 20) + 'px';
dragtip.style.left = (x + 20) + 'px';
};
/*input*/


function erase(){
document.getElementById("name").value="";
document.getElementById("designation").value="";
document.getElementById("mail").value="";
document.getElementById("mobile").value="";
document.getElementById("content").value="";
document.getElementById('name').placeholder="Rajesh";
document.getElementById('designation').placeholder="UX Designer";
document.getElementById('mail').placeholder="rajesh@m2p.in";
document.getElementById('mobile').placeholder="9876543210";
document.getElementById('content').placeholder="Your Message";

document.getElementById("p2").innerHTML = "Employee Name";
document.getElementById("p3").innerHTML = "Designation";
document.getElementById("p4").innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui";
document.getElementById("p5").innerHTML = "employee@m2p.in";
document.getElementById("p6").innerHTML = "00 0000 0000";

document.getElementById("p7").innerHTML = "Please join me in welcoming Employee to our YAP family. Welcome&nbsp;aboard!!!";



}



function setbg1(color)
{
document.getElementById("welcome").style.background=color;

}

function setbg2(color,ph)
{
    document.getElementById("name").style.background=color;
    document.getElementById('name').placeholder="";
}

function setbg3(color)
{
    document.getElementById("designation").style.background=color;
    document.getElementById('designation').placeholder="";
}

function setbg4(color)
{
    document.getElementById("content").style.background=color;
    document.getElementById('content').placeholder="";

}

function setbg5(color)
{
    document.getElementById("mail").style.background=color;
    document.getElementById('mail').placeholder="";
}

function setbg6(color)
{
    document.getElementById("mobile").style.background=color;
    document.getElementById('mobile').placeholder="";
}

function setbg7(color)
{
    document.getElementById("bottom").style.background=color
}

/*input colour functions*/

/*Tutorial*/
/*var step=1;

function nxslide(){
if (step==1){
    
    document.getElementById("popupimg").setAttribute("src", "img/2.jpg");
    
    step=2;
    var x = document.getElementsByClassName("dot");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = "#a3b6db";
    x[i].style.border = "none";
  }
    
    document.getElementById("dot1").style.backgroundColor="#3a86ff";
    document.getElementById("previous").style.backgroundColor="#3a86ff";
    
}
else if (step==2){

    document.getElementById("popupimg").setAttribute("src", "img/3.jpg");
    step=3;
    var x = document.getElementsByClassName("dot");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = "#a3b6db";
    x[i].style.border = "none";
  }
    
    document.getElementById("dot2").style.backgroundColor="#3a86ff";
}
else if (step==3){

    document.getElementById("popupimg").setAttribute("src", "img/4.jpg");
    step=4;
    var x = document.getElementsByClassName("dot");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = "#a3b6db";
    x[i].style.border = "none";
  }
    
    document.getElementById("dot3").style.backgroundColor="#3a86ff";
}
else if (step==4){

    document.getElementById("popupimg").setAttribute("src", "img/5.jpg");
    step=5;
    var x = document.getElementsByClassName("dot");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = "#a3b6db";
    x[i].style.border = "none";
  }
    
    document.getElementById("dot4").style.backgroundColor="#3a86ff";
}
else if (step==5){

    document.getElementById("popupimg").setAttribute("src", "img/6.jpg");
    step=6;
    var x = document.getElementsByClassName("dot");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = "#a3b6db";
    x[i].style.border = "none";
  }
    
    document.getElementById("dot5").style.backgroundColor="#3a86ff";
}
else if (step==6){

    document.getElementById("popupimg").setAttribute("src", "img/7.jpg");
    step=7;
    var x = document.getElementsByClassName("dot");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = "#a3b6db";
    x[i].style.border = "none";
  }
  
    document.getElementById("dot6").style.backgroundColor="#3a86ff";
}
else if (step==7){

    document.getElementById("popupimg").setAttribute("src", "img/8.jpg");
    step=8;
    var x = document.getElementsByClassName("dot");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = "#a3b6db";
    x[i].style.border = "none";
  }
    
    document.getElementById("dot7").style.backgroundColor="#2bff01";
    document.getElementById("next").innerHTML="Close X";
    document.getElementById("next").style.backgroundColor="red";
    

}
else if (step==8){

    
    document.getElementById("popcontainer").style.top="-300mm";
    document.getElementById("popdec").style.transform="scale(0)";
    document.getElementById("popdec").style.opacity="0";
}
console.log(step);
}
*/


//Checkbox





/*
function clicon(){
    
    document.getElementById("popcontainer").style.top="-300mm";
    document.getElementById("popcontainer").style.opacity="0";
    document.getElementById("clicon").style.opacity="0";
    document.getElementById("popdec").style.transform="scale(0)";
    document.getElementById("popdec").style.opacity="0";
}

*/



/*

function transit(){
  document.getElementById("dontshowcheckbox").style.opacity="1";
  
  document.getElementById("lab").style.right="0%";
    document.getElementById("popcontainer").style.top="0mm";
    document.getElementById("popcontainer").style.opacity="1";
    document.getElementById("next").style.backgroundColor="#3a86ff";
    document.getElementById("next").innerHTML="Next >";
    document.getElementById("popupimg").setAttribute("src", "img/1.jpg");
    document.getElementById("previous").style.backgroundColor="#a3b6db";
    document.getElementById("clicon").style.opacity="1";
    document.getElementById("popdec").style.transform="none";
    document.getElementById("popdec").style.opacity="1";
    var x = document.getElementsByClassName("dot");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = "#a3b6db";
    x[i].style.border = "none";
  }
  document.getElementById("dot").style.backgroundColor="#3a86ff";
    step=1;
}


/*
function preslide(){
    if (step==2){
    
        document.getElementById("popupimg").setAttribute("src", "img/1.jpg");
        step=1;
        var x = document.getElementsByClassName("dot");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = "#a3b6db";
    x[i].style.border = "none";
  }
    
    document.getElementById("dot").style.backgroundColor="#3a86ff";
        document.getElementById("previous").style.backgroundColor="#a3b6db";
    }
    else if (step==3){
    
        document.getElementById("popupimg").setAttribute("src", "img/2.jpg");
        step=2;
        var x = document.getElementsByClassName("dot");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = "#a3b6db";
    x[i].style.border = "none";
  }
    
    document.getElementById("dot1").style.backgroundColor="#3a86ff";
    }
    else if (step==4){
    
        document.getElementById("popupimg").setAttribute("src", "img/3.jpg");
        step=3;
        var x = document.getElementsByClassName("dot");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = "#a3b6db";
    x[i].style.border = "none";
  }
    
    document.getElementById("dot2").style.backgroundColor="#3a86ff";
    }
    else if (step==5){
    
        document.getElementById("popupimg").setAttribute("src", "img/4.jpg");
        step=4;
        var x = document.getElementsByClassName("dot");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = "#a3b6db";
    x[i].style.border = "none";
  }
    
    document.getElementById("dot3").style.backgroundColor="#3a86ff";
    }
    else if (step==6){
    
        document.getElementById("popupimg").setAttribute("src", "img/5.jpg");
        step=5;
        var x = document.getElementsByClassName("dot");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = "#a3b6db";
    x[i].style.border = "none";
  }
    
    document.getElementById("dot4").style.backgroundColor="#3a86ff";
    }
    else if (step==7){
    
        document.getElementById("popupimg").setAttribute("src", "img/6.jpg");
        step=6;
        var x = document.getElementsByClassName("dot");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = "#a3b6db";
    x[i].style.border = "none";
  }
    
    document.getElementById("dot5").style.backgroundColor="#3a86ff";
    }
    else if (step==8){
    
        document.getElementById("popupimg").setAttribute("src", "img/7.jpg");
        step=7;
        var x = document.getElementsByClassName("dot");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = "#a3b6db";
    x[i].style.border = "none";
  }
    
  document.getElementById("next").innerHTML="Next &gt;";
    document.getElementById("dot6").style.backgroundColor="green";
    document.getElementById("next").style.backgroundColor="#3a86ff";
    }
    
    console.log(step);
    }

/*Custom functions*/






/*BG img drag jquery*/

$(document).ready(function(){
    var $bg = $('.bg-img'),
        data = $('#data')[0],
        elbounds = {
            w: parseInt($bg.width()), 
            h: parseInt($bg.height())
        },
        bounds = {w: 2350 - elbounds.w, h: 1750 - elbounds.h},
        origin = {x: 0, y: 0},
        start = {x: 0, y: 0},
        movecontinue = false;
    
    function move (e){
        var inbounds = {x: false, y: false},
            offset = {
                x: start.x - (origin.x - e.clientX), 
                y: start.y - (origin.y - e.clientY)
            };
        
        data.value = 'X: ' + offset.x + ', Y: ' + offset.y;
        
        inbounds.x = offset.x < 0 && (offset.x * -1) < bounds.w;
        inbounds.y = offset.y < 0 && (offset.y * -1) < bounds.h;
        
        if (movecontinue && inbounds.x && inbounds.y) {
            start.x = offset.x;
            start.y = offset.y;
            
            $(this).css('background-position', start.x + 'px ' + start.y + 'px');
        }
        
        origin.x = e.clientX;
        origin.y = e.clientY;
        
        e.stopPropagation();
        return false;
    }
    
    function handle (e){
        movecontinue = false;
        $bg.unbind('mousemove', move);
        
        if (e.type == 'mousedown') {
            origin.x = e.clientX;
            origin.y = e.clientY;
            movecontinue = true;
            $bg.bind('mousemove', move);
        } else {
            $(document.body).focus();
        }
        
        e.stopPropagation();
        return false;
    }
    
    function reset (){
        start = {x: 0, y: 0};
        $(this).css('backgroundPosition', '0 0');
    }
    
    $bg.bind('mousedown mouseup mouseleave', handle);
    $bg.bind('dblclick', reset);
});

/*Bg img drag jquery*/



/*<script>
   
document.getElementById("zoomin").onclick= function() {
/*
var layer = document.getElementById("layer2");
var style = window.getComputedStyle(layer);
var bSize = style.getPropertyValue("background-size");*/
/*var bgs=document.getElementById("layer2").style.backgroundSize;
document.getElementById("layer2").style.backgroundSize="bgs-100px"+ "bgs-100px";
console.log(layer2);
}
    
       
        var action=1;
        function zoom(){    
        
        
        
        var zoomin=document.getElementById("zoomin");
        var bg = document.getElementsByClassName('bg-img')[0];
        if ( action == 1 ) {            
            
            bg.style.backgroundSize = "contain";
            
            action = 2;
        } 
        else if ( action == 2 ) {
            
            bg.style.backgroundSize = "initial";
            
            action = 3;
        }
        else if (action == 3) {
            
            bg.style.width = "250px";
            
            action = 1;
        }
        console.log(action)
    }
    */