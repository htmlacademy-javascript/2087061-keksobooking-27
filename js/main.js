const getRandomPositiveInteger = (a, b) => {
  if (a < 0 || b < 0) {
    return NaN;
  }

  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

getRandomPositiveInteger(0, 5);

// function getRandomPositiveFloat (a, b, digits = 1) {
//   if (a < 0 || b < 0 || digits < 0) {
//     return NaN;
//   }

//   const lower = Math.min(a, b);
//   const upper = Math.max(a, b);

//   // Дальше используем Math.random() для получения случайного дробного числа в диапазоне [0, 1),
//   // которое домножаем на разницу между переданными числами - это будет наша случайная дельта.
//   // После нужно сложить дельту с минимальным значением, чтобы получить итоговое случайное число.
//   const result = Math.random() * (upper - lower) + lower;

//   return +result.toFixed(digits);
// }

// const type = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
// const checkin = ['12:00', '13:00', '14:00'];
// const checkout = ['12:00', '13:00', '14:00'];
// const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

// const author = {
//   avatar: '',
// };

// const offer = {
//   title: '',
//   address: '',
//   price: '',
//   type: type,
//   rooms: '',
//   guests: '',
//   checkin: '',
//   checkout: '',
//   features: '',
//   description: '',
//   photos: '',
// };

// // const location = {
// //   lat: '',
// //   lng: ''
// // };

// // const createAd = () => {
// //   return
// // }
