<?php

//Включен лог ошибок
// error_reporting(E_ALL);
// ini_set("display_errors", 1);

//Отключен лог ошибок из-за конфликта для получения ответа в формате json
error_reporting(0);
ini_set('display_errors', 0);

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

  mail($to, $subject, $message, $headers);

  // if (mail($to, $subject, $message, $headers)) {
  //   //Отправка данных на сторону клиента
  //   header('Content-Type: application/json');
  //   echo json_encode($data);
  // }
}


//Чтобы защитить сервер от злоумышлинников
function decoder($mess)
{
  return urldecode(urldecode(htmlspecialchars($mess)));
}
