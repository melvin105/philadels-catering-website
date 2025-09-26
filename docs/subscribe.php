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
    $_SESSION['subscription_error'] = "Database connection failed. Please try again later.";
    header("Location: " . $_SERVER['HTTP_REFERER']);
    exit();
}

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['subscribe_email'])) {
    $email = filter_var($_POST['subscribe_email'], FILTER_SANITIZE_EMAIL);
    
    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $_SESSION['subscription_error'] = "Please enter a valid email address.";
        header("Location: " . $_SERVER['HTTP_REFERER']);
        exit();
    }
    
    // Check if email already exists
    $check_stmt = $conn->prepare("SELECT id FROM email_subscriptions WHERE email = ? AND status = 'active'");
    $check_stmt->bind_param("s", $email);
    $check_stmt->execute();
    $result = $check_stmt->get_result();
    
    if ($result->num_rows > 0) {
        $_SESSION['subscription_error'] = "This email is already subscribed to our newsletter.";
        $check_stmt->close();
        $conn->close();
        header("Location: " . $_SERVER['HTTP_REFERER']);
        exit();
    }
    $check_stmt->close();
    
    // Insert new subscription
    $stmt = $conn->prepare("INSERT INTO email_subscriptions (email) VALUES (?)");
    if ($stmt) {
        $stmt->bind_param("s", $email);
        if ($stmt->execute()) {
            // Send welcome email
            $welcomeEmailSent = sendWelcomeEmail($email);
            
            if ($welcomeEmailSent) {
                $_SESSION['subscription_success'] = "Thank you for subscribing! Please check your email for a welcome message.";
            } else {
                $_SESSION['subscription_success'] = "Thank you for subscribing! You'll receive updates about our latest offerings.";
            }
        } else {
            $_SESSION['subscription_error'] = "Subscription failed. Please try again later.";
        }
        $stmt->close();
    } else {
        $_SESSION['subscription_error'] = "Database error. Please try again later.";
    }
    
    $conn->close();
    
    // Redirect back to the page
    header("Location: " . $_SERVER['HTTP_REFERER']);
    exit();
} else {
    echo "Invalid request.";
}

// Function to send welcome email
function sendWelcomeEmail($subscriberEmail) {
    try {
        $mail = new PHPMailer(true);
        
        // SMTP Configuration
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = SMTP_USER;
        $mail->Password = SMTP_PASS;
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;
        
        // Email content
        $mail->setFrom(SMTP_USER, "Philadel's Catering & Decor");
        $mail->addAddress($subscriberEmail);
        $mail->Subject = "Welcome to Philadel's Catering & Decor - Thank You for Subscribing!";
        
        // Add logo as embedded image
        $logoPath = __DIR__ . '/assets/logo.png';
        if (file_exists($logoPath)) {
            $mail->addEmbeddedImage($logoPath, 'logo', 'logo.png');
        }
        
        // Professional HTML email template
        $mail->isHTML(true);
        $mail->Body = '
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome to Philadel\'s Catering & Decor</title>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f4f4; }
                .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
                .header { text-align: center; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; margin: -20px -20px 20px -20px; }
                .header h1 { margin: 0; font-size: 28px; font-weight: bold; }
                .header p { margin: 10px 0 0 0; font-size: 16px; opacity: 0.9; }
                .content { padding: 20px 0; }
                .highlight { background-color: #f8f9fa; padding: 20px; border-left: 4px solid #667eea; margin: 20px 0; border-radius: 5px; }
                .cta-button { display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 30px; text-decoration: none; border-radius: 25px; font-weight: bold; margin: 20px 0; }
                .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 14px; }
                .social-links { margin: 20px 0; }
                .social-links a { color: #667eea; text-decoration: none; margin: 0 10px; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <div style="text-align: center; margin-bottom: 20px;">
                        <img src="cid:logo" alt="Philadel\'s Catering & Decor Logo" style="height: 80px; width: auto; margin-bottom: 15px; background-color: rgba(255,255,255,0.1); padding: 10px; border-radius: 10px;">
                        <h2 style="margin: 0; font-size: 24px; color: white; font-weight: bold;">Philadel\'s Catering & Decor</h2>
                    </div>
                    <h1>🎉 Welcome to Our Family!</h1>
                    <p>Thank you for joining our community of satisfied customers</p>
                </div>
                
                <div class="content">
                    <p>Dear Valued Customer,</p>
                    
                    <p>We\'re absolutely thrilled to welcome you to the Philadel\'s Catering & Decor family! Your subscription means the world to us, and we can\'t wait to share our latest creations, special offers, and exciting updates with you.</p>
                    
                    <div class="highlight">
                        <h3>🌟 What to Expect:</h3>
                        <ul>
                            <li><strong>Exclusive Updates:</strong> Be the first to know about our newest cake designs and catering services</li>
                            <li><strong>Special Offers:</strong> Receive exclusive discounts and promotions just for our subscribers</li>
                            <li><strong>Event Inspiration:</strong> Get inspired by our latest projects and creative ideas</li>
                            <li><strong>Behind-the-Scenes:</strong> Peek into our kitchen and see how we create magic</li>
                        </ul>
                    </div>
                    
                    <p>At Philadel\'s Catering & Decor, we specialize in creating unforgettable experiences for every occasion - from intimate birthday celebrations to grand weddings and corporate events. Our commitment to excellence and attention to detail ensures that your special moments are truly extraordinary.</p>
                    
                    <div style="text-align: center;">
                        <a href="http://localhost/Philadel\'s%20Catering%20Website/docs/index.php" class="cta-button">Visit Our Website</a>
                    </div>
                    
                    <div class="social-links" style="text-align: center;">
                        <p><strong>Follow us for daily inspiration:</strong></p>
                        <a href="https://www.instagram.com/philadelscatering/">📷 Instagram</a> |
                        <a href="http://tiktok.com/@philadelscatering">🎵 TikTok</a> |
                        <a href="https://www.linkedin.com/in/becky-dunyo-46b853186/">💼 LinkedIn</a>
                    </div>
                    
                    <p>If you have any questions or would like to discuss your upcoming event, please don\'t hesitate to reach out to us. We\'re here to make your vision come to life!</p>
                    
                    <p>Thank you again for choosing Philadel\'s Catering & Decor. We look forward to being part of your special moments.</p>
                    
                    <p>Warm regards,<br>
                    <strong>The Philadel\'s Catering & Decor Team</strong></p>
                </div>
                
                <div class="footer">
                    <p><strong>Contact Information:</strong><br>
                    📧 Email: philadelscatering@gmail.com<br>
                    📞 Phone: 024 218 7608<br>
                    📍 Location: Apolonia Junction Road, Afienya Jerusalem</p>
                    
                    <p style="font-size: 12px; color: #999;">
                        You received this email because you subscribed to our newsletter. 
                        If you no longer wish to receive these emails, you can unsubscribe at any time.
                    </p>
                </div>
            </div>
        </body>
        </html>';
        
        // Send the email
        return $mail->send();
        
    } catch (Exception $e) {
        // Log error but don\'t fail the subscription
        error_log("Welcome email failed: " . $mail->ErrorInfo);
        return false;
    }
}
?>
