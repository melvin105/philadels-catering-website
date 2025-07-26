const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("left-[-100%]");
    navMenu.classList.toggle("left-0");
    hamburger.classList.toggle("ri-close-line");
    hamburger.classList.toggle("ri-menu-line");
});

navLink.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.add("left-[-100%]");
        hamburger.classList.add("ri-menu-line");
        hamburger.classList.remove("ri-close-line");
    });
});


        // Make header always visible while scrolling
        // Optionally, add a background on scroll for better readability
        window.addEventListener('scroll', function () {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 10) {
            navbar.classList.add('bg-indigo-900/80', 'backdrop-blur-md', 'shadow-lg');
            navbar.classList.remove('bg-transparent', 'shadow-none', 'backdrop-blur-none');
            } else {
            navbar.classList.remove('bg-indigo-900/80', 'backdrop-blur-md', 'shadow-lg');
            navbar.classList.add('bg-transparent', 'shadow-none', 'backdrop-blur-none');
            }
        });


                        // GALLERY GRID

function filterGallery(category) {
  const items = document.querySelectorAll('.gallery-item');
  items.forEach(item => {
    if (category === 'all' || item.classList.contains(category)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
           

                    // TESTIMONIAL SLIDER
const slides = document.querySelectorAll('#testimonial-slider .slide');
const prevBtn = document.getElementById('prev-slide');
const nextBtn = document.getElementById('next-slide');
const dots = document.querySelectorAll('.testimonial-dot');
let currentSlide = 0;
let autoSlideInterval;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
        slide.style.display = i === index ? 'flex' : 'none';
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle('bg-indigo-200', i === index);
        dot.classList.toggle('bg-indigo-100', i !== index);
        dot.classList.toggle('border-indigo-400', i === index);
        dot.classList.toggle('border-indigo-200', i !== index);
    });
    currentSlide = index;
}

function nextSlide() {
    showSlide((currentSlide + 1) % slides.length);
}

function prevSlideFunc() {
    showSlide((currentSlide - 1 + slides.length) % slides.length);
}

prevBtn.addEventListener('click', () => {
    prevSlideFunc();
    resetAutoSlide();
});

nextBtn.addEventListener('click', () => {
    nextSlide();
    resetAutoSlide();
});

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        showSlide(i);
        resetAutoSlide();
    });
});

function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 6000);
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

slides.forEach((slide, i) => slide.style.display = i === 0 ? 'flex' : 'none');
showSlide(0);
startAutoSlide();


    
