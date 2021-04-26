<?php
  header("Access-Control-Allow-Origin: *");
  $name = $_POST['name'];
  $email = $_POST['email'];
  $tel = $_POST['tel'];
  $car = $_POST['car'];
  $attendant = $_POST['attendant'];
  $photo = $_POST['photo'];
  $ambassador = $_POST['ambassador'];
  $foster = $_POST['foster'];
  $other = $_POST['other'];
  $comment = $_POST['comment'];
  mail ('skipkris7@yandex.ru', 'Тема письма', "\nИмя: $name \nEmail: $email \nТелефон: $tel \nАвтоволонтёр: $car \nСопровождающий: $attendant  \nФотограф:  $photo \nАмбассадор: $ambassador \nПередержка: $foster  \nДругое: $other  \nКомментарий: $comment");
  echo json_encode(['result'=>'success']);
?>