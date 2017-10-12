var menu = document.querySelector('.menu');
menu.classList.add('menu--closed');

document.querySelector('.page-header__menu-toggle').addEventListener('click', function () {

  if (menu.classList.contains('menu--closed')) {
    menu.classList.remove('menu--closed');
  } else {
    menu.classList.add('menu--closed');
  }
});

document.querySelector('.menu__close').addEventListener('click', function () {
  menu.classList.add('menu--closed');
});
