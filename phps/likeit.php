<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $category = $_POST['category'];
    $number = $_POST['number'];

    $servername = "localhost";
    $username = "sonson146";
    $password = "Whfdjq2018";
    $dbname = "sonson146";

// Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
    if ($conn->connect_error) {
        die('<script>console.log("Connection failed")</script>');
    }

    $rowSQLId = mysqli_query($conn, "SELECT MAX(id) AS max FROM normalP;" );
    $rowId = mysqli_fetch_array( $rowSQLId );
    $largestId = $rowId['max']+1;

    $sql = "UPDATE normalP 
SET likes = likes + 1 
WHERE category = '".$category."' AND number = '".$number."';";

    if ($conn->query($sql) === TRUE) {
        http_response_code(200);
    } else {
        http_response_code(500);
    }
    $conn->close();

} else {
    http_response_code(403);
}

?>