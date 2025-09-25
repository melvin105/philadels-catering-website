<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/../vendor/autoload.php';

// Load environment variables
require __DIR__ . '/config.php';

// Start session
session_start();

// Database connection
$servername = "localhost";
$username = "root"; 
$password = ""; 
$dbname = "philadels_catering";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    $_SESSION['error_message'] = "Database connection failed: " . $conn->connect_error;
    header("Location: contact_us.php");
    exit();
}

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(strip_tags(trim($_POST["name"])));
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $phone = htmlspecialchars(strip_tags(trim($_POST["phone"])));
    $message = htmlspecialchars(strip_tags(trim($_POST["message"])));

    // Insert data into database
    $stmt = $conn->prepare("INSERT INTO contact_us (name, email, phone, message) VALUES (?, ?, ?, ?)");
    if ($stmt) {
        $stmt->bind_param("ssss", $name, $email, $phone, $message);
        if (!$stmt->execute()) {
            $_SESSION['error_message'] = "Database error: " . $conn->error;
        }
        $stmt->close();
    } else {
        $_SESSION['error_message'] = "Database error: " . $conn->error;
        header("Location: contact_us.php");
        exit();
    }

    // Close DB connection
    $conn->close();

    // Send email with PHPMailer
    $mail = new PHPMailer(true);
    try {
        $mail->SMTPDebug = 2;  // Show detailed debug output
        $mail->Debugoutput = 'html';
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = SMTP_USER; // From config.php
        $mail->Password = SMTP_PASS; // From config.php
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;
    
        $mail->setFrom(SMTP_USER, "Philadel's Catering");
        $mail->addAddress('philadelscatering@gmail.com');
        $mail->Subject = "New Contact Form Submission";
        $mail->Body = "Name: $name\nEmail: $email\nPhone: $phone\nMessage:\n$message";

        if ($mail->send()) {
            $_SESSION['success_message'] = "Message sent successfully!";
        } else {
            $_SESSION['error_message'] = "Email sending failed.";
        }
    } catch (Exception $e) {
        $_SESSION['error_message'] = "Mailer Error: " . $mail->ErrorInfo;
    }

    // Redirect to contact page
    header("Location: contact_us.php");
    exit();
} else {
    echo "Invalid request.";
}
?>
