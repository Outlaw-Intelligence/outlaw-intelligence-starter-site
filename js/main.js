const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('#nav-links');
const placeholderSubmit = document.querySelector('#placeholder-submit');
const formNote = document.querySelector('#form-note');

if (toggle && links) {
  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  links.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

if (placeholderSubmit && formNote) {
  placeholderSubmit.addEventListener('click', () => {
    formNote.textContent = 'Still local-only. Form wiring requires Dylan approval before anything sends.';
  });
}
