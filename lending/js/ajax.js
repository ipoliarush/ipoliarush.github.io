function sendAjaxForm(e, t) {

  $.ajax({
    url: t,
    type: "POST",
    dataType: "json",
    data: $("#" + e).serialize(),
    success: function (e) {
      if (e.success) {
        $('.form__text').removeClass('form__text--error');
        $('.form__text').addClass('form__text--success');
        $('.form__text').html('Сообщение отправлено!');
        setTimeout(function () {
          $('.popup').removeClass('popup--active');
        }, 3000)
        setTimeout(function () {
          $('.form__text').removeClass('form__text--success');
          $('.form__text').html('');
        }, 6000)
      }

    },
    error: function (e) {
      $('.form__text').removeClass('form__text--success');
      $('.form__text').addClass('form__text--error');
      $('.form__text').html('Сообщение не отправлено!');
      setTimeout(function () {
        $('.form__text').removeClass('form__text--error');
        $('.form__text').html('');
      }, 3000)
    },
  });

}


$(document).ready(function () {
  $("#btn").click(function () {
    if ($("#fname").val().length != 0 && $("#femail").val().length != 0 && validateEmail($("#femail").val()))
      return sendAjaxForm("form", "js/hhtr.php"), !1;
  });
});

function validateEmail(email) {
  var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return re.test(String(email).toLowerCase());
}