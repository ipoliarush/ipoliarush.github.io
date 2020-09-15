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
  let e, n;
  $("#btn").click(function () {
    if (((n = $("#fname").val().length), (e = $("#femail").val().length), 0 != e && 0 != n)) return sendAjaxForm("form", "js/hhtr.php"), !1;
  });
});
