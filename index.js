const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const yearElement = document.querySelector('.year');

const currentYear = new Date().getFullYear();

yearElement.textContent = currentYear;

mobileMenuBtn.addEventListener('click', () => {
  const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
  mobileMenuBtn.setAttribute('aria-expanded', String(!isExpanded));
});
