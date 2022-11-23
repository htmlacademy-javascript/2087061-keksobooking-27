const form = document.querySelector('.ad-form');
const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  successClass: 'ad-form__element--valid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'ad-form__element-error'
}, false);

const validateTitle = function (value) {
  return value.length >= 30 && value.length <= 100;
};

pristine.addValidator(
  form.querySelector('#title'),
  validateTitle,
  'От 30 до 100 символов'
);

const rooms = form.querySelector('#room_number');
const guests = form.querySelector('#capacity');
const validateRooms = function () {
  return ((rooms.value === guests.value) || (rooms.value === '100' && guests.value === '0')) || (rooms.value - guests.value === 1) || (rooms.value - guests.value === 2)
};

console.log(guests.value)

pristine.addValidator(
  guests, () => (validateRooms()),
  'Неверно указано кол-во гостей'
);

const type = form.querySelector('#type');
const price = form.querySelector('#price');

pristine.addValidator(
  price, (value) => {
    if (type.value === 'bungalow') {
      return value >= 0;
    }
    if (type.value === 'flat') {
      return value >= 1000;
    }
    if (type.value === 'hotel') {
      return value >= 3000;
    }
    if (type.value === 'house') {
      return value >= 5000;
    }
    if (type.value === 'palace') {
      return value >= 10000;
    }
  },
  'Неверно указана цена'
);

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
