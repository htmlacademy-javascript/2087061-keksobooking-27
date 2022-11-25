import {getRandomPositiveInteger, getRandomPositiveFloat, getRandomArrayElement} from './get-random-number.js';
import {getAvatar, getFeatures, getPhotos} from './get-element.js';
import {type, time} from './util.js';
import { renderTemplate } from './generate.js';
import './form.js';
import './map.js';

export const createAd = (id) => {
  const randomPrice = getRandomPositiveInteger(0, 20000);
  const randomType = getRandomArrayElement(type);
  const randomRooms = getRandomPositiveInteger(0, 100);
  const randomGuests = getRandomPositiveInteger(0, 20);
  const randomTime = getRandomArrayElement(time);
  const randomLat = getRandomPositiveFloat(35.65000, 35.70000, 5);
  const randomLng = getRandomPositiveFloat(139.70000, 139.80000, 5);

  return {
    author: {
      avatar: getAvatar(id + 1),
    },
    offer: {
      title: 'Заголовок',
      address: `${randomLat}, ${randomLng}`,
      price: randomPrice,
      type: randomType,
      rooms: randomRooms,
      guests: randomGuests,
      checkin: randomTime,
      checkout: randomTime,
      features: getFeatures(),
      description: 'Описание',
      photos: getPhotos(),
    },
    location: {
      lat: randomLat,
      lng: randomLng,
    },
  };
};

renderTemplate();
