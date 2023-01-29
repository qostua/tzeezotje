const mainNavNode = document.querySelector('.main-nav');
const mainNavToggleNode = mainNavNode.querySelector('.main-nav__toggle');

mainNavToggleNode.addEventListener('click', () => {
  mainNavNode.classList.toggle('main-nav--open');
});
