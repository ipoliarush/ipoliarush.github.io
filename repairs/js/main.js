$('.services__link').click(function(){
  var el = $(this);
  var data = el.attr('data-click');
  if (data.length != 0) {
    $('.work__head').attr('aria-expanded', 'false');
    $('.work__head').addClass('collapsed');
    $('.work__wrap').removeClass('show');
    $('#collapse' + data + 'Scroll').attr('aria-expanded', 'true');
    $('#collapse' + data + 'Scroll').removeClass('collapsed');
    $('#collapse' + data).addClass('show');
  }
  return false;
});

$('.flowing-scroll').click(function () {
  var el = $(this);
  var dest = el.attr('href'); // получаем направление
  if (dest !== undefined && dest !== '') { // проверяем существование
    $('html').animate({
        scrollTop: $(dest).offset().top // прокручиваем страницу к требуемому элементу
      }, 500 // скорость прокрутки
    );
  }
  return false;
});
