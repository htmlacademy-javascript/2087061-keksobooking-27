const form = document.querySelector('.ad-form');
const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  successClass: 'ad-form__element--valid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'ad-form__element-error'
});

const validateTitle = function (value) {
  return value.length >= 30 && value.length <= 100; 
};

pristine.addValidator(
  form.querySelector('#title'),
  validateTitle,
  'От 30 до 100 символов'
);

const typeHousing = form.querySelector('#type')
const types = typeHousing.querySelectorAll('option')


// import { cardType } from './generate.js'
types.forEach((type) => {

})

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  console.log('Форма отправилась')
  pristine.validate();
});