<?php


try
{
	$bdd = new PDO('mysql:host=localhost;dbname=hbpc;charset=utf8', 'root', 'remi1998', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
}
catch(Exception $e)
{
        die('Erreur : '.$e->getMessage());
}



//$nom=htmlspecialchars($_GET['nom']);

//Supprimer les messages
$nom= isset($_GET['Nom']) ? $_GET['Nom'] : false;
echo($nom);

$sql  = $bdd->prepare("DELETE FROM joueuses WHERE Nom = :nom");
$sql->execute(array(
    	
    	':nom'=>$nom));

header('location:onglet_joueuses.php');
?>