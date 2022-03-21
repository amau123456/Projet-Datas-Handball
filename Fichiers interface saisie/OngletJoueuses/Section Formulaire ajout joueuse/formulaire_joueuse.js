//Boutons domicile-exterieur (Attaque Placée ou Contre-attaque)
let domicile=true;
let exterieur=false;

let bouton_domicile = document.getElementById("bouton_domicile");
let bouton_exterieur = document.getElementById("bouton_exterieur");
let bouton_Switch = document.getElementById("myonoffswitch");

console.log((domicile==true)&&(exterieur==false));
bouton_Switch.addEventListener('change',function(e){
    e.preventDefault();
    
   
    if ((domicile==true)&&(exterieur==false)){
        domicile=false;
        exterieur=true;
        bouton_exterieur.style.backgroundColor="#f9eb3c";
        bouton_domicile.style.backgroundColor="#FBFBFB";
    }   
    
    else if ((domicile==false)&&(exterieur==true)){
        domicile=true;
        exterieur=false;
        bouton_exterieur.style.backgroundColor="#FBFBFB";
        bouton_domicile.style.backgroundColor="#f9eb3c";
    }
    else {
        alert("Hello");
    }
}
);
