  <?php 
    include('includes/init.inc.php'); // include the DOCTYPE and opening tags
    include('includes/functions.inc.php'); // functions
  ?>
  <title>PHP &amp; MySQL - ITWS</title>   

  <?php include('includes/head.inc.php'); ?>

  <h1>PHP &amp; MySQL</h1>
        
  <?php include('includes/menubody.inc.php'); ?>

  <?php 

  $dbOk = false;

  @$db = new mysqli('localhost', 'root', 'root', 'iit');

  if ($db->connect_error) {
    echo '<div class="messages">Could not connect to the database. Error: ';
    echo $db->connect_errno . ' - ' . $db->connect_error . '</div>';
  } else {
    $dbOk = true;
  }

  ?>

  <h3>Movies</h3>
  <table id='movieTable'>

  <?php

  if($dbOk) {
    $query = 'select * from movies order by title';
    $result = $db->query($query);
    $numRecords = $result->num_rows;


    echo '<tr><th>Name:</th><th>Year of Release</th><th>Actors</th></tr>';
    for ($i = 0; $i < $numRecords; $i++) {
      $record = $result->fetch_assoc();

      if ($i % 2 == 0) {
          echo "\n" . '<tr id="movie-' . $record['movieid'] . '"><td>';
      } else {
          echo "\n" . '<tr class="odd" id="movie-' . $record['movieid'] . '"><td>';
      }
      
      $query = ('select * from actors where movies = ' . $record['movieid']);
      $associativeResult = $db->query($query);
      $numAssociativeR = $associativeResult->num_rows;

      echo htmlspecialchars($record['title']);
      echo '</td><td>';
      echo htmlspecialchars($record['year']);
      echo '</td><td>';
      for($j = 0; $j < $numAssociativeR; $j++){
        $record2 = $associativeResult->fetch_assoc();
        echo htmlspecialchars($record2['firstName']) . " " . htmlspecialchars($record2['lastName']);

        if($j < $numAssociativeR-1){
          echo ",";
        }
      }
      echo '</td></tr>';
    }

    $result->free();
    $db->close();
  }




  ?>
  </table>
  <?php include('includes/foot.inc.php'); 
    // footer info and closing tags
  ?>

