<?php
$category = $_POST['category'];

$servername = "localhost";
$username = "sonson146";
$password = "Whfdjq2018";
$dbname = "sonson146";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

$sql = "SELECT likes 
FROM normalP
WHERE category ='".$category."';";

$likes = mysqli_query($conn, $sql);
$likesArray = array();
while ($data = mysqli_fetch_array($likes)) {
    echo (int)$data['likes'];
}

?>