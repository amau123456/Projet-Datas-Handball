//Boutons action type (attaque-défense)
let attaque=1;


let bouton_Defense = document.getElementById("bouton_Defense");
let bouton_Attaque = document.getElementById("bouton_Attaque");

bouton_Defense.addEventListener('click',function() {
    if (attaque==1) {
        attaque=0;
        bouton_Defense.style.backgroundColor="#f9eb3c";
        bouton_Attaque.style.backgroundColor="#FBFBFB";
    }   
    }
);

bouton_Attaque.addEventListener('click',function(){
    if (attaque==0){
        attaque=1;
        bouton_Defense.style.backgroundColor="#FBFBFB";
        bouton_Attaque.style.backgroundColor="#f9eb3c";
    }
}
);

//Boutons type attaque (Attaque Placée ou Contre-attaque)
let attaque_Placee=1;

let bouton_Attaque_Placee = document.getElementById("bouton_Attaque_Placee");
let bouton_Contre_Attaque = document.getElementById("bouton_Contre_Attaque");
let bouton_Switch = document.getElementById("myonoffswitch");

bouton_Switch.addEventListener('change',function(e){
    e.preventDefault();
    //alert("hello");
   
    if (attaque_Placee==1){
        attaque_Placee=0;
        bouton_Contre_Attaque.style.backgroundColor="#f9eb3c";
        bouton_Attaque_Placee.style.backgroundColor="#FBFBFB";
    }   
    
    else if (attaque_Placee==0){
        attaque_Placee=1;
        bouton_Contre_Attaque.style.backgroundColor="#FBFBFB";
        bouton_Attaque_Placee.style.backgroundColor="#f9eb3c";
    }
    else {
        alert("Hello");
    }
}
);

//Boutons sanctions 
let carton_jaune=0;
let carton_rouge=0;
let deux_min=0;

let bouton_carton_jaune = document.getElementById("conteneur_carton_jaune");
let bouton_carton_rouge = document.getElementById("conteneur_carton_rouge");
let bouton_2min = document.getElementById("Deux_min");

bouton_carton_jaune.addEventListener('click', function()
{
    if (carton_jaune==0) {
        carton_jaune=1;
        bouton_carton_jaune.style.borderColor="#f9eb3c"
        bouton_carton_jaune.style.borderWidth="1.5px";
        
    }
    else if (carton_jaune==1) {
        carton_jaune=0;
        bouton_carton_jaune.style.borderColor="rgba(220, 220, 220, 0.12)"    }

});

bouton_carton_rouge.addEventListener('click', function()
{
    if (carton_rouge==0) {
        carton_rouge=1;
        bouton_carton_rouge.style.borderColor="#f9eb3c";
        bouton_carton_jaune.style.borderWidth="1.5px";
    }
    else if (carton_rouge==1) {
        carton_rouge=0;
        bouton_carton_rouge.style.borderColor="rgba(220, 220, 220, 0.12)"    }

});


bouton_2min.addEventListener('click', function(){
    if (deux_min==0) {
        deux_min=1;
        bouton_2min.style.backgroundColor="#f9eb3c";

    }
    else if (deux_min==1) {
        deux_min=0;
        bouton_2min.style.backgroundColor="#dcdcdc03";
    }
});

//Boutons faits de jeu - Attaque
let faute_zone=0;
let marche=0;
let reprise_drible=0;
let balle_perdue=0;
let mauvaise_relance=0;
let passage_en_force=0;
let faute_subie=0;
let tir_contre=0;
let deux_min_provoque=0;
let sept_m=0;
let duel_gagne=0;
let relance=0;


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
    if (faute_zone==0) {
        faute_zone=1;
        bouton_faute_zone.style.backgroundColor="#f9eb3c";
        bouton_faute_zone.style.color="#383338"
    }
    else if (faute_zone==1) {
        faute_zone=0;
        bouton_faute_zone.style.backgroundColor="#589474";
        bouton_faute_zone.style.color="#FFFFFF";
       }

});

bouton_marche.addEventListener('click', function()
{
    if (marche==0) {
        marche=1;
        bouton_marche.style.backgroundColor="#f9eb3c";
        bouton_marche.style.color="#383338"
    }
    else if (marche==1) {
        marche=0;
        bouton_marche.style.backgroundColor="#589474";
        bouton_marche.style.color="#FFFFFF";
       }

});

bouton_reprise_drible.addEventListener('click', function()
{
    if (reprise_drible==0) {
        reprise_drible=1;
        bouton_reprise_drible.style.backgroundColor="#f9eb3c";
        bouton_reprise_drible.style.color="#383338"
    }
    else if (reprise_drible==1) {
        reprise_drible=0;
        bouton_reprise_drible.style.backgroundColor="#589474";
        bouton_reprise_drible.style.color="#FFFFFF";
       }

});

bouton_balle_perdue.addEventListener('click', function()
{
    if (balle_perdue==0) {
        balle_perdue=1;
        bouton_balle_perdue.style.backgroundColor="#f9eb3c";
        bouton_balle_perdue.style.color="#383338"
    }
    else if (balle_perdue==1) {
        balle_perdue=0;
        bouton_balle_perdue.style.backgroundColor="#589474";
        bouton_balle_perdue.style.color="#FFFFFF";
       }

});

bouton_mauvaise_relance.addEventListener('click', function()
{
    if (mauvaise_relance==0) {
        mauvaise_relance=1;
        bouton_mauvaise_relance.style.backgroundColor="#f9eb3c";
        bouton_mauvaise_relance.style.color="#383338"
    }
    else if (mauvaise_relance==1) {
        mauvaise_relance=0;
        bouton_mauvaise_relance.style.backgroundColor="#589474";
        bouton_mauvaise_relance.style.color="#FFFFFF";
       }

});

bouton_passage_en_force.addEventListener('click', function()
{
    if (passage_en_force==0) {
        passage_en_force=1;
        bouton_passage_en_force.style.backgroundColor="#f9eb3c";
        bouton_passage_en_force.style.color="#383338"
    }
    else if (passage_en_force==1) {
        passage_en_force=0;
        bouton_passage_en_force.style.backgroundColor="#589474";
        bouton_passage_en_force.style.color="#FFFFFF";
       }

});

bouton_faute_subie.addEventListener('click', function()
{
    if (faute_subie==0) {
        faute_subie=1;
        bouton_faute_subie.style.backgroundColor="#f9eb3c";
        bouton_faute_subie.style.color="#383338"
    }
    else if (faute_subie==1) {
        faute_subie=0;
        bouton_faute_subie.style.backgroundColor="#589474";
        bouton_faute_subie.style.color="#FFFFFF";
       }

});

bouton_tir_contre.addEventListener('click', function()
{
    if (tir_contre==0) {
        tir_contre=1;
        bouton_tir_contre.style.backgroundColor="#f9eb3c";
        bouton_tir_contre.style.color="#383338"
    }
    else if (tir_contre==1) {
        tir_contre=0;
        bouton_tir_contre.style.backgroundColor="#589474";
        bouton_tir_contre.style.color="#FFFFFF";
       }

});

bouton_deux_min_provoque.addEventListener('click', function()
{
    if (deux_min_provoque==0) {
        deux_min_provoque=1;
        bouton_deux_min_provoque.style.backgroundColor="#f9eb3c";
        bouton_deux_min_provoque.style.color="#383338"
    }
    else if (deux_min_provoque==1) {
        deux_min_provoque=0;
        bouton_deux_min_provoque.style.backgroundColor="#589474";
        bouton_deux_min_provoque.style.color="#FFFFFF";
       }

});

bouton_sept_m.addEventListener('click', function()
{
    if (sept_m==0) {
        sept_m=1;
        bouton_sept_m.style.backgroundColor="#f9eb3c";
        bouton_sept_m.style.color="#383338"
    }
    else if (sept_m==1) {
        sept_m=0;
        bouton_sept_m.style.backgroundColor="#589474";
        bouton_sept_m.style.color="#FFFFFF";
       }

});


bouton_duel_gagne.addEventListener('click', function()
{
    if (duel_gagne==0) {
        duel_gagne=1;
        bouton_duel_gagne.style.backgroundColor="#f9eb3c";
        bouton_duel_gagne.style.color="#383338"
    }
    else if (duel_gagne==1) {
        duel_gagne=0;
        bouton_duel_gagne.style.backgroundColor="#589474";
        bouton_duel_gagne.style.color="#FFFFFF";
       }

});


bouton_relance.addEventListener('click', function()
{
    if (relance==0) {
        relance=1;
        bouton_relance.style.backgroundColor="#f9eb3c";
        bouton_relance.style.color="#383338"
    }
    else if (relance==1) {
        relance=0;
        bouton_relance.style.backgroundColor="#589474";
        bouton_relance.style.color="#FFFFFF";
       }

});

//Boutons faits de jeu - Défense
let duel_perdu=0;
let balle_recuperee=0;
let interception=0;

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
    if (faute_zone==0) {
        faute_zone=1;
        bouton_faute_zone_d.style.backgroundColor="#f9eb3c";
        bouton_faute_zone_d.style.color="#383338"
    }
    else if (faute_zone==1) {
        faute_zone=0;
        bouton_faute_zone_d.style.backgroundColor="#589474";
        bouton_faute_zone_d.style.color="#FFFFFF";
       }

});

bouton_marche_d.addEventListener('click', function()
{
    if (marche==0) {
        marche=1;
        bouton_marche_d.style.backgroundColor="#f9eb3c";
        bouton_marche_d.style.color="#383338"
    }
    else if (marche==1) {
        marche=0;
        bouton_marche_d.style.backgroundColor="#589474";
        bouton_marche_d.style.color="#FFFFFF";
       }

});

bouton_reprise_drible_d.addEventListener('click', function()
{
    if (reprise_drible==0) {
        reprise_drible=1;
        bouton_reprise_drible_d.style.backgroundColor="#f9eb3c";
        bouton_reprise_drible_d.style.color="#383338"
    }
    else if (reprise_drible==1) {
        reprise_drible=0;
        bouton_reprise_drible_d.style.backgroundColor="#589474";
        bouton_reprise_drible_d.style.color="#FFFFFF";
       }

});

bouton_balle_recuperee_d.addEventListener('click', function()
{
    if (balle_recuperee==0) {
        balle_recuperee=1;
        bouton_balle_recuperee_d.style.backgroundColor="#f9eb3c";
        bouton_balle_recuperee_d.style.color="#383338"
    }
    else if (balle_recuperee==1) {
        balle_recuperee=0;
        bouton_balle_recuperee_d.style.backgroundColor="#589474";
        bouton_balle_recuperee_d.style.color="#FFFFFF";
       }

});

bouton_mauvaise_relance_d.addEventListener('click', function()
{
    if (mauvaise_relance==0) {
        mauvaise_relance=1;
        bouton_mauvaise_relance_d.style.backgroundColor="#f9eb3c";
        bouton_mauvaise_relance_d.style.color="#383338"
    }
    else if (mauvaise_relance==1) {
        mauvaise_relance=0;
        bouton_mauvaise_relance_d.style.backgroundColor="#589474";
        bouton_mauvaise_relance_d.style.color="#FFFFFF";
       }

});

bouton_passage_en_force_d.addEventListener('click', function()
{
    if (passage_en_force==0) {
        passage_en_force=1;
        bouton_passage_en_force_d.style.backgroundColor="#f9eb3c";
        bouton_passage_en_force_d.style.color="#383338"
    }
    else if (passage_en_force==1) {
        passage_en_force=0;
        bouton_passage_en_force_d.style.backgroundColor="#589474";
        bouton_passage_en_force_d.style.color="#FFFFFF";
       }

});

bouton_faute_subie_d.addEventListener('click', function()
{
    if (faute_subie==0) {
        faute_subie=1;
        bouton_faute_subie_d.style.backgroundColor="#f9eb3c";
        bouton_faute_subie_d.style.color="#383338"
    }
    else if (faute_subie==1) {
        faute_subie=0;
        bouton_faute_subie_d.style.backgroundColor="#589474";
        bouton_faute_subie_d.style.color="#FFFFFF";
       }

});

bouton_tir_contre_d.addEventListener('click', function()
{
    if (tir_contre==0) {
        tir_contre=1;
        bouton_tir_contre_d.style.backgroundColor="#f9eb3c";
        bouton_tir_contre_d.style.color="#383338"
    }
    else if (tir_contre==1) {
        tir_contre=0;
        bouton_tir_contre_d.style.backgroundColor="#589474";
        bouton_tir_contre_d.style.color="#FFFFFF";
       }

});

bouton_interception_d.addEventListener('click', function()
{
    if (interception==0) {
        interception=1;
        bouton_interception_d.style.backgroundColor="#f9eb3c";
        bouton_interception_d.style.color="#383338"
    }
    else if (interception==1) {
        interception=0;
        bouton_interception_d.style.backgroundColor="#589474";
        bouton_interception_d.style.color="#FFFFFF";
       }

});

bouton_deux_min_provoque_d.addEventListener('click', function()
{
    if (deux_min_provoque==0) {
        deux_min_provoque=1;
        bouton_deux_min_provoque_d.style.backgroundColor="#f9eb3c";
        bouton_deux_min_provoque_d.style.color="#383338"
    }
    else if (deux_min_provoque==1) {
        deux_min_provoque=0;
        bouton_deux_min_provoque_d.style.backgroundColor="#589474";
        bouton_deux_min_provoque_d.style.color="#FFFFFF";
       }

});

bouton_sept_m_d.addEventListener('click', function()
{
    if (sept_m==0) {
        sept_m=1;
        bouton_sept_m_d.style.backgroundColor="#f9eb3c";
        bouton_sept_m_d.style.color="#383338"
    }
    else if (sept_m==1) {
        sept_m=0;
        bouton_sept_m_d.style.backgroundColor="#589474";
        bouton_sept_m_d.style.color="#FFFFFF";
       }

});


bouton_duel_gagne_d.addEventListener('click', function()
{
    if (duel_gagne==0) {
        duel_gagne=1;
        bouton_duel_gagne_d.style.backgroundColor="#f9eb3c";
        bouton_duel_gagne_d.style.color="#383338"
    }
    else if (duel_gagne==1) {
        duel_gagne=0;
        bouton_duel_gagne_d.style.backgroundColor="#589474";
        bouton_duel_gagne_d.style.color="#FFFFFF";
       }

});

bouton_duel_perdu_d.addEventListener('click', function()
{
    if (duel_perdu==0) {
        duel_perdu=1;
        bouton_duel_perdu_d.style.backgroundColor="#f9eb3c";
        bouton_duel_perdu_d.style.color="#383338"
    }
    else if (duel_perdu==1) {
        duel_perdu=0;
        bouton_duel_perdu_d.style.backgroundColor="#589474";
        bouton_duel_perdu_d.style.color="#FFFFFF";
       }

});

bouton_relance_d.addEventListener('click', function()
{
    if (relance==0) {
        relance=1;
        bouton_relance_d.style.backgroundColor="#f9eb3c";
        bouton_relance_d.style.color="#383338"
    }
    else if (relance==1) {
        relance=0;
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

let joueuse_1 = 0;
let joueuse_2 = 0;
let joueuse_3 = 0;
let joueuse_4 = 0;
let joueuse_5 = 0;
let joueuse_6 = 0;
let joueuse_7 = 0;
let joueuse_8 = 0;
let joueuse_9 = 0;
let joueuse_10 = 0;
let joueuse_11 = 0;
let joueuse_12 = 0;
let gardienne_1 = 0;
let gardienne_2 = 0;


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
    if (joueuse_1==0) {
        joueuse_1=1;
        bouton_joueuse_1.style.backgroundColor="#f9eb3c";
        bouton_joueuse_1.style.color="#05602F";
        bouton_joueuse_1.style.border="2px solid #05602F";

         bouton_joueuse_2.style.backgroundColor="#f9eb3c";
        bouton_joueuse_2.style.color="#383338";
        bouton_joueuse_2.style.border="none";
        joueuse_2=0;

        bouton_joueuse_3.style.backgroundColor="#f9eb3c";
        bouton_joueuse_3.style.color="#383338";
        bouton_joueuse_3.style.border="none";
        joueuse_3=0; 

        bouton_joueuse_4.style.backgroundColor="#f9eb3c";
        bouton_joueuse_4.style.color="#383338";
        bouton_joueuse_4.style.border="none";
        joueuse_4=0;

        bouton_joueuse_5.style.backgroundColor="#f9eb3c";
        bouton_joueuse_5.style.color="#383338";
        bouton_joueuse_5.style.border="none";
        joueuse_5=0;

        bouton_joueuse_6.style.backgroundColor="#f9eb3c";
        bouton_joueuse_6.style.color="#383338";
        bouton_joueuse_6.style.border="none";
        joueuse_6=0;

        bouton_joueuse_7.style.backgroundColor="#f9eb3c";
        bouton_joueuse_7.style.color="#383338";
        bouton_joueuse_7.style.border="none";
        joueuse_7=0;

        bouton_joueuse_8.style.backgroundColor="#f9eb3c";
        bouton_joueuse_8.style.color="#383338";
        bouton_joueuse_8.style.border="none";
        joueuse_8=0;

        bouton_joueuse_9.style.backgroundColor="#f9eb3c";
        bouton_joueuse_9.style.color="#383338";
        bouton_joueuse_9.style.border="none";
        joueuse_9=0;

        bouton_joueuse_10.style.backgroundColor="#f9eb3c";
        bouton_joueuse_10.style.color="#383338";
        bouton_joueuse_10.style.border="none";
        joueuse_10=0;

        bouton_joueuse_11.style.backgroundColor="#f9eb3c";
        bouton_joueuse_11.style.color="#383338";
        bouton_joueuse_11.style.border="none";
        joueuse_11=0;

        bouton_joueuse_12.style.backgroundColor="#f9eb3c";
        bouton_joueuse_12.style.color="#383338";
        bouton_joueuse_12.style.border="none";
        joueuse_12=0;

        bouton_gardienne_1.style.backgroundColor="#383338";
        bouton_gardienne_1.style.color="#FFFFFF";
        bouton_gardienne_1.style.border="none";
        gardienne_1=0;

        bouton_gardienne_2.style.backgroundColor="#383338";
        bouton_gardienne_2.style.color="#FFFFFF";
        bouton_gardienne_2.style.border="none";
        gardienne_2=0;

    }
    else if (joueuse_1==1) {
        joueuse_1=0;
        bouton_joueuse_1.style.backgroundColor="#f9eb3c";
        bouton_joueuse_1.style.color="#383338";
        bouton_joueuse_1.style.border="none";
        
       }

});   

bouton_joueuse_2.addEventListener('click', function() {
    if (joueuse_2==0) {
        joueuse_2=1;
        bouton_joueuse_2.style.backgroundColor="#f9eb3c";
        bouton_joueuse_2.style.color="#05602F";
        bouton_joueuse_2.style.border="2px solid #05602F";

        bouton_joueuse_1.style.backgroundColor="#f9eb3c";
        bouton_joueuse_1.style.color="#383338";
        bouton_joueuse_1.style.border="none";
        joueuse_1=0;

        bouton_joueuse_3.style.backgroundColor="#f9eb3c";
        bouton_joueuse_3.style.color="#383338";
        bouton_joueuse_3.style.border="none";
        joueuse_3=0;

        bouton_joueuse_4.style.backgroundColor="#f9eb3c";
        bouton_joueuse_4.style.color="#383338";
        bouton_joueuse_4.style.border="none";
        joueuse_4=0;

        bouton_joueuse_5.style.backgroundColor="#f9eb3c";
        bouton_joueuse_5.style.color="#383338";
        bouton_joueuse_5.style.border="none";
        joueuse_5=0;

        bouton_joueuse_6.style.backgroundColor="#f9eb3c";
        bouton_joueuse_6.style.color="#383338";
        bouton_joueuse_6.style.border="none";
        joueuse_6=0;

        bouton_joueuse_7.style.backgroundColor="#f9eb3c";
        bouton_joueuse_7.style.color="#383338";
        bouton_joueuse_7.style.border="none";
        joueuse_7=0;

        bouton_joueuse_8.style.backgroundColor="#f9eb3c";
        bouton_joueuse_8.style.color="#383338";
        bouton_joueuse_8.style.border="none";
        joueuse_8=0;

        bouton_joueuse_9.style.backgroundColor="#f9eb3c";
        bouton_joueuse_9.style.color="#383338";
        bouton_joueuse_9.style.border="none";
        joueuse_9=0;

        bouton_joueuse_10.style.backgroundColor="#f9eb3c";
        bouton_joueuse_10.style.color="#383338";
        bouton_joueuse_10.style.border="none";
        joueuse_10=0;

        bouton_joueuse_11.style.backgroundColor="#f9eb3c";
        bouton_joueuse_11.style.color="#383338";
        bouton_joueuse_11.style.border="none";
        joueuse_11=0;

        bouton_joueuse_12.style.backgroundColor="#f9eb3c";
        bouton_joueuse_12.style.color="#383338";
        bouton_joueuse_12.style.border="none";
        joueuse_12=0;

        bouton_gardienne_1.style.backgroundColor="#383338";
        bouton_gardienne_1.style.color="#FFFFFF";
        bouton_gardienne_1.style.border="none";
        gardienne_1=0;

        bouton_gardienne_2.style.backgroundColor="#383338";
        bouton_gardienne_2.style.color="#FFFFFF";
        bouton_gardienne_2.style.border="none";
        gardienne_2=0;

    }
    else if (joueuse_2==1) {
        joueuse_2=0;
        bouton_joueuse_2.style.backgroundColor="#f9eb3c";
        bouton_joueuse_2.style.color="#383338";
        bouton_joueuse_2.style.border="none";
        
       }

});    

bouton_joueuse_3.addEventListener('click', function() {
    if (joueuse_3==0) {
        joueuse_3=1;
        bouton_joueuse_3.style.backgroundColor="#f9eb3c";
        bouton_joueuse_3.style.color="#05602F";
        bouton_joueuse_3.style.border="2px solid #05602F";

        bouton_joueuse_2.style.backgroundColor="#f9eb3c";
        bouton_joueuse_2.style.color="#383338";
        bouton_joueuse_2.style.border="none";
        joueuse_2=0;

        bouton_joueuse_1.style.backgroundColor="#f9eb3c";
        bouton_joueuse_1.style.color="#383338";
        bouton_joueuse_1.style.border="none";
        joueuse_1=0;

        bouton_joueuse_4.style.backgroundColor="#f9eb3c";
        bouton_joueuse_4.style.color="#383338";
        bouton_joueuse_4.style.border="none";
        joueuse_4=0;

        bouton_joueuse_5.style.backgroundColor="#f9eb3c";
        bouton_joueuse_5.style.color="#383338";
        bouton_joueuse_5.style.border="none";
        joueuse_5=0;

        bouton_joueuse_6.style.backgroundColor="#f9eb3c";
        bouton_joueuse_6.style.color="#383338";
        bouton_joueuse_6.style.border="none";
        joueuse_6=0;

        bouton_joueuse_7.style.backgroundColor="#f9eb3c";
        bouton_joueuse_7.style.color="#383338";
        bouton_joueuse_7.style.border="none";
        joueuse_7=0;

        bouton_joueuse_8.style.backgroundColor="#f9eb3c";
        bouton_joueuse_8.style.color="#383338";
        bouton_joueuse_8.style.border="none";
        joueuse_8=0;

        bouton_joueuse_9.style.backgroundColor="#f9eb3c";
        bouton_joueuse_9.style.color="#383338";
        bouton_joueuse_9.style.border="none";
        joueuse_9=0;

        bouton_joueuse_10.style.backgroundColor="#f9eb3c";
        bouton_joueuse_10.style.color="#383338";
        bouton_joueuse_10.style.border="none";
        joueuse_10=0;

        bouton_joueuse_11.style.backgroundColor="#f9eb3c";
        bouton_joueuse_11.style.color="#383338";
        bouton_joueuse_11.style.border="none";
        joueuse_11=0;

        bouton_joueuse_12.style.backgroundColor="#f9eb3c";
        bouton_joueuse_12.style.color="#383338";
        bouton_joueuse_12.style.border="none";
        joueuse_12=0;

        bouton_gardienne_1.style.backgroundColor="#383338";
        bouton_gardienne_1.style.color="#FFFFFF";
        bouton_gardienne_1.style.border="none";
        gardienne_1=0;

        bouton_gardienne_2.style.backgroundColor="#383338";
        bouton_gardienne_2.style.color="#FFFFFF";
        bouton_gardienne_2.style.border="none";
        gardienne_2=0;



    }
    else if (joueuse_3==1) {
        joueuse_3=0;
        bouton_joueuse_3.style.backgroundColor="#f9eb3c";
        bouton_joueuse_3.style.color="#383338";
        bouton_joueuse_3.style.border="none";
        
       }

});  

bouton_joueuse_4.addEventListener('click', function() {
    if (joueuse_4==0) {
        joueuse_4=1;
        bouton_joueuse_4.style.backgroundColor="#f9eb3c";
        bouton_joueuse_4.style.color="#05602F";
        bouton_joueuse_4.style.border="2px solid #05602F";

        bouton_joueuse_2.style.backgroundColor="#f9eb3c";
        bouton_joueuse_2.style.color="#383338";
        bouton_joueuse_2.style.border="none";
        joueuse_2=0;

        bouton_joueuse_1.style.backgroundColor="#f9eb3c";
        bouton_joueuse_1.style.color="#383338";
        bouton_joueuse_1.style.border="none";
        joueuse_1=0;

        bouton_joueuse_3.style.backgroundColor="#f9eb3c";
        bouton_joueuse_3.style.color="#383338";
        bouton_joueuse_3.style.border="none";
        joueuse_3=0;

        bouton_joueuse_5.style.backgroundColor="#f9eb3c";
        bouton_joueuse_5.style.color="#383338";
        bouton_joueuse_5.style.border="none";
        joueuse_5=0;

        bouton_joueuse_6.style.backgroundColor="#f9eb3c";
        bouton_joueuse_6.style.color="#383338";
        bouton_joueuse_6.style.border="none";
        joueuse_6=0;

        bouton_joueuse_7.style.backgroundColor="#f9eb3c";
        bouton_joueuse_7.style.color="#383338";
        bouton_joueuse_7.style.border="none";
        joueuse_7=0;

        bouton_joueuse_8.style.backgroundColor="#f9eb3c";
        bouton_joueuse_8.style.color="#383338";
        bouton_joueuse_8.style.border="none";
        joueuse_8=0;

        bouton_joueuse_9.style.backgroundColor="#f9eb3c";
        bouton_joueuse_9.style.color="#383338";
        bouton_joueuse_9.style.border="none";
        joueuse_9=0;

        bouton_joueuse_10.style.backgroundColor="#f9eb3c";
        bouton_joueuse_10.style.color="#383338";
        bouton_joueuse_10.style.border="none";
        joueuse_10=0;

        bouton_joueuse_11.style.backgroundColor="#f9eb3c";
        bouton_joueuse_11.style.color="#383338";
        bouton_joueuse_11.style.border="none";
        joueuse_11=0;

        bouton_joueuse_12.style.backgroundColor="#f9eb3c";
        bouton_joueuse_12.style.color="#383338";
        bouton_joueuse_12.style.border="none";
        joueuse_12=0;

        bouton_gardienne_1.style.backgroundColor="#383338";
        bouton_gardienne_1.style.color="#FFFFFF";
        bouton_gardienne_1.style.border="none";
        gardienne_1=0;

        bouton_gardienne_2.style.backgroundColor="#383338";
        bouton_gardienne_2.style.color="#FFFFFF";
        bouton_gardienne_2.style.border="none";
        gardienne_2=0;


    }
    else if (joueuse_4==1) {
        joueuse_4=0;
        bouton_joueuse_4.style.backgroundColor="#f9eb3c";
        bouton_joueuse_4.style.color="#383338";
        bouton_joueuse_4.style.border="none";
        
       }

});  

bouton_joueuse_5.addEventListener('click', function() {
    if (joueuse_5==0) {
        joueuse_5=1;
        bouton_joueuse_5.style.backgroundColor="#f9eb3c";
        bouton_joueuse_5.style.color="#05602F";
        bouton_joueuse_5.style.border="2px solid #05602F";

        bouton_joueuse_2.style.backgroundColor="#f9eb3c";
        bouton_joueuse_2.style.color="#383338";
        bouton_joueuse_2.style.border="none";
        joueuse_2=0;

        bouton_joueuse_1.style.backgroundColor="#f9eb3c";
        bouton_joueuse_1.style.color="#383338";
        bouton_joueuse_1.style.border="none";
        joueuse_1=0;

        bouton_joueuse_4.style.backgroundColor="#f9eb3c";
        bouton_joueuse_4.style.color="#383338";
        bouton_joueuse_4.style.border="none";
        joueuse_4=0;

        bouton_joueuse_3.style.backgroundColor="#f9eb3c";
        bouton_joueuse_3.style.color="#383338";
        bouton_joueuse_3.style.border="none";
        joueuse_3=0;

        bouton_joueuse_6.style.backgroundColor="#f9eb3c";
        bouton_joueuse_6.style.color="#383338";
        bouton_joueuse_6.style.border="none";
        joueuse_6=0;

        bouton_joueuse_7.style.backgroundColor="#f9eb3c";
        bouton_joueuse_7.style.color="#383338";
        bouton_joueuse_7.style.border="none";
        joueuse_7=0;

        bouton_joueuse_8.style.backgroundColor="#f9eb3c";
        bouton_joueuse_8.style.color="#383338";
        bouton_joueuse_8.style.border="none";
        joueuse_8=0;

        bouton_joueuse_9.style.backgroundColor="#f9eb3c";
        bouton_joueuse_9.style.color="#383338";
        bouton_joueuse_9.style.border="none";
        joueuse_9=0;

        bouton_joueuse_10.style.backgroundColor="#f9eb3c";
        bouton_joueuse_10.style.color="#383338";
        bouton_joueuse_10.style.border="none";
        joueuse_10=0;

        bouton_joueuse_11.style.backgroundColor="#f9eb3c";
        bouton_joueuse_11.style.color="#383338";
        bouton_joueuse_11.style.border="none";
        joueuse_11=0;

        bouton_joueuse_12.style.backgroundColor="#f9eb3c";
        bouton_joueuse_12.style.color="#383338";
        bouton_joueuse_12.style.border="none";
        joueuse_12=0;

        bouton_gardienne_1.style.backgroundColor="#383338";
        bouton_gardienne_1.style.color="#FFFFFF";
        bouton_gardienne_1.style.border="none";
        gardienne_1=0;

        bouton_gardienne_2.style.backgroundColor="#383338";
        bouton_gardienne_2.style.color="#FFFFFF";
        bouton_gardienne_2.style.border="none";
        gardienne_2=0;


    }
    else if (joueuse_5==1) {
        joueuse_5=0;
        bouton_joueuse_5.style.backgroundColor="#f9eb3c";
        bouton_joueuse_5.style.color="#383338";
        bouton_joueuse_5.style.border="none";
        
       }

});  

bouton_joueuse_6.addEventListener('click', function() {
    if (joueuse_6==0) {
        joueuse_6=1;
        bouton_joueuse_6.style.backgroundColor="#f9eb3c";
        bouton_joueuse_6.style.color="#05602F";
        bouton_joueuse_6.style.border="2px solid #05602F";

        bouton_joueuse_2.style.backgroundColor="#f9eb3c";
        bouton_joueuse_2.style.color="#383338";
        bouton_joueuse_2.style.border="none";
        joueuse_2=0;

        bouton_joueuse_1.style.backgroundColor="#f9eb3c";
        bouton_joueuse_1.style.color="#383338";
        bouton_joueuse_1.style.border="none";
        joueuse_1=0;

        bouton_joueuse_4.style.backgroundColor="#f9eb3c";
        bouton_joueuse_4.style.color="#383338";
        bouton_joueuse_4.style.border="none";
        joueuse_4=0;

        bouton_joueuse_5.style.backgroundColor="#f9eb3c";
        bouton_joueuse_5.style.color="#383338";
        bouton_joueuse_5.style.border="none";
        joueuse_5=0;

        bouton_joueuse_3.style.backgroundColor="#f9eb3c";
        bouton_joueuse_3.style.color="#383338";
        bouton_joueuse_3.style.border="none";
        joueuse_3=0;

        bouton_joueuse_7.style.backgroundColor="#f9eb3c";
        bouton_joueuse_7.style.color="#383338";
        bouton_joueuse_7.style.border="none";
        joueuse_7=0;

        bouton_joueuse_8.style.backgroundColor="#f9eb3c";
        bouton_joueuse_8.style.color="#383338";
        bouton_joueuse_8.style.border="none";
        joueuse_8=0;

        bouton_joueuse_9.style.backgroundColor="#f9eb3c";
        bouton_joueuse_9.style.color="#383338";
        bouton_joueuse_9.style.border="none";
        joueuse_9=0;

        bouton_joueuse_10.style.backgroundColor="#f9eb3c";
        bouton_joueuse_10.style.color="#383338";
        bouton_joueuse_10.style.border="none";
        joueuse_10=0;

        bouton_joueuse_11.style.backgroundColor="#f9eb3c";
        bouton_joueuse_11.style.color="#383338";
        bouton_joueuse_11.style.border="none";
        joueuse_11=0;

        bouton_joueuse_12.style.backgroundColor="#f9eb3c";
        bouton_joueuse_12.style.color="#383338";
        bouton_joueuse_12.style.border="none";
        joueuse_12=0;

        bouton_gardienne_1.style.backgroundColor="#383338";
        bouton_gardienne_1.style.color="#FFFFFF";
        bouton_gardienne_1.style.border="none";
        gardienne_1=0;

        bouton_gardienne_2.style.backgroundColor="#383338";
        bouton_gardienne_2.style.color="#FFFFFF";
        bouton_gardienne_2.style.border="none";
        gardienne_2=0;


    }
    else if (joueuse_6==1) {
        joueuse_6=0;
        bouton_joueuse_6.style.backgroundColor="#f9eb3c";
        bouton_joueuse_6.style.color="#383338";
        bouton_joueuse_6.style.border="none";
        
       }

});  

bouton_joueuse_7.addEventListener('click', function() {
    if (joueuse_7==0) {
        joueuse_7=1;
        bouton_joueuse_7.style.backgroundColor="#f9eb3c";
        bouton_joueuse_7.style.color="#05602F";
        bouton_joueuse_7.style.border="2px solid #05602F";

        bouton_joueuse_2.style.backgroundColor="#f9eb3c";
        bouton_joueuse_2.style.color="#383338";
        bouton_joueuse_2.style.border="none";
        joueuse_2=0;

        bouton_joueuse_1.style.backgroundColor="#f9eb3c";
        bouton_joueuse_1.style.color="#383338";
        bouton_joueuse_1.style.border="none";
        joueuse_1=0;

        bouton_joueuse_4.style.backgroundColor="#f9eb3c";
        bouton_joueuse_4.style.color="#383338";
        bouton_joueuse_4.style.border="none";
        joueuse_4=0;

        bouton_joueuse_5.style.backgroundColor="#f9eb3c";
        bouton_joueuse_5.style.color="#383338";
        bouton_joueuse_5.style.border="none";
        joueuse_5=0;

        bouton_joueuse_6.style.backgroundColor="#f9eb3c";
        bouton_joueuse_6.style.color="#383338";
        bouton_joueuse_6.style.border="none";
        joueuse_6=0;

        bouton_joueuse_3.style.backgroundColor="#f9eb3c";
        bouton_joueuse_3.style.color="#383338";
        bouton_joueuse_3.style.border="none";
        joueuse_3=0;

        bouton_joueuse_8.style.backgroundColor="#f9eb3c";
        bouton_joueuse_8.style.color="#383338";
        bouton_joueuse_8.style.border="none";
        joueuse_8=0;

        bouton_joueuse_9.style.backgroundColor="#f9eb3c";
        bouton_joueuse_9.style.color="#383338";
        bouton_joueuse_9.style.border="none";
        joueuse_9=0;

        bouton_joueuse_10.style.backgroundColor="#f9eb3c";
        bouton_joueuse_10.style.color="#383338";
        bouton_joueuse_10.style.border="none";
        joueuse_10=0;

        bouton_joueuse_11.style.backgroundColor="#f9eb3c";
        bouton_joueuse_11.style.color="#383338";
        bouton_joueuse_11.style.border="none";
        joueuse_11=0;

        bouton_joueuse_12.style.backgroundColor="#f9eb3c";
        bouton_joueuse_12.style.color="#383338";
        bouton_joueuse_12.style.border="none";
        joueuse_12=0;

        bouton_gardienne_1.style.backgroundColor="#383338";
        bouton_gardienne_1.style.color="#FFFFFF";
        bouton_gardienne_1.style.border="none";
        gardienne_1=0;

        bouton_gardienne_2.style.backgroundColor="#383338";
        bouton_gardienne_2.style.color="#FFFFFF";
        bouton_gardienne_2.style.border="none";
        gardienne_2=0;

    }
    else if (joueuse_7==1) {
        joueuse_7=0;
        bouton_joueuse_7.style.backgroundColor="#f9eb3c";
        bouton_joueuse_7.style.color="#383338";
        bouton_joueuse_7.style.border="none";
        
       }

});  

bouton_joueuse_8.addEventListener('click', function() {
    if (joueuse_8==0) {
        joueuse_8=1;
        bouton_joueuse_8.style.backgroundColor="#f9eb3c";
        bouton_joueuse_8.style.color="#05602F";
        bouton_joueuse_8.style.border="2px solid #05602F";

        bouton_joueuse_2.style.backgroundColor="#f9eb3c";
        bouton_joueuse_2.style.color="#383338";
        bouton_joueuse_2.style.border="none";
        joueuse_2=0;

        bouton_joueuse_1.style.backgroundColor="#f9eb3c";
        bouton_joueuse_1.style.color="#383338";
        bouton_joueuse_1.style.border="none";
        joueuse_1=0;

        bouton_joueuse_4.style.backgroundColor="#f9eb3c";
        bouton_joueuse_4.style.color="#383338";
        bouton_joueuse_4.style.border="none";
        joueuse_4=0;

        bouton_joueuse_5.style.backgroundColor="#f9eb3c";
        bouton_joueuse_5.style.color="#383338";
        bouton_joueuse_5.style.border="none";
        joueuse_5=0;

        bouton_joueuse_6.style.backgroundColor="#f9eb3c";
        bouton_joueuse_6.style.color="#383338";
        bouton_joueuse_6.style.border="none";
        joueuse_6=0;

        bouton_joueuse_7.style.backgroundColor="#f9eb3c";
        bouton_joueuse_7.style.color="#383338";
        bouton_joueuse_7.style.border="none";
        joueuse_8=0;

        bouton_joueuse_3.style.backgroundColor="#f9eb3c";
        bouton_joueuse_3.style.color="#383338";
        bouton_joueuse_3.style.border="none";
        joueuse_3=0;

        bouton_joueuse_9.style.backgroundColor="#f9eb3c";
        bouton_joueuse_9.style.color="#383338";
        bouton_joueuse_9.style.border="none";
        joueuse_9=0;

        bouton_joueuse_10.style.backgroundColor="#f9eb3c";
        bouton_joueuse_10.style.color="#383338";
        bouton_joueuse_10.style.border="none";
        joueuse_10=0;

        bouton_joueuse_11.style.backgroundColor="#f9eb3c";
        bouton_joueuse_11.style.color="#383338";
        bouton_joueuse_11.style.border="none";
        joueuse_11=0;

        bouton_joueuse_12.style.backgroundColor="#f9eb3c";
        bouton_joueuse_12.style.color="#383338";
        bouton_joueuse_12.style.border="none";
        joueuse_12=0;

        bouton_gardienne_1.style.backgroundColor="#383338";
        bouton_gardienne_1.style.color="#FFFFFF";
        bouton_gardienne_1.style.border="none";
        gardienne_1=0;

        bouton_gardienne_2.style.backgroundColor="#383338";
        bouton_gardienne_2.style.color="#FFFFFF";
        bouton_gardienne_2.style.border="none";
        gardienne_2=0;


    }
    else if (joueuse_8==1) {
        joueuse_8=0;
        bouton_joueuse_8.style.backgroundColor="#f9eb3c";
        bouton_joueuse_8.style.color="#383338";
        bouton_joueuse_8.style.border="none";
        
       }

});  

bouton_joueuse_9.addEventListener('click', function() {
    if (joueuse_9==0) {
        joueuse_9=1;
        bouton_joueuse_9.style.backgroundColor="#f9eb3c";
        bouton_joueuse_9.style.color="#05602F";
        bouton_joueuse_9.style.border="2px solid #05602F";

        bouton_joueuse_2.style.backgroundColor="#f9eb3c";
        bouton_joueuse_2.style.color="#383338";
        bouton_joueuse_2.style.border="none";
        joueuse_2=0;

        bouton_joueuse_1.style.backgroundColor="#f9eb3c";
        bouton_joueuse_1.style.color="#383338";
        bouton_joueuse_1.style.border="none";
        joueuse_1=0;

        bouton_joueuse_4.style.backgroundColor="#f9eb3c";
        bouton_joueuse_4.style.color="#383338";
        bouton_joueuse_4.style.border="none";
        joueuse_4=0;

        bouton_joueuse_5.style.backgroundColor="#f9eb3c";
        bouton_joueuse_5.style.color="#383338";
        bouton_joueuse_5.style.border="none";
        joueuse_5=0;

        bouton_joueuse_6.style.backgroundColor="#f9eb3c";
        bouton_joueuse_6.style.color="#383338";
        bouton_joueuse_6.style.border="none";
        joueuse_6=0;

        bouton_joueuse_7.style.backgroundColor="#f9eb3c";
        bouton_joueuse_7.style.color="#383338";
        bouton_joueuse_7.style.border="none";
        joueuse_8=0;

        bouton_joueuse_8.style.backgroundColor="#f9eb3c";
        bouton_joueuse_8.style.color="#383338";
        bouton_joueuse_8.style.border="none";
        joueuse_8=0;

        bouton_joueuse_3.style.backgroundColor="#f9eb3c";
        bouton_joueuse_3.style.color="#383338";
        bouton_joueuse_3.style.border="none";
        joueuse_3=0;

        bouton_joueuse_10.style.backgroundColor="#f9eb3c";
        bouton_joueuse_10.style.color="#383338";
        bouton_joueuse_10.style.border="none";
        joueuse_10=0;

        bouton_joueuse_11.style.backgroundColor="#f9eb3c";
        bouton_joueuse_11.style.color="#383338";
        bouton_joueuse_11.style.border="none";
        joueuse_11=0;

        bouton_joueuse_12.style.backgroundColor="#f9eb3c";
        bouton_joueuse_12.style.color="#383338";
        bouton_joueuse_12.style.border="none";
        joueuse_12=0;

        bouton_gardienne_1.style.backgroundColor="#383338";
        bouton_gardienne_1.style.color="#FFFFFF";
        bouton_gardienne_1.style.border="none";
        gardienne_1=0;

        bouton_gardienne_2.style.backgroundColor="#383338";
        bouton_gardienne_2.style.color="#FFFFFF";
        bouton_gardienne_2.style.border="none";
        gardienne_2=0;

    }
    else if (joueuse_9==1) {
        joueuse_9=0;
        bouton_joueuse_9.style.backgroundColor="#f9eb3c";
        bouton_joueuse_9.style.color="#383338";
        bouton_joueuse_9.style.border="none";
        
       }

});  

bouton_joueuse_10.addEventListener('click', function() {
    if (joueuse_10==0) {
        joueuse_10=1;
        bouton_joueuse_10.style.backgroundColor="#f9eb3c";
        bouton_joueuse_10.style.color="#05602F";
        bouton_joueuse_10.style.border="2px solid #05602F";

        bouton_joueuse_2.style.backgroundColor="#f9eb3c";
        bouton_joueuse_2.style.color="#383338";
        bouton_joueuse_2.style.border="none";
        joueuse_2=0;

        bouton_joueuse_1.style.backgroundColor="#f9eb3c";
        bouton_joueuse_1.style.color="#383338";
        bouton_joueuse_1.style.border="none";
        joueuse_1=0;

        bouton_joueuse_4.style.backgroundColor="#f9eb3c";
        bouton_joueuse_4.style.color="#383338";
        bouton_joueuse_4.style.border="none";
        joueuse_4=0;

        bouton_joueuse_5.style.backgroundColor="#f9eb3c";
        bouton_joueuse_5.style.color="#383338";
        bouton_joueuse_5.style.border="none";
        joueuse_5=0;

        bouton_joueuse_6.style.backgroundColor="#f9eb3c";
        bouton_joueuse_6.style.color="#383338";
        bouton_joueuse_6.style.border="none";
        joueuse_6=0;

        bouton_joueuse_7.style.backgroundColor="#f9eb3c";
        bouton_joueuse_7.style.color="#383338";
        bouton_joueuse_7.style.border="none";
        joueuse_8=0;

        bouton_joueuse_8.style.backgroundColor="#f9eb3c";
        bouton_joueuse_8.style.color="#383338";
        bouton_joueuse_8.style.border="none";
        joueuse_8=0;

        bouton_joueuse_9.style.backgroundColor="#f9eb3c";
        bouton_joueuse_9.style.color="#383338";
        bouton_joueuse_9.style.border="none";
        joueuse_9=0;

        bouton_joueuse_3.style.backgroundColor="#f9eb3c";
        bouton_joueuse_3.style.color="#383338";
        bouton_joueuse_3.style.border="none";
        joueuse_3=0;

        bouton_joueuse_11.style.backgroundColor="#f9eb3c";
        bouton_joueuse_11.style.color="#383338";
        bouton_joueuse_11.style.border="none";
        joueuse_11=0;

        bouton_joueuse_12.style.backgroundColor="#f9eb3c";
        bouton_joueuse_12.style.color="#383338";
        bouton_joueuse_12.style.border="none";
        joueuse_12=0;

        bouton_gardienne_1.style.backgroundColor="#383338";
        bouton_gardienne_1.style.color="#FFFFFF";
        bouton_gardienne_1.style.border="none";
        gardienne_1=0;

        bouton_gardienne_2.style.backgroundColor="#383338";
        bouton_gardienne_2.style.color="#FFFFFF";
        bouton_gardienne_2.style.border="none";
        gardienne_2=0;


    }
    else if (joueuse_10==1) {
        joueuse_10=0;
        bouton_joueuse_10.style.backgroundColor="#f9eb3c";
        bouton_joueuse_10.style.color="#383338";
        bouton_joueuse_10.style.border="none";
        
       }

});  

bouton_joueuse_11.addEventListener('click', function() {
    if (joueuse_11==0) {
        joueuse_11=1;
        bouton_joueuse_11.style.backgroundColor="#f9eb3c";
        bouton_joueuse_11.style.color="#05602F";
        bouton_joueuse_11.style.border="2px solid #05602F";

        bouton_joueuse_2.style.backgroundColor="#f9eb3c";
        bouton_joueuse_2.style.color="#383338";
        bouton_joueuse_2.style.border="none";
        joueuse_2=0;

        bouton_joueuse_1.style.backgroundColor="#f9eb3c";
        bouton_joueuse_1.style.color="#383338";
        bouton_joueuse_1.style.border="none";
        joueuse_1=0;

        bouton_joueuse_4.style.backgroundColor="#f9eb3c";
        bouton_joueuse_4.style.color="#383338";
        bouton_joueuse_4.style.border="none";
        joueuse_4=0;

        bouton_joueuse_5.style.backgroundColor="#f9eb3c";
        bouton_joueuse_5.style.color="#383338";
        bouton_joueuse_5.style.border="none";
        joueuse_5=0;

        bouton_joueuse_6.style.backgroundColor="#f9eb3c";
        bouton_joueuse_6.style.color="#383338";
        bouton_joueuse_6.style.border="none";
        joueuse_6=0;

        bouton_joueuse_7.style.backgroundColor="#f9eb3c";
        bouton_joueuse_7.style.color="#383338";
        bouton_joueuse_7.style.border="none";
        joueuse_8=0;

        bouton_joueuse_8.style.backgroundColor="#f9eb3c";
        bouton_joueuse_8.style.color="#383338";
        bouton_joueuse_8.style.border="none";
        joueuse_8=0;

        bouton_joueuse_9.style.backgroundColor="#f9eb3c";
        bouton_joueuse_9.style.color="#383338";
        bouton_joueuse_9.style.border="none";
        joueuse_9=0;

        bouton_joueuse_10.style.backgroundColor="#f9eb3c";
        bouton_joueuse_10.style.color="#383338";
        bouton_joueuse_10.style.border="none";
        joueuse_10=0;

        bouton_joueuse_3.style.backgroundColor="#f9eb3c";
        bouton_joueuse_3.style.color="#383338";
        bouton_joueuse_3.style.border="none";
        joueuse_3=0;

        bouton_joueuse_12.style.backgroundColor="#f9eb3c";
        bouton_joueuse_12.style.color="#383338";
        bouton_joueuse_12.style.border="none";
        joueuse_12=0;

        bouton_gardienne_1.style.backgroundColor="#383338";
        bouton_gardienne_1.style.color="#FFFFFF";
        bouton_gardienne_1.style.border="none";
        gardienne_1=0;

        bouton_gardienne_2.style.backgroundColor="#383338";
        bouton_gardienne_2.style.color="#FFFFFF";
        bouton_gardienne_2.style.border="none";
        gardienne_2=0;


    }
    else if (joueuse_11==1) {
        joueuse_11=0;
        bouton_joueuse_11.style.backgroundColor="#f9eb3c";
        bouton_joueuse_11.style.color="#383338";
        bouton_joueuse_11.style.border="none";
        
       }

});  

bouton_joueuse_12.addEventListener('click', function() {
    if (joueuse_12==0) {
        joueuse_12=1;
        bouton_joueuse_12.style.backgroundColor="#f9eb3c";
        bouton_joueuse_12.style.color="#05602F";
        bouton_joueuse_12.style.border="2px solid #05602F";

        bouton_joueuse_2.style.backgroundColor="#f9eb3c";
        bouton_joueuse_2.style.color="#383338";
        bouton_joueuse_2.style.border="none";
        joueuse_2=0;

        bouton_joueuse_1.style.backgroundColor="#f9eb3c";
        bouton_joueuse_1.style.color="#383338";
        bouton_joueuse_1.style.border="none";
        joueuse_1=0;

        bouton_joueuse_4.style.backgroundColor="#f9eb3c";
        bouton_joueuse_4.style.color="#383338";
        bouton_joueuse_4.style.border="none";
        joueuse_4=0;

        bouton_joueuse_5.style.backgroundColor="#f9eb3c";
        bouton_joueuse_5.style.color="#383338";
        bouton_joueuse_5.style.border="none";
        joueuse_5=0;

        bouton_joueuse_6.style.backgroundColor="#f9eb3c";
        bouton_joueuse_6.style.color="#383338";
        bouton_joueuse_6.style.border="none";
        joueuse_6=0;

        bouton_joueuse_7.style.backgroundColor="#f9eb3c";
        bouton_joueuse_7.style.color="#383338";
        bouton_joueuse_7.style.border="none";
        joueuse_8=0;

        bouton_joueuse_8.style.backgroundColor="#f9eb3c";
        bouton_joueuse_8.style.color="#383338";
        bouton_joueuse_8.style.border="none";
        joueuse_8=0;

        bouton_joueuse_9.style.backgroundColor="#f9eb3c";
        bouton_joueuse_9.style.color="#383338";
        bouton_joueuse_9.style.border="none";
        joueuse_9=0;

        bouton_joueuse_10.style.backgroundColor="#f9eb3c";
        bouton_joueuse_10.style.color="#383338";
        bouton_joueuse_10.style.border="none";
        joueuse_10=0;

        bouton_joueuse_11.style.backgroundColor="#f9eb3c";
        bouton_joueuse_11.style.color="#383338";
        bouton_joueuse_11.style.border="none";
        joueuse_11=0;

        bouton_joueuse_3.style.backgroundColor="#f9eb3c";
        bouton_joueuse_3.style.color="#383338";
        bouton_joueuse_3.style.border="none";
        joueuse_3=0;

        bouton_gardienne_1.style.backgroundColor="#383338";
        bouton_gardienne_1.style.color="#FFFFFF";
        bouton_gardienne_1.style.border="none";
        gardienne_1=0;

        bouton_gardienne_2.style.backgroundColor="#383338";
        bouton_gardienne_2.style.color="#FFFFFF";
        bouton_gardienne_2.style.border="none";
        gardienne_2=0;


    }
    else if (joueuse_12==1) {
        joueuse_12=0;
        bouton_joueuse_12.style.backgroundColor="#f9eb3c";
        bouton_joueuse_12.style.color="#383338";
        bouton_joueuse_12.style.border="none";
        
       }

});  

//Boutons gardiennes 

bouton_gardienne_1.addEventListener('click', function() {
    if (gardienne_1==0) {
        gardienne_1=1;
        bouton_gardienne_1.style.backgroundColor="#383338";
        bouton_gardienne_1.style.color="#f9eb3c";
        bouton_gardienne_1.style.border="2px solid #f9eb3c";

        bouton_gardienne_2.style.backgroundColor="#383338";
        bouton_gardienne_2.style.color="#FFFFFF";
        bouton_gardienne_2.style.border="none";
        gardienne_2=0;

        joueuse_7=0;
        bouton_joueuse_7.style.backgroundColor="#f9eb3cf9eb3c";
        bouton_joueuse_7.style.color="#383338";
        bouton_joueuse_7.style.border="none";

        bouton_joueuse_2.style.backgroundColor="#f9eb3c";
        bouton_joueuse_2.style.color="#383338";
        bouton_joueuse_2.style.border="none";
        joueuse_2=0;

        bouton_joueuse_1.style.backgroundColor="#f9eb3c";
        bouton_joueuse_1.style.color="#383338";
        bouton_joueuse_1.style.border="none";
        joueuse_1=0;

        bouton_joueuse_4.style.backgroundColor="#f9eb3c";
        bouton_joueuse_4.style.color="#383338";
        bouton_joueuse_4.style.border="none";
        joueuse_4=0;

        bouton_joueuse_5.style.backgroundColor="#f9eb3c";
        bouton_joueuse_5.style.color="#383338";
        bouton_joueuse_5.style.border="none";
        joueuse_5=0;

        bouton_joueuse_6.style.backgroundColor="#f9eb3c";
        bouton_joueuse_6.style.color="#383338";
        bouton_joueuse_6.style.border="none";
        joueuse_6=0;

        bouton_joueuse_3.style.backgroundColor="#f9eb3c";
        bouton_joueuse_3.style.color="#383338";
        bouton_joueuse_3.style.border="none";
        joueuse_3=0;

        bouton_joueuse_8.style.backgroundColor="#f9eb3c";
        bouton_joueuse_8.style.color="#383338";
        bouton_joueuse_8.style.border="none";
        joueuse_8=0;

        bouton_joueuse_9.style.backgroundColor="#f9eb3c";
        bouton_joueuse_9.style.color="#383338";
        bouton_joueuse_9.style.border="none";
        joueuse_9=0;

        bouton_joueuse_10.style.backgroundColor="#f9eb3c";
        bouton_joueuse_10.style.color="#383338";
        bouton_joueuse_10.style.border="none";
        joueuse_10=0;

        bouton_joueuse_11.style.backgroundColor="#f9eb3c";
        bouton_joueuse_11.style.color="#383338";
        bouton_joueuse_11.style.border="none";
        joueuse_11=0;

        bouton_joueuse_12.style.backgroundColor="#f9eb3c";
        bouton_joueuse_12.style.color="#383338";
        bouton_joueuse_12.style.border="none";
        joueuse_12=0;

    }
    else if (gardienne_1==1) {
        gardienne_1=0;
        bouton_gardienne_1.style.backgroundColor="#383338";
        bouton_gardienne_1.style.color="#FFFFFF";
        bouton_gardienne_1.style.border="none";
        
       }

});  


bouton_gardienne_2.addEventListener('click', function() {
    if (gardienne_2==0) {
        gardienne_2=1;
        bouton_gardienne_2.style.backgroundColor="#383338";
        bouton_gardienne_2.style.color="#f9eb3c";
        bouton_gardienne_2.style.border="2px solid #f9eb3c";

        bouton_gardienne_1.style.backgroundColor="#383338";
        bouton_gardienne_1.style.color="#FFFFFF";
        bouton_gardienne_1.style.border="none";
        gardienne_1=0;

        joueuse_7=0;
        bouton_joueuse_7.style.backgroundColor="#f9eb3cf9eb3c";
        bouton_joueuse_7.style.color="#383338";
        bouton_joueuse_7.style.border="none";

        bouton_joueuse_2.style.backgroundColor="#f9eb3c";
        bouton_joueuse_2.style.color="#383338";
        bouton_joueuse_2.style.border="none";
        joueuse_2=0;

        bouton_joueuse_1.style.backgroundColor="#f9eb3c";
        bouton_joueuse_1.style.color="#383338";
        bouton_joueuse_1.style.border="none";
        joueuse_1=0;

        bouton_joueuse_4.style.backgroundColor="#f9eb3c";
        bouton_joueuse_4.style.color="#383338";
        bouton_joueuse_4.style.border="none";
        joueuse_4=0;

        bouton_joueuse_5.style.backgroundColor="#f9eb3c";
        bouton_joueuse_5.style.color="#383338";
        bouton_joueuse_5.style.border="none";
        joueuse_5=0;

        bouton_joueuse_6.style.backgroundColor="#f9eb3c";
        bouton_joueuse_6.style.color="#383338";
        bouton_joueuse_6.style.border="none";
        joueuse_6=0;

        bouton_joueuse_3.style.backgroundColor="#f9eb3c";
        bouton_joueuse_3.style.color="#383338";
        bouton_joueuse_3.style.border="none";
        joueuse_3=0;

        bouton_joueuse_8.style.backgroundColor="#f9eb3c";
        bouton_joueuse_8.style.color="#383338";
        bouton_joueuse_8.style.border="none";
        joueuse_8=0;

        bouton_joueuse_9.style.backgroundColor="#f9eb3c";
        bouton_joueuse_9.style.color="#383338";
        bouton_joueuse_9.style.border="none";
        joueuse_9=0;

        bouton_joueuse_10.style.backgroundColor="#f9eb3c";
        bouton_joueuse_10.style.color="#383338";
        bouton_joueuse_10.style.border="none";
        joueuse_10=0;

        bouton_joueuse_11.style.backgroundColor="#f9eb3c";
        bouton_joueuse_11.style.color="#383338";
        bouton_joueuse_11.style.border="none";
        joueuse_11=0;

        bouton_joueuse_12.style.backgroundColor="#f9eb3c";
        bouton_joueuse_12.style.color="#383338";
        bouton_joueuse_12.style.border="none";
        joueuse_12=0;

    }
    else if (gardienne_2==1) {
        gardienne_2=0;
        bouton_gardienne_2.style.backgroundColor="#383338";
        bouton_gardienne_2.style.color="#FFFFFF";
        bouton_gardienne_2.style.border="none";
        
       }

});  


//Code JS section zones -----------------------
let up = 0;
let down = 0;

let bouton_up = document.getElementById("marque");
let bouton_down = document.getElementById("rate");


bouton_up.addEventListener('click', function() {
    if (up==0) {
        up=1;
        bouton_up.style.backgroundColor="#f9eb3c";
        bouton_up.style.color="#383338";
    }
    else if (up==1) {
        up=0;
        bouton_up.style.backgroundColor="rgba(255,255,255,0)";
        bouton_up.style.color="#05602F";
       }
});

bouton_down.addEventListener('click', function() {
    if (down==0) {
        down=1;
        bouton_down.style.backgroundColor="#f9eb3c";
        bouton_down.style.color="#383338"
    }
    else if (down==1) {
        down=0;
        bouton_down.style.backgroundColor="rgba(255,255,255,0)";
        bouton_down.style.color="#05602F"
    }
});

let but1 = 0;
let but2 = 0;
let but3 = 0;
let but4 = 0;
let but5 = 0;
let but6 = 0;
let but7 = 0;
let but8 = 0;
let but9 = 0;

let bouton_but1 = document.getElementById("zb1");

bouton_but1.addEventListener('click', function() {
    if (but1==0) {
        but1=1;
        bouton_but1.style.fillOpacity="0.3"
    }
    else if (but1==1) {
        but1=0;
        bouton_but1.style.fillOpacity="0"
       }
});