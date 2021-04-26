<?php
  header("Access-Control-Allow-Origin: *");
  $name = $_POST['name'];
  $tel = $_POST['tel'];
  $title = $_POST['title'];
  $text = $_POST['text'];
  mail ('skipkris7@yandex.ru', 'Тема письма', "\nИмя: $name \nТелефон: $tel \nТема: $title \n$text");
  echo json_encode(['result'=>'success']);
?>