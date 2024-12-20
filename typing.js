// Typing Effect Function
function typingEffect(element, text, speed, callback) {
    let i = 0;
    const typingInterval = setInterval(() => {
        element.textContent += text.charAt(i);
        i++;
        if (i === text.length) {
            clearInterval(typingInterval);
            if (callback) callback(); // Proceed to the next typing effect if needed
        }
    }, speed);
}

// Initialize Typing Effects
document.addEventListener("DOMContentLoaded", () => {
    const typing1 = document.querySelector(".typing1");
    const typing2 = document.querySelector(".typing2");

    const text1 = "What would you like"; // First line text
    const text2 = "to do today?"; // Second line text

    // Clear text content before typing
    typing1.textContent = "";
    typing2.textContent = "";

    // Start Typing Effect: First line, then second line
    typingEffect(typing1, text1, 100, () => {
        typingEffect(typing2, text2, 100);
    });
});
