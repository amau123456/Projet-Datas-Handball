<html>
    <head>
        <meta charset="utf-8" />
        <link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap.min.css">
        <link rel="stylesheet" href="onglet_joueuses.css" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>

       
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
                $pdo = new PDO($dsn, $user, $password);
            }
 
   
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
                    <a class="navbar-brand" href="../OngletAccueil/onglet_accueil.html">
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
                            <a class="nav-link" href="../OngletMatch/Onglet_Match.php"">Mes Matchs<span class="sr-only">(actuel)</span></a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="../OngletJoueuses/onglet_joueuses.php">Mon équipe</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="../OngletSaisies/onglet_saisies_base.php">Saisie Vidéo</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="http://127.0.0.1:8050/">Résultats</a>
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
                            <!-- <th class="table-head"><span id="poubelle" class="iconify" data-icon="fluent:delete-20-filled" style="color: #383338; font-size: 20px;"></span></th> -->
                        </tr>
                    </thead>
        
                    <tbody>
                        <?php while($row = $req->fetch(PDO::FETCH_ASSOC)) : ?>
                            <tr class=<?php echo($pair)?>>
                                <td class="table-data"><a href ="suppression.php?Nom=<?php echo $row['Nom']?>">
                                <span class="iconify" data-icon="fluent:delete-20-filled" style="color: #383338; font-size: 20px;"></span></a></td>
                                <td class="table-data"><?php echo htmlspecialchars($row['Numero']); ?></td>
                                <td class="table-data"><?php echo htmlspecialchars($row['Nom']); ?></td>
                                <td class="table-data"><?php echo htmlspecialchars($row['Prenom']); ?></td>
                                <td class="table-data"><?php echo htmlspecialchars($row['Equipe']); ?></td>
                                <td class="table-data"><?php echo htmlspecialchars($row['Poste']); ?></td>
                               
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
                      <form action="form_act_joueuse.php" method="POST" class="ajax">

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
                                    <option selected></option>
                                    <option value="Pivot">Pivot</option>
                                    <option value="Arrière Gauche">Arrière Gauche</option>
                                    <option value="Arrière Droit">Arrière Droit</option>
                                    <option value="Demi-centre">Demi-centre</option>
                                    <option value="Gardienne">Gardienne</option>
                                </select>
                            </div>
                            
                        <button type="submit" class="bouton_valider"><span class="iconify" data-icon="el:ok-circle" style="color: #FFFFFF; font-size: 20px;"></span>Valider</button>
                        </div>
                    </form>
                </div>
            </div>
        

        </div>
        <script src="https://code.iconify.design/2/2.1.0/iconify.min.js"></script>
        <script type="text/javascript">
            console.log("Trigger");
            $('form.ajax').on('submit',function(){
                console.log("Trigger");
                var that=$(this),
                url=that.attr('action'),
                method=that.attr('method'),
                data={
                }
                that.find('[name]').each(function(index,value){
                    var that= $(this),
                    name=that.attr('name'),
                    value=that.val();
                    data[name]=value;
                });
            $.ajax({
                type: method,
                url: url,
                data:data,
                success: function (response){
                    console.log(response);
                }
            });

            location.reload(true)
                return false; 
            });
        </script>
    </body>
</html>           
