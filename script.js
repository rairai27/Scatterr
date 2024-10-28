document.addEventListener("DOMContentLoaded", () => {
    const subscribeBtn = document.getElementById("subscribeBtn");
    const newsletterPopup = document.getElementById("newsletterPopup");
    const closeBtn = document.querySelector(".close");

    // Function to show the popup
    const showPopup = () => {
        newsletterPopup.style.display = "block";
    };

    // Show the popup after a delay of 5 seconds
    setTimeout(showPopup, 5000); // Change 5000 to the desired delay in milliseconds

    // Show the popup when the subscribe button is clicked
    subscribeBtn.addEventListener("click", showPopup);

    // Close the popup when the close button is clicked
    closeBtn.addEventListener("click", () => {
        newsletterPopup.style.display = "none";
    });

    // Close the popup when clicking outside the popup content
    window.addEventListener("click", (event) => {
        if (event.target === newsletterPopup) {
            newsletterPopup.style.display = "none";
        }
    });

    // Optional: Handle form submission (you can customize this as needed)
    document.getElementById("newsletterForm").addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the default form submission
        // Add any additional form handling logic here (e.g., AJAX request)
        alert("Thank you for subscribing!");
        newsletterPopup.style.display = "none"; // Close the popup after submission
    });
});
