// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get all elements with class 'shopproduct'
    const shopNowLinks = document.querySelectorAll('.shopproduct');

    // Iterate over each link and add a click event listener
    shopNowLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior

            // Log a message to the console when clicked
            console.log('Shop Now clicked for:', link.textContent.trim());
        });
    });
});


//Shop Now Button //

document.addEventListener("DOMContentLoaded", function() {
    const shopNowLinks = document.querySelectorAll('.shopproduct');

    // Add click event listener to each 'Shop Now' link
    shopNowLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior

            // Add 'clicked' class to trigger animation
            link.classList.add('clicked');

            // Remove 'clicked' class after animation ends
            setTimeout(function() {
                link.classList.remove('clicked');
            }, 500); // Animation duration in milliseconds
        });
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const productList = document.querySelector('.product-list');
    const productCards = document.querySelectorAll('.product-card');
    const productCount = productCards.length;

    if (productCount === 4) {
        productList.style.gridTemplateColumns = 'repeat(2, 1fr)';
    } else if (productCount === 6) {
        productList.style.gridTemplateColumns = 'repeat(3, 1fr)';
    }
});


function showAlert() {
    var popup = document.getElementById('alertPopup');
    popup.style.display = 'block';

    // Hide the alert after 4 seconds
    setTimeout(function() {
        popup.style.display = 'none';
    }, 4000);
}

// Example usage: Call showAlert when a purchase is made
// You can replace this with your actual purchase logic
document.addEventListener('DOMContentLoaded', function() {
    // Simulate a purchase after 2 seconds
    setTimeout(showAlert, 1000);
});






