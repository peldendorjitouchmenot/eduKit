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

// attach events
categoryList.forEach((item) => {
    item.addEventListener("click", onFilterClick);
});
const backToTopBtn = document.getElementById("backToTop");

// 1. Listen for scroll events to show/hide the button
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

// 2. Add click event to scroll to the top
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // Backup for browsers that don't support HTML smooth scroll
  });
});