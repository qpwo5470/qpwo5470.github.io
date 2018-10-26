<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to_email = $_POST['email'];

    $subject = '[평범한 철학자] 따끈따끈한 철학카드입니다';
    $message .= $_POST['message'];
    $imgFile = $_POST['file'];

    //read from the uploaded file & base64_encode content for the mail
    $filename = "../pdf/card.pdf";
    $handle = fopen($filename, "rb");
    $content = fread($handle, filesize($filename));
    fclose($handle);
    $encoded_content = chunk_split(base64_encode($content));

    // a random hash will be necessary to send mixed content
    $separator = md5(time());

    // carriage return type (RFC)
    $eol = "\r\n";


    // main header (multipart mandatory)
    $headers = "From: Normal Philosopher <normalphilosopher@normalphilosophy.com>" . $eol;
    $headers .= "MIME-Version: 1.0" . $eol;
    $headers .= "Content-Type: multipart/mixed; boundary=\"" . $separator . "\"" . $eol;
    $headers .= "Content-Transfer-Encoding: 7bit" . $eol;
    $headers .= "This is a MIME encoded message." . $eol;

    // message
    $body .= "--" . $separator . $eol;
    $body .= "Content-type:text/html; charset=utf-8\n";
    $body .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
    $body .= $message . $eol;
    $body .= "\nhttps://normalphilosophy.com/pdf/".$imgFile.".pdf";

//    // attachment
//    $body .= "--" . $separator . $eol;
//    $body .= "Content-Type:pdf ";
//    $body .= "Content-Type: application/pdf; name=\"Card.pdf\"" . $eol;
//    $body .= "Content-Transfer-Encoding: base64" . $eol;
//    $body .= "Content-Disposition: attachment; filename=\"Card.pdf\"" . $eol;
//    $body .= $encoded_content . $eol;
//    $body .= "--" . $separator . "--";

    if (mail($to_email, $subject, $body, $headers)) {
        http_response_code(200);
    } else {
        http_response_code(500);
    }

} else {
    http_response_code(403);
}
?>