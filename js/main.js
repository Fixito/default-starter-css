import { selectElement as get } from './utils/dom.js';

const navbar = get('.navbar');
const mobileMenuBtn = get('.mobile-menu-btn');
const themeToggle = get('.theme-toggle');
const yearElement = get('.year');
const mainContent = get('main');
const pageFooter = get('.footer');

// Current year
yearElement.textContent = new Date().getFullYear();

// Mobile menu toggle
// When the menu is open, `inert` is added to <main> and <footer> to trap focus
// inside the navbar/menu (keyboard and screen reader users can't escape).
function closeMenu() {
  mobileMenuBtn.setAttribute('aria-expanded', 'false');
  mainContent.inert = false;
  pageFooter.inert = false;
}

mobileMenuBtn.addEventListener('click', () => {
  const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
  const willExpand = !isExpanded;
  mobileMenuBtn.setAttribute('aria-expanded', String(willExpand));
  mainContent.inert = willExpand;
  pageFooter.inert = willExpand;
});

// Close menu on Escape
document.addEventListener('keydown', (e) => {
  if (
    e.key === 'Escape' &&
    mobileMenuBtn.getAttribute('aria-expanded') === 'true'
  ) {
    closeMenu();
    mobileMenuBtn.focus();
  }
});

// Close menu on click outside
document.addEventListener('click', (e) => {
  if (
    mobileMenuBtn.getAttribute('aria-expanded') === 'true' &&
    !navbar.contains(e.target)
  ) {
    closeMenu();
  }
});

// Dark mode toggle
themeToggle.addEventListener('click', () => {
  const current = document.documentElement.dataset.theme;
  const next = current === 'dark' ? 'light' : 'dark';

  document.documentElement.dataset.theme = next;
  localStorage.setItem('theme', next);
});
