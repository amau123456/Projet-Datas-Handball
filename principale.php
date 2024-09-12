<?php
    session_start();


                if(isset($_GET['deconnexion']))
                { 
                   if($_GET['deconnexion']==true)
                   {  
                      session_unset();
                      header("location:login.php");
                   }
                }
                else if($_SESSION['username'] !== ""){
                    $username = $_SESSION['username'];
                    // afficher un message
                    
                }
            ?>


             <?php
            
            
            $compteur= 0;
            $host = 'localhost';
            $dbname = 'mes_musiques';
            $user = 'root';
            $password = 'remi1998';
  
            $username=$_SESSION['username'];

            $dsn = "mysql:host=$host;dbname=$dbname"; 
            // récupérer tous les utilisateurs
  
            try{
                $pdo = new PDO($dsn, $user, $password);}
 
   
            catch (PDOException $e){
                echo $e->getMessage();
                }
        ?>            

<html>
    <head>
        <meta charset="utf-8">
        <!-- importer le fichier de style -->
        <link rel="stylesheet" href="css/bootstrap.css">
        <link rel="stylesheet" href="css/style.css"/>
        <title>Mon site de musique</title>
        <script src="https://kit.fontawesome.com/a076d05399.js"></script>
    </head>
    <body>

<header>
    <nav>
        <div class="col-lg-3"><h1>MagicMusic</h1></div>
        <div class="col-lg-offset-6 col-lg-3" id = "monpseudo">
            <?php 
             echo"<h2>Bienvenue , $username</h2>"
             ?>
        </div>
        <div><a href = 'index.php'><button>Log Out</button></a></div>
    </nav>
</header>


        <?php 
            $req = $pdo ->prepare ("SELECT COUNT(*),titre,auteur FROM musiques JOIN user ON user.username = musiques.username GROUP BY titre ORDER BY COUNT(*) DESC LIMIT 5");
            $req->execute()

            
        ?>


    <section id = "contenu">
        <div class ="col-lg-4">
            <h1><i style='font-size:24px' class='fas'>&#xf080;</i> Tendances du moment</h1>
            <table id="toptendance">
                <thead>
                <tr>
                    <th class=tr1><i style='font-size:24px' class='fas'>&#xf5a2;</i></th>
                    <th>Titre</th>
                    <th>Artiste</th>
                </tr>
                </thead>
                <tbody>
                    <?php while($row = $req->fetch(PDO::FETCH_ASSOC)) : ?>
                <tr class=tr1>
                    <td><?php $compteur++;echo ("$compteur")?> </td>
                    <td><?php echo htmlspecialchars($row['titre']); ?></td>
                    <td><?php echo htmlspecialchars($row['auteur']); ?></td>
                </tr>
                <?php endwhile; ?>
                </tbody>
            </table>
        </div>

        <div class="col-lg-4" id="img_disque">
            <img src="img/disque_musique.png" alt="musik" height="485" width="850" />
        </div>

        <div id="img_couleur">
        <img src="img/son_couleur.png" alt="couleurs" height="275"/>
        </div>

        <div id="logo_principale">
        <img src="img/logo.png" alt="logo" width="50" height="50"/>
        </div>

        <!--AJOUTER UNE MUSIQUE-->
        
            <button class="open-button" onclick="openForm()">Ajouter musique</button>

            <div class="form-popup" id="myForm">
                <form action="newmusic.php" class="form-container" method="post">
                    <h2>Nouvelle musique</h2>

                    <label for="titre"><b>Titre</b></label>
                    <input type="text" placeholder="Titre" name="titre" required>

                    <label for="auteur"><b>Auteur</b></label>
                    <input type="text" placeholder="Auteur" name="auteur" required>

                    <label for="album"><b>Album</b></label>
                    <input type="text" placeholder="Album" name="album" required>

                    <label for="type"><b>Genre</b></label>
                    <input type="text" placeholder="Genre" name="type" required>


                    <button type="submit" class="btn">Ajouter</button>
                    <button type="button" class="btn cancel" onclick="closeForm()">Annuler</button>
                </form>
            </div>

        
    </section>  

    <!--LA CONNEXION A LA BDD ET L'EXTRACTION DE MES MUSIQUES-->
    <aside>
        <?php
       
        $sql = $pdo ->prepare ("SELECT titre,auteur,type,album FROM musiques WHERE username=:username");
        $sql->execute(array(
            ':username' => $username));


        ?>

        <table id="tableau_musique">
            <thead>
                <tr>
                    <th>Titre</th>
                    <th>Auteur</th>
                    <th>Album</th>
                    <th>Genre</th>
                    <th></th> 
                </tr>
            </thead>
            <tbody>
                <?php while($row = $sql->fetch(PDO::FETCH_ASSOC)) : ?>
                 <tr>
                    <td><?php echo htmlspecialchars($row['titre']); ?></td>
                    <td><?php echo htmlspecialchars($row['auteur']); ?></td>
                    <td><?php echo htmlspecialchars($row['album']); ?></td>
                    <td><?php echo htmlspecialchars($row['type']); ?></td>
                    <td><a href ="suppression.php?titre=<?php echo $row['titre']?>"><button id="bootstrap-overrides" class="small" type="button"><i class="fa fa-trash" style="font-size:16px;color:red"></button></a><td>
                </tr>
     <?php endwhile; ?>
   </tbody>
 </table>



      

    </aside>





</body>


<script>
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
</script>

</html>