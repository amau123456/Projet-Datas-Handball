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

$id_match=htmlspecialchars(intval($_POST['id_match']));

$id_joueuse=htmlspecialchars(intval($_POST['id_joueuse']));
$nom_joueuse=htmlspecialchars($_POST['nom_joueuse']);
$periode=htmlspecialchars($_POST['periode']);

$tir=htmlspecialchars(intval($_POST['tir']));
$sept_m=htmlspecialchars(intval($_POST['sept_m']));
$but=htmlspecialchars(intval($_POST['but']));

$zone_cage=htmlspecialchars(intval($_POST['zone_cage']));
$zone_terrain=htmlspecialchars(intval($_POST['zone_terrain']));

$attaque=htmlspecialchars(intval($_POST['attaque']));
$attaque_Placee=htmlspecialchars(intval($_POST['attaque_Placee']));

$carton_jaune=htmlspecialchars(intval($_POST['carton_jaune']));
$carton_rouge=htmlspecialchars(intval($_POST['carton_rouge']));
$deux_min=htmlspecialchars(intval($_POST['deux_min']));

$faute_zone=htmlspecialchars(intval($_POST['faute_zone']));
$marcher=htmlspecialchars(intval($_POST['marcher']));
$reprise_de_drible=htmlspecialchars(intval($_POST['reprise_de_drible']));


$mauvaise_relance=htmlspecialchars(intval($_POST['mauvaise_relance']));
$passage_en_force=htmlspecialchars(intval($_POST['passage_en_force']));

$balle_perdue=htmlspecialchars(intval($_POST['balle_perdue']));
$balle_recuperee=htmlspecialchars(intval($_POST['balle_recuperee']));
$faute_subie=htmlspecialchars(intval($_POST["faute_subie"]));

$tir_contre=htmlspecialchars(intval($_POST['tir_contre']));
$deux_min_provoque=htmlspecialchars(intval($_POST['deux_min_provoque']));
$faute_7m=htmlspecialchars(intval($_POST['faute_7m']));


$duel_gagne=htmlspecialchars(intval($_POST['duel_gagne']));
$duel_perdu=htmlspecialchars(intval($_POST['duel_perdu']));

$relance=htmlspecialchars(intval($_POST['relance']));

$interception=htmlspecialchars(intval($_POST['interception']));

// $passe_decisive=null;

$req = $bdd->prepare('INSERT INTO actions (id_match,id_joueuse,nom_joueuse,temps,tir,7m,but,zone_cage,zone_terrain,attaque,attaque_placee,faute_zone,marcher,reprise_dribble,mauvaise_relance,passage_en_force,ballon_perdu,ballon_recupere,faute_9m,tir_contre,2min_provoque,faute_7m,duel_gagne,duel_perdu,interception,carton_rouge,carton_jaune,2min_concede,relance) VALUES(:id_match,:id_joueuse,:nom_joueuse,:temps,:tir,:7m,:but,:zone_cage,:zone_terrain,:ataque,:attaque_Placee,:faute_zone,:marcher,:reprise_drible,:mauvaise_relance,:passage_en_force,:balle_perdue,:balle_recuperee,:faute_subie,:tir_contre,:deux_min_provoque,:faute_sept_m,:duel_gagne,:duel_perdu,:interception,:carton_rouge,:carton_jaune,:deux_min,:relance)');	
	$req->execute(array(

            ':id_match' => $id_match,
            ':id_joueuse' => $id_joueuse,
            ':nom_joueuse' =>$nom_joueuse,
            ':temps' => $periode,
            ':tir' => $tir,
            ':7m' => $sept_m,
            ':but' => $but,
            ':zone_cage' => $zone_cage,
            ':zone_terrain' => $zone_terrain,

            ':ataque' => $attaque,
            ':attaque_Placee' => $attaque_Placee,

            ':carton_jaune' => $carton_jaune,
            ':carton_rouge' => $carton_rouge,
            ':deux_min' => $deux_min,


            ':faute_zone' => $faute_zone,
            ':marcher' => $marcher,
            ':reprise_drible' => $reprise_de_drible,
            ':mauvaise_relance' => $mauvaise_relance,
            ':passage_en_force' => $passage_en_force,
            ':balle_perdue' => $balle_perdue,
            ':balle_recuperee' => $balle_recuperee,
            ':faute_subie' => $faute_subie,

            ':tir_contre' => $tir_contre,
            ':deux_min_provoque' => $deux_min_provoque,
            ':faute_sept_m' => $faute_7m,

            ':duel_gagne' => $duel_gagne,
            ':duel_perdu' => $duel_perdu,
            
            ':interception' => $interception, 

            ':relance' => $relance ));
            
            // ':passe_decisive' => $passe_decisive;

?>


<!-- <?php
     $selected_option=$_POST['option_value'];

     //Do what you need with this value, then echo what you want to be returned.

     echo "you have selected the option with value=$selected_option";
?> -->