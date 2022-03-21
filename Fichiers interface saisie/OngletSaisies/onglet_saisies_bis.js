// Boutons temps action
let periode="0-15";

let case_0_15=document.getElementById("0/15");
let case_15_30=document.getElementById("15/30");
let case_30_45=document.getElementById("30/45");
let case_45_60=document.getElementById("45/60");

let input_periode=document.getElementById("periode");

case_0_15.addEventListener('click',function() {
    periode="0-15";
    console.log(periode);
    input_periode.value=periode;
});
case_15_30.addEventListener('click',function() {
    periode="15-30";
    console.log(periode);
    input_periode.value=periode;

});
case_30_45.addEventListener('click',function() {
    periode="30-45";
    console.log(periode);
    input_periode.value=periode;

});
case_45_60.addEventListener('click',function() {
    periode="45-60";
    console.log(periode);
    input_periode.value=periode;

});


//Boutons action type (attaque-défense)
let attaque=1;


let bouton_Defense = document.getElementById("bouton_Defense");
let bouton_Attaque = document.getElementById("bouton_Attaque");
let input_attaque=document.getElementById("input_attaque");

bouton_Defense.addEventListener('click',function() {
    if (attaque==1) {
        attaque=0;
        bouton_Defense.style.backgroundColor="#f9eb3c";
        bouton_Attaque.style.backgroundColor="#FBFBFB";
        input_attaque.value=attaque;
    }   
    }
);

bouton_Attaque.addEventListener('click',function(){
    if (attaque==0){
        attaque=1;
        bouton_Defense.style.backgroundColor="#FBFBFB";
        bouton_Attaque.style.backgroundColor="#f9eb3c";
        input_attaque.value=attaque;

    }
}
);

//Boutons type attaque (Attaque Placée ou Contre-attaque)
let attaque_Placee=1;

let bouton_Attaque_Placee = document.getElementById("bouton_Attaque_Placee");
let bouton_Contre_Attaque = document.getElementById("bouton_Contre_Attaque");
let bouton_Switch = document.getElementById("myonoffswitch");

let input_attaque_placee=document.getElementById("input_attaque_Placee");


bouton_Switch.addEventListener('change',function(e){
    e.preventDefault();
   
    if (attaque_Placee==1){
        attaque_Placee=0;
        bouton_Contre_Attaque.style.backgroundColor="#f9eb3c";
        bouton_Attaque_Placee.style.backgroundColor="#FBFBFB";
        input_attaque_placee.value=attaque_Placee;
    }   
    
    else if (attaque_Placee==0){
        attaque_Placee=1;
        bouton_Contre_Attaque.style.backgroundColor="#FBFBFB";
        bouton_Attaque_Placee.style.backgroundColor="#f9eb3c";
        input_attaque_placee.value=attaque_Placee;

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

let input_carton_jaune=document.getElementById("input_carton_jaune");
let input_carton_rouge=document.getElementById("input_carton_rouge");
let input_2_min=document.getElementById("input_deux_min");


let bouton_carton_jaune = document.getElementById("conteneur_carton_jaune");
let bouton_carton_rouge = document.getElementById("conteneur_carton_rouge");
let bouton_2min = document.getElementById("Deux_min");

bouton_carton_jaune.addEventListener('click', function()
{
    if (carton_jaune==0) {
        carton_jaune=1;
        bouton_carton_jaune.style.borderColor="#f9eb3c";
        bouton_carton_jaune.style.borderWidth="1.5px";
        input_carton_jaune.value=carton_jaune;
        
    }
    else if (carton_jaune==1) {
        carton_jaune=0;
        bouton_carton_jaune.style.borderColor="rgba(220, 220, 220, 0.12)";
        input_carton_jaune.value=carton_jaune;
  
      }

});

bouton_carton_rouge.addEventListener('click', function()
{
    if (carton_rouge==0) {
        carton_rouge=1;
        bouton_carton_rouge.style.borderColor="#f9eb3c";
        bouton_carton_jaune.style.borderWidth="1.5px";
        input_carton_rouge.value=carton_rouge;
    }
    else if (carton_rouge==1) {
        carton_rouge=0;
        bouton_carton_rouge.style.borderColor="rgba(220, 220, 220, 0.12)"
        input_carton_rouge.value=carton_rouge;
        }

});


bouton_2min.addEventListener('click', function(){
    if (deux_min==0) {
        deux_min=1;
        bouton_2min.style.backgroundColor="#f9eb3c";
        input_2_min.value=deux_min;

    }
    else if (deux_min==1) {
        deux_min=0;
        bouton_2min.style.backgroundColor="#dcdcdc03";
        input_2_min.value=deux_min;
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
let duel_perdu=0;
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
let bouton_duel_perdu_a=document.getElementById("duel_perdu_a");

let input_faute_zone=document.getElementById("input_faute_zone");
let input_marcher=document.getElementById("input_marche");

let input_reprise_de_drible=document.getElementById("input_reprise_de_drible");
let input_balle_perdue=document.getElementById("input_balle_perdue");
let input_mauvaise_relance=document.getElementById("input_mauvaise_relance");
let input_passage_en_force=document.getElementById("input_passage_en_force");
let input_faute_subie=document.getElementById("input_faute_subie");
let input_tir_contre=document.getElementById("input_tir_contre");
let input_deux_min_provoque=document.getElementById("input_deux_min_provoque");
let input_faute_sept_m=document.getElementById("input_faute_sept_m");
let input_duel_gagne=document.getElementById("input_duel_gagne");
let input_duel_perdu_a=document.getElementById("input_duel_perdu_a");
let input_relance=document.getElementById("input_relance");





bouton_faute_zone.addEventListener('click', function()
{
    if (faute_zone==0) {
        faute_zone=1;
        bouton_faute_zone.style.backgroundColor="#f9eb3c";
        bouton_faute_zone.style.color="#383338"
        input_faute_zone.value=faute_zone
    }
    else if (faute_zone==1) {
        faute_zone=0;
        bouton_faute_zone.style.backgroundColor="#589474";
        bouton_faute_zone.style.color="#FFFFFF";
        input_faute_zone.value=faute_zone

       }

});

bouton_marche.addEventListener('click', function()
{
    if (marche==0) {
        marche=1;
        bouton_marche.style.backgroundColor="#f9eb3c";
        bouton_marche.style.color="#383338"
        input_marche.value=marche;

    }
    else if (marche==1) {
        marche=0;
        bouton_marche.style.backgroundColor="#589474";
        bouton_marche.style.color="#FFFFFF";
        input_marche.value=marche;

       }

});

bouton_reprise_drible.addEventListener('click', function()
{
    if (reprise_drible==0) {
        reprise_drible=1;
        bouton_reprise_drible.style.backgroundColor="#f9eb3c";
        bouton_reprise_drible.style.color="#383338"
        input_reprise_de_drible.value=reprise_drible;
    }
    else if (reprise_drible==1) {
        reprise_drible=0;
        bouton_reprise_drible.style.backgroundColor="#589474";
        bouton_reprise_drible.style.color="#FFFFFF";
        input_reprise_de_drible.value=reprise_drible;
       }

});

bouton_balle_perdue.addEventListener('click', function()
{
    if (balle_perdue==0) {
        balle_perdue=1;
        bouton_balle_perdue.style.backgroundColor="#f9eb3c";
        bouton_balle_perdue.style.color="#383338"
        input_balle_perdue.value=balle_perdue;
    }
    else if (balle_perdue==1) {
        balle_perdue=0;
        bouton_balle_perdue.style.backgroundColor="#589474";
        bouton_balle_perdue.style.color="#FFFFFF";
        input_balle_perdue.value=balle_perdue;
       }

});

bouton_mauvaise_relance.addEventListener('click', function()
{
    if (mauvaise_relance==0) {
        mauvaise_relance=1;
        bouton_mauvaise_relance.style.backgroundColor="#f9eb3c";
        bouton_mauvaise_relance.style.color="#383338"
        input_mauvaise_relance.value=mauvaise_relance;
    }
    else if (mauvaise_relance==1) {
        mauvaise_relance=0;
        bouton_mauvaise_relance.style.backgroundColor="#589474";
        bouton_mauvaise_relance.style.color="#FFFFFF";
        input_mauvaise_relance.value=mauvaise_relance;

       }

});

bouton_duel_perdu_a.addEventListener('click', function()
{
    if (duel_perdu==0) {
        duel_perdu=1;
        bouton_duel_perdu_a.style.backgroundColor="#f9eb3c";
        bouton_duel_perdu_a.style.color="#383338"
        input_duel_perdu_a.value=duel_perdu;
    }
    else if (duel_perdu==1) {
        duel_perdu=0;
        bouton_duel_perdu_a.style.backgroundColor="#589474";
        bouton_duel_perdu_a.style.color="#FFFFFF";
        input_duel_perdu_a.value=duel_perdu;
       }

});

bouton_passage_en_force.addEventListener('click', function()
{
    if (passage_en_force==0) {
        passage_en_force=1;
        bouton_passage_en_force.style.backgroundColor="#f9eb3c";
        bouton_passage_en_force.style.color="#383338"
        input_passage_en_force.value=passage_en_force;
    }
    else if (passage_en_force==1) {
        passage_en_force=0;
        bouton_passage_en_force.style.backgroundColor="#589474";
        bouton_passage_en_force.style.color="#FFFFFF";
        input_passage_en_force.value=passage_en_force;
       }

});

bouton_faute_subie.addEventListener('click', function()
{
    if (faute_subie==0) {
        faute_subie=1;
        bouton_faute_subie.style.backgroundColor="#f9eb3c";
        bouton_faute_subie.style.color="#383338"
        input_faute_subie.value=faute_subie;
    }
    else if (faute_subie==1) {
        faute_subie=0;
        bouton_faute_subie.style.backgroundColor="#589474";
        bouton_faute_subie.style.color="#FFFFFF";
        input_faute_subie.value=faute_subie;
       }

});

bouton_tir_contre.addEventListener('click', function()
{
    if (tir_contre==0) {
        tir_contre=1;
        bouton_tir_contre.style.backgroundColor="#f9eb3c";
        bouton_tir_contre.style.color="#383338"
        input_tir_contre.value=tir_contre;
    }
    else if (tir_contre==1) {
        tir_contre=0;
        bouton_tir_contre.style.backgroundColor="#589474";
        bouton_tir_contre.style.color="#FFFFFF";
        input_tir_contre.value=tir_contre;

       }

});

bouton_deux_min_provoque.addEventListener('click', function()
{
    if (deux_min_provoque==0) {
        deux_min_provoque=1;
        bouton_deux_min_provoque.style.backgroundColor="#f9eb3c";
        bouton_deux_min_provoque.style.color="#383338"
        input_deux_min_provoque.value=deux_min_provoque;
    }
    else if (deux_min_provoque==1) {
        deux_min_provoque=0;
        bouton_deux_min_provoque.style.backgroundColor="#589474";
        bouton_deux_min_provoque.style.color="#FFFFFF";
        input_deux_min_provoque.value=deux_min_provoque;

       }

});

bouton_sept_m.addEventListener('click', function()
{
    if (sept_m==0) {
        sept_m=1;
        bouton_sept_m.style.backgroundColor="#f9eb3c";
        bouton_sept_m.style.color="#383338"
        input_faute_sept_m.value=sept_m;
    }
    else if (sept_m==1) {
        sept_m=0;
        bouton_sept_m.style.backgroundColor="#589474";
        bouton_sept_m.style.color="#FFFFFF";
        input_faute_sept_m.value=sept_m;
       }

});


bouton_duel_gagne.addEventListener('click', function()
{
    if (duel_gagne==0) {
        duel_gagne=1;
        bouton_duel_gagne.style.backgroundColor="#f9eb3c";
        bouton_duel_gagne.style.color="#383338"
        input_duel_gagne.value=duel_gagne;
        
    }
    else if (duel_gagne==1) {
        duel_gagne=0;
        bouton_duel_gagne.style.backgroundColor="#589474";
        bouton_duel_gagne.style.color="#FFFFFF";
        input_duel_gagne.value=duel_gagne;

       }

});


bouton_relance.addEventListener('click', function()
{
    if (relance==0) {
        relance=1;
        bouton_relance.style.backgroundColor="#f9eb3c";
        bouton_relance.style.color="#383338"
        input_relance.value=relance;
    }
    else if (relance==1) {
        relance=0;
        bouton_relance.style.backgroundColor="#589474";
        bouton_relance.style.color="#FFFFFF";
        input_relance.value=relance;

       }

});

//Boutons faits de jeu - Défense

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


let input_balle_recuperee=document.getElementById("input_balle_recuperee_d");
let input_interception=document.getElementById("input_interception_d");



bouton_faute_zone_d.addEventListener('click', function()
{
    if (faute_zone==0) {
        faute_zone=1;
        bouton_faute_zone_d.style.backgroundColor="#f9eb3c";
        bouton_faute_zone_d.style.color="#383338"
        input_faute_zone.value=faute_zone;
    }
    else if (faute_zone==1) {
        faute_zone=0;
        bouton_faute_zone_d.style.backgroundColor="#589474";
        bouton_faute_zone_d.style.color="#FFFFFF";
        input_faute_zone.value=faute_zone;

       }

});

bouton_marche_d.addEventListener('click', function()
{
    if (marche==0) {
        marche=1;
        bouton_marche_d.style.backgroundColor="#f9eb3c";
        bouton_marche_d.style.color="#383338"
        input_marcher.value=marche;
    }
    else if (marche==1) {
        marche=0;
        bouton_marche_d.style.backgroundColor="#589474";
        bouton_marche_d.style.color="#FFFFFF";
        input_marche.value=marche;

       }

});

bouton_reprise_drible_d.addEventListener('click', function()
{
    if (reprise_drible==0) {
        reprise_drible=1;
        bouton_reprise_drible_d.style.backgroundColor="#f9eb3c";
        bouton_reprise_drible_d.style.color="#383338"
        input_reprise_de_drible.value=reprise_drible;
    }
    else if (reprise_drible==1) {
        reprise_drible=0;
        bouton_reprise_drible_d.style.backgroundColor="#589474";
        bouton_reprise_drible_d.style.color="#FFFFFF";
        input_reprise_de_drible.value=reprise_drible;
       }

});

bouton_balle_recuperee_d.addEventListener('click', function()
{
    if (balle_recuperee==0) {
        balle_recuperee=1;
        bouton_balle_recuperee_d.style.backgroundColor="#f9eb3c";
        bouton_balle_recuperee_d.style.color="#383338"
        input_balle_recuperee.value=balle_recuperee;
    }
    else if (balle_recuperee==1) {
        balle_recuperee=0;
        bouton_balle_recuperee_d.style.backgroundColor="#589474";
        bouton_balle_recuperee_d.style.color="#FFFFFF";
        input_balle_recuperee.value=balle_recuperee;

       }

});

bouton_mauvaise_relance_d.addEventListener('click', function()
{
    if (mauvaise_relance==0) {
        mauvaise_relance=1;
        bouton_mauvaise_relance_d.style.backgroundColor="#f9eb3c";
        bouton_mauvaise_relance_d.style.color="#383338"
        input_mauvaise_relance.value=mauvaise_relance;

    }
    else if (mauvaise_relance==1) {
        mauvaise_relance=0;
        bouton_mauvaise_relance_d.style.backgroundColor="#589474";
        bouton_mauvaise_relance_d.style.color="#FFFFFF";
        input_mauvaise_relance.value=mauvaise_relance;

       }

});

bouton_passage_en_force_d.addEventListener('click', function()
{
    if (passage_en_force==0) {
        passage_en_force=1;
        bouton_passage_en_force_d.style.backgroundColor="#f9eb3c";
        bouton_passage_en_force_d.style.color="#383338"
        input_passage_en_force.value=passage_en_force;
    }
    else if (passage_en_force==1) {
        passage_en_force=0;
        bouton_passage_en_force_d.style.backgroundColor="#589474";
        bouton_passage_en_force_d.style.color="#FFFFFF";
        input_passage_en_force.value=passage_en_force;

       }

});

bouton_faute_subie_d.addEventListener('click', function()
{
    if (faute_subie==0) {
        faute_subie=1;
        bouton_faute_subie_d.style.backgroundColor="#f9eb3c";
        bouton_faute_subie_d.style.color="#383338"
        input_faute_subie.value=faute_subie;
    }
    else if (faute_subie==1) {
        faute_subie=0;
        bouton_faute_subie_d.style.backgroundColor="#589474";
        bouton_faute_subie_d.style.color="#FFFFFF";
        input_faute_subie.value=faute_subie;
       }

});

bouton_tir_contre_d.addEventListener('click', function()
{
    if (tir_contre==0) {
        tir_contre=1;
        bouton_tir_contre_d.style.backgroundColor="#f9eb3c";
        bouton_tir_contre_d.style.color="#383338"
        input_tir_contre.value=tir_contre;
    }
    else if (tir_contre==1) {
        tir_contre=0;
        bouton_tir_contre_d.style.backgroundColor="#589474";
        bouton_tir_contre_d.style.color="#FFFFFF";
        input_tir_contre.value=tir_contre;
       }

});

bouton_interception_d.addEventListener('click', function()
{
    if (interception==0) {
        interception=1;
        bouton_interception_d.style.backgroundColor="#f9eb3c";
        bouton_interception_d.style.color="#383338"
        input_interception.value=interception;
    }
    else if (interception==1) {
        interception=0;
        bouton_interception_d.style.backgroundColor="#589474";
        bouton_interception_d.style.color="#FFFFFF";
        input_interception.value=interception;

       }

});

bouton_deux_min_provoque_d.addEventListener('click', function()
{
    if (deux_min_provoque==0) {
        deux_min_provoque=1;
        bouton_deux_min_provoque_d.style.backgroundColor="#f9eb3c";
        bouton_deux_min_provoque_d.style.color="#383338"
        input_deux_min_provoque.value=deux_min_provoque;
    }
    else if (deux_min_provoque==1) {
        deux_min_provoque=0;
        bouton_deux_min_provoque_d.style.backgroundColor="#589474";
        bouton_deux_min_provoque_d.style.color="#FFFFFF";
        input_deux_min_provoque.value=deux_min_provoque;
       }

});

bouton_sept_m_d.addEventListener('click', function()
{
    if (sept_m==0) {
        sept_m=1;
        bouton_sept_m_d.style.backgroundColor="#f9eb3c";
        bouton_sept_m_d.style.color="#383338"
        input_faute_sept_m.value=sept_m;
    }
    else if (sept_m==1) {
        sept_m=0;
        bouton_sept_m_d.style.backgroundColor="#589474";
        bouton_sept_m_d.style.color="#FFFFFF";
        input_faute_sept_m.value=sept_m;
       }

});


bouton_duel_gagne_d.addEventListener('click', function()
{
    if (duel_gagne==0) {
        duel_gagne=1;
        bouton_duel_gagne_d.style.backgroundColor="#f9eb3c";
        bouton_duel_gagne_d.style.color="#383338"
        input_duel_gagne.value=duel_gagne;
    }
    else if (duel_gagne==1) {
        duel_gagne=0;
        bouton_duel_gagne_d.style.backgroundColor="#589474";
        bouton_duel_gagne_d.style.color="#FFFFFF";
        input_duel_gagne.value=duel_gagne;
       }

});

bouton_duel_perdu_d.addEventListener('click', function()
{
    if (duel_perdu==0) {
        duel_perdu=1;
        bouton_duel_perdu_d.style.backgroundColor="#f9eb3c";
        bouton_duel_perdu_d.style.color="#383338"
        input_duel_perdu_a.value=duel_perdu;
    }
    else if (duel_perdu==1) {
        duel_perdu=0;
        bouton_duel_perdu_d.style.backgroundColor="#589474";
        bouton_duel_perdu_d.style.color="#FFFFFF";
        input_duel_perdu.value=duel_perdu;
       }

});

bouton_relance_d.addEventListener('click', function()
{
    if (relance==0) {
        relance=1;
        bouton_relance_d.style.backgroundColor="#f9eb3c";
        bouton_relance_d.style.color="#383338"
        input_relance.value=relance;
    }
    else if (relance==1) {
        relance=0;
        bouton_relance_d.style.backgroundColor="#589474";
        bouton_relance_d.style.color="#FFFFFF";
        input_relance .value=relance;
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

let input_joueuse=document.getElementById("input_joueuse");
let input_id_joueuse=document.getElementById("input_id_joueuse");



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

        input_joueuse.value=nom_joueuse1;
        input_id_joueuse.value=id_joueuse1;


    }
    else if (joueuse_1==1) {
        joueuse_1=0;
        bouton_joueuse_1.style.backgroundColor="#f9eb3c";
        bouton_joueuse_1.style.color="#383338";
        bouton_joueuse_1.style.border="none";

        input_joueuse.value="";
        input_id_joueuse.value="";


        
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

        input_joueuse.value=nom_joueuse2;
        input_id_joueuse.value=id_joueuse2;



    }
    else if (joueuse_2==1) {
        joueuse_2=0;
        bouton_joueuse_2.style.backgroundColor="#f9eb3c";
        bouton_joueuse_2.style.color="#383338";
        bouton_joueuse_2.style.border="none";

        input_joueuse.value="";
        input_id_joueuse.value="";
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

        input_joueuse.value=nom_joueuse3;
        input_id_joueuse.value=id_joueuse3;


    }
    else if (joueuse_3==1) {
        joueuse_3=0;
        bouton_joueuse_3.style.backgroundColor="#f9eb3c";
        bouton_joueuse_3.style.color="#383338";
        bouton_joueuse_3.style.border="none";

        input_joueuse.value="";
        input_id_joueuse.value="";

        
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

        input_joueuse.value=nom_joueuse4;
        input_id_joueuse.value=id_joueuse4;



    }
    else if (joueuse_4==1) {
        joueuse_4=0;
        bouton_joueuse_4.style.backgroundColor="#f9eb3c";
        bouton_joueuse_4.style.color="#383338";
        bouton_joueuse_4.style.border="none";

        input_joueuse.value="";
        input_id_joueuse.value="";

        
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

        input_joueuse.value=nom_joueuse5;
        input_id_joueuse.value=id_joueuse5;



    }
    else if (joueuse_5==1) {
        joueuse_5=0;
        bouton_joueuse_5.style.backgroundColor="#f9eb3c";
        bouton_joueuse_5.style.color="#383338";
        bouton_joueuse_5.style.border="none";

        input_joueuse.value="";
        input_id_joueuse.value="";

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

        input_joueuse.value=nom_joueuse6;
        input_id_joueuse.value=id_joueuse6;




    }
    else if (joueuse_6==1) {
        joueuse_6=0;
        bouton_joueuse_6.style.backgroundColor="#f9eb3c";
        bouton_joueuse_6.style.color="#383338";
        bouton_joueuse_6.style.border="none";

        input_joueuse.value="";
        input_id_joueuse.value="";

        
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

        input_joueuse.value=nom_joueuse7;
        input_id_joueuse.value=id_joueuse7;



    }
    else if (joueuse_7==1) {
        joueuse_7=0;
        bouton_joueuse_7.style.backgroundColor="#f9eb3c";
        bouton_joueuse_7.style.color="#383338";
        bouton_joueuse_7.style.border="none";

        input_joueuse.value="";
        input_id_joueuse.value="";

        
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

        input_joueuse.value=nom_joueuse8;
        input_id_joueuse.value=id_joueuse8;


    }
    else if (joueuse_8==1) {
        joueuse_8=0;
        bouton_joueuse_8.style.backgroundColor="#f9eb3c";
        bouton_joueuse_8.style.color="#383338";
        bouton_joueuse_8.style.border="none";

        input_joueuse.value="";
        input_id_joueuse.value="";

        
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

        input_joueuse.value=nom_joueuse9;
        input_id_joueuse.value=id_joueuse9;



    }
    else if (joueuse_9==1) {
        joueuse_9=0;
        bouton_joueuse_9.style.backgroundColor="#f9eb3c";
        bouton_joueuse_9.style.color="#383338";
        bouton_joueuse_9.style.border="none";

        input_joueuse.value="";
        input_id_joueuse.value="";

        
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

        input_joueuse.value=nom_joueuse10;
        input_id_joueuse.value=id_joueuse10;




    }
    else if (joueuse_10==1) {
        joueuse_10=0;
        bouton_joueuse_10.style.backgroundColor="#f9eb3c";
        bouton_joueuse_10.style.color="#383338";
        bouton_joueuse_10.style.border="none";

        input_joueuse.value="";
        input_id_joueuse.value="";

        
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

        input_joueuse.value=nom_joueuse11;
        input_id_joueuse.value=id_joueuse11;




    }
    else if (joueuse_11==1) {
        joueuse_11=0;
        bouton_joueuse_11.style.backgroundColor="#f9eb3c";
        bouton_joueuse_11.style.color="#383338";
        bouton_joueuse_11.style.border="none";

        input_joueuse.value="";
        input_id_joueuse.value="";

        
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

        input_joueuse.value=nom_joueuse12;
        input_id_joueuse.value=id_joueuse12;




    }
    else if (joueuse_12==1) {
        joueuse_12=0;
        bouton_joueuse_12.style.backgroundColor="#f9eb3c";
        bouton_joueuse_12.style.color="#383338";
        bouton_joueuse_12.style.border="none";

        input_joueuse.value="";
        input_id_joueuse.value="";

        
       }

});  

//Boutons gardiennes 

let input_gardienne_1=document.getElementById("input_gardienne_1");
let input_gardienne_2=document.getElementById("input_gardienne_2");



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

        input_joueuse.value=nom_gardienne1;
        input_id_joueuse.value=id_gardienne1;



    }
    else if (gardienne_1==1) {
        gardienne_1=0;
        bouton_gardienne_1.style.backgroundColor="#383338";
        bouton_gardienne_1.style.color="#FFFFFF";
        bouton_gardienne_1.style.border="none";

        input_joueuse.value="";
        input_id_joueuse.value="";

        
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

        input_joueuse.value=nom_gardienne2;
        input_id_joueuse.value=id_gardienne2;



    }
    else if (gardienne_2==1) {
        gardienne_2=0;
        bouton_gardienne_2.style.backgroundColor="#383338";
        bouton_gardienne_2.style.color="#FFFFFF";
        bouton_gardienne_2.style.border="none";

        input_joueuse.value="";
        input_id_joueuse.value="";
        
       }

});  


//Code JS section zones cage et terrain  -----------------------
let up = 0;
let down = 0;

let bouton_up = document.getElementById("marque");
let bouton_down = document.getElementById("rate");

let input_tir=document.getElementById("input_tir");
let input_but=document.getElementById("input_but");
let input_sept_m=document.getElementById("input_sept_m")


let but=0;
let tir=0;

let zone_cage=null;
let zone_terrain=null;

let input_zone_terrain=document.getElementById("zone_terrain");
let input_zone_cage=document.getElementById("zone_cage");


bouton_up.addEventListener('click', function() {
    if (up==0) {
        up=1;
        bouton_up.style.backgroundColor="#f9eb3c";
        bouton_up.style.color="#383338";
        but=1;
        tir=1;
        input_tir.value=tir;
        input_but.value=but;
    }
    else if (up==1) {
        up=0;
        bouton_up.style.backgroundColor="rgba(255,255,255,0)";
        bouton_up.style.color="#05602F";
        but=0;
        tir=0;
        input_tir.value=tir;
        input_but.value=but;
       }
});

bouton_down.addEventListener('click', function() {
    if (down==0) {
        down=1;
        bouton_down.style.backgroundColor="#f9eb3c";
        bouton_down.style.color="#383338"
        but=0;
        tir=1;
        input_tir.value=tir;
        input_but.value=but;
    }
    else if (down==1) {
        down=0;
        bouton_down.style.backgroundColor="rgba(255,255,255,0)";
        bouton_down.style.color="#05602F"
        but=0;
        tir=0;
        input_tir.value=tir;
        input_but.value=but;
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

        bouton_but1.style.fillOpacity="0.7";
        bouton_but2.style.fillOpacity="0";
        bouton_but3.style.fillOpacity="0";
        bouton_but4.style.fillOpacity="0";
        bouton_but5.style.fillOpacity="0";
        bouton_but6.style.fillOpacity="0";
        bouton_but7.style.fillOpacity="0";
        bouton_but8.style.fillOpacity="0";
        bouton_but9.style.fillOpacity="0";
        bouton_but0.style.fillOpacity="0";
        zone_cage=1;
        input_zone_cage.value=zone_cage;
    }
    else if (but1==true) {
        but1=false;
        bouton_but1.style.fillOpacity="0"
        zone_cage=null;
        input_zone_cage.value=zone_cage;

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
        bouton_but1.style.fillOpacity="0";
        bouton_but2.style.fillOpacity="0.7";
        bouton_but3.style.fillOpacity="0";
        bouton_but4.style.fillOpacity="0";
        bouton_but5.style.fillOpacity="0";
        bouton_but6.style.fillOpacity="0";
        bouton_but7.style.fillOpacity="0";
        bouton_but8.style.fillOpacity="0";
        bouton_but9.style.fillOpacity="0";
        bouton_but0.style.fillOpacity="0";
        zone_cage=1;
        input_zone_cage.value=zone_cage;

    }
    else if (but2==true) {
        but2=false;
        bouton_but2.style.fillOpacity="0";
        zone_cage=null;
        input_zone_cage.value=zone_cage;


       }
});

bouton_but3.addEventListener('click', function() {
    if (but3==false) {
        but3=true;
        but2=false;
        but1=false;
        but4=false;
        but5=false;
        but6=false;
        but7=false;
        but8=false;
        but9=false;

        bouton_but1.style.fillOpacity="0";
        bouton_but2.style.fillOpacity="0";
        bouton_but3.style.fillOpacity="0.7";
        bouton_but4.style.fillOpacity="0";
        bouton_but5.style.fillOpacity="0";
        bouton_but6.style.fillOpacity="0";
        bouton_but7.style.fillOpacity="0";
        bouton_but8.style.fillOpacity="0";
        bouton_but9.style.fillOpacity="0";
        bouton_but0.style.fillOpacity="0";
        zone_cage=3;
        input_zone_cage.value=zone_cage;

    }
    else if (but3==true) {
        but3=false;
        bouton_but3.style.fillOpacity="0";
        zone_cage=null;
        input_zone_cage.value=zone_cage;


       }
});

bouton_but4.addEventListener('click', function() {
    if (but4==false) {
        but4=true;
        but2=false;
        but1=false;
        but3=false;
        but5=false;
        but6=false;
        but7=false;
        but8=false;
        but9=false;

        bouton_but1.style.fillOpacity="0";
        bouton_but2.style.fillOpacity="0";
        bouton_but3.style.fillOpacity="0";
        bouton_but4.style.fillOpacity="0.7";
        bouton_but5.style.fillOpacity="0";
        bouton_but6.style.fillOpacity="0";
        bouton_but7.style.fillOpacity="0";
        bouton_but8.style.fillOpacity="0";
        bouton_but9.style.fillOpacity="0";
        bouton_but0.style.fillOpacity="0";
        zone_cage=4;
        input_zone_cage.value=zone_cage;

    }
    else if (but4==true) {
        but4=false;
        bouton_but4.style.fillOpacity="0";
        zone_cage=null;
        input_zone_cage.value=zone_cage;


       }
});

bouton_but5.addEventListener('click', function() {
    if (but5==false) {
        but5=true;
        but2=false;
        but1=false;
        but3=false;
        but4=false;
        but6=false;
        but7=false;
        but8=false;
        but9=false;
        bouton_but1.style.fillOpacity="0";
        bouton_but2.style.fillOpacity="0";
        bouton_but3.style.fillOpacity="0";
        bouton_but4.style.fillOpacity="0";
        bouton_but5.style.fillOpacity="0.7";
        bouton_but6.style.fillOpacity="0";
        bouton_but7.style.fillOpacity="0";
        bouton_but8.style.fillOpacity="0";
        bouton_but9.style.fillOpacity="0";
        bouton_but0.style.fillOpacity="0";
        zone_cage=5;
        input_zone_cage.value=zone_cage;

    }
    else if (but5==true) {
        but5=false;
        bouton_but5.style.fillOpacity="0";
        zone_cage=null;
        input_zone_cage.value=zone_cage;


       }
});

bouton_but6.addEventListener('click', function() {
    if (but6==false) {
        but6=true;
        but2=false;
        but1=false;
        but3=false;
        but4=false;
        but5=false;
        but7=false;
        but8=false;
        but9=false;

        bouton_but1.style.fillOpacity="0";
        bouton_but2.style.fillOpacity="0";
        bouton_but3.style.fillOpacity="0";
        bouton_but4.style.fillOpacity="0";
        bouton_but5.style.fillOpacity="0";
        bouton_but6.style.fillOpacity="0.7";
        bouton_but7.style.fillOpacity="0";
        bouton_but8.style.fillOpacity="0";
        bouton_but9.style.fillOpacity="0";
        bouton_but0.style.fillOpacity="0";
        zone_cage=6;
        input_zone_cage.value=zone_cage;

    }
    else if (but6==true) {
        but6=false;
        bouton_but6.style.fillOpacity="0";
        zone_cage=null;
        input_zone_cage.value=zone_cage;


       }
});

bouton_but7.addEventListener('click', function() {
    if (but7==false) {
        but7=true;
        but2=false;
        but1=false;
        but3=false;
        but4=false;
        but5=false;
        but6=false;
        but8=false;
        but9=false;

        bouton_but1.style.fillOpacity="0";
        bouton_but2.style.fillOpacity="0";
        bouton_but3.style.fillOpacity="0";
        bouton_but4.style.fillOpacity="0";
        bouton_but5.style.fillOpacity="0";
        bouton_but6.style.fillOpacity="0";
        bouton_but7.style.fillOpacity="0.7";
        bouton_but8.style.fillOpacity="0";
        bouton_but9.style.fillOpacity="0";
        bouton_but0.style.fillOpacity="0"
        zone_cage=7;
        input_zone_cage.value=zone_cage;

    }
    else if (but7==true) {
        but7=false;
        bouton_but7.style.fillOpacity="0";
        zone_cage=null;
        input_zone_cage.value=zone_cage;


       }
});

bouton_but8.addEventListener('click', function() {
    if (but8==false) {
        but8=true;
        but2=false;
        but1=false;
        but3=false;
        but4=false;
        but5=false;
        but6=false;
        but7=false;
        but9=false;

        bouton_but1.style.fillOpacity="0";
        bouton_but2.style.fillOpacity="0";
        bouton_but3.style.fillOpacity="0";
        bouton_but4.style.fillOpacity="0";
        bouton_but5.style.fillOpacity="0";
        bouton_but6.style.fillOpacity="0";
        bouton_but7.style.fillOpacity="0";
        bouton_but8.style.fillOpacity="0.7";
        bouton_but9.style.fillOpacity="0";
        bouton_but0.style.fillOpacity="0";
        zone_cage=8;
        input_zone_cage.value=zone_cage;

    }
    else if (but8==true) {
        but8=false;
        bouton_but8.style.fillOpacity="0";
        zone_cage=null;
        input_zone_cage.value=zone_cage;

       }
});

bouton_but9.addEventListener('click', function() {
    if (but9==false) {
        but9=true;
        but2=false;
        but1=false;
        but3=false;
        but4=false;
        but5=false;
        but6=false;
        but7=false;
        but8=false;

        bouton_but1.style.fillOpacity="0";
        bouton_but2.style.fillOpacity="0";
        bouton_but3.style.fillOpacity="0";
        bouton_but4.style.fillOpacity="0";
        bouton_but5.style.fillOpacity="0";
        bouton_but6.style.fillOpacity="0";
        bouton_but7.style.fillOpacity="0";
        bouton_but8.style.fillOpacity="0";
        bouton_but9.style.fillOpacity="0.7";
        bouton_but0.style.fillOpacity="0";
        zone_cage=9;
        input_zone_cage.value=zone_cage;

    }
    else if (but9==true) {
        but9=false;
        bouton_but9.style.fillOpacity="0";
        zone_cage=null;
        input_zone_cage.value=zone_cage;


       }
});

bouton_but0.addEventListener('click', function() {
    if (but0==false) {
        but0=true;
        bouton_but1.style.fillOpacity="0";
        bouton_but2.style.fillOpacity="0";
        bouton_but3.style.fillOpacity="0";
        bouton_but4.style.fillOpacity="0";
        bouton_but5.style.fillOpacity="0";
        bouton_but6.style.fillOpacity="0";
        bouton_but7.style.fillOpacity="0";
        bouton_but8.style.fillOpacity="0";
        bouton_but9.style.fillOpacity="0";
        bouton_but0.style.fillOpacity="0.7"
        zone_cage=0;
        input_zone_cage.value=zone_cage;

    }
    else if (but0==true) {
        but0=false;
        bouton_but0.style.fillOpacity="0";
        zone_cage=null;
        input_zone_cage.value=zone_cage;

       }
});

let terr1 = false;
let terr2 = false;
let terr3 = false;
let terr4 = false;
let terr5 = false;
let terr6 = false;
let terr7 = false;
let terr8 = false;
let terr9 = false;
let terr10 = false;
let terr7m = false;

let bouton_terr10 = document.getElementById("zt10");
let bouton_terr1 = document.getElementById("zt1");
let bouton_terr2 = document.getElementById("zt2");
let bouton_terr3 = document.getElementById("zt3");
let bouton_terr4 = document.getElementById("zt4");
let bouton_terr5 = document.getElementById("zt5");
let bouton_terr6 = document.getElementById("zt6");
let bouton_terr7 = document.getElementById("zt7");
let bouton_terr8 = document.getElementById("zt8");
let bouton_terr9 = document.getElementById("zt9");
let bouton_7m = document.getElementById("septM");
let text_7m = document.getElementById("text7M");


bouton_terr10.addEventListener('click', function() {
    if (terr10==false) {
        terr10=true;
        terr1=false;
        terr2=false;
        terr3=false;
        terr4=false;
        terr5=false;
        terr6=false;
        terr7=false;
        terr8=false;
        terr9=false;
        terr7m=false;

        bouton_terr1.style.fillOpacity="0";
        bouton_terr2.style.fillOpacity="0";
        bouton_terr3.style.fillOpacity="0";
        bouton_terr4.style.fillOpacity="0";
        bouton_terr5.style.fillOpacity="0";
        bouton_terr6.style.fillOpacity="0";
        bouton_terr7.style.fillOpacity="0";
        bouton_terr8.style.fillOpacity="0";
        bouton_terr9.style.fillOpacity="0";
        bouton_terr10.style.fillOpacity="0.7";
        bouton_7m.style.fill="#589474";
        text_7m.style.color="#FFFFFF";
        bouton_7m.style.stroke="none";

        zone_terrain=10;
        input_zone_terrain.value=zone_terrain;

    }
    else if (terr10==true) {
        terr10=false;
        bouton_terr10.style.fillOpacity="0";
        zone_terrain=null;
        input_zone_terrain.value=zone_terrain;


       }
});

bouton_terr1.addEventListener('click', function() {
    if (terr1==false) {
        terr1=true;
        terr10=false;
        terr2=false;
        terr3=false;
        terr4=false;
        terr5=false;
        terr6=false;
        terr7=false;
        terr8=false;
        terr9=false;
        terr7m=false;

        bouton_terr1.style.fillOpacity="0.7";
        bouton_terr2.style.fillOpacity="0";
        bouton_terr3.style.fillOpacity="0";
        bouton_terr4.style.fillOpacity="0";
        bouton_terr5.style.fillOpacity="0";
        bouton_terr6.style.fillOpacity="0";
        bouton_terr7.style.fillOpacity="0";
        bouton_terr8.style.fillOpacity="0";
        bouton_terr9.style.fillOpacity="0";
        bouton_terr10.style.fillOpacity="0";
        bouton_7m.style.fill="#589474";
        text_7m.style.color="#FFFFFF";
        bouton_7m.style.stroke="none";

        zone_terrain=1;
        input_zone_terrain.value=zone_terrain;


    }
    else if (terr1==true) {
        terr1=false;
        bouton_terr1.style.fillOpacity="0";
        zone_terrain=null;
        input_zone_terrain.value=zone_terrain;

       }
});

bouton_terr2.addEventListener('click', function() {
    if (terr2==false) {
        terr2=true;
        terr10=false;
        terr1=false;
        terr3=false;
        terr4=false;
        terr5=false;
        terr6=false;
        terr7=false;
        terr8=false;
        terr9=false;
        terr7m=false;

        bouton_terr1.style.fillOpacity="0";
        bouton_terr2.style.fillOpacity="0.7";
        bouton_terr3.style.fillOpacity="0";
        bouton_terr4.style.fillOpacity="0";
        bouton_terr5.style.fillOpacity="0";
        bouton_terr6.style.fillOpacity="0";
        bouton_terr7.style.fillOpacity="0";
        bouton_terr8.style.fillOpacity="0";
        bouton_terr9.style.fillOpacity="0";
        bouton_terr10.style.fillOpacity="0";
        bouton_7m.style.fill="#589474";
        text_7m.style.color="#FFFFFF";
        bouton_7m.style.stroke="none";

        zone_terrain=2;
        input_zone_terrain.value=zone_terrain;


    }
    else if (terr2==true) {
        terr2=false;
        bouton_terr2.style.fillOpacity="0";
        zone_terrain=null;
        input_zone_terrain.value=zone_terrain;

       }
});

bouton_terr3.addEventListener('click', function() {
    if (terr3==false) {
        terr3=true;
        terr10=false;
        terr1=false;
        terr2=false;
        terr4=false;
        terr5=false;
        terr6=false;
        terr7=false;
        terr8=false;
        terr9=false;
        terr7m=false;

        bouton_terr1.style.fillOpacity="0";
        bouton_terr2.style.fillOpacity="0";
        bouton_terr3.style.fillOpacity="0.7";
        bouton_terr4.style.fillOpacity="0";
        bouton_terr5.style.fillOpacity="0";
        bouton_terr6.style.fillOpacity="0";
        bouton_terr7.style.fillOpacity="0";
        bouton_terr8.style.fillOpacity="0";
        bouton_terr9.style.fillOpacity="0";
        bouton_terr10.style.fillOpacity="0";
        bouton_7m.style.fill="#589474";
        text_7m.style.color="#FFFFFF";
        bouton_7m.style.stroke="none";

        zone_terrain=3;
        input_zone_terrain.value=zone_terrain;

    }
    else if (terr3==true) {
        terr3=false;
        bouton_terr3.style.fillOpacity="0";
        zone_terrain=null;
        input_zone_terrain.value=zone_terrain;

       }
});

bouton_terr4.addEventListener('click', function() {
    if (terr4==false) {
        terr4=false;
        terr10=true;
        terr1=false;
        terr2=false;
        terr3=false;
        terr5=false;
        terr6=false;
        terr7=false;
        terr8=false;
        terr9=false;
        terr7m=false;

        bouton_terr1.style.fillOpacity="0";
        bouton_terr2.style.fillOpacity="0";
        bouton_terr3.style.fillOpacity="0";
        bouton_terr4.style.fillOpacity="0.7";
        bouton_terr5.style.fillOpacity="0";
        bouton_terr6.style.fillOpacity="0";
        bouton_terr7.style.fillOpacity="0";
        bouton_terr8.style.fillOpacity="0";
        bouton_terr9.style.fillOpacity="0";
        bouton_terr10.style.fillOpacity="0";
        bouton_7m.style.fill="#589474";
        text_7m.style.color="#FFFFFF";
        bouton_7m.style.stroke="none";

        zone_terrain=4;
        input_zone_terrain.value=zone_terrain;


    }
    else if (terr4==true) {
        terr4=false;
        bouton_terr4.style.fillOpacity="0";
        zone_terrain=null;
        input_zone_terrain.value=zone_terrain;

       }
});

bouton_terr5.addEventListener('click', function() {
    if (terr5==false) {
        terr5=true;
        terr10=false;
        terr1=false;
        terr2=false;
        terr3=false;
        terr4=false;
        terr6=false;
        terr7=false;
        terr8=false;
        terr9=false;
        terr7m=false;


        bouton_terr1.style.fillOpacity="0";
        bouton_terr2.style.fillOpacity="0";
        bouton_terr3.style.fillOpacity="0";
        bouton_terr4.style.fillOpacity="0";
        bouton_terr5.style.fillOpacity="0.7";
        bouton_terr6.style.fillOpacity="0";
        bouton_terr7.style.fillOpacity="0";
        bouton_terr8.style.fillOpacity="0";
        bouton_terr9.style.fillOpacity="0";
        bouton_terr10.style.fillOpacity="0";
        bouton_7m.style.fill="#589474";
        text_7m.style.color="#FFFFFF";
        bouton_7m.style.stroke="none";

        zone_terrain=5;
        input_zone_terrain.value=zone_terrain;


    }
    else if (terr5==true) {
        terr5=false;

        bouton_terr5.style.fillOpacity="0";
        zone_terrain=null;
        input_zone_terrain.value=zone_terrain;

       }
});

bouton_terr6.addEventListener('click', function() {
    if (terr6==false) {
        terr6=true;
        terr10=false;
        terr1=false;
        terr2=false;
        terr3=false;
        terr4=false;
        terr5=false;
        terr7=false;
        terr8=false;
        terr9=false;
        terr7m=false;

        bouton_terr1.style.fillOpacity="0";
        bouton_terr2.style.fillOpacity="0";
        bouton_terr3.style.fillOpacity="0";
        bouton_terr4.style.fillOpacity="0";
        bouton_terr5.style.fillOpacity="0";
        bouton_terr6.style.fillOpacity="0.7";
        bouton_terr7.style.fillOpacity="0";
        bouton_terr8.style.fillOpacity="0";
        bouton_terr9.style.fillOpacity="0";
        bouton_terr10.style.fillOpacity="0";
        bouton_7m.style.fill="#589474";
        text_7m.style.color="#FFFFFF";
        bouton_7m.style.stroke="none";

        zone_terrain=6;
        input_zone_terrain.value=zone_terrain;


    }
    else if (terr6==true) {
        terr6=false;
        bouton_terr6.style.fillOpacity="0";
        zone_terrain=null;
        input_zone_terrain.value=zone_terrain;

       }
});

bouton_terr7.addEventListener('click', function() {
    if (terr7==false) {
        terr7=true;
        terr10=false;
        terr1=false;
        terr2=false;
        terr3=false;
        terr4=false;
        terr5=false;
        terr6=false;
        terr8=false;
        terr9=false;
        terr7m=false;

        bouton_terr1.style.fillOpacity="0";
        bouton_terr2.style.fillOpacity="0";
        bouton_terr3.style.fillOpacity="0";
        bouton_terr4.style.fillOpacity="0";
        bouton_terr5.style.fillOpacity="0";
        bouton_terr6.style.fillOpacity="0";
        bouton_terr7.style.fillOpacity="0.7";
        bouton_terr8.style.fillOpacity="0";
        bouton_terr9.style.fillOpacity="0";
        bouton_terr10.style.fillOpacity="0";

        bouton_7m.style.fill="#589474";
        text_7m.style.color="#FFFFFF";
        bouton_7m.style.stroke="none";

        zone_terrain=7;
        input_zone_terrain.value=zone_terrain;


    }
    else if (terr7==true) {
        terr7=false;
        bouton_terr7.style.fillOpacity="0";
        zone_terrain=null;
        input_zone_terrain.value=zone_terrain;

       }
});

bouton_terr8.addEventListener('click', function() {
    if (terr8==false) {
        terr8=true;
        terr10=false;
        terr1=false;
        terr2=false;
        terr3=false;
        terr4=false;
        terr5=false;
        terr6=false;
        terr7=false;
        terr9=false;
        terr7m=false;

        bouton_terr1.style.fillOpacity="0";
        bouton_terr2.style.fillOpacity="0";
        bouton_terr3.style.fillOpacity="0";
        bouton_terr4.style.fillOpacity="0";
        bouton_terr5.style.fillOpacity="0";
        bouton_terr6.style.fillOpacity="0";
        bouton_terr7.style.fillOpacity="0";
        bouton_terr8.style.fillOpacity="0.7";
        bouton_terr9.style.fillOpacity="0";
        bouton_terr10.style.fillOpacity="0";
        bouton_7m.style.fill="#589474";
        text_7m.style.color="#FFFFFF";
        bouton_7m.style.stroke="none";
        zone_terrain=8;
        input_zone_terrain.value=zone_terrain;




    }
    else if (terr8==true) {
        terr8=false;
        bouton_terr8.style.fillOpacity="0";
        zone_terrain=null;
        input_zone_terrain.value=zone_terrain;

       }
});

bouton_terr9.addEventListener('click', function() {
    if (terr9==false) {
        terr9=true;
        terr10=false;
        terr1=false;
        terr2=false;
        terr3=false;
        terr4=false;
        terr5=false;
        terr6=false;
        terr7=false;
        terr8=false;
        terr7m=false;
        
        bouton_terr1.style.fillOpacity="0";
        bouton_terr2.style.fillOpacity="0";
        bouton_terr3.style.fillOpacity="0";
        bouton_terr4.style.fillOpacity="0";
        bouton_terr5.style.fillOpacity="0";
        bouton_terr6.style.fillOpacity="0";
        bouton_terr7.style.fillOpacity="0";
        bouton_terr8.style.fillOpacity="0";
        bouton_terr9.style.fillOpacity="0.7";
        bouton_terr10.style.fillOpacity="0";
        bouton_7m.style.fill="#589474";
        text_7m.style.color="#FFFFFF";
        bouton_7m.style.stroke="none";

        zone_terrain=9;
        input_zone_terrain.value=zone_terrain;


    }
    else if (terr9==true) {
        terr9=false;
        bouton_terr9.style.fillOpacity="0";
        zone_terrain=null;
        input_zone_terrain.value=zone_terrain;

       }

});

bouton_7m.addEventListener('click', function() {
    if (terr7m==false) {
        terr10=false;
        terr1=false;
        terr2=false;
        terr3=false;
        terr4=false;
        terr5=false;
        terr6=false;
        terr7=false;
        terr8=false;
        terr9=false;
        terr7m=true;
        
        bouton_terr1.style.fillOpacity="0";
        bouton_terr2.style.fillOpacity="0";
        bouton_terr3.style.fillOpacity="0";
        bouton_terr4.style.fillOpacity="0";
        bouton_terr5.style.fillOpacity="0";
        bouton_terr6.style.fillOpacity="0";
        bouton_terr7.style.fillOpacity="0";
        bouton_terr8.style.fillOpacity="0";
        bouton_terr9.style.fillOpacity="0";
        bouton_terr10.style.fillOpacity="0";

        bouton_7m.style.fill="#F9EB3C";
        text_7m.style.color="#383338";
        bouton_7m.style.stroke="#383338";

        zone_terrain=null;
        input_zone_terrain.value=zone_terrain;
        input_sept_m.value=1;


    }
    else if (terr7m==true) {
        terr7m=false;
        bouton_7m.style.fill="#589474";
        text_7m.style.color="#FFFFFF";
        bouton_7m.style.stroke="none";

        zone_terrain=null;
        input_zone_terrain.value=zone_terrain;
        input_sept_m.value=0;


       }

});


text_7m.addEventListener('click', function() {
    if (terr7m==false) {
        terr10=false;
        terr1=false;
        terr2=false;
        terr3=false;
        terr4=false;
        terr5=false;
        terr6=false;
        terr7=false;
        terr8=false;
        terr9=false;
        terr7m=true;
        
        bouton_terr1.style.fillOpacity="0";
        bouton_terr2.style.fillOpacity="0";
        bouton_terr3.style.fillOpacity="0";
        bouton_terr4.style.fillOpacity="0";
        bouton_terr5.style.fillOpacity="0";
        bouton_terr6.style.fillOpacity="0";
        bouton_terr7.style.fillOpacity="0";
        bouton_terr8.style.fillOpacity="0";
        bouton_terr9.style.fillOpacity="0";
        bouton_terr10.style.fillOpacity="0";

        bouton_7m.style.fill="#F9EB3C";
        text_7m.style.color="#383338";
        bouton_7m.style.stroke="#383338";

        zone_terrain=null;
        input_zone_terrain.value=zone_terrain;
        input_sept_m.value=1;



    }
    else if (terr7m==true) {
        terr7m=false;
        bouton_7m.style.fill="#589474";
        text_7m.style.color="#FFFFFF";
        bouton_7m.style.stroke="none";

        zone_terrain=null;
        input_zone_terrain.value=zone_terrain;
        input_sept_m.value=1;

       }

});



//Récupération de l'ID du match sélectionné Liste déroulante

let liste_matchs=document.getElementById("select_match");
let input_id_match=document.getElementById("input_id_match");

//Cas par défaut 

input_id_match.value=eval(match_id_1);



liste_matchs.addEventListener('change', function() {
    var index_match_selectionne = liste_matchs.selectedIndex+1;

    var indice_match_selectionne="match_id_"+ String(index_match_selectionne);
    var date_match_selectionne= "match_date_" + String(index_match_selectionne);

    input_id_match.value=eval(indice_match_selectionne);
    
    Date_rencontre.innerHTML=eval(date_match_selectionne);

    

});
