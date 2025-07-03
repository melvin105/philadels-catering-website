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
// Navbar visibility toggle on scroll
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll === 0) {
        // At the very top of the page
        navbar.classList.remove("hidden");
        navbar.classList.add("absolute");
    } else {
        // Scrolling down or not at the top
        navbar.classList.add("hidden");
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


    
