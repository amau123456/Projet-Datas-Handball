<html>
<!--<link rel="stylesheet" href="css/bootstrap.css" />-->

<?php
            
            
            $compteur= 0;
            $host = 'localhost';
            $dbname = 'hbpc';
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
            $req = $pdo ->prepare ("SELECT Numero,Nom,Prenom FROM joueuses ORDER BY Numero");
            $req->execute()

            
        ?>

<!--
		<table id="toptendance">
           		<thead>
                <tr>-->
                    <!--<th class=tr1><i style='font-size:24px' class='fas'>&#xf5a2;</i></th>-->
                    <!--<th>Nom</th>
                    <th>Prenom</th>
                    <th>Numero</th>
                </tr>
                </thead>
                <tbody>
                    <?php while($row = $req->fetch(PDO::FETCH_ASSOC)) : ?>
                <tr class=tr1>-->
                    <!--<td><?php $compteur++;echo ("$compteur")?> </td>-->
                    <!--
                    <td><?php echo htmlspecialchars($row['Nom']); ?></td>
                    <td><?php echo htmlspecialchars($row['Prenom']); ?></td>
                    <td><?php echo htmlspecialchars($row['Numero']); ?></td>
                    
                </tr>
                <?php endwhile; ?>
                </tbody>
            </table>

        <select multiple class=form-control>
 			<option value=un>Un</option>
 			<option value=deux>Deux</option>
 			<option value=trois>Trois</option>
 			<option value=trois>Trois</option>
 			<option value=trois>Trois</option>
 			<option value=trois>Trois</option>
		</select>
<p>





</p>

<script>
$(".chosen-select").chosen({
  no_results_text: "Oops, nothing found!"
})
</script>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script src="https://cdn.rawgit.com/harvesthq/chosen/gh-pages/chosen.jquery.min.js"></script>
<link href="https://cdn.rawgit.com/harvesthq/chosen/gh-pages/chosen.min.css" rel="stylesheet"/>

<form action="http://httpbin.org/post" method="post">
  <select data-placeholder="Begin typing a name to filter..." multiple class="chosen-select" name="test">
    <option value=""></option>
    <option>American Black Bear</option>
    <option>Asiatic Black Bear</option>
    <option>Brown Bear</option>
    <option>Giant Panda</option>
    <option>Sloth Bear</option>
    <option>Sun Bear</option>
    <option>Polar Bear</option>
    <option>Spectacled Bear</option>
  </select>
  <input type="submit">
</form>
<p>



</p>-->

<script>
	var checkList = document.getElementById('list1');
checkList.getElementsByClassName('anchor')[0].onclick = function(evt) {
  if (checkList.classList.contains('visible'))
    checkList.classList.remove('visible');
  else
    checkList.classList.add('visible');
}
</script>

<style>/*
	.dropdown-check-list {
  display: inline-block;
}

.dropdown-check-list .anchor {
  position: relative;
  cursor: pointer;
  display: inline-block;
  padding: 5px 50px 5px 10px;
  border: 1px solid #ccc;
}

.dropdown-check-list .anchor:after {
  position: absolute;
  content: "";
  border-left: 2px solid black;
  border-top: 2px solid black;
  padding: 5px;
  right: 10px;
  top: 20%;
  -moz-transform: rotate(-135deg);
  -ms-transform: rotate(-135deg);
  -o-transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
  transform: rotate(-135deg);
}

.dropdown-check-list .anchor:active:after {
  right: 8px;
  top: 21%;
}

.dropdown-check-list ul.items {
  padding: 2px;
  display: none;
  margin: 0;
  border: 1px solid #ccc;
  border-top: none;
}

.dropdown-check-list ul.items li {
  list-style: none;
}

.dropdown-check-list.visible .anchor {
  color: #0094ff;
}

.dropdown-check-list.visible .items {
  display: block;
}
</style>

<div id="list1" class="dropdown-check-list" tabindex="100">
  <span class="anchor">Select Fruits</span>
  <ul class="items">
    <li><input type="checkbox" />Apple </li>
    <li><input type="checkbox" />Orange</li>
    <li><input type="checkbox" />Grapes </li>
    <li><input type="checkbox" />Berry </li>
    <li><input type="checkbox" />Mango </li>
    <li><input type="checkbox" />Banana </li>
    <li><input type="checkbox" />Tomato</li>
  </ul>
</div>
   
   <?php while($row = $req->fetch(PDO::FETCH_ASSOC)) : ?>
                <u1 class="joueuse">
                    <li><?php $compteur++;echo ("$compteur")?> </li>
                    
                    <li><?php echo htmlspecialchars($row['Nom']); ?></li>
                    <li><?php echo htmlspecialchars($row['Prenom']); ?></li>
                    <li><?php echo htmlspecialchars($row['Numero']); ?></li>
                    
                </u1>
 	<?php endwhile; ?>