import {features} from './util.js';
import {photos} from './util.js';
import {getRandomPositiveInteger} from './get-random-number.js';

export function getFeatures() {
  const maxLength = features.length;
  const lengthOfArray = getRandomPositiveInteger(1, maxLength);
  const array = [];

  while (array.length < lengthOfArray) {
    const indexOfEl = getRandomPositiveInteger(0, maxLength - 1);
    const el = features[indexOfEl];

    if (!array.includes(el)) {
      array.push(el);
    }
  }
  return array;
}

export function getPhotos() {
  const maxLength = photos.length;
  const lengthOfArray = getRandomPositiveInteger(1, maxLength);
  const array = [];

  while (array.length < lengthOfArray) {
    const indexOfEl = getRandomPositiveInteger(0, maxLength - 1);
    const el = photos[indexOfEl];

    if (!array.includes(el)) {
      array.push(el);
    }
  }
  return array;
}

export function getAvatar(id) {
  const numberPhoto = id.toString();
  numberPhoto.padStart(2, '0');
  const linkAvatar = `img/avatars/user${numberPhoto + 1}.png`;

  return linkAvatar;
}