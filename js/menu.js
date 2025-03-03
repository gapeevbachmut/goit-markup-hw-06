document.addEventListener('DOMContentLoaded', function () {
  const menuOpen = document.querySelector('[data-menu-open]');
  const menuClose = document.querySelector('[data-menu-close]');
  const mobileMenu = document.querySelector('[data-menu]');
  const navList = document.querySelector('.nav-list');
  const addressList = document.querySelector('.address-list');
  const mobileNav = document.querySelector('.mobile-menu-nav');
  const mobileAddress = document.querySelector('.mobile-menu-address');
  const headerNav = document.querySelector('.header-nav');
  const headerAddress = document.querySelector('.address');

  menuOpen.addEventListener('click', function () {
    mobileNav.appendChild(navList);
    mobileAddress.appendChild(addressList);
    mobileMenu.classList.add('is-open');
  });

  menuClose.addEventListener('click', function () {
    headerNav.appendChild(navList);
    headerAddress.appendChild(addressList);
    mobileMenu.classList.remove('is-open');
  });

  // Закриваємо мобільне меню та повертаємо елементи назад при зміні розміру екрану
  window.addEventListener('resize', function () {
    if (window.innerWidth >= 768) {
      if (mobileMenu.classList.contains('is-open')) {
        headerNav.appendChild(navList);
        headerAddress.appendChild(addressList);
        mobileMenu.classList.remove('is-open');
      }
    }
  });
});
