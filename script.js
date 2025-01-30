// Add an event listener to the form submission
document.getElementById("submission-form").addEventListener("submit", function (event) {
    // Get form field values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validate the fields
    if (!name || !email || !message) {
        alert("Please fill out all fields before submitting.");
        event.preventDefault(); // Prevent form submission
        return;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        event.preventDefault(); // Prevent form submission
        return;
    }

    // If all validations pass
    alert("Thank you for your submission!");
});

// Function to validate email format using a regular expression
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}