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
        
        //Attaque/def
          var attaque = document.getElementById("attaque").value;
          var defense = document.getElementById("attaque").value;
        
          //Contre/Placee
          var attaque_Placee = document.getElementById("attaque_Placee").value;
          var contre_Attaque = document.getElementById("contre_Attaque").value;
          
          //Sanctions
          var carton_jaune = document.getElementById("carton_jaune").value;
          var carton_rouge = document.getElementById("carton_rouge").value;
          var deux_min = document.getElementById("deux_min").value;
        
          //Action Attaque
          var faute_zone = document.getElementById("faute_zone").value;
          var marche = document.getElementById("marche").value;
          var reprise_drible = document.getElementById("reprise_drible").value;
          var balle_perdue = document.getElementById("balle_perdue").value;
          var mauvaise_relance = document.getElementById("mauvaise_relance").value;
          var passage_en_force = document.getElementById("passage_en_force").value;
          var faute_subie = document.getElementById("faute_subie").value;
          var tir_contre = document.getElementById("tir_contre").value;
          var deux_min_provoque = document.getElementById("deux_min_provoque").value;
          var sept_m = document.getElementById("sept_m").value;
          var duel_gagne = document.getElementById("duel_gagne").value;
          var relance = document.getElementById("relance").value;

        //Action defense

          var duel_perdu = document.getElementById("duel_perdu").value;
          var balle_recuperee = document.getElementById("balle_recuperee").value;
          var interception = document.getElementById("interception").value;

          //Joueuses
          var joueuse_1 = document.getElementById("joueuse_1").value;
          var joueuse_2 = document.getElementById("joueuse_2").value;
          var joueuse_3 = document.getElementById("joueuse_3").value;
          var joueuse_4 = document.getElementById("joueuse_4").value;
          var joueuse_5 = document.getElementById("joueuse_5").value;
          var joueuse_6 = document.getElementById("joueuse_6").value;
          var joueuse_7 = document.getElementById("joueuse_7").value;
          var joueuse_8 = document.getElementById("joueuse_8").value;
          var joueuse_9 = document.getElementById("joueuse_9").value;
          var joueuse_10 = document.getElementById("joueuse_10").value;
          var joueuse_11 = document.getElementById("joueuse_11").value;
          var joueuse_12 = document.getElementById("joueuse_12").value;
          var gardienne_1 = document.getElementById("gardienne_1").value;
          var gardienne_2 = document.getElementById("gardienne_2").value;
          






            //Requête ajax qui permet l'envoie des donnée en mode post à la page form_act_saisie de manière asynchrone
            //sans rechargement systématique de la page
            $.ajax({
                type: 'post',
                url: 'form_act_saisies.php',
                data: {
                  attaque:attaque
                },
            success: function (response) {
                
                }
            });
          location.reload(true)
          return false;
        }
        </script>


    <!--HISTORIQUE action , requete SQL --> 

    <?php
        $host = 'localhost';
        $dbname = 'hbpc';
        $user = 'root';
        $password = 'remi1998';
        $pair = 0;
        $count=1;
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
                        <a class="nav-link" href="../Onglet Match/Onglet_Match.php">Accueil <span class="sr-only">(actuel)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../Onglet Joueuses/onglet_joueuses.php">Mon équipe</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="../Onglet Saisies/onglet_saisies.php">Saisie Vidéo</a>
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
                    <select>
                        <?php  while($row = $reqm->fetch(PDO::FETCH_ASSOC)) : ?>
                            <option><?php echo htmlspecialchars($row['Club_adverse']); ?></option>
                        <?php endwhile ?>
                        </select>
                    </p>
                </div>
                <div id="blanc">  </div>
                <div id ="Match_info_date">
                    <span id="logo_calendar" class="iconify" data-icon="bx:calendar" style="color: #383838; font-size: 25px;"></span>
                    <p id="Date_rencontre">8/12/2021</p>
                </div>
            </div>
        </nav>        
    </header>     



    <body>
        <div id="Bloc_interface">
            <div id="Selection_joueuses">
                <div id="Titre_section_joueuses">
                    <h1 class="Titre_section">Joueuses</h1>
                </div>
                <div id="Contenu_section_joueuses">                
                    <div id="Boutons_joueuses">
                        
                        <?php  while($row = $reqj->fetch(PDO::FETCH_ASSOC)) : ?>
                            <?php   if ($pair == 0)
                                echo ('<div id="boutons_ligne_x_jou">');
                            ?>

                            <button id=joueuse_<?php echo htmlspecialchars($count); ?> class="bouton_jou" type="button">
                            <p class=nom_joueuse><?php echo htmlspecialchars($row['Nom']); ?></p>
                            <p class=numero_joueuse><?php echo htmlspecialchars($row['Numero']); ?>
                            </p>
                            </button>
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

                        <!--
                        <div id="boutons_ligne_1_jou">
                        <?php  //while($row = $reqj->fetch(PDO::FETCH_ASSOC)) : ?>
                            <button id=joueuse_<?php //echo htmlspecialchars($row['Numero']); ?> class="bouton_jou" type="button">
                                <p class=nom_joueuse><?php //echo htmlspecialchars($row['Nom']); ?>S</p>
                                <p class=numero_joueuse><?php //echo htmlspecialchars($row['Numero']); ?>12</p>
                            </button>
                        <?php //endwhile ?>
                           <button id=joueuse_2 class="bouton_jou" type="button">
                                <p class=nom_joueuse>Joueuse_2</p>
                                <p class=numero_joueuse>2</p>
                            </button>
                        </div>
                        <div id="boutons_ligne_x_jou">
                            <button id=joueuse_3 class="bouton_jou" type="button">
                                <p class=nom_joueuse>Joueuse_3</p>
                                <p class=numero_joueuse>3</p>
                            </button>
                            <button id=joueuse_4 class="bouton_jou" type="button">
                                <p class=nom_joueuse>Joueuse_4</p>
                                <p class=numero_joueuse>4</p>
                            </button>
                        </div>
                        <div id="boutons_ligne_x_jou">
                            <button id=joueuse_5 class="bouton_jou" type="button">
                                <p class=nom_joueuse>Joueuse_5</p>
                                <p class=numero_joueuse>5</p>
                            </button>
                            <button id=joueuse_6 class="bouton_jou" type="button">
                                <p class=nom_joueuse>Joueuse_6</p>
                                <p class=numero_joueuse>6</p>
                            </button>
                        </div>
                        <div id="boutons_ligne_x_jou">
                            <button id=joueuse_7 class="bouton_jou" type="button">
                                <p class=nom_joueuse>Joueuse_7</p>
                                <p class=numero_joueuse>7</p>
                            </button>
                            <button id=joueuse_8 class="bouton_jou" type="button">
                                <p class=nom_joueuse>Joueuse_8</p>
                                <p class=numero_joueuse>8</p>
                            </button>
                        </div>
                        <div id="boutons_ligne_x_jou">
                            <button id=joueuse_9 class="bouton_jou" type="button">
                                <p class=nom_joueuse>Joueuse_9</p>
                                <p class=numero_joueuse>9</p>
                            </button>
                            <button id=joueuse_10 class="bouton_jou" type="button">
                                <p class=nom_joueuse>joueuse_10</p>
                                <p class=numero_joueuse>10</p>
                            </button>
                        </div>
                        <div id="boutons_ligne_x_jou">
                            <button id=joueuse_11 class="bouton_jou" type="button">
                                <p class=nom_joueuse>joueuse_11</p>
                                <p class=numero_joueuse>11</p>
                            </button>
                            <button id=joueuse_12 class="bouton_jou" type="button">
                                <p class=nom_joueuse>joueuse_12</p>
                                <p class=numero_joueuse>12</p>
                            </button>
                        </div>
                        !-->
                        <div id="boutons_ligne_x_jou">
                        <?php while($row = $reqg->fetch(PDO::FETCH_ASSOC)) : ?>
                            <button id=gardienne_<?php echo htmlspecialchars($count); ?> class="bouton_gar" type="button">
                                <p class=nom_gardienne><?php echo htmlspecialchars($row['Nom']); ?></p>
                                <p class=numero_gardienne><?php echo htmlspecialchars($row['Numero']); ?></p>
                            </button>
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
                            <input type="hidden" name="periode" id="periode" /> 
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
                                <input type="hidden" name="attaque" id="attaque" />    
                                <button id="bouton_Attaque" class="boutton_attaque_defense"  type="button">Attaque</button>
                                
                                <button id="bouton_Defense" class="boutton_attaque_defense"  type="button">Défense</button>
                            </div>
                            


                        

                            <div id="Type_attaque">
                                <input type="hidden" name="type_attaque" id="type_attaque" value="Attaque Placée"/>    
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
                                    <div id="conteneur_carton_jaune"></div>
                                    <div id="conteneur_carton_rouge"></div>
                                    <button id="Deux_min"> 2'</button>
                                </div>
                            </div>
                            <!-- Pack de boutons de saisies pour les actions attaque-->
                            <div id="Boutons_saisies">
                                <div id="boutons_ligne_1">
                                    <button id="faute_zone" class="boutton_fait_de_jeu" type="button">Fautes de zone</button>
                                    <button id="marche" class="boutton_fait_de_jeu" type="button">Marché</button>
                                    <button id="reprise_drible" class="boutton_fait_de_jeu" type="button">Reprise de drible</button>
                                    <button id="balle_perdue" class="boutton_fait_de_jeu" type="button">Balle perdue</button>
                                    <button id="mauvaise_relance" class="boutton_fait_de_jeu" type="button">Mauvaise relance</button>
                                </div>
                                <div id="boutons_ligne_2">
                                    <button id="passage_en_force" class="boutton_fait_de_jeu" type="button">Passage en force</button>
                                    <button id="faute_subie" class="boutton_fait_de_jeu" type="button">Faute subie</button>
                                    <button id="tir_contre" class="boutton_fait_de_jeu" type="button">Tir contré</button>
                                </div>
                                <div id="boutons_ligne_3">
                                    <button id="deux_min_provoque" class="boutton_fait_de_jeu" type="button">2' provoqué</button>
                                    <button id="sept_m" class="boutton_fait_de_jeu" type="button">7m</button>
                                    <button id="duel_gagne" class="boutton_fait_de_jeu" type="button">Duel gagné</button>
                                    <button id="relance" class="boutton_fait_de_jeu" type="button">Relance</button>
                                </div>
                            </div>
                            <!-- Pack de boutons de saisies pour les actions défense-->
                            <div id="Boutons_saisies_defense">
                                <div id="boutons_ligne_1">
                                    <button id="faute_zone_d" class="boutton_fait_de_jeu" type="button">Fautes de zone</button>
                                    <button id="marche_d" class="boutton_fait_de_jeu" type="button">Marché</button>
                                    <button id="reprise_drible_d" class="boutton_fait_de_jeu" type="button">Reprise de drible</button>
                                    <button id="balle_recuperee_d" class="boutton_fait_de_jeu" type="button">Balle récupérée</button>
                                    <button id="mauvaise_relance_d" class="boutton_fait_de_jeu" type="button">Mauvaise relance</button>
                                </div>
                                <div id="boutons_ligne_2">
                                    <button id="passage_en_force_d" class="boutton_fait_de_jeu" type="button">Passage en force</button>
                                    <button id="faute_subie_d" class="boutton_fait_de_jeu" type="button">Faute subie</button>
                                    <button id="tir_contre_d" class="boutton_fait_de_jeu" type="button">Tir contré</button>
                                    <button id="interception_d" class="boutton_fait_de_jeu" type="button">Interception</button>
                                </div>
                                <div id="boutons_ligne_3">
                                    <button id="deux_min_provoque_d" class="boutton_fait_de_jeu" type="button">2' provoqué</button>
                                    <button id="sept_m_d" class="boutton_fait_de_jeu" type="button">7m</button>
                                    <button id="duel_gagne_d" class="boutton_fait_de_jeu" type="button">Duel gagné</button>
                                    <button id="duel_perdu_d" class="boutton_fait_de_jeu" type="button">Duel perdu</button>
                                    <button id="relance_d" class="boutton_fait_de_jeu" type="button">Relance</button>
                                    <!-- Bouton relance avec but uniquement pour les actions gardienne-->
                                    <button id="relance_but" class="boutton_fait_de_jeu" type="button">Relance avec but</button>
                                        
                                </div>
                            </div>
                            <div id="Validation">
                                <button id="Validation_saisie" type="button">
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
                                    <a id="delimitation" >
                                        <path d="M 125 60 L 125 220 
                                                M 205 60 L 205 220 
                                                M 45 113 L 284 113
                                                M 45 166 L 284 166 Z" fill="none"/>
                                    </a>
                                    
                                </svg>
                                
                            </div>
                            
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
                                            <td class="table-data"><?php echo htmlspecialchars($row['Temps']); ?></td>
                                            <td class="table-data"><?php echo htmlspecialchars($row['Nom Joueuse']); ?></td>
                                            <td class="table-data"><?php echo htmlspecialchars($row['Attaque']); ?></td>
                                            <td class="table-data"><?php echo htmlspecialchars($row['Tir']); ?></td>
                                            <td class="table-data"><?php echo htmlspecialchars($row['But']); ?></td>
                                            <td class="table-data"><?php echo htmlspecialchars($row['7m']); ?></td>
                                            <td class="table-data"><?php echo htmlspecialchars($row['Zone terrain']); ?></td>
                                            <td class="table-data"><?php echo htmlspecialchars($row['Zone cage']); ?></td>
                                            <td class="table-data"><?php echo htmlspecialchars($row['Contre-attaque']); ?></td>
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
            <script type="text/javascript" src="onglet_saisies.js"></script>
            <script type="text/javascript" src="https://code.iconify.design/2/2.1.0/iconify.min.js"></script>

        </body>

</html>

