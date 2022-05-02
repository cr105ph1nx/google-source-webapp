const toggle = document.getElementById('mobile-nav-toggle');
const menu = document.getElementById('primary-navigation');

toggle.addEventListener('click', () => {
  const visible = menu.getAttribute('data-visible');
    if (visible === 'false') {
      menu.setAttribute('data-visible', 'true');
      toggle.setAttribute('aria-expanded', 'true');
    } else {
        menu.setAttribute('data-visible', 'false');
        toggle.setAttribute('aria-expanded', 'false');
    }

});
