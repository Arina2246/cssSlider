const slides = document.querySelectorAll('.slide');
const container = document.querySelector('.container');

function clearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });
}

container.addEventListener('click', (event) => {
  clearActiveClasses();
  const slide = event.target;
  slide.classList.add('active');
});
