document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab");
    const contents = document.querySelectorAll(".content");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            // Remove active class from all tabs
            tabs.forEach(item => item.classList.remove("active"));
            // Add active class to clicked tab
            tab.classList.add("active");

            // Hide all content
            contents.forEach(content => content.classList.remove("active"));
            // Show the corresponding content
            const targetContent = document.getElementById(tab.dataset.tab);
            if (targetContent) {
                targetContent.classList.add("active");
            } else {
                console.error(`No element found with ID: ${tab.dataset.tab}`);
            }
        });
    });
});