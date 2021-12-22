<?php
session_start();
?>

<!DOCTYPE html>
<html>
    <head>
       <meta charset="utf-8">
        <!-- importer le fichier de style -->
        <link rel="stylesheet" href="css/bootstrap.css" />
        <link rel="stylesheet" href="css/style.css" />
        <title>Inscription</title>
    </head>
    <body>
        <div id="container">
            <!-- zone de connexion -->
            <div id="erreur">
            <p>Vous n'avez pas rempli correctement les champs du formulaire !</p>
            </div>
            <form action="entree.php" method="POST">
                <h2>Inscription</h2>
                
                <label for="pseudo"><b>Nom d'utilisateur</b></label>
                <input type="text" placeholder="Entrer le nom d'utilisateur" id = "pseudo" name="username" class="champ" required>

                <label for="mdp"><b>Mot de passe</b></label>
                <input type="password" placeholder="Entrer le mot de passe" id="mdp" name="password" class="champ" required>

                <label for = "confirmation"><b>Confirmation</b></label>
                <input type="password" placeholder="Confirmer le mot de passe" id="confirmation" name="repassword" class="champ" required>

                <label for ="mail"><b>Adresse e-mail</b></label>
                <input type ="text" placeholder="paul_84@sfr.fr" id="mail" name="email" class="champ"  required>


                <input type="submit" id='submit' value='REGISTER' />
                



                <?php
                if(isset($_GET['erreur'])){
                    $err = $_GET['erreur'];
                    if($err==1){
                        echo "<p style='color:red'>Pseudo dèjà existant</p>";
                    }
                    else if ($err==2){
                        echo "<p style='color:red'>Mot de passe pas identique</p>";
                    }
                }
                ?>

                <p id="infoMdp"></p>
                <p><a href ="login.php">Dèjà inscrit ? Connectez vous</a></p>
            </form>
        </div>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
        <script src="js/formulaire.js"></script>


    </body>
</html>