const burger = document.getElementById('burger'),
  nav = document.getElementById('nav');

function setNav(o) {
  nav.classList.toggle('open', o);
  burger.setAttribute('aria-expanded', String(o))
}
burger.addEventListener('click', () => setNav(!nav.classList.contains('open')));
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setNav(false)));
document.addEventListener('click', e => {
  if (!e.target.closest('.site-header')) setNav(false)
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') setNav(false)
});
window.addEventListener('resize', () => {
  if (innerWidth > 760) setNav(false)
});
document.getElementById('yr').textContent = new Date().getFullYear();
const form = document.getElementById('cform');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return
    }
    // Connect this to your backend / Formspree / EmailJS to receive messages.
    document.getElementById('formOk').classList.add('show');
    form.reset();
  });
}
