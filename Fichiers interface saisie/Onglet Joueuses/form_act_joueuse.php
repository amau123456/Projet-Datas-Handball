<?php 
try
{
	$bdd = new PDO('mysql:host=localhost;dbname=Projet_Handball;charset=utf8', 'amau', '291298', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
}
catch(Exception $e)
{
	die('Erreur : '.$e->getMessage());
}

$num_joueuse=htmlspecialchars($_POST['num_joueuse']);
$prenom=htmlspecialchars($_POST['prenom']);
$nom=htmlspecialchars($_POST['nom']);
$equipe=htmlspecialchars($_POST['equipe']);
$poste=htmlspecialchars($_POST['poste']);





//VERIFIER QUE LA JOUEUSE NE SOIT PAS PRESENTE

/* $sql = $bdd->prepare("SELECT COUNT(*) FROM joueuses WHERE Prenom = :prenom AND Nom= :nom AND Numero= :num_joueuse");
	$sql->execute(array(
		':prenom' => $prenom,
		':nom'=> $nom,
		':num_joueuse'=>$num_joueuse));

	$resu = $sql->fetch(); */

/* //SI ELLE N'Y EST PAS , ON INSERE LA JOUEUSE
if((!$resu[0] == 0))
{
	echo("Cette joueuse est déjà enregistrée");
} */

	/* else
	{ */


	
$req = $bdd->prepare('INSERT INTO joueuses (Nom,Prenom,Equipe,Poste,Numero) VALUES(:nom,:prenom,:equipe,:poste,:num_joueuse)');	
$req->execute(array(
	':nom' =>$nom,		
	':prenom' =>$prenom,
	':equipe' =>$equipe,
	':poste' =>$poste,
	':num_joueuse' =>$num_joueuse));
	/* } */
?>