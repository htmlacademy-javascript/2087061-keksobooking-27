import { sendData } from "./api.js";

export const form = document.querySelector('.ad-form');

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

export const rooms = form.querySelector('#room_number');
export const guests = form.querySelector('#capacity');
const validateRooms = function () {
  return ((rooms.value === guests.value) || (rooms.value === '100' && guests.value === '0')) || (rooms.value - guests.value === 1) || (rooms.value - guests.value === 2);
};

pristine.addValidator(
  guests, () => (validateRooms()),
  'Неверно указано кол-во гостей'
);

const type = form.querySelector('#type');
export const price = form.querySelector('#price');

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

const timein = form.querySelector('#timein')
const timeout = form.querySelector('#timeout')

timein.addEventListener('change', () => {
  timeout.value = timein.value;
});

timeout.addEventListener('change', () => {
  timein.value = timeout.value
});

const submitButton = form.querySelector('.ad-form__submit');

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Сохраняю...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Сохранить';
};

const setUserFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(
        () => {
          onSuccess(),
          unblockSubmitButton()
        },
        () => {
          showAlert('Не удалось отправить форму. Попробуйте ещё раз'),
          unblockSubmitButton()
        },
        new FormData(evt.target),
      );
    }
  });
};
