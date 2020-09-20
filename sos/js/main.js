(function () {

  //эффект при фокусе на поле с Email
  const inputEmail = document.querySelector('.form__email')
  inputEmail.onfocus = () => inputEmail.previousElementSibling.classList.add('form__label--focus')
  inputEmail.onblur = () => {
    if (inputEmail.value == '')
      inputEmail.previousElementSibling.classList.remove('form__label--focus')
  }

  //появление списка языков при Hover
  const lang = document.querySelector('.lang__active')
  lang.onmouseenter = lang.nextElementSibling.onmouseenter = () => lang.nextElementSibling.classList.add('lang__list--active')
  lang.onmouseleave = lang.nextElementSibling.onmouseleave = () => lang.nextElementSibling.classList.remove('lang__list--active')


  //Изменение языка
  const langList = document.querySelector('.lang__list')
  langList.onclick = (e) => {
    if (e.target.classList.contains('lang__link')) {
      e.preventDefault()
      const langThis = lang.firstElementChild.innerHTML
      lang.firstElementChild.innerHTML = e.target.innerHTML
      e.target.innerHTML = langThis
    }
  }


  //Скролл по странице
  (function scroll() {
    const anchors = document.querySelectorAll('a[href*="#"]')
    for (let anchor of anchors) {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const blockID = anchor.getAttribute('href').substr(1)
        if (blockID.length > 0 && document.getElementById(blockID))
          document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth'
          })
      })
    }
  }());

  //Accordion
  (function accordion() {
    const accords = document.
  }());

}())