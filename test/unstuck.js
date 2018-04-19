let target = document.querySelector('[data-unstuck="target"]');

let isScrolling = false;
let previousTop = 0;
let currentTop = 0;
let options = { target: target, resistance: 10, offset: 150 };

const handleSticking = currentTop => {
  let scrollingUp = previousTop - currentTop > options.resistance;
  let scrollingDown =
    currentTop - previousTop > options.resistance &&
    currentTop > options.offset;

  scrollingUp && options.target.classList.remove('isUnstuck');
  scrollingDown && options.target.classList.add('isUnstuck');
};

const onScroll = () => {
  currentTop = document.scrollingElement.scrollTop;
  handleSticking(currentTop);
  previousTop = currentTop;
  isScrolling = false;
};

const scrollListener = () => {
  window.addEventListener('scroll', () => {
    isScrolling && (scrolling = true), requestAnimationFrame(onScroll);
  });
};

const Unstuck = () => {
  requestAnimationFrame(scrollListener);
};

requestAnimationFrame(Unstuck);
