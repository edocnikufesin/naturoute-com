// NAV

// confirm that user is scrolling scrolling down
let previousScrollPosition = 0;

const isScrollingDown = () => {
  let currentScrolledPosition = window.scrollY || window.pageYOffset;
  let scrollingDown;

  if (currentScrolledPosition > previousScrollPosition) {
    scrollingDown = true;
  } else {
    scrollingDown = false;
  }

  previousScrollPosition = currentScrolledPosition;
  return scrollingDown;
};

  // set nav class based on scroll direction
const nav = document.querySelector('nav');

const handleNavScroll = () => {
  if (isScrollingDown() && !nav.contains(document.activeElement)) {
    nav.classList.add('scroll-down');
    nav.classList.remove('scroll-up')
  } else {
    nav.classList.add('scroll-up');
    nav.classList.remove('scroll-down')
  }
};

// throttle implementation
var throttleWait

const throttle = (callback, time) => {
  if (throttleWait) return;

  throttleWait = true;

  setTimeout(() => {
    callback();
    throttleWait = false;
  }, time);
}

// throttle handleNavScroll function 
window.addEventListener("scroll", () => {
  throttle(handleNavScroll,250)
});


// CAROUSEL

// select all slides
const slides = document.querySelectorAll(".carousel");
// current next slide counter
let curSlide = 0;
// select next slide button
const nextSlide = document.querySelector(".btn-next");
// add event listener and next slide functionality
nextSlide.addEventListener("click", function (){
  curSlide++;
// loop through slides and set each slides translateX property to index*100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
});
