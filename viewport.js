document.addEventListener('DOMContentLoaded', function () {
    const skillBars = document.querySelectorAll('.skill-bar-foreground');
    
    // Function to check if an element is in the viewport
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
    }
    
    // Function to trigger animation when the element is in view
    function checkScroll() {
      skillBars.forEach(bar => {
        if (isInViewport(bar) && !bar.classList.contains('animated')) {
          bar.classList.add('animated'); // Add class to trigger animation when in view
        } else if (!isInViewport(bar) && bar.classList.contains('animated')) {
          bar.classList.remove('animated'); // Remove class to reset animation when out of view
        }
      });
    }
  
    // Listen to scroll events
    window.addEventListener('scroll', checkScroll);
    
    // Initial check in case the element is already in view
    checkScroll();
  });
  


  document.addEventListener("DOMContentLoaded", () => {
    const icons = document.querySelectorAll(".contact .social-links .fab");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate"); // Add 'animate' class when the icon enters the viewport
        } else {
          entry.target.classList.remove("animate"); // Remove 'animate' class when the icon goes out of view
        }
      });
    }, { threshold: 0.5 }); // Trigger when 50% of the icon is visible
  
    icons.forEach((icon) => {
      observer.observe(icon); // Start observing each icon
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const heroImage = document.querySelector(".hero-image");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate"); // Add 'animate' class when the image enters the viewport
        } else {
          entry.target.classList.remove("animate"); // Remove 'animate' class when the image goes out of view
        }
      });
    }, { threshold: 0.5 }); // Trigger when 50% of the image is visible
  
    observer.observe(heroImage); // Start observing the hero image
  });