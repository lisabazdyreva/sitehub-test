const navButton = document.querySelector('.main-nav__item');

navButton.addEventListener('click', () => {
  navButton.classList.toggle('main-nav__item--open');
});
