function exploreSlider() {
  let width = document.getElementById('explore-slider');
  let foreground = document.getElementById('explore-img-before');
  let thumb = document.getElementById('explore-line');

  if (width.value < 1) {
    foreground.style.width = '2%';
    thumb.style.left = '0%';
  } else {
    if (width.value >= 96) {
      foreground.style.width = '97%';
      thumb.style.left = '94.5%';
    } else {
      foreground.style.width = `${+width.value + 2}%`;
      thumb.style.left = `${width.value}%`;
    }
  }
}
