let indicator = true;
const navMobile = document.querySelector('.header__nav-mobile');
const navLinkMobile = document.querySelectorAll('.nav__link');
const welcomeContent = document.querySelector('.welcome__content');
const main = document.querySelector('.main');

function showNav() {
  navMobile.style.display = 'block';
  navMobile.classList.remove('hide-nav');
  navMobile.classList.add('show-nav');
  // welcomeContent.style.display = 'none';
  welcomeContent.style.visibility = 'hidden';
}

function hideNav() {
  navMobile.classList.add('hide-nav');
  navMobile.classList.remove('show-nav');
  // welcomeContent.style.display = 'block';
  welcomeContent.style.visibility = 'visible';
  setTimeout(function () { navMobile.style.display = 'none'; }, 500);
}

function burgerClick(x) {
  x.classList.toggle('burger-menu--close');
  if (indicator) {
    showNav()
    indicator = false;
  } else {
    hideNav();
    indicator = true;
  }
}

window.onclick = function(event) {
  if (event.target == main || event.target == navLinkMobile) {
    hideNav();
  }
}