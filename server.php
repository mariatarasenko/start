<?php

$name = $_POST['user-name'];
$phone = $_POST['user-phone'];
$street = $_POST['user-street'];
$house = $_POST['user-house'];
$block = $_POST['user-block'];
$apartment = $_POST['user-apartment'];
$floor = $_POST['user-floor'];
$comment = $_POST['user-comment'];
$pay = $_POST['pay-option'];

$call = $_POST['dont-call']; //1 or null
$call = isset($call) ? 'NO' : 'YES';

$mail_message = '
<html>
    <head>
        <title>Заявка</title>
    </head>
    <body>
        <h2>Заказ</h2>
        <ul>
            <li>Имя: ' . $name . '</li>
            <li>Телефон: ' . $phone . '</li>
            <li>Улица: ' . $street . '</li>
            <li>Номер дома: ' . $house . '</li>
            <li>Номер корпуса: ' . $block . '</li>
            <li>Номер квартиры: ' . $apartment . '</li>
            <li>Этаж: ' . $floor . '</li>
            <li>Комментарии к заказу: ' . $comment . '</li>
            <li>Способ оплаты: ' . $pay . '</li>
            <li>Нужно ли перезванивать клиенту: ' . $call . '</li>
        </ul>
    </body>
</html>    
';

$headers = "From: Администратор сайта <mariaatarasenko97@yandex.ru>\r\n".
"MIME-Version: 1.0" . "\r\n" .
"Content-type: text/html; charset=UTF-8" . "\r\n";

$mail = mail('mariaatarasenko@gmail.com', 'Заказ', $mail_message, $headers);

$data = [];

if ($mail){
    $data['status'] = "ОК";
    $data['mes']="Письмо успешно отправлено";
}else {
    $data ['status'] =  "NO";
    $data ['mes'] = "На сервере произошла ошибка";
}

echo json_encode($data);

// if ($mail) {
//   echo 'done';
// }else{
//  echo 'nooup';
// }



    ?>