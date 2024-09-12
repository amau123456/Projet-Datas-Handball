<!DOCTYPE html>

<html>
<head>
	<title>Mon site de musique</title>
	<meta charset = "utf-8">
	<link rel="stylesheet" href="css/bootstrap.css">
	<link rel ="stylesheet" href = "css/style.css">
	<script src="https://kit.fontawesome.com/a076d05399.js"></script>
</head>


<?php
            
            
            $compteur= 0;
            $host = 'localhost';
            $dbname = 'mes_musiques';
            $user = 'root';
            $password = 'remi1998';
  
            

            $dsn = "mysql:host=$host;dbname=$dbname"; 
            // récupérer tous les utilisateurs
  
            try{
                $pdo = new PDO($dsn, $user, $password);}
 
   
            catch (PDOException $e){
                echo $e->getMessage();
                }
        ?>  


        <?php 
            $req = $pdo ->prepare ("SELECT COUNT(*),titre,auteur FROM musiques JOIN user ON user.username = musiques.username GROUP BY titre ORDER BY COUNT(*) DESC LIMIT 5");
            $req->execute()

            
        ?>


<body>
<header>
	<nav>
		<div class="col-lg-3"><h1>MagicMusic</h1></div>
		
		<div class= "col-lg-offset-6 col-lg-3">
			<a href = 'login.php'><button>Log In</button></a>
			<a href = 'register.php'><button>Register</button></a>
		</div>
	</nav>
</header>
	<div id="accueil">
	<section>
		
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

		<div class = "col-lg-4">
			<h1>Ton site de musique personnalisé</h1>
			<p class="description">Sur ce site tu peux ajouter tes musiques préférées et les ordonner comme tu le souhaites ! </br>
			  Rejoins notre communauté et influence les tendances du moment !</br>
			  A très vite sur MagicMusic ! 
			</p>
		</div>
	</section>
	<!-- LES IMAGES -->
	<div id="img_couleur">
		<img src="img/son_couleur.png" alt="couleurs" height="275"/>
	</div>
	<div id="liseret">
		<img src="img/liseret_couleur.png" alt="liseret" width="375" height="175"/>
	</div>
	<div id="casque">
		<img src="img/casque.png" alt="casque" width="80" height="80"/>
	</div>
	<div id="logo">
		<img src="img/logo.png" alt="logo" width="120" height="120"/>
	</div>

	</div>	





</body>


</html>