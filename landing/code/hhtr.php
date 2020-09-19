<?php

//Включен лог ошибок
error_reporting(E_ALL);
ini_set("display_errors", 1);

$data = ['success' => 'ok'];

if (isset($_POST["name"]) && isset($_POST["email"])) {

  $to = 'ip.ua97@gmail.com';
  $subject = 'Сообщение с сайта';
  $message = "Имя: " . decoder($_POST["name"]) . " \r\nE-mail: " . decoder($_POST["email"]);
  $headers = array(
    'From' => 'admin',
    'Reply-To' => 'admin',
    'X-Mailer' => 'PHP/' . phpversion()
  );

  if (mail($to, $subject, $message, $headers)) {
    header('Content-Type: application/json');
    echo json_encode($data);
  }
}


//Чтобы защитить сервер от злоумышлинников
function decoder($mess)
{
  return urldecode(urldecode(htmlspecialchars($mess)));
}
