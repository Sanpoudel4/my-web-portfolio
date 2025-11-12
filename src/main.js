const toggle = document.getElementById("theme-toggle");
const toggleMobile = document.getElementById("theme-toggle-mobile");
const html = document.documentElement;

// Apply saved theme or system preference on load
if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
    html.classList.add("dark");
} else {
    html.classList.remove("dark");
}

// Update both buttons on load
updateThemeButtons();

// Event listener for desktop toggle
toggle.addEventListener("click", () => {
    html.classList.toggle("dark");
    localStorage.theme = html.classList.contains("dark") ? "dark" : "light";
    updateThemeButtons();
});

// Event listener for mobile toggle
toggleMobile.addEventListener("click", () => {
    html.classList.toggle("dark");
    localStorage.theme = html.classList.contains("dark") ? "dark" : "light";
    updateThemeButtons();
});

// Function to update icons + text on both buttons
function updateThemeButtons() {
    const isDark = html.classList.contains("dark");

    const lightIcon = `
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 inline-block text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M12 3v1m0 16v1m8.66-9h1M3.34 12h1m15.364-6.364l.707.707M4.929 19.071l.707.707M19.071 19.071l.707-.707M4.929 4.929l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
      </svg>
      <span class="ml-2">Light Mode</span>
    `;

    const darkIcon = `
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 inline-block text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
      </svg>
      <span class="ml-2">Dark Mode</span>
    `;

    const content = isDark ? lightIcon : darkIcon;
    toggle.innerHTML = content;
    toggleMobile.innerHTML = content;
}

/* -------------------------------------------------------------------------- */

// Back to Top Button
const backToTop = document.getElementById("backToTop");

// Show button when scrolled down
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        backToTop.classList.remove("hidden");
        backToTop.classList.add("flex"); // use flex for centering the icon
    } else {
        backToTop.classList.add("hidden");
        backToTop.classList.remove("flex");
    }
});

// Smooth scroll to top
backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

/* -------------------------------------------------------------------------- */

// Automatically insert the current year
document.getElementById("year").textContent = new Date().getFullYear();

/* -------------------------------------------------------------------------- */

// Automatically highlight the active page link in both menus
const currentPage = window.location.pathname.split("/").pop() || "index.html";

// Select all navigation links (desktop + mobile)
const navLinks = document.querySelectorAll("nav a, #mobile-menu a");

navLinks.forEach(link => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
        link.classList.add("text-indigo-600", "dark:text-indigo-400", "font-semibold");
    } else {
        link.classList.remove("text-indigo-600", "dark:text-indigo-400", "font-semibold");
    }
});

/* -------------------------------------------------------------------------- */

// Mobile Menu Toggle
const menuToggle = document.getElementById("menu-toggle");
const menuOpen = document.getElementById("menu-open");
const menuClose = document.getElementById("menu-close");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    menuOpen.classList.toggle("hidden");
    menuClose.classList.toggle("hidden");
});