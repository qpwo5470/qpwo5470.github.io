<?php
$img = $_POST['data'];
$img = str_replace('data:image/png;base64,', '', $img);
$img = str_replace(' ', '+', $img);
$fileData = base64_decode($img);
//saving
$fileName = 'cards/'.'Card'.date("Y_m_d").'.png';
file_put_contents($fileName, $fileData);
?>