<script src="Onglet_match.js">
</script>

<?php 


try
{
	$bdd = new PDO('mysql:host=localhost;dbname=Projet_Handball;charset=utf8', 'amau', '291298', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
}
catch(Exception $e)
{
        die('Erreur : '.$e->getMessage());
}

$club_adverse=htmlspecialchars($_POST['club_adverse']);
$date=htmlspecialchars($_POST['date_rencontre']);
$lieu_match=htmlspecialchars($_POST['lieu_match']);
$domicile_exterieur = htmlspecialchars($_POST['Domicile']);


echo($domicile_exterieur);
echo($lieu_match);


//$selection = filter_input(INPUT_POST, 'poste', FILTER_SANITIZE_STRING);

$competition = htmlspecialchars($_POST['competition']);

$selection = htmlspecialchars($_POST['selection_joueuses_global']);


//créer une variable texte d'abord qui varie pour chaque valeur dans selection joueuses, puis l'assigner a une variable nombre du tableau?



//VERIFIER QUE LE MATCH N'A PAS DEJA ETE SAISI

/* $sql  = $bdd->prepare("SELECT COUNT(*) FROM matchs WHERE id_match = :journee");
	$sql->execute(array(
    	
        ':journee'=>$journee));

	$resu = $sql->fetch(); */

//SI ELLE N'Y EST PAS , ON INSERE LA JOUEUSE
/* if((!$resu[0] == 0)){
        echo("Cette journee est déjà enregistrée");
      }
      else{
    
	//header ('location:Onglet_Match.php');
	
	} */

	$req = $bdd->prepare('INSERT INTO matchs (Club_adverse,Date,Competition,Domicile,Lieu,Selection) VALUES(:club,:date,:competition,:domicile,:lieu,:selection)');	
	$req->execute(array(

			':club' =>$club_adverse,
			':date' => $date,
			':competition' =>$competition,
			':domicile' => $domicile_exterieur,
			':lieu' => $lieu_match,
			':selection' => $selection));

	

?>

