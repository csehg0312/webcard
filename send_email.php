<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Get form data
  $name = $_POST['name'];
  $email = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];

  // Add your email sending logic here
  // For demonstration purposes, we'll just output the data
  $to = 'csehgabor451@gmail.com';
  $headers = "From: $email\r\n";
  $headers .= "Reply-To: $email\r\n";
  $headers .= "X-Mailer: PHP/" . phpversion();
  mail($to, $subject, $message, $headers);

  // Return a response to the client (optional)
  http_response_code(200);
}