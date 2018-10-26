<?php
if(!empty($_POST['data'])){
    $data = base64_decode($_POST['data']);
    $imgFile = $_POST['file'];
    $directory = "../pdf/".$imgFile.".pdf";
// print_r($data);
    echo unlink( $directory);
    file_put_contents( $directory, $data);
    echo "PDF Saved";
} else {
    echo "No Data Sent";
}
exit();
?>