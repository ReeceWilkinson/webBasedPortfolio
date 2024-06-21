document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const status = document.getElementById("formStatus");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Display a success message (you can customize this to send the form data to a server)
        alert("Thank you for your message! We will get back to you soon.");

        // Optionally, reset the form
        form.reset();
    });
});
