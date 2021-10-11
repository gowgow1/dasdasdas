let welcomImagesSlider = document.body.querySelector('.slides')
let buttonfirst = document.body.querySelector('.slider-arrow--left')
let buttonsecond = document.body.querySelector('.slider-arrow--right')
let counter = document.body.querySelector('.current-count')
let paginations = Array.from(document.body.querySelectorAll('.slider__pagination-item'))

const activeClassName = "slider__pagination-item--active"
let sliderPositionX = 0;

let handlePaginationItem = ({ target }) => {
  if (target.classList.contains(activeClassName)) return;
  sliderPositionX = paginations.indexOf(target) * 1000
  translateX = welcomImagesSlider.style.transform = `translateX(-${sliderPositionX}px)`
  document.body.querySelector(`.${activeClassName}`).classList.remove(activeClassName)
  paginations[sliderPositionX / 1000].classList.add(activeClassName)
  counter.innerHTML = `0${sliderPositionX / 1000 + 1}`
}

let moveSliderToRight = () => {
  let previosActive = sliderPositionX / 1000 // 0
  sliderPositionX = sliderPositionX > 3000 ? 0 : sliderPositionX + 1000
  paginations[previosActive].classList.remove(activeClassName)
  paginations[sliderPositionX / 1000].classList.add(activeClassName)
  counter.innerHTML = `0${sliderPositionX / 1000 + 1}`
  translateX = welcomImagesSlider.style.transform = `translateX(-${sliderPositionX}px)`;
}

let moveSliderToLeft = () => {
  let previosActive = sliderPositionX / 1000
  sliderPositionX = sliderPositionX < 1000 ? 4000 : sliderPositionX - 1000
  paginations[previosActive].classList.remove(activeClassName)
  paginations[sliderPositionX / 1000].classList.add(activeClassName)
  counter.innerHTML = `0${sliderPositionX / 1000 + 1}`
  translateX = welcomImagesSlider.style.transform = `translateX(-${sliderPositionX}px)`;
}

paginations.forEach((item) => item.addEventListener('click', handlePaginationItem))
buttonsecond.addEventListener('click', moveSliderToRight)
buttonfirst.addEventListener('click', moveSliderToLeft)
