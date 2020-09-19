document.addEventListener('DOMContentLoaded', () => {

  const forms = document.forms.form;

  const sendForm = (data) => {

    const formText = forms.querySelector('.form__text');
    const popup = document.querySelector('.popup');

    fetch('./code/hhtr.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: data
    })
      .then(success => {
        //Проверка успешного отправления данных
        if (success.ok) {
          formText.classList.add('form__text--success');
          formText.innerHTML = 'Сообщение отправлено!';
          setTimeout(function () {
            popup.classList.remove('popup--active');
          }, 3000)
          setTimeout(function () {
            formText.classList.remove('form__text--success');
            formText.innerHTML = '';
          }, 6000)

          //Получение данных из файла php
          return success.json()
        }
        else {
          formText.classList.add('form__text--error');
          formText.innerHTML = 'Сообщение не отправлено!';
          setTimeout(function () {
            formText.classList.remove('form__text--error');
            formText.innerHTML = '';
          }, 3000)
        }
      })
      .then(function (json) {
        //Обработка полученых данных
        console.log(json)
      })
  }

  //Упаковка данных из полей для отправки на сервер
  forms.addEventListener('submit', function (e) {
    e.preventDefault();
    let data = '';

    for (input of forms.querySelectorAll('input')) {
      data += input.name + '=' + input.value + '&';
    }

    sendForm(data);
    this.reset();
  });
});