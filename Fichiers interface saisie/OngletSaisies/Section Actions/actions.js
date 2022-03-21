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

//Boutons type attaque (Attaque Placée ou Contre-attaque)
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

//Boutons sanctions 
let carton_jaune=false;
let carton_rouge=false;
let deux_min=false;

let bouton_carton_jaune = document.getElementById("conteneur_carton_jaune");
let bouton_carton_rouge = document.getElementById("conteneur_carton_rouge");
let bouton_2min = document.getElementById("Deux_min");

bouton_carton_jaune.addEventListener('click', function()
{
    if (carton_jaune==false) {
        carton_jaune=true;
        bouton_carton_jaune.style.borderColor="#f9eb3c";
    }
    else if (carton_jaune==true) {
        carton_jaune=false;
        bouton_carton_jaune.style.borderColor="#ffffff"    }

});

bouton_carton_rouge.addEventListener('click', function()
{
    if (carton_rouge==false) {
        carton_rouge=true;
        bouton_carton_rouge.style.borderColor="#f9eb3c";
    }
    else if (carton_rouge==true) {
        carton_rouge=false;
        bouton_carton_rouge.style.borderColor="#ffffff"    }

});


bouton_2min.addEventListener('click', function(){
    if (deux_min==false) {
        deux_min=true;
        bouton_2min.style.backgroundColor="#f9eb3c";

    }
    else if (deux_min==true) {
        deux_min=false;
        bouton_2min.style.backgroundColor="#dcdcdc03";
    }
});

//Boutons faits de jeu - Attaque
let faute_zone=false;
let marche=false;
let reprise_drible=false;
let balle_perdue=false;
let mauvaise_relance=false;
let passage_en_force=false;
let faute_subie=false;
let tir_contre=false;
let deux_min_provoque=false;
let sept_m=false;
let duel_gagne=false;
let relance=false;


let bouton_faute_zone = document.getElementById("faute_zone");
let bouton_marche = document.getElementById("marche");
let bouton_reprise_drible=document.getElementById("reprise_drible");
let bouton_balle_perdue=document.getElementById("balle_perdue");
let bouton_mauvaise_relance=document.getElementById("mauvaise_relance");
let bouton_passage_en_force=document.getElementById("passage_en_force");
let bouton_faute_subie=document.getElementById("faute_subie");
let bouton_tir_contre=document.getElementById("tir_contre");
let bouton_deux_min_provoque=document.getElementById("deux_min_provoque");
let bouton_sept_m=document.getElementById("sept_m");
let bouton_duel_gagne=document.getElementById("duel_gagne");
let bouton_relance=document.getElementById("relance");



bouton_faute_zone.addEventListener('click', function()
{
    if (faute_zone==false) {
        faute_zone=true;
        bouton_faute_zone.style.backgroundColor="#f9eb3c";
        bouton_faute_zone.style.color="#383338"
    }
    else if (faute_zone==true) {
        faute_zone=false;
        bouton_faute_zone.style.backgroundColor="#589474";
        bouton_faute_zone.style.color="#FFFFFF";
       }

});

bouton_marche.addEventListener('click', function()
{
    if (marche==false) {
        marche=true;
        bouton_marche.style.backgroundColor="#f9eb3c";
        bouton_marche.style.color="#383338"
    }
    else if (marche==true) {
        marche=false;
        bouton_marche.style.backgroundColor="#589474";
        bouton_marche.style.color="#FFFFFF";
       }

});

bouton_reprise_drible.addEventListener('click', function()
{
    if (reprise_drible==false) {
        reprise_drible=true;
        bouton_reprise_drible.style.backgroundColor="#f9eb3c";
        bouton_reprise_drible.style.color="#383338"
    }
    else if (reprise_drible==true) {
        reprise_drible=false;
        bouton_reprise_drible.style.backgroundColor="#589474";
        bouton_reprise_drible.style.color="#FFFFFF";
       }

});

bouton_balle_perdue.addEventListener('click', function()
{
    if (balle_perdue==false) {
        balle_perdue=true;
        bouton_balle_perdue.style.backgroundColor="#f9eb3c";
        bouton_balle_perdue.style.color="#383338"
    }
    else if (balle_perdue==true) {
        balle_perdue=false;
        bouton_balle_perdue.style.backgroundColor="#589474";
        bouton_balle_perdue.style.color="#FFFFFF";
       }

});

bouton_mauvaise_relance.addEventListener('click', function()
{
    if (mauvaise_relance==false) {
        mauvaise_relance=true;
        bouton_mauvaise_relance.style.backgroundColor="#f9eb3c";
        bouton_mauvaise_relance.style.color="#383338"
    }
    else if (mauvaise_relance==true) {
        mauvaise_relance=false;
        bouton_mauvaise_relance.style.backgroundColor="#589474";
        bouton_mauvaise_relance.style.color="#FFFFFF";
       }

});

bouton_passage_en_force.addEventListener('click', function()
{
    if (passage_en_force==false) {
        passage_en_force=true;
        bouton_passage_en_force.style.backgroundColor="#f9eb3c";
        bouton_passage_en_force.style.color="#383338"
    }
    else if (passage_en_force==true) {
        passage_en_force=false;
        bouton_passage_en_force.style.backgroundColor="#589474";
        bouton_passage_en_force.style.color="#FFFFFF";
       }

});

bouton_faute_subie.addEventListener('click', function()
{
    if (faute_subie==false) {
        faute_subie=true;
        bouton_faute_subie.style.backgroundColor="#f9eb3c";
        bouton_faute_subie.style.color="#383338"
    }
    else if (faute_subie==true) {
        faute_subie=false;
        bouton_faute_subie.style.backgroundColor="#589474";
        bouton_faute_subie.style.color="#FFFFFF";
       }

});

bouton_tir_contre.addEventListener('click', function()
{
    if (tir_contre==false) {
        tir_contre=true;
        bouton_tir_contre.style.backgroundColor="#f9eb3c";
        bouton_tir_contre.style.color="#383338"
    }
    else if (tir_contre==true) {
        tir_contre=false;
        bouton_tir_contre.style.backgroundColor="#589474";
        bouton_tir_contre.style.color="#FFFFFF";
       }

});

bouton_deux_min_provoque.addEventListener('click', function()
{
    if (deux_min_provoque==false) {
        deux_min_provoque=true;
        bouton_deux_min_provoque.style.backgroundColor="#f9eb3c";
        bouton_deux_min_provoque.style.color="#383338"
    }
    else if (deux_min_provoque==true) {
        deux_min_provoque=false;
        bouton_deux_min_provoque.style.backgroundColor="#589474";
        bouton_deux_min_provoque.style.color="#FFFFFF";
       }

});

bouton_sept_m.addEventListener('click', function()
{
    if (sept_m==false) {
        sept_m=true;
        bouton_sept_m.style.backgroundColor="#f9eb3c";
        bouton_sept_m.style.color="#383338"
    }
    else if (sept_m==true) {
        sept_m=false;
        bouton_sept_m.style.backgroundColor="#589474";
        bouton_sept_m.style.color="#FFFFFF";
       }

});


bouton_duel_gagne.addEventListener('click', function()
{
    if (duel_gagne==false) {
        duel_gagne=true;
        bouton_duel_gagne.style.backgroundColor="#f9eb3c";
        bouton_duel_gagne.style.color="#383338"
    }
    else if (duel_gagne==true) {
        duel_gagne=false;
        bouton_duel_gagne.style.backgroundColor="#589474";
        bouton_duel_gagne.style.color="#FFFFFF";
       }

});


bouton_relance.addEventListener('click', function()
{
    if (relance==false) {
        relance=true;
        bouton_relance.style.backgroundColor="#f9eb3c";
        bouton_relance.style.color="#383338"
    }
    else if (relance==true) {
        relance=false;
        bouton_relance.style.backgroundColor="#589474";
        bouton_relance.style.color="#FFFFFF";
       }

});

//Boutons faits de jeu - Défense
let duel_perdu=false;
let balle_recuperee=false;
let interception=false;

let bouton_faute_zone_d = document.getElementById("faute_zone_d");
let bouton_marche_d = document.getElementById("marche_d");
let bouton_reprise_drible_d=document.getElementById("reprise_drible_d");
let bouton_balle_recuperee_d=document.getElementById("balle_recuperee_d");
let bouton_mauvaise_relance_d=document.getElementById("mauvaise_relance_d");
let bouton_passage_en_force_d=document.getElementById("passage_en_force_d");
let bouton_faute_subie_d=document.getElementById("faute_subie_d");
let bouton_tir_contre_d=document.getElementById("tir_contre_d");
let bouton_interception_d=document.getElementById("interception_d");
let bouton_deux_min_provoque_d=document.getElementById("deux_min_provoque_d");
let bouton_sept_m_d=document.getElementById("sept_m_d");
let bouton_duel_gagne_d=document.getElementById("duel_gagne_d");
let bouton_duel_perdu_d=document.getElementById("duel_perdu_d");
let bouton_relance_d=document.getElementById("relance_d");


bouton_faute_zone_d.addEventListener('click', function()
{
    if (faute_zone==false) {
        faute_zone=true;
        bouton_faute_zone_d.style.backgroundColor="#f9eb3c";
        bouton_faute_zone_d.style.color="#383338"
    }
    else if (faute_zone==true) {
        faute_zone=false;
        bouton_faute_zone_d.style.backgroundColor="#589474";
        bouton_faute_zone_d.style.color="#FFFFFF";
       }

});

bouton_marche_d.addEventListener('click', function()
{
    if (marche==false) {
        marche=true;
        bouton_marche_d.style.backgroundColor="#f9eb3c";
        bouton_marche_d.style.color="#383338"
    }
    else if (marche==true) {
        marche=false;
        bouton_marche_d.style.backgroundColor="#589474";
        bouton_marche_d.style.color="#FFFFFF";
       }

});

bouton_reprise_drible_d.addEventListener('click', function()
{
    if (reprise_drible==false) {
        reprise_drible=true;
        bouton_reprise_drible_d.style.backgroundColor="#f9eb3c";
        bouton_reprise_drible_d.style.color="#383338"
    }
    else if (reprise_drible==true) {
        reprise_drible=false;
        bouton_reprise_drible_d.style.backgroundColor="#589474";
        bouton_reprise_drible_d.style.color="#FFFFFF";
       }

});

bouton_balle_recuperee_d.addEventListener('click', function()
{
    if (balle_recuperee==false) {
        balle_recuperee=true;
        bouton_balle_recuperee_d.style.backgroundColor="#f9eb3c";
        bouton_balle_recuperee_d.style.color="#383338"
    }
    else if (balle_recuperee==true) {
        balle_recuperee=false;
        bouton_balle_recuperee_d.style.backgroundColor="#589474";
        bouton_balle_recuperee_d.style.color="#FFFFFF";
       }

});

bouton_mauvaise_relance_d.addEventListener('click', function()
{
    if (mauvaise_relance==false) {
        mauvaise_relance=true;
        bouton_mauvaise_relance_d.style.backgroundColor="#f9eb3c";
        bouton_mauvaise_relance_d.style.color="#383338"
    }
    else if (mauvaise_relance==true) {
        mauvaise_relance=false;
        bouton_mauvaise_relance_d.style.backgroundColor="#589474";
        bouton_mauvaise_relance_d.style.color="#FFFFFF";
       }

});

bouton_passage_en_force_d.addEventListener('click', function()
{
    if (passage_en_force==false) {
        passage_en_force=true;
        bouton_passage_en_force_d.style.backgroundColor="#f9eb3c";
        bouton_passage_en_force_d.style.color="#383338"
    }
    else if (passage_en_force==true) {
        passage_en_force=false;
        bouton_passage_en_force_d.style.backgroundColor="#589474";
        bouton_passage_en_force_d.style.color="#FFFFFF";
       }

});

bouton_faute_subie_d.addEventListener('click', function()
{
    if (faute_subie==false) {
        faute_subie=true;
        bouton_faute_subie_d.style.backgroundColor="#f9eb3c";
        bouton_faute_subie_d.style.color="#383338"
    }
    else if (faute_subie==true) {
        faute_subie=false;
        bouton_faute_subie_d.style.backgroundColor="#589474";
        bouton_faute_subie_d.style.color="#FFFFFF";
       }

});

bouton_tir_contre_d.addEventListener('click', function()
{
    if (tir_contre==false) {
        tir_contre=true;
        bouton_tir_contre_d.style.backgroundColor="#f9eb3c";
        bouton_tir_contre_d.style.color="#383338"
    }
    else if (tir_contre==true) {
        tir_contre=false;
        bouton_tir_contre_d.style.backgroundColor="#589474";
        bouton_tir_contre_d.style.color="#FFFFFF";
       }

});

bouton_interception_d.addEventListener('click', function()
{
    if (interception==false) {
        interception=true;
        bouton_interception_d.style.backgroundColor="#f9eb3c";
        bouton_interception_d.style.color="#383338"
    }
    else if (interception==true) {
        interception=false;
        bouton_interception_d.style.backgroundColor="#589474";
        bouton_interception_d.style.color="#FFFFFF";
       }

});

bouton_deux_min_provoque_d.addEventListener('click', function()
{
    if (deux_min_provoque==false) {
        deux_min_provoque=true;
        bouton_deux_min_provoque_d.style.backgroundColor="#f9eb3c";
        bouton_deux_min_provoque_d.style.color="#383338"
    }
    else if (deux_min_provoque==true) {
        deux_min_provoque=false;
        bouton_deux_min_provoque_d.style.backgroundColor="#589474";
        bouton_deux_min_provoque_d.style.color="#FFFFFF";
       }

});

bouton_sept_m_d.addEventListener('click', function()
{
    if (sept_m==false) {
        sept_m=true;
        bouton_sept_m_d.style.backgroundColor="#f9eb3c";
        bouton_sept_m_d.style.color="#383338"
    }
    else if (sept_m==true) {
        sept_m=false;
        bouton_sept_m_d.style.backgroundColor="#589474";
        bouton_sept_m_d.style.color="#FFFFFF";
       }

});


bouton_duel_gagne_d.addEventListener('click', function()
{
    if (duel_gagne==false) {
        duel_gagne=true;
        bouton_duel_gagne_d.style.backgroundColor="#f9eb3c";
        bouton_duel_gagne_d.style.color="#383338"
    }
    else if (duel_gagne==true) {
        duel_gagne=false;
        bouton_duel_gagne_d.style.backgroundColor="#589474";
        bouton_duel_gagne_d.style.color="#FFFFFF";
       }

});

bouton_duel_perdu_d.addEventListener('click', function()
{
    if (duel_perdu==false) {
        duel_perdu=true;
        bouton_duel_perdu_d.style.backgroundColor="#f9eb3c";
        bouton_duel_perdu_d.style.color="#383338"
    }
    else if (duel_perdu==true) {
        duel_perdu=false;
        bouton_duel_perdu_d.style.backgroundColor="#589474";
        bouton_duel_perdu_d.style.color="#FFFFFF";
       }

});

bouton_relance_d.addEventListener('click', function()
{
    if (relance==false) {
        relance=true;
        bouton_relance_d.style.backgroundColor="#f9eb3c";
        bouton_relance_d.style.color="#383338"
    }
    else if (relance==true) {
        relance=false;
        bouton_relance_d.style.backgroundColor="#589474";
        bouton_relance_d.style.color="#FFFFFF";
       }

});


//Afficher les groupes de boutons de saisies différents (attaque/défense/gardiennes)

bouton_Defense.addEventListener('click',function (){
    document.getElementById("Boutons_saisies").style.display = 'none';
    document.getElementById("Boutons_saisies_defense").style.display = 'flex';
});

bouton_Attaque.addEventListener('click',function(){
    document.getElementById("Boutons_saisies").style.display = 'flex';
    document.getElementById("Boutons_saisies_defense").style.display = 'none';
    
})