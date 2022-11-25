import { createAd } from './main.js';
import { features, photos } from './util.js';
import { map, defaultMarkerIcon } from './map.js';

export const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
const cardElement = cardTemplate.cloneNode(true);
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
    cardArray.push(createAd(i));
    cardElement.querySelector('.popup__title').textContent = cardArray[i].offer.title;
    cardElement.querySelector('.popup__text--address').textContent = cardArray[i].offer.address;
    cardElement.querySelector('.popup__text--price').textContent = `${cardArray[i].offer.price} ₽/ночь`;
    cardElement.querySelector('.popup__type').textContent = cardType[cardArray[i].offer.type];
    cardElement.querySelector('.popup__text--capacity').textContent = `${cardArray[i].offer.rooms} комнаты для ${cardArray[i].offer.guests} гостей`;
    cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${cardArray[i].offer.checkin}, выезд до ${cardArray[i].offer.checkout}`;
    features.forEach((feature) => {
      const featureListItem = cardElement.querySelector(`.popup__feature--${feature}`);
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
    }
    cardElement.querySelector('.popup__avatar').src = cardArray[i].author.avatar;

    const createBaloon = (
      {
        author: {
          avatar,
        },
        offer: 
        {
          title,
          address,
          price,
          type,
          rooms,
          guests,
          checkin,
          checkout,
          features,
          description,
          photos,
        }
      }
      ) => `
    <article class="popup">
      <img src="${avatar}" class="popup__avatar" width="70" height="70" alt="Аватар пользователя">
      <h3 class="popup__title">${title}</h3>
      <p class="popup__text popup__text--address">${address}</p>
      <p class="popup__text popup__text--price">${price} <span>₽/ночь</span></p>
      <h4 class="popup__type">${type}</h4>
      <p class="popup__text popup__text--capacity">${rooms} комнаты для ${guests} гостей</p>
      <p class="popup__text popup__text--time">Заезд после ${checkin}, выезд до ${checkout}</p>
      <ul class="popup__features">
        ${features}
      </ul>
      <p class="popup__description">${description}</p>
      <div class="popup__photos">
        ${photos}
      </div>
    </article>`
    cardArray.forEach((point) => {
      const address = point;
      const marker = L.marker (
        {
          lat: point.location.lat,
          lng: point.location.lng
        },
        {
          defaultMarkerIcon
        }
      )
      marker.addTo(map).bindPopup(createBaloon(point));
    })
  }
};