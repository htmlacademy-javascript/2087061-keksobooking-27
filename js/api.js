export const getData = (onSuccess) => {
  fetch('https://27.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((createAd) => {
      onSuccess(createAd);
    });
}

export const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://27.javascript.pages.academy/code-and-magick',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail('Не удалось отправить форму. Попробуйте ещё раз');
      }
    })
    .catch(() => {
      onFail('Не удалось отправить форму. Попробуйте ещё раз');
    });
}
