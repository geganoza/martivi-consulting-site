<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/../PHPMailer-master/src/Exception.php';
require __DIR__ . '/../PHPMailer-master/src/PHPMailer.php';
require __DIR__ . '/../PHPMailer-master/src/SMTP.php';

// ✅ Load secrets (same as your form)
require $_SERVER['DOCUMENT_ROOT'] . '/../secure/mail_secrets.php';

// Read JSON from chatbot
$input = file_get_contents("php://input");
$data = json_decode($input, true);

if (!$data || !isset($data['lead'])) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid payload"]);
    exit();
}

$lead = $data['lead'] ?? [];
$rawReply = $data['rawReply'] ?? '';

$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host       = SMTP_HOST;
    $mail->SMTPAuth   = true;
    $mail->Username   = SMTP_USER;
    $mail->Password   = SMTP_PASS;
    $mail->SMTPSecure = SMTP_SECURE;
    $mail->Port       = SMTP_PORT;

    // Recipients
    $mail->setFrom(SMTP_USER, 'Chatbot Lead');
    $mail->addAddress("leads@martiviconsulting.com", "Martivi Leads");

    // Content
    $body = "🤖 New chatbot lead:\n\n";
    foreach ($lead as $key => $value) {
        if ($value) {
            $body .= ucfirst($key) . ": " . $value . "\n";
        }
    }
    $body .= "\n---\nRaw Bot Reply:\n" . $rawReply;

    $mail->isHTML(false);       // keep plain text
$mail->CharSet = 'UTF-8';   // ✅ fix encoding
$mail->Encoding = 'base64'; // ✅ ensures proper transport
$mail->Subject = "New Chatbot Lead";
$mail->Body    = $body;

    $mail->send();
    echo json_encode(["success" => true]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["error" => $mail->ErrorInfo]);
}