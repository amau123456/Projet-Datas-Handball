<?php
session_start();
if (isset ($_POST['username']) && isset($_POST['password']) && isset($_POST['email'])){

 
try
{
	$bdd = new PDO('mysql:host=localhost;dbname=mes_musiques;charset=utf8', 'root', 'remi1998', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
}
catch(Exception $e)
{
        die('Erreur : '.$e->getMessage());
}


 // pour éliminer toute attaque de type injection SQL et XSS
    $username = htmlspecialchars($_POST['username']); 
    $password = htmlspecialchars($_POST['password']);
    $confirm = htmlspecialchars($_POST['repassword']);
    $email = htmlspecialchars($_POST['email']);
    $pass_hache = password_hash($password, PASSWORD_DEFAULT);

// ON VERIFIE SI LE PSEUDO EST DANS LA TABLE
	$sql  = $bdd->prepare("SELECT COUNT(*) FROM user WHERE username = :pseudo");
	$sql->execute(array(
    	':pseudo' => $username));
	$resu = $sql->fetch();

	if (!($password==$confirm)){
		header('location:register.php?erreur=2');
	}
         
  // UNE BOUCLE POUR INFORMER L'UTLISATEUR
 
      if((!$resu[0] == 0)){
        header('location:register.php?erreur=1');
        
      }

      else{
       
			$req = $bdd->prepare('INSERT INTO user (username, email, password) VALUES(:username, :email, :password)');	
			$req->execute(array(
	
					':username' => $username,
					':password' => $pass_hache,
					':email' => $email
	
					));


//$req=$bdd->exec('INSERT INTO user(id,username,email,password) VALUES('','.$username.','.$password.','.$email.')');

			$_SESSION['username'] = $username;

			header('location:principale.php');

			

		};
	}
?>
