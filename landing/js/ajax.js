document.addEventListener('DOMContentLoaded', () => {

  const forms = document.querySelector('.form');

  const sendForm = (data) => {

    const formText = document.querySelector('.form__text');
    const popup = document.querySelector('.popup');

    fetch('./code/hhtr.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: data
    })
      .then(succes => {
        1
        // formText.classList.add('form__text--success');
        // formText.innerHTML('Сообщение отправлено!');
        // setTimeout(function () {
        //   popup.classList.remove('popup--active');
        // }, 3000)
        // setTimeout(function () {
        //   formText.innerHTML('');
        // }, 6000)
      })
      .catch(error => {
        2
        // formText.classList.add('form__text--error');
        // formText.innerHTML('Сообщение не отправлено!');
        // setTimeout(function () {
        //   formText.innerHTML('');
        // }, 3000)
      });
  }

  for (let i = 0; i < forms.length; i++) {
    forms[i].addEventListener('submit', function (e) {
      e.preventDefault();
      const data = new FormData(data);
      sendForm(data);
      this.reset();
    });
  };
});