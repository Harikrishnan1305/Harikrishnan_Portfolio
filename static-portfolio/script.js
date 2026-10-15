/**
 * ═══════════════════════════════════════════════════════════════
 *  HARIKRISHNAN S — Portfolio Script  v3.0
 *  Author : Harikrishnan S
 *
 *  Features:
 *   1.  Footer year auto-update
 *   2.  Sticky navbar (background on scroll)
 *   3.  Scroll-spy (active nav link tracking via IntersectionObserver)
 *   4.  Mobile hamburger menu (open/close/outside-click/ESC key)
 *   5.  Smooth scroll for all anchor links (with navbar offset)
 *   6.  Reveal animations (IntersectionObserver — animate-once)
 *   7.  Contact form — real-time validation + simulated submission
 *   8.  Scroll-to-top button (show/hide + click handler)
 *   9.  Dark/Light mode toggle
 *   10. Typing animation for hero section
 *   11. About Me — tabbed interface (Skills / Education / Experience)
 * ═══════════════════════════════════════════════════════════════
 */

"use strict";

/* ─────────────────────────────────────────────────────────────
   DOM REFERENCES
───────────────────────────────────────────────────────────── */
const $ = (id) => document.getElementById(id);
const $$ = (sel) => document.querySelectorAll(sel);

const navbar = $("navbar");
const hamburger = $("hamburger");
const navLinksEl = $("navLinks");
const navLinkNodes = $$(".nav-link");
const contactForm = $("contactForm");
const formStatus = $("formStatus");
const submitBtn = $("submitBtn");
const yearEl = $("year");
const scrollTopBtn = $("scrollTop");
const themeToggle = $("themeToggle");
const themeIcon = $("themeIcon");
const heroTyped = $("heroTyped");

/* ─────────────────────────────────────────────────────────────
   1. FOOTER YEAR
───────────────────────────────────────────────────────────── */
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ─────────────────────────────────────────────────────────────
   2. STICKY NAVBAR
───────────────────────────────────────────────────────────── */
function updateNavbar() {
  navbar.classList.toggle("scrolled", window.scrollY > 40);
}
window.addEventListener("scroll", updateNavbar, { passive: true });
updateNavbar();

/* ─────────────────────────────────────────────────────────────
   3. SCROLL-SPY
───────────────────────────────────────────────────────────── */
const sections = $$("section[id]");

const scrollspy = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinkNodes.forEach((link) => {
        link.classList.toggle(
          "active",
          link.getAttribute("href") === `#${entry.target.id}`,
        );
      });
    });
  },
  { rootMargin: "-38% 0px -58% 0px" },
);

sections.forEach((s) => scrollspy.observe(s));

/* ─────────────────────────────────────────────────────────────
   4. MOBILE HAMBURGER MENU
───────────────────────────────────────────────────────────── */
function openMenu() {
  navLinksEl.classList.add("open");
  hamburger.classList.add("open");
  hamburger.setAttribute("aria-expanded", "true");
}

function closeMenu() {
  navLinksEl.classList.remove("open");
  hamburger.classList.remove("open");
  hamburger.setAttribute("aria-expanded", "false");
}

hamburger.addEventListener("click", () => {
  navLinksEl.classList.contains("open") ? closeMenu() : openMenu();
});

navLinkNodes.forEach((link) => link.addEventListener("click", closeMenu));

document.addEventListener("click", (e) => {
  if (!navbar.contains(e.target)) closeMenu();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});

/* ─────────────────────────────────────────────────────────────
   5. SMOOTH SCROLL
───────────────────────────────────────────────────────────── */
const NAVBAR_H =
  parseInt(
    getComputedStyle(document.documentElement).getPropertyValue("--navbar-h"),
    10,
  ) || 70;

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    const targetId = anchor.getAttribute("href");
    if (targetId === "#") return;
    const target = document.querySelector(targetId);
    if (!target) return;

    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - NAVBAR_H;
    window.scrollTo({ top, behavior: "smooth" });
  });
});

/* ─────────────────────────────────────────────────────────────
   6. REVEAL ANIMATIONS
───────────────────────────────────────────────────────────── */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("revealed");
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.1 },
);

$$(".reveal").forEach((el) => revealObserver.observe(el));

/* ─────────────────────────────────────────────────────────────
   7. CONTACT FORM
───────────────────────────────────────────────────────────── */
function setError(fieldId, msg) {
  const input = $(fieldId);
  const error = $(`${fieldId}Error`);
  if (input) input.style.borderColor = msg ? "#f87171" : "";
  if (error) error.textContent = msg;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validators = {
  name: (v) =>
    !v
      ? "Please enter your name."
      : v.length < 2
        ? "Name must be at least 2 characters."
        : "",
  email: (v) =>
    !v
      ? "Please enter your email address."
      : !EMAIL_RE.test(v)
        ? "Please enter a valid email address."
        : "",
  subject: (v) => (!v ? "Please enter a subject." : ""),
  message: (v) =>
    !v
      ? "Please enter a message."
      : v.length < 10
        ? "Message must be at least 10 characters."
        : "",
};

Object.keys(validators).forEach((id) => {
  const el = $(id);
  if (!el) return;
  el.addEventListener("blur", () => {
    setError(id, validators[id](el.value.trim()));
  });
  el.addEventListener("input", () => {
    if ($(`${id}Error`)?.textContent) {
      setError(id, validators[id](el.value.trim()));
    }
  });
});

function validateAll() {
  let ok = true;
  Object.keys(validators).forEach((id) => {
    const el = $(id);
    const msg = el ? validators[id](el.value.trim()) : "Required.";
    setError(id, msg);
    if (msg) ok = false;
  });
  return ok;
}

if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    formStatus.className = "form-status";
    if (!validateAll()) return;

    submitBtn.disabled = true;
    submitBtn.innerHTML =
      '<i class="fas fa-spinner fa-spin" aria-hidden="true"></i> Sending…';

    try {
      await new Promise((resolve) => setTimeout(resolve, 1600));
      formStatus.textContent = "✅  Message sent! I'll get back to you soon.";
      formStatus.className = "form-status success";
      contactForm.reset();
      Object.keys(validators).forEach((id) => setError(id, ""));
    } catch (err) {
      console.error("Contact form error:", err);
      formStatus.textContent =
        "❌  Something went wrong. Please try again or email me directly.";
      formStatus.className = "form-status error";
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML =
        '<i class="fas fa-paper-plane" aria-hidden="true"></i> Send Message';
    }
  });
}

/* ─────────────────────────────────────────────────────────────
   8. SCROLL-TO-TOP BUTTON
───────────────────────────────────────────────────────────── */
function updateScrollTop() {
  scrollTopBtn.classList.toggle("visible", window.scrollY > 500);
}
window.addEventListener("scroll", updateScrollTop, { passive: true });

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ─────────────────────────────────────────────────────────────
   9. DARK / LIGHT MODE TOGGLE
───────────────────────────────────────────────────────────── */
/** Current theme — default: 'dark' */
let currentTheme = "dark";

/**
 * Apply a theme by setting data-theme on <html>
 * @param {'dark'|'light'} theme
 */
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  currentTheme = theme;

  if (theme === "dark") {
    themeIcon.textContent = "☀️";
    themeToggle.setAttribute("aria-label", "Switch to light mode");
    themeToggle.setAttribute("title", "Switch to light mode");
  } else {
    themeIcon.textContent = "🌙";
    themeToggle.setAttribute("aria-label", "Switch to dark mode");
    themeToggle.setAttribute("title", "Switch to dark mode");
  }
}

function toggleTheme() {
  themeToggle.classList.add("switching");
  setTimeout(() => themeToggle.classList.remove("switching"), 420);
  applyTheme(currentTheme === "dark" ? "light" : "dark");
}

if (themeToggle) {
  themeToggle.addEventListener("click", toggleTheme);
}

// Initialise to dark (default)
applyTheme("dark");

/* ─────────────────────────────────────────────────────────────
   10. TYPING ANIMATION — Hero section
───────────────────────────────────────────────────────────── */
(function initTyping() {
  if (!heroTyped) return;

  const roles = [
    "Java Developer",
    "AI Developer",
    "Full Stack Web Developer",
    "Web Developer",
    "Software Engineer",
    // "Data Analyst",
    // "ML Engineer",
    "Problem Solver",
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let timeout;

  const TYPING_SPEED = 80; // ms per character while typing
  const DELETING_SPEED = 45; // ms per character while deleting
  const PAUSE_AFTER = 1800; // ms to hold complete word
  const PAUSE_BEFORE = 500; // ms before starting to delete

  function type() {
    const current = roles[roleIndex];

    if (isDeleting) {
      charIndex--;
      heroTyped.textContent = current.slice(0, charIndex);

      if (charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        timeout = setTimeout(type, PAUSE_BEFORE);
        return;
      }
      timeout = setTimeout(type, DELETING_SPEED);
    } else {
      charIndex++;
      heroTyped.textContent = current.slice(0, charIndex);

      if (charIndex === current.length) {
        isDeleting = true;
        timeout = setTimeout(type, PAUSE_AFTER);
        return;
      }
      timeout = setTimeout(type, TYPING_SPEED);
    }
  }

  // Start after a short delay so the page renders first
  timeout = setTimeout(type, 600);
})();

/* ─────────────────────────────────────────────────────────────
   11. ABOUT ME — TABBED INTERFACE
   Switches the active tab panel when a tab button is clicked.
───────────────────────────────────────────────────────────── */
(function initAboutTabs() {
  const tabBtns = $$(".tab-btn");
  const tabPanels = $$(".tab-panel");

  if (!tabBtns.length) return;

  function activateTab(targetId) {
    // Update buttons
    tabBtns.forEach((btn) => {
      const isActive = btn.dataset.tab === targetId;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-selected", isActive ? "true" : "false");
    });

    // Update panels
    tabPanels.forEach((panel) => {
      const isActive = panel.id === `tab-${targetId}`;
      panel.classList.toggle("active", isActive);
    });
  }

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => activateTab(btn.dataset.tab));

    // Keyboard accessibility: left/right arrow key navigation
    btn.addEventListener("keydown", (e) => {
      const btnsArr = Array.from(tabBtns);
      const idx = btnsArr.indexOf(btn);
      if (e.key === "ArrowRight") {
        e.preventDefault();
        btnsArr[(idx + 1) % btnsArr.length].focus();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        btnsArr[(idx - 1 + btnsArr.length) % btnsArr.length].focus();
      } else if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        activateTab(btn.dataset.tab);
      }
    });
  });
})();
