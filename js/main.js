const type = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const time = ['12:00', '13:00', '14:00'];
const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const photos = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const getRandomPositiveInteger = (a, b) => {
  if (a < 0 || b < 0) {
    return NaN;
  }

  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

function getRandomPositiveFloat (a, b, digits = 1) {
  if (a < 0 || b < 0 || digits < 0) {
    return NaN;
  }

  const lower = Math.min(a, b);
  const upper = Math.max(a, b);

  // Дальше используем Math.random() для получения случайного дробного числа в диапазоне [0, 1),
  // которое домножаем на разницу между переданными числами - это будет наша случайная дельта.
  // После нужно сложить дельту с минимальным значением, чтобы получить итоговое случайное число.
  const result = Math.random() * (upper - lower) + lower;

  return +result.toFixed(digits);
}

function getFeatures() {
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
} // Функция из гугла, но я постарался максимально разобраться в ней

function getPhotos() {
  const maxLength = photos.length;
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

function getAvatar() {
  for (let i = 0; i < 11; i++) {
    const linkAvatar = `img/avatars/user${i}.png`;
    if (i < 10 && i > 0) {
      i.toString().padStart(2, '0');
    }
  }
}

getAvatar();

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const createAd = () => {
  const randomPrice = getRandomPositiveInteger(0, 20000);
  const randomType = getRandomArrayElement(type);
  const randomRooms = getRandomPositiveInteger(0, 100);
  const randomGuests = getRandomPositiveInteger(0, 20);
  const randomTime = getRandomArrayElement(time);
  const randomLat = getRandomPositiveFloat(35.65000, 35.70000, 5);
  const randomLng = getRandomPositiveFloat(139.70000, 139.80000, 5);

  return {
    author: {
      avatar: getAvatar(),
    },
    offer: {
      title: 'Заголовок',
      address: randomLat + randomLng, // Как можно обратиться к объекту location из этого объекта
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

createAd();
