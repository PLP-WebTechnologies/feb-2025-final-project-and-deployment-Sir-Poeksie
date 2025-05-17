function menutoggle() {
        const menu = document.getElementById("Menu");
        menu.classList.toggle("active");
    }

    // menutoggle.js
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-icon');
  const menu = document.getElementById('Menu');

  menuBtn.addEventListener('click', () => {
    const expanded = menuBtn.getAttribute('aria-expanded') === 'true' || false;
    menuBtn.setAttribute('aria-expanded', !expanded);
    menu.classList.toggle('open');
  });
});
