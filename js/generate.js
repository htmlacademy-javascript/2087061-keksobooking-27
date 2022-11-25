import { createAd } from './main.js';
import { features, photos } from './util.js';
import { map, defaultMarkerIcon } from './map.js';

export const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
// export const map = document.querySelector('#map-canvas');
const fragment = document.createDocumentFragment();

export const cardType = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель'
};

export const cardArray = [];

export const renderTemplate = function () {
  for (let i = 0; i < 10; i++) {
    const cardElement = cardTemplate.cloneNode(true);
    const card = createAd(i);
    cardArray.push(createAd(i));
    cardElement.querySelector('.popup__title').textContent = card.offer.title;
    cardElement.querySelector('.popup__text--address').textContent = card.offer.address;
    cardElement.querySelector('.popup__text--price').textContent = `${card.offer.price} ₽/ночь`;
    cardElement.querySelector('.popup__type').textContent = cardType[card.offer.type];
    cardElement.querySelector('.popup__text--capacity').textContent = `${card.offer.rooms} комнаты для ${card.offer.guests} гостей`;
    cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${card.offer.checkin}, выезд до ${card.offer.checkout}`;
    features.forEach((feature) => {
      const featureListItem = cardElement.querySelector(`.popup__feature--${feature}`);
      if (!card.offer.features.includes(feature)) {
        featureListItem.style.display = 'none';
      }
    });
    cardElement.querySelector('.popup__description').textContent = card.offer.description;
    const cardPhotos = cardElement.querySelector('.popup__photos');
    for (let k = 0; k < photos.length; k++) {
      const cardPhotoItem = document.createElement('img');
      cardPhotoItem.classList.add('popup__photo');
      cardPhotoItem.width = '45';
      cardPhotoItem.height = '40';
      cardPhotoItem.src = photos[k];
      cardPhotos.appendChild(cardPhotoItem);
    }
    cardElement.querySelector('.popup__avatar').src = cardArray[i].author.avatar;

    L.marker(
      {
      lat: card.location.lat,
      lng: card.location.lng
      },
      {
        defaultMarkerIcon
      }
    ).addTo(map).bindPopup(cardElement)
  }
};