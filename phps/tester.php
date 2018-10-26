<?php
$servername = "localhost";
$username = "sonson146";
$password = "Whfdjq2018";
$dbname = "sonson146";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

$sql = "SELECT likes 
FROM normalP
WHERE category =0;";

$likes = mysqli_query($conn, $sql);
$likesArray = array();

while ($data = mysqli_fetch_array($likes)) {
    $likesArray[]=(int)$data['likes'];
}

echo json_encode($likesArray);

?>