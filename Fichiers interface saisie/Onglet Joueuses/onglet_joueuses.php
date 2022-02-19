<html>
    <head>
        <meta charset="utf-8" />
        <link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap.min.css">
        <link rel="stylesheet" href="onglet_joueuses.css" />
        <title>Mon équipe</title>
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
            $req = $pdo ->prepare ("SELECT * FROM joueuses");
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
                            <a class="nav-link" href="../Onglet Match/Onglet_Match.html"">Accueil <span class="sr-only">(actuel)</span></a>
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

            <div id="Table_joueuses">
                <table id="Table_Match">
                    <thead>
                        <tr class="table-ligne">
                            <th class="table-head"><span id="logo_hand" class="iconify" data-icon="openmoji:man-playing-handball" style="color: #383338;"></span></th>
                            <th class="table-head">N° Joueuse</th>
                            <th class="table-head">Nom</th>
                            <th class="table-head">Prénom</th>
                            <th class="table-head">Équipe</th>
                            <th class="table-head">Poste</th>
                            <th class="table-head"><span id="poubelle" class="iconify" data-icon="fluent:delete-20-filled" style="color: #383338; font-size: 20px;"></span></th>
                        </tr>
                    </thead>
        
                    <tbody>
                        <?php while($row = $req->fetch(PDO::FETCH_ASSOC)) : ?>
                            <tr class=<?php echo($pair)?>>
                                <td class="table-data"><input id="checkbox_selection" type="checkbox" class="delete_checkbox"/>
                                <td class="table-data"><?php echo htmlspecialchars($row['Numero']); ?></td>
                                <td class="table-data"><?php echo htmlspecialchars($row['Nom']); ?></td>
                                <td class="table-data"><?php echo htmlspecialchars($row['Prenom']); ?></td>
                                <td class="table-data"><?php echo htmlspecialchars($row['Equipe']); ?></td>
                                <td class="table-data"><?php echo htmlspecialchars($row['Poste']); ?></td>
                                <td class="icones_sur_ligne">
                                <span class="iconify" data-icon="ci:edit" style="color: #383338; font-size: 20px;"></span>
                                <a href ="suppression.php?Nom=<?php echo $row['Nom']?>"><span class="iconify" data-icon="fluent:delete-20-filled" style="color: #383338; font-size: 20px;"></span></a></td>
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
        <div id="Bloc_droit">
            <div id="Contenu_section">
                <img id="Fleche_jaune" src="Flèche Jaune.png"/>
                <div id="Titre_section_formulaire_match">
                    <span class="iconify" data-icon="openmoji:man-playing-handball" style="color: black; font-size: 135px;"></span>
                    <h1 class="Titre_section">Fiche Joueuse</h1>
                </div>
                <div id="Formulaire_ajout_match">
                    <form action="form_act_joueuse.php" method="post">
                        <div id="Section_champs_saisies">
                            <div class="champ_saisie">
                            <label class= 'info_club' for="num_joueuse">N° Joueuse :</label>
                            <input class="form-control" type="text" name="num_joueuse" id="num_joueuse"  size="30" placeholder="Saisir le N° Joueuse" />
                            
                            </div>
                            <div class="champ_saisie">
                            <label class= 'info_club' for="nom">Nom :</label>
                            <input class="form-control" type="text" name="nom" id="nom"  size="30" placeholder="Saisir le nom de la joueuse" />
                            </div>

                            <div class="champ_saisie">
                            <label class= 'info_club' for="prenom">Prénom :</label>
                            <input class="form-control" type="text" name="prenom" id="prenom"  size="30" placeholder="Saisir le prénom de la joueuse" />
                            </div>            

                            <div class="champ_saisie">
                                <label class= 'info_club' for="equipe">Équipe :</label>
                                <input class="form-control" type="text" name="equipe" id="equipe"  size="30" placeholder="Saisir l'équipe de la joueuse" />
                            </div> 
                            <div class="champ_saisie">
                                <label class= 'info_club' for="poste">Poste :</label>
                                <select class="form-control" aria-label="Poste Joueuse" name="poste">
                                    <option selected>Poste de la joueuse</option>
                                    <option value="Pivot">Pivot</option>
                                    <option value="Aillière Droit">Aillière Droit</option>
                                    <option value="Aillière Gauche">Aillière Gauche</option>
                                    <option value="Arrière Gauche">Arrière Gauche</option>
                                    <option value="Arrière Droit">Arrière Droit</option>
                                    <option value="Demi-centre">Demi-centre</option>
                                    <option value="Gardienne">Gardienne</option>
                                </select>
                            </div>
                            
                            <button class="bouton_valider"><span class="iconify" data-icon="el:ok-circle" style="color: #FFFFFF; font-size: 20px;"></span>Valider</button>
                    
                        
                        <button class="bouton_analyse"><span class="iconify" data-icon="bi:play-btn" style="color: #383838; font-size: 24px;"></span>Analyse du match</button>
                        </div>
                    </form>
                </div>
            </div>
        

        </div>
        <script src="https://code.iconify.design/2/2.1.0/iconify.min.js"></script>
    </body>
</html>           
