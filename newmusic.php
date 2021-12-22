<?php
session_start();
if (isset ($_POST['titre']) && isset($_POST['auteur']) && isset($_POST['type']) && isset($_POST['album'])){

 
try
{
	$bdd = new PDO('mysql:host=localhost;dbname=mes_musiques;charset=utf8', 'root', 'remi1998', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
}
catch(Exception $e)
{
        die('Erreur : '.$e->getMessage());
}

$titre=htmlspecialchars($_POST['titre']);
$auteur=htmlspecialchars($_POST['auteur']);
$type=htmlspecialchars($_POST['type']);
$album=htmlspecialchars($_POST['album']);
$username=htmlspecialchars($_SESSION['username']);


//VERIFIER QUE LE TITRE NE SOIT PAS PRESENT

$sql  = $bdd->prepare("SELECT COUNT(*) FROM musiques WHERE username = :pseudo AND titre= :titre");
	$sql->execute(array(
    	':pseudo' => $username,
    	':titre'=> $titre));

	$resu = $sql->fetch();

//SI IL N'Y EST PAS , ON INSERE LE TITRE
if((!$resu[0] == 0)){
        echo("Vous avez déjà ajouté ce titre");
      }

      else{
       
			$req = $bdd->prepare('INSERT INTO musiques (username,titre, auteur, album, type) VALUES( :username,:titre, :auteur, :album, :type)');	
			$req->execute(array(
	
					':username' => $username,
					':titre' => $titre,
					':auteur' => $auteur,
					':album' =>$album,
					':type' =>$type
	
					));
	header ('location:principale.php');
	
	}
}

?>

