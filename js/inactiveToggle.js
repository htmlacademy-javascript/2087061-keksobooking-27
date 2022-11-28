import { form } from './form.js';

const formInput = form.querySelectorAll('.ad-form__element');
const mapFilter = document.querySelector('.map__filters');
const mapFilterInput = mapFilter.querySelectorAll('.map__filter');
const mapFilterFeatures = mapFilter.querySelectorAll('.map__checkbox');

export const disabledForm = function() {
  form.classList.add('ad-form--disabled');
  for (let i = 0; i < formInput.length; i++) {
    formInput[i].disabled = true;
  }

  mapFilter.classList.add('ad-form--disabled');
  for (let k = 0; k < mapFilterInput.length; k++) {
    mapFilterInput[k].disabled = true;
  }
  for (let g = 0; g < mapFilterFeatures.length; g++) {
    mapFilterFeatures[g].disabled = true;
  }
};

export const enabledForm = function () {
  form.classList.remove('ad-form--disabled');
  for (let i = 0; i < formInput.length; i++) {
    formInput[i].disabled = false;
  }

  mapFilter.classList.remove('ad-form--disabled');
  for (let k = 0; k < mapFilterInput.length; k++) {
    mapFilterInput[k].disabled = false;
  }
  for (let g = 0; g < mapFilterFeatures.length; g++) {
    mapFilterFeatures[g].disabled = false;
  }
};
