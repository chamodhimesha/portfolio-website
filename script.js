const root = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const cursorGlow = document.querySelector(".cursor-glow");

const savedTheme = localStorage.getItem("theme") || "dark";
root.setAttribute("data-theme", savedTheme);
themeIcon.textContent = savedTheme === "dark" ? "🌙" : "☀️";

themeToggle.addEventListener("click", () => {
  const currentTheme = root.getAttribute("data-theme");
  const nextTheme = currentTheme === "dark" ? "light" : "dark";

  root.setAttribute("data-theme", nextTheme);
  localStorage.setItem("theme", nextTheme);
  themeIcon.textContent = nextTheme === "dark" ? "🌙" : "☀️";
});

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

window.addEventListener("mousemove", event => {
  cursorGlow.style.left = `${event.clientX}px`;
  cursorGlow.style.top = `${event.clientY}px`;
});

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.14
});

revealElements.forEach(element => observer.observe(element));
