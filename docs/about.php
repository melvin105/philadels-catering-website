<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.5.0/remixicon.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="./styles.css" />

    <title> About Us - Philadels Catering & Deco </title>
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
        <section class="relative bg-center bg-cover h-[70vh] md:h-[80vh] lg:h-[90vh] flex items-center justify-center" style="background-image: url('./assets/deco-unsplash.jpg');">
            <div class="absolute inset-0 bg-gradient-to-br from-indigo-900/70 via-pink-700/40 to-indigo-900/60"></div>
            <div class="container mx-auto px-6 h-full flex flex-col justify-center items-center text-white text-center relative z-10">
                <h1 class="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 drop-shadow-2xl tracking-tight animate-fade-in-up">
                    Our Story
                </h1>
                <p class="text-xl md:text-3xl lg:text-4xl font-semibold max-w-3xl mx-auto drop-shadow-lg mb-8 animate-fade-in-up delay-100">
                    Bringing creativity and flavor to life, one event at a time.
                </p>
                <span class="inline-block w-24 h-1 bg-pink-400 rounded-full mb-4 animate-fade-in-up delay-200"></span>
                <a href="#about" class="inline-block mt-4 bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition duration-300 animate-fade-in-up delay-300">
                    Learn More
                </a>
            </div>
            <style>
                @keyframes fade-in-up {
                    0% { opacity: 0; transform: translateY(40px);}
                    100% { opacity: 1; transform: translateY(0);}
                }
                .animate-fade-in-up {
                    animation: fade-in-up 1s cubic-bezier(.4,0,.2,1) both;
                }
                .delay-100 { animation-delay: .15s; }
                .delay-200 { animation-delay: .3s; }
                .delay-300 { animation-delay: .45s; }
            </style>
        </section>

        <!-- About Us Content -->
        <section class="py-20 bg-gradient-to-r from-white via-indigo-50 to-pink-50">
            <div class="container mx-auto px-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
                    <!-- Image -->
                    <div class="flex justify-center">
                        <div class="relative group">
                            <img src="./assets/weeding1.jpg" alt="About Us" class="rounded-2xl shadow-2xl w-80 h-96 object-cover border-4 border-indigo-100 group-hover:scale-105 transition-transform duration-300">
                            <div class="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 px-6 py-2 rounded-xl shadow-lg text-center">
                                <span class="text-indigo-700 font-bold">Crafting Memories</span>
                            </div>
                        </div>
                    </div>
                    <!-- Text Content -->
                    <div>
                        <h2 class="text-4xl md:text-5xl font-extrabold text-indigo-700 mb-4 drop-shadow">Who We Are</h2>
                        <div class="w-16 h-1 bg-pink-400 rounded mb-6"></div>
                        <p class="text-lg text-gray-700 leading-relaxed mb-4">
                            At <span class="font-semibold text-indigo-600">Philadel's Catering & Deco</span>, every event is a canvas for creativity and joy. I blend culinary artistry with elegant decor to transform your celebrations into cherished memories.
                        </p>
                        <p class="text-lg text-gray-700 leading-relaxed mb-4">
                            With a foundation rooted in passion and years of experience, I specialize in crafting exquisite cakes, personalized menus, and breathtaking event designs. My approach is hands-on and heart-driven—ensuring each detail reflects your unique story and style.
                        </p>
                        <p class="text-lg text-gray-700 leading-relaxed mb-6">
                            Whether it’s an intimate gathering or a grand celebration, I am dedicated to exceeding your expectations with exceptional service, innovative ideas, and a genuine love for what I do. Let’s create something unforgettable together.
                        </p>
                        <a href="./contact_us.php" class="inline-block bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-semibold shadow transition">Let's Connect</a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Our Mission Section -->
        <section class="py-20 bg-gradient-to-r from-indigo-50 via-white to-indigo-100">
            <div class="container mx-auto px-6">
                <div class="max-w-4xl mx-auto text-center">
                    <h2 class="text-4xl md:text-5xl font-extrabold text-indigo-700 mb-6 drop-shadow">
                        My Mission
                    </h2>
                    <p class="mt-4 text-gray-700 text-lg md:text-xl leading-relaxed">
                        To create exceptional culinary and decor experiences that leave lasting impressions, 
                        while ensuring sustainability and community engagement in everything I do.
                    </p>
                </div>
                <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <!-- Mission Pillar 1 -->
                    <div class="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition">
                        <div class="bg-indigo-100 p-4 rounded-full mb-4">
                            <i class="ri-cake-3-line text-3xl text-indigo-600"></i>
                        </div>
                        <h3 class="text-xl font-semibold text-indigo-700 mb-2">Culinary Excellence</h3>
                        <p class="text-gray-600">
                            I strive to deliver delicious, beautifully presented dishes using the finest ingredients, blending tradition with innovation for every event.
                        </p>
                    </div>
                    <!-- Mission Pillar 2 -->
                    <div class="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition">
                        <div class="bg-indigo-100 p-4 rounded-full mb-4">
                            <i class="ri-leaf-line text-3xl text-green-500"></i>
                        </div>
                        <h3 class="text-xl font-semibold text-indigo-700 mb-2">Sustainability</h3>
                        <p class="text-gray-600">
                            I am committed to eco-friendly practices, sourcing locally whenever possible and minimizing waste to protect our environment.
                        </p>
                    </div>
                    <!-- Mission Pillar 3 -->
                    <div class="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition">
                        <div class="bg-indigo-100 p-4 rounded-full mb-4">
                            <i class="ri-community-line text-3xl text-pink-500"></i>
                        </div>
                        <h3 class="text-xl font-semibold text-indigo-700 mb-2">Community Engagement</h3>
                        <p class="text-gray-600">
                            Giving back is at the heart of my mission—supporting local causes, empowering others, and building lasting relationships within the community.
                        </p>
                    </div>
                </div>
                <div class="mt-12 max-w-2xl mx-auto text-center">
                    <blockquote class="italic text-indigo-800 text-lg border-l-4 border-pink-400 pl-4">
                        “Every event is an opportunity to create joy, foster connection, and make a positive impact—one plate, one smile, one memory at a time.”
                    </blockquote>
                </div>
            </div>
        </section>

        <!-- Team Section -->
        <section class="py-20 bg-gradient-to-r from-indigo-100 via-white to-pink-100">
            <div class="container mx-auto px-4">
                <div class="flex flex-col md:flex-row-reverse gap-12 items-center">
                    <!-- Text Content -->
                    <div class="md:w-1/2">
                        <h2 class="text-4xl md:text-5xl font-extrabold text-indigo-700 mb-6 drop-shadow">
                            Meet <span class="text-pink-500">Rebecca Afi Dunyo</span>
                        </h2>
                        <p class="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                            Rebecca Afi Dunyo is the heart behind <span class="font-semibold text-indigo-600">Philadel's Catering & Deco</span>.
                            With years of experience in culinary arts and event design, she brings creativity and elegance to every project.
                            Her passion for crafting delicious menus and stunning decor ensures every event is truly unforgettable.
                        </p>
                        <div class="flex items-center gap-4 mt-4">
                            <span class="inline-block w-12 h-1 bg-pink-400 rounded"></span>
                            <span class="text-indigo-700 font-semibold tracking-wide">Founder & Creative Director</span>
                        </div>
                    </div>
                    <!-- Image -->
                    <div class="md:w-1/2 flex justify-center">
                        <div class="relative group">
                            <img src="./assets/mum.jpg" alt="Rebecca Afi Dunyo" class="rounded-2xl shadow-2xl w-72 h-96 object-cover border-4 border-white group-hover:scale-105 transition-transform duration-300">
                            <div class="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 px-6 py-2 rounded-xl shadow-lg text-center">
                                <span class="text-indigo-700 font-bold">Rebecca Afi Dunyo</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Services Section -->
        <section class="py-20 bg-gradient-to-r from-indigo-50 via-white to-pink-50">
            <div class="container mx-auto px-6">
                <h2 class="text-4xl md:text-5xl font-extrabold text-center text-indigo-700 mb-12 drop-shadow">
                    Our Services
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <!-- Catering -->
                    <div class="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition group p-8 flex flex-col items-center">
                        <div class="relative w-40 h-40 mb-6">
                            <img src="./assets/catering.jpeg" alt="Catering" class="w-full h-full object-cover rounded-full border-4 border-pink-200 group-hover:scale-105 transition-transform duration-300 shadow-lg">
                            <span class="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-pink-500 text-white px-4 py-1 rounded-full text-xs font-semibold shadow">Catering</span>
                        </div>
                        <h3 class="text-2xl font-bold text-indigo-700 mb-2">Catering</h3>
                        <p class="text-gray-600 text-center mb-4">
                            Delicious, customized menus for every occasion—crafted with passion and the freshest ingredients.
                        </p>
                        <a href="./contact_us.php" class="inline-block bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-full font-semibold shadow transition">Book Now</a>
                    </div>
                    <!-- Decorations -->
                    <div class="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition group p-8 flex flex-col items-center">
                        <div class="relative w-40 h-40 mb-6">
                            <img src="./assets/deco-unsplash.jpg" alt="Decorations" class="w-full h-full object-cover rounded-full border-4 border-indigo-200 group-hover:scale-105 transition-transform duration-300 shadow-lg">
                            <span class="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-indigo-500 text-white px-4 py-1 rounded-full text-xs font-semibold shadow">Decor</span>
                        </div>
                        <h3 class="text-2xl font-bold text-indigo-700 mb-2">Decorations</h3>
                        <p class="text-gray-600 text-center mb-4">
                            Elegant, creative decor that transforms your event into a stunning, memorable experience.
                        </p>
                        <a href="./gallery.php" class="inline-block bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2 rounded-full font-semibold shadow transition">See Gallery</a>
                    </div>
                    <!-- Cakes -->
                    <div class="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition group p-8 flex flex-col items-center">
                        <div class="relative w-40 h-40 mb-6">
                            <img src="./assets/courtney-cook.jpg" alt="Cakes" class="w-full h-full object-cover rounded-full border-4 border-pink-200 group-hover:scale-105 transition-transform duration-300 shadow-lg">
                            <span class="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-pink-500 text-white px-4 py-1 rounded-full text-xs font-semibold shadow">Cakes</span>
                        </div>
                        <h3 class="text-2xl font-bold text-indigo-700 mb-2">Cakes</h3>
                        <p class="text-gray-600 text-center mb-4">
                            Exquisite cakes tailored to your taste and style—perfect for every celebration.
                        </p>
                        <a href="./contact_us.php" class="inline-block bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-full font-semibold shadow transition">Order Cake</a>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Innovation Section -->
        <section class="py-20 bg-gradient-to-r from-indigo-50 via-white to-pink-50">
            <div class="container mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
                <!-- Image -->
                <div class="md:w-1/2 flex justify-center">
                    <img src="./assets/cindarella1.jpeg" alt="Innovation" class="rounded-2xl shadow-2xl w-80 h-96 object-cover border-4 border-indigo-100 hover:scale-105 transition-transform duration-300">
                </div>
                <!-- Text Content -->
                <div class="md:w-1/2 md:pl-12">
                    <h2 class="text-4xl md:text-5xl font-extrabold text-indigo-700 mb-4 drop-shadow">Innovation</h2>
                    <div class="w-16 h-1 bg-pink-400 rounded mb-6"></div>
                    <p class="text-lg text-gray-700 leading-relaxed mb-4">
                        With a strong foundation in culinary arts and hospitality, I am committed to staying at the forefront of culinary trends and innovations.
                    </p>
                    <p class="text-lg text-gray-700 leading-relaxed">
                        Inspired by global design, travel, and diverse cultures, I constantly refine my offerings to ensure every dish and detail reflects the pinnacle of creativity and flavor.
                    </p>
                </div>
            </div>
        </section>

        <!-- Personalization Section -->
        <section class="py-20 bg-gradient-to-r from-pink-50 via-white to-indigo-50">
            <div class="container mx-auto flex flex-col md:flex-row-reverse items-center gap-12 px-6">
                <!-- Image -->
                <div class="md:w-1/2 flex justify-center">
                    <img src="./assets/Recent7.jpg" alt="Personalization" class="rounded-2xl shadow-2xl w-80 h-96 object-cover border-4 border-pink-100 hover:scale-105 transition-transform duration-300">
                </div>
                <!-- Text Content -->
                <div class="md:w-1/2 md:pr-12">
                    <h2 class="text-4xl md:text-5xl font-extrabold text-pink-500 mb-4 drop-shadow">Personalization</h2>
                    <div class="w-16 h-1 bg-indigo-400 rounded mb-6"></div>
                    <p class="text-lg text-gray-700 leading-relaxed mb-4">
                        Every client and every event is unique, which is why I take the time to truly understand your vision. Whether you have a clear idea of what you want or need guidance to bring your dream to life, I work closely with you to create a one-of-a-kind experience.
                    </p>
                    <p class="text-lg text-gray-700 leading-relaxed">
                        Instead of overwhelming you with endless options, I present thoughtfully crafted, personalized selections rooted in local and regional culinary traditions, ensuring your event feels both special and authentic.
                    </p>
                </div>
            </div>
        </section>

        <!-- Passion Section -->
        <section class="py-20 bg-gradient-to-r from-indigo-50 via-white to-pink-50">
            <div class="container mx-auto px-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <!-- Image -->
                    <div class="flex justify-center">
                        <img src="./assets/2years.jpeg" alt="Our Passion" class="rounded-2xl shadow-2xl w-80 h-96 object-cover border-4 border-pink-100 hover:scale-105 transition-transform duration-300">
                    </div>
                    <!-- Text Content -->
                    <div>
                        <h2 class="text-4xl md:text-5xl font-extrabold text-indigo-700 mb-4 drop-shadow">Passion</h2>
                        <div class="w-16 h-1 bg-pink-400 rounded mb-6"></div>
                        <p class="text-lg text-gray-700 leading-relaxed mb-4">
                            I’m deeply committed to every detail, no matter how small. From the presentation and quality of the food to the overall guest experience, I strive for perfection in every aspect.
                        </p>
                        <p class="text-lg text-gray-700 leading-relaxed">
                            My focus is on delivering impeccable flavors, inventive presentations, and seamless execution. My goal is to consistently exceed your expectations, ensuring your event is not only memorable but truly unforgettable.
                        </p>
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
<script src="./main.js" defer></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>
</body>
</html>
