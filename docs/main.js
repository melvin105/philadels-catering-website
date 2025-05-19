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


/* REVIEW SLIDER */
const carousel = document.getElementById('carousel');
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    const totalSlides = 3; // Total number of slides
    let currentIndex = 0;
    let autoSlideInterval;

    function updateCarousel() {
      carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function startAutoSlide() {
      autoSlideInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
      }, 5000); // Slides every 5 seconds
    }

    function stopAutoSlide() {
      clearInterval(autoSlideInterval);
    }

    prev.addEventListener('click', () => {
      stopAutoSlide();
      currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
      updateCarousel();
      startAutoSlide();
    });

    next.addEventListener('click', () => {
      stopAutoSlide();
      currentIndex = (currentIndex + 1) % totalSlides;
      updateCarousel();
      startAutoSlide();
    });

    // Start auto-sliding on page load
    startAutoSlide();


                  
                        /* CONTACT US */

     // JavaScript to handle form submission (example)
     document.getElementById('contactForm').addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent default form submission

      // Example: Show an alert with form data
      alert('Message sent successfully!');

      // Reset the form
      e.target.reset();
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
                        

    
