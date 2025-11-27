import { selectElement as get } from './utils/dom.js';

const mobileMenuBtn = get('.mobile-menu-btn');
const yearElement = get('.year');

const currentYear = new Date().getFullYear();

yearElement.textContent = currentYear;

mobileMenuBtn.addEventListener('click', () => {
  const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
  mobileMenuBtn.setAttribute('aria-expanded', String(!isExpanded));
});
