let currentSlide = 0;
    function moveSlide(direction) {
        const track = document.getElementById('carouselTrack');
        const items = document.querySelectorAll('.carousel-item');
        const totalSlides = items.length;

        currentSlide += direction;

        if (currentSlide >= totalSlides) {
            currentSlide = 0;
        } else if (currentSlide < 0) {
            currentSlide = totalSlides - 1;
        }

        const amountToMove = currentSlide * 100;
        track.style.transform = `translateX(-${amountToMove}%)`;
    }






document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // MODAL FUNCTIONALITY
    // =========================

    const modal = document.getElementById("deliveryOuter");
    const closeBtn = document.querySelector(".close-btn");
    const deliveryForm = document.getElementById("deliveryForm");

    // Buy buttons
    const buyButtons = document.querySelectorAll(".add-to-cart");

    buyButtons.forEach(button => {
        button.addEventListener("click", function () {
            modal.style.display = "flex";
        });
    });

    // Close modal
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Close if clicked outside
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Form submission
    deliveryForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("fullName").value;
        const phone = document.getElementById("phone").value;
        const dzongkhag = document.getElementById("dzongkhag").value;

        alert(
            `Thank you, ${name}! Your order has been placed.\nWe will contact you shortly at ${phone} for delivery to ${dzongkhag}.`
        );

        deliveryForm.reset();
        modal.style.display = "none";
    });




    // =========================
    // PRICE FILTER FUNCTIONALITY
    // =========================

    const applyBtn = document.getElementById("applyFilter");

    applyBtn.addEventListener("click", function () {

        const minPrice =
            parseInt(document.getElementById("minPrice").value) || 0;

        const maxPrice =
            parseInt(document.getElementById("maxPrice").value) || 999999;

        const products = document.querySelectorAll(".product-card");

        products.forEach(product => {

            const productPrice =
                parseInt(product.dataset.price);

            if (
                productPrice >= minPrice &&
                productPrice <= maxPrice
            ) {

                product.style.display = "flex";

            } else {

                product.style.display = "none";
            }
        });
    });




    // =========================
    // RANGE SLIDER FUNCTIONALITY
    // =========================

    const rangeSlider = document.getElementById("priceRange");

    rangeSlider.addEventListener("input", function () {

        document.getElementById("maxPrice").value = this.value;
    });

});

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");
const overlay = document.querySelector(".nav-overlay");

// OPEN / CLOSE MENU
menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
    overlay.classList.toggle("active");
});

// CLOSE WHEN CLICKING OUTSIDE (OVERLAY)
overlay.addEventListener("click", () => {
    nav.classList.remove("active");
    overlay.classList.remove("active");
});

// OPTIONAL: CLOSE MENU WHEN CLICKING A LINK
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        overlay.classList.remove("active");
    });
});





