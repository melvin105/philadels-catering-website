<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.5.0/remixicon.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="./styles.css" />

    <title>Gallery Us - Philadels Catering & Decor</title>
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



        <!-- Hero Section -->
        <section style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./assets/allen-rad.jpg');" 
                class="bg-cover bg-center bg-no-repeat h-[80vh] flex items-center justify-center text-white relative overflow-hidden">
            
            <div class="container mx-auto px-8 py-32 relative z-10">
                <div class="text-center mb-8">
                    <h1 class="text-5xl sm:text-6xl font-extrabold text-white drop-shadow-2xl tracking-tight mb-4 animate-fade-in-up">
                        Our Stunning Creations
                    </h1>
                    <p class="text-xl sm:text-2xl font-medium text-indigo-100 max-w-2xl mx-auto drop-shadow-md animate-fade-in-up delay-100">
                        Discover our exquisite cakes, delightful pastries, and elegant decorations—crafted to make every celebration truly unforgettable.
                    </p>
                    <a href="#gallery" class="mt-6 inline-block px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 animate-fade-in-up delay-200">
                        Explore Now
                    </a>
                </div>
            </div>

            <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

            <!-- Fade-in-up Animation -->
            <style>
                @keyframes fade-in-up {
                    0% { opacity: 0; transform: translateY(40px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 1s cubic-bezier(.4, 0, .2, 1) both;
                }
                .delay-100 {
                    animation-delay: 0.15s;
                }
                .delay-200 {
                    animation-delay: 0.3s;
                }
            </style>
        </section>

     
        <!-- Filter Buttons -->
        <div class="flex justify-center space-x-4 mb-6 py-4">
            <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onclick="filterGallery('all')">All</button>
            <button class="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300" onclick="filterGallery('cakes')">Cakes</button>
            <button class="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300" onclick="filterGallery('pastries')">Pastries</button>
            <button class="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300" onclick="filterGallery('decor')">Decorations</button>
        </div>

         <!-- Gallery Grid -->
        <section>
            <div id="gallery" class="container mx-auto px-4">
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                    <!-- Cakes -->
                    <div class="gallery-item cakes">
                        <img src="./assets/Recent7.jpg" alt="Cake" class="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 w-full h-64 object-cover">
                    </div>
                    <div class="gallery-item cakes">
                        <img src="./assets/cindarella1.jpeg" alt="Cake" class="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 w-full h-64 object-cover">
                    </div>
                    <div class="gallery-item cakes">
                        <img src="./assets/cindarella2.jpeg" alt="Cake" class="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 w-full h-64 object-cover">
                    </div>
                    <div class="gallery-item cakes">
                        <img src="./assets/cindarella3.jpeg" alt="Cake" class="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 w-full h-64 object-cover">
                    </div>
                    <div class="gallery-item cakes">
                        <img src="./assets/hbday1.jpeg" alt="Cake" class="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 w-full h-64 object-cover">
                    </div>
                    <div class="gallery-item cakes">
                        <img src="./assets/weeding1.jpg" alt="Cake" class="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 w-full h-64 object-cover">
                    </div>
                    <div class="gallery-item cakes">
                        <img src="./assets/cindarella4.jpg" alt="Cake" class="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 w-full h-64 object-cover">
                    </div>
                    <div class="gallery-item cakes">
                        <img src="./assets/airplane.jpg" alt="Cake" class="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 w-full h-64 object-cover">
                    </div>
                    <div class="gallery-item cakes">
                        <img src="./assets/fruit-cake.jpg" alt="Cake" class="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 w-full h-64 object-cover">
                    </div>
                    <div class="gallery-item cakes">
                        <img src="./assets/bday2.jpg" alt="Cake" class="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 w-full h-64 object-cover">
                    </div>
                    <!-- Pastries -->
                    <div class="gallery-item pastries">
                        <img src="./assets/cindarella5.jpg" alt="Pastry" class="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 w-full h-64 object-cover">
                    </div>
                    <div class="gallery-item pastries">
                        <img src="./assets/alter.JPG" alt="Pastry" class="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 w-full h-64 object-cover">
                    </div>
                    <div class="gallery-item pastries">
                        <img src="./assets/weeding2.jpg" alt="Pastry" class="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 w-full h-64 object-cover">
                    </div>
                    <div class="gallery-item pastries">
                        <img src="./assets/football.jpg" alt="Pastry" class="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 w-full h-64 object-cover">
                    </div>
                    <div class="gallery-item pastries">
                        <img src="./assets/2years.jpeg" alt="Pastry" class="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 w-full h-64 object-cover">
                    </div>
                    <div class="gallery-item pastries">
                        <img src="./assets/Recent1.jpg" alt="Pastry" class="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 w-full h-64 object-cover">
                    </div>
                    <!-- Decor -->
                    <div class="gallery-item decor">
                        <img src="./assets/guitar.jpg" alt="Decor" class="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 w-full h-64 object-cover">
                    </div>
                    <div class="gallery-item decor">
                        <img src="./assets/graduation.jpg" alt="Decor" class="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 w-full h-64 object-cover">
                    </div>
                    <div class="gallery-item decor">
                        <img src="./assets/weeding3.jpg" alt="Decor" class="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 w-full h-64 object-cover">
                    </div>
                    <div class="gallery-item decor">
                        <img src="./assets/graduation2.JPG" alt="Decor" class="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 w-full h-64 object-cover">
                    </div>
                    <div class="gallery-item decor">
                        <img src="./assets/green-cake.jpg" alt="Decor" class="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 w-full h-64 object-cover">
                    </div>
                    <div class="gallery-item decor">
                        <img src="./assets/bible-cake.jpg" alt="Decor" class="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 w-full h-64 object-cover">
                    </div>
                    <div class="gallery-item decor">
                        <img src="./assets/graduation3.jpg" alt="Decor" class="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 w-full h-64 object-cover">
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
            <p class="mt-2">Site & Design By <a href="https://melvin105.github.io/Portfolio-site/" class="hover:text-pink-600">Melvin Kwaku Yawlui</a></p>
        </div>
    </footer>
                  
           <script src="./main.js"></script>
           <script src="./node_modules/flowbite/dist/flowbite.min.js"></script>      
</body>
</html>     
