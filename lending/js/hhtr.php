<?php

$result = ['success' => false];

    function console_log( $data ){
        echo '<script>';
        echo 'console.log('. json_encode( $data ) .')';
        echo '</script>';
    }

    


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

  if (mail($to, $subject, $message, $headers))
    $result = ['success' => true];
  else
    $result = ['success' => false];


  header('Content-Type: application/json');
  echo json_encode($result);
  
}

function decoder($mess)
{
  return urldecode(urldecode(htmlspecialchars($mess)));
}

?>