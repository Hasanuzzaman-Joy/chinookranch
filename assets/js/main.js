// Preloader functionality
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    // Prevent body scroll while preloader is visible
    document.body.style.overflow = "hidden";
    
    setTimeout(() => {
      preloader.classList.add("hidden");
      // Restore body scroll and remove from DOM after animation completes
      setTimeout(() => {
        document.body.style.overflow = "";
        preloader.remove();
      }, 600);
    }, 500);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.querySelector("[data-year]");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const navLinks = document.querySelectorAll(".nav-links a");
  navLinks.forEach((link) => {
    if (link.href === window.location.href) {
      link.setAttribute("aria-current", "page");
    }
  });

  // Mobile menu toggle
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const navLinksContainer = document.querySelector(".nav-links");
  const navOverlay = document.querySelector(".nav-overlay");
  const body = document.body;

  if (mobileMenuToggle && navLinksContainer) {
    mobileMenuToggle.addEventListener("click", () => {
      const isActive = mobileMenuToggle.classList.contains("active");
      
      if (isActive) {
        // Close menu
        mobileMenuToggle.classList.remove("active");
        navLinksContainer.classList.remove("active");
        if (navOverlay) navOverlay.classList.remove("active");
        body.style.overflow = "";
      } else {
        // Open menu
        mobileMenuToggle.classList.add("active");
        navLinksContainer.classList.add("active");
        if (navOverlay) navOverlay.classList.add("active");
        body.style.overflow = "hidden";
      }
    });

    // Close menu when clicking on overlay
    if (navOverlay) {
      navOverlay.addEventListener("click", () => {
        mobileMenuToggle.classList.remove("active");
        navLinksContainer.classList.remove("active");
        navOverlay.classList.remove("active");
        body.style.overflow = "";
      });
    }

    // Close menu when clicking on a nav link (mobile)
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= 968) {
          mobileMenuToggle.classList.remove("active");
          navLinksContainer.classList.remove("active");
          if (navOverlay) navOverlay.classList.remove("active");
          body.style.overflow = "";
        }
      });
    });

    // Close menu on window resize if it becomes desktop size
    window.addEventListener("resize", () => {
      if (window.innerWidth > 968) {
        mobileMenuToggle.classList.remove("active");
        navLinksContainer.classList.remove("active");
        if (navOverlay) navOverlay.classList.remove("active");
        body.style.overflow = "";
      }
    });
  }
});


