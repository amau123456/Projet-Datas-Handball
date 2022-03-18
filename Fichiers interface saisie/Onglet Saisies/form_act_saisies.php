<script src="onglet_saisies.js">
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

$id_match=null;
$id_joueuse=null;
$nom_joueuse=null;
$periode=htmlspecialchars($_POST['periode']);

$tir=htmlspecialchars($_POST['tir']);
$sept_m=htmlspecialchars($_POST['sept_m']);
$but=htmlspecialchars($_POST['but']);

$zone_cage=htmlspecialchars($_POST['zone_cage']);
$zone_terrain=htmlspecialchars($_POST['zone_terrain']);

$ataque=htmlspecialchars($_POST['attaque']);
$attaque_Placee=htmlspecialchars($_POST['attaque_Placee']);
$carton_jaune=htmlspecialchars($_POST['carton_jaune']);
$carton_rouge=htmlspecialchars($_POST['carton_rouge']);
$deux_min=htmlspecialchars($_POST['deux_min']);

$faute_zone=htmlspecialchars($_POST['faute_zone']);
$marche=htmlspecialchars($_POST['marche']);
$reprise_drible=htmlspecialchars($_POST['reprise_drible']);
$balle_perdue=htmlspecialchars($_POST['balle_perdue']);
$mauvaise_relance=htmlspecialchars($_POST['mauvaise_relance']);
$passage_en_force=htmlspecialchars($_POST['passage_en_force']);
$faute_subie=htmlspecialchars($_POST['faute_subie']);
$tir_contre=htmlspecialchars($_POST['tir_contre']);
$deux_min_provoque=htmlspecialchars($_POST['deux_min_provoque']);
$sept_m=htmlspecialchars($_POST['sept_m']);
$duel_gagne=htmlspecialchars($_POST['duel_gagne']);
$duel_perdu=htmlspecialchars($_POST['duel_perdu']);
$relance=htmlspecialchars($_POST['relance']);
                    
$balle_recuperee=htmlspecialchars($_POST['balle_recuperee']);
$interception=htmlspecialchars($_POST['interception']);

$passe_decisive=null;

echo($type_attaque);

$req = $bdd->prepare('INSERT INTO actions (id_match,id_joueuse,nom_joueuse,temps,tir,7m,but,zone_cage,zone_terrain,attaque,attaque_placee,faute_zone,marcher,reprise_dribble,mauvaise_relance,passage_en_force,ballon_perdu,ballon_recupere,faute_9m,tir_contre,2min_provoque,faute_7m,duel_gagne,duel_perdu,interception,carton_rouge,carton_jaune,2min_concede,relance,passe_decisive)
 VALUES(:id_match,id_joueuse,nom_joueuse,:tir,:sept_m,:but,:zone_cage,:zone_terrain,,:ataque,:attaque_Placee,:carton_jaune,:carton_rouge,:deux_min,:faute_zone,:marche,:reprise_drible,:balle_perdue,:mauvaise_relance,:passage_en_force,:faute_subie,:tir_contre,:deux_min_provoque,:sept_m,:duel_gagne,:duel_perdu,:balle_recuperee,:interception,:passe_decisive)');	
	$req->execute(array(

			':type_attaque' =>$type_attaque,

            )
        
        
        );
			

?>


<?php
     $selected_option=$_POST['option_value'];

     //Do what you need with this value, then echo what you want to be returned.

     echo "you have selected the option with value=$selected_option";
?>