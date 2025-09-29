// Load partials dynamically
async function loadPartials() {
  const parts = ["hero", "about", "projects", "achievements", "contact"];
  const container = document.getElementById("content");

  for (const part of parts) {
    const res = await fetch(`partials/${part}.html`);
    const html = await res.text();
    const section = document.createElement("section");
    section.id = part;
    section.innerHTML = html;
    container.appendChild(section);
  }
}
loadPartials();

// Bottom nav smooth scroll
document.addEventListener("click", (e) => {
  if (e.target.closest(".bn-btn")) {
    const target = e.target.closest(".bn-btn").getAttribute("data-target");
    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }
});

// Back-to-top button
document.addEventListener("DOMContentLoaded", () => {
  const backToTop = document.getElementById("backToTop");

  if (!backToTop) return; // safety

  // Show/hide button on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      backToTop.classList.remove("hidden");
    } else {
      backToTop.classList.add("hidden");
    }
  });

  // Scroll smoothly to top when clicked
  backToTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  });
});