$(document).ready(function() {
  var cname = '',
    cemail = '',
    cmessage = '';
  $("#btn").click(
    function() {
      cname = $('#cname').val().length;
      cemail = $('#cemail').val().length;
      cmessage = $('#cmessage').val().length;
      if (cname != 0 && cemail != 0 && cmessage != 0) {
        sendAjaxForm('cform', './code/hhtr.php');
        return false;
      }
    }
  );
});

function sendAjaxForm(ajax_form, url) {
  $.ajax({
    url: url,
    type: "POST",
    dataType: "json",
    data: $("#" + ajax_form).serialize(),
    success: function(data) { //Данные отправлены успешно
      if (data.success) {
        swal({
          title: "Все отлично",
          text: "Ваше сообщение отправлено!",
          icon: "success",
        });
      }
    },
    error: function(data) { // Данные не отправлены
      swal({
        title: "Ошибка",
        text: "Ваше сообщение не отправлено!",
        icon: "error",
      });
    }
  });
}
