const form = document.querySelector('.ad-form');
const formInput = form.querySelectorAll('.ad-form__element');

const disabledForm = function() {
  form.classList.add('ad-form--disabled');  
  for (let i = 0; i < formInput.length; i++) {
    formInput[i].disabled = true;
  };
}

window.onload = disabledForm();