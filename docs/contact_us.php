<?php
session_start(); // Ensure session starts before accessing messages
$successMessage = isset($_SESSION['success_message']) ? $_SESSION['success_message'] : "";
$errorMessage = isset($_SESSION['error_message']) ? $_SESSION['error_message'] : "";
unset($_SESSION['success_message']);
unset($_SESSION['error_message']);
?>


<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.5.0/remixicon.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="./styles.css" />

    <title>Contact Us - Philadels Catering & Decor</title>
</head>

<body class="bg-gray-50">
    <main>

        <!-- Header -->
        <header id="navbar" class="px-4 fixed w-full top-0 left-0 z-50 
            bg-transparent shadow-none backdrop-blur-none transition-all duration-300">
            <nav class="container flex items-center justify-between h-16 sm:h-20 mx-auto">
                <!-- Logo (always visible on large screens) -->
                <div class="flex items-center gap-3 lg:gap-3">
                    <img src="./assets/logo.png" alt="Philadel's Logo" class="h-12 sm:h-14 w-auto" />
                    <span class="text-xl sm:text-3xl font-extrabold text-white tracking-wide drop-shadow-lg playfair leading-tight">
                        <!-- Two-line title on small screens -->
                        <span class="inline sm:hidden">Philadels<br>Catering & Decor</span>
                        <!-- One-line title on larger screens -->
                        <span class="hidden sm:inline">Philadels Catering & Decor</span>
                    </span>
                </div>

                <!-- Navigation Menu -->
                <div id="nav-menu"
                    class="absolute top-0 left-[-100%] min-h-[100vh] w-full bg-indigo-900/95 backdrop-blur-md
                    flex flex-col items-center justify-center duration-500 ease-in-out lg:static lg:min-h-fit lg:w-auto lg:flex-row lg:flex 
                    lg:bg-transparent lg:backdrop-blur-none">

                    <!-- Mobile Logo (small screens only) -->
                    <div class="mb-8 flex flex-col items-center lg:hidden">
                        <img src="./assets/logo.png" alt="Philadel's Logo" class="h-20 w-auto mb-2" />
                        <span class="text-xl font-extrabold text-white tracking-wide playfair text-center leading-tight">
                            Philadels<br>Catering & Decor
                        </span>
                    </div>


                    <ul class="flex flex-col items-center gap-10 lg:flex-row text-white font-medium text-lg lg:text-white lg:drop-shadow poppins">
                        <li><a href="./index.php" class="nav-link lg:hover:text-rose-300 transition duration-300">Home</a></li>
                        <li><a href="./about.php" class="nav-link lg:hover:text-rose-300 transition duration-300">About</a></li>
                        <li><a href="./gallery.php" class="nav-link lg:hover:text-rose-300 transition duration-300">Gallery</a></li>
                        <li><a href="./contact_us.php" class="nav-link lg:hover:text-rose-300 transition duration-300">Contact Us</a></li>
                    </ul>

                    <!-- Social Icons and Footer Links (Small Screens Only) -->
                    <div class="flex flex-col items-center mt-10 text-white lg:hidden">
                        <div class="flex gap-6 text-2xl mb-4">
                            <a href="#" class="hover:text-rose-300 transition duration-300"><i class="ri-facebook-fill"></i></a>
                            <a href="#" class="hover:text-rose-300 transition duration-300"><i class="ri-instagram-fill"></i></a>
                            <a href="#" class="hover:text-rose-300 transition duration-300"><i class="ri-linkedin-fill"></i></a>
                        </div>

                        <p class="mt-3 text-xs poppins">
                            Site & Design By
                            <a href="#" class="text-rose-200 underline hover:text-rose-300 transition duration-300">Dooley Creative Co.</a>
                        </p>
                    </div>
                </div>

                <!-- Hamburger Icon -->
                <div class="text-2xl sm:text-4xl cursor-pointer z-50 lg:hidden text-white drop-shadow-lg">
                    <i class="ri-menu-line" id="hamburger"></i>
                </div>
            </nav>
        </header>


<!------------- Hero Section ------------->  
<section class="relative w-full h-64 sm:h-96 bg-cover bg-center overflow-hidden"  
         style="background-image: url('./assets/contact-us-1.jpg'); backdrop-filter: blur(5px);">  
    <div class="absolute inset-0 bg-black opacity-50"></div> <!-- Overlay for text contrast -->  
    <div class="relative z-10 flex items-center justify-center h-full">  
        <h1 class="text-4xl sm:text-5xl font-bold text-white text-center  
                   animate-fade-in-up">  
            Contact Us  
        </h1>  
    </div>

    <!-- Fade-In-Up Animation Styles -->  
    <style>  
        @keyframes fade-in-up {  
            0% { opacity: 0; transform: translateY(40px); }  
            100% { opacity: 1; transform: translateY(0); }  
        }  
        .animate-fade-in-up {  
            animation: fade-in-up 1s cubic-bezier(.4,0,.2,1) both;  
        }  
    </style>  
</section>

        <!-- Contact Info & Form Section -->
        <section class="bg-gradient-to-br from-purple-50 to-indigo-50 py-16">
          <div class="container mx-auto flex flex-col md:flex-row items-center justify-center gap-10 px-4">
            <!-- Contact Information Card -->
            <div class="w-full md:w-1/2 bg-white shadow-xl rounded-3xl p-10 m-4 border border-purple-100 flex flex-col items-center">
              <h2 class="text-3xl font-extrabold mb-6 text-purple-700 text-center">Get In Touch</h2>
              <div class="space-y-6 w-full">
                <div class="flex items-center gap-4">
                  <span class="bg-purple-100 text-purple-700 rounded-full p-3 text-2xl">
                    <i class="ri-phone-fill"></i>
                  </span>
                  <div>
                    <p class="text-gray-700 font-semibold">Phone</p>
                    <a href="tel:0242187608" class="text-gray-600 hover:text-purple-700 transition">024 218 7608</a>
                  </div>
                </div>
                <div class="flex items-center gap-4">
                  <span class="bg-purple-100 text-purple-700 rounded-full p-3 text-2xl">
                    <i class="ri-mail-fill"></i>
                  </span>
                  <div>
                    <p class="text-gray-700 font-semibold">Email</p>
                    <a href="mailto:dubebe2002@yahoo.com" class="text-gray-600 hover:text-purple-700 transition">dubebe2002@yahoo.com</a>
                  </div>
                </div>
                <div class="flex items-center gap-4">
                  <span class="bg-purple-100 text-purple-700 rounded-full p-3 text-2xl">
                    <i class="ri-map-pin-2-fill"></i>
                  </span>
                  <div>
                    <p class="text-gray-700 font-semibold">Location</p>
                    <p class="text-gray-600">Apolonia Junction Road<br>Afienya Jerusalem</p>
                  </div>
                </div>
              </div>
              <div class="flex gap-4 mt-8">
                <a href="#" class="text-purple-600 hover:text-purple-800 text-2xl"><i class="ri-facebook-circle-fill"></i></a>
                <a href="https://www.instagram.com/philadelscatering/?__pwa=1#" class="text-purple-600 hover:text-purple-800 text-2xl"><i class="ri-instagram-fill"></i></a>
                <a href="#" class="text-purple-600 hover:text-purple-800 text-2xl"><i class="ri-linkedin-fill"></i></a>
              </div>
            </div>

                <!-- Contact Form -->
                <div class="w-full md:w-1/2 bg-white shadow-lg rounded-3xl p-10 m-4 border border-purple-100">
                  <h2 class="text-3xl font-extrabold mb-6 text-purple-700 text-center">Send Us A Message</h2>
                                    
                          <!-- Display success or error messages -->
                          <?php if (!empty($successMessage)): ?>
                                <div class="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4 rounded">
                                    <p><?php echo $successMessage; ?></p>
                                </div>
                            <?php endif; ?>

                            <?php if (!empty($errorMessage)): ?>
                                <div class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4 rounded">
                                    <p><?php echo $errorMessage; ?></p>
                                </div>
                          <?php endif; ?>

                  <form id="contactForm" class="space-y-6" action="send_email.php" method="POST" autocomplete="off">
                    <input type="text" class="w-full h-12 text-gray-700 placeholder-gray-400 shadow-sm bg-gray-50 text-lg font-normal rounded-full border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 pl-5 transition" name="name" placeholder="Name" required />
                    <input type="email" class="w-full h-12 text-gray-700 placeholder-gray-400 shadow-sm bg-gray-50 text-lg font-normal rounded-full border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 pl-5 transition" name="email" placeholder="Email" required />
                    <input type="text" class="w-full h-12 text-gray-700 placeholder-gray-400 shadow-sm bg-gray-50 text-lg font-normal rounded-full border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 pl-5 transition" name="phone" placeholder="Phone" />

                    <textarea placeholder="Message" class="w-full border border-purple-200 rounded-2xl px-5 py-3 text-gray-700 text-lg font-normal leading-6 focus:ring-2 focus:ring-purple-400 bg-gray-50 transition" rows="5" required></textarea>

                    <button type="submit" class="w-full bg-gradient-to-r from-purple-600 to-indigo-500 text-white py-3 rounded-full text-lg font-semibold shadow-md hover:from-purple-700 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-purple-400 transition">
                      <i class="ri-send-plane-2-fill mr-2"></i>Send Message
                    </button>
                  </form>
                  <div class="mt-6 text-center text-gray-400 text-sm">
                    <i class="ri-lock-2-line mr-1"></i>Your information is safe with us.
                  </div>
                </div>
              </div>
            </section>
                  
          </main>

           
     <!-- Footer Section -->
    <footer class="bg-gray-800 text-white py-8">
        <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
                <h3 class="text-xl font-bold mb-4">Philadels Catering & Decor</h3>
                <p class="text-gray-400">Exquisite cakes and decor for every occasion.</p>
            </div>
            <div>
                <h3 class="text-xl font-bold mb-4">Quick Links</h3>
                <ul class="space-y-2">
                    <li><a href="./index.php" class="hover:text-pink-600 transition">Home</a></li>                  
                    <li><a href="./about.php" class="hover:text-pink-600 transition">About Us</a></li>
                    <li><a href="./contact_us.php" class="hover:text-pink-600 transition">Contact Us</a></li>
                    <li><a href="./gallery.php" class="hover:text-pink-600 transition">Gallery</a></li>
                    <li><a href="./index.html#testimonials" class="hover:text-pink-600 transition">Testimonials</a></li>
                </ul>
            </div>
            <div>
                <h3 class="text-xl font-bold mb-4">Follow Us</h3>
                <ul class="space-y-2">
                    <li><a href="#" class="hover:text-pink-600 transition">Facebook</a></li>
                    <li><a href="https://www.instagram.com/philadelscatering/?__pwa=1#" class="hover:text-pink-600 transition">Instagram</a></li>
                    <li><a href="#" class="hover:text-pink-600 transition">LinkedIn</a></li>
                </ul>
            </div>
            <div>
                <h3 class="text-xl font-bold mb-4">Stay Updated</h3>
                <div class="mb-4">
                    <input type="email" placeholder="Your email" class="p-2 w-full border rounded-md mb-2">
                    <button class="bg-pink-600 text-white px-4 py-2 rounded-full hover:bg-pink-700 transition">Subscribe</button>
                </div>
                <p class="text-gray-400 text-sm">By subscribing, you agree to our <a href="#" class="hover:text-pink-600">Privacy Policy</a> and consent to receive updates.</p>
            </div>
        </div>
        <div class="container mx-auto px-4 mt-8 text-center text-gray-400">
            <p> 2025 Philadels Catering & Decor</p>
            <p class="mt-2">
                All rights reserved. Thank you for supporting Philadels Catering & Decor!
            </p>
            <p class="mt-2">Site & Design By <a href="#" class="hover:text-pink-600">Dooley Creative Co.</a></p>
        </div>
    </footer>

  
            <script src="./main.js"></script>
            <script src="./node_modules/flowbite/dist/flowbite.min.js"></script>
            <script type="text/javascript">
                if(window.history.replaceState){
                    window.history.replaceState(null, null, window.location.href);
                }
            </script>
          </body>
</body>
</html>
