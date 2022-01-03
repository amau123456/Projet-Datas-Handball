//Boutons action type (attaque-défense)
let attaque=true;
let defense=false;

let bouton_Defense = document.getElementById("bouton_Defense");
let bouton_Attaque = document.getElementById("bouton_Attaque");


bouton_Defense.addEventListener('click',function() {
    if ((attaque==true)&&(defense==false)) {
        attaque=false;
        defense=true;
        bouton_Defense.style.backgroundColor="#f9eb3c";
        bouton_Attaque.style.backgroundColor="#FBFBFB";
        
    }   
    }
);

bouton_Attaque.addEventListener('click',function(){
    if ((attaque==false)&&(defense==true)){
        attaque=true;
        defense=false;
        bouton_Defense.style.backgroundColor="#FBFBFB";
        bouton_Attaque.style.backgroundColor="#f9eb3c";
    }
}
);

////Boutons type attaque (Attaque Placée ou Contre-attaque)
let attaque_Placee=true;
let contre_Attaque=false;

let bouton_Attaque_Placee = document.getElementById("bouton_Attaque_Placee");
let bouton_Contre_Attaque = document.getElementById("bouton_Contre_Attaque");
let bouton_Switch = document.getElementById("myonoffswitch");

console.log((attaque_Placee==true)&&(contre_Attaque==false));
bouton_Switch.addEventListener('change',function(e){
    e.preventDefault();
    //alert("hello");
   
    if ((attaque_Placee==true)&&(contre_Attaque==false)){
        attaque_Placee=false;
        contre_Attaque=true;
        bouton_Contre_Attaque.style.backgroundColor="#f9eb3c";
        bouton_Attaque_Placee.style.backgroundColor="#FBFBFB";
    }   
    
    else if ((attaque_Placee==false)&&(contre_Attaque==true)){
        attaque_Placee=true;
        contre_Attaque=false;
        bouton_Contre_Attaque.style.backgroundColor="#FBFBFB";
        bouton_Attaque_Placee.style.backgroundColor="#f9eb3c";
    }
    else {
        alert("Hello");
    }
}
);

