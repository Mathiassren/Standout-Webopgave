document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const menuClose = document.getElementById("menu-close");
  const mobileMenu = document.getElementById("mobile-menu");

  // Open menu
  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.remove("translate-x-full");
  });

  // Close menu
  menuClose.addEventListener("click", () => {
    mobileMenu.classList.add("translate-x-full");
  });
});
