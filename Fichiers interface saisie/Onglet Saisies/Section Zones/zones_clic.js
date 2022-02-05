let up = false;
let down = false;

let bouton_up = document.getElementById("marque");
let bouton_down = document.getElementById("rate");


bouton_up.addEventListener('click', function() {
    if (up==false) {
        up=true;
        bouton_up.style.backgroundColor="#f9eb3c";
        bouton_up.style.color="#383338";
    }
    else if (up==true) {
        up=false;
        bouton_up.style.backgroundColor="rgba(255,255,255,0)";
        bouton_up.style.color="#05602F";
       }
});

bouton_down.addEventListener('click', function() {
    if (down==false) {
        down=true;
        bouton_down.style.backgroundColor="#f9eb3c";
        bouton_down.style.color="#383338"
    }
    else if (down==true) {
        down=false;
        bouton_down.style.backgroundColor="rgba(255,255,255,0)";
        bouton_down.style.color="#05602F"
    }
});

let but1 = false;
let but2 = false;
let but3 = false;
let but4 = false;
let but5 = false;
let but6 = false;
let but7 = false;
let but8 = false;
let but9 = false;

let bouton_but1 = document.getElementById("zb1");
let bouton_but2 = document.getElementById("zb2");
let bouton_but3 = document.getElementById("zb3");
let bouton_but4 = document.getElementById("zb4");
let bouton_but5 = document.getElementById("zb5");
let bouton_but6 = document.getElementById("zb6");
let bouton_but7 = document.getElementById("zb7");
let bouton_but8 = document.getElementById("zb8");
let bouton_but9 = document.getElementById("zb9");

let zone = 0;

bouton_but1.addEventListener('click', function() {
    if (but1==false) {
        but1=true;
        but2=false;
        but3=false;
        but4=false;
        but5=false;
        but6=false;
        but7=false;
        but8=false;
        but9=false;
        bouton_but1.style.fillOpacity="0.3";
        bouton_but2.style.fillOpacity="0";
        bouton_but3.style.fillOpacity="0";
        bouton_but4.style.fillOpacity="0";
        bouton_but5.style.fillOpacity="0";
        bouton_but6.style.fillOpacity="0";
        bouton_but7.style.fillOpacity="0";
        bouton_but8.style.fillOpacity="0";
        bouton_but9.style.fillOpacity="0";
        zone = 1
    }
    else if (but1==true) {
        but1=false;
        bouton_but1.style.fillOpacity="0"
       }
});

bouton_but2.addEventListener('click', function() {
    if (but2==false) {
        but2=true;
        but1=false;
        but3=false;
        but4=false;
        but5=false;
        but6=false;
        but7=false;
        but8=false;
        but9=false;
        bouton_but2.style.fillOpacity="0.3";
        bouton_but1.style.fillOpacity="0";
        bouton_but3.style.fillOpacity="0";
        bouton_but4.style.fillOpacity="0";
        bouton_but5.style.fillOpacity="0";
        bouton_but6.style.fillOpacity="0";
        bouton_but7.style.fillOpacity="0";
        bouton_but8.style.fillOpacity="0";
        bouton_but9.style.fillOpacity="0";
        zone = 2
    }
    else if (but2==true) {
        but2=false;
        bouton_but2.style.fillOpacity="0"
       }
});

bouton_but3.addEventListener('click', function() {
    if (but3==false) {
        but3=true;
        but1=false;
        but2=false;
        but4=false;
        but5=false;
        but6=false;
        but7=false;
        but8=false;
        but9=false;
        bouton_but3.style.fillOpacity="0.3";
        bouton_but1.style.fillOpacity="0";
        bouton_but2.style.fillOpacity="0";
        bouton_but4.style.fillOpacity="0";
        bouton_but5.style.fillOpacity="0";
        bouton_but6.style.fillOpacity="0";
        bouton_but7.style.fillOpacity="0";
        bouton_but8.style.fillOpacity="0";
        bouton_but9.style.fillOpacity="0";
        zone = 3
    }
    else if (but3==true) {
        but3=false;
        bouton_but3.style.fillOpacity="0"
       }
});

bouton_but4.addEventListener('click', function() {
    if (but4==false) {
        but4=true;
        but1=false;
        but3=false;
        but2=false;
        but5=false;
        but6=false;
        but7=false;
        but8=false;
        but9=false;
        bouton_but4.style.fillOpacity="0.3";
        bouton_but1.style.fillOpacity="0";
        bouton_but3.style.fillOpacity="0";
        bouton_but2.style.fillOpacity="0";
        bouton_but5.style.fillOpacity="0";
        bouton_but6.style.fillOpacity="0";
        bouton_but7.style.fillOpacity="0";
        bouton_but8.style.fillOpacity="0";
        bouton_but9.style.fillOpacity="0";
        zone = 4
    }
    else if (but4==true) {
        but4=false;
        bouton_but2.style.fillOpacity="0"
       }
});

bouton_but5.addEventListener('click', function() {
    if (but5==false) {
        but5=true;
        but1=false;
        but3=false;
        but4=false;
        but2=false;
        but6=false;
        but7=false;
        but8=false;
        but9=false;
        bouton_but5.style.fillOpacity="0.3";
        bouton_but1.style.fillOpacity="0";
        bouton_but3.style.fillOpacity="0";
        bouton_but4.style.fillOpacity="0";
        bouton_but2.style.fillOpacity="0";
        bouton_but6.style.fillOpacity="0";
        bouton_but7.style.fillOpacity="0";
        bouton_but8.style.fillOpacity="0";
        bouton_but9.style.fillOpacity="0";
        zone = 5
    }
    else if (but5==true) {
        but5=false;
        bouton_but5.style.fillOpacity="0"
       }
});

bouton_but6.addEventListener('click', function() {
    if (but6==false) {
        but6=true;
        but1=false;
        but3=false;
        but4=false;
        but5=false;
        but2=false;
        but7=false;
        but8=false;
        but9=false;
        bouton_but6.style.fillOpacity="0.3";
        bouton_but1.style.fillOpacity="0";
        bouton_but3.style.fillOpacity="0";
        bouton_but4.style.fillOpacity="0";
        bouton_but5.style.fillOpacity="0";
        bouton_but2.style.fillOpacity="0";
        bouton_but7.style.fillOpacity="0";
        bouton_but8.style.fillOpacity="0";
        bouton_but9.style.fillOpacity="0";
        zone = 6
    }
    else if (but6==true) {
        but6=false;
        bouton_but6.style.fillOpacity="0"
       }
});

bouton_but7.addEventListener('click', function() {
    if (but7==false) {
        but7=true;
        but1=false;
        but3=false;
        but4=false;
        but5=false;
        but6=false;
        but2=false;
        but8=false;
        but9=false;
        bouton_but7.style.fillOpacity="0.3";
        bouton_but1.style.fillOpacity="0";
        bouton_but3.style.fillOpacity="0";
        bouton_but4.style.fillOpacity="0";
        bouton_but5.style.fillOpacity="0";
        bouton_but6.style.fillOpacity="0";
        bouton_but2.style.fillOpacity="0";
        bouton_but8.style.fillOpacity="0";
        bouton_but9.style.fillOpacity="0";
        zone = 7
    }
    else if (but7==true) {
        but7=false;
        bouton_but7.style.fillOpacity="0"
       }
});

bouton_but8.addEventListener('click', function() {
    if (but8==false) {
        but8=true;
        but1=false;
        but3=false;
        but4=false;
        but5=false;
        but6=false;
        but7=false;
        but2=false;
        but9=false;
        bouton_but8.style.fillOpacity="0.3";
        bouton_but1.style.fillOpacity="0";
        bouton_but3.style.fillOpacity="0";
        bouton_but4.style.fillOpacity="0";
        bouton_but5.style.fillOpacity="0";
        bouton_but6.style.fillOpacity="0";
        bouton_but7.style.fillOpacity="0";
        bouton_but2.style.fillOpacity="0";
        bouton_but9.style.fillOpacity="0";
        zone = 8
    }
    else if (but8==true) {
        but8=false;
        bouton_but8.style.fillOpacity="0"
       }
});

bouton_but9.addEventListener('click', function() {
    if (but9==false) {
        but9=true;
        but1=false;
        but3=false;
        but4=false;
        but5=false;
        but6=false;
        but7=false;
        but8=false;
        but2=false;
        bouton_but9.style.fillOpacity="0.3";
        bouton_but1.style.fillOpacity="0";
        bouton_but3.style.fillOpacity="0";
        bouton_but4.style.fillOpacity="0";
        bouton_but5.style.fillOpacity="0";
        bouton_but6.style.fillOpacity="0";
        bouton_but7.style.fillOpacity="0";
        bouton_but8.style.fillOpacity="0";
        bouton_but2.style.fillOpacity="0";
        zone = 9
    }
    else if (but2==true) {
        but2=false;
        bouton_but2.style.fillOpacity="0"
       }
});
