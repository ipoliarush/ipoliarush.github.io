(function () {
  const popup = document.querySelector('.popup');
  const close = document.querySelector('.form__close');
  const form = document.forms.form;

  close.onclick = function () {
    popup.classList.remove('popup--active')
  }


  form.addEventListener('click', function (e) {
    if (e.target.dataset.type == 'label')
      e.target.previousElementSibling.focus()
  })


  document.addEventListener('click', function (event) {
    if (event.target.dataset.type == 'popup') {
      event.preventDefault();
      popup.classList.add('popup--active');
    }
  })

}())

