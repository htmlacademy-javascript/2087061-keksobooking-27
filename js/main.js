// 1 функция

/* Мой вариант (https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random)*/
function randomInteger(from, to) {
  from = Math.ceil(from);
  to = Math.ceil(to);
  return Math.floor(Math.random() * (to - from + 1)) + from;
}

randomInteger();

// 2 функция

function randomFloat(from, to, after = 0) {
  from = Math.ceil(from);
  to = Math.ceil(to);
  const digitsDegree = 10 ** after;
  return ~~((Math.random() * (to - from + 1) + from) * digitsDegree) / digitsDegree;
}

// Для чего нужны ~~ перед скобкой?

randomFloat();
