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

bouton_but1.addEventListener('click', function() {
    if (but1==false) {
        but1=true;
        bouton_but1.style.fillOpacity="0.3"
    }
    else if (but1==true) {
        but2=false;
        bouton_but1.style.fillOpacity="0"
       }
});