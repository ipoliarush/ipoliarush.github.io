jQuery(document).ready(function() {
  jQuery(window).bind("load", function() {
    //Пример исключения ссылки:
    //jQuery('a[href*="#"]:not([href="#"],[href="#spu-209"],[href="#spu-211"],[href="#spu-212"],[href="#spu-213"],[href="#spu-214"],[href="#spu-215"],[href="#spu-217"])').click(function() {
    jQuery('a:not(.spu-clickable)[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') ||
        location.hostname == this.hostname) {
        var target = jQuery(this.hash);
        target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          jQuery("html, body").animate({
            // $('html, body').animate({
            scrollTop: target.offset().top 
          }, 1000);
          return false;
        }
      }
    });
  });
});

jQuery(window).load(function() {
  function goToByScroll(id) {
    jQuery("html, body").animate({
      scrollTop: jQuery("#" + id).offset().top 
    }, 1000);
  }
  if (window.location.hash != '') {
    goToByScroll(window.location.hash.substr(1));
  }
});