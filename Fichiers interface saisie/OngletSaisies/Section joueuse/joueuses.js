// Boutons joueuses 

let joueuse_1 = false;
/*let joueuse_2 = false;
let joueuse_3 = false;
let joueuse_4 = false;
let joueuse_5 = false;
let joueuse_6 = false;
let joueuse_7 = false;
let joueuse_8 = false;
let joueuse_9 = false;
let joueuse_10 = false;
let joueuse_11 = false;
let joueuse_12 = false;*/
let gardienne_1 = false;
let gardienne_2 = false;


let bouton_joueuse_1 = document.getElementById("joueuse_1");
/*let bouton_joueuse_2 = document.getElementById("joueuse_2");
let bouton_joueuse_3 = document.getElementById("joueuse_3");
let bouton_joueuse_4 = document.getElementById("joueuse_4");
let bouton_joueuse_5 = document.getElementById("joueuse_5");
let bouton_joueuse_6 = document.getElementById("joueuse_6");
let bouton_joueuse_7 = document.getElementById("joueuse_7");
let bouton_joueuse_8 = document.getElementById("joueuse_8");
let bouton_joueuse_9 = document.getElementById("joueuse_9");
let bouton_joueuse_10 = document.getElementById("joueuse_10");
let bouton_joueuse_11 = document.getElementById("joueuse_11");
let bouton_joueuse_12 = document.getElementById("joueuse_12");*/
let bouton_gardienne_1 = document.getElementById("gardienne_1");

bouton_joueuse_1.addEventListener('click', function() {
    if (joueuse_1==false) {
        joueuse_1=true;
        bouton_joueuse_1.style.backgroundColor="#f9eb3c";
        bouton_joueuse_1.style.color="#383338";
        bouton_joueuse_1.style.border="2px solid #383338";
    }
    else if (joueuse_1==true) {
        joueuse_1=false;
        bouton_joueuse_1.style.backgroundColor="#f9eb3c";
        bouton_joueuse_1.style.color="#383338";
        bouton_joueuse_1.style.border="none";
        
       }

});   

bouton_gardienne_1.addEventListener('click', function() {
    if (gardienne_1==false) {
        gardienne_1=true;
        bouton_gardienne_1.style.backgroundColor="#383338";
        bouton_gardienne_1.style.color="#f9eb3c";
        bouton_gardienne_1.style.border="2px solid #f9eb3c";
    }
    else if (gardienne_1==true) {
        gardienne_1=false;
        bouton_gardienne_1.style.backgroundColor="#383338";
        bouton_gardienne_1.style.color="#FFFFFF";
        bouton_gardienne_1.style.border="none";
        
       }

});  