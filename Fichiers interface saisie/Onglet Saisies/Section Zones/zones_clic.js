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

let but0 = false;
let but1 = false;
let but2 = false;
let but3 = false;
let but4 = false;
let but5 = false;
let but6 = false;
let but7 = false;
let but8 = false;
let but9 = false;

let bouton_but0 = document.getElementById("zb0");
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

bouton_but0.addEventListener('click', function() {
    if (but0==false) {
        but0=true;
        but1=false;
        but2=false;
        but3=false;
        but4=false;
        but5=false;
        but6=false;
        but7=false;
        but8=false;
        but9=false;
        bouton_but0.style.fillOpacity="0.3";
        bouton_but1.style.fillOpacity="0";
        bouton_but2.style.fillOpacity="0";
        bouton_but3.style.fillOpacity="0";
        bouton_but4.style.fillOpacity="0";
        bouton_but5.style.fillOpacity="0";
        bouton_but6.style.fillOpacity="0";
        bouton_but7.style.fillOpacity="0";
        bouton_but8.style.fillOpacity="0";
        bouton_but9.style.fillOpacity="0";
        zone = 0
    }
    else if (but0==true) {
        but0=false;
        bouton_but0.style.fillOpacity="0"
       }
});

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
        but0=false;
        bouton_but0.style.fillOpacity="0";
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
        but0=false;
        bouton_but0.style.fillOpacity="0";
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
        but0=false;
        bouton_but0.style.fillOpacity="0";
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
        but0=false;
        bouton_but0.style.fillOpacity="0";
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
        bouton_but4.style.fillOpacity="0"
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
        but0=false;
        bouton_but0.style.fillOpacity="0";
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
        but0=false;
        bouton_but0.style.fillOpacity="0";
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
        but0=false;
        bouton_but0.style.fillOpacity="0";
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
        but0=false;
        bouton_but0.style.fillOpacity="0";
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
        but0=false;
        bouton_but0.style.fillOpacity="0";
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
    else if (but9==true) {
        but9=false;
        bouton_but9.style.fillOpacity="0"
       }
});


let terrain1 = false;
let terrain2 = false;
let terrain3 = false;
let terrain4 = false;
let terrain5 = false;
let terrain6 = false;
let terrain7 = false;
let terrain8 = false;
let terrain9 = false;
let terrain10 = false;
let septM = false;

let bouton_terrain10 = document.getElementById("zt10");
let bouton_terrain1 = document.getElementById("zt1");
let bouton_terrain2 = document.getElementById("zt2");
let bouton_terrain3 = document.getElementById("zt3");
let bouton_terrain4 = document.getElementById("zt4");
let bouton_terrain5 = document.getElementById("zt5");
let bouton_terrain6 = document.getElementById("zt6");
let bouton_terrain7 = document.getElementById("zt7");
let bouton_terrain8 = document.getElementById("zt8");
let bouton_terrain9 = document.getElementById("zt9");
let bouton_septM = document.getElementById("septM");
let text_septM = document.getElementById("text7M");

let zoneterrain = 0;

bouton_terrain1.addEventListener('click', function() {
    if (terrain1==false) {
        terrain1=true;
        terrain2=false;
        terrain3=false;
        terrain4=false;
        terrain5=false;
        terrain6=false;
        terrain7=false;
        terrain8=false;
        terrain9=false;
        terrain10=false;
        septM=false;
        bouton_septM.style.fill="#589474";
        bouton_terrain1.style.fillOpacity="0.3";
        bouton_terrain2.style.fillOpacity="0";
        bouton_terrain3.style.fillOpacity="0";
        bouton_terrain4.style.fillOpacity="0";
        bouton_terrain5.style.fillOpacity="0";
        bouton_terrain6.style.fillOpacity="0";
        bouton_terrain7.style.fillOpacity="0";
        bouton_terrain8.style.fillOpacity="0";
        bouton_terrain9.style.fillOpacity="0";
        bouton_terrain10.style.fillOpacity="0";
        zoneterrain = 1
    }
    else if (terrain1==true) {
        terrain1=false;
        bouton_terrain1.style.fillOpacity="0"
       }
});

bouton_terrain2.addEventListener('click', function() {
    if (terrain2==false) {
        terrain1=false;
        terrain2=true;
        terrain3=false;
        terrain4=false;
        terrain5=false;
        terrain6=false;
        terrain7=false;
        terrain8=false;
        terrain9=false;
        terrain10=false;
        septM=false;
        bouton_septM.style.fill="#589474";
        bouton_terrain1.style.fillOpacity="0";
        bouton_terrain2.style.fillOpacity="0.3";
        bouton_terrain3.style.fillOpacity="0";
        bouton_terrain4.style.fillOpacity="0";
        bouton_terrain5.style.fillOpacity="0";
        bouton_terrain6.style.fillOpacity="0";
        bouton_terrain7.style.fillOpacity="0";
        bouton_terrain8.style.fillOpacity="0";
        bouton_terrain9.style.fillOpacity="0";
        bouton_terrain10.style.fillOpacity="0";
        zoneterrain = 2
    }
    else if (terrain2==true) {
        terrain2=false;
        bouton_terrain2.style.fillOpacity="0"
       }
});

bouton_terrain3.addEventListener('click', function() {
    if (terrain3==false) {
        terrain1=false;
        terrain2=false;
        terrain3=true;
        terrain4=false;
        terrain5=false;
        terrain6=false;
        terrain7=false;
        terrain8=false;
        terrain9=false;
        terrain10=false;
        septM=false;
        bouton_septM.style.fill="#589474";
        bouton_terrain1.style.fillOpacity="0";
        bouton_terrain2.style.fillOpacity="0";
        bouton_terrain3.style.fillOpacity="0.3";
        bouton_terrain4.style.fillOpacity="0";
        bouton_terrain5.style.fillOpacity="0";
        bouton_terrain6.style.fillOpacity="0";
        bouton_terrain7.style.fillOpacity="0";
        bouton_terrain8.style.fillOpacity="0";
        bouton_terrain9.style.fillOpacity="0";
        bouton_terrain10.style.fillOpacity="0";
        zoneterrain = 3
    }
    else if (terrain3==true) {
        terrain3=false;
        bouton_terrain3.style.fillOpacity="0"
       }
});

bouton_terrain4.addEventListener('click', function() {
    if (terrain4==false) {
        terrain1=false;
        terrain2=false;
        terrain3=false;
        terrain4=true;
        terrain5=false;
        terrain6=false;
        terrain7=false;
        terrain8=false;
        terrain9=false;
        terrain10=false;
        septM=false;
        bouton_septM.style.fill="#589474";
        bouton_terrain1.style.fillOpacity="0";
        bouton_terrain2.style.fillOpacity="0";
        bouton_terrain3.style.fillOpacity="0";
        bouton_terrain4.style.fillOpacity="0.3";
        bouton_terrain5.style.fillOpacity="0";
        bouton_terrain6.style.fillOpacity="0";
        bouton_terrain7.style.fillOpacity="0";
        bouton_terrain8.style.fillOpacity="0";
        bouton_terrain9.style.fillOpacity="0";
        bouton_terrain10.style.fillOpacity="0";
        zoneterrain = 4
    }
    else if (terrain4==true) {
        terrain4=false;
        bouton_terrain4.style.fillOpacity="0"
       }
});

bouton_terrain5.addEventListener('click', function() {
    if (terrain5==false) {
        terrain1=false;
        terrain2=false;
        terrain3=false;
        terrain4=false;
        terrain5=true;
        terrain6=false;
        terrain7=false;
        terrain8=false;
        terrain9=false;
        terrain10=false;
        septM=false;
        bouton_septM.style.fill="#589474";
        bouton_terrain1.style.fillOpacity="0";
        bouton_terrain2.style.fillOpacity="0";
        bouton_terrain3.style.fillOpacity="0";
        bouton_terrain4.style.fillOpacity="0";
        bouton_terrain5.style.fillOpacity="0.3";
        bouton_terrain6.style.fillOpacity="0";
        bouton_terrain7.style.fillOpacity="0";
        bouton_terrain8.style.fillOpacity="0";
        bouton_terrain9.style.fillOpacity="0";
        bouton_terrain10.style.fillOpacity="0";
        zoneterrain = 5
    }
    else if (terrain5==true) {
        terrain5=false;
        bouton_terrain5.style.fillOpacity="0"
       }
});

bouton_terrain6.addEventListener('click', function() {
    if (terrain6==false) {
        terrain1=false;
        terrain2=false;
        terrain3=false;
        terrain4=false;
        terrain5=false;
        terrain6=true;
        terrain7=false;
        terrain8=false;
        terrain9=false;
        terrain10=false;
        septM=false;
        bouton_septM.style.fill="#589474";
        bouton_terrain1.style.fillOpacity="0";
        bouton_terrain2.style.fillOpacity="0";
        bouton_terrain3.style.fillOpacity="0";
        bouton_terrain4.style.fillOpacity="0";
        bouton_terrain5.style.fillOpacity="0";
        bouton_terrain6.style.fillOpacity="0.3";
        bouton_terrain7.style.fillOpacity="0";
        bouton_terrain8.style.fillOpacity="0";
        bouton_terrain9.style.fillOpacity="0";
        bouton_terrain10.style.fillOpacity="0";
        zoneterrain = 6
    }
    else if (terrain6==true) {
        terrain6=false;
        bouton_terrain6.style.fillOpacity="0"
       }
});

bouton_terrain7.addEventListener('click', function() {
    if (terrain7==false) {
        terrain1=false;
        terrain2=false;
        terrain3=false;
        terrain4=false;
        terrain5=false;
        terrain6=false;
        terrain7=true;
        terrain8=false;
        terrain9=false;
        terrain10=false;
        septM=false;
        bouton_septM.style.fill="#589474";
        bouton_terrain1.style.fillOpacity="0";
        bouton_terrain2.style.fillOpacity="0";
        bouton_terrain3.style.fillOpacity="0";
        bouton_terrain4.style.fillOpacity="0";
        bouton_terrain5.style.fillOpacity="0";
        bouton_terrain6.style.fillOpacity="0";
        bouton_terrain7.style.fillOpacity="0.3";
        bouton_terrain8.style.fillOpacity="0";
        bouton_terrain9.style.fillOpacity="0";
        bouton_terrain10.style.fillOpacity="0";
        zoneterrain = 7
    }
    else if (terrain7==true) {
        terrain7=false;
        bouton_terrain7.style.fillOpacity="0"
       }
});

bouton_terrain8.addEventListener('click', function() {
    if (terrain8==false) {
        terrain1=false;
        terrain2=false;
        terrain3=false;
        terrain4=false;
        terrain5=false;
        terrain6=false;
        terrain7=false;
        terrain8=true;
        terrain9=false;
        terrain10=false;
        septM=false;
        bouton_septM.style.fill="#589474";
        bouton_terrain1.style.fillOpacity="0";
        bouton_terrain2.style.fillOpacity="0";
        bouton_terrain3.style.fillOpacity="0";
        bouton_terrain4.style.fillOpacity="0";
        bouton_terrain5.style.fillOpacity="0";
        bouton_terrain6.style.fillOpacity="0";
        bouton_terrain7.style.fillOpacity="0";
        bouton_terrain8.style.fillOpacity="0.3";
        bouton_terrain9.style.fillOpacity="0";
        bouton_terrain10.style.fillOpacity="0";
        zoneterrain = 8
    }
    else if (terrain8==true) {
        terrain8=false;
        bouton_terrain8.style.fillOpacity="0"
       }
});

bouton_terrain9.addEventListener('click', function() {
    if (terrain9==false) {
        terrain1=false;
        terrain2=false;
        terrain3=false;
        terrain4=false;
        terrain5=false;
        terrain6=false;
        terrain7=false;
        terrain8=false;
        terrain9=true;
        terrain10=false;
        septM=false;
        bouton_septM.style.fill="#589474";
        bouton_terrain1.style.fillOpacity="0";
        bouton_terrain2.style.fillOpacity="0";
        bouton_terrain3.style.fillOpacity="0";
        bouton_terrain4.style.fillOpacity="0";
        bouton_terrain5.style.fillOpacity="0";
        bouton_terrain6.style.fillOpacity="0";
        bouton_terrain7.style.fillOpacity="0";
        bouton_terrain8.style.fillOpacity="0";
        bouton_terrain9.style.fillOpacity="0.3";
        bouton_terrain10.style.fillOpacity="0";
        zoneterrain = 9
    }
    else if (terrain9==true) {
        terrain9=false;
        bouton_terrain9.style.fillOpacity="0"
       }
});

bouton_terrain10.addEventListener('click', function() {
    if (terrain10==false) {
        terrain1=false;
        terrain2=false;
        terrain3=false;
        terrain4=false;
        terrain5=false;
        terrain6=false;
        terrain7=false;
        terrain8=false;
        terrain9=false;
        terrain10=true;
        septM=false;
        bouton_septM.style.fill="#589474";
        bouton_terrain1.style.fillOpacity="0";
        bouton_terrain2.style.fillOpacity="0";
        bouton_terrain3.style.fillOpacity="0";
        bouton_terrain4.style.fillOpacity="0";
        bouton_terrain5.style.fillOpacity="0";
        bouton_terrain6.style.fillOpacity="0";
        bouton_terrain7.style.fillOpacity="0";
        bouton_terrain8.style.fillOpacity="0";
        bouton_terrain9.style.fillOpacity="0";
        bouton_terrain10.style.fillOpacity="0.3";
        zoneterrain = 10
    }
    else if (terrain10==true) {
        terrain10=false;
        bouton_terrain10.style.fillOpacity="0"
       }
});

bouton_septM.addEventListener('click', function() {
    if (septM==false) {
        terrain1=false;
        terrain2=false;
        terrain3=false;
        terrain4=false;
        terrain5=false;
        terrain6=false;
        terrain7=false;
        terrain8=false;
        terrain9=false;
        terrain10=false;
        septM=true;
        bouton_terrain1.style.fillOpacity="0";
        bouton_terrain2.style.fillOpacity="0";
        bouton_terrain3.style.fillOpacity="0";
        bouton_terrain4.style.fillOpacity="0";
        bouton_terrain5.style.fillOpacity="0";
        bouton_terrain6.style.fillOpacity="0";
        bouton_terrain7.style.fillOpacity="0";
        bouton_terrain8.style.fillOpacity="0";
        bouton_terrain9.style.fillOpacity="0";
        bouton_terrain10.style.fillOpacity="0";
        bouton_septM.style.fill="#F9EB3C";
        bouton_septM.style.stroke="#383338";
        text_septM.style.color="#383338";
        zoneterrain = 77
    }
    else if (septM==true) {
        septM=false;
        bouton_septM.style.fill="#589474";
        text_septM.style.color="#FFFFFF"
        bouton_septM.style.stroke="none"
       }
});