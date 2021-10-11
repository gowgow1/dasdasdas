// Scroll animation for gallery items (https://www.youtube.com/watch?v=kupwmF72Plo)

const animItems = document.querySelectorAll('._anim-items');

// const galleryItem = document.querySelectorAll('.gallery__item');

// Проверяем наличие элементов с классом _anim-items
if (animItems.length > 0) {
  // Событие скрола страницы
  window.addEventListener('scroll', animOnScroll);

  function animOnScroll() {
    for (let i = 0; i < animItems.length; i++) {
      const animItem = animItems[i];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      // Коэффициент, регулирующий момент старта анимации (одна четвертая  высоты объекта)
      const animStart = 6;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
        animItem.classList.add('_active');
      } else {
        if(!animItem.classList.contains('_anim-no-hide')) {
          animItem.classList.remove('_active');
        }
      }

    }
  }
  // Функция возвращает значение позиции объекта относительно верха страницы
  function offset(el) {
    const rect = el.getBoundingClientRect();
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }
  animOnScroll();
  // setTimeout(() => {
  //   animOnScroll();
  // }, 300)
}