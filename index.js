let header = document.querySelector('.uns-target');
let scrolling = false;
let lastTop = 0;
let currentTop = 0;
let delta = 10;
let offset = 150;

function scrollHandler() {
  window.addEventListener('scroll', () => {
    if (!scrolling) {
      scrolling = true;
      requestAnimationFrame(updateHeader);
    }
  });
}

function updateHeader() {
  currentTop = document.scrollingElement.scrollTop;

  checkScrollDirection(currentTop);
  lastTop = currentTop;
  scrolling = false;
}

function checkScrollDirection(currentTop) {
  let scrollingUp = lastTop - currentTop > delta;
  let scrollingDown = currentTop - lastTop > delta && currentTop > offset;

  if (!!scrollingUp) {
    header.classList.remove('isUnstuck');
  }
  if (!!scrollingDown) {
    header.classList.add('isUnstuck');
  }
}

requestAnimationFrame(scrollHandler);
