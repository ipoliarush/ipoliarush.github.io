(function () {
  const popup = document.querySelector('.popup');
  const close = document.querySelector('.form__close');

  close.onclick = function () {
    popup.classList.remove('popup--active')
  }

  document.addEventListener('click', function (event) {
    if (event.target.dataset.type == 'popup') {
      event.preventDefault();
      popup.classList.add('popup--active');
    }
  })

}())

