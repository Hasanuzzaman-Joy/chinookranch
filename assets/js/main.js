// Preloader functionality
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    // Prevent body scroll while preloader is visible
    document.body.style.overflow = "hidden";
    
    // Add a small delay for smooth transition
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

  const form = document.querySelector("[data-booking-form]");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = Object.fromEntries(new FormData(form));

      const requiredFilled = ["name", "email", "service", "date"].every(
        (field) => data[field] && data[field].trim() !== ""
      );

      if (!requiredFilled) {
        alert("Please complete all required fields.");
        return;
      }

      form.reset();
      alert(
        `Thanks ${data.name.split(" ")[0]}! Our team will confirm your ${
          data.service
        } booking for ${data.date}.`
      );
    });
  }

  const contactForm = document.querySelector("[data-contact-form]");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = Object.fromEntries(new FormData(contactForm));

      const requiredFilled = ["name", "email", "help"].every(
        (field) => data[field] && data[field].trim() !== ""
      );

      if (!requiredFilled) {
        alert("Please complete all required fields.");
        return;
      }

      contactForm.reset();
      alert(
        `Thank you ${data.name.split(" ")[0]}! We've received your message and will get back to you soon.`
      );
    });
  }
});


