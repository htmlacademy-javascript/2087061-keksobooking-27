// 1 функция

/* Вариант с гугла (https://learn.javascript.ru/task/random-int-min-max)
function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1); Не понимаю почему рандомное число из диапозона берется так, а не как у меня.
  return Math.round(rand);

alert( randomInteger(1, 3) );
}
*/

/* Мой вариант
function randomInteger(from, to) {
  return Math.floor(Math.round(Math.random(from, to)));
}

randomInteger(10, 20);
*/

// 2 функция

/* Вариант с гугла, свой вариант не понимаю как сделать(тот же вопрос что и в 1 варианте)
function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}
getRandomFloat(11, 101);
*/
