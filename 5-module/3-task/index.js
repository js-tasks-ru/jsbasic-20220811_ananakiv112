function initCarousel() {
let carouselArrowRight = document.querySelector ('.carousel__arrow_right');
let carouselArrowLeft = document.querySelector ('.carousel__arrow_left');
let carouselSlide = document.querySelector ('.carousel__inner');
let slides = document.querySelectorAll('.carousel__slide');
console.log(slides.length);
let position = 0;

carouselArrowLeft.style.display = 'none';


carouselArrowRight.onclick = function() {
  if (position === carouselSlide.offsetWidth * (slides.length - 2)) {
    carouselArrowRight.style.display = 'none';
  } else {
    carouselArrowRight.style.display = '';
  };

  carouselArrowLeft.style.display = '';

  return carouselSlide.style.transform = `translateX(${-(position += carouselSlide.offsetWidth)}px)`;
};

carouselArrowLeft.onclick = function() {
  if (position === carouselSlide.offsetWidth) {
    carouselArrowLeft.style.display = 'none';
  } else {
    carouselArrowLeft.style.display = '';
  };
  carouselArrowRight.style.display = '';
  return carouselSlide.style.transform = `translateX(${-(position -= carouselSlide.offsetWidth)}px)`;
};
}
