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
});


