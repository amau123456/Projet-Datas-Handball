<?php 
if (isset ($_POST['num_joueuse']) && isset($_POST['prenom']) && isset($_POST['nom']) && isset($_POST['equipe'])){



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
//$poste = filter_input(INPUT_POST, 'poste', FILTER_SANITIZE_STRING);

//echo("$poste");
//echo($prenom);
//echo($num_joueuse);
//echo($nom);
//echo($equipe);

//VERIFIER QUE LA JOUEUSE NE SOIT PAS PRESENTE

$sql  = $bdd->prepare("SELECT COUNT(*) FROM joueuses WHERE Prenom = :prenom AND Nom= :nom AND Numero= :num_joueuse");
	$sql->execute(array(
    	':prenom' => $prenom,
    	':nom'=> $nom,
        ':num_joueuse'=>$num_joueuse));

	$resu = $sql->fetch();

//SI ELLE N'Y EST PAS , ON INSERE LA JOUEUSE
if((!$resu[0] == 0)){
        echo("Cette joueuse est déjà enregistrée");
      }

      else{
       
			$req = $bdd->prepare('INSERT INTO joueuses (Nom,Prenom,Numero,Equipe,Poste) VALUES(:nom,:prenom,:num_joueuse,:equipe,:poste)');	
			$req->execute(array(
					':prenom' =>$prenom,
					':nom' =>$nom,
					':num_joueuse' =>$num_joueuse,
					':equipe' =>$equipe,
					':poste' =>$poste));
		
	header ('location:onglet_joueuses.php');
	
	}

}



?>