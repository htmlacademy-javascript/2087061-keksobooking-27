import { createAd } from './main.js';
import { features, photos } from './util.js';

export const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
const cardElement = cardTemplate.cloneNode(true);
export const map = document.querySelector('#map-canvas');
const fragment = document.createDocumentFragment();

const cardType = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель'
};

export const renderTemplate = function () {
  let cardArray = [];

  for (let i = 0; i < 1; i++) {
    cardArray.push(createAd(i));
    cardElement.querySelector('.popup__title').textContent = cardArray[i].offer.title;
    cardElement.querySelector('.popup__text--address').textContent = cardArray[i].offer.address;
    cardElement.querySelector('.popup__text--price').textContent = `${cardArray[i].offer.price}` + '₽/ночь';
    cardElement.querySelector('.popup__type').textContent = cardType[cardArray[i].offer.type];
    cardElement.querySelector('.popup__text--capacity').textContent = `${cardArray[i].offer.rooms}` + ' комнаты для ' + `${cardArray[i].offer.guests}` + ' гостей';
    cardElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + `${cardArray[i].offer.checkin}` + ', выезд до ' + `${cardArray[i].offer.checkout}`;
    
    const cardFeatures = cardElement.querySelectorAll('.popup__feature');
    features.forEach((feature) => {
      const featureListItem = cardElement.querySelector('.popup__feature--' + feature)
      if (!cardArray[i].offer.features.includes(feature)) {
        featureListItem.style.display = 'none';
      }
    });

    cardElement.querySelector('.popup__description').textContent = cardArray[i].offer.description;
    const cardPhotos = cardElement.querySelector('.popup__photos');
    for (let k = 0; k < photos.length; k++) {
      const cardPhotoItem = document.createElement('img');
      cardPhotoItem.classList.add('popup__photo');
      cardPhotoItem.width = '45';
      cardPhotoItem.height = '40';
      cardPhotoItem.src = photos[k];
      cardPhotos.appendChild(cardPhotoItem);
    };
    
    cardElement.querySelector('.popup__avatar').src = cardArray[i].author.avatar;
    fragment.appendChild(cardElement);
  };
  console.log(cardArray);
  map.appendChild(fragment);
};
