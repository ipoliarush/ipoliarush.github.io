<?php

error_reporting(0);
ini_set('display_errors', 0);

if (isset($_POST["name"]) && isset($_POST["email"])) {

  //Заменить Email
  $to = 'ip.ua97@gmail.com';
  //Заменить Email
  $subject = 'Сообщение с сайта';

  $message = "Имя: " . decoder($_POST["name"]) . " \r\nE-mail: " . decoder($_POST["email"]);
  $headers = array(
    'From' => 'admin',
    'Reply-To' => 'admin',
    'X-Mailer' => 'PHP/' . phpversion()
  );

  mail($to, $subject, $message, $headers);
}

function decoder($mess)
{
  return urldecode(urldecode(htmlspecialchars($mess)));
}
