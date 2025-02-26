document.addEventListener("DOMContentLoaded", function () {
    const cookiePopup = document.getElementById("cookiePopup");
    const acceptButton = document.getElementById("acceptCookie");
    const declineButton = document.getElementById("declineCookie");

    if (!cookiePopup || !acceptButton || !declineButton) {
        console.error("Required elements not found in the DOM");
        return;
    }

    // Check if the User has already accepted the cookie
    if (!localStorage.getItem("cookieAccepted")) {
        cookiePopup.classList.remove("hidden");
    }

    //Event listener for the accept button
    acceptButton.addEventListener("click", function () {
        localStorage.setItem("cookieAccepted", "true");
        cookiePopup.classList.add("hidden");
    })

    //Event listener for the decline button
    declineButton.addEventListener("click", function () {
        cookiePopup.classList.add("hidden");
    })
})