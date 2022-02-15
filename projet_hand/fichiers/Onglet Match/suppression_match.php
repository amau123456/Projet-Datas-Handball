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
$id_match= isset($_GET['id_match']) ? $_GET['id_match'] : false;
echo($id_match);

$sql  = $bdd->prepare("DELETE FROM matchs WHERE id_match = :idmatch");
$sql->execute(array(
    	
    	':idmatch'=>$id_match));

header('location:Onglet_match.php');
?>