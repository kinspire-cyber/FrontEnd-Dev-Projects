// script.js
document.addEventListener("DOMContentLoaded", () => {
    const textarea = document.getElementById("restricted-text");
    const charCount = document.getElementById("char-count");
    const maxChars = textarea.getAttribute("maxlength");

    textarea.addEventListener("input", () => {
        let currentLength = textarea.value.length;
        charCount.textContent = `${currentLength} / ${maxChars}`;

        // Add red border when limit is reached
        if (currentLength >= maxChars) {
            textarea.classList.add("limit-reached");
        } else {
            textarea.classList.remove("limit-reached");
        }
    });
});
