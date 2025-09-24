<?php
// php/lead-webhook.php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/../PHPMailer-master/src/Exception.php';
require __DIR__ . '/../PHPMailer-master/src/PHPMailer.php';
require __DIR__ . '/../PHPMailer-master/src/SMTP.php';

// Read raw POST JSON
$input = file_get_contents("php://input");
$data = json_decode($input, true);

if (!$data || !isset($data['lead'])) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid payload"]);
    exit;
}

// Configure PHPMailer
$mail = new PHPMailer(true);
try {
    $mail->isSMTP();
    $mail->Host       = 'smtp.yourhost.com';   // <-- replace with your SMTP
    $mail->SMTPAuth   = true;
    $mail->Username   = 'contact@martiviconsulting.com'; // your SMTP username
    $mail->Password   = 'YOUR_SMTP_PASSWORD';            // your SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = 465;

    $mail->setFrom('contact@martiviconsulting.com', 'MARTIVI Chatbot');
    $mail->addAddress('geganoza@gmail.com', 'Giorgi Nozadze');

    $lead = $data['lead'];
    $body = "New lead captured by chatbot:\n\n";
    foreach ($lead as $key => $value) {
        $body .= ucfirst($key) . ": " . $value . "\n";
    }
    $body .= "\nRaw reply: " . ($data['rawReply'] ?? '');

    $mail->isHTML(false);
    $mail->Subject = "New Chatbot Lead";
    $mail->Body    = $body;

    $mail->send();
    echo json_encode(["success" => true]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["error" => $mail->ErrorInfo]);
}