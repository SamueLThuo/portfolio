
    // Function to start the carousel
    function startCarousel() {
        const carousels = document.querySelectorAll('.carousel');
        
        carousels.forEach(carousel => {
            const images = carousel.querySelectorAll('.carousel-image');
            let currentIndex = 0;
            
            setInterval(() => {
                // Hide all images
                images.forEach(image => image.style.display = 'none');
                
                // Show the next image
                currentIndex = (currentIndex + 1) % images.length;
                images[currentIndex].style.display = 'block';
            }, 40000);  // 40 seconds
        });
    }

    // Start the carousel when the window loads
    window.onload = startCarousel;

