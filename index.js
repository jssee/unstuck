const header = document.querySelector('.uns-target');
console.log('testing');
// Scrolling default variables
let scrolling = false;
let prevTop = 0;
let currentTop = 0;
let scrollDelta = 10;
let scrollOffset = 150;

const scrollListener = () => {
  window.addEventListener('scroll', () => {
    scrolling ? true : (scrolling = true), requestAnimationFrame(hideHeader);
  });
};

const hideHeader = () => {
  let currentTop = document.scrollingElement.scrollTop;

  checkStickyNav(currentTop);

  prevTop = currentTop;
  scrolling = false;
};

const checkStickyNav = currentTop => {
  let scrollingUp = prevTop - currentTop > scrollDelta;
  let scrollingDown =
    currentTop - prevTop > scrollDelta && currentTop > scrollOffset;

  scrollingUp && header.classList.remove('isUnstuck');

  scrollingDown && header.classList.add('isUnstuck');
};

requestAnimationFrame(scrollListener);
