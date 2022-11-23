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
  return (rooms.value === guests.value) || (rooms.value === 100 && guests.value === 0);
};

pristine.addValidator(
  rooms, () => {return validateRooms();},
  'Неверно указано кол-во комнат'
);

const type = form.querySelector('#type');
const price = form.querySelector('#price');

pristine.addValidator(
  type, (value) => {
    if (value === 'bungalow') {
      return price.value >= 1000;
    }
    if (value === 'flat') {
      return price.value >= 1000;
    }
    if (value === 'hotel') {
      return price.value >= 3000;
    }
    if (value === 'house') 
    {return price.value >= 5000;
    }
    if (value === 'palace') {
      return price.value >= 10000;
    }
  },
  'Неверно указан тип'
);

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
