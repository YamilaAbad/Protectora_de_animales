const slides = document.querySelectorAll('.slide');
const progressRadios = document.querySelectorAll('.progress-bar input[type="radio"]');
const prevButton = document.querySelector('.carousel-control.prev');
const nextButton = document.querySelector('.carousel-control.next');

function setActiveSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function handleRadioClick(event) {
  const index = Array.from(progressRadios).findIndex(radio => radio === event.target);
  setActiveSlide(index);
}

progressRadios.forEach(radio => {
  radio.addEventListener('click', handleRadioClick);
});

prevButton.addEventListener('click', () => {
  const activeSlide = document.querySelector('.slide.active');
  const prevSlide = activeSlide.previousElementSibling || activeSlide.parentNode.lastElementChild;
  activeSlide.classList.remove('active');
  prevSlide.classList.add('active');
});

nextButton.addEventListener('click', () => {
  const activeSlide = document.querySelector('.slide.active');
  const nextSlide = activeSlide.nextElementSibling || activeSlide.parentNode.firstElementChild;
  activeSlide.classList.remove('active');
  nextSlide.classList.add('active');
});
