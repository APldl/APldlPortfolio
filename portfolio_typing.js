// Typing Effect Function
function typingEffect(element, text, speed, callback) {
  let i = 0;
  element.textContent = ''; // Clear existing text
  const typingInterval = setInterval(() => {
    element.textContent += text.charAt(i); // Add one character at a time
    i++;
    if (i === text.length) {
      clearInterval(typingInterval);
      if (callback) callback(); // Proceed to the next typing effect if needed
    }
  }, speed);
}

// Initialize Typing Effect on Hero Section's H1 and Connect with Me Section
document.addEventListener("DOMContentLoaded", () => {
  // Hero Section Typing Effect
  const typing1 = document.querySelector(".hero h1 .typing1");
  const text1 = typing1.textContent; // Get the text inside the span dynamically
  let typingInProgress1 = false; // Flag to track if typing effect is running in hero section

  // Intersection Observer for Hero Section
  const heroSection = document.querySelector("#home");

  const observerHero = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !typingInProgress1) {
        typingInProgress1 = true;
        typingEffect(typing1, text1, 100, () => {
          typingInProgress1 = false; // Reset the flag after typing effect completes
        });
      }
    });
  }, { threshold: 0.5 }); // Trigger when 50% of the section is visible in the viewport
  observerHero.observe(heroSection);

  // Connect with Me Section Typing Effect
  const typing2 = document.querySelector(".contact h2 .typing2");
  const text2 = typing2.textContent; // Get the text inside the span dynamically
  let typingInProgress2 = false; // Flag to track if typing effect is running in contact section
  const typingLine = document.querySelector(".contact h2 .typing-line");

  // Intersection Observer for Contact Section
  const contactSection = document.querySelector("#contact");

  const observerContact = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !typingInProgress2) {
        typingInProgress2 = true;
        typingEffect(typing2, text2, 100, () => {
          typingInProgress2 = false; // Reset the flag after typing effect completes
          typingLine.classList.add("typing"); // Show the typing line after text is typed
        });
      }
    });
  }, { threshold: 0.5 }); // Trigger when 50% of the section is visible in the viewport
  observerContact.observe(contactSection);
});
