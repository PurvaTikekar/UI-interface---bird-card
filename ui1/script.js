
// Start with the first slide
let currentSlide = 1;

// Function to display the current slide
function displayImage(n) {
    
    let slides = document.getElementsByClassName("slide"); // all from class "slide"
    
    let dots = document.getElementsByClassName("dot"); // all from class "dot"

    
    for (let i = 0; i < slides.length; i++) {

        slides[i].style.display = "none"; 

    }

    // to remove the "active" class
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); // Remove "active"
    }

    // Show the selected slide (the one the user clicked on)
    slides[n - 1].style.display = "block"; // Show the slide

    // Add the "active" class to the clicked dot
    dots[n - 1].className += " active"; // Make the dot active
}

// Show the first slide when the page loads
displayImage(currentSlide);



