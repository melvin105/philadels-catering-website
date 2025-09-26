<?php
// Production Configuration for Philadel's Catering Website
// Copy this to config.php and update with your hosting details

// Email Configuration
define('SMTP_USER', 'philadelscatering@gmail.com');
define('SMTP_PASS', 'qxbf hvjt eomt ekso'); // Gmail App Password

// Database Configuration (Update these with your hosting details)
define('DB_HOST', 'localhost'); // Usually 'localhost' on shared hosting
define('DB_NAME', 'philadels_catering'); // Your database name
define('DB_USER', 'your_db_username'); // Your database username
define('DB_PASS', 'your_db_password'); // Your database password

// Site Configuration
define('SITE_URL', 'https://yourdomain.com'); // Your actual domain
define('SITE_NAME', "Philadel's Catering & Decor");

// Email Settings
define('ADMIN_EMAIL', 'philadelscatering@gmail.com');
define('FROM_NAME', "Philadel's Catering & Decor");

// Security Settings
define('ENABLE_DEBUG', false); // Set to false in production
define('LOG_ERRORS', true);

// Error Reporting (disable in production)
if (ENABLE_DEBUG) {
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
} else {
    error_reporting(0);
    ini_set('display_errors', 0);
}
?>
