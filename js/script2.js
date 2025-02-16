document.addEventListener("DOMContentLoaded", function () {
    // Initialize Swiper
    var swiper = new Swiper(".home-slider", {
        loop: true,
        autoplay: {
            delay: 4000, // Change every 4 seconds
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        on: {
            slideChangeTransitionStart: function () {
                updateTypedText();
            },
        },
    });

    // Typed.js Function
    let typedInstance;
    const textOptions = [
        "better experience",
        "sweeter journey",
        "yummier treat",
        "cozier vibe",
    ];

    function updateTypedText() {
        // Stop the current typed instance
        if (typedInstance) {
            typedInstance.destroy();
        }

        // Get the active slide
        let activeSlide = document.querySelector(".swiper-slide-active .auto-type");

        if (activeSlide) {
            // Start new typing animation
            typedInstance = new Typed(activeSlide, {
                strings: textOptions,
                typeSpeed: 100,
                backSpeed: 50,
                loop: true,
                showCursor: false,
            });
        }
    }

    // Start typing on the first slide
    updateTypedText();
});
