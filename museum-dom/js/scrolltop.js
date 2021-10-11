// Scrolltop link

function scrollTop() {
  const scrollTop = document.getElementById('scroll-top');
  // When the scroll is higher than 300 viewport height, add the show-scroll class
  if(this.scrollY >= 600) {
      scrollTop.classList.add('show-scroll');
  } else {
      scrollTop.classList.remove('show-scroll');
  }
}
window.addEventListener('scroll', scrollTop);