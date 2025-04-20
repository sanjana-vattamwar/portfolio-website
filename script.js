// Scroll fade-in effect
const faders = document.querySelectorAll('.fade-in');
const toggleBtn = document.getElementById("toggle-theme");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");

  // Optional: change icon
  toggleBtn.textContent = body.classList.contains("dark") ? "🌞" : "🌙";
});

const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Theme toggle
/*const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark");
  body.classList.toggle("light");

  // Change button text
  if (body.classList.contains("dark")) {
    toggleButton.textContent = "☀️ Light Mode";
  } else {
    toggleButton.textContent = "🌙 Dark Mode";
  }*/
