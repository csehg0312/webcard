<?php 
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

$hashedpasswd = "";

if(isset($_POST["send"])){
    $mail = new PHPMailer(true);

    $mail ->isSMTP();
    $mail ->Host = 'smtp.gmail.com';
    $mail ->SMTPAuth = true;
    $mail ->Username = 'csehgabor451@gmail.com';
    $mail ->Password = 'xxbyvftouevboeqb';
    $mail ->SMTPSecure = 'ssl';
    $mail ->Port = 465;

    $mail -> setFrom('csehgabor451@gmail.com');
    $mail -> addAddress($_POST["email"]);
    $mail->isHTML(true);

    $mail->Subject = $_POST["name"] . "-" . $_POST["subject"];
    $mail->Body = $_POST["message"];

    $mail->send();

    echo
    "
    <script>
        alert('Sent successfully!');
        document.location.href = 'send_email.php';
    </script>
    ";

}
?>