function initCarousel() {
let leftCarousel = document.getElementsByClassName('carousel__arrow carousel__arrow_left')[0];
let rightCarousel = document.getElementsByClassName('carousel__arrow carousel__arrow_right')[0];
let carouselInner = document.getElementsByClassName('carousel__inner')[0];
let slide = document.querySelectorAll('.carousel__slide');
let count = null,
    numberSlide = 1;
    count = (slide[0]).offsetWidth;
  leftCarousel.style.display = 'none';
  rightCarousel.addEventListener("click", function () {
    carouselInner.style.transform = 'translateX(-' + (count * numberSlide) + 'px)';
    numberSlide++;
    leftCarousel.style.display = '';
    if (numberSlide === 4) {
      rightCarousel.style.display = 'none';
    }
  });
  leftCarousel.addEventListener("click", function () {
    let numberSlideLeft = numberSlide === 2 ? 0 : (numberSlide - 2);
    carouselInner.style.transform = 'translateX(-' + (numberSlideLeft * count) + 'px)';
    numberSlide--;
    rightCarousel.style.display = '';
    if (numberSlide === 1) {
      leftCarousel.style.display = 'none';
    }
  })
}
