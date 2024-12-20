const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel img');  // Select all images in the carousel
const titleContainer = document.getElementById('carousel-title');
const descriptionContainer = document.getElementById('carousel-description');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let currentIndex = 0;

function updateCarousel() {
    // Update title and description based on the current image
    const currentImage = images[currentIndex];
    titleContainer.textContent = currentImage.getAttribute('data-title');
    descriptionContainer.textContent = currentImage.getAttribute('data-description');

    // Add 'active' class to the current image, remove from others
    images.forEach((image, index) => {
        image.classList.remove('active');
        if (index === currentIndex) {
            image.classList.add('active');
        }
    });

    // Center the active image in the view by adjusting the position of the carousel
    const activeImage = images[currentIndex];
    const offsetFromCenter = activeImage.offsetLeft - (carousel.offsetWidth - activeImage.offsetWidth) / 2;
    carousel.style.transform = `translateX(${-offsetFromCenter}px)`;
}

leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateCarousel();
});

rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
});

// Update carousel when the window is resized
window.addEventListener('resize', updateCarousel);

updateCarousel();
