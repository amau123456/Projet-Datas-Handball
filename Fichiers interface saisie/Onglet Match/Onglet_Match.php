<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap.css">
        <link rel="stylesheet" href="Onglet_Match.css" />

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
        <script src="chosen/chosen.jquery.js"></script>

        <script type="text/javascript">
      function sendData()
        {
            var club_adverse = document.getElementById("club_adverse").value;
            var date_rencontre = document.getElementById("date_rencontre").value;
            var lieu_match = document.getElementById("lieu_match").value;
            var Domicile = document.getElementById("Domicile").value;
            var selection_joueuses_global = document.getElementById("selection_joueuses_global").value;
            
            $.ajax({
                type: 'post',
                url: 'form_act_match.php',
                data: {
                  club_adverse:club_adverse,
                  date_rencontre:date_rencontre,
                  lieu_match:lieu_match,
                  Domicile:Domicile,
                  selection_joueuses_global:selection_joueuses_global
                },
            success: function (response) {
                
                }
            });
          location.reload(true)
          return false;
        }
        </script>
        <link rel="stylesheet" href="chosen/chosen.css"/>
        <title>Onglet Match</title>
    </head>


    <?php
            $host = 'localhost';
            $dbname = 'Projet_Handball';
            $user = 'amau';
            $password = '291298';
            $pair = 'ligne-pair';
            

            $dsn = "mysql:host=$host;dbname=$dbname"; 
            // récupérer tous les utilisateurs
  
            try{
                $pdo = new PDO($dsn, $user, $password);}
 
   
            catch (PDOException $e){
                echo $e->getMessage();
                }
        ?>  


        <?php 
            $req = $pdo ->prepare ("SELECT * FROM matchs");
            $req->execute()
        ?>

    <body>
        <div id="Bloc_gauche">
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
                      <li class="nav-item active">
                        <a class="nav-link" href=""">Accueil <span class="sr-only">(actuel)</span></a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="../Onglet Joueuses/onglet_joueuses.html">Mon équipe</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="../Onglet Saisies/onglet_saisies.html">Saisie Vidéo</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="">Résultats</a>
                      </li>
                    </ul>
                  </div>
              </nav>
            </header>
        
            <div id="Table_matchs">
              <table id="Table_Match">
                <thead>
                    <tr class="table-ligne">
                        <th class="table-head"><span id="logo_hand" class="iconify" data-icon="openmoji:man-playing-handball" style="color: #383338;"></span></th>
                        <th class="table-head">N° Match</th>
                        <th class="table-head">Opposant</th>
                        <th class="table-head">Date</th>
                        <th class="table-head">Ext/Dom</th>
                        <th class="table-head"><span id="poubelle"class="iconify" data-icon="fluent:delete-20-filled" style="color: #383338; font-size: 20px;"></span></th>
                    </tr>
                </thead>
    
                <tbody>
                  <?php while($row = $req->fetch(PDO::FETCH_ASSOC)) : ?>
                              
                              <tr class=<?php echo($pair)?>>
                                  <td class="table-data"><input id="checkbox_selection" type="checkbox" class="delete_checkbox"/>
                                  <td class="table-data"><?php echo htmlspecialchars($row['id_match']); ?></td>
                                  <td class="table-data"><?php echo htmlspecialchars($row['Club_adverse']); ?></td>
                                  <td class="table-data"><?php echo htmlspecialchars($row['Date']); ?></td>
                                  <td class="table-data"><?php echo htmlspecialchars($row['Domicile']); ?></td>
                                  <td class="icones_sur_ligne"><a href ="suppression_match.php?id_match=<?php echo $row['id_match']?>"><span class="iconify" data-icon="ci:edit" style="color: #383338; font-size: 20px;"></span>
                              <span class="iconify" data-icon="fluent:delete-20-filled" style="color: #383338; font-size: 20px;"></span></td>

                              </tr>
                      <?php   if ($pair == 'ligne-pair') 
                                  $pair='ligne-impair';
                              else 
                                  $pair ='ligne-pair'; ?>
                  <?php endwhile; ?>
                </tbody>
              </table>
            </div>

        </div>

        <?php 
            $req2 = $pdo ->prepare ('SELECT * FROM joueuses WHERE Poste <> "Gardienne"');
            $req2->execute()
        ?>

        <?php 
            $req3 = $pdo ->prepare ('SELECT * FROM joueuses WHERE Poste = "Gardienne"');
            $req3->execute()
        ?>
        <div id="Bloc_droit">
            <div id="Contenu_section">
              <img id="Fleche_jaune" src="Flèche Jaune.png"/>
                <div id="Titre_section_formulaire_match">
                    <span class="iconify" data-icon="openmoji:man-playing-handball" style="color: black; font-size: 135px;"></span>
                    <h1 class="Titre_section">Feuille de Match</h1>
                </div>
                <div id="Formulaire_ajout_match">
                    <form method="post" onsubmit="return sendData();">
                        <div id="Section_champs_saisies">
                            <div class="champ_saisie">
                            <label class= 'info_club' for="club_adverse">Club adverse</label>
                            <input class="form-control" name="club_adverse" id="club_adverse"  size="30" placeholder="Saisir nom club" />
                            
                            </div>
                            <div class="champ_saisie">
                            <label class= 'info_club' for="lieu_match">Lieu match :</label>
                            <input class="form-control" name="lieu_match" id="lieu_match"  size="30" placeholder="Saisir le lieu de la rencontre" />
                            </div>

                            <div class="champ_saisie">
                            <label class= 'info_club' for="date_rencontre">Date de la rencontre :</label>
                            <input type="date" name="date_rencontre" id="date_rencontre"  size="30" placeholder="Saisir date" />
                            </div>
                            
                            <div id="Domicile_exterieur">
                              <input type="hidden" name="Domicile" id="Domicile" value="Dom"/>
                                <p class="bouton_domicile_exterieur" id="bouton_domicile">Domicile</p>
                                <div class="onoffswitch" id="myonoffswitch">
                                  <label class="switch">
                                    <input type="checkbox">
                                    <span class="slider round"></span>
                                  </label>
                                </div>
                                <p class="bouton_domicile_exterieur" id="bouton_exterieur">Exterieur</p>
                              
                            </div>
                            
                              
                                <label class= 'info_club' for="selection_joueuses">Selection joueuses :</label>
                                <input type="hidden" name="selection_joueuses_global" id="selection_joueuses_global"/>
                                <select data-placeholder="" multiple class="chosen-select" name="selection_joueuses" id="selection_joueuses" >
                                  <optgroup label="Joueuses">
                                    <?php while($row = $req2->fetch(PDO::FETCH_ASSOC)) : ?>
                                      <option><?php echo htmlspecialchars($row['Nom']); ?></option>
                                    <?php endwhile; ?>
                                  </optgroup>
                                  <optgroup label="Gardiennes">
                                  <?php while($row = $req3->fetch(PDO::FETCH_ASSOC)) : ?>
                                      <option><?php echo htmlspecialchars($row['Nom']); ?></option>
                                    <?php endwhile; ?>
                                </optgroup>
                              </select>
                            
                             
                            <div class="champ_saisie" id="selection_competition">
                            <label class= 'info_club' for="competition"> Compétition :</label>
                            <input class="form-control" name="competition" id="competition"  size="30" placeholder="Saisir le championnat" />
                            </div>   

                        </div>
                        
                        <button type="submit" class="bouton_valider"><span class="iconify" data-icon="el:ok-circle" style="color: #FFFFFF; font-size: 20px;"></span>Valider</button>
                    
                        
                        <button class="bouton_analyse"><span class="iconify" data-icon="bi:play-btn" style="color: #383838; font-size: 24px;"></span>Analyse du match</button>
                        
                        
                    </form>
                </div>
                <script type="text/javascript">
                  $(".chosen-select").chosen({
                    no_results_text: "Oops, nothing found!"
                  });
                </script>

            </div>
            
        </div>
        
       
      <script src="https://code.iconify.design/2/2.1.0/iconify.min.js"></script>
      <script src="Onglet_match.js"></script>
    </body>
</html>