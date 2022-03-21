<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <link rel="stylesheet" href="onglet_saisies.css" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
        
        <link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap.min.css">

        <title>Analyse Vidéo Match H.B.P.C</title>

        <script type="text/javascript">
      
        function sendData()
        {
        // On vient définir les différentes variable qui sertont envoyer au moment de l'ajout de l'action 
        // chaque variable pointe vers l'objet html au niveau du formulaire 
            
        $.ajax({
                type: 'post',
                url: 'form_act_saisies.php',
                data: {
                    id_match:input_id_match.value,
                    id_joueuse:input_id_joueuse.value,


                    nom_joueuse:input_joueuse.value,


                    periode:input_periode.value,

                    tir:input_tir.value,
                    sept_m:input_sept_m.value,
                    but:input_but.value,

                    zone_cage:input_zone_cage.value,
                    zone_terrain:input_zone_terrain.value,

                    attaque:input_attaque.value,
                    attaque_Placee:input_attaque_placee.value,
                    

                    faute_zone:input_faute_zone.value,

                    marcher:input_marcher.value,
                    reprise_de_drible:input_reprise_de_drible.value,

                    mauvaise_relance:input_mauvaise_relance.value,
                    passage_en_force:input_passage_en_force.value,
                    balle_perdue:input_balle_perdue.value,
                    balle_recuperee:input_balle_recuperee.value,
                    faute_subie:input_faute_subie.value,

                    tir_contre:input_tir_contre.value,
                    deux_min_provoque:input_deux_min_provoque.value,
                    faute_7m:input_faute_sept_m.value,
                    
                    duel_gagne:input_duel_gagne.value,
                    duel_perdu:input_duel_perdu_a.value,

                    interception:input_interception.value,
                    relance:input_relance.value,

                    carton_rouge:input_carton_rouge.value,
                    carton_jaune:input_carton_jaune.value,
                    deux_min:input_2_min.value,
                    

                },
                success: function (response) {
                alert("Okayyyyyyyy")
        
                }
            
            });
        }
          
        function sendmatch()
        {
          // On vient définir les différentes variable qui sertont envoyer au moment de l'ajout du match 
          // chaque variable pointe vers l'objet html au niveau du formulaire 

        //   var club_adverse = document.getElementById("club_adverse").value;
        //   var date_rencontre = document.getElementById("date_rencontre").value;
        //   var lieu_match = document.getElementById("lieu_match").value;
        //   var Domicile = document.getElementById("Domicile").value;
        //   var selection_joueuses_global = document.getElementById("selection_joueuses_global").value;
            
            //Requête ajax qui permet l'envoie des donnée en mode post à la page form_act_match de manière asynchrone
            //sans rechargement systématique de la page
            // $.ajax({
            //     type: 'post',
            //     url: 'form_act_saisies.php',
            //     data: {
            //       club_adverse:club_adverse,
            //       date_rencontre:date_rencontre,
            //       lieu_match:lieu_match,
            //       Domicile:Domicile,
            //       selection_joueuses_global:selection_joueuses_global
            //     },
            // success: function (response) {
                
            //     }
            // });
          
        }

//         $(document).ready(function(){
//       // everything here will be executed once index.html has finished loading, so at the start when the user is yet to do anything.
//       $("#select_match").change(sendmatch()); //this translates to: "when the element with id='select1' changes its value execute load_new_content() function"
// });


//     function load_new_content(){
//      var selected_option_value=$("#select_match option:selected").val(); //get the value of the current selected option.

//      $.post("form_act_saisies.php", {option_value: selected_option_value},
//          function(data){ //this will be executed once the `script_that_receives_value.php` ends its execution, `data` contains everything said script echoed.
//               $("#place_where_you_want_the_new_html").html(data);
//               alert(data); //just to see what it returns
//          }
//      );
// } 
        </script>


    <!--HISTORIQUE action , requete SQL --> 

    <?php
        $host = 'localhost';
        $dbname = 'Projet_Handball';
        $user = 'amau';
        $password = '291298';
        $pair = 0;
        $count=1;
        $countm=1;
        
        $temp_club = "";
        $temp_dom="";
        $temp_idmatch=0;

        $match="HBPC - FLeury";

        $dsn = "mysql:host=$host;dbname=$dbname"; 
        // récupérer tous les utilisateurs
  
        try{
            $pdo = new PDO($dsn, $user, $password);}
 
   
        catch (PDOException $e){
            echo $e->getMessage();
            }
    ?>  

    <?php 
        $req = $pdo ->prepare ("SELECT * FROM actions ORDER BY Action_ID DESC LIMIT 3");
        $req->execute();
        //récupérer les 3 dernières actions
        $reqj =$pdo ->prepare ('SELECT * from joueuses WHERE Poste <> "Gardienne" ORDER BY Numero');
        $reqj->execute();

        $reqg =$pdo ->prepare ('SELECT * from joueuses WHERE Poste = "Gardienne" ORDER BY Numero');
        $reqg->execute();

        $reqm = $pdo ->prepare ("SELECT * FROM matchs ORDER BY id_match ");
        $reqm->execute();
    ?>


    </head>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">
                <img src="logo.png" alt="x_x" style="height: 74px;">
            </a>
                
            <!-- Bouton affiché uniquement sur mobile pour dérouler -->
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
                
            <!-- Les éléments de la navbar -->
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item ">
                        <a class="nav-link" href="../OngletMatch/Onglet_Match.php">Accueil <span class="sr-only">(actuel)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../OngletJoueuses/onglet_joueuses.php">Mon équipe</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="../OngletSaisies/onglet_saisies.php">Saisie Vidéo</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="">Résultats</a>
                    </li>
                </ul>
             </div>
             
             <div id="Infos_match">
                        
                <div id ="Match_info_equipes">
                    <p id="label_match">Match:</p>
                    <p id="equipes_rencontre">
                    <input type="hidden" id="input_id_match" value="">
                    
                    <select name="select_match" id="select_match">
                        <?php  while($row = $reqm->fetch(PDO::FETCH_ASSOC)) : ?>

                            <?php $temp_club=htmlspecialchars($row['Club_adverse']);
                                   $temp_dom=htmlspecialchars($row['Domicile']);
                                   $temp_idmatch=htmlspecialchars($row['id_match']);
                            ?>
                            <script type="text/javascript">
                                var match_id_<?php echo htmlspecialchars($countm);?>="<?php echo htmlspecialchars($row['id_match']); ?>"
                                var match_date_<?php echo htmlspecialchars($countm);?>="<?php echo htmlspecialchars($row['Date']); ?>"
                            </script>

                            <?php   if ($temp_dom == "Dom"){
                                echo ('<option>HBPC - ');
                                echo($temp_club);
                                echo('</option>');
                            }
                                    else {
                                        echo ('<option>');
                                        echo($temp_club);
                                        echo(' - HBPC</option>'); 
                                    }     
                                    
                            ?>                            
                            <?php $countm=($countm+1) ?>
                        <?php endwhile ?>
                        </select>
                    </p>
                </div>
                <div id="blanc">  </div>
                <div id ="Match_info_date">
                    <span id="logo_calendar" class="iconify" data-icon="bx:calendar" style="color: #383838; font-size: 25px;"></span>
                    <p id="Date_rencontre"><script type="text/javascript">document.write(match_date_1)</script></p>
                </div>
            </div>
        </nav>        
    </header>     



    <body>
    <!-- <form action="form_act_saisies.php" method="POST" > -->
    <form method="POST" onsubmit="return sendData();">
        <div id="Bloc_interface">
            <div id="Selection_joueuses">
                <div id="Titre_section_joueuses">
                    <h1 class="Titre_section">Joueuses</h1>
                </div>
                <div id="Contenu_section_joueuses">                
                    <div id="Boutons_joueuses">

                        <input type="hidden" id=input_joueuse value=""/>
                        <input type="hidden" id=input_id_joueuse value=""/>
                        <?php  while($row = $reqj->fetch(PDO::FETCH_ASSOC)) : ?>
                            <?php   if ($pair == 0)
                                echo ('<div id="boutons_ligne_x_jou">');
                            ?>
                            <button id=joueuse_<?php echo htmlspecialchars($count); ?> class="bouton_jou" type="button">
                            <p class=nom_joueuse><?php echo htmlspecialchars($row['Nom']); ?></p>
                            <p class=numero_joueuse><?php echo htmlspecialchars($row['Numero']); ?>
                            </p> 
                            </button>
                            <script type="text/javascript">
                                var nom_joueuse<?php echo htmlspecialchars($count);?>="<?php echo htmlspecialchars($row['Nom']); ?>";
                                var id_joueuse<?php echo htmlspecialchars($count);?>="<?php echo htmlspecialchars($row['id_joueuse']); ?>";
                            </script>
                            <?php   if ($pair == 1){
                                echo ('</div>');
                            }?>
                            
                            <?php   if ($pair == 0) 
                                  $pair=1;
                              else 
                                  $pair =0; ?>
                            <?php $count=($count+1) ?>
                        <?php endwhile ?>
                        <?php $count=1?>

                    
                        <div id="boutons_ligne_x_jou">
                        <?php while($row = $reqg->fetch(PDO::FETCH_ASSOC)) : ?>
                            <button id=gardienne_<?php echo htmlspecialchars($count); ?> class="bouton_gar" type="button">
                                <p class=nom_gardienne><?php echo htmlspecialchars($row['Nom']); ?></p>
                                <p class=numero_gardienne><?php echo htmlspecialchars($row['Numero']); ?></p>
                            </button>
                            <script type="text/javascript">
                                var nom_gardienne<?php echo htmlspecialchars($count);?>="<?php echo htmlspecialchars($row['Nom']); ?>"
                                var id_gardienne<?php echo htmlspecialchars($count);?>="<?php echo htmlspecialchars($row['id_joueuse']); ?>"
                            </script>
                            <?php $count=$count+1 ?>

                        <?php endwhile?>
                        <?php $count=1 ?>
                           <!-- <button id=gardienne_2 class="bouton_gar" type="button">
                                <p class=nom_gardienne>Joueuse_14</p>
                                <p class=numero_gardienne>14</p>
                            </button>!-->
                        </div>
                    </div>
                </div>
            </div>
            <div id="Bloc_droit">
                <div id="Saisies">
                    <div id="Actions">
                        <div id="Titre_section_action">
                            <h1 class="Titre_section">Actions</h1>
                        </div>
                        <div id="Contenu_section">
                                <div id="Choix_periode">
                                <input type="hidden" name="periode" id="periode" value="0-15"/> 
                                    <div><h2 id="Titre_slider">Période: </h2></div>
                                        <div id="Liste_periodes">
                                            <input type="radio" id="0/15" name="periode" value="0'-15'" checked>
                                            <label for="0/15">0'-15'</label>
                                            <input type="radio" id="15/30" name="periode" value="15'-30'" >
                                            <label for="15/30">15'-30'</label>
                                            <input type="radio" id= "30/45" name="periode" value="30'-45'" >
                                            <label for="30/45">30'-45'</label>
                                            <input type="radio" id= "45/60" name="periode" value="45'-60'">
                                            <label for="45/60">45'-60'</label>
                                        </div>
                                </div>
                                <div id="Attaque_Defense">
                                    <input type="hidden" name="attaque" id="input_attaque" value=1/>    
                                    <button id="bouton_Attaque" class="boutton_attaque_defense"  type="button">Attaque</button>
                                    <button id="bouton_Defense" class="boutton_attaque_defense"  type="button">Défense</button>
                                </div>

                                <div id="Type_attaque">
                                    <input type="hidden" name="type_attaque" id="input_attaque_Placee" value=1/>    
                                    <p class="Boutton_type_attaque" id="bouton_Attaque_Placee">Attaque Placée</p>
                                    <div class="onoffswitch" id="myonoffswitch">
                                        <label class="switch">
                                            <input type="checkbox">
                                            <span class="slider round"></span>
                                        </label>
                                    </div>     
                                    <p class="Boutton_type_attaque" id="bouton_Contre_Attaque">Contre-attaque</p>
                                </div>
                                    
                                
                                <div id="sanctions">
                                    <h2 id="Titre_sanctions">Sanctions</h2>
                                    <div id="Boutons_sanctions">
                                        <input type="hidden" name="carton_jaune" id="input_carton_jaune" value=0 />
                                        <div id="conteneur_carton_jaune"></div>
                                        <input type="hidden" name="carton_rouge" id="input_carton_rouge"value=0 />
                                        <div id="conteneur_carton_rouge"></div>
                                        <input type="hidden" name="deux_min" id="input_deux_min" value=0 />
                                        <button id="Deux_min" type="button"> 2'</button>
                                    </div>
                                </div>
                                <!-- Pack de boutons de saisies pour les actions attaque-->
                                <div id="Boutons_saisies">
                                    <div id="boutons_ligne_1">
                                        <input type="hidden" name="Faute_zone" id="input_faute_zone" value=0/>
                                        <button id="faute_zone" class="boutton_fait_de_jeu" type="button">Fautes de zone</button>
                                        <input type="hidden" name="input_marche" id="input_marche" value=0/>
                                        <button id="marche" class="boutton_fait_de_jeu" type="button">Marché</button>
                                        <input type="hidden" name="reprise_drible" id="input_reprise_de_drible" value=0 />
                                        <button id="reprise_drible" class="boutton_fait_de_jeu" type="button">Reprise de drible</button>
                                        <input type="hidden" name="balle_perdue" id="input_balle_perdue" value=0/>
                                        <button id="balle_perdue" class="boutton_fait_de_jeu" type="button">Balle perdue</button>
                                        <input type="hidden" name="mauvaise_relance" id="input_mauvaise_relance" value=0/>
                                        <button id="mauvaise_relance" class="boutton_fait_de_jeu" type="button">Mauvaise relance</button>
                                        <input type="hidden" name="duel_perdu_a" id="input_duel_perdu_a" value=0/>
                                        <button id="duel_perdu_a" class="boutton_fait_de_jeu" type="button">Duel perdu</button>
                                    </div>
                                    <div id="boutons_ligne_2">
                                        <input type="hidden" name="passage_en_force" id="input_passage_en_force" value=0/>
                                        <button id="passage_en_force" class="boutton_fait_de_jeu" type="button">Passage en force</button>
                                        <input type="hidden" name="faute_subie" id="input_faute_subie" value=0/>
                                        <button id="faute_subie" class="boutton_fait_de_jeu" type="button">Faute subie</button>
                                        <input type="hidden" name="tir_contre" id="input_tir_contre" value=0/>
                                        <button id="tir_contre" class="boutton_fait_de_jeu" type="button">Tir contré</button>
                                    </div>
                                    <div id="boutons_ligne_3">
                                        <input type="hidden" name="deux_min_provoque" id="input_deux_min_provoque" value=0/>
                                        <button id="deux_min_provoque" class="boutton_fait_de_jeu" type="button">2' provoqué</button>
                                        <input type="hidden" name="input_faute_sept_m" id="input_faute_sept_m" value=0/>
                                        <button id="sept_m" class="boutton_fait_de_jeu" type="button">7m</button>
                                        <input type="hidden" name="duel_gagne" id="input_duel_gagne" value=0/>
                                        <button id="duel_gagne" class="boutton_fait_de_jeu" type="button">Duel gagné</button>
                                        <input type="hidden" name="relance" id="input_relance" value=0/>
                                        <button id="relance" class="boutton_fait_de_jeu" type="button">Relance</button>
                                    </div>
                                </div>
                                <!-- Pack de boutons de saisies pour les actions défense-->
                                <div id="Boutons_saisies_defense">
                                    <div id="boutons_ligne_1">
                                        <input type="hidden" name="input_faute_zone_d" id="input_faute_zone_d" value=0/>
                                        <button id="faute_zone_d" class="boutton_fait_de_jeu" type="button">Fautes de zone</button>
                                        <input type="hidden" name="input_marche_d" id="input_marche_d" value=0/>
                                        <button id="marche_d" class="boutton_fait_de_jeu" type="button">Marché</button>
                                        <input type="hidden" name="input_reprise_drible_d" id="input_reprise_drible_d" value=0/>
                                        <button id="reprise_drible_d" class="boutton_fait_de_jeu" type="button">Reprise de drible</button>
                                        <input type="hidden" name="input_balle_recuperee_d" id="input_balle_recuperee_d" value=0/>
                                        <button id="balle_recuperee_d" class="boutton_fait_de_jeu" type="button">Balle récupérée</button>
                                        <input type="hidden" name="input_mauvaise_relance_d" id="input_mauvaise_relance_d" value=0/>
                                        <button id="mauvaise_relance_d" class="boutton_fait_de_jeu" type="button">Mauvaise relance</button>
                                        <input type="hidden" name="input_duel_perdu_d" id="input_duel_perdu_d" value=0/>
                                        <button id="duel_perdu_d" class="boutton_fait_de_jeu" type="button">Duel perdu</button>
                                    </div>
                                    <div id="boutons_ligne_2">
                                        <input type="hidden" name="input_passage_en_force_d" id="input_passage_en_force_d" value=0/>
                                        <button id="passage_en_force_d" class="boutton_fait_de_jeu" type="button">Passage en force</button>
                                        <input type="hidden" name="input_faute_subie_d" id="input_faute_subie_d" value=0/>
                                        <button id="faute_subie_d" class="boutton_fait_de_jeu" type="button">Faute subie</button>
                                        <input type="hidden" name="input_tir_contre_d" id="input_tir_contre_d" value=0/>
                                        <button id="tir_contre_d" class="boutton_fait_de_jeu" type="button">Tir contré</button>
                                        <input type="hidden" name="input_interception_d" id="input_interception_d" value=0/>
                                        <button id="interception_d" class="boutton_fait_de_jeu" type="button">Interception</button>
                                    </div>
                                    <div id="boutons_ligne_3">
                                        <input type="hidden" name="input_deux_min_provoque_d" id="input_deux_min_provoque_d" value=0/>
                                        <button id="deux_min_provoque_d" class="boutton_fait_de_jeu" type="button">2' provoqué</button>
                                        <button id="sept_m_d" class="boutton_fait_de_jeu" type="button">7m</button>
                                        <input type="hidden" name="input_duel_gagne_d" id="input_duel_gagne_d" value=0/>
                                        <button id="duel_gagne_d" class="boutton_fait_de_jeu" type="button">Duel gagné</button>
                                        
                                        <input type="hidden" name="input_relance_d" id="input_relance_d" value=0/>
                                        <button id="relance_d" class="boutton_fait_de_jeu" type="button">Relance</button>

                                        <!-- Bouton relance avec but uniquement pour les actions gardienne-->
                                        <button id="relance_but" class="boutton_fait_de_jeu" type="button">Relance avec but</button>
                                            
                                    </div>
                                </div>
                            <div id="Validation">
                                <button id="Validation_saisie" type="submit">
                                    <span class="iconify" data-icon="el:ok-circle" style="color: black; font-size: 20px;"></span>
                                    <span>Valider</span>
                                </button>
                            </div>
                        
                        </div>
                    </div>
                
                    <div id="Zones">
                        <div id="Titre_section_zones">
                            <h1 class="Titre_section">Zones</h1>
                        </div>
                        <div id="Contenu_section_zones">
                            <div id = "but_marque">
                                <input type="hidden" id="input_but" name="input_but" value="0"/>
                                <input type="hidden" id="input_tir" name="input_tir" value="0"/>

                                <button id=marque class="bouton_but" type="button">
                                    <!--<img src="up.png" alt="oui" height="19"/>-->
                                    <span class="iconify" id="up_down" data-icon="ic:round-thumb-up-off-alt"></span>
                                </button>
                                    <h1 class="marque_rate">But marqué ?</h1>
                                <button id=rate class="bouton_but" type="button">
                                    <!--<img src="down.png" alt="non" height="19"/>-->
                                    <span class="iconify" id="up_down" data-icon="ic:round-thumb-down"></span>
                                </button>
                
                            </div>

                            <input type="hidden" name="zone_cage" id="zone_cage" value=0/>
                            <div id ="rectangle_clic">
                                <svg width="350" height="221">
                                    <image xlink:href="cage_hand.jpg" x="0" y="0" alt="cage" height="256px"/>
                
                                    <a href="#">
                                        <path class="zb" id="zb1" d="M 45 60 L 125 60 L 125 113 L 45 113 L 45 60 Z" fill="#383338" fill-opacity="0"/>
                                    </a>
                                    <a href="#">
                                        <path class="zb" id="zb2" d="M 125 60 L 205 60 L 205 113 L 125 113 L 125 60 Z" fill="#383338" fill-opacity="0"/>
                                    </a>
                                    <a href="#">
                                        <path class="zb" id="zb3" d="M 205 60 L 284 60 L 284 113 L 205 113 L 205 60 Z" fill="#383338" fill-opacity="0"/>
                                    </a>
                                    <a href="#">
                                        <path class="zb" id="zb4" d="M 45 113 L 125 113 L 125 166 L 45 166 L 45 113 Z" fill="#383338" fill-opacity="0"/>
                                    </a>
                                    <a href="#">
                                        <path class="zb" id="zb5" d="M 125 113 L 205 113 L 205 166 L 125 166 L 125 113 Z" fill="#383338" fill-opacity="0"/>
                                    </a>
                                    <a href="#">
                                        <path class="zb" id="zb6" d="M 205 113 L 284 113 L 284 166 L 205 166 L 205 113 Z" fill="#383338" fill-opacity="0"/>
                                    </a>
                                    <a href="#">
                                        <path class="zb" id="zb7" d="M 45 166 L 125 166 L 125 220 L 45 220 L 45 166 Z" fill="#383338" fill-opacity="0"/>
                                    </a>
                                    <a href="#">
                                        <path class="zb" id="zb8" d="M 125 166 L 205 166 L 205 220 L 125 220 L 125 166 Z" fill="#383338" fill-opacity="0"/>
                                    </a>
                                    <a href="#">
                                        <path class="zb" id="zb9" d="M 205 166 L 284 166 L 284 220 L 205 220 L 205 166 Z" fill="#383338" fill-opacity="0"/>
                                    </a>

                                    <a href="#">
                                        <path class="zb" id="zb0" d="M 45 220 L 45 60 L 284 60 L 284 220 L 330 220 L 330 0 L 0 0 L 0 220 Z" fill="#383338" fill-opacity="0"/>
                                    </a>
                                
                                    <a id="delimitation" >
                                        <path d="M 125 60 L 125 220 
                                                M 205 60 L 205 220 
                                                M 45 113 L 284 113
                                                M 45 166 L 284 166 Z" fill="none"/>
                                    </a>
                                    
                                </svg>
                                
                            </div>
                            
                            <input type="hidden" name="zone_terrain" id="zone_terrain" value=0/>
                            <div id ="poly_clic">

                                <svg width="370" height="221">
                                    <image xlink:href="terrain.png" x="0" y="0" alt="terrain" height="203px"/>
                
                                    <a href="#">
                                        <path class="zt" id="zt1" d="M 1 1 L 47 1 Q 45, 35 72, 74 L 35 115 Q 9, 80 1, 57 Z" fill="#383338" fill-opacity="0"/>
                                    </a>
                                    <a href="#">
                                        <path class="zt" id="zt2" d="M 72 74 Q 105, 108 145, 112 L 134 167 Q 70, 152 35, 115 Z" fill="#383338" fill-opacity="0"/>
                                    </a>
                                    <a href="#">
                                        <path class="zt" id="zt3" d="M 145 112 L 134 167 L 235 167 L 224 112 Z" fill="#383338" fill-opacity="0"/>
                                    </a>
                                    <a href="#">
                                        <path class="zt" id="zt4" d="M 297 74 Q 264, 108 224, 112 L 235 167 Q 299, 152 334, 115 Z" fill="#383338" fill-opacity="0"/>
                                    </a>
                                    <a href="#">
                                        <path class="zt" id="zt5" d="M 369 1 L 324 1 Q 324, 35 297, 74 L 334 115 Q 360, 80 369, 57 Z" fill="#383338" fill-opacity="0"/>
                                    </a>
                                    <a href="#">
                                        <path class="zt" id="zt6" d="M 35 115 Q 9, 80 1, 57 L 1 154 Z" fill="#383338" fill-opacity="0"/>
                                    </a>
                                    <a href="#">
                                        <path class="zt" id="zt7" d="M 134 167 Q 70, 152 35, 115 L 1 154 L 1 202 L 127 202 Z" fill="#383338" fill-opacity="0"/>
                                    </a>
                                    <a href="#">
                                        <path class="zt" id="zt8" d="M 134 167 L 235 167 L 242 202 L 127 202 Z" fill="#383338" fill-opacity="0"/>
                                    </a>
                                    <a href="#">
                                        <path class="zt" id="zt9" d="M 235 167 Q 299, 154 334, 115 L 369 154 L 369 202 L 242 202 Z" fill="#383338" fill-opacity="0"/>
                                    </a>
                                    <a href="#">
                                        <path class="zt" id="zt10" d="M 334 115 Q 360, 80 369, 57 L 369 154 Z" fill="#383338" fill-opacity="0"/>
                                    </a>
                
                                    <a id="delimitation" href="zones/zone10.html">
                                        <path d="M 72 74 L 1 154 
                                                 M 145 112 L 127 202 
                                                 M 224 112 L 242 202
                                                 M 297 74 L 369 154 Z" fill="none"/>
                                    </a>

                                    <input type="hidden" id="input_sept_m" name=" " value=0 />
                                    <a href="#">
                                        <path id="septM" d="M 152 110 L 217 110
                                                         A 7, 7, 0, 0, 0 217, 96
                                                         L 152 96
                                                         A 7, 7, 0, 0, 0 152, 110 Z" fill="#589474"/>
                                        <text>
                                            <textPath id="text7M" href="#septM" startOffset = "20">
                                                7M
                                            </textPath>
                                        </text>
                                    </a>
                                </svg>
                            </div>
                        </div>

                    </div>
                </div>
                <div id="Historique">
                    <div id="section_Historique">
                        <div id="Titre_section_historique">
                            <h1 class="Titre_section">Historique</h1>
                        </div>
                    <div id="contenu_section_historique">
                        <table>
                            <thead>
                                <tr id="en-tete_tableau">
                                    <th>Temps</th>
                                    <th>Joueuse</th>
                                    <th>Attaque/Défense</th>
                                    <th>Tir</th>
                                    <th>But</th>
                                    <th>7m</th>
                                    <th>Zone Terrain</th>
                                    <th>Zone Cage</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <div id="contenu_tableau_historique">
                                    <?php while($row = $req->fetch(PDO::FETCH_ASSOC)) : ?>
                                        <tr id="Ligne_test">
                                            <td class="table-data"><?php echo htmlspecialchars($row['temps']); ?></td>
                                            <td class="table-data"><?php echo htmlspecialchars($row['nom_joueuse']); ?></td>
                                            <td class="table-data"><?php echo htmlspecialchars($row['attaque']); ?></td>
                                            <td class="table-data"><?php echo htmlspecialchars($row['tir']); ?></td>
                                            <td class="table-data"><?php echo htmlspecialchars($row['but']); ?></td>
                                            <td class="table-data"><?php echo htmlspecialchars($row['7m']); ?></td>
                                            <td class="table-data"><?php echo htmlspecialchars($row['zone_terrain']); ?></td>
                                            <td class="table-data"><?php echo htmlspecialchars($row['zone_cage']); ?></td>
                                            <td class="table-data"><?php echo htmlspecialchars($row['attaque_placee']); ?></td>
                                            <td class="icones_sur_ligne"><a href ="suppression_saise.php?Action_ID=<?php echo $row['Action_ID']?>">
                                            <span class="iconify" data-icon="fluent:delete-20-filled" style="color: #383338; font-size: 20px;"></span></td>
                                        </tr>
                                    <?php endwhile; ?>
                                </div>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
            </form>
            <script type="text/javascript" src="onglet_saisies_bis.js"></script>

            <script type="text/javascript" src="https://code.iconify.design/2/2.1.0/iconify.min.js"></script>

        </body>

</html>

