import "./sass/app.sass";
import {loadHeader, loadMainContent, loadFooter} from './modules/loadPage';
import loadHome from './modules/home';
import loadMenu from './modules/menu';
import loadContact from './modules/contact';

if (localStorage.getItem('currentPage') == 'menu') {
  init();
  loadMenu();
} else if (localStorage.getItem('currentPage') == 'contact') {
  init();
  loadContact();
} else {
  init();
}

function loadNavigation() {
  const homeNav = document.getElementById('home')
  const menuNav = document.getElementById('menu')
  const contactNav = document.getElementById('contact')
  
  homeNav.addEventListener('click', loadHome)
  menuNav.addEventListener('click', loadMenu)
  contactNav.addEventListener('click', loadContact)
}


function init() {
  loadHeader();
  loadMainContent();
  loadNavigation();
  loadHome();
  loadFooter();
}