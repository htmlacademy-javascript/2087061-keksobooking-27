import { form, price } from './form.js';

const sliderPrice = form.querySelector('.ad-form__slider');

noUiSlider.create(sliderPrice, {
  range: {
    min: 0,
    max: 100000,
  },
  start: 1000,
  step: 1,
  connect: 'lower',
});

sliderPrice.noUiSlider.on('update', () => {
  price.value = sliderPrice.noUiSlider.get();
});

