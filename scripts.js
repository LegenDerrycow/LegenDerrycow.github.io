// Smooth Scroll Function
function scrollToSection(sectionID) {
    document.getElementById(sectionID).scrollIntoView({
        behavior: 'smooth'
    });
}

// Form Submission Alert (for now, to simulate submission)
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you! Your message has been sent.");
});
