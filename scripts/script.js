const feedbackButton = document.querySelector('.address-feedback');
const modal = document.querySelector('.modal-container');
const closeButton = document.querySelector('.modal-close-button');

const next = document.querySelector('.slider-button-next');
const prev = document.querySelector('.slider-button-prev');
const sliderItemsTags = document.querySelectorAll('.slider-item');
const bullits = document.querySelectorAll('.slider-paganation-button');

if(feedbackButton) {
    feedbackButton.addEventListener('click', (evt) => {
        evt.preventDefault();
        modal.classList.remove('modal-close');
    });

    closeButton.addEventListener('click', (evt) => {
        evt.preventDefault();
        modal.classList.add('modal-close');
    });
}

//  ===========================

const model = [true, false, false];

document.body.classList.add('body-pink');

const renderActiveScreen = (index) => {
  document.querySelector('.slider-item-current').classList.remove('slider-item-current');
  const sliderItems = Array.from(sliderItemsTags);
  sliderItems[index].classList.add('slider-item-current');
  sliderItems.slice(index).forEach((item, i) => {
    item.style.order = i
  });

  sliderItems.slice(0, index).forEach((item, i) => {
    item.style.order = sliderItems.length - index + i;
  });

  document.body.classList.remove(...document.body.classList);
  document.body.classList.add(`theme-${index +1}`);

  document.querySelector('.slider-paganation-current').classList.remove('slider-paganation-current');
  Array.from(bullits)[index].classList.add('slider-paganation-current');
}

const getNextScreen = () => {
  let current = model.findIndex((item) => item === true);
  model[current] = false;
  current = current < model.length - 1 ? current + 1 : 0;
  model[current] = true;
  return current;
};

const getPrevScreen = () => {
  let current = model.findIndex((item) => item === true);
  model[current] = false;
  current = current > 0 ? current - 1 : model.length - 1;
  model[current] = true;
  return current;
};

const getActiveScreen = (index) => {
  let current = model.findIndex((item) => item === true);
  model[current] = false;
  current = index;
  model[current] = true;
  return current;
}

next.addEventListener('click', (evt) => {
  evt.preventDefault();
  renderActiveScreen(getNextScreen());
});

prev.addEventListener('click', (evt) => {
  evt.preventDefault();
  renderActiveScreen(getPrevScreen());
});

bullits.forEach((bullit, index) => {
  bullit.addEventListener('click', (evt) => {
    evt.preventDefault();
    renderActiveScreen(getActiveScreen(index));
  });
});
