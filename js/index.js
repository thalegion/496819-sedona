var menu = document.querySelector('.menu');
menu.classList.add('menu--closed');


function initMap() {
  var uluru = {lat: 34.834072, lng: -111.913490};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: uluru,
    disableDefaultUI: true
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
    icon: '../img/icon-map-marker.svg'
  });
}

document.querySelector('.page-header__menu-toggle').addEventListener('click', function () {

  if (menu.classList.contains('menu--closed')) {
    menu.classList.remove('menu--closed');
  }  else {
    menu.classList.add('menu--closed');
  }
});

document.querySelector('.menu__close').addEventListener('click', function () {
  menu.classList.add('menu--closed');
});
