// simple interactions
document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form');
  forms.forEach(f => f.addEventListener('submit', e => { e.preventDefault(); alert('Thanks — message simulated (demo).'); f.reset(); }));
});