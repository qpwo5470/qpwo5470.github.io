<?php
 $imageData=$GLOBALS['HTTP_RAW_POST_DATA'];

    $filteredData=substr($imageData, strpos($imageData, ",")+1);

    $unencodedData= base64_decode($filteredData);

    //echo "unencodedData".$unencodedData;

    // path to admin/
    $this_dir = dirname(__FILE__);

    // admin's parent dir path can be represented by admin/..
    $parent_dir = realpath($this_dir . '/..');


$fi = new FilesystemIterator($parent_dir.'/cards/mania/', FilesystemIterator::SKIP_DOTS);
printf("There were %d Files", iterator_count($fi));
$fileName = iterator_count($fi);
    $fp = fopen( $parent_dir.'/cards/mania/'.$fileName.'.png', 'wb' );
    fwrite( $fp, $unencodedData);
    fclose( $fp );

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

$sql = "INSERT INTO normalP (id, category, number, likes)
VALUES ('".$largestId."', 6, '".$fileName."', 0)";

if ($conn->query($sql) === TRUE) {
    echo '<script>console.log("New record created successfully")</script>';
} else {
    echo '<script>console.log("Error sending")</script>';
}

$conn->close();

?>