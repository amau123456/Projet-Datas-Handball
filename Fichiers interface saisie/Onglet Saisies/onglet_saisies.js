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

//Code JS partie sélection joueuses --------------------------
//Afficher les groupes de boutons de saisies différents (attaque/défense/gardiennes)

bouton_Defense.addEventListener('click',function (){
    document.getElementById("Boutons_saisies").style.display = 'none';
    document.getElementById("Boutons_saisies_defense").style.display = 'flex';
});

bouton_Attaque.addEventListener('click',function(){
    document.getElementById("Boutons_saisies").style.display = 'flex';
    document.getElementById("Boutons_saisies_defense").style.display = 'none';
    
})



// Boutons joueuses 

let joueuse_1 = false;
let joueuse_2 = false;
let joueuse_3 = false;
let joueuse_4 = false;
let joueuse_5 = false;
let joueuse_6 = false;
let joueuse_7 = false;
let joueuse_8 = false;
let joueuse_9 = false;
let joueuse_10 = false;
let joueuse_11 = false;
let joueuse_12 = false;
let gardienne_1 = false;
let gardienne_2 = false;


let bouton_joueuse_1 = document.getElementById("joueuse_1");
let bouton_joueuse_2 = document.getElementById("joueuse_2");
let bouton_joueuse_3 = document.getElementById("joueuse_3");
let bouton_joueuse_4 = document.getElementById("joueuse_4");
let bouton_joueuse_5 = document.getElementById("joueuse_5");
let bouton_joueuse_6 = document.getElementById("joueuse_6");
let bouton_joueuse_7 = document.getElementById("joueuse_7");
let bouton_joueuse_8 = document.getElementById("joueuse_8");
let bouton_joueuse_9 = document.getElementById("joueuse_9");
let bouton_joueuse_10 = document.getElementById("joueuse_10");
let bouton_joueuse_11 = document.getElementById("joueuse_11");
let bouton_joueuse_12 = document.getElementById("joueuse_12");
let bouton_gardienne_1 = document.getElementById("gardienne_1");
let bouton_gardienne_2 = document.getElementById("gardienne_2");


//Boutons joueuses 

bouton_joueuse_1.addEventListener('click', function() {
    if (joueuse_1==false) {
        joueuse_1=true;
        bouton_joueuse_1.style.backgroundColor="#f9eb3c";
        bouton_joueuse_1.style.color="#05602F";
        bouton_joueuse_1.style.border="2px solid #05602F";

         bouton_joueuse_2.style.backgroundColor="#f9eb3c";
        bouton_joueuse_2.style.color="#383338";
        bouton_joueuse_2.style.border="none";
        joueuse_2=false;

        bouton_joueuse_3.style.backgroundColor="#f9eb3c";
        bouton_joueuse_3.style.color="#383338";
        bouton_joueuse_3.style.border="none";
        joueuse_3=false; 

        bouton_joueuse_4.style.backgroundColor="#f9eb3c";
        bouton_joueuse_4.style.color="#383338";
        bouton_joueuse_4.style.border="none";
        joueuse_4=false;

        bouton_joueuse_5.style.backgroundColor="#f9eb3c";
        bouton_joueuse_5.style.color="#383338";
        bouton_joueuse_5.style.border="none";
        joueuse_5=false;

        bouton_joueuse_6.style.backgroundColor="#f9eb3c";
        bouton_joueuse_6.style.color="#383338";
        bouton_joueuse_6.style.border="none";
        joueuse_6=false;

        bouton_joueuse_7.style.backgroundColor="#f9eb3c";
        bouton_joueuse_7.style.color="#383338";
        bouton_joueuse_7.style.border="none";
        joueuse_7=false;

        bouton_joueuse_8.style.backgroundColor="#f9eb3c";
        bouton_joueuse_8.style.color="#383338";
        bouton_joueuse_8.style.border="none";
        joueuse_8=false;

        bouton_joueuse_9.style.backgroundColor="#f9eb3c";
        bouton_joueuse_9.style.color="#383338";
        bouton_joueuse_9.style.border="none";
        joueuse_9=false;

        bouton_joueuse_10.style.backgroundColor="#f9eb3c";
        bouton_joueuse_10.style.color="#383338";
        bouton_joueuse_10.style.border="none";
        joueuse_10=false;

        bouton_joueuse_11.style.backgroundColor="#f9eb3c";
        bouton_joueuse_11.style.color="#383338";
        bouton_joueuse_11.style.border="none";
        joueuse_11=false;

        bouton_joueuse_12.style.backgroundColor="#f9eb3c";
        bouton_joueuse_12.style.color="#383338";
        bouton_joueuse_12.style.border="none";
        joueuse_12=false;

        bouton_gardienne_1.style.backgroundColor="#383338";
        bouton_gardienne_1.style.color="#FFFFFF";
        bouton_gardienne_1.style.border="none";
        gardienne_1=false;

        bouton_gardienne_2.style.backgroundColor="#383338";
        bouton_gardienne_2.style.color="#FFFFFF";
        bouton_gardienne_2.style.border="none";
        gardienne_2=false;

    }
    else if (joueuse_1==true) {
        joueuse_1=false;
        bouton_joueuse_1.style.backgroundColor="#f9eb3c";
        bouton_joueuse_1.style.color="#383338";
        bouton_joueuse_1.style.border="none";
        
       }

});   

bouton_joueuse_2.addEventListener('click', function() {
    if (joueuse_2==false) {
        joueuse_2=true;
        bouton_joueuse_2.style.backgroundColor="#f9eb3c";
        bouton_joueuse_2.style.color="#05602F";
        bouton_joueuse_2.style.border="2px solid #05602F";

        bouton_joueuse_1.style.backgroundColor="#f9eb3c";
        bouton_joueuse_1.style.color="#383338";
        bouton_joueuse_1.style.border="none";
        joueuse_1=false;

        bouton_joueuse_3.style.backgroundColor="#f9eb3c";
        bouton_joueuse_3.style.color="#383338";
        bouton_joueuse_3.style.border="none";
        joueuse_3=false;

        bouton_joueuse_4.style.backgroundColor="#f9eb3c";
        bouton_joueuse_4.style.color="#383338";
        bouton_joueuse_4.style.border="none";
        joueuse_4=false;

        bouton_joueuse_5.style.backgroundColor="#f9eb3c";
        bouton_joueuse_5.style.color="#383338";
        bouton_joueuse_5.style.border="none";
        joueuse_5=false;

        bouton_joueuse_6.style.backgroundColor="#f9eb3c";
        bouton_joueuse_6.style.color="#383338";
        bouton_joueuse_6.style.border="none";
        joueuse_6=false;

        bouton_joueuse_7.style.backgroundColor="#f9eb3c";
        bouton_joueuse_7.style.color="#383338";
        bouton_joueuse_7.style.border="none";
        joueuse_7=false;

        bouton_joueuse_8.style.backgroundColor="#f9eb3c";
        bouton_joueuse_8.style.color="#383338";
        bouton_joueuse_8.style.border="none";
        joueuse_8=false;

        bouton_joueuse_9.style.backgroundColor="#f9eb3c";
        bouton_joueuse_9.style.color="#383338";
        bouton_joueuse_9.style.border="none";
        joueuse_9=false;

        bouton_joueuse_10.style.backgroundColor="#f9eb3c";
        bouton_joueuse_10.style.color="#383338";
        bouton_joueuse_10.style.border="none";
        joueuse_10=false;

        bouton_joueuse_11.style.backgroundColor="#f9eb3c";
        bouton_joueuse_11.style.color="#383338";
        bouton_joueuse_11.style.border="none";
        joueuse_11=false;

        bouton_joueuse_12.style.backgroundColor="#f9eb3c";
        bouton_joueuse_12.style.color="#383338";
        bouton_joueuse_12.style.border="none";
        joueuse_12=false;

        bouton_gardienne_1.style.backgroundColor="#383338";
        bouton_gardienne_1.style.color="#FFFFFF";
        bouton_gardienne_1.style.border="none";
        gardienne_1=false;

        bouton_gardienne_2.style.backgroundColor="#383338";
        bouton_gardienne_2.style.color="#FFFFFF";
        bouton_gardienne_2.style.border="none";
        gardienne_2=false;

    }
    else if (joueuse_2==true) {
        joueuse_2=false;
        bouton_joueuse_2.style.backgroundColor="#f9eb3c";
        bouton_joueuse_2.style.color="#383338";
        bouton_joueuse_2.style.border="none";
        
       }

});    

bouton_joueuse_3.addEventListener('click', function() {
    if (joueuse_3==false) {
        joueuse_3=true;
        bouton_joueuse_3.style.backgroundColor="#f9eb3c";
        bouton_joueuse_3.style.color="#05602F";
        bouton_joueuse_3.style.border="2px solid #05602F";

        bouton_joueuse_2.style.backgroundColor="#f9eb3c";
        bouton_joueuse_2.style.color="#383338";
        bouton_joueuse_2.style.border="none";
        joueuse_2=false;

        bouton_joueuse_1.style.backgroundColor="#f9eb3c";
        bouton_joueuse_1.style.color="#383338";
        bouton_joueuse_1.style.border="none";
        joueuse_1=false;

        bouton_joueuse_4.style.backgroundColor="#f9eb3c";
        bouton_joueuse_4.style.color="#383338";
        bouton_joueuse_4.style.border="none";
        joueuse_4=false;

        bouton_joueuse_5.style.backgroundColor="#f9eb3c";
        bouton_joueuse_5.style.color="#383338";
        bouton_joueuse_5.style.border="none";
        joueuse_5=false;

        bouton_joueuse_6.style.backgroundColor="#f9eb3c";
        bouton_joueuse_6.style.color="#383338";
        bouton_joueuse_6.style.border="none";
        joueuse_6=false;

        bouton_joueuse_7.style.backgroundColor="#f9eb3c";
        bouton_joueuse_7.style.color="#383338";
        bouton_joueuse_7.style.border="none";
        joueuse_7=false;

        bouton_joueuse_8.style.backgroundColor="#f9eb3c";
        bouton_joueuse_8.style.color="#383338";
        bouton_joueuse_8.style.border="none";
        joueuse_8=false;

        bouton_joueuse_9.style.backgroundColor="#f9eb3c";
        bouton_joueuse_9.style.color="#383338";
        bouton_joueuse_9.style.border="none";
        joueuse_9=false;

        bouton_joueuse_10.style.backgroundColor="#f9eb3c";
        bouton_joueuse_10.style.color="#383338";
        bouton_joueuse_10.style.border="none";
        joueuse_10=false;

        bouton_joueuse_11.style.backgroundColor="#f9eb3c";
        bouton_joueuse_11.style.color="#383338";
        bouton_joueuse_11.style.border="none";
        joueuse_11=false;

        bouton_joueuse_12.style.backgroundColor="#f9eb3c";
        bouton_joueuse_12.style.color="#383338";
        bouton_joueuse_12.style.border="none";
        joueuse_12=false;

        bouton_gardienne_1.style.backgroundColor="#383338";
        bouton_gardienne_1.style.color="#FFFFFF";
        bouton_gardienne_1.style.border="none";
        gardienne_1=false;

        bouton_gardienne_2.style.backgroundColor="#383338";
        bouton_gardienne_2.style.color="#FFFFFF";
        bouton_gardienne_2.style.border="none";
        gardienne_2=false;



    }
    else if (joueuse_3==true) {
        joueuse_3=false;
        bouton_joueuse_3.style.backgroundColor="#f9eb3c";
        bouton_joueuse_3.style.color="#383338";
        bouton_joueuse_3.style.border="none";
        
       }

});  

bouton_joueuse_4.addEventListener('click', function() {
    if (joueuse_4==false) {
        joueuse_4=true;
        bouton_joueuse_4.style.backgroundColor="#f9eb3c";
        bouton_joueuse_4.style.color="#05602F";
        bouton_joueuse_4.style.border="2px solid #05602F";

        bouton_joueuse_2.style.backgroundColor="#f9eb3c";
        bouton_joueuse_2.style.color="#383338";
        bouton_joueuse_2.style.border="none";
        joueuse_2=false;

        bouton_joueuse_1.style.backgroundColor="#f9eb3c";
        bouton_joueuse_1.style.color="#383338";
        bouton_joueuse_1.style.border="none";
        joueuse_1=false;

        bouton_joueuse_3.style.backgroundColor="#f9eb3c";
        bouton_joueuse_3.style.color="#383338";
        bouton_joueuse_3.style.border="none";
        joueuse_3=false;

        bouton_joueuse_5.style.backgroundColor="#f9eb3c";
        bouton_joueuse_5.style.color="#383338";
        bouton_joueuse_5.style.border="none";
        joueuse_5=false;

        bouton_joueuse_6.style.backgroundColor="#f9eb3c";
        bouton_joueuse_6.style.color="#383338";
        bouton_joueuse_6.style.border="none";
        joueuse_6=false;

        bouton_joueuse_7.style.backgroundColor="#f9eb3c";
        bouton_joueuse_7.style.color="#383338";
        bouton_joueuse_7.style.border="none";
        joueuse_7=false;

        bouton_joueuse_8.style.backgroundColor="#f9eb3c";
        bouton_joueuse_8.style.color="#383338";
        bouton_joueuse_8.style.border="none";
        joueuse_8=false;

        bouton_joueuse_9.style.backgroundColor="#f9eb3c";
        bouton_joueuse_9.style.color="#383338";
        bouton_joueuse_9.style.border="none";
        joueuse_9=false;

        bouton_joueuse_10.style.backgroundColor="#f9eb3c";
        bouton_joueuse_10.style.color="#383338";
        bouton_joueuse_10.style.border="none";
        joueuse_10=false;

        bouton_joueuse_11.style.backgroundColor="#f9eb3c";
        bouton_joueuse_11.style.color="#383338";
        bouton_joueuse_11.style.border="none";
        joueuse_11=false;

        bouton_joueuse_12.style.backgroundColor="#f9eb3c";
        bouton_joueuse_12.style.color="#383338";
        bouton_joueuse_12.style.border="none";
        joueuse_12=false;

        bouton_gardienne_1.style.backgroundColor="#383338";
        bouton_gardienne_1.style.color="#FFFFFF";
        bouton_gardienne_1.style.border="none";
        gardienne_1=false;

        bouton_gardienne_2.style.backgroundColor="#383338";
        bouton_gardienne_2.style.color="#FFFFFF";
        bouton_gardienne_2.style.border="none";
        gardienne_2=false;


    }
    else if (joueuse_4==true) {
        joueuse_4=false;
        bouton_joueuse_4.style.backgroundColor="#f9eb3c";
        bouton_joueuse_4.style.color="#383338";
        bouton_joueuse_4.style.border="none";
        
       }

});  

bouton_joueuse_5.addEventListener('click', function() {
    if (joueuse_5==false) {
        joueuse_5=true;
        bouton_joueuse_5.style.backgroundColor="#f9eb3c";
        bouton_joueuse_5.style.color="#05602F";
        bouton_joueuse_5.style.border="2px solid #05602F";

        bouton_joueuse_2.style.backgroundColor="#f9eb3c";
        bouton_joueuse_2.style.color="#383338";
        bouton_joueuse_2.style.border="none";
        joueuse_2=false;

        bouton_joueuse_1.style.backgroundColor="#f9eb3c";
        bouton_joueuse_1.style.color="#383338";
        bouton_joueuse_1.style.border="none";
        joueuse_1=false;

        bouton_joueuse_4.style.backgroundColor="#f9eb3c";
        bouton_joueuse_4.style.color="#383338";
        bouton_joueuse_4.style.border="none";
        joueuse_4=false;

        bouton_joueuse_3.style.backgroundColor="#f9eb3c";
        bouton_joueuse_3.style.color="#383338";
        bouton_joueuse_3.style.border="none";
        joueuse_3=false;

        bouton_joueuse_6.style.backgroundColor="#f9eb3c";
        bouton_joueuse_6.style.color="#383338";
        bouton_joueuse_6.style.border="none";
        joueuse_6=false;

        bouton_joueuse_7.style.backgroundColor="#f9eb3c";
        bouton_joueuse_7.style.color="#383338";
        bouton_joueuse_7.style.border="none";
        joueuse_7=false;

        bouton_joueuse_8.style.backgroundColor="#f9eb3c";
        bouton_joueuse_8.style.color="#383338";
        bouton_joueuse_8.style.border="none";
        joueuse_8=false;

        bouton_joueuse_9.style.backgroundColor="#f9eb3c";
        bouton_joueuse_9.style.color="#383338";
        bouton_joueuse_9.style.border="none";
        joueuse_9=false;

        bouton_joueuse_10.style.backgroundColor="#f9eb3c";
        bouton_joueuse_10.style.color="#383338";
        bouton_joueuse_10.style.border="none";
        joueuse_10=false;

        bouton_joueuse_11.style.backgroundColor="#f9eb3c";
        bouton_joueuse_11.style.color="#383338";
        bouton_joueuse_11.style.border="none";
        joueuse_11=false;

        bouton_joueuse_12.style.backgroundColor="#f9eb3c";
        bouton_joueuse_12.style.color="#383338";
        bouton_joueuse_12.style.border="none";
        joueuse_12=false;

        bouton_gardienne_1.style.backgroundColor="#383338";
        bouton_gardienne_1.style.color="#FFFFFF";
        bouton_gardienne_1.style.border="none";
        gardienne_1=false;

        bouton_gardienne_2.style.backgroundColor="#383338";
        bouton_gardienne_2.style.color="#FFFFFF";
        bouton_gardienne_2.style.border="none";
        gardienne_2=false;


    }
    else if (joueuse_5==true) {
        joueuse_5=false;
        bouton_joueuse_5.style.backgroundColor="#f9eb3c";
        bouton_joueuse_5.style.color="#383338";
        bouton_joueuse_5.style.border="none";
        
       }

});  

bouton_joueuse_6.addEventListener('click', function() {
    if (joueuse_6==false) {
        joueuse_6=true;
        bouton_joueuse_6.style.backgroundColor="#f9eb3c";
        bouton_joueuse_6.style.color="#05602F";
        bouton_joueuse_6.style.border="2px solid #05602F";

        bouton_joueuse_2.style.backgroundColor="#f9eb3c";
        bouton_joueuse_2.style.color="#383338";
        bouton_joueuse_2.style.border="none";
        joueuse_2=false;

        bouton_joueuse_1.style.backgroundColor="#f9eb3c";
        bouton_joueuse_1.style.color="#383338";
        bouton_joueuse_1.style.border="none";
        joueuse_1=false;

        bouton_joueuse_4.style.backgroundColor="#f9eb3c";
        bouton_joueuse_4.style.color="#383338";
        bouton_joueuse_4.style.border="none";
        joueuse_4=false;

        bouton_joueuse_5.style.backgroundColor="#f9eb3c";
        bouton_joueuse_5.style.color="#383338";
        bouton_joueuse_5.style.border="none";
        joueuse_5=false;

        bouton_joueuse_3.style.backgroundColor="#f9eb3c";
        bouton_joueuse_3.style.color="#383338";
        bouton_joueuse_3.style.border="none";
        joueuse_3=false;

        bouton_joueuse_7.style.backgroundColor="#f9eb3c";
        bouton_joueuse_7.style.color="#383338";
        bouton_joueuse_7.style.border="none";
        joueuse_7=false;

        bouton_joueuse_8.style.backgroundColor="#f9eb3c";
        bouton_joueuse_8.style.color="#383338";
        bouton_joueuse_8.style.border="none";
        joueuse_8=false;

        bouton_joueuse_9.style.backgroundColor="#f9eb3c";
        bouton_joueuse_9.style.color="#383338";
        bouton_joueuse_9.style.border="none";
        joueuse_9=false;

        bouton_joueuse_10.style.backgroundColor="#f9eb3c";
        bouton_joueuse_10.style.color="#383338";
        bouton_joueuse_10.style.border="none";
        joueuse_10=false;

        bouton_joueuse_11.style.backgroundColor="#f9eb3c";
        bouton_joueuse_11.style.color="#383338";
        bouton_joueuse_11.style.border="none";
        joueuse_11=false;

        bouton_joueuse_12.style.backgroundColor="#f9eb3c";
        bouton_joueuse_12.style.color="#383338";
        bouton_joueuse_12.style.border="none";
        joueuse_12=false;

        bouton_gardienne_1.style.backgroundColor="#383338";
        bouton_gardienne_1.style.color="#FFFFFF";
        bouton_gardienne_1.style.border="none";
        gardienne_1=false;

        bouton_gardienne_2.style.backgroundColor="#383338";
        bouton_gardienne_2.style.color="#FFFFFF";
        bouton_gardienne_2.style.border="none";
        gardienne_2=false;


    }
    else if (joueuse_6==true) {
        joueuse_6=false;
        bouton_joueuse_6.style.backgroundColor="#f9eb3c";
        bouton_joueuse_6.style.color="#383338";
        bouton_joueuse_6.style.border="none";
        
       }

});  

bouton_joueuse_7.addEventListener('click', function() {
    if (joueuse_7==false) {
        joueuse_7=true;
        bouton_joueuse_7.style.backgroundColor="#f9eb3c";
        bouton_joueuse_7.style.color="#05602F";
        bouton_joueuse_7.style.border="2px solid #05602F";

        bouton_joueuse_2.style.backgroundColor="#f9eb3c";
        bouton_joueuse_2.style.color="#383338";
        bouton_joueuse_2.style.border="none";
        joueuse_2=false;

        bouton_joueuse_1.style.backgroundColor="#f9eb3c";
        bouton_joueuse_1.style.color="#383338";
        bouton_joueuse_1.style.border="none";
        joueuse_1=false;

        bouton_joueuse_4.style.backgroundColor="#f9eb3c";
        bouton_joueuse_4.style.color="#383338";
        bouton_joueuse_4.style.border="none";
        joueuse_4=false;

        bouton_joueuse_5.style.backgroundColor="#f9eb3c";
        bouton_joueuse_5.style.color="#383338";
        bouton_joueuse_5.style.border="none";
        joueuse_5=false;

        bouton_joueuse_6.style.backgroundColor="#f9eb3c";
        bouton_joueuse_6.style.color="#383338";
        bouton_joueuse_6.style.border="none";
        joueuse_6=false;

        bouton_joueuse_3.style.backgroundColor="#f9eb3c";
        bouton_joueuse_3.style.color="#383338";
        bouton_joueuse_3.style.border="none";
        joueuse_3=false;

        bouton_joueuse_8.style.backgroundColor="#f9eb3c";
        bouton_joueuse_8.style.color="#383338";
        bouton_joueuse_8.style.border="none";
        joueuse_8=false;

        bouton_joueuse_9.style.backgroundColor="#f9eb3c";
        bouton_joueuse_9.style.color="#383338";
        bouton_joueuse_9.style.border="none";
        joueuse_9=false;

        bouton_joueuse_10.style.backgroundColor="#f9eb3c";
        bouton_joueuse_10.style.color="#383338";
        bouton_joueuse_10.style.border="none";
        joueuse_10=false;

        bouton_joueuse_11.style.backgroundColor="#f9eb3c";
        bouton_joueuse_11.style.color="#383338";
        bouton_joueuse_11.style.border="none";
        joueuse_11=false;

        bouton_joueuse_12.style.backgroundColor="#f9eb3c";
        bouton_joueuse_12.style.color="#383338";
        bouton_joueuse_12.style.border="none";
        joueuse_12=false;

        bouton_gardienne_1.style.backgroundColor="#383338";
        bouton_gardienne_1.style.color="#FFFFFF";
        bouton_gardienne_1.style.border="none";
        gardienne_1=false;

        bouton_gardienne_2.style.backgroundColor="#383338";
        bouton_gardienne_2.style.color="#FFFFFF";
        bouton_gardienne_2.style.border="none";
        gardienne_2=false;

    }
    else if (joueuse_7==true) {
        joueuse_7=false;
        bouton_joueuse_7.style.backgroundColor="#f9eb3c";
        bouton_joueuse_7.style.color="#383338";
        bouton_joueuse_7.style.border="none";
        
       }

});  

bouton_joueuse_8.addEventListener('click', function() {
    if (joueuse_8==false) {
        joueuse_8=true;
        bouton_joueuse_8.style.backgroundColor="#f9eb3c";
        bouton_joueuse_8.style.color="#05602F";
        bouton_joueuse_8.style.border="2px solid #05602F";

        bouton_joueuse_2.style.backgroundColor="#f9eb3c";
        bouton_joueuse_2.style.color="#383338";
        bouton_joueuse_2.style.border="none";
        joueuse_2=false;

        bouton_joueuse_1.style.backgroundColor="#f9eb3c";
        bouton_joueuse_1.style.color="#383338";
        bouton_joueuse_1.style.border="none";
        joueuse_1=false;

        bouton_joueuse_4.style.backgroundColor="#f9eb3c";
        bouton_joueuse_4.style.color="#383338";
        bouton_joueuse_4.style.border="none";
        joueuse_4=false;

        bouton_joueuse_5.style.backgroundColor="#f9eb3c";
        bouton_joueuse_5.style.color="#383338";
        bouton_joueuse_5.style.border="none";
        joueuse_5=false;

        bouton_joueuse_6.style.backgroundColor="#f9eb3c";
        bouton_joueuse_6.style.color="#383338";
        bouton_joueuse_6.style.border="none";
        joueuse_6=false;

        bouton_joueuse_7.style.backgroundColor="#f9eb3c";
        bouton_joueuse_7.style.color="#383338";
        bouton_joueuse_7.style.border="none";
        joueuse_8=false;

        bouton_joueuse_3.style.backgroundColor="#f9eb3c";
        bouton_joueuse_3.style.color="#383338";
        bouton_joueuse_3.style.border="none";
        joueuse_3=false;

        bouton_joueuse_9.style.backgroundColor="#f9eb3c";
        bouton_joueuse_9.style.color="#383338";
        bouton_joueuse_9.style.border="none";
        joueuse_9=false;

        bouton_joueuse_10.style.backgroundColor="#f9eb3c";
        bouton_joueuse_10.style.color="#383338";
        bouton_joueuse_10.style.border="none";
        joueuse_10=false;

        bouton_joueuse_11.style.backgroundColor="#f9eb3c";
        bouton_joueuse_11.style.color="#383338";
        bouton_joueuse_11.style.border="none";
        joueuse_11=false;

        bouton_joueuse_12.style.backgroundColor="#f9eb3c";
        bouton_joueuse_12.style.color="#383338";
        bouton_joueuse_12.style.border="none";
        joueuse_12=false;

        bouton_gardienne_1.style.backgroundColor="#383338";
        bouton_gardienne_1.style.color="#FFFFFF";
        bouton_gardienne_1.style.border="none";
        gardienne_1=false;

        bouton_gardienne_2.style.backgroundColor="#383338";
        bouton_gardienne_2.style.color="#FFFFFF";
        bouton_gardienne_2.style.border="none";
        gardienne_2=false;


    }
    else if (joueuse_8==true) {
        joueuse_8=false;
        bouton_joueuse_8.style.backgroundColor="#f9eb3c";
        bouton_joueuse_8.style.color="#383338";
        bouton_joueuse_8.style.border="none";
        
       }

});  

bouton_joueuse_9.addEventListener('click', function() {
    if (joueuse_9==false) {
        joueuse_9=true;
        bouton_joueuse_9.style.backgroundColor="#f9eb3c";
        bouton_joueuse_9.style.color="#05602F";
        bouton_joueuse_9.style.border="2px solid #05602F";

        bouton_joueuse_2.style.backgroundColor="#f9eb3c";
        bouton_joueuse_2.style.color="#383338";
        bouton_joueuse_2.style.border="none";
        joueuse_2=false;

        bouton_joueuse_1.style.backgroundColor="#f9eb3c";
        bouton_joueuse_1.style.color="#383338";
        bouton_joueuse_1.style.border="none";
        joueuse_1=false;

        bouton_joueuse_4.style.backgroundColor="#f9eb3c";
        bouton_joueuse_4.style.color="#383338";
        bouton_joueuse_4.style.border="none";
        joueuse_4=false;

        bouton_joueuse_5.style.backgroundColor="#f9eb3c";
        bouton_joueuse_5.style.color="#383338";
        bouton_joueuse_5.style.border="none";
        joueuse_5=false;

        bouton_joueuse_6.style.backgroundColor="#f9eb3c";
        bouton_joueuse_6.style.color="#383338";
        bouton_joueuse_6.style.border="none";
        joueuse_6=false;

        bouton_joueuse_7.style.backgroundColor="#f9eb3c";
        bouton_joueuse_7.style.color="#383338";
        bouton_joueuse_7.style.border="none";
        joueuse_8=false;

        bouton_joueuse_8.style.backgroundColor="#f9eb3c";
        bouton_joueuse_8.style.color="#383338";
        bouton_joueuse_8.style.border="none";
        joueuse_8=false;

        bouton_joueuse_3.style.backgroundColor="#f9eb3c";
        bouton_joueuse_3.style.color="#383338";
        bouton_joueuse_3.style.border="none";
        joueuse_3=false;

        bouton_joueuse_10.style.backgroundColor="#f9eb3c";
        bouton_joueuse_10.style.color="#383338";
        bouton_joueuse_10.style.border="none";
        joueuse_10=false;

        bouton_joueuse_11.style.backgroundColor="#f9eb3c";
        bouton_joueuse_11.style.color="#383338";
        bouton_joueuse_11.style.border="none";
        joueuse_11=false;

        bouton_joueuse_12.style.backgroundColor="#f9eb3c";
        bouton_joueuse_12.style.color="#383338";
        bouton_joueuse_12.style.border="none";
        joueuse_12=false;

        bouton_gardienne_1.style.backgroundColor="#383338";
        bouton_gardienne_1.style.color="#FFFFFF";
        bouton_gardienne_1.style.border="none";
        gardienne_1=false;

        bouton_gardienne_2.style.backgroundColor="#383338";
        bouton_gardienne_2.style.color="#FFFFFF";
        bouton_gardienne_2.style.border="none";
        gardienne_2=false;

    }
    else if (joueuse_9==true) {
        joueuse_9=false;
        bouton_joueuse_9.style.backgroundColor="#f9eb3c";
        bouton_joueuse_9.style.color="#383338";
        bouton_joueuse_9.style.border="none";
        
       }

});  

bouton_joueuse_10.addEventListener('click', function() {
    if (joueuse_10==false) {
        joueuse_10=true;
        bouton_joueuse_10.style.backgroundColor="#f9eb3c";
        bouton_joueuse_10.style.color="#05602F";
        bouton_joueuse_10.style.border="2px solid #05602F";

        bouton_joueuse_2.style.backgroundColor="#f9eb3c";
        bouton_joueuse_2.style.color="#383338";
        bouton_joueuse_2.style.border="none";
        joueuse_2=false;

        bouton_joueuse_1.style.backgroundColor="#f9eb3c";
        bouton_joueuse_1.style.color="#383338";
        bouton_joueuse_1.style.border="none";
        joueuse_1=false;

        bouton_joueuse_4.style.backgroundColor="#f9eb3c";
        bouton_joueuse_4.style.color="#383338";
        bouton_joueuse_4.style.border="none";
        joueuse_4=false;

        bouton_joueuse_5.style.backgroundColor="#f9eb3c";
        bouton_joueuse_5.style.color="#383338";
        bouton_joueuse_5.style.border="none";
        joueuse_5=false;

        bouton_joueuse_6.style.backgroundColor="#f9eb3c";
        bouton_joueuse_6.style.color="#383338";
        bouton_joueuse_6.style.border="none";
        joueuse_6=false;

        bouton_joueuse_7.style.backgroundColor="#f9eb3c";
        bouton_joueuse_7.style.color="#383338";
        bouton_joueuse_7.style.border="none";
        joueuse_8=false;

        bouton_joueuse_8.style.backgroundColor="#f9eb3c";
        bouton_joueuse_8.style.color="#383338";
        bouton_joueuse_8.style.border="none";
        joueuse_8=false;

        bouton_joueuse_9.style.backgroundColor="#f9eb3c";
        bouton_joueuse_9.style.color="#383338";
        bouton_joueuse_9.style.border="none";
        joueuse_9=false;

        bouton_joueuse_3.style.backgroundColor="#f9eb3c";
        bouton_joueuse_3.style.color="#383338";
        bouton_joueuse_3.style.border="none";
        joueuse_3=false;

        bouton_joueuse_11.style.backgroundColor="#f9eb3c";
        bouton_joueuse_11.style.color="#383338";
        bouton_joueuse_11.style.border="none";
        joueuse_11=false;

        bouton_joueuse_12.style.backgroundColor="#f9eb3c";
        bouton_joueuse_12.style.color="#383338";
        bouton_joueuse_12.style.border="none";
        joueuse_12=false;

        bouton_gardienne_1.style.backgroundColor="#383338";
        bouton_gardienne_1.style.color="#FFFFFF";
        bouton_gardienne_1.style.border="none";
        gardienne_1=false;

        bouton_gardienne_2.style.backgroundColor="#383338";
        bouton_gardienne_2.style.color="#FFFFFF";
        bouton_gardienne_2.style.border="none";
        gardienne_2=false;


    }
    else if (joueuse_10==true) {
        joueuse_10=false;
        bouton_joueuse_10.style.backgroundColor="#f9eb3c";
        bouton_joueuse_10.style.color="#383338";
        bouton_joueuse_10.style.border="none";
        
       }

});  

bouton_joueuse_11.addEventListener('click', function() {
    if (joueuse_11==false) {
        joueuse_11=true;
        bouton_joueuse_11.style.backgroundColor="#f9eb3c";
        bouton_joueuse_11.style.color="#05602F";
        bouton_joueuse_11.style.border="2px solid #05602F";

        bouton_joueuse_2.style.backgroundColor="#f9eb3c";
        bouton_joueuse_2.style.color="#383338";
        bouton_joueuse_2.style.border="none";
        joueuse_2=false;

        bouton_joueuse_1.style.backgroundColor="#f9eb3c";
        bouton_joueuse_1.style.color="#383338";
        bouton_joueuse_1.style.border="none";
        joueuse_1=false;

        bouton_joueuse_4.style.backgroundColor="#f9eb3c";
        bouton_joueuse_4.style.color="#383338";
        bouton_joueuse_4.style.border="none";
        joueuse_4=false;

        bouton_joueuse_5.style.backgroundColor="#f9eb3c";
        bouton_joueuse_5.style.color="#383338";
        bouton_joueuse_5.style.border="none";
        joueuse_5=false;

        bouton_joueuse_6.style.backgroundColor="#f9eb3c";
        bouton_joueuse_6.style.color="#383338";
        bouton_joueuse_6.style.border="none";
        joueuse_6=false;

        bouton_joueuse_7.style.backgroundColor="#f9eb3c";
        bouton_joueuse_7.style.color="#383338";
        bouton_joueuse_7.style.border="none";
        joueuse_8=false;

        bouton_joueuse_8.style.backgroundColor="#f9eb3c";
        bouton_joueuse_8.style.color="#383338";
        bouton_joueuse_8.style.border="none";
        joueuse_8=false;

        bouton_joueuse_9.style.backgroundColor="#f9eb3c";
        bouton_joueuse_9.style.color="#383338";
        bouton_joueuse_9.style.border="none";
        joueuse_9=false;

        bouton_joueuse_10.style.backgroundColor="#f9eb3c";
        bouton_joueuse_10.style.color="#383338";
        bouton_joueuse_10.style.border="none";
        joueuse_10=false;

        bouton_joueuse_3.style.backgroundColor="#f9eb3c";
        bouton_joueuse_3.style.color="#383338";
        bouton_joueuse_3.style.border="none";
        joueuse_3=false;

        bouton_joueuse_12.style.backgroundColor="#f9eb3c";
        bouton_joueuse_12.style.color="#383338";
        bouton_joueuse_12.style.border="none";
        joueuse_12=false;

        bouton_gardienne_1.style.backgroundColor="#383338";
        bouton_gardienne_1.style.color="#FFFFFF";
        bouton_gardienne_1.style.border="none";
        gardienne_1=false;

        bouton_gardienne_2.style.backgroundColor="#383338";
        bouton_gardienne_2.style.color="#FFFFFF";
        bouton_gardienne_2.style.border="none";
        gardienne_2=false;


    }
    else if (joueuse_11==true) {
        joueuse_11=false;
        bouton_joueuse_11.style.backgroundColor="#f9eb3c";
        bouton_joueuse_11.style.color="#383338";
        bouton_joueuse_11.style.border="none";
        
       }

});  

bouton_joueuse_12.addEventListener('click', function() {
    if (joueuse_12==false) {
        joueuse_12=true;
        bouton_joueuse_12.style.backgroundColor="#f9eb3c";
        bouton_joueuse_12.style.color="#05602F";
        bouton_joueuse_12.style.border="2px solid #05602F";

        bouton_joueuse_2.style.backgroundColor="#f9eb3c";
        bouton_joueuse_2.style.color="#383338";
        bouton_joueuse_2.style.border="none";
        joueuse_2=false;

        bouton_joueuse_1.style.backgroundColor="#f9eb3c";
        bouton_joueuse_1.style.color="#383338";
        bouton_joueuse_1.style.border="none";
        joueuse_1=false;

        bouton_joueuse_4.style.backgroundColor="#f9eb3c";
        bouton_joueuse_4.style.color="#383338";
        bouton_joueuse_4.style.border="none";
        joueuse_4=false;

        bouton_joueuse_5.style.backgroundColor="#f9eb3c";
        bouton_joueuse_5.style.color="#383338";
        bouton_joueuse_5.style.border="none";
        joueuse_5=false;

        bouton_joueuse_6.style.backgroundColor="#f9eb3c";
        bouton_joueuse_6.style.color="#383338";
        bouton_joueuse_6.style.border="none";
        joueuse_6=false;

        bouton_joueuse_7.style.backgroundColor="#f9eb3c";
        bouton_joueuse_7.style.color="#383338";
        bouton_joueuse_7.style.border="none";
        joueuse_8=false;

        bouton_joueuse_8.style.backgroundColor="#f9eb3c";
        bouton_joueuse_8.style.color="#383338";
        bouton_joueuse_8.style.border="none";
        joueuse_8=false;

        bouton_joueuse_9.style.backgroundColor="#f9eb3c";
        bouton_joueuse_9.style.color="#383338";
        bouton_joueuse_9.style.border="none";
        joueuse_9=false;

        bouton_joueuse_10.style.backgroundColor="#f9eb3c";
        bouton_joueuse_10.style.color="#383338";
        bouton_joueuse_10.style.border="none";
        joueuse_10=false;

        bouton_joueuse_11.style.backgroundColor="#f9eb3c";
        bouton_joueuse_11.style.color="#383338";
        bouton_joueuse_11.style.border="none";
        joueuse_11=false;

        bouton_joueuse_3.style.backgroundColor="#f9eb3c";
        bouton_joueuse_3.style.color="#383338";
        bouton_joueuse_3.style.border="none";
        joueuse_3=false;

        bouton_gardienne_1.style.backgroundColor="#383338";
        bouton_gardienne_1.style.color="#FFFFFF";
        bouton_gardienne_1.style.border="none";
        gardienne_1=false;

        bouton_gardienne_2.style.backgroundColor="#383338";
        bouton_gardienne_2.style.color="#FFFFFF";
        bouton_gardienne_2.style.border="none";
        gardienne_2=false;


    }
    else if (joueuse_12==true) {
        joueuse_12=false;
        bouton_joueuse_12.style.backgroundColor="#f9eb3c";
        bouton_joueuse_12.style.color="#383338";
        bouton_joueuse_12.style.border="none";
        
       }

});  

//Boutons gardiennes 

bouton_gardienne_1.addEventListener('click', function() {
    if (gardienne_1==false) {
        gardienne_1=true;
        bouton_gardienne_1.style.backgroundColor="#383338";
        bouton_gardienne_1.style.color="#f9eb3c";
        bouton_gardienne_1.style.border="2px solid #f9eb3c";

        bouton_gardienne_2.style.backgroundColor="#383338";
        bouton_gardienne_2.style.color="#FFFFFF";
        bouton_gardienne_2.style.border="none";
        gardienne_2=false;

        joueuse_7=false;
        bouton_joueuse_7.style.backgroundColor="#f9eb3cf9eb3c";
        bouton_joueuse_7.style.color="#383338";
        bouton_joueuse_7.style.border="none";

        bouton_joueuse_2.style.backgroundColor="#f9eb3c";
        bouton_joueuse_2.style.color="#383338";
        bouton_joueuse_2.style.border="none";
        joueuse_2=false;

        bouton_joueuse_1.style.backgroundColor="#f9eb3c";
        bouton_joueuse_1.style.color="#383338";
        bouton_joueuse_1.style.border="none";
        joueuse_1=false;

        bouton_joueuse_4.style.backgroundColor="#f9eb3c";
        bouton_joueuse_4.style.color="#383338";
        bouton_joueuse_4.style.border="none";
        joueuse_4=false;

        bouton_joueuse_5.style.backgroundColor="#f9eb3c";
        bouton_joueuse_5.style.color="#383338";
        bouton_joueuse_5.style.border="none";
        joueuse_5=false;

        bouton_joueuse_6.style.backgroundColor="#f9eb3c";
        bouton_joueuse_6.style.color="#383338";
        bouton_joueuse_6.style.border="none";
        joueuse_6=false;

        bouton_joueuse_3.style.backgroundColor="#f9eb3c";
        bouton_joueuse_3.style.color="#383338";
        bouton_joueuse_3.style.border="none";
        joueuse_3=false;

        bouton_joueuse_8.style.backgroundColor="#f9eb3c";
        bouton_joueuse_8.style.color="#383338";
        bouton_joueuse_8.style.border="none";
        joueuse_8=false;

        bouton_joueuse_9.style.backgroundColor="#f9eb3c";
        bouton_joueuse_9.style.color="#383338";
        bouton_joueuse_9.style.border="none";
        joueuse_9=false;

        bouton_joueuse_10.style.backgroundColor="#f9eb3c";
        bouton_joueuse_10.style.color="#383338";
        bouton_joueuse_10.style.border="none";
        joueuse_10=false;

        bouton_joueuse_11.style.backgroundColor="#f9eb3c";
        bouton_joueuse_11.style.color="#383338";
        bouton_joueuse_11.style.border="none";
        joueuse_11=false;

        bouton_joueuse_12.style.backgroundColor="#f9eb3c";
        bouton_joueuse_12.style.color="#383338";
        bouton_joueuse_12.style.border="none";
        joueuse_12=false;

    }
    else if (gardienne_1==true) {
        gardienne_1=false;
        bouton_gardienne_1.style.backgroundColor="#383338";
        bouton_gardienne_1.style.color="#FFFFFF";
        bouton_gardienne_1.style.border="none";
        
       }

});  


bouton_gardienne_2.addEventListener('click', function() {
    if (gardienne_2==false) {
        gardienne_2=true;
        bouton_gardienne_2.style.backgroundColor="#383338";
        bouton_gardienne_2.style.color="#f9eb3c";
        bouton_gardienne_2.style.border="2px solid #f9eb3c";

        bouton_gardienne_1.style.backgroundColor="#383338";
        bouton_gardienne_1.style.color="#FFFFFF";
        bouton_gardienne_1.style.border="none";
        gardienne_1=false;

        joueuse_7=false;
        bouton_joueuse_7.style.backgroundColor="#f9eb3cf9eb3c";
        bouton_joueuse_7.style.color="#383338";
        bouton_joueuse_7.style.border="none";

        bouton_joueuse_2.style.backgroundColor="#f9eb3c";
        bouton_joueuse_2.style.color="#383338";
        bouton_joueuse_2.style.border="none";
        joueuse_2=false;

        bouton_joueuse_1.style.backgroundColor="#f9eb3c";
        bouton_joueuse_1.style.color="#383338";
        bouton_joueuse_1.style.border="none";
        joueuse_1=false;

        bouton_joueuse_4.style.backgroundColor="#f9eb3c";
        bouton_joueuse_4.style.color="#383338";
        bouton_joueuse_4.style.border="none";
        joueuse_4=false;

        bouton_joueuse_5.style.backgroundColor="#f9eb3c";
        bouton_joueuse_5.style.color="#383338";
        bouton_joueuse_5.style.border="none";
        joueuse_5=false;

        bouton_joueuse_6.style.backgroundColor="#f9eb3c";
        bouton_joueuse_6.style.color="#383338";
        bouton_joueuse_6.style.border="none";
        joueuse_6=false;

        bouton_joueuse_3.style.backgroundColor="#f9eb3c";
        bouton_joueuse_3.style.color="#383338";
        bouton_joueuse_3.style.border="none";
        joueuse_3=false;

        bouton_joueuse_8.style.backgroundColor="#f9eb3c";
        bouton_joueuse_8.style.color="#383338";
        bouton_joueuse_8.style.border="none";
        joueuse_8=false;

        bouton_joueuse_9.style.backgroundColor="#f9eb3c";
        bouton_joueuse_9.style.color="#383338";
        bouton_joueuse_9.style.border="none";
        joueuse_9=false;

        bouton_joueuse_10.style.backgroundColor="#f9eb3c";
        bouton_joueuse_10.style.color="#383338";
        bouton_joueuse_10.style.border="none";
        joueuse_10=false;

        bouton_joueuse_11.style.backgroundColor="#f9eb3c";
        bouton_joueuse_11.style.color="#383338";
        bouton_joueuse_11.style.border="none";
        joueuse_11=false;

        bouton_joueuse_12.style.backgroundColor="#f9eb3c";
        bouton_joueuse_12.style.color="#383338";
        bouton_joueuse_12.style.border="none";
        joueuse_12=false;

    }
    else if (gardienne_2==true) {
        gardienne_2=false;
        bouton_gardienne_2.style.backgroundColor="#383338";
        bouton_gardienne_2.style.color="#FFFFFF";
        bouton_gardienne_2.style.border="none";
        
       }

});  


//Code JS section zones -----------------------
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
        but1=false;
        bouton_but1.style.fillOpacity="0"
       }
});