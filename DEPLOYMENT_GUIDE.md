# Philadel's Catering Website - Deployment Guide

## 🎯 Project Overview
- **Technology:** PHP 7.4+, MySQL, HTML5, CSS3, JavaScript
- **Features:** Contact form, Email subscriptions, Image gallery, Responsive design
- **Database:** MySQL with 2 tables (contact_us, email_subscriptions)

## 📁 Files to Upload
```
docs/
├── index.php (Main homepage)
├── about.php
├── contact_us.php
├── gallery.php
├── thank_you.php
├── send_email.php (Contact form handler)
├── subscribe.php (Email subscription handler)
├── config.php (Email configuration)
├── main.js (JavaScript functionality)
├── styles.css (Custom styles)
├── assets/ (All images and logos)
└── vendor/ (PHPMailer library)
```

## 🗄️ Database Setup
### Required Tables:

**1. contact_us table:**
```sql
CREATE TABLE `contact_us` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `message` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```

**2. email_subscriptions table:**
```sql
CREATE TABLE `email_subscriptions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `subscribed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` enum('active','unsubscribed') NOT NULL DEFAULT 'active',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```

## ⚙️ Configuration Updates Needed
1. Update database credentials in `send_email.php` and `subscribe.php`
2. Update email settings in `config.php`
3. Update any localhost URLs to your domain

## 🔧 Hosting Requirements
- **PHP:** 7.4 or higher
- **MySQL:** 5.7 or higher
- **Extensions:** mysqli, openssl, curl
- **Storage:** At least 100MB
- **Email:** SMTP support (Gmail works)

## 📧 Email Configuration
- **SMTP Server:** smtp.gmail.com
- **Port:** 587
- **Security:** STARTTLS
- **Account:** philadelscatering@gmail.com
- **App Password:** qxbf hvjt eomt ekso

## 🌐 Domain Setup
- Point your domain to the hosting provider
- Upload files to public_html or www folder
- Set index.php as the default page
- Configure SSL certificate (Let's Encrypt is free)

## ✅ Testing Checklist
- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Contact form submits successfully
- [ ] Email subscription works
- [ ] Welcome emails are sent
- [ ] All images display properly
- [ ] Mobile responsiveness works
- [ ] Social media links work
- [ ] Database connections successful

## 🚨 Common Issues & Solutions
1. **Database Connection Failed:** Check credentials and host
2. **Email Not Sending:** Verify SMTP settings and app password
3. **Images Not Loading:** Check file paths and permissions
4. **404 Errors:** Ensure .htaccess is configured properly
