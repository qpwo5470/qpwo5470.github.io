<?php
$imageData = $GLOBALS['HTTP_RAW_POST_DATA'];

$filteredData = substr($imageData, strpos($imageData, ",") + 1);

$unencodedData = base64_decode($filteredData);

//echo "unencodedData".$unencodedData;

// path to admin/
$this_dir = dirname(__FILE__);

// admin's parent dir path can be represented by admin/..
$parent_dir = realpath($this_dir . '/..');


$fi = new FilesystemIterator($parent_dir . '/temp', FilesystemIterator::SKIP_DOTS);
printf("There were %d Files", iterator_count($fi));
$fileName = iterator_count($fi);
$fp = fopen($parent_dir . '/temp/temp.png', 'wb');
fwrite($fp, $unencodedData);
fclose($fp);
?>