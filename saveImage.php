<?php
 $imageData=$GLOBALS['HTTP_RAW_POST_DATA'];

    $filteredData=substr($imageData, strpos($imageData, ",")+1);

    $unencodedData= base64_decode($filteredData);

    //echo "unencodedData".$unencodedData;
$fi = new FilesystemIterator('cards/', FilesystemIterator::SKIP_DOTS);
printf("There were %d Files", iterator_count($fi));
$fileName = iterator_count($fi);
    $fp = fopen( 'cards/'.$fileName.'card.png', 'wb' );
    fwrite( $fp, $unencodedData);
    fclose( $fp );
?>