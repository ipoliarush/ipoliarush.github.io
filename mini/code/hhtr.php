<?php

error_reporting(0);
ini_set('display_errors', 0);

$result = ['success' => false];

if (isset($_POST["name"]) && isset($_POST["email"]) && isset($_POST["message"]) && !$_POST["tel"]) {


    $to = 'ip.ua97@gmail.com';
    $subject = 'Сообщение с сайта';

    $message = "Имя: ".decoder($_POST["name"])." \r\nE-mail: ".decoder($_POST["email"])." \r\nСообщение: ".decoder($_POST["message"]);
    $headers = array(
        'From' => 'admin@ipoliarush.pp.ua',
        'Reply-To' => 'admin@ipoliarush.pp.ua',
        'X-Mailer' => 'PHP/' . phpversion()
    );

    if (mail($to, $subject, $message, $headers))
      $result = ['success' => true];
    else
      $result = ['success' => false];


    header('Content-Type: application/json');
    echo json_encode($result);
}

function decoder($mess) {
  return urldecode(urldecode(htmlspecialchars($mess)));
}

?>
