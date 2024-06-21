<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user = $_POST['user'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $sub = $_POST['sub'];
    
    
    $to = "cedg.regul@gmail.com";
    
    
    $subject = "Новая заявка с сайта";
    
    
    $message = "Name: " . $user . "\n";
    $message .= "phone: " . $phone . "\n";
    $message .= "email: " . $email . "\n";
    $message .= "subject: " . $sub . "\n";
    
    // Дополнительные заголовки
    $headers = "From: cedg.regul@gmail.com" . "\r\n" .
               "Reply-To: cedg.regul@gmail.com" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();
    
    // Отправка письма
    mail($to, $subject, $message, $headers);
    
    // Перенаправление обратно на страницу формы после отправки письма
    header("Location: index.html");
    exit;
}
?>