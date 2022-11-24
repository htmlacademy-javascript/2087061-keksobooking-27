import { form, rooms, guests } from './form.js'
import { map, inputAddress } from './map.js'

// Кнопка отправки формы
const buttonCreateAd = form.querySelector('.ad-form__submit');

// Поля формы
const inputTitle = form.querySelector('#title');
const selectType = form.querySelectorAll('#type');
const inputPrice = form.querySelector('#price');
const selectTimeIn = form.querySelectorAll('#timein');
const selectTimeOut = form.querySelectorAll('#timeout');
const featuresCheckbox = form.querySelectorAll('.features__checkbox')
const description = form.querySelector('#description')

const newAd = {
  title: '',
  address: '',
  type: '',
  price: '',
  timeIn: '',
  timeOut: '',
  rooms: '',
  guests: '',
  features: [],
  description: '',
};

buttonCreateAd.addEventListener('click', function () {
  newAd.title = inputTitle.value;
  newAd.address = inputAddress.value;
  newAd.price = inputPrice.value;
  
  for (let i = 0; i < featuresCheckbox.length; i++) {
    if (featuresCheckbox[i].checked) {
      newAd.features.push(featuresCheckbox[i])
    }
  }


  newAd.description = description.value
  console.log(newAd)
})